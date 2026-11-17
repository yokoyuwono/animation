// ============================================================
//  SPRITES untuk seri "Andaikan" (politik & ekonomi warga):
//  kursi jabatan, istana, gedung parlemen, warung, pabrik,
//  pompa bensin, tumpukan berkas, bidak partai, spanduk, uang.
//  Semua generik — tanpa logo/merek asli.
// ============================================================

Object.assign(CHARACTERS, {
  siti:    { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#257179', R: '#ffcd75', B: '#5d3a1a' } },   // jilbab teal
  rina:    { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#41a6f6', B: '#333c57' } },   // seragam pabrik
  andi:    { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#ef7d57', B: '#333c57' } },
  menteri: { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#333c57', B: '#1a1c2c' } },   // jas + peci
  investor:{ body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#c2c3c7', R: '#f4f4f4', B: '#1a1c2c' } },
  siluet:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#29366f', R: '#29366f', B: '#29366f', S: '#566c86' } },
  siluet2: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#29366f', R: '#29366f', B: '#29366f', S: '#566c86' } },
  warga:   { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#5d3a1a', R: '#f4f4f4', B: '#3b5dc9' } },
  warga2:  { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#b13e53', B: '#333c57' } },
});

// ---------- kursi jabatan (tampak depan) ----------
const KURSI = [
  '...KKKKKKKK...',
  '..KYYYYYYYYK..',
  '.KYxxxxxxxxYK.',
  '.KYxrxxxxrxYK.',
  '.KYxxxxxxxxYK.',
  '.KYxxxYYxxxYK.',
  '.KYxxxYYxxxYK.',
  '.KYxxxxxxxxYK.',
  '.KYxrxxxxrxYK.',
  '.KYxxxxxxxxYK.',
  'KKYYYYYYYYYYKK',
  'KYKxxxxxxxxKYK',
  'KYKxxxxxxxxKYK',
  'KKKKKKKKKKKKKK',
  '.KYKYYYYYYKYK.',
  '.KYK......KYK.',
  '.KYK......KYK.',
  '.KOK......KOK.',
  '.KKK......KKK.',
];
const recolor = (rows, map) => rows.map(r => [...r].map(c => map[c] || c).join(''));

// ---------- istana (tampak depan) ----------
function makeIstana(w = 56, h = 30) {
  const g = Array.from({ length: h }, () => Array(w).fill('.'));
  const cx = (w - 1) / 2;
  for (let y = 0; y < 8; y++) {                    // atap segitiga
    const hw = 4 + y * 3.3;
    for (let x = 0; x < w; x++) if (Math.abs(x - cx) <= hw) g[y][x] = Math.abs(x - cx) > hw - 1 || y === 0 ? 'K' : 'W';
  }
  for (let y = 3; y <= 5; y++) for (let x = Math.floor(cx) - 1; x <= Math.ceil(cx) + 1; x++) g[y][x] = 'Y';  // lambang
  for (let x = 1; x < w - 1; x++) { g[8][x] = 'K'; g[9][x] = 'w'; g[10][x] = 'K'; }
  for (let y = 11; y < h - 3; y++) for (let x = 2; x < w - 2; x++) {
    const k = (x - 2) % 7;
    g[y][x] = k < 3 ? (k === 0 ? 'w' : 'W') : 'e';                   // tiang putih & bayangan
    if (x === 2 || x === w - 3) g[y][x] = 'K';
  }
  for (let y = h - 11; y < h - 3; y++) for (let x = Math.floor(cx) - 3; x <= Math.ceil(cx) + 3; x++) g[y][x] = (x === Math.floor(cx) - 3 || x === Math.ceil(cx) + 3 || y === h - 11) ? 'K' : 'T';
  for (let i = 0; i < 3; i++) for (let x = 2 - i; x < w - 2 + i; x++) g[h - 3 + i][Math.max(0, Math.min(w - 1, x))] = i === 1 ? 'W' : 'w';
  return g.map(r => r.join(''));
}

// ---------- gedung parlemen kubah hijau terbelah ----------
function makeParlemen(w = 64, h = 36) {
  const g = Array.from({ length: h }, () => Array(w).fill('.'));
  const base = 20, half = w / 2;
  for (let x = 4; x < w - 4; x++) {
    const side = x < half ? (half - 1 - x) : (x - half);     // jarak dari tengah
    const t = side / (half - 5);
    if (t > 1 || side < 1) continue;
    const hh = Math.round(18 * Math.sqrt(Math.max(0, 1 - t * t)));
    for (let y = base - hh; y < base; y++) g[y][x] = y === base - hh ? 'K' : (x % 4 === 0 ? 'g' : 'G');
  }
  for (let y = base; y < h; y++) for (let x = 2; x < w - 2; x++) {
    let c = 'W';
    if (y === base || y === h - 1 || x === 2 || x === w - 3) c = 'K';
    else if ((y - base) % 5 >= 2 && (y - base) % 5 <= 3 && (x - 4) % 5 < 3 && y < h - 2) c = 'c';
    g[y][x] = c;
  }
  for (let x = 0; x < w; x++) g[h - 1][x] = 'w';
  return g.map(r => r.join(''));
}

// ---------- warung ----------
function makeWarung(w = 34, h = 26) {
  const g = Array.from({ length: h }, () => Array(w).fill('.'));
  for (let y = 0; y < 6; y++) for (let x = 0; x < w; x++) g[y][x] = y === 0 ? 'K' : (Math.floor((x + y) / 3) % 2 ? 'x' : 'W');
  for (let x = 0; x < w; x++) if (x % 3 === 1) g[6][x] = g[5][x];        // tepi bergelombang
  for (let y = 6; y < h; y++) { g[y][1] = 'T'; g[y][w - 2] = 'T'; g[y][0] = 'K'; g[y][w - 1] = 'K'; }
  for (let y = 7; y < 15; y++) for (let x = 2; x < w - 2; x++) g[y][x] = 'e';
  const goods = 'YxGcOPYsxG';
  for (const ry of [9, 12]) for (let x = 3; x < w - 3; x += 3) { g[ry][x] = goods[(x + ry) % goods.length]; g[ry][x + 1] = goods[(x + ry) % goods.length]; g[ry + 1][x] = 'K'; g[ry + 1][x + 1] = 'K'; }
  for (let y = 15; y < h; y++) for (let x = 2; x < w - 2; x++) g[y][x] = y === 15 ? 'K' : (y % 3 === 0 ? 't' : 'T');
  return g.map(r => r.join(''));
}

// ---------- pabrik atap gergaji ----------
function makePabrik(w = 46, h = 32) {
  const g = Array.from({ length: h }, () => Array(w).fill('.'));
  for (let y = 0; y < 14; y++) for (let x = 36; x < 40; x++) g[y][x] = y % 5 === 1 ? 'W' : (x === 36 || x === 39 ? 'K' : 'r');  // cerobong
  const top = 6;
  for (let t = 0; t < 4; t++) {
    const x0 = 2 + t * 10;
    for (let y = 0; y < 8; y++) {
      const len = Math.round((y + 1) * 10 / 8);
      for (let x = x0; x < x0 + len && x < w - 2; x++) g[top + y][x] = (x === x0 + len - 1) ? 'c' : (y === 0 ? 'K' : 'a');
    }
  }
  for (let y = top + 8; y < h; y++) for (let x = 2; x < w - 2; x++) {
    let c = 'w';
    if (y === top + 8 || x === 2 || x === w - 3) c = 'K';
    else if (y >= top + 11 && y <= top + 13 && (x - 4) % 6 < 3) c = 'n';
    else if (y >= h - 8 && x >= 18 && x <= 27) c = (x === 18 || x === 27 || y === h - 8) ? 'K' : (x % 2 ? 'e' : 'a');
    g[y][x] = c;
  }
  return g.map(r => r.join(''));
}

// ---------- tumpukan berkas ----------
function makeBerkas(n) {
  const rows = [];
  const cols = ['Y', 's', 'O', 'W'];
  for (let i = 0; i < n; i++) {
    const off = i % 2;
    const c = cols[i % cols.length];
    rows.push(off ? '.KKKKKKKKKK.' : 'KKKKKKKKKK..');
    rows.push(off ? '.K' + c.repeat(8) + 'K.' : 'K' + c.repeat(8) + 'K..');
  }
  rows.push('KKKKKKKKKKK.');
  return rows;
}

const BIDAK = ['..KKK..', '.KCCCK.', '.KCCCK.', '..KCK..', '.KCCCK.', '..KCK..', '.KCCCK.', 'KCCCCCK', 'KKKKKKK'];

const POLITIK_PROPS = {
  kursi: KURSI,
  kursi_abu: recolor(KURSI, { Y: 'a', x: 'w', r: 'a', O: 'e' }),
  istana: makeIstana(),
  parlemen: makeParlemen(),
  warung: makeWarung(),
  pabrik: makePabrik(),
  karpet: Array.from({ length: 4 }, (_, y) => (y === 0 || y === 3 ? 'K' : 'x').repeat(70)),
  pompa: [
    '.KKKKKK..',
    '.KxxxxK..',
    '.KWWWWK..',
    '.KWKKWK.K',
    '.KWWWWKKK',
    '.KxxxxK.K',
    '.KxxxxK.K',
    '.KxYYxK.K',
    '.KxxxxK.K',
    '.KxxxxKKK',
    '.KxxxxK..',
    'KKKKKKKK.',
  ],
  spanduk: [
    'KKKKKKKKKKKK',
    'KWWWWWWWWWWK',
    'KWxxxWxxWxxK',
    'KWWWWWWWWWWK',
    'KWxxWxxxxWWK',
    'KWWWWWWWWWWK',
    'KKKKKTTKKKKK',
    '.....TT.....',
    '.....TT.....',
    '.....TT.....',
    '.....TT.....',
  ],
  duit: ['KKKKKKKKK', 'KxxxxxxxK', 'KxWxYxWxK', 'KxxxxxxxK', 'KKKKKKKKK'],
  tempe_tipis: ['KKKKKK', 'KWsWsK', 'KKKKKK'],
  surat: [
    'KKKKKKKKKKK',
    'KWWWWWWWWWK',
    'KWKKKKKKKWK',
    'KWWWWWWWWWK',
    'KWKKKKKWWWK',
    'KWWWWWWWWWK',
    'KWKKKKKKWWK',
    'KWWWWWWWWWK',
    'KWWWWWxxxWK',
    'KWWWWWxxxWK',
    'KKKKKKKKKKK',
  ],
};
for (let i = 1; i <= 6; i++) POLITIK_PROPS[`berkas_${i}`] = makeBerkas(i * 2);
['x', 'b', 'Y', 'G', 'v', 'O'].forEach((c, i) => { POLITIK_PROPS[`bidak_${i}`] = BIDAK.map(r => r.replace(/C/g, c)); });

function buildPolitikTextures(scene) {
  for (const [name, rows] of Object.entries(POLITIK_PROPS)) pxTexture(scene, name, rows, PALETTE);
}
