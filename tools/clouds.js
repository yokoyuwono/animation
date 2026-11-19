// Jarak antar transisi awan per cerita (perkiraan, pakai durasi VO dari manifest).
// node tools/clouds.js stories/<nama>.js [batas_detik=10]
const fs = require('fs');
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-politik.js', 'sprites-map.js', 'sprites-romawi.js', 'sprites-faces.js'];
const src = SPRITES.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n') + ';\n' + fs.readFileSync(process.argv[2], 'utf8') + ';module.exports=STORY;';
const m = { exports: {} }; new Function('location', 'module', src)({ hash: '' }, m); const STORY = m.exports;
const LIM = +(process.argv[3] || 10) * 1000;
let man = {}; try { man = JSON.parse(fs.readFileSync(`${STORY.audioDir}/manifest.json`, 'utf8')); } catch (e) {}
function dur(st) {
  if (st.together) return Math.max(...st.together.map(dur));
  if (st.vo && man[st.vo]) return man[st.vo] * 1000 + 250;
  if (st.caption) return Math.max(1300, st.caption.length * 62) + 280;
  if (st.title) return (st.dur || 2200) + 800;
  if (st.score) return (st.dur ?? 1200) + 900;
  if (st.receipt) return 300 + (st.lines || []).length * (st.stagger ?? 300) + 900;
  if (st.wait) return st.wait;
  if (st.camera || st.focus) return st.dur ?? 800;
  return st.dur ?? 100;
}
let t = 0, lastCloud = null, n = 0, close = [];
STORY.chapters.forEach(ch => ch.scenes.forEach((sc, i) => {
  if (sc.transition === 'clouds' && (t > 0)) {
    if (lastCloud !== null && t - lastCloud < LIM) close.push(`${ch.id} adegan ${i + 1}: ${((t - lastCloud) / 1000).toFixed(1)}s setelah awan -> mesin memakai 'zoom'`);
    else { lastCloud = t; n++; }
  }
  t += 300 + (sc.steps || []).reduce((a, s) => a + dur(s), 0) + (sc.endPause ?? STORY.endPause ?? 500) + (sc.transition === 'clouds' ? 1100 : 600);
}));
console.log(`${process.argv[2]}: ${n} awan dalam ${(t / 60000).toFixed(1)} menit; ${close.length} diganti zoom (<${LIM / 1000}s)`);
close.forEach(c => console.log('  ' + c));
