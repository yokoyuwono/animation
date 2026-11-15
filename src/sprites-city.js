// ============================================================
//  SPRITES tambahan untuk video explainer: motor, kota,
//  pembangkit listrik, baterai, tambang, energi terbarukan, bumi.
// ============================================================

Object.assign(PALETTE, {
  e: '#566c86', // knalpot / abu gelap
  a: '#94b0c2', // abu biru
  d: '#333c57', // aspal / gelap
  n: '#29366f', // biru tua
  m: '#73eff7', // cyan
});

// ---------- Motor (menghadap kanan) ----------
// H = helm, R = jaket, B = celana, M = bodi motor, E = knalpot, L = stiker
const MOTOR = [
  '..........KKK.......',
  '.........KHHHK......',
  '.........KHHmm......',
  '..........KSK.......',
  '.........KRRK...K...',
  '........KRRRRSSK....',
  '........KRRRK..K....',
  '.......KBBBBKKKMK...',
  '..EKKKKBBBBMMLLMK...',
  '.EEKMMMMMMMMLLMMK...',
  '..KKK.KKKKKKKKKKKK..',
  '.KwwwK.......KwwwK..',
  '.KwKwK.......KwKwK..',
  '.KwwwK.......KwwwK..',
  '..KKK.........KKK...',
];
const MOTOR_GAS = [
  { H: '#f4f4f4', R: '#3b5dc9', B: '#1a1c2c', M: '#b13e53', E: '#566c86', L: '#b13e53' },
  { H: '#ffcd75', R: '#38b764', B: '#333c57', M: '#333c57', E: '#566c86', L: '#333c57' },
  { H: '#b13e53', R: '#5d3a1a', B: '#29366f', M: '#ef7d57', E: '#566c86', L: '#ef7d57' },
];
const MOTOR_EV = [
  { H: '#f4f4f4', R: '#3b5dc9', B: '#1a1c2c', M: '#38b764', E: '', L: '#ffcd75' },
  { H: '#ffcd75', R: '#38b764', B: '#333c57', M: '#41a6f6', E: '', L: '#ffcd75' },
  { H: '#b13e53', R: '#5d3a1a', B: '#29366f', M: '#73eff7', E: '', L: '#ffcd75' },
];

// ---------- Generator gedung ----------
function makeBuilding(w, h, wall, win, seed) {
  const rows = [];
  for (let y = 0; y < h; y++) {
    let r = '';
    for (let x = 0; x < w; x++) {
      if (x === 0 || x === w - 1 || y === 0) r += 'K';
      else if (y >= 2 && y < h - 3 && x % 3 !== 0 && (y % 4 === 2 || y % 4 === 3)) {
        r += ((x * 7 + y * 3 + seed) % 5 === 0) ? 'd' : win; // sebagian jendela gelap
      } else if (y >= h - 4 && x > w / 2 - 2 && x < w / 2 + 2) r += 'd'; // pintu
      else r += wall;
    }
    rows.push(r);
  }
  return rows;
}

// ---------- PLTU batu bara ----------
function makePowerPlant() {
  const w = 40, h = 46, rows = [];
  for (let y = 0; y < h; y++) {
    let r = '';
    for (let x = 0; x < w; x++) {
      const chim = x >= 30 && x <= 36;
      if (chim) {
        if (x === 30 || x === 36) r += 'K';
        else r += (y < 10 && Math.floor(y / 3) % 2 === 0) ? 'r' : 'a';
      } else if (y >= 22 && x < 30) {
        const roof = y - 22;
        if (roof < 4) r += (x >= 4 - roof && x < 30) ? (roof === 0 || x === 4 - roof ? 'K' : 'e') : '.';
        else if (x === 0 || x === 29 || y === h - 1) r += 'K';
        else if (y >= 30 && y < 34 && x % 5 >= 1 && x % 5 <= 3) r += 'Y';
        else if (y >= 40 && x >= 12 && x <= 17) r += 'd';
        else r += 'a';
      } else if (y >= 14 && x >= 22 && x < 30) {
        r += (x === 22 || y === 14) ? 'K' : 'e'; // menara kecil
      } else r += '.';
    }
    rows.push(r);
  }
  return rows;
}

// ---------- Menara listrik (SUTET) ----------
const PYLON = [
  '......K......',
  '.....KKK.....',
  'KKKKKKKKKKKKK',
  '.K...KKK...K.',
  '.....KKK.....',
  '....K.K.K....',
  'KKKKKKKKKKKKK',
  '.K..K.K.K..K.',
  '....K.K.K....',
  '...K..K..K...',
  '...KK.K.KK...',
  '...K.KKK.K...',
  '...K..K..K...',
  '..K..K.K..K..',
  '..K.K...K.K..',
  '..KK.....KK..',
  '..K.K...K.K..',
  '.K...K.K...K.',
  '.K....K....K.',
  '.K...K.K...K.',
  'K...K...K...K',
  'K..K.....K..K',
  'KKK.......KKK',
];

// ---------- Bumi ----------
function makeEarth(d) {
  const rows = [], r = d / 2;
  for (let y = 0; y < d; y++) {
    let row = '';
    for (let x = 0; x < d; x++) {
      const dx = x + 0.5 - r, dy = y + 0.5 - r, dist = Math.hypot(dx, dy);
      if (dist > r) { row += '.'; continue; }
      if (dist > r - 1) { row += 'K'; continue; }
      if (y < 4 || y > d - 5) { row += 'W'; continue; }
      const n = Math.sin(x * 0.35) + Math.sin(y * 0.28 + x * 0.12) + Math.cos((x - y) * 0.21) * 0.8;
      const shade = dx + dy > r * 0.6; // sisi gelap
      if (n > 0.45) row += shade ? 'g' : 'G';
      else row += shade ? 'b' : 'c';
    }
    rows.push(row);
  }
  return rows;
}

// Baling-baling turbin angin (3 bilah)
function makeBlades(d) {
  const grid = Array.from({ length: d }, () => Array(d).fill('.'));
  const c = (d - 1) / 2;
  [-90, 30, 150].forEach(deg => {
    const a = deg * Math.PI / 180;
    for (let t = 1; t <= c; t += 0.5) {
      const x = Math.round(c + Math.cos(a) * t), y = Math.round(c + Math.sin(a) * t);
      grid[y][x] = 'W';
      const px = Math.round(c + Math.cos(a) * t - Math.sin(a)), py = Math.round(c + Math.sin(a) * t + Math.cos(a));
      if (t < c * 0.75 && grid[py] && grid[py][px] !== undefined) grid[py][px] = 'w';
    }
  });
  grid[Math.round(c)][Math.round(c)] = 'K';
  return grid.map(r => r.join(''));
}

const CITY_PROPS = {
  building1: makeBuilding(16, 34, 'e', 'Y', 1),
  building2: makeBuilding(20, 46, 'a', 'c', 2),
  building3: makeBuilding(14, 26, 'r', 'Y', 3),
  building4: makeBuilding(18, 40, 'n', 'm', 4),
  plant: makePowerPlant(),
  pylon: PYLON,
  earth: makeEarth(48),
  blades: makeBlades(25),
  turbine: [
    '.KKK.', '.KwK.', '..W..', '..W..', '..W..', '..W..', '..W..', '..W..', '..W..', '..W..',
    '..W..', '..W..', '.WW..', '.WW..', '.WW..', '.WW..', '.WW..', '.WW..', '.WWw.', '.WWw.',
    '.WWw.', '.WWw.', '.WWw.', '.WWw.', 'WWWw.', 'WWWw.', 'WWWw.', 'WWWw.', 'KKKKK',
  ],
  solar: [
    '.....KKKKKKKKKKKK',
    '....KcbbKcbbKcbbK',
    '...KcbbKcbbKcbbK.',
    '..KKKKKKKKKKKKKK.',
    '..KcbbKcbbKcbbK..',
    '.KcbbKcbbKcbbK...',
    'KKKKKKKKKKKKKK...',
    '.......KK........',
    '.......KK........',
    '......KKKK.......',
  ],
  charger: [
    '.KKKKK.',
    'KGGGGGK',
    'KGKKKGK',
    'KGKmKGK',
    'KGKKKGK',
    'KGGGGGK',
    'KGGYGGK',
    'KGYYGGK',
    'KGGYYGK',
    'KGGYGGK',
    'KGGGGGK',
    'KGGGGGK',
    'KgggggK',
    'KKKKKKK',
  ],
  battery: [
    '...KKKK...',
    '..KwwwwK..',
    'KKKKKKKKKK',
    'KwwwwwwwwK',
    'KwGGGGGGwK',
    'KwGGGGGGwK',
    'KwwwwwwwwK',
    'KwGGGGGGwK',
    'KwGGGGGGwK',
    'KwwwwwwwwK',
    'KwGGGGGGwK',
    'KwGGGGGGwK',
    'KwwwwwwwwK',
    'KwGGGGGGwK',
    'KwGGGGGGwK',
    'KKKKKKKKKK',
  ],
  excavator: [
    '................KK....',
    '...............KYYK...',
    '..............KYYKYK..',
    '.............KYYK.KYK.',
    '..KKKKKKK...KYYK...KYK',
    '..KccKYYYK.KYYK....KKK',
    '..KccKYYYYKYYK....KeeK',
    '..KKKKYYYYYYK.....KeeK',
    '.KYYYYYYYYYYK......KK.',
    '.KYYYYYYYYYYK.........',
    'KKKKKKKKKKKKKK........',
    'KeeeeeeeeeeeeK........',
    'KeKeKeKeKeKeeK........',
    '.KKKKKKKKKKKK.........',
  ],
  rocks: [
    '......KKKK......',
    '....KKtTTTKK....',
    '...KtTTeTTTTK...',
    '..KTTtTTTTtTTK..',
    '.KTtTTeTtTTTTtK.',
    'KTTTTtTTTTTeTTTK',
    'KKKKKKKKKKKKKKKK',
  ],
  stump: [
    '..KKKKK..',
    '.KtTTTtK.',
    '.KTtTtTK.',
    'KKTTTTTKK',
  ],
  lamp: [
    'KKKKK.',
    'KYYYK.',
    '.KKK..',
    '..K...', '..K...', '..K...', '..K...', '..K...', '..K...', '..K...',
    '..K...', '..K...', '..K...', '..K...', '..K...', '..K...', '..K...',
    '.KKK..',
  ],
  trafficlight: [
    'KKKKK',
    'KrrrK',
    'KKKKK',
    'KdddK',
    'KKKKK',
    'KdddK',
    'KKKKK',
    '..K..', '..K..', '..K..', '..K..', '..K..', '..K..', '..K..', '..K..', '..K..', '..K..',
    '.KKK.',
  ],
  puff: ['.ww.', 'wwww', 'wwww', '.ww.'],
  puffdark: ['.ee.', 'eeee', 'eeee', '.ee.'],
  spark: ['..Y..', '.YWY.', 'YWWWY', '.YWY.', '..Y..'],
};

function buildCityTextures(scene) {
  for (const [name, rows] of Object.entries(CITY_PROPS)) pxTexture(scene, name, rows, PALETTE);
  pxTexture(scene, 'earth_smog', pixelCircle(48, 'O'), { O: '#8a7f6a' });
  MOTOR_GAS.forEach((c, i) => pxTexture(scene, `motor_gas_${i}`, MOTOR, { ...PALETTE, ...c, E: c.E || undefined }));
  MOTOR_EV.forEach((c, i) => pxTexture(scene, `motor_ev_${i}`, MOTOR, { ...PALETTE, ...c, E: undefined }));
}
