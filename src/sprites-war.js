// ============================================================
//  SPRITES untuk video "Perang Dunia & Indonesia":
//  peta, kapal, pesawat, bendera, karang, kilang, server, ATM,
//  HP, pangan, tokoh tentara/diplomat/pekerja.
// ============================================================

Object.assign(PALETTE, {
  x: '#e43b44', // merah bendera
  v: '#7a3b9e', // ungu (ubi)
  s: '#d9c08c', // pasir / roti
  q: '#2a4f8f', // biru bendera blok
});

// ---------- Tokoh tambahan (pakai bentuk anak laki-laki) ----------
Object.assign(CHARACTERS, {
  soldier:   { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#257179', R: '#38b764', B: '#257179' } },
  peace:     { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#41a6f6', R: '#38b764', B: '#257179' } },
  worker:    { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#1a1c2c', R: '#8b5a2b', B: '#5d3a1a' } },
  diplomat:  { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#1a1c2c', R: '#333c57', B: '#333c57' } },
  diplomat2: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#29366f', B: '#29366f' } },
});

// ---------- Kendaraan ----------
const WAR_PROPS = {
  ship_s: ['..K..', 'KWWWK', '.KKK.'],
  ship_red: ['..K..', 'KxxxK', '.KKK.'],
  tanker: [
    '..........................KK....',
    '..........................KWK...',
    '.....................KKKKKKWK...',
    '.....................KWWWWWWK...',
    '.....................KWcWcWWK...',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KrrrrrrrrrrrrrrrrrrrrrrrrrrrrrK.',
    '.KrrrrrrrrrrrrrrrrrrrrrrrrrrrK..',
    '..KdddddddddddddddddddddddddK...',
    '...KKKKKKKKKKKKKKKKKKKKKKKKK....',
  ],
  patrol: [
    '..............K.............',
    '.............KaK............',
    '..........KKKKaKKK..........',
    '..........KaaaaaaK..........',
    '....K.....KacacaaK....KK....',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KaaaaaaaaaaaaaaaaaaaaaaaaaK.',
    '.KaaaaaaaaaaaaaaaaaaaaaaaK..',
    '..KeeeeeeeeeeeeeeeeeeeeeK...',
    '...KKKKKKKKKKKKKKKKKKKKKK...',
  ],
  warship_old: [
    '............K..K............',
    '...........KeKKeK...........',
    '........KKKKeeeeKKK.........',
    '..KK....KeeeeeeeeeK....KK...',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KeeeeeeeeeeeeeeeeeeeeeeeeeK.',
    '.KeeeeeeeeeeeeeeeeeeeeeeeK..',
    '..KKKKKKKKKKKKKKKKKKKKKKKK..',
  ],
  barge: [
    '.......KKKKKKKKKK.........',
    '.....KKddKKdKKddKKK.......',
    'KKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KOOOOOOOOOOOOOOOOOOOOOOOK.',
    '.KOOOOOOOOOOOOOOOOOOOOOK..',
    '..KKKKKKKKKKKKKKKKKKKKK...',
  ],
  plane: [
    '......KK........',
    '.....KWK........',
    'KK..KWWWWWWWWKK.',
    'KWKKWWWWWWWWWWcK',
    '.KKKKKWWKKKKKKK.',
    '......KWK.......',
  ],
  plane_old: [
    '......KK......',
    '.....KeK......',
    'KK..KeeeeeeKK.',
    'KeKKeeeeeeeeeK',
    '.KKKKeeKKKKKK.',
    '.....KeK......',
  ],
  boat: [
    '........KKK.........',
    '.......KSSSK........',
    '........KSK....K....',
    '.......KxxxK..K.....',
    '......KxxxxKKK......',
    'K.....KBBBBK.K.....K',
    'KTTTTTTTTTTTTTTTTTTK',
    '.KTTTTTTTTTTTTTTTTK.',
    '..KKKKKKKKKKKKKKKK..',
  ],
  refinery: [
    '..............KK..............',
    '..............KaK.............',
    '..............KaK.............',
    '..............KaK.............',
    '.............KKaKK............',
    '.............KaaaK............',
    '.............KaKaK............',
    '.............KaaaK............',
    '.............KaKaK............',
    '..KKKKKK.....KaaaK....KKKKKK..',
    '.KaaaaaaK....KaKaK...KaaaaaaK.',
    'KaaaaaaaaK...KaaaK..KaaaaaaaaK',
    'KaaaaaaaaK...KaKaK..KaaaaaaaaK',
    'KeeeeeeeeK...KaaaK..KeeeeeeeeK',
    'KaaaaaaaaKKKKKaKaKKKKaaaaaaaaK',
    'KaaaaaaaaKeeeeeeeeeeKaaaaaaaaK',
    'KaaaaaaaaKeeeeeeeeeeKaaaaaaaaK',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
  ],
  // ---------- Benda ----------
  server: [
    'KKKKKKKKKKKK',
    'KddddddddddK',
    'KdmdddddeedK',
    'KddddddddddK',
    'KKKKKKKKKKKK',
    'KddddddddddK',
    'KdmdddddeedK',
    'KddddddddddK',
    'KKKKKKKKKKKK',
    'KddddddddddK',
    'KdmdddddeedK',
    'KddddddddddK',
    'KKKKKKKKKKKK',
    'KddddddddddK',
    'KdmdddddeedK',
    'KddddddddddK',
    'KKKKKKKKKKKK',
  ],
  atm: [
    'KKKKKKKKKK',
    'KbbbbbbbbK',
    'KbKKKKKKbK',
    'KbKccccKbK',
    'KbKccccKbK',
    'KbKKKKKKbK',
    'KbbbbbbbbK',
    'KbKKKKKKbK',
    'KbbbbbbbbK',
    'KbbKdKbbbK',
    'KbbbbbbbbK',
    'KbbbbbbbbK',
    'KbbbbbbbbK',
    'KKKKKKKKKK',
  ],
  phone: [
    '.KKKKKKKK.',
    'KddddddddK',
    'KdWWWWWddK',
    'KddddddddK',
    'KddWWWWWdK',
    'KddddddddK',
    'KdWWWWdddK',
    'KddddddddK',
    'KddWWWWWdK',
    'KddddddddK',
    'KddddddddK',
    'KdddKKdddK',
    '.KKKKKKKK.',
  ],
  basket_full: [
    '..G.Y..x.s..',
    '.GGYYYxxsss.',
    'KKKKKKKKKKKK',
    'KTtTtTtTtTtK',
    'KtTtTtTtTtTK',
    '.KTtTtTtTtK.',
    '..KKKKKKKK..',
  ],
  basket_half: [
    '............',
    '.......x....',
    'KKKKKKKKKKKK',
    'KTtTtTtTtTtK',
    'KtTtTtTtTtTK',
    '.KTtTtTtTtK.',
    '..KKKKKKKK..',
  ],
  noodle: [
    'KKKKKKKKKK',
    'KxxxxxxxxK',
    'KxYYYYYYxK',
    'KxYsWsYYxK',
    'KxYYYYYYxK',
    'KxxxxxxxxK',
    'KKKKKKKKKK',
  ],
  bread: [
    '..KKKKKK..',
    '.KssssssK.',
    'KsTsssTssK',
    'KssssssssK',
    'KKKKKKKKKK',
  ],
  tofu: [
    'KKKKKKK',
    'KYYYYYK',
    'KYsYYYK',
    'KYYYsYK',
    'KKKKKKK',
  ],
  tempe: [
    'KKKKKKKKKK',
    'KWsWsWsWsK',
    'KsWsWsWsWK',
    'KKKKKKKKKK',
  ],
  palm: [
    '...G....G.....',
    '.GG.G..G.GG...',
    'G....GGG....G.',
    '...GGgTgGG....',
    '..G...T...G...',
    '.G....T....G..',
    '......T.......',
    '......T.......',
    '.....OTO......',
    '......T.......',
    '......T.......',
    '......T.......',
    '......T.......',
    '.....TTT......',
  ],
  table: [
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KTTTTTTTTTTTTTTTTTTTTTTTTTTTTK',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    '.KK........................KK.',
    '.KK........................KK.',
    '.KK........................KK.',
  ],
  dove: [
    '..KKK....',
    '.KWWWK...',
    'KWWKWWKKK',
    'YKWWWWWWK',
    '..KWWWWK.',
    '...KKKK..',
  ],
  corn: ['.GY.', 'GYYK', 'GYYK', 'GYYK', 'GYYK', '.YK.', '.G..'],
  cassava: ['......GG', 'KKKKKKG.', 'KTsTsTK.', 'KKKKKK..'],
  yam: ['..KKKK..', '.KvvvvK.', 'KvvvvvvK', '.KvvvvK.', '..KKKK..'],
  sago: ['.G.G.', '.GGG.', 'KKKKK', 'KWWWK', 'KWWWK', 'KKKKK'],
  x_mark: [
    'xx.....xx',
    'xxx...xxx',
    '.xxx.xxx.',
    '..xxxxx..',
    '...xxx...',
    '..xxxxx..',
    '.xxx.xxx.',
    'xxx...xxx',
    'xx.....xx',
  ],
  helmet: ['..KKK..', '.KcccK.', 'KcccccK', 'KKKKKKK'],
  gedung: [
    '..........KKKKKKKKKKKK..........',
    '.........KWWWWWWWWWWWWK.........',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWK',
    'KWKKWWKKWWKKWWWWWWKKWWKKWWKKWWWK',
    'KWKcWWKcWWKcWWWWWWKcWWKcWWKcWWWK',
    'KWKcWWKcWWKcWWWWWWKcWWKcWWKcWWWK',
    'KWWWWWWWWWWWWWKKWWWWWWWWWWWWWWWK',
    'KWKKWWKKWWKKWWKdKWWKKWWKKWWKKWWK',
    'KWKcWWKcWWKcWWKdKWWKcWWKcWWKcWWK',
    'KWWWWWWWWWWWWWKdKWWWWWWWWWWWWWWK',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
  ],
};

// Bendera berkibar (2 frame): atas warna `top`, bawah warna `bottom`
function makeFlag(top, bottom, wave) {
  const rows = [];
  for (let y = 0; y < 18; y++) {
    let r = 'K';
    for (let x = 0; x < 11; x++) {
      const fy = y - (wave ? Math.floor(x / 3) % 2 : 0);
      r += fy >= 0 && fy < 6 ? (fy < 3 ? top : bottom) : '.';
    }
    rows.push(r);
  }
  return rows;
}

function makeRock(w, h, seed) {
  const rows = [];
  for (let y = 0; y < h; y++) {
    const t = y / h;
    const half = Math.round((w / 2) * (0.35 + 0.65 * t) + Math.sin(y * 0.9 + seed) * 1.5);
    let r = '';
    for (let x = 0; x < w; x++) {
      const d = Math.abs(x - w / 2);
      if (d > half) r += '.';
      else if (d > half - 1) r += 'K';
      else r += ((x + y + seed) % 5 === 0) ? 'd' : (x < w / 2 ? 'a' : 'e');
    }
    rows.push(r);
  }
  return rows;
}

WAR_PROPS.pole = ['.Y.', 'KKK', ...Array(46).fill('.K.'), 'KKK'];

Object.assign(WAR_PROPS, {
  flag_id_0: makeFlag('x', 'W', false), flag_id_1: makeFlag('x', 'W', true),
  flag_a_0: makeFlag('x', 'r', false), flag_a_1: makeFlag('x', 'r', true),
  flag_b_0: makeFlag('c', 'q', false), flag_b_1: makeFlag('c', 'q', true),
  flag_c_0: makeFlag('Y', 'G', false), flag_c_1: makeFlag('Y', 'G', true),
  flag_d_0: makeFlag('W', 'G', false), flag_d_1: makeFlag('W', 'G', true),
  rock_a: makeRock(26, 44, 1),
  rock_b: makeRock(26, 44, 4),
  server_hit: null, atm_err: null, // diisi di bawah
});

WAR_PROPS.server_hit = WAR_PROPS.server.map(r => r.replace(/m/g, 'x').replace(/e/g, 'x'));
WAR_PROPS.atm_err = WAR_PROPS.atm.map(r => r.replace(/c/g, 'x'));

// ---------- Peta ----------
// Proyeksi sederhana: 1 derajat = 3,6 piksel dunia. Kiri atas = 92°BT, 10°LU.
const MAP_SCALE = 3.6;
const P = (lon, lat) => [(lon - 92) * MAP_SCALE, (10 - lat) * MAP_SCALE];
// Selat Hormuz: 1 derajat = 16 piksel, kiri atas = 50°BT, 29,5°LU
const PH = (lon, lat) => [(lon - 50) * 16, (29.5 - lat) * 16];

const MAP_INDO = {
  other: [ // negara lain (abu-abu)
    [[92, 11], [92, 10], [98.5, 10], [98.3, 8], [100, 6.5], [100.3, 4], [101.3, 2.6], [103.5, 1.3], [104.3, 1.4], [103.4, 4], [103, 5.6], [102, 6.2], [100.9, 6.8], [100.2, 8.5], [100.8, 10], [102.5, 11.5], [104.8, 8.6], [106.5, 9.5], [109.2, 11.5], [109.2, 12]],
    [[109, 1.5], [109.6, 2], [111, 1.6], [113, 3.1], [115.5, 4.9], [117, 7], [119.2, 5.2], [118, 4.3], [117.6, 4.2], [116, 4.3], [115.5, 3.5], [114.5, 1.8], [113.6, 1.3], [112, 1.4], [110.5, 1]],
    [[122, 7.9], [126.3, 8.6], [126.6, 7], [125.5, 5.7], [124, 6.3], [122, 7]],
    [[117.2, 8.4], [119.5, 10.5], [119.8, 10.2], [117.6, 8.2]],
    [[123.5, 10.5], [126, 11.5], [125.5, 9.5], [124, 9.8]],
    [[141, -2.6], [145, -4], [147, -6], [150, -10.5], [147, -10], [145.5, -8], [143, -9], [141, -9.1]],
    [[125.1, -9.5], [127, -8.4], [126.8, -8.7], [125.1, -9.3]],
    [[113, -22], [114, -21.8], [117, -20.6], [121, -19.5], [122.2, -17], [125, -14.5], [127, -14], [129.6, -14.9], [130, -13], [131, -11.3], [132.6, -11.5], [135.8, -12.2], [136.8, -12.3], [135.5, -15], [137.8, -16.4], [140.8, -17.4], [141.6, -12.6], [142.5, -10.7], [143, -12.5], [145.5, -15], [146, -22]],
  ],
  indo: [
    [[95.3, 5.6], [97.5, 5.2], [100.3, 2.5], [103.5, -1], [106, -3], [105.8, -5.9], [104.5, -5.9], [102.3, -4], [100.5, -1.5], [98.7, 1.7], [97, 3], [95.2, 5]],
    [[105.2, -6.8], [106, -5.9], [108.3, -6.3], [110.4, -6.9], [112.6, -6.9], [114.4, -7.7], [114.4, -8.6], [112, -8.4], [110, -8.1], [108, -7.8], [106.4, -7.4]],
    [[114.5, -8.1], [115.7, -8.4], [115.2, -8.8]],
    [[116, -8.4], [117, -8.1], [119, -8.4], [119, -8.8], [116, -8.9]],
    [[119.8, -8.4], [123, -8.2], [123, -8.6], [120, -8.8]],
    [[119, -9.4], [120.8, -9.6], [120.5, -10.2], [119, -9.8]],
    [[123.5, -10.2], [125.1, -9.3], [125.1, -9.5], [124, -10.3]],
    [[109, 1.5], [110.5, 1], [112, 1.4], [113.6, 1.3], [114.5, 1.8], [115.5, 3.5], [116, 4.3], [117.6, 4.2], [117.8, 1], [119, 0.9], [117.5, -0.5], [116.5, -2.5], [116, -3.8], [114.5, -3.6], [113, -3.1], [111, -3], [110, -1.5], [109, -0.5]],
    [[119.5, -5.5], [119.4, -3.5], [118.8, -2.6], [119.6, 0.7], [120.5, 1.2], [121.5, 1], [123, 0.9], [124.7, 1.5], [125.2, 1.6], [124, 0.4], [122, 0.5], [120.8, 0.4], [120.6, -1.2], [121.5, -1], [123.4, -0.9], [121.4, -1.8], [122.8, -4.5], [122, -4.8], [121, -2.7], [120.4, -2.9], [120.4, -5.6]],
    [[127.5, 2], [128.5, 1.5], [128, 0.5], [127.8, -0.8], [127.5, 0.5]],
    [[128, -3], [130.8, -3.2], [130.5, -3.6], [128.2, -3.6]],
    [[126, -3.1], [127.2, -3.3], [126.6, -3.8]],
    [[131, -1], [132.5, -0.4], [134, -0.9], [135, -3.3], [137.5, -1.5], [141, -2.6], [141, -9.1], [139, -8.1], [138, -8.4], [137.8, -6], [135, -4.5], [133, -4], [132, -2.9], [133.5, -2.5], [132, -2], [131, -1.6]],
    [[107.6, 4.2], [108.4, 3.6], [108, 3.4]], // Natuna
    [[105.6, -2.1], [106.8, -2.9], [106.4, -3.1], [105.6, -2.5]], // Bangka
    [[107.6, -2.6], [108.3, -2.8], [108, -3.2]], // Belitung
  ],
};

const MAP_HORMUZ = {
  other: [
    [[50, 30], [50, 29.3], [51.4, 27.9], [53, 27], [54.5, 26.6], [56.3, 27.2], [57.3, 25.8], [59, 25.4], [62, 25.2], [62, 30]],
    [[50, 22.6], [50, 24], [51.6, 24.2], [52.5, 24.2], [54.5, 24.3], [55.6, 25.6], [56.1, 26.2], [56.4, 26.4], [56.4, 25.5], [56.7, 24.5], [57.8, 23.7], [58.8, 23.5], [59.8, 22.6]],
    [[50.8, 24.8], [51.6, 25], [51.6, 26.1], [51.2, 26.1]],
  ],
  indo: [],
};

function drawMapTexture(scene, key, map, proj, w, h) {
  if (scene.textures.exists(key)) return;
  const tex = scene.textures.createCanvas(key, w, h);
  const ctx = tex.getContext();
  const poly = (pts, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    pts.forEach(([lo, la], i) => { const [x, y] = proj(lo, la); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
    ctx.closePath();
    ctx.fill();
  };
  map.other.forEach(p => poly(p, '#9a9a7a'));
  map.indo.forEach(p => poly(p, '#38b764'));
  // ubah tepi halus jadi piksel tegas + garis pantai
  const img = ctx.getImageData(0, 0, w, h), d = img.data;
  const solid = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) {
    if (d[i * 4 + 3] >= 110) { d[i * 4 + 3] = 255; solid[i] = 1; } else d[i * 4 + 3] = 0;
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    if (!solid[i]) continue;
    const edge = x === 0 || y === 0 || x === w - 1 || y === h - 1 || !solid[i - 1] || !solid[i + 1] || !solid[i - w] || !solid[i + w];
    if (edge) { d[i * 4] = 0x1a; d[i * 4 + 1] = 0x1c; d[i * 4 + 2] = 0x2c; }
  }
  ctx.putImageData(img, 0, 0);
  tex.refresh();
}

function buildWarTextures(scene) {
  for (const [name, rows] of Object.entries(WAR_PROPS)) if (rows) pxTexture(scene, name, rows, PALETTE);
  ['id', 'a', 'b', 'c', 'd'].forEach(f => {
    if (!scene.anims.exists(`flag_${f}`)) scene.anims.create({ key: `flag_${f}`, frames: [{ key: `flag_${f}_0` }, { key: `flag_${f}_1` }], frameRate: 3, repeat: -1 });
  });
  drawMapTexture(scene, 'map_indo', MAP_INDO, P, 192, 108);
  drawMapTexture(scene, 'map_hormuz', MAP_HORMUZ, PH, 192, 108);
  // versi lampu padam untuk gedung
  ['building1', 'building2', 'building3', 'building4'].forEach((k, i) => {
    const [w, h, wall] = [[16, 34, 'e'], [20, 46, 'a'], [14, 26, 'r'], [18, 40, 'n']][i];
    pxTexture(scene, `${k}_off`, makeBuilding(w, h, wall, 'd', i + 1), PALETTE);
  });
}
