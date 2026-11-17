const fs = require('fs');
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-politik.js', 'sprites-faces.js'];
const src = SPRITES.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n') + ';\n' + fs.readFileSync(process.argv[2], 'utf8') + ';module.exports=STORY;';
const m = { exports: {} }; new Function('module', src)(m); const STORY = m.exports;
const VIS = ['camera','focus','card','chart','route','block','ping','blackout','swap','move','enter','label','badge','hook','title','restoreColor','emote','raise','shake','convert','glow','alpha','haze'];
function dur(st) {
  if (st.together) return Math.max(...st.together.map(dur));
  if (st.caption) return (st.dur ?? Math.max(1300, st.caption.length * 62)) + 280;
  if (st.hook) return (st.dur ?? Math.max(1800, st.hook.length * 60)) + 460;
  if (st.title) return (st.dur || 2200) + 400 + (st.keep ? 0 : 400);
  if (st.wait) return st.wait;
  if (st.card) return 160 + (st.items||[]).length * ((st.stagger ?? 220) + 140) + (st.dur ?? 300);
  if (st.chart) return 160 + 900 + (st.dur ?? 300);
  if (st.camera || st.focus) return st.dur ?? (st.camera ? 1200 : 800);
  if (st.route) return st.dur ?? 1200;
  if (st.move) return st.dur ?? 3000;
  if (st.emote) return (st.dur || 1100) + 450;
  if (st.label || st.badge || st.ping || st.block || st.swap) return (st.dur ?? 300) + 300;
  return st.dur ?? 300;
}
function isVis(st) { return st.together ? st.together.some(isVis) : VIS.some(k => k in st); }
const chapters = [{ id: 'intro', scenes: STORY.intro || [] }, ...STORY.chapters, { id: 'outro', scenes: STORY.outro || [] }];
let total = 0;
for (const ch of chapters) {
  let t = 0, last = 0, maxGap = 0, gapAt = '', events = 0, caps = 0;
  for (const sc of ch.scenes) {
    t += 700; last = t; events++; // ganti adegan = peristiwa visual
    for (const st of sc.steps) {
      const d = dur(st);
      if (isVis(st)) { const g = t - last; if (g > maxGap) { maxGap = g; gapAt = JSON.stringify(st).slice(0, 60); } last = t; events++; }
      if (st.caption || (st.together && st.together.some(s => s.caption))) caps++;
      t += d;
    }
  }
  const g = t - last; if (g > maxGap) { maxGap = g; gapAt = '(akhir bab)'; }
  total += t;
  console.log(`${ch.id.padEnd(6)} ${(t/1000).toFixed(0).padStart(3)}s  peristiwa visual: ${String(events).padStart(2)} (tiap ${(t/1000/events).toFixed(1)}s)  narasi: ${caps}  jeda visual terlama: ${(maxGap/1000).toFixed(1)}s sebelum ${gapAt}`);
}
console.log('TOTAL ≈', Math.floor(total/60000) + 'm' + Math.round(total/1000 % 60) + 's');
