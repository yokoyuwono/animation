// Cek "terlalu cepat dibaca": simulasi waktu naskah (tanpa browser) lalu laporkan
// teks layar yang tampil terlalu singkat: kata kunci (kw), label, kartu, balon kata.
//   node tools/readcheck.js stories/<nama>.js            (mode long + short)
// Aturan minimum (ms): kw 900, label 1200, kartu 1800 + 700/baris, balon max(900, 55/huruf).
// Waktu kalimat: durasi VO dari manifest.json (atau perkiraan 60 ms/huruf bila belum bersuara).
const fs = require('fs');
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-politik.js', 'sprites-map.js', 'sprites-aturan.js', 'sprites-kit-kota.js', 'sprites-kit-normal.js', 'sprites-satu-pria.js', 'sprites-faces.js'].filter(f => fs.existsSync('src/' + f));
const src = SPRITES.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n') + ';\n' + fs.readFileSync(process.argv[2], 'utf8') + ';module.exports=STORY;';
const m = { exports: {} }; new Function('module', src)(m); const STORY = m.exports;
let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(`${STORY.audioDir}/manifest.json`, 'utf8')); } catch (e) { /* belum ada suara */ }

const MIN = { kw: 900, label: 1200, say: 900 };
const minCard = st => 1800 + (st.items || []).length * 700;
const endPause = STORY.endPause ?? 500;

function stepDur(st) {
  if (st.wait) return st.wait;
  if (st.title) return (st.dur || 2200) + 400 + (st.keep ? 0 : 400);
  if (st.card) return 160 + (st.items || []).length * 360 + (st.dur ?? 300);
  if (st.camera) return st.dur ?? 1200;
  if (st.move || st.enter || st.exit) return st.dur ?? 1500;
  if (st.emote) return (st.dur || 1100) + 450;
  if (st.say) return st.dur ?? 1500;
  if (st.jump) return (st.times || 1) * 360;
  if (st.shake) return st.shake;
  if (st.label || st.swap || st.pop) return (st.dur ?? 300) + 250;
  if (st.hide || st.show) return st.dur || 400;
  if (st.stamp) return st.dur ?? 200;
  return st.dur ?? 100;
}

function run(mode) {
  const issues = [];
  for (const ch of STORY.chapters) {
    for (const [si, sc] of ch.scenes.entries()) {
      let t = 0;
      const open = [];        // {type, text, start, min, where}
      let kw = null;
      const close = (o, at) => { const d = at - o.start; if (d < o.min) issues.push(`${mode.padEnd(5)} ${ch.id} adegan ${si + 1} · ${o.where} · ${o.type} "${o.text}" tampil ${(d / 1000).toFixed(1)} dtk (min ${(o.min / 1000).toFixed(1)})`); };
      const closeAll = (types, at) => { for (let i = open.length - 1; i >= 0; i--) if (types.includes(open[i].type)) { close(open[i], at); open.splice(i, 1); } };
      const setKw = (text, at, where) => { if (kw) close(kw, at); kw = text ? { type: 'kw', text, start: at, min: MIN.kw, where } : null; };
      const act = (st, at, where) => {      // aksi sesaat (dari cue atau langkah)
        if (st.only && st.only !== mode) return;
        if ('kw' in st) setKw(st.kw, at, where);
        if (st.label) open.push({ type: 'label', text: st.label, start: at, min: MIN.label, where });
        if (st.card) open.push({ type: 'kartu', text: st.card, start: at, min: minCard(st), where });
        if (st.say) { const need = Math.max(MIN.say, (st.text || '').length * 55); if ((st.dur ?? 1500) < need) issues.push(`${mode.padEnd(5)} ${ch.id} adegan ${si + 1} · ${where} · balon "${st.text}" ${(st.dur / 1000).toFixed(1)} dtk (min ${(need / 1000).toFixed(1)})`); }
        if ('clear' in st || 'clearLabels' in st) closeAll(['label', 'kartu'], at);
      };
      const step = (st, t0) => {             // kembalikan durasi
        if (st.only && st.only !== mode) return 0;
        if (st.together) return Math.max(0, ...st.together.map(s => step(s, t0)));
        if (st.caption) {
          const vo = manifest[st.vo] ? manifest[st.vo] * 1000 : 0;
          const total = vo || Math.max(1300, (st.speak || st.caption).length * 60 + 320);
          const hold = vo ? vo + 320 : total;
          const spoken = (st.speak || st.caption).toLowerCase();
          const cues = (st.cues || []).map(c => {
            let f = 0;
            if (typeof c.at === 'number') f = c.at;
            else if (c.at) { const i = spoken.indexOf(c.at.toLowerCase()); f = i < 0 ? 0 : i / Math.max(1, spoken.length); if (i < 0) issues.push(`${mode.padEnd(5)} ${ch.id} · ${st.vo} · cue "${c.at}" tidak ada di teks ucapan`); }
            return [t0 + f * total, c];
          }).sort((a, b) => a[0] - b[0]);
          cues.forEach(([at, c]) => act(c, at, st.vo));
          if (!st.keepKw) setKw(null, t0 + hold, st.vo);   // catatan: keepKw hanya berlaku di level kalimat C(..., { keepKw: true })
          return hold;
        }
        act(st, t0, 'langkah');
        return stepDur(st);
      };
      for (const st of sc.steps) t += step(st, t);
      t += endPause;
      setKw(null, t, 'akhir adegan'); closeAll(['label', 'kartu'], t);
    }
  }
  return issues;
}

const all = [...run('long'), ...run('short')];
const uniq = [...new Set(all.map(s => s.replace(/^(long |short)\s/, '')))];
if (!uniq.length) console.log('OK: semua teks layar cukup lama untuk dibaca.');
else { console.log(`${uniq.length} teks terlalu cepat:`); uniq.forEach(s => console.log(' - ' + s)); process.exitCode = 1; }
