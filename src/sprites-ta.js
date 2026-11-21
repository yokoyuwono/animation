// ============================================================
//  ASET "DUNIA TANPA ATURAN" — digambar sendiri sebagai kode (grid 480x270).
//  Pakai dengan skala 0.4 (192/480). Tokoh ±44 px. Awalan kunci: ta2_
//  Tiap benda punya versi normal & rusak; tokoh punya 3 frame jalan + pose.
// ============================================================

// ---------- pelukis grid kecil ----------
function Grid(w, h) {
  const g = Array.from({ length: h }, () => Array(w).fill(null));
  const api = {
    w, h, g,
    px(x, y, c) { x = Math.round(x); y = Math.round(y); if (y >= 0 && y < h && x >= 0 && x < w) g[y][x] = c; },
    rect(x, y, ww, hh, c) { for (let j = 0; j < hh; j++) for (let i = 0; i < ww; i++) api.px(x + i, y + j, c); },
    ell(cx, cy, rx, ry, c) { for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) if ((x * x) / (rx * rx + 0.3) + (y * y) / (ry * ry + 0.3) <= 1) api.px(cx + x, cy + y, c); },
    line(x0, y0, x1, y1, c, t = 1) { const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0))); for (let i = 0; i <= n; i++) api.rect(Math.round(x0 + (x1 - x0) * i / n), Math.round(y0 + (y1 - y0) * i / n), t, t, c); },
    get(x, y) { return (g[y] || [])[x]; },
    // garis tepi luar: sel kosong yang bertetangga dengan isi
    outline(c = '#22202e') {
      const add = [];
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (!g[y][x] && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g[y + dy] && g[y + dy][x + dx] && g[y + dy][x + dx] !== c)) add.push([x, y]);
      add.forEach(([x, y]) => { g[y][x] = c; });
    },
    flip() { g.forEach(r => r.reverse()); },
    toTexture(scene, key) {
      if (scene.textures.exists(key)) return;   // sudah dibuat (mesin memanggil ulang saat diputar ulang)
      const tex = scene.textures.createCanvas(key, w, h); const ctx = tex.getContext();
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (g[y][x]) { ctx.fillStyle = g[y][x]; ctx.fillRect(x, y, 1, 1); }
      tex.refresh();
    },
  };
  return api;
}
const TA2 = {
  ink: '#22202e', ink2: '#3d3a52', white: '#f4f4f4', sky: '#9fd8f0',
  skin: '#f0b98a', skin2: '#d0905e', red: '#e0414a', red2: '#a32a35', yel: '#ffcd45', grn: '#3ec46d',
  glass: '#8fd0f2', glass2: '#5aa6d8', glassHi: '#d8f1ff', steel: '#a4acb8', steel2: '#6d7686', steelHi: '#d4dae2',
  tire: '#26252f', hub: '#a4acb8', asphalt: '#3b3f4f', asphalt2: '#33364a', curb: '#a9a59a', walk: '#cbc3b0', walk2: '#b7ae98',
};

// ---------- TOKOH ----------
// o: { skin, hair, hairStyle: 'short'|'spiky'|'hijab'|'long'|'bald'|'helmet', shirt, shirt2, pants, shoes, bag, apron, vest }
// pose: 'stand'|'walkA'|'walkB'|'shock'|'run'|'point'
function makeOrang(o, pose = 'stand') {
  const W = 26, H = 46, G = Grid(W, H);
  const skin = o.skin || TA2.skin, skin2 = o.skin2 || TA2.skin2, sh = o.shirt, sh2 = o.shirt2 || shade(o.shirt), pa = o.pants, pa2 = shade(o.pants), shoe = o.shoes || '#2b2a36';
  const cx = 12;
  // --- kaki ---
  const leg = (x0, xFoot, col) => { G.line(x0, 31, xFoot, 41, col, 4); G.rect(xFoot - 1, 41, 6, 3, shoe); G.rect(xFoot, 41, 5, 1, '#4a4858'); };
  if (pose === 'walkA' || pose === 'run') { leg(cx - 3, cx - 7, pa2); leg(cx + 1, cx + 4, pa); }
  else if (pose === 'walkB') { leg(cx - 3, cx + 1, pa2); leg(cx + 1, cx - 3, pa); }
  else { leg(cx - 4, cx - 4, pa2); leg(cx + 1, cx + 1, pa); }
  G.rect(cx - 4, 29, 9, 3, pa);
  if (o.skirt) { G.rect(cx - 5, 28, 11, 11, o.skirt); G.rect(cx - 5, 28, 2, 11, shade(o.skirt)); }
  // --- lengan belakang ---
  const backArm = pose === 'walkA' || pose === 'run' ? [cx + 3, 30] : pose === 'walkB' ? [cx - 6, 29] : [cx - 6, 29];
  if (pose !== 'shock') { G.line(cx - 3, 19, backArm[0], backArm[1], sh2, 3); G.rect(backArm[0], backArm[1], 3, 3, skin2); }
  // --- badan ---
  G.rect(cx - 5, 17, 11, 13, sh); G.rect(cx - 5, 17, 2, 13, sh2); G.rect(cx - 5, 28, 11, 2, sh2);
  if (o.vest) { G.rect(cx - 5, 17, 3, 12, o.vest); G.rect(cx + 3, 17, 3, 12, o.vest); }
  if (o.apron) { G.rect(cx - 3, 21, 8, 10, o.apron); G.rect(cx - 1, 18, 4, 3, o.apron); }
  if (o.coat) { G.rect(cx - 5, 17, 11, 15, o.coat); G.rect(cx - 5, 17, 2, 15, shade(o.coat)); G.rect(cx, 18, 1, 13, shade(o.coat)); }
  G.rect(cx - 1, 17, 3, 2, skin);                                       // leher
  if (o.bag) { G.line(cx - 4, 17, cx + 5, 28, o.bag, 1); G.rect(cx + 3, 26, 5, 5, o.bag); G.rect(cx + 3, 26, 5, 1, shade(o.bag)); }
  // --- kepala ---
  G.ell(cx + 1, 9, 6, 7, skin); G.rect(cx - 4, 8, 2, 6, skin2);
  const hair = o.hair, hs = o.hairStyle || 'short';
  if (hs === 'hijab') { G.ell(cx + 1, 8, 7, 8, hair); G.rect(cx - 6, 8, 13, 10, hair); G.ell(cx + 2, 10, 4, 5, skin); G.rect(cx - 6, 14, 2, 4, shade(hair)); }
  else if (hs === 'helmet') { G.ell(cx + 1, 7, 7, 6, hair); G.rect(cx - 6, 7, 14, 3, hair); G.rect(cx + 3, 7, 5, 3, TA2.glass2); G.rect(cx - 6, 9, 14, 1, shade(hair)); }
  else if (hs !== 'bald') {
    G.ell(cx + 1, 5, 7, 4, hair); G.rect(cx - 5, 4, 3, 7, hair);
    if (hs === 'spiky') for (let x = cx - 5; x <= cx + 6; x += 3) G.rect(x, 0, 2, 3, hair);
    if (hs === 'long') { G.rect(cx - 6, 4, 4, 14, hair); G.rect(cx + 5, 5, 2, 6, hair); }
    if (hs === 'short' || hs === 'spiky') G.rect(cx + 2, 4, 5, 2, hair);
  } else { G.rect(cx - 4, 3, 3, 4, hair); }
  // wajah (menghadap kanan)
  const eye = '#22202e';
  if (pose === 'shock') { G.rect(cx + 2, 8, 2, 3, TA2.white); G.rect(cx + 5, 8, 2, 3, TA2.white); G.px(cx + 3, 9, eye); G.px(cx + 6, 9, eye); G.rect(cx + 4, 12, 2, 3, '#7a2030'); }
  else { G.rect(cx + 3, 9, 1, 2, eye); G.rect(cx + 6, 9, 1, 2, eye); G.rect(cx + 4, 13, 2, 1, '#a0505a'); }
  if (hs !== 'hijab' && hs !== 'helmet') G.rect(cx + 2, 7, 2, 1, shade(hair));                          // alis
  G.px(cx + 7, 11, skin2);                                                                              // hidung
  // --- lengan depan ---
  if (pose === 'shock') { G.line(cx - 3, 19, cx - 5, 12, sh2, 3); G.line(cx + 4, 19, cx + 8, 12, sh, 3); G.rect(cx - 6, 9, 3, 4, skin); G.rect(cx + 8, 9, 3, 4, skin); }
  else if (pose === 'point') { G.line(cx + 2, 19, cx + 11, 17, sh, 3); G.rect(cx + 11, 16, 3, 3, skin); }
  else {
    const fa = pose === 'walkA' || pose === 'run' ? [cx - 5, 28] : pose === 'walkB' ? [cx + 4, 29] : [cx + 3, 29];
    G.line(cx + 2, 19, fa[0], fa[1], sh, 3); G.rect(fa[0], fa[1], 3, 3, skin);
  }
  if (o.hold) o.hold(G, cx, pose);
  G.outline();
  return G;
}
function shade(hex, k = 0.72) {
  const n = parseInt(hex.slice(1), 16); const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return '#' + [r, g, b].map(v => Math.round(v * k).toString(16).padStart(2, '0')).join('');
}
const TA2_TOKOH = {
  raka:     { hair: '#22202e', hairStyle: 'short', shirt: '#8fc9f0', pants: '#4a4f5c', bag: '#7a5236' },
  sinta:    { hair: '#4a2e1e', hairStyle: 'long', shirt: '#e0a63a', pants: '#3b5dc9' },
  ibu:      { hair: '#d9c39a', hairStyle: 'hijab', shirt: '#b1663a', pants: '#5d3a1a', skirt: '#6a4a2a' },
  ibu_paralel: { hair: '#8a8f99', hairStyle: 'hijab', shirt: '#7d7468', pants: '#4a4038', skirt: '#5a5048' },
  polisi:   { hair: '#f4f4f4', hairStyle: 'helmet', shirt: '#8a7d63', pants: '#4a4038' },
  preman:   { hair: '#b13e53', hairStyle: 'short', shirt: '#2b2a36', pants: '#29366f', vest: '#1a1c2c', skin: '#d99a6a' },
  preman_b: { hair: '#22202e', hairStyle: 'spiky', shirt: '#5d6b7d', pants: '#22202e' },
  pedagang: { hair: '#22202e', hairStyle: 'short', shirt: '#e8e0c8', pants: '#5d3a1a', apron: '#c9b48a' },
  kakek:    { hair: '#c2c3c7', hairStyle: 'bald', shirt: '#a89a7a', pants: '#3a6a5a' },
  dokter:   { hair: '#22202e', hairStyle: 'bald', shirt: '#f4f4f4', pants: '#29366f', coat: '#f4f4f4' },
  warga_a:  { hair: '#22202e', hairStyle: 'short', shirt: '#e0414a', pants: '#29366f' },
  warga_b:  { hair: '#257179', hairStyle: 'hijab', shirt: '#ffcd75', pants: '#257179', skirt: '#257179' },
  warga_c:  { hair: '#5d3a1a', hairStyle: 'spiky', shirt: '#38b764', pants: '#22202e' },
  pengendara: { hair: '#4a4f5c', hairStyle: 'helmet', shirt: '#4a6a8a', pants: '#2b2a36' },
};

// ---------- GEDUNG ----------
function makeRuko(rusak) {
  const W = 110, H = 150, G = Grid(W, H), wall = rusak ? '#b9a27a' : '#e8d6a8', wall2 = rusak ? '#9c855e' : '#cdb884', trim = rusak ? '#8a7656' : '#f6ead0';
  G.rect(0, 6, W, H - 6, wall); G.rect(0, 6, 6, H - 6, wall2);
  G.rect(0, 0, W, 7, trim); G.rect(0, 6, W, 1, wall2);                                        // atap
  for (let f = 0; f < 3; f++) {                                                               // 3 lantai atas: jendela + balkon
    const y = 12 + f * 34;
    G.rect(2, y + 25, W - 4, 3, trim);                                                        // lis lantai
    for (const x0 of [10, 58]) {
      const broken = rusak && (f + x0) % 3 === 1;
      G.rect(x0, y, 40, 22, TA2.ink2); G.rect(x0 + 2, y + 2, 36, 18, broken ? '#2c2a38' : TA2.glass);
      if (!broken) { G.rect(x0 + 2, y + 2, 36, 3, TA2.glassHi); G.rect(x0 + 19, y + 2, 2, 18, TA2.ink2); G.rect(x0 + 2, y + 2, 8, 18, f % 2 ? '#d98a6a' : '#e8c96a'); }   // tirai
      else { G.line(x0 + 4, y + 4, x0 + 14, y + 16, '#8fa0b8'); G.line(x0 + 20, y + 3, x0 + 30, y + 12, '#8fa0b8'); }
      G.rect(x0 - 2, y + 16, 44, 2, rusak ? '#6d5a42' : '#7d8794');                           // pagar balkon
      for (let x = x0; x < x0 + 42; x += 4) if (!(rusak && x % 12 === 0)) G.rect(x, y + 17, 1, 7, rusak ? '#6d5a42' : '#7d8794');
    }
    if (f === 1) { G.rect(52, y + 6, 6, 5, '#d4dae2'); G.rect(53, y + 7, 4, 1, TA2.steel2); }  // AC
    if (f === 0) { G.line(12, y - 2, 46, y - 2, '#8a8f99'); for (let x = 16; x < 46; x += 7) G.rect(x, y - 1, 4, 5, ['#e0414a', '#f4f4f4', '#41a6f6', '#ffcd45'][x % 4]); }  // jemuran
  }
  // toko di bawah: rolling door + tenda belang
  const yb = 114;
  G.rect(4, yb, W - 8, H - yb, '#6d6070');
  G.rect(8, yb + 10, 44, H - yb - 10, rusak ? '#5c5a66' : '#9aa3b0'); for (let y = yb + 12; y < H; y += 3) G.rect(8, y, 44, 1, rusak ? '#4a4856' : '#7d8794');
  G.rect(58, yb + 10, 46, H - yb - 10, '#3a3048'); G.rect(62, yb + 18, 38, 12, '#8b5a2b'); G.rect(64, yb + 14, 6, 4, '#e0414a'); G.rect(74, yb + 13, 5, 5, '#ffcd45'); G.rect(84, yb + 14, 7, 4, '#38b764');
  for (let x = 2; x < W - 2; x += 8) { G.rect(x, yb, 4, 9, rusak ? '#a36a5a' : '#e0414a'); G.rect(x + 4, yb, 4, 9, rusak ? '#c9b8a0' : '#f4f4f4'); }
  G.rect(2, yb + 9, W - 4, 1, '#22202e');
  if (rusak) {                                                                                // retak, noda, plester copot
    let x = 30; for (let y = 8; y < 108; y++) { x += (y % 5 < 2 ? 1 : y % 5 === 4 ? -1 : 0); G.px(x, y, TA2.ink); if (y % 9 === 0) G.px(x + 1, y, TA2.ink); }
    x = 90; for (let y = 40; y < 112; y++) { x += (y % 4 === 0 ? -1 : 0); G.px(x, y, TA2.ink); }
    for (const [ex, ey] of [[70, 20], [14, 80], [96, 60]]) { G.rect(ex, ey, 8, 5, '#a8613f'); for (let i = 0; i < 8; i += 3) G.rect(ex + i, ey + 1, 2, 1, '#7a3f2a'); }   // bata terkelupas
    for (let i = 0; i < 12; i++) G.rect(6 + i * 9, 7, 1, 4 + (i % 3) * 3, '#8a7656');            // noda luntur
    for (let y = 0; y < 5; y++) G.rect(W - 9 + y, y, 9 - y, 1, null);                            // sudut gompal
  }
  G.outline();
  return G;
}
function makeKantor(rusak) {
  const W = 96, H = 168, G = Grid(W, H), frame = rusak ? '#6d6a74' : '#9aa3b0', frame2 = rusak ? '#55525c' : '#7d8794';
  G.rect(0, 0, W, H, frame); G.rect(0, 0, W, 5, frame2); G.rect(0, 0, 5, H, frame2);
  for (let f = 0; f < 5; f++) for (let k = 0; k < 4; k++) {
    const x = 8 + k * 21, y = 10 + f * 28, broken = rusak && (f * 4 + k) % 3 === 0;
    G.rect(x, y, 18, 22, broken ? '#2a2836' : TA2.glass);
    if (!broken) { G.line(x + 2, y + 18, x + 12, y + 3, TA2.glassHi); G.line(x + 6, y + 20, x + 15, y + 8, '#b8e2f8'); G.rect(x, y + 18, 18, 4, TA2.glass2); }
    else { G.line(x + 3, y + 3, x + 9, y + 12, '#8fa0b8'); G.line(x + 9, y + 12, x + 15, y + 5, '#8fa0b8'); G.line(x + 9, y + 12, x + 7, y + 20, '#8fa0b8'); }
  }
  G.rect(28, H - 22, 40, 22, TA2.ink2); G.rect(30, H - 20, 17, 20, TA2.glass2); G.rect(49, H - 20, 17, 20, TA2.glass2); G.rect(46, H - 12, 1, 3, TA2.steelHi); G.rect(49, H - 12, 1, 3, TA2.steelHi);
  if (rusak) { let x = 60; for (let y = 2; y < 120; y++) { x += (y % 6 < 3 ? 1 : -1); G.px(x, y, TA2.ink); } G.rect(30, H - 20, 36, 20, '#3d3a46'); G.line(32, H - 18, 64, H - 4, '#8a8f99', 2); G.line(32, H - 4, 64, H - 18, '#8a8f99', 2); }
  G.outline();
  return G;
}

// ---------- TIANG ----------
function kepalaLampu(G, x, y, nyala) {     // kepala lampu 7x17
  G.rect(x, y, 7, 17, '#2d2b3a'); G.rect(x + 1, y + 1, 5, 15, '#3d3a4e');
  [['r', TA2.red, '#5a2a30'], ['y', TA2.yel, '#5a4a28'], ['g', TA2.grn, '#24442e']].forEach(([k, on, off], i) => {
    const lit = nyala === k; G.ell(x + 3, y + 3 + i * 5, 2, 2, lit ? on : off); if (lit) G.px(x + 2, y + 2 + i * 5, '#ffffff');
  });
}
function makeLampuMerah(state) {           // state: 'r' | 'g' | 'bengkok'
  const W = 60, H = 100, G = Grid(W, H);
  if (state !== 'bengkok') {
    G.rect(6, 8, 4, 92, TA2.steel); G.rect(6, 8, 1, 92, TA2.steelHi); G.rect(3, 96, 10, 4, TA2.steel2);
    G.rect(6, 7, 48, 3, TA2.steel); G.rect(6, 7, 48, 1, TA2.steelHi);
    kepalaLampu(G, 47, 10, state); kepalaLampu(G, 10, 34, state);
  } else {
    for (let y = 12; y < 100; y++) { const dx = Math.round((100 - y) * 0.16); G.rect(6 + dx, y, 4, 1, TA2.steel2); G.px(6 + dx, y, TA2.steel); }
    G.rect(3, 96, 12, 4, TA2.steel2);
    for (let i = 0; i < 40; i++) { const x = 20 + i, y = 10 + Math.round(i * i * 0.022); G.rect(x, y, 1, 3, TA2.steel2); G.px(x, y, TA2.steel); }
    for (let y = 22; y < 50; y++) G.px(54 + Math.round(Math.sin(y / 3)), y, '#22202e');          // kabel menjuntai
    G.rect(53, 50, 2, 2, TA2.yel);
    kepalaLampu(G, 50, 32, null); kepalaLampu(G, 15, 40, 'y');
    G.rect(50, 32, 7, 1, null);
  }
  G.outline();
  return G;
}
function makeLampuJalan(bengkok) {
  const W = 30, H = 96, G = Grid(W, H);
  if (!bengkok) { G.rect(4, 8, 3, 88, '#7d8794'); G.rect(4, 8, 1, 88, TA2.steelHi); G.line(5, 8, 12, 2, '#7d8794', 3); G.rect(12, 1, 14, 4, '#5d6470'); G.rect(14, 5, 10, 2, '#fff2b0'); }
  else { for (let y = 20; y < 96; y++) G.rect(4 + Math.round((96 - y) * 0.08), y, 3, 1, '#6d6a74'); G.line(10, 20, 20, 26, '#6d6a74', 3); G.rect(18, 26, 10, 4, '#4a4856'); }
  G.rect(1, 92, 10, 4, '#5d6470');
  G.outline();
  return G;
}

// ---------- KENDARAAN (menghadap kanan) ----------
function makeMobil(body, sedan, rusak) {
  const W = sedan ? 96 : 82, H = 36, G = Grid(W, H), dark = shade(body), roofL = sedan ? 24 : 18, roofR = sedan ? 62 : 56;
  G.rect(roofL, 2, roofR - roofL, 14, body);
  for (let y = 2; y < 16; y++) { G.px(roofL - Math.round((y - 2) * 0.9) - 1, y, body); G.rect(roofR, y, Math.round((y - 2) * 1.2) + 1, 1, body); }
  G.rect(roofL + 2, 4, (roofR - roofL) / 2 - 3, 10, TA2.glass); G.rect(roofL + (roofR - roofL) / 2 + 1, 4, (roofR - roofL) / 2 - 1, 10, TA2.glass);
  G.rect(roofL + 3, 5, 4, 1, TA2.glassHi); G.rect(roofL + (roofR - roofL) / 2 + 3, 5, 4, 1, TA2.glassHi);
  G.rect(2, 15, W - 4, 13, body); G.rect(2, 25, W - 4, 3, dark); G.rect(2, 15, W - 4, 1, shade(body, 1.15 > 1 ? 1 : 1));
  G.rect(W - 6, 17, 3, 3, '#fff2b0'); G.rect(3, 17, 2, 3, TA2.red);
  G.rect(roofL + 16, 19, 5, 1, dark); G.rect(roofL + (roofR - roofL) / 2, 16, 1, 10, dark);
  for (const wx of [14, W - 26]) { G.ell(wx + 6, 29, 7, 6, TA2.tire); G.ell(wx + 6, 29, 3, 3, TA2.hub); G.px(wx + 6, 29, TA2.steel2); }
  if (rusak) { G.rect(30, 18, 10, 4, dark); G.line(W - 30, 4, W - 22, 12, '#22202e'); G.rect(W - 8, 17, 3, 3, '#5a5a5a'); for (let i = 0; i < 6; i++) G.px(40 + i * 5, 22 + (i % 2), '#8a6a4a'); }
  G.outline();
  return G;
}
function makeAmbulans() {
  const W = 116, H = 56, G = Grid(W, H);
  G.rect(2, 6, 82, 40, TA2.white); G.rect(2, 6, 82, 3, '#e0e4ea'); G.rect(2, 34, 82, 6, TA2.red);
  G.rect(36, 14, 8, 20, TA2.red); G.rect(30, 20, 20, 8, TA2.red);
  G.rect(84, 18, 30, 28, TA2.white); for (let y = 6; y < 18; y++) G.rect(84, y, Math.round((y - 6) * 1.6), 1, TA2.white);
  G.rect(88, 20, 18, 12, TA2.glass); G.rect(89, 21, 5, 1, TA2.glassHi); G.rect(84, 34, 30, 6, TA2.red);
  G.rect(54, 14, 22, 12, TA2.glass); G.rect(54, 14, 22, 2, TA2.glassHi);
  G.rect(40, 1, 14, 5, '#3d3a52'); G.rect(41, 1, 6, 3, '#e0414a'); G.rect(47, 1, 6, 3, '#41a6f6');
  G.rect(110, 36, 4, 4, '#fff2b0');
  for (const wx of [14, 84]) { G.ell(wx + 6, 47, 8, 7, TA2.tire); G.ell(wx + 6, 47, 3, 3, TA2.hub); }
  G.outline();
  return G;
}
function makeMotor(jaket, helm, cat) {
  const W = 50, H = 50, G = Grid(W, H);
  // motor
  G.rect(10, 30, 28, 8, cat); G.rect(10, 30, 28, 2, shade(cat, 1)); G.rect(14, 28, 14, 3, '#2b2a36');
  G.line(36, 20, 40, 32, '#4a4858', 2); G.rect(36, 18, 6, 2, '#2b2a36'); G.rect(40, 30, 4, 3, '#fff2b0');
  for (const wx of [10, 38]) { G.ell(wx, 41, 7, 7, TA2.tire); G.ell(wx, 41, 3, 3, TA2.hub); }
  // pengendara (duduk)
  G.rect(16, 14, 11, 14, jaket); G.rect(16, 14, 2, 14, shade(jaket));
  G.line(25, 17, 36, 20, jaket, 3); G.rect(35, 19, 3, 3, TA2.skin);
  G.rect(18, 26, 12, 4, '#2b2a36'); G.line(28, 28, 30, 36, '#2b2a36', 4); G.rect(29, 36, 6, 3, '#1a1a22');
  G.ell(22, 7, 6, 6, helm); G.rect(23, 5, 6, 4, TA2.glass2); G.rect(16, 9, 12, 1, shade(helm));
  G.outline();
  return G;
}

// ---------- ALAM & BENDA JALAN ----------
function makePohon(layu) {
  const W = 64, H = 90, G = Grid(W, H), leaf = layu ? '#8a7a4a' : '#3fae5f', leaf2 = layu ? '#6a5a3a' : '#2a8048', leafHi = layu ? '#a89a6a' : '#7ad67a';
  G.rect(28, 50, 8, 40, '#7a5236'); G.rect(28, 50, 2, 40, '#5d3a24'); G.line(32, 62, 44, 52, '#7a5236', 3); G.line(31, 66, 20, 56, '#7a5236', 3);
  const blobs = layu ? [[32, 28, 18, 14], [18, 40, 10, 8], [46, 38, 10, 9]] : [[32, 26, 24, 18], [14, 38, 13, 11], [50, 36, 13, 12], [32, 44, 18, 9]];
  blobs.forEach(([x, y, rx, ry]) => G.ell(x, y, rx, ry, leaf2));
  blobs.forEach(([x, y, rx, ry]) => G.ell(x - 2, y - 2, rx - 3, ry - 3, leaf));
  for (let i = 0; i < (layu ? 10 : 22); i++) G.rect(14 + (i * 23) % 36, 14 + (i * 13) % 28, 3, 2, leafHi);
  if (layu) for (let i = 0; i < 6; i++) G.line(18 + i * 6, 30, 16 + i * 7, 22, '#5d3a24');
  G.rect(22, 88, 20, 2, layu ? '#8a7a4a' : '#3fae5f');
  G.outline();
  return G;
}
function makeHalte(rusak) {
  const W = 80, H = 66, G = Grid(W, H);
  G.rect(2, 2, 76, 5, rusak ? '#6d6a74' : '#5d6b8a'); G.rect(2, 7, 76, 2, '#3d3a52');
  for (const x of [6, 72]) G.rect(x, 9, 3, 57, TA2.steel2);
  G.rect(10, 12, 60, 34, rusak ? '#5c6070' : '#bfe4f4'); if (!rusak) { G.line(14, 40, 30, 16, TA2.glassHi, 2); G.line(40, 42, 56, 18, TA2.glassHi); }
  else { G.line(12, 14, 30, 40, '#9aa3b0'); G.line(40, 14, 66, 44, '#9aa3b0'); G.rect(48, 26, 10, 8, '#3a3848'); }
  G.rect(16, 50, 48, 4, '#8b5a2b'); G.rect(18, 54, 3, 12, '#5d3a1a'); G.rect(59, 54, 3, 12, '#5d3a1a');
  G.outline();
  return G;
}
function simple(W, H, f) { const G = Grid(W, H); f(G); G.outline(); return G; }
const TA2_BENDA = {
  tong_sampah: () => simple(16, 22, G => { G.rect(1, 3, 14, 19, '#3a9a5a'); G.rect(0, 1, 16, 3, '#2a7445'); G.rect(5, 9, 6, 6, '#e0e4ea'); }),
  pot_bunga:   () => simple(16, 20, G => { G.rect(3, 11, 10, 9, '#b86a3a'); G.rect(2, 10, 12, 2, '#d98a5a'); [[4, 6, '#e0414a'], [8, 3, '#ffcd45'], [12, 6, '#ff77a8']].forEach(([x, y, c]) => { G.line(8, 10, x, y + 2, '#2a8048'); G.ell(x, y, 2, 2, c); }); }),
  cone:        () => simple(16, 20, G => { for (let y = 2; y < 17; y++) G.rect(8 - Math.floor(y / 3), y, Math.floor(y / 3) * 2 + 1, 1, y > 7 && y < 11 ? '#f4f4f4' : '#ef7d57'); G.rect(1, 17, 15, 3, '#2b2a36'); }),
  palang:      () => simple(40, 28, G => { G.rect(4, 6, 3, 22, '#8a8f99'); G.rect(33, 6, 3, 22, '#8a8f99'); for (const y of [6, 15]) for (let x = 0; x < 40; x++) G.rect(x, y, 1, 6, Math.floor((x + y) / 5) % 2 ? '#f4f4f4' : '#e0414a'); G.ell(5, 3, 2, 2, '#ffcd45'); G.ell(34, 3, 2, 2, '#ffcd45'); }),
  sampah:      () => simple(44, 22, G => { [[10, 15, 9, 7, '#2b2a36'], [24, 13, 10, 9, '#3a4a3a'], [34, 16, 8, 6, '#5a4a6a'], [18, 18, 7, 4, '#8fbfe0'], [30, 19, 6, 3, '#c9b88a']].forEach(([x, y, rx, ry, c]) => G.ell(x, y, rx, ry, c)); for (let i = 0; i < 10; i++) G.rect(4 + i * 4, 20 + (i % 2), 2, 1, ['#e0414a', '#f4f4f4', '#ffcd45'][i % 3]); G.rect(22, 4, 2, 6, '#8a7f6a'); }),
  gerobak:     () => simple(48, 48, G => { G.rect(2, 2, 44, 4, '#a36a3a'); for (let x = 2; x < 46; x += 6) G.rect(x, 6, 3, 3, '#e0414a'); G.rect(6, 9, 2, 16, '#7a5236'); G.rect(40, 9, 2, 16, '#7a5236'); G.rect(4, 24, 40, 14, '#c9a46a'); G.rect(8, 16, 32, 8, '#bfe4f4'); G.rect(10, 18, 6, 4, '#ffcd45'); G.rect(20, 18, 8, 4, '#e8c96a'); G.ell(14, 41, 6, 6, '#3a3848'); G.ell(14, 41, 2, 2, TA2.hub); G.rect(42, 30, 6, 2, '#7a5236'); }),
  zebra:       () => simple(70, 8, G => { for (let x = 0; x < 70; x += 8) G.rect(x, 0, 5, 8, '#f0ede4'); }),
  retak:       () => simple(50, 8, G => { let y = 3; for (let x = 0; x < 50; x++) { y += x % 6 === 0 ? 1 : x % 7 === 0 ? -1 : 0; y = Math.max(1, Math.min(6, y)); G.px(x, y, '#1a1a24'); if (x % 9 === 0) G.line(x, y, x + 3, y + 2, '#1a1a24'); } }),
  lubang:      () => simple(40, 10, G => { G.ell(20, 5, 18, 4, '#15151d'); G.ell(20, 4, 14, 2, '#24242e'); }),
};

// jalan selebar layar (480 x 50): trotoar + kerb + aspal + marka
function makeJalan(rusak) {
  const W = 480, H = 50, G = Grid(W, H);
  G.rect(0, 0, W, 8, TA2.walk); for (let x = 0; x < W; x += 16) G.rect(x, 0, 1, 8, TA2.walk2); G.rect(0, 7, W, 1, TA2.walk2);
  G.rect(0, 8, W, 3, TA2.curb); G.rect(0, 10, W, 1, '#7d7a70');
  G.rect(0, 11, W, H - 11, TA2.asphalt); for (let i = 0; i < 160; i++) G.px((i * 37) % W, 14 + (i * 11) % (H - 16), TA2.asphalt2);
  for (let x = 0; x < W; x += 40) if (!(rusak && x % 120 === 40)) G.rect(x + 8, 29, 22, 2, rusak ? '#b8b4a6' : '#f0ede4');
  if (rusak) {
    for (const cx of [90, 300, 420]) { G.ell(cx, 22 + (cx % 3) * 6, 10, 3, '#15151d'); G.ell(cx, 21 + (cx % 3) * 6, 7, 1, '#24242e'); }
    let y = 15; for (let x = 140; x < 260; x++) { y += x % 6 === 0 ? 1 : x % 7 === 0 ? -1 : 0; y = Math.max(13, Math.min(46, y)); G.px(x, y, '#15151d'); }
    for (let i = 0; i < 40; i++) G.rect((i * 53) % W, 1 + (i % 6), 2, 1, ['#8a7f6a', '#c2c3c7', '#b13e53'][i % 3]);
  }
  return G;
}

function buildTA2Textures(scene) {
  for (const [k, o] of Object.entries(TA2_TOKOH)) {
    ['stand', 'walkA', 'walkB'].forEach((p, i) => makeOrang(o, p).toTexture(scene, `ta2_${k}_${i}`));
    ['shock', 'run', 'point'].forEach(p => makeOrang(o, p).toTexture(scene, `ta2_${k}_${p}`));
    if (scene.anims && !scene.anims.exists(`ta2_${k}_walk`) && scene.anims.create)
      scene.anims.create({ key: `ta2_${k}_walk`, frames: [1, 0, 2, 0].map(i => ({ key: `ta2_${k}_${i}` })), frameRate: 8, repeat: -1 });
  }
  makeRuko(false).toTexture(scene, 'ta2_ruko'); makeRuko(true).toTexture(scene, 'ta2_ruko_rusak');
  makeKantor(false).toTexture(scene, 'ta2_kantor'); makeKantor(true).toTexture(scene, 'ta2_kantor_rusak');
  makeLampuMerah('r').toTexture(scene, 'ta2_lampu_merah'); makeLampuMerah('g').toTexture(scene, 'ta2_lampu_hijau'); makeLampuMerah('bengkok').toTexture(scene, 'ta2_lampu_bengkok');
  makeLampuJalan(false).toTexture(scene, 'ta2_lampu_jalan'); makeLampuJalan(true).toTexture(scene, 'ta2_lampu_jalan_rusak');
  [['merah', '#d9434b'], ['biru', '#3e86d6'], ['hijau', '#46b06a'], ['ungu', '#8a5cc2']].forEach(([n, c]) => {
    makeMobil(c, false).toTexture(scene, `ta2_mobil_${n}`); makeMobil(c, true).toTexture(scene, `ta2_sedan_${n}`); makeMobil(c, false, true).toTexture(scene, `ta2_mobil_${n}_rusak`);
  });
  makeAmbulans().toTexture(scene, 'ta2_ambulans');
  makeMotor('#4a6a8a', '#f4f4f4', '#d9434b').toTexture(scene, 'ta2_motor_a'); makeMotor('#38b764', '#38b764', '#3e86d6').toTexture(scene, 'ta2_motor_b'); makeMotor('#e8b23a', '#d9434b', '#2b2a36').toTexture(scene, 'ta2_motor_c');
  makePohon(false).toTexture(scene, 'ta2_pohon'); makePohon(true).toTexture(scene, 'ta2_pohon_layu');
  makeHalte(false).toTexture(scene, 'ta2_halte'); makeHalte(true).toTexture(scene, 'ta2_halte_rusak');
  for (const [k, f] of Object.entries(TA2_BENDA)) f().toTexture(scene, `ta2_${k}`);
  makeJalan(false).toTexture(scene, 'ta2_jalan'); makeJalan(true).toTexture(scene, 'ta2_jalan_rusak');
}
