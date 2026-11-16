// ============================================================
//  SPRITES untuk "Paylater vs Menabung":
//  kamar kos (tampak atas), barang, celengan, ikon aplikasi,
//  tagihan, dan stiker reaksi pixel buatan sendiri.
// ============================================================

Object.assign(CHARACTERS, {
  dimas: { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#1a1c2c', R: '#ef7d57', B: '#3b5dc9' } },
  raka:  { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#5d3a1a', R: '#38b764', B: '#333c57' } },
});

// ---------- kamar kos tampak atas ----------
function makeRoom(w, h) {
  const g = Array.from({ length: h }, () => Array(w).fill('T'));
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (y % 6 === 5) g[y][x] = 't';                        // sambungan papan
    if ((x + Math.floor(y / 6) * 7) % 19 === 0 && y % 6 !== 5) g[y][x] = 't';
  }
  const rect = (x0, y0, x1, y1, c, border) => {
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      g[y][x] = border && (x === x0 || x === x1 || y === y0 || y === y1) ? border : c;
    }
  };
  // dinding
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (x < 3 || x >= w - 3 || y < 3 || y >= h - 3) g[y][x] = (x < 1 || x >= w - 1 || y < 1 || y >= h - 1) ? 'K' : 'a';
  }
  // pintu (bawah tengah)
  for (let y = h - 3; y < h; y++) for (let x = Math.floor(w / 2) - 5; x < Math.floor(w / 2) + 5; x++) g[y][x] = 'T';
  // kasur
  rect(5, 5, 22, 30, 'c', 'K');
  rect(7, 7, 20, 11, 'W', 'K');
  for (let y = 14; y < 29; y += 3) for (let x = 6; x < 22; x++) g[y][x] = 'b';
  // meja
  rect(w - 26, 5, w - 6, 14, 's', 'K');
  rect(w - 20, 15, w - 14, 19, 'O', 'K');                   // kursi
  // karpet kecil
  rect(Math.floor(w / 2) - 8, h - 22, Math.floor(w / 2) + 8, h - 12, 'P', 'K');
  return g.map(r => r.join(''));
}

// ---------- barang ----------
const MONEY_PROPS = {
  room: makeRoom(76, 56),
  shoes: [
    '..KKKK......',
    '.KxxxxK.....',
    'KxWWxxxKKKK.',
    'KxxxxxxxxxxK',
    'KWWWWWWWWWWK',
    '.KKKKKKKKKK.',
  ],
  ticket: [
    'KKKKKKKKKKKK',
    'KPPPPPKPPPPK',
    'KPWWWPKPWWPK',
    '.PPPPP.PPPP.',
    'KPWWPPKPWWPK',
    'KPPPPPKPPPPK',
    'KKKKKKKKKKKK',
  ],
  food: [
    '..KKKKKK..',
    '.KOOOOOOK.',
    'KOOWWWWOOK',
    'KOWxxxxWOK',
    'KOOWWWWOOK',
    'KOOOOOOOOK',
    'KOOOOOOOOK',
    'KKKKKKKKKK',
  ],
  bill: [
    'KKKKKKKK',
    'KWWWWWWK',
    'KWKKKKWK',
    'KWWWWWWK',
    'KWKKKWWK',
    'KWWWWWWK',
    'KWxxxxWK',
    'KWxWWxWK',
    'KWxxxxWK',
    'KKKKKKKK',
  ],
  bills: [
    '..KKKKKKKK..',
    '..KWWWWWWK..',
    '.KKKKKKKKKK.',
    '.KWWWWWWWWK.',
    'KKKKKKKKKKKK',
    'KWWxxxxWWWWK',
    'KWWxWWxWKKWK',
    'KWWxxxxWWWWK',
    'KKKKKKKKKKKK',
  ],
  coin: ['.KK.', 'KYYK', 'KYYK', '.KK.'],
  app_a: ['KKKKKKKKK', 'KxxxxxxxK', 'KxxWWWxxK', 'KxWxxxWxK', 'KxWWWWWxK', 'KxWxxxWxK', 'KxWxxxWxK', 'KxxxxxxxK', 'KKKKKKKKK'],
  app_b: ['KKKKKKKKK', 'KvvvvvvvK', 'KvWWWWvvK', 'KvWvvvWvK', 'KvWWWWvvK', 'KvWvvvWvK', 'KvWWWWvvK', 'KvvvvvvvK', 'KKKKKKKKK'],
  app_c: ['KKKKKKKKK', 'KOOOOOOOK', 'KOOWWWWOK', 'KOWOOOOOK', 'KOWOOOOOK', 'KOWOOOOOK', 'KOOWWWWOK', 'KOOOOOOOK', 'KKKKKKKKK'],
};
MONEY_PROPS.phone_broken = WAR_PROPS.phone.map((r, y) => [...r].map((c, x) => (c === 'd' || c === 'W') && (x + y === 8 || x + y === 9 || x - y === 1) ? 'W' : c).join(''));

// celengan kaca, 5 tingkat isi
function makeJar(level) {
  const rows = [
    '..KKKKKK..',
    '..KaaaaK..',
    '.KKKKKKKK.',
    'K........K',
    'K........K',
    'K........K',
    'K........K',
    'K........K',
    'K........K',
    'K........K',
    'K........K',
    '.KKKKKKKK.',
  ];
  const fillFrom = 11 - Math.round(level * 2);
  return rows.map((r, y) => {
    if (y < 3 || y > 10) return r;
    return [...r].map((c, x) => c !== '.' ? c : (y >= fillFrom ? ((x + y) % 3 ? 'Y' : 'O') : (x === 2 ? 'W' : '.'))).join('');
  });
}
for (let i = 0; i <= 4; i++) MONEY_PROPS[`jar_${i}`] = makeJar(i);

// ---------- stiker reaksi (wajah 16x16 dengan tepi putih ala stiker) ----------
function makeSticker(kind) {
  const d = 18, g = Array.from({ length: d }, () => Array(d).fill('.'));
  const c = (d - 1) / 2;
  for (let y = 0; y < d; y++) for (let x = 0; x < d; x++) {
    const r = Math.hypot(x - c, y - c);
    if (r <= 8.6) g[y][x] = 'W';      // tepi stiker
    if (r <= 7.6) g[y][x] = 'K';
    if (r <= 6.7) g[y][x] = 'Y';
  }
  const px = (x, y, col) => { if (g[y] && g[y][x] !== undefined) g[y][x] = col; };
  const line = (x0, x1, y, col) => { for (let x = x0; x <= x1; x++) px(x, y, col); };
  switch (kind) {
    case 'smirk': px(6, 7, 'K'); px(11, 7, 'K'); line(7, 11, 12, 'K'); px(11, 11, 'K'); break;
    case 'cool': line(4, 13, 7, 'K'); line(5, 7, 8, 'K'); line(10, 12, 8, 'K'); line(6, 11, 12, 'K'); px(5, 11, 'K'); px(12, 11, 'K'); break;
    case 'sus': line(5, 7, 5, 'K'); px(6, 8, 'K'); line(10, 12, 6, 'K'); px(11, 8, 'K'); line(7, 10, 12, 'K'); break;
    case 'dizzy': [[5, 6], [7, 8], [5, 8], [7, 6], [10, 6], [12, 8], [10, 8], [12, 6]].forEach(([x, y]) => px(x, y, 'K')); px(6, 7, 'K'); px(11, 7, 'K'); line(7, 10, 12, 'K'); line(7, 10, 13, 'x'); break;
    case 'sweat': px(6, 8, 'K'); px(11, 8, 'K'); line(6, 11, 13, 'K'); px(6, 12, 'K'); px(11, 12, 'K'); px(13, 4, 'c'); px(13, 5, 'c'); px(12, 5, 'c'); px(14, 5, 'c'); px(13, 6, 'c'); break;
    case 'party': px(6, 8, 'K'); px(11, 8, 'K'); line(6, 11, 11, 'K'); line(7, 10, 12, 'x'); px(8, 1, 'x'); line(7, 9, 2, 'x'); line(6, 10, 3, 'P'); px(3, 3, 'm'); px(14, 4, 'G'); break;
    case 'shock': px(6, 7, 'K'); px(11, 7, 'K'); px(6, 6, 'K'); px(11, 6, 'K'); line(8, 9, 11, 'K'); line(8, 9, 13, 'K'); px(7, 12, 'K'); px(10, 12, 'K'); break;
    case 'money': px(6, 7, 'G'); px(11, 7, 'G'); line(5, 7, 6, 'G'); line(10, 12, 6, 'G'); line(6, 11, 12, 'K'); px(5, 11, 'K'); px(12, 11, 'K'); break;
  }
  return g.map(r => r.join(''));
}
['smirk', 'cool', 'sus', 'dizzy', 'sweat', 'party', 'shock', 'money'].forEach(k => { MONEY_PROPS[`stk_${k}`] = makeSticker(k); });

function buildMoneyTextures(scene) {
  for (const [name, rows] of Object.entries(MONEY_PROPS)) pxTexture(scene, name, rows, PALETTE);
}
