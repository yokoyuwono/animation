// Gudang VO: daftar semua klip VO yang sudah ada + teks ucapannya.
// Pakai: node tools/vo-gudang.js /tmp/gudang.json  (lalu: python3 tools/rangkai-vo.py /tmp/gudang.json <out-dir> "id|kalimat")
const fs = require('fs');
const files = ['sprites.js','sprites-city.js','sprites-war.js','sprites-money.js','sprites-politik.js','sprites-map.js','sprites-aturan.js','sprites-ta.js','sprites-faces.js'];
const base = files.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n');
const out = {};
for (const f of fs.readdirSync('stories').filter(f => f.endsWith('.js'))) {
  let STORY;
  try { const m = { exports: {} }; new Function('module', base + ';\n' + fs.readFileSync('stories/' + f, 'utf8') + ';module.exports=STORY;')(m); STORY = m.exports; } catch (e) { continue; }
  if (!STORY.audioDir || !fs.existsSync(STORY.audioDir + '/manifest.json')) continue;
  const man = JSON.parse(fs.readFileSync(STORY.audioDir + '/manifest.json'));
  const walk = o => { if (!o || typeof o !== 'object') return; if (o.vo && man[o.vo] && (o.speak || o.caption || o.hook)) out[STORY.audioDir + '/' + o.vo + '.mp3'] = o.speak || o.caption || o.hook; Object.values(o).forEach(walk); };
  walk(STORY);
}
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'klip');
