// Daftar kalimat voice over (id + teks ucapan) dari file cerita.
//
//   node tools/vo-lines.js stories/x.js            -> semua kalimat (JSON) + total karakter
//   node tools/vo-lines.js stories/x.js --changed   -> HANYA kalimat yang perlu dibuat (baru / teksnya berubah)
//   node tools/vo-lines.js stories/x.js --save      -> catat teks saat ini ke audio/<x>/vo-text.json
//                                                     (jalankan setelah suara dibuat & diunduh)
// Hemat kredit ElevenLabs: buat ulang hanya hasil --changed.
const fs = require('fs');
const path = require('path');
const [file, flag] = process.argv.slice(2);
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-politik.js', 'sprites-map.js', 'sprites-romawi.js', 'sprites-faces.js'];
const src = SPRITES.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n') + ';\n' + fs.readFileSync(file, 'utf8') + ';module.exports=STORY;';
const m = { exports: {} }; new Function('module', src)(m);
const STORY = m.exports;

const out = [];
const walk = st => { if (st.together) st.together.forEach(walk); else if (st.vo) out.push({ id: st.vo, text: st.speak || st.caption || st.hook }); };
const all = [...(STORY.intro || []), ...(STORY.chapters || []).flatMap(c => c.scenes), ...(STORY.scenes || []), ...(STORY.outro || [])];
all.forEach(sc => (sc.steps || []).forEach(walk));

const dir = STORY.audioDir || path.join('audio', path.basename(file, '.js'));
const textFile = path.join(dir, 'vo-text.json');
const saved = fs.existsSync(textFile) ? JSON.parse(fs.readFileSync(textFile, 'utf8')) : {};

if (flag === '--save') {
  const obj = Object.fromEntries(out.filter(l => fs.existsSync(path.join(dir, 'raw', `${l.id}.mp3`))).map(l => [l.id, l.text]));
  fs.writeFileSync(textFile, JSON.stringify(obj, null, 1) + '\n');
  console.error(`tersimpan: ${Object.keys(obj).length} kalimat -> ${textFile}`);
} else {
  const list = flag === '--changed'
    ? out.filter(l => saved[l.id] !== l.text || !fs.existsSync(path.join(dir, 'raw', `${l.id}.mp3`)))
    : out;
  console.log(JSON.stringify(list, null, 1));
  console.error(`${flag === '--changed' ? 'perlu dibuat' : 'total'}: ${list.length} kalimat, ${list.reduce((s, l) => s + l.text.length, 0)} karakter`);
}
