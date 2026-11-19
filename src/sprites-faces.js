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
    case 'shock':
      rect(12, 20, 17, 26, 'W'); rect(27, 20, 32, 26, 'W'); rect(14, 22, 15, 24, 'K'); rect(29, 22, 30, 24, 'K');
      [[12, 20, 17, 20], [12, 26, 17, 26], [27, 20, 32, 20], [27, 26, 32, 26]].forEach(([a, b, c, d]) => rect(a, b, c, d, 'K'));
      rect(18, 31, 25, 38, 'K'); rect(19, 32, 24, 37, 'r');
      rect(11, 16, 17, 16, 'K'); rect(27, 16, 33, 16, 'K');
      break;
  }
  return { rows: g.map(r => r.join('')), colors: { H: o.hair, R: o.shirt } };
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
  rafi_shock:  makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', face: 'shock' }),   // Gen Z
  rafi_cry:    makePortrait({ hair: '#1a1c2c', shirt: '#7a3b8f', style: 'spiky', face: 'cry' }),
  bayu_calm:   makePortrait({ hair: '#3b2a1a', shirt: '#257179', style: 'neat', face: 'calm' }),     // milenial
  bayu_happy:  makePortrait({ hair: '#3b2a1a', shirt: '#257179', style: 'neat', face: 'happy' }),
};

function buildFaceTextures(scene) {
  for (const [k, f] of Object.entries(FACES)) pxTexture(scene, `face_${k}`, f.rows, { ...PALETTE, ...f.colors });
}
