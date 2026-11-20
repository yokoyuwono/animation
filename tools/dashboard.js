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
// Kalimat VO yang belum/perlu dibuat (logika sama dengan tools/vo-lines.js --changed). Tidak memakai kredit.
function voNeeded(st, id) {
  if (!st) return null;
  const out = [];
  const walk = s => { if (s.together) s.together.forEach(walk); else if (s.vo) out.push({ id: s.vo, text: s.speak || s.caption || s.hook }); };
  const all = [...(st.intro || []), ...(st.chapters || []).flatMap(c => c.scenes || []), ...(st.scenes || []), ...(st.outro || [])];
  all.forEach(sc => (sc.steps || []).forEach(walk));
  const dir = st.audioDir || path.join('audio', id);
  const tf = path.join(dir, 'vo-text.json');
  const saved = ex(tf) ? JSON.parse(fs.readFileSync(tf, 'utf8')) : {};
  const need = out.filter(l => saved[l.id] !== l.text || !ex(path.join(dir, 'raw', `${l.id}.mp3`)));
  return { total: out.length, lines: need.length, chars: need.reduce((s, l) => s + (l.text || '').length, 0) };
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
    vo: voNeeded(st, id),
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

const jobs = ex('studio/jobs.json') ? JSON.parse(fs.readFileSync('studio/jobs.json', 'utf8')) : [];
const data = { generated: new Date().toISOString(), stages: STAGES, player: PLAYER, pending: manual.pending || [], videos, history, jobs };
fs.writeFileSync('studio/data.json', JSON.stringify(data));
console.error(`studio/data.json: ${videos.length} video, ${data.pending.length} menunggu keputusan, ${history.length} hari riwayat`);
