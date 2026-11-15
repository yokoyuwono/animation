// ============================================================
//  SPRITES — semua gambar pixel art didefinisikan sebagai teks.
//  Setiap huruf = 1 piksel, warnanya diambil dari PALETTE.
//  '.' = transparan.
// ============================================================

const PALETTE = {
  K: '#1a1c2c', // garis hitam
  W: '#f4f4f4', // putih
  w: '#c2c3c7', // abu muda
  S: '#f4c29a', // kulit
  G: '#38b764', // daun
  g: '#257179', // daun gelap
  T: '#8b5a2b', // batang
  t: '#5d3a1a', // batang gelap
  Y: '#ffcd75', // kuning
  O: '#ef7d57', // oranye
  P: '#ff77a8', // pink
  r: '#b13e53', // merah tua
  b: '#3b5dc9', // biru
  c: '#41a6f6', // biru muda
};

// ---------- Karakter manusia (3 frame: diam, jalan A, jalan B) ----------
// Huruf H = rambut, R = baju, B = celana/rok, D = gaun -> diganti per karakter.
const BOY_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '..KSSSSSSK..',
  '..KSKSSKSK..',
  '..KSSSSSSK..',
  '...KSSSSK...',
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '..KBBBBBBK..',
];
const BOY_LEGS = [
  ['..KBBKKBBK..', '..KBK..KBK..', '..KKK..KKK..'], // diam
  ['..KBK..KBK..', '.KBK....KBK.', '.KKK....KKK.'], // jalan A
  ['...KBKKBK...', '...KBKKBK...', '...KKKKKK...'], // jalan B
];

const GIRL_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '..KHSSSSHK..',
  '.KHSKSSKSHK.',
  '.KHSSSSSSHK.',
  '.KHHKSSKHHK.',
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '.KRRRRRRRRK.',
];
const GIRL_LEGS = [
  ['..KKKKKKKK..', '...KSK.KSK..', '...KKK.KKK..'],
  ['..KKKKKKKK..', '..KSK...KSK.', '..KKK...KKK.'],
  ['..KKKKKKKK..', '....KSKSK...', '....KKKKK...'],
];

// Tambah karakter baru cukup di sini: pilih bentuk + warna.
const CHARACTERS = {
  boy:     { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#5d3a1a', R: '#b13e53', B: '#3b5dc9' } },
  girl:    { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#ff77a8', B: '#ff77a8' } },
  grandpa: { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#c2c3c7', R: '#38b764', B: '#5d3a1a' } },
  kid:     { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#ef7d57', R: '#ffcd75', B: '#257179' } },
};

// Kucing (menghadap kanan)
const CAT_BODY = [
  '.......K...K',
  '.......KK.KK',
  'K......KOOOK',
  'OK.KKKKKOKOK',
  'OKOOOOOOOOOK',
  '.KOOOOOOOOK.',
  '.KOOOOOOOOK.',
];
const CAT_LEGS = [
  ['..K.K...K.K.'],
  ['.K.K...K.K..'],
  ['..K.K..K.K..'],
];
CHARACTERS.cat = { body: CAT_BODY, legs: CAT_LEGS, colors: {} };

// ---------- Properti latar ----------
const PROPS = {
  tree: [
    '......GGGG......',
    '....GGGGGGGG....',
    '...GGgGGGGGGG...',
    '..GGGGGGGgGGGG..',
    '.GGGgGGGGGGGGGG.',
    '.GGGGGGGGGGgGGG.',
    'GGgGGGGGGGGGGGGG',
    'GGGGGGgGGGGGGgGG',
    'GGGGGGGGGGGGGGGG',
    '.GGGgGGGGGGGGGG.',
    '.gGGGGGGGgGGGGg.',
    '..gGGGGGGGGGGg..',
    '...ggGGGGGGgg...',
    '.....ggTTgg.....',
    '......TTTT......',
    '......TTTT......',
    '......TTtT......',
    '......TTTT......',
    '.....TTTTTT.....',
  ],
  house: [
    '.........rr.........',
    '........rrrr........',
    '.......rrrrrr.......',
    '......rrrrrrrr......',
    '.....rrrrrrrrrr.....',
    '....rrrrrrrrrrrr....',
    '...rrrrrrrrrrrrrr...',
    '..rrrrrrrrrrrrrrrr..',
    '.rrrrrrrrrrrrrrrrrr.',
    'rrrrrrrrrrrrrrrrrrrr',
    '..WWWWWWWWWWWWWWWW..',
    '..WKKKKWWWWWWKKKKW..',
    '..WKccKWWWWWWKTTKW..',
    '..WKccKWWWWWWKTTKW..',
    '..WKKKKWWWWWWKTYKW..',
    '..WWWWWWWWWWWKTTKW..',
    '..wwwwwwwwwwwKTTKw..',
  ],
  flower: [
    '.P.P.',
    'PPYPP',
    '.PPP.',
    '..G..',
    '.GG..',
    '..GG.',
    '..G..',
  ],
  flower2: [
    '.Y.Y.',
    'YYOYY',
    '.YYY.',
    '..G..',
    '..GG.',
    '.GG..',
    '..G..',
  ],
  bush: [
    '...GGGG.GGG...',
    '.GGGGgGGGGGGG.',
    'GGgGGGGGGgGGGG',
    'GGGGGGGGGGGGgG',
    'gGGGgGGGGGGGGg',
  ],
  fence: [
    '.K....K....K....K.',
    'KWK..KWK..KWK..KWK',
    'KWKKKKWKKKKWKKKKWK',
    'KWwwwwWwwwwWwwwwWK',
    'KWKKKKWKKKKWKKKKWK',
    'KWK..KWK..KWK..KWK',
    'KwK..KwK..KwK..KwK',
  ],
  kite: [
    '...K...',
    '..KrK..',
    '.KrYrK.',
    'KrYYYrK',
    '.KrYrK.',
    '..KrK..',
    '...K...',
    '...K...',
    '..K....',
    '...K...',
  ],
  cloud: [
    '.....WWWW.......',
    '...WWWWWWWW.....',
    '..WWWWWWWWWWWW..',
    '.WWWWWWWWWWWWWW.',
    'WWWWWWWWWWWWWWWW',
    '.wwwwwwwwwwwwww.',
  ],
};

// Burung (2 frame kepak)
const BIRD_FRAMES = [
  ['K.....K', '.K...K.', '..KKK..'],
  ['.......', '..KKK..', '.K...K.', 'K.....K'],
];

// Ikon emosi yang muncul di atas kepala
const EMOTES = {
  heart: [
    '.KK.KK.',
    'KPPKPPK',
    'KPPPPPK',
    '.KPPPK.',
    '..KPK..',
    '...K...',
  ],
  exclaim: ['KK', 'YK', 'YK', 'YK', 'KK', '..', 'KK', 'YK', 'KK'],
  question: [
    '.KKK.',
    'KcccK',
    'K..cK',
    '..cK.',
    '.cK..',
    '.....',
    '.cK..',
  ],
  note: [
    '...KK',
    '...KK',
    '...K.',
    '...K.',
    '.KKK.',
    'KKKK.',
    '.KK..',
  ],
  sweat: ['.c.', 'cc.', 'ccc', 'cWc', '.c.'],
  zzz: [
    'KKKK.....',
    '..K......',
    '.K..KKK..',
    'KKKK.K...',
    '....KKK..',
  ],
};

// Lingkaran pixel (matahari / bulan)
function pixelCircle(d, ch, shade) {
  const rows = [];
  const r = d / 2;
  for (let y = 0; y < d; y++) {
    let row = '';
    for (let x = 0; x < d; x++) {
      const dx = x + 0.5 - r, dy = y + 0.5 - r;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > r) row += '.';
      else if (shade && dist > r - 1.2) row += shade;
      else row += ch;
    }
    rows.push(row);
  }
  return rows;
}

// ---------- Pembuat tekstur ----------
function pxTexture(scene, key, rows, palette) {
  if (scene.textures.exists(key)) return;
  const w = Math.max(...rows.map(r => r.length));
  const h = rows.length;
  const tex = scene.textures.createCanvas(key, w, h);
  const ctx = tex.getContext();
  rows.forEach((row, y) => {
    [...row].forEach((c, x) => {
      const col = palette[c];
      if (!col) return;
      ctx.fillStyle = col;
      ctx.fillRect(x, y, 1, 1);
    });
  });
  tex.refresh();
}

function buildTextures(scene) {
  for (const [name, ch] of Object.entries(CHARACTERS)) {
    const pal = { ...PALETTE, ...ch.colors };
    ch.legs.forEach((legs, i) => pxTexture(scene, `${name}_${i}`, [...ch.body, ...legs], pal));
    if (!scene.anims.exists(`${name}_walk`)) {
      scene.anims.create({
        key: `${name}_walk`,
        frames: [{ key: `${name}_1` }, { key: `${name}_0` }, { key: `${name}_2` }, { key: `${name}_0` }],
        frameRate: 8,
        repeat: -1,
      });
    }
  }
  for (const [name, rows] of Object.entries(PROPS)) pxTexture(scene, name, rows, PALETTE);
  for (const [name, rows] of Object.entries(EMOTES)) pxTexture(scene, `emo_${name}`, rows, PALETTE);
  BIRD_FRAMES.forEach((rows, i) => pxTexture(scene, `bird_${i}`, rows, PALETTE));
  if (!scene.anims.exists('bird_fly')) {
    scene.anims.create({ key: 'bird_fly', frames: [{ key: 'bird_0' }, { key: 'bird_1' }], frameRate: 5, repeat: -1 });
  }
  pxTexture(scene, 'sun', pixelCircle(16, 'Y', 'O'), PALETTE);
  pxTexture(scene, 'moon', pixelCircle(12, 'W', 'w'), PALETTE);
}
