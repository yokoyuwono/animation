// Pixel Movie Studio — kumpulkan data dari repo ke studio/data.json (+ thumbnail kecil studio/thumbs/).
//   node tools/dashboard.js
// Data manual (menunggu keputusan, ide, catatan) di studio/manual.json.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
const PLAYER = 'https://claude.ai/artifact/8rpomo7GzqcbnZqkKaTstX';
const ex = p => fs.existsSync(p);
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-politik.js', 'sprites-map.js', 'sprites-faces.js'];
const spriteSrc = SPRITES.filter(f => ex('src/' + f)).map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n');

function loadStory(file) {
  try {
    const m = { exports: {} };
    new Function('module', spriteSrc + ';\n' + fs.readFileSync(file, 'utf8') + ';module.exports=STORY;')(m);
    return m.exports;
  } catch (e) { return null; }
}

// Link unduhan dari DOWNLOADS.md: { topik: { long:[], short:[], thumb:[] } }
// Daftar kalimat VO per bab + status (logika sama dengan tools/vo-lines.js --changed). Tidak memakai kredit.
// Audio ikut diterbitkan ke halaman Studio hanya untuk video yang masih di tahap Suara (belum dirender), agar file tetap sedikit.
const PUBLISH = [];   // file tambahan untuk publish_files: { as, path }
function voLines(st, id, withAudio) {
  if (!st) return null;
  const dir = st.audioDir || path.join('audio', id);
  const tf = path.join(dir, 'vo-text.json');
  const saved = ex(tf) ? JSON.parse(fs.readFileSync(tf, 'utf8')) : {};
  const man = ex(path.join(dir, 'manifest.json')) ? JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8')) : {};
  const lines = [];
  const walk = (s, group, only) => {
    if (s.together) return s.together.forEach(x => walk(x, group, s.only || only));
    if (!s.vo) return;
    const speak = s.speak || s.caption || s.hook || '';
    const screen = s.caption || s.hook || speak;
    const hasRaw = ex(path.join(dir, 'raw', `${s.vo}.mp3`));
    const status = !hasRaw ? 'baru' : (saved[s.vo] != null && saved[s.vo] !== speak) ? 'berubah' : 'ada';
    const file = path.join(dir, `${s.vo}.mp3`);
    let audio = null;
    if (withAudio && status !== 'baru' && ex(file)) { audio = `audio/${id}/${s.vo}.mp3`; PUBLISH.push({ as: audio, path: path.resolve(file) }); }
    lines.push({ id: s.vo, group, screen, speak: speak !== screen ? speak : null, only: s.only || only || null, status, dur: man[s.vo] || null, audio });
  };
  const scenes = (list, group) => (list || []).forEach(sc => (sc.steps || []).forEach(x => walk(x, group, sc.only)));
  scenes(st.intro, 'Pembuka');
  (st.chapters || []).forEach((c, i) => scenes(c.scenes, `Bab ${i + 1}: ${c.title || c.id}`));
  scenes(st.scenes, 'Adegan');
  scenes(st.outro, 'Penutup');
  const seen = new Set(); const uniq = lines.filter(l => !seen.has(l.id) && seen.add(l.id));
  const need = uniq.filter(l => l.status !== 'ada');
  return { lines: uniq, summary: { total: uniq.length, lines: need.length, chars: need.reduce((a, l) => a + (l.speak || l.screen).length, 0) } };
}

function parseDownloads() {
  const out = {}; if (!ex('DOWNLOADS.md')) return out;
  let topic = null, sec = null;
  for (const line of fs.readFileSync('DOWNLOADS.md', 'utf8').split('\n')) {
    let m;
    if ((m = line.match(/^## (\S+)/))) { topic = m[1]; out[topic] = { long: [], short: [], thumb: [] }; sec = null; }
    else if (/\*\*Video panjang/.test(line)) sec = 'long';
    else if (/\*\*Short/.test(line)) sec = 'short';
    else if (/\*\*Thumbnail/.test(line)) sec = 'thumb';
    else if (topic && sec && (m = line.match(/^- \[([^\]]+)\]\(([^)]+)\)/))) out[topic][sec].push({ name: m[1], url: m[2] });
  }
  return out;
}

function gitDate(paths) {
  try { return execSync(`git log -1 --format=%ad --date=short -- ${paths.join(' ')}`, { encoding: 'utf8' }).trim() || null; }
  catch (e) { return null; }
}

function thumbs(id) {
  const all = ex('renders') ? fs.readdirSync('renders').filter(f => f.startsWith(`thumbnail_${id}_`) && f.endsWith('.png')) : [];
  const rank = f => /nanobanana/.test(f) ? 0 : /ilustrasi/.test(f) ? 1 : /varian/.test(f) ? 2 : /16x9/.test(f) ? 3 : 9;
  all.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  fs.mkdirSync('studio/thumbs', { recursive: true });
  return all.filter(f => !/9x16/.test(f)).map(f => {
    const out = `thumbs/${f.replace(/\.png$/, '.jpg')}`;
    const dst = path.join('studio', out);
    if (!ex(dst) || fs.statSync(dst).mtimeMs < fs.statSync('renders/' + f).mtimeMs)
      execSync(`convert "renders/${f}" -resize 640x360 -quality 78 "${dst}"`);
    return { src: out, label: f.replace(`thumbnail_${id}_`, '').replace('.png', '') };
  });
}

// Bahan unggah dari stories/<id>.publish.md: judul & deskripsi YouTube, caption per short, hashtag per platform.
function parsePublish(txt, id, dl) {
  if (!txt) return null;
  const sec = name => { const m = txt.split(/^## /m).find(x => x.startsWith(name)); return m || ''; };
  const yt = sec('YouTube (');
  const titleM = yt.match(/\*\*Judul[^\n]*\n((?:- .*\n?)+)/);
  const descM = yt.match(/\*\*Deskripsi[^\n]*\n```\n?([\s\S]*?)```/);
  const tagsM = yt.match(/\n(#[^\n`]+)\s*$/m);
  const sh = sec('YouTube Shorts');
  const caps = {};
  for (const m of sh.matchAll(/^\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|\s*$/gm)) caps[m[1].replace(/^.*_short_/, '').replace('.mp4', '')] = m[2];
  const tag = k => { const m = sh.match(new RegExp(`- ${k}:\\s*\`([^\`]+)\``)); return m ? m[1] : ''; };
  const pin = (sh.match(/\*\*Komentar sematan[^*]*\*\*\s*(.+)/) || [])[1] || '';
  const items = [];
  const long = dl.long.find(l => /16x9/.test(l.name));
  if (long) items.push({ key: 'long', label: 'Video panjang 16:9', file: long.url, platforms: ['youtube'],
    title: titleM ? titleM[1].split('\n')[0].replace(/^- /, '').trim() : '', caption: descM ? descM[1].trim() : '', tags: { youtube: tagsM ? tagsM[1].trim() : '' } });
  for (const s of dl.short) {
    const k = s.name.replace(/^.*_short_/, '').replace('.mp4', '');
    items.push({ key: 'short:' + k, label: 'Short ' + k, file: s.url, platforms: ['shorts', 'tiktok', 'reels'],
      caption: caps[k] || '', tags: { shorts: tag('Shorts'), tiktok: tag('TikTok'), reels: tag('Reels') } });
  }
  return { items, pin };
}

const STAGES = ['Ide', 'Naskah', 'Animasi', 'Suara', 'Render', 'Siap unggah'];
const downloads = parseDownloads();
const manual = ex('studio/manual.json') ? JSON.parse(fs.readFileSync('studio/manual.json', 'utf8')) : {};
const videos = [];

for (const f of fs.readdirSync('stories').filter(f => f.endsWith('.js'))) {
  const id = f.replace('.js', '');
  if ((manual.hidden || []).includes(id)) continue;
  const st = loadStory('stories/' + f);
  const naskahP = `stories/${id}.naskah.md`, publishP = `stories/${id}.publish.md`;
  const hasAudio = ex(`audio/${id}/manifest.json`);
  const dl = downloads[id] || { long: [], short: [], thumb: [] };
  const th = thumbs(id);
  let stage = 2;                                   // file cerita ada = Animasi
  if (hasAudio) stage = 3;
  if (dl.long.length) stage = 4;
  if (dl.long.length && ex(publishP) && th.length) stage = 5;
  const chapters = (st && st.chapters || []).map((c, i) => ({
    id: c.id, title: c.title || `Bab ${i + 1}`,
    play: `${PLAYER}#${id}--v--${c.id}`,
    short: (dl.short.find(s => s.name.endsWith(`_short_${c.id}.mp4`)) || {}).url || null,
  }));
  const ov = (manual.overrides || {})[id] || {};
  videos.push({
    id, title: (st && st.title) || id,
    stage: ov.stage != null ? STAGES.indexOf(ov.stage) : stage,
    note: ov.note || null,
    updated: gitDate([`stories/${id}.*`, `audio/${id}`, `renders/*${id}*`]),
    thumbs: th,
    play: { h: `${PLAYER}#${id}--h`, v: `${PLAYER}#${id}--v` },
    long: dl.long, shorts: dl.short.map(s => ({ ...s, chapter: s.name.replace(/^.*_short_/, '').replace('.mp4', '') })),
    chapters,
    ...(() => { const vl = voLines(st, id, (ov.stage != null ? STAGES.indexOf(ov.stage) : stage) === 3); return vl ? { vo: vl.summary, lines: vl.lines } : { vo: null, lines: [] }; })(),
    music: st && st.sfx ? true : false,
    upload: parsePublish(ex(publishP) ? fs.readFileSync(publishP, 'utf8') : null, id, dl),
    naskah: ex(naskahP) ? fs.readFileSync(naskahP, 'utf8') : null,
    publish: ex(publishP) ? fs.readFileSync(publishP, 'utf8') : null,
  });
}
for (const idea of manual.ideas || []) videos.push({ id: idea.id, title: idea.title, stage: 0, note: idea.note || null, updated: idea.date || null, thumbs: [], chapters: [], long: [], shorts: [], naskah: null, publish: null });
videos.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));

let history = [];
try {
  const log = execSync('git log --since="60 days ago" --format="%ad|%s" --date=short', { encoding: 'utf8' }).trim().split('\n');
  const byDay = {};
  for (const l of log) { const [d, ...s] = l.split('|'); (byDay[d] = byDay[d] || []).push(s.join('|')); }
  history = Object.entries(byDay).map(([date, items]) => ({ date, items }));
} catch (e) {}

// Pustaka musik & efek bersama
const SFX_DIR = 'audio/_shared/sfx';
const sfx = ex(SFX_DIR) ? fs.readdirSync(SFX_DIR).filter(f => f.endsWith('.mp3')).map(f => {
  const as = `${SFX_DIR}/${f}`; PUBLISH.push({ as, path: path.resolve(as) }); return { name: f.replace('.mp3', ''), src: as };
}) : [];
const credits = ex('studio/credits.json') ? JSON.parse(fs.readFileSync('studio/credits.json', 'utf8')) : null;
const voice = { name: 'Fikri - Warm & Steady Storyteller', model: 'eleven_v4', speed: 1.2, generations: 1 };
const schedule = ex('studio/schedule.json') ? JSON.parse(fs.readFileSync('studio/schedule.json', 'utf8')) : [];
const jobs = ex('studio/jobs.json') ? JSON.parse(fs.readFileSync('studio/jobs.json', 'utf8')) : [];
const data = { generated: new Date().toISOString(), stages: STAGES, player: PLAYER, pending: manual.pending || [], videos, history, jobs, sfx, credits, voice, schedule };
fs.writeFileSync('studio/data.json', JSON.stringify(data));
// Daftar file untuk diterbitkan (publish_files): halaman + data + thumbnail + audio pratinjau
const thumbFiles = fs.readdirSync('studio/thumbs').map(f => ({ as: `thumbs/${f}`, path: path.resolve('studio/thumbs', f) }));
fs.writeFileSync('studio/publish-files.json', JSON.stringify([
  { as: 'index.html', path: path.resolve('studio/index.html') }, { as: 'data.json', path: path.resolve('studio/data.json') },
  ...thumbFiles, ...PUBLISH], null, 1));
console.error(`studio/publish-files.json: ${2 + thumbFiles.length + PUBLISH.length} file`);
console.error(`studio/data.json: ${videos.length} video, ${data.pending.length} menunggu keputusan, ${history.length} hari riwayat`);
