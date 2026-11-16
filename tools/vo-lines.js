// Mengambil semua baris voice over (vo id + teks ucapan) dari file cerita
const fs = require('fs');
const SPRITES = ['sprites.js', 'sprites-city.js', 'sprites-war.js', 'sprites-money.js', 'sprites-faces.js'];
const src = SPRITES.map(f => fs.readFileSync('src/' + f, 'utf8')).join(';\n') + ';\n' + fs.readFileSync(process.argv[2], 'utf8') + ';module.exports=STORY;';
const m = { exports: {} }; new Function('module', src)(m);
const out = [];
const walk = st => { if (st.together) st.together.forEach(walk); else if (st.vo) out.push({ id: st.vo, text: st.speak || st.caption || st.hook }); };
const all = [...(m.exports.intro||[]), ...m.exports.chapters.flatMap(c => c.scenes), ...(m.exports.outro||[])];
all.forEach(sc => sc.steps.forEach(walk));
console.log(JSON.stringify(out, null, 1));
console.error('total karakter:', out.reduce((s, l) => s + l.text.length, 0));
