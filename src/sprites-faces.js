// ============================================================
//  POTRET WAJAH BESAR (44x56) dengan ekspresi — untuk thumbnail
//  dan close-up reaksi. makePortrait({ hair, shirt, style, face })
//    style: 'spiky' | 'neat'
//    face : 'smug' | 'cry' | 'calm' | 'happy' | 'shock'
// ============================================================

function makePortrait(o) {
  const W = 44, H = 56, cx = 21.5, cy = 24, rx = 15.5, ry = 17.5;
  const g = Array.from({ length: H }, () => Array(W).fill('.'));
  const px = (x, y, c) => { if (g[y] && g[y][x] !== undefined) g[y][x] = c; };
  const rect = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) px(x, y, c); };
  const inHead = (x, y) => ((x + 0.5 - cx) / rx) ** 2 + ((y + 0.5 - cy) / ry) ** 2 <= 1;

  // badan / baju
  for (let y = 43; y < H; y++) {
    const half = 12 + (y - 43) * 0.9;
    for (let x = 0; x < W; x++) {
      const d = Math.abs(x + 0.5 - cx);
      if (d <= half) px(x, y, d > half - 1 || y === H - 1 ? 'K' : 'R');
    }
  }
  rect(17, 39, 26, 44, 'S');                     // leher
  rect(16, 43, 27, 43, 'K');
  for (let i = 0; i < 4; i++) { px(18 + i, 44 + i, 'K'); px(25 - i, 44 + i, 'K'); } // kerah
  // telinga
  rect(4, 22, 7, 29, 'S'); rect(36, 22, 39, 29, 'S');
  [[4, 22, 4, 29], [39, 22, 39, 29]].forEach(([x0, y0, x1, y1]) => rect(x0, y0, x1, y1, 'K'));
  // kepala
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (inHead(x, y)) px(x, y, 'S');
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (g[y][x] === 'S' && inHead(x, y) && (!inHead(x - 1, y) || !inHead(x + 1, y) || !inHead(x, y - 1) || !inHead(x, y + 1))) px(x, y, 'K');
  }
  // rambut
  for (let y = 0; y < 17; y++) for (let x = 0; x < W; x++) {
    if (!inHead(x, y + 1) && !inHead(x, y)) continue;
    let edge = 11 + Math.round(Math.sin(x * 0.9) * 1.5);
    if (o.style === 'spiky') edge = 10 + (x % 4 < 2 ? 3 : 0);
    if (o.style === 'neat') edge = x < 16 ? 13 : 10;       // belahan samping
    if (y <= edge) px(x, y, y === 0 || !inHead(x, y - 1) ? 'K' : 'H');
  }
  // jambul jabrik di atas kepala (mengikuti lengkung kepala)
  if (o.style === 'spiky') for (let x = 9; x < 35; x += 4) {
    let top = 0; while (top < 20 && !inHead(x, top)) top++;
    px(x, top - 1, 'K'); px(x + 1, top - 2, 'K'); px(x + 1, top - 1, 'H'); px(x + 2, top - 1, 'K');
  }
  // jilbab: menutup rambut, telinga & dagu, menjuntai ke bahu
  if (o.style === 'hijab') {
    const inFace = (x, y) => ((x + 0.5 - cx) / 11.5) ** 2 + ((y + 0.5 - (cy + 3)) / 15) ** 2 <= 1 && y > 12;
    const inOuter = (x, y) => ((x + 0.5 - cx) / (rx + 3)) ** 2 + ((y + 0.5 - cy) / (ry + 4)) ** 2 <= 1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const drape = y >= 34 && y <= 46 && Math.abs(x + 0.5 - cx) <= 17 + (y - 34) * 0.4;
      if ((inOuter(x, y) || drape) && !inFace(x, y)) px(x, y, 'H');
    }
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (g[y][x] !== 'H') continue;
      const out = (xx, yy) => !g[yy] || g[yy][xx] === undefined || g[yy][xx] === '.';
      if (out(x - 1, y) || out(x + 1, y) || out(x, y - 1)) px(x, y, 'K');
    }
    for (let y = 14; y < 42; y++) for (let x = 0; x < W; x++) if (g[y][x] === 'S' && !inFace(x, y)) px(x, y, 'H');
  }
  // pipi merona
  rect(9, 30, 12, 31, 'P'); rect(31, 30, 34, 31, 'P');

  const eye = (x, y) => { rect(x, y, x + 2, y + 3, 'K'); px(x + 1, y, 'W'); };
  switch (o.face) {
    case 'smug':
      rect(9, 21, 34, 22, 'K');                  // kacamata hitam
      rect(10, 22, 19, 27, 'K'); rect(24, 22, 33, 27, 'K');
      rect(11, 23, 13, 24, 'W'); rect(25, 23, 27, 24, 'W');
      rect(13, 33, 30, 33, 'K'); rect(14, 34, 29, 36, 'W'); rect(14, 37, 29, 37, 'K'); px(13, 32, 'K'); px(30, 32, 'K');
      rect(10, 17, 17, 17, 'K'); rect(26, 16, 33, 16, 'K');
      break;
    case 'cry':
      for (let i = 0; i < 6; i++) { px(11 + i, 24 - Math.round(Math.sin(i / 5 * Math.PI) * 2), 'K'); px(27 + i, 24 - Math.round(Math.sin(i / 5 * Math.PI) * 2), 'K'); }
      rect(12, 25, 14, 40, 'c'); rect(29, 25, 31, 40, 'c');  // air mata
      rect(11, 18, 15, 18, 'K'); px(16, 17, 'K'); px(17, 16, 'K');
      rect(28, 18, 32, 18, 'K'); px(27, 17, 'K'); px(26, 16, 'K');
      rect(16, 31, 27, 31, 'K'); rect(15, 32, 28, 37, 'K'); rect(17, 33, 26, 36, 'r'); rect(18, 33, 25, 33, 'W');
      break;
    case 'calm':
      eye(13, 22); eye(28, 22);
      rect(12, 18, 17, 18, 'K'); rect(27, 18, 32, 18, 'K');
      rect(17, 34, 26, 34, 'K'); px(16, 33, 'K'); px(27, 33, 'K');
      break;
    case 'happy':
      for (let i = 0; i < 6; i++) { px(11 + i, 22 + Math.round(Math.sin(i / 5 * Math.PI) * -2) + 2, 'K'); px(27 + i, 22 + Math.round(Math.sin(i / 5 * Math.PI) * -2) + 2, 'K'); }
      rect(12, 18, 17, 18, 'K'); rect(27, 18, 32, 18, 'K');
      rect(14, 31, 29, 31, 'K'); rect(14, 32, 29, 33, 'W'); rect(15, 34, 28, 35, 'x'); rect(16, 36, 27, 36, 'K'); px(14, 34, 'K'); px(29, 34, 'K'); px(15, 35, 'K'); px(28, 35, 'K');
      break;
    case 'grin':     // percaya diri: satu alis naik, senyum lebar bergigi
      rect(12, 22, 16, 24, 'K'); px(13, 22, 'W'); rect(27, 22, 31, 24, 'K'); px(28, 22, 'W');
      rect(11, 17, 17, 17, 'K'); px(27, 17, 'K'); rect(28, 16, 33, 16, 'K');
      rect(13, 31, 30, 31, 'K'); rect(13, 32, 30, 34, 'W'); rect(13, 35, 30, 35, 'K'); px(12, 30, 'K'); px(31, 30, 'K');
      for (let x = 16; x < 30; x += 3) px(x, 33, 'w');
      break;
    case 'panic':    // panik: mata melotot, alis cemas, mulut bergelombang, keringat
      rect(12, 20, 17, 26, 'W'); rect(27, 20, 32, 26, 'W'); rect(14, 23, 15, 24, 'K'); rect(29, 23, 30, 24, 'K');
      [[12, 20, 17, 20], [12, 26, 17, 26], [27, 20, 32, 20], [27, 26, 32, 26]].forEach(([a, b, c, d]) => rect(a, b, c, d, 'K'));
      for (let i = 0; i < 6; i++) { px(11 + i, 18 - Math.round(i * 0.5), 'K'); px(32 - i, 18 - Math.round(i * 0.5), 'K'); }
      for (let x = 15; x <= 28; x++) px(x, 33 + (x % 4 < 2 ? 0 : 1), 'K');
      rect(36, 18, 37, 21, 'c'); rect(35, 20, 38, 23, 'c'); rect(6, 24, 7, 26, 'c');
      break;
    case 'shock':
      rect(12, 20, 17, 26, 'W'); rect(27, 20, 32, 26, 'W'); rect(14, 22, 15, 24, 'K'); rect(29, 22, 30, 24, 'K');
      [[12, 20, 17, 20], [12, 26, 17, 26], [27, 20, 32, 20], [27, 26, 32, 26]].forEach(([a, b, c, d]) => rect(a, b, c, d, 'K'));
      rect(18, 31, 25, 38, 'K'); rect(19, 32, 24, 37, 'r');
      rect(11, 16, 17, 16, 'K'); rect(27, 16, 33, 16, 'K');
      break;
  }
  // aksesori ciri khas tokoh tetap (maskot): kacamata selam di dahi, peci, kacamata bulat, kumis
  const ring = (cx0, cy0, r, c, fill) => {
    for (let y = -r - 1; y <= r + 1; y++) for (let x = -r - 1; x <= r + 1; x++) {
      const d = Math.hypot(x, y);
      if (fill && d <= r - 0.6) px(Math.round(cx0 + x), Math.round(cy0 + y), fill);
      else if (d > r - 0.6 && d <= r + 0.5) px(Math.round(cx0 + x), Math.round(cy0 + y), c);
    }
  };
  const acc = [].concat(o.acc || []);
  if (acc.includes('kumis')) { rect(15, 28, 28, 29, 'K'); px(14, 29, 'K'); px(29, 29, 'K'); }
  if (acc.includes('peci')) {
    for (let y = 0; y <= 11; y++) { const a = y < 1 ? 9 : 7, b = y < 1 ? 34 : 36; rect(a, y, b, y, y === 0 || y === 11 ? 'K' : 'a'); px(a, y, 'K'); px(b, y, 'K'); }
    rect(8, 9, 35, 9, 'A');                                    // garis pita peci
  }
  if (acc.includes('goggles')) {
    rect(5, 11, 38, 13, 'A'); rect(5, 10, 38, 10, 'K'); rect(5, 14, 38, 14, 'K');   // tali
    ring(14.5, 11, 5, 'K', 'a'); ring(28.5, 11, 5, 'K', 'a');                         // lensa di dahi
    rect(12, 8, 13, 9, 'W'); rect(26, 8, 27, 9, 'W');
  }
  if (acc.includes('glasses')) {
    ring(14.5, 23.5, 5.5, 'K'); ring(29.5, 23.5, 5.5, 'K'); rect(20, 22, 24, 22, 'K');
  }
  const colors = { H: o.hair, R: o.shirt };
  if (o.accColor) colors.a = o.accColor;
  if (o.accColor2) colors.A = o.accColor2;
  return { rows: g.map(r => r.join('')), colors };
}

const FACES = {
  dimas_smug:  makePortrait({ hair: '#1a1c2c', shirt: '#ef7d57', style: 'spiky', face: 'smug' }),
  dimas_cry:   makePortrait({ hair: '#1a1c2c', shirt: '#ef7d57', style: 'spiky', face: 'cry' }),
  dimas_shock: makePortrait({ hair: '#1a1c2c', shirt: '#ef7d57', style: 'spiky', face: 'shock' }),
  raka_calm:   makePortrait({ hair: '#5d3a1a', shirt: '#38b764', style: 'neat', face: 'calm' }),
  siti_happy:  makePortrait({ hair: '#257179', shirt: '#ffcd75', style: 'hijab', face: 'happy' }),
  siti_shock:  makePortrait({ hair: '#257179', shirt: '#ffcd75', style: 'hijab', face: 'shock' }),
  siti_cry:    makePortrait({ hair: '#257179', shirt: '#ffcd75', style: 'hijab', face: 'cry' }),
  sari_happy:  makePortrait({ hair: '#f4f4f4', shirt: '#ff77a8', style: 'hijab', face: 'happy' }),
  sari_cry:    makePortrait({ hair: '#f4f4f4', shirt: '#ff77a8', style: 'hijab', face: 'cry' }),
  darto_happy: makePortrait({ hair: '#8b5a2b', shirt: '#7d8a4a', style: 'neat', face: 'happy' }),
  darto_cry:   makePortrait({ hair: '#8b5a2b', shirt: '#7d8a4a', style: 'neat', face: 'cry' }),
  raka_happy:  makePortrait({ hair: '#5d3a1a', shirt: '#38b764', style: 'neat', face: 'happy' }),
  karto_happy: makePortrait({ hair: '#c2c3c7', shirt: '#38b764', style: 'neat', face: 'happy' }),
  karto_cry:   makePortrait({ hair: '#c2c3c7', shirt: '#38b764', style: 'neat', face: 'cry' }),
  udin_happy:  makePortrait({ hair: '#1a1c2c', shirt: '#38b764', style: 'neat', face: 'happy' }),    // driver ojol (jaket hijau)
  udin_cry:    makePortrait({ hair: '#1a1c2c', shirt: '#38b764', style: 'neat', face: 'cry' }),
  joko_happy:  makePortrait({ hair: '#5d3a1a', shirt: '#ef7d57', style: 'neat', face: 'happy' }),    // ojek pangkalan
  rara_happy:  makePortrait({ hair: '#b13e53', shirt: '#ff77a8', style: 'hijab', face: 'happy' }),    // Kak Rara (toko online)
  rara_cry:    makePortrait({ hair: '#b13e53', shirt: '#ff77a8', style: 'hijab', face: 'cry' }),
  nenek_happy: makePortrait({ hair: '#c2c3c7', shirt: '#7a3b8f', style: 'hijab', face: 'happy' }),  // Nenek Sum
  rafi_shock:  makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', face: 'shock' }),   // Gen Z
  rafi_cry:    makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', face: 'cry' }),
  bayu_calm:   makePortrait({ hair: '#3b2a1a', shirt: '#257179', style: 'neat', face: 'calm' }),     // milenial
  bayu_happy:  makePortrait({ hair: '#3b2a1a', shirt: '#257179', style: 'neat', face: 'happy' }),

  // ---- konsep maskot tetap channel (Andi / Pak Kalau / Nara) ----
  andi_happy: makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', face: 'happy' }),
  andi_shock: makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', face: 'shock' }),
  andi_cry: makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', face: 'cry' }),
  andi_grin: makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', face: 'grin' }),
  kalau_happy: makePortrait({ hair: '#4a4a50', shirt: '#257179', style: 'neat', acc: ['peci', 'kumis'], accColor: '#2a2836', accColor2: '#45435a', face: 'happy' }),
  kalau_shock: makePortrait({ hair: '#4a4a50', shirt: '#257179', style: 'neat', acc: ['peci', 'kumis'], accColor: '#2a2836', accColor2: '#45435a', face: 'shock' }),
  kalau_cry: makePortrait({ hair: '#4a4a50', shirt: '#257179', style: 'neat', acc: ['peci', 'kumis'], accColor: '#2a2836', accColor2: '#45435a', face: 'cry' }),
  kalau_grin: makePortrait({ hair: '#4a4a50', shirt: '#257179', style: 'neat', acc: ['peci', 'kumis'], accColor: '#2a2836', accColor2: '#45435a', face: 'grin' }),
  nara_happy: makePortrait({ hair: '#e0a030', shirt: '#2a8a8f', style: 'hijab', acc: ['glasses'], face: 'happy' }),
  nara_shock: makePortrait({ hair: '#e0a030', shirt: '#2a8a8f', style: 'hijab', acc: ['glasses'], face: 'shock' }),
  nara_cry: makePortrait({ hair: '#e0a030', shirt: '#2a8a8f', style: 'hijab', acc: ['glasses'], face: 'cry' }),
  nara_grin: makePortrait({ hair: '#e0a030', shirt: '#2a8a8f', style: 'hijab', acc: ['glasses'], face: 'grin' }),
};

function buildFaceTextures(scene) {
  for (const [k, f] of Object.entries(FACES)) pxTexture(scene, `face_${k}`, f.rows, { ...PALETTE, ...f.colors });
}

// ============================================================
//  KARAKTER SETENGAH BADAN BERGESTUR (thumbnail gaya ilustrasi)
//  makeBust({ hair, shirt, shirt2, shirt3, stripe, pattern: 'plaid'|'hoodie'|'plain', style, face, gesture })
//    gesture: 'phone' (pegang HP mati dekat wajah) | 'thumb' (jempol) | 'point' (telunjuk ke atas) | 'none'
// ============================================================
function makeBust(o) {
  const W = 76, H = 86, cx = 37.5;
  const g = Array.from({ length: H }, () => Array(W).fill('.'));
  const px = (x, y, c) => { x = Math.round(x); y = Math.round(y); if (g[y] && g[y][x] !== undefined) g[y][x] = c; };
  const rect = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) px(x, y, c); };
  const outline = (grid, isFill) => {   // sel kosong yang bertetangga dengan isi -> garis tepi
    const add = [];
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (grid[y][x] !== '.') continue;
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => grid[y + dy] && grid[y + dy][x + dx] && isFill(grid[y + dy][x + dx]))) add.push([x, y]);
    }
    add.forEach(([x, y]) => { grid[y][x] = 'K'; });
  };
  // badan & bahu
  for (let y = 43; y < H; y++) {
    const half = Math.min(33, 20 + (y - 43) * 0.9);
    for (let x = 0; x < W; x++) if (Math.abs(x + 0.5 - cx) <= half) px(x, y, 'R');
  }
  if (o.pattern === 'plaid') for (let y = 43; y < H; y++) for (let x = 0; x < W; x++) {
    if (g[y][x] !== 'R') continue;
    const vx = x % 8 < 2, vy = y % 8 < 2;
    if (vx && vy) px(x, y, 'q'); else if (vx || vy) px(x, y, 'Q');
    if (x % 8 === 5 || y % 8 === 5) px(x, y, 'y');
  }
  if (o.pattern === 'hoodie') {
    for (let y = 41; y < 51; y++) for (let x = 0; x < W; x++) { const d = Math.abs(x + 0.5 - cx); if (d <= 15 + (y - 41) * 0.6 && d >= 6 - (y - 41) * 0.2) px(x, y, 'Q'); }
    rect(cx - 5, 51, cx - 4, 62, 'W'); rect(cx + 3, 51, cx + 4, 62, 'W');
    rect(cx - 12, 72, cx + 12, 80, 'Q');      // kantong depan
  }
  if (o.pattern === 'jacket') {
    for (let y = 43; y < 50; y++) for (let x = 0; x < W; x++) { const d = Math.abs(x + 0.5 - cx); if (d <= 13 - (y - 43) && d >= 5) px(x, y, 'Q'); }  // kerah
    rect(cx - 1, 50, cx, H - 1, 'Q'); for (let y = 52; y < H; y += 3) px(cx - 1, y, 'w');                                         // ritsleting
    if (o.reflect !== false) { rect(cx - 26, 64, cx - 20, 66, 'W'); rect(cx + 20, 64, cx + 26, 66, 'W'); }                                                    // strip reflektor
  }
  rect(cx - 5, 39, cx + 4, 44, 'S');           // leher
  outline(g, c => c !== 'K' && c !== '.');
  // kepala dari potret besar
  if (o.pattern === 'batik') for (let y = 43; y < H; y++) for (let x = 0; x < W; x++) {
    if (g[y][x] !== 'R') continue;
    if ((x + y) % 7 === 0 || ((x - y) % 7 + 7) % 7 === 0) px(x, y, 'Q');
    else if ((x + y) % 7 === 3 && ((x - y) % 7 + 7) % 7 === 3) px(x, y, 'y');
  }
  const head = makePortrait({ hair: o.hair, shirt: o.shirt, style: o.style, face: o.face, acc: o.acc, accColor: o.accColor, accColor2: o.accColor2 });
  head.rows.forEach((row, y) => { if (y > 42) return; [...row].forEach((c, x) => { if (c !== '.' && !(y > 38 && c === 'R')) px(x + 16, y, c); }); });
  if (o.scarf) {   // syal melingkar di leher + ujung menjuntai
    rect(cx - 14, 39, cx + 13, 47, 'K'); rect(cx - 13, 40, cx + 12, 46, 'f');
    rect(cx + 3, 46, cx + 11, 64, 'K'); rect(cx + 4, 47, cx + 10, 63, 'f');
    for (let y = 42; y < 64; y += 4) rect(y < 47 ? cx - 13 : cx + 4, y, y < 47 ? cx + 12 : cx + 10, y, 'F');
    for (let x = cx + 4; x <= cx + 10; x += 2) px(x, 64, 'f');
  }
  // lengan & tangan di lapisan sendiri (garis tepi penuh), lalu ditempel di atas badan
  const L = Array.from({ length: H }, () => Array(W).fill('.'));
  const lp = (x, y, c) => { x = Math.round(x); y = Math.round(y); if (L[y] && L[y][x] !== undefined) L[y][x] = c; };
  const lr = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) lp(x, y, c); };
  const arm = (x0, y0, x1, y1, w = 11) => {
    const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
    for (let i = 0; i <= n; i++) { const x = x0 + (x1 - x0) * i / n, y = y0 + (y1 - y0) * i / n; lr(Math.round(x - w / 2), Math.round(y - w / 2), Math.round(x + w / 2), Math.round(y + w / 2), 'R'); }
  };
  const fist = (x, y) => { lr(x - 6, y - 5, x + 6, y + 6, 'S'); for (let i = -3; i <= 3; i += 3) lr(x + i, y, x + i, y + 5, 'k'); };
  if (o.gesture === 'phone') {
    arm(8, H - 3, 12, 58); fist(12, 52);
    lr(2, 24, 16, 48, 'K'); lr(4, 26, 14, 44, 'w');            // HP, layar mati abu
    if (o.screen === 'map') {      // peta lipat penjelajah
      lr(4, 26, 14, 44, 'G'); lr(4, 30, 14, 31, 'c'); lr(9, 32, 10, 44, 'c');
      [[5, 41], [7, 38], [6, 35], [8, 28], [12, 27]].forEach(([x, y]) => lp(x, y, 'Y')); lr(11, 36, 13, 38, 'e'); lp(12, 37, 'W');
      lr(9, 25, 9, 45, 'g');
    } else if (o.screen === 'note') {   // buku catatan
      lr(4, 26, 14, 44, 'W'); for (let y = 29; y < 44; y += 3) lr(6, y, 13, y, 'c'); lr(5, 26, 5, 44, 'e');
    } else if (o.screen === 'off') { for (let i = 0; i < 8; i++) { lr(5 + i, 30 + i * 1.4, 6 + i, 31 + i * 1.4, 'e'); lr(12 - i, 30 + i * 1.4, 13 - i, 31 + i * 1.4, 'e'); } }
    else { lr(5, 31, 12, 35, 'K'); lr(6, 32, 7, 34, 'e'); lp(13, 33, 'K'); lr(8, 38, 9, 41, 'e'); lp(8, 43, 'e'); lp(9, 43, 'e'); }
    lr(14, 40, 18, 47, 'S');                                   // jempol menjepit HP
  }
  if (o.gesture === 'thumb') {   // jempol ke atas: kepalan miring dengan lipatan jari mendatar, jempol di sisi dalam
    arm(W - 7, H - 3, 63, 68);
    lr(52, 52, 68, 64, 'S'); for (const y of [55, 58, 61]) lr(57, y, 68, y, 'k');   // kepalan + lipatan jari
    lr(52, 36, 57, 52, 'S'); lr(53, 36, 56, 37, 'n');                               // jempol + kuku
  }
  if (o.gesture === 'point') { arm(W - 7, H - 3, 66, 50); fist(65, 44); lr(62, 22, 65, 38, 'S'); }
  outline(L, c => c !== 'K' && c !== 'k' && c !== '.');
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const c = L[y][x]; if (c !== '.') g[y][x] = c === 'k' ? 'K' : c; }
  return { rows: g.map(r => r.join('')), colors: { ...head.colors, f: o.scarf || '#ef7d57', F: o.scarf2 || '#b13e53', n: '#ffd9c0', H: o.hair, R: o.shirt, Q: o.shirt2 || o.shirt, q: o.shirt3 || '#1a1c2c', y: o.stripe || o.shirt, e: '#e43b44', x: '#b13e53' } };
}

const BUSTS = {
  rafi_panic: makeBust({ hair: '#1a1c2c', shirt: '#7a3b8f', shirt2: '#5a2a6f', pattern: 'hoodie', style: 'spiky', face: 'panic', gesture: 'phone' }),   // Gen Z, HP mati
  bayu_grin:  makeBust({ hair: '#3b2a1a', shirt: '#2a8a8f', shirt2: '#1d5f63', shirt3: '#123d40', stripe: '#d9a441', pattern: 'plaid', style: 'neat', face: 'grin', gesture: 'thumb' }),
  // Ojol Libur: Bang Udin (jaket hijau polos tanpa logo) & Pak Joko (ojek pangkalan)
  udin_happy: makeBust({ hair: '#1a1c2c', shirt: '#38b764', shirt2: '#257149', pattern: 'jacket', style: 'neat', face: 'happy', gesture: 'thumb' }),
  udin_cry:   makeBust({ hair: '#1a1c2c', shirt: '#38b764', shirt2: '#257149', pattern: 'jacket', style: 'neat', face: 'cry', gesture: 'phone', screen: 'off' }),
  joko_grin:  makeBust({ hair: '#5d3a1a', shirt: '#ef7d57', shirt2: '#b13e53', shirt3: '#7a2a2a', stripe: '#ffcd75', pattern: 'plaid', style: 'neat', face: 'grin', gesture: 'thumb' }),
  // ---- konsep maskot tetap channel ----
  andi_map:   makeBust({ hair: '#1a1c2c', shirt: '#7a3b8f', shirt2: '#5a2a6f', pattern: 'hoodie', style: 'spiky', face: 'happy', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', scarf: '#ef7d57', scarf2: '#b13e53', gesture: 'phone', screen: 'map' }),
  andi_shock: makeBust({ hair: '#1a1c2c', shirt: '#7a3b8f', shirt2: '#5a2a6f', pattern: 'hoodie', style: 'spiky', face: 'shock', acc: ['goggles'], accColor: '#73eff7', accColor2: '#5d3a1a', scarf: '#ef7d57', scarf2: '#b13e53', gesture: 'thumb' }),
  kalau_grin: makeBust({ hair: '#4a4a50', shirt: '#257179', shirt2: '#ffcd75', stripe: '#ef7d57', pattern: 'batik', style: 'neat', face: 'grin', acc: ['peci', 'kumis'], accColor: '#2a2836', accColor2: '#45435a', gesture: 'thumb' }),
  nara_note:  makeBust({ hair: '#e0a030', shirt: '#2a8a8f', shirt2: '#1d5f63', pattern: 'jacket', reflect: false, style: 'hijab', face: 'happy', acc: ['glasses'], gesture: 'phone', screen: 'note' }),
};
function buildBustTextures(scene) {
  for (const [k, f] of Object.entries(BUSTS)) pxTexture(scene, `bust_${k}`, f.rows, { ...PALETTE, ...f.colors });
}
