// ============================================================
//  SPRITES ROMAWI — seri "Andaikan terlempar ke Roma 50 M"
//  Peta kota Roma tampak atas (¾) + adegan jalan tampak samping + tokoh bertunik/toga.
//  Dibuat di canvas (seperti sprites-map.js). Dimuat SETELAH sprites-map.js:
//  buildMapTextures dibungkus agar mesin tidak perlu diubah.
// ============================================================

// ---------- tokoh: tunik, toga, stola (tubuh 12×15, sama dengan tokoh lain) ----------
const ROMA_HEAD = BOY_BODY.slice(0, 7);
const TUNIC_BODY = [...ROMA_HEAD,
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KBBBBBBK..',   // ikat pinggang
  '..KRRRRRRK..',
];
const TUNIC_LEGS = [
  ['..KRRRRRRK..', '...KSKKSK...', '...KTKKTK...'],   // diam (betis + sandal)
  ['..KRRRRRRK..', '..KSK..KSK..', '..KTK..KTK..'],   // jalan A
  ['...KRRRRK...', '....KSSK....', '....KTTK....'],   // jalan B
];
const TOGA_BODY = [...ROMA_HEAD,
  '..KWWWWWWK..',
  '.KSWwWWWWWK.',
  '.KSWWwWWWWK.',
  '..KWWWwWWK..',
  '..KWWWWwWK..',
];
const TOGA_LEGS = [
  ['..KWWWWWwK..', '..KWWWWWWK..', '...KTKKTK...'],
  ['..KWWWWWwK..', '..KWWWWWWK..', '..KTK..KTK..'],
  ['..KWWWWWwK..', '..KWWWWWWK..', '....KTTK....'],
];
const STOLA_BODY = [...GIRL_BODY.slice(0, 7),
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRBBBBRSK.',   // palla (selendang)
  '..KRRRRRRK..',
  '.KRRRRRRRRK.',
];
const STOLA_LEGS = [
  ['.KRRRRRRRRK.', '.KRRRRRRRRK.', '..KKTKKTKK..'],
  ['.KRRRRRRRRK.', '.KRRRRRRRRK.', '..KTK..KTK..'],
  ['.KRRRRRRRRK.', '.KRRRRRRRRK.', '...KKTTKK...'],
];
if (typeof CHARACTERS !== 'undefined') Object.assign(CHARACTERS, {
  // Dimas versi modern: kaos abu, jins, sepatu putih
  dimas:       { body: BOY_BODY, legs: [
                  ['..KBBKKBBK..', '..KBK..KBK..', '..KWK..KWK..'],
                  ['..KBK..KBK..', '.KBK....KBK.', '.KWK....KWK.'],
                  ['...KBKKBK...', '...KBKKBK...', '...KWWWWK...']],
                 colors: { H: '#1a1c2c', R: '#8b9bb4', B: '#29366f' } },
  dimas_tunik: { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#1a1c2c', R: '#a08a68', B: '#5d3a1a', T: '#5d3a1a' } },
  rm_tukang:   { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#5d3a1a', R: '#b5523b', B: '#5d3a1a', T: '#5d3a1a' } },   // tunik merah bata
  rm_pedagang: { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#c2c3c7', R: '#d9b36c', B: '#8b5a2b', T: '#5d3a1a' } },   // tunik kuning tanah
  rm_budak:    { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#3b2a1a', R: '#8a7f6a', B: '#5d4a32', T: '#3b2a1a' } },   // tunik kasar
  rm_pemuda:   { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#8b5a2b', R: '#5a8fbf', B: '#29366f', T: '#5d3a1a' } },
  rm_warga:    { body: TOGA_BODY,  legs: TOGA_LEGS,  colors: { H: '#5d3a1a', W: '#ece4d0', w: '#bfb49a', T: '#5d3a1a' } },   // warga bertoga
  rm_tua:      { body: TOGA_BODY,  legs: TOGA_LEGS,  colors: { H: '#c2c3c7', W: '#ece4d0', w: '#bfb49a', T: '#5d3a1a' } },
  rm_ibu:      { body: STOLA_BODY, legs: STOLA_LEGS, colors: { H: '#3b2a1a', R: '#7a8f5a', B: '#c9a96e', T: '#5d3a1a' } },
  rm_gadis:    { body: STOLA_BODY, legs: STOLA_LEGS, colors: { H: '#1a1c2c', R: '#b06a8f', B: '#e8d9b0', T: '#5d3a1a' } },
});

// ---------- palet Roma ----------
const RM = {
  tanah: '#cdb88c', tanah2: '#c2ab7c', tanah3: '#d8c69d',
  bukit: '#9fae6a', bukit2: '#8e9e5c',
  genteng: '#b5523b', genteng2: '#93402e', gentengT: '#d0714f',
  dinding: '#e2c79a', dinding2: '#c9a979', plester: '#d9a066', plester2: '#c9785a',
  marmer: '#ece6d6', marmer2: '#cfc6b0', marmer3: '#a89f8a',
  jalan: '#e0d2ae', jalanT: '#b9a67c',
  basal: '#5a5f6e', basal2: '#474b58', basalT: '#7b8091',
  air: '#2f6fbf', air2: '#41a6f6', airT: '#1f4f8f',
  pinus: '#2f6b3a', pinus2: '#3f8a4a', siprus: '#1f4d30',
  pasir: '#e4cf98', kayu: '#7a4a24', kayuT: '#5d3a1a', ink: '#1a1c2c',
};

function buildRomawiTextures(scene) {
  if (scene.textures.exists('roma_peta')) return;

  // =====================================================================
  //  PETA ROMA ±50 M (tampak atas ¾) — digambar 384×216 (2× detail), tampil skala 0.5 = 192×108 dunia
  //  Utara di atas. Tiber (barat) · Mausoleum Augustus · amfiteater Statilius Taurus · Teater Pompeius (Campus Martius)
  //  · Capitolium (kuil Jupiter beratap emas) · Forum · Palatium · Circus Maximus (obelisk) · Aventinus
  //  · Subura padat (timur laut) · akuaduk Aqua Claudia (masih dibangun, timur) · tembok Servius
  // =====================================================================
  mapCanvas(scene, 'roma_peta', 384, 216, (ctx, px) => {
    const rnd = mapRand(50), W2 = 384, H2 = 216;
    const blob = (cx, cy, rx, ry, c) => pxEllipse(px, cx, cy, rx, ry, c);
    const stroke = (pts, r, c) => { for (let k = 0; k < pts.length - 1; k++) { const [x1, y1] = pts[k], [x2, y2] = pts[k + 1], n = Math.ceil(Math.hypot(x2 - x1, y2 - y1)); for (let t = 0; t <= n; t++) px(Math.round(x1 + (x2 - x1) * t / n - r), Math.round(y1 + (y2 - y1) * t / n - r), c, r * 2 + 1, r * 2 + 1); } };
    px(0, 0, RM.tanah, W2, H2);
    for (let i = 0; i < 5200; i++) px(Math.floor(rnd() * W2), Math.floor(rnd() * H2), i % 3 ? RM.tanah2 : RM.tanah3);
    // bukit & taman (lebih hijau)
    const bukit = (cx, cy, rx, ry) => { blob(cx, cy + 2, rx, ry, RM.bukit2); blob(cx, cy, rx, ry, RM.bukit); for (let i = 0; i < rx * ry / 6; i++) { const a = rnd() * 6.28, d = Math.sqrt(rnd()); px(Math.round(cx + Math.cos(a) * rx * d), Math.round(cy + Math.sin(a) * ry * d), i % 2 ? '#8e9e5c' : '#b0bd7c'); } };
    bukit(52, 26, 50, 30);                                   // Trastevere / Ianiculum (barat sungai)
    bukit(130, 44, 58, 36);                                  // Campus Martius (padang)
    bukit(184, 98, 18, 13);                                  // Capitolium
    bukit(234, 154, 32, 19);                                 // Palatium
    bukit(104, 196, 36, 22);                                 // Aventinus
    bukit(350, 34, 40, 30); bukit(326, 176, 30, 20);         // Esquilinus (kebun) · Caelius

    // --- Sungai Tiber ---
    const tiber = [[88, -6], [80, 24], [68, 48], [52, 72], [48, 98], [58, 120], [66, 142], [58, 168], [44, 192], [34, 222]];
    stroke(tiber, 10, '#b8a274'); stroke(tiber, 9, RM.airT); stroke(tiber, 7, RM.air);
    for (let i = 0; i < 160; i++) { const k = Math.floor(rnd() * (tiber.length - 1)), t = rnd(); const [x1, y1] = tiber[k], [x2, y2] = tiber[k + 1]; px(Math.round(x1 + (x2 - x1) * t + (rnd() - 0.5) * 10), Math.round(y1 + (y2 - y1) * t), RM.air2, 3, 1); }
    // perahu dagang di sungai
    [[76, 34], [54, 92], [50, 178]].forEach(([x, y]) => { px(x - 3, y, '#5d3a1a', 7, 2); px(x - 2, y - 1, '#8b5a2b', 5, 1); px(x, y - 5, '#5d3a1a', 1, 4); px(x - 2, y - 4, '#ece4d0', 3, 3); });
    // Pulau Tiber berbentuk kapal + kuil Asklepius + obelisk "tiang" + 2 jembatan batu berlengkung
    blob(62, 130, 6, 12, '#b8a274'); blob(62, 130, 5, 11, RM.marmer2); px(60, 118, RM.marmer3, 4, 3);
    px(59, 126, RM.genteng, 7, 3); px(59, 129, RM.marmer, 7, 4); for (let x = 59; x < 66; x += 2) px(x, 129, RM.marmer3, 1, 4);
    px(62, 136, RM.marmer3, 1, 4);
    const jembatan = (x, y, w) => { px(x, y, RM.marmer3, w, 4); px(x, y, RM.marmer, w, 1); for (let k = x + 1; k < x + w - 1; k += 4) px(k, y + 2, RM.airT, 2, 2); };
    jembatan(44, 125, 13); jembatan(67, 133, 14); jembatan(56, 78, 18); jembatan(40, 160, 18);

    // --- tembok Servius (sebagian, berpintu) ---
    const tembok = [[150, 60], [176, 82], [204, 74], [250, 56], [300, 50], [342, 70], [352, 120], [300, 140], [292, 176], [260, 204]];
    for (let k = 0; k < tembok.length - 1; k++) { const [x1, y1] = tembok[k], [x2, y2] = tembok[k + 1], n = Math.ceil(Math.hypot(x2 - x1, y2 - y1)); for (let t = 0; t <= n; t++) { const x = Math.round(x1 + (x2 - x1) * t / n), y = Math.round(y1 + (y2 - y1) * t / n); px(x, y, '#9a8e74', 2, 2); if (t % 18 === 0) px(x - 1, y - 2, '#8a7e64', 4, 4); } }

    // --- jalan utama ---
    const roads = [[96, 72, 192, 72], [192, 72, 192, 88], [200, 132, 300, 132], [248, 88, 248, 132], [248, 88, 356, 88], [300, 60, 300, 132], [80, 132, 200, 132], [80, 132, 80, 208], [268, 132, 268, 200], [120, 100, 168, 100], [120, 72, 120, 132], [336, 88, 336, 140], [300, 60, 356, 60], [96, 72, 96, 16]];
    roads.forEach(([x1, y1, x2, y2]) => { const x = Math.min(x1, x2), y = Math.min(y1, y2); px(x - 2, y - 2, RM.jalanT, Math.abs(x2 - x1) + 5, Math.abs(y2 - y1) + 5); px(x - 1, y - 1, RM.jalan, Math.abs(x2 - x1) + 3, Math.abs(y2 - y1) + 3); });

    // --- pembuat bangunan (¾) ---
    const shadow = (x, y, w) => px(x + 2, y, 'rgba(40,25,10,0.28)', w, 2);
    const rumah = (x, y, w, h, roof = RM.genteng, wall = RM.dinding) => {       // atap genteng bergaris + dinding depan berjendela
      const rh = Math.max(3, Math.round(h * 0.62));
      shadow(x, y + h, w);
      px(x, y, roof, w, rh);
      for (let yy = y + 1; yy < y + rh; yy += 2) px(x, yy, RM.genteng2, w, 1);
      px(x, y, RM.gentengT, w, 1); px(x, y + Math.floor(rh / 2), RM.gentengT, w, 1);
      px(x, y + rh, wall, w, h - rh); px(x, y + rh, 'rgba(0,0,0,0.18)', w, 1);
      for (let wx = x + 1; wx < x + w - 1; wx += 3) px(wx, y + rh + 1 + ((h - rh) > 3 ? 1 : 0), '#4a3020', 1, 1);
    };
    const domus = (x, y, w, h) => {      // rumah atrium: genteng mengelilingi impluvium (kolam kecil) + peristilium hijau
      rumah(x, y, w, h);
      const ix = x + Math.floor(w / 2) - 2;
      px(ix, y + 1, RM.marmer2, 4, 3); px(ix + 1, y + 2, RM.air2, 2, 1);
      if (w > 10) { px(x + w - 5, y + 1, '#6f9a4a', 4, 3); px(x + w - 4, y + 2, '#4f7a3a', 2, 1); }
    };
    const insulaBlok = (x, y, w, h, c) => {   // blok rumah susun: atap berpola + halaman dalam gelap
      rumah(x, y, w, h, c % 2 ? RM.genteng : RM.genteng2, c % 3 ? RM.plester : RM.plester2);
      px(x + Math.floor(w / 2) - 1, y + 2, '#5d4030', 3, 2);
    };
    const kuil = (x, y, w, h, roof = RM.genteng) => {   // kuil: atap, deretan tiang, tangga depan
      shadow(x, y + h, w + 1);
      const rh = Math.round(h * 0.5);
      px(x, y, roof, w, rh); for (let yy = y + 1; yy < y + rh; yy += 2) px(x, yy, 'rgba(0,0,0,0.12)', w, 1); px(x, y, 'rgba(255,255,255,0.35)', w, 1);
      px(x, y + rh, RM.marmer2, w, h - rh);
      for (let cx = x; cx < x + w; cx += 2) px(cx, y + rh, RM.marmer, 1, h - rh - 2);
      px(x - 1, y + h - 2, RM.marmer, w + 2, 1); px(x - 2, y + h - 1, RM.marmer2, w + 4, 1);
    };
    const pinus = (x, y) => { px(x - 3, y + 4, 'rgba(0,0,0,0.25)', 8, 2); blob(x, y, 4, 3, RM.pinus); blob(x - 1, y - 1, 3, 2, RM.pinus2); px(x - 2, y - 2, '#5ca85a', 2, 1); };
    const siprus = (x, y) => { px(x, y + 6, 'rgba(0,0,0,0.25)', 4, 1); px(x, y, RM.siprus, 3, 6); px(x + 1, y - 2, RM.siprus, 1, 2); px(x, y + 1, '#2f6b3a', 1, 4); };

    // Mausoleum Augustus (gundukan bundar bertingkat + siprus)
    blob(110, 16, 11, 7, RM.marmer3); blob(110, 15, 10, 6, RM.marmer2); blob(110, 13, 7, 4, '#4f8a4a'); blob(110, 12, 3, 2, RM.marmer); px(110, 8, '#c9a24a', 1, 3);
    [[100, 12], [120, 12], [106, 18], [114, 18]].forEach(([x, y]) => siprus(x, y));
    // Amfiteater Statilius Taurus (lonjong berarkade)
    blob(150, 46, 17, 11, RM.marmer3); blob(150, 45, 16, 10, RM.marmer2);
    for (let a = 0; a < 40; a++) { const t = a / 40 * Math.PI * 2; px(Math.round(150 + Math.cos(t) * 15), Math.round(45 + Math.sin(t) * 9), a % 2 ? RM.marmer3 : '#7a705e'); }
    blob(150, 45, 11, 6, '#bdb39c'); blob(150, 45, 8, 4, RM.pasir); px(146, 44, '#d4bf86', 3, 1);
    // Teater Pompeius + portiko berkebun
    for (let r = 14; r >= 6; r -= 2) for (let a = 0; a <= 30; a++) { const t = Math.PI + a / 30 * Math.PI; px(Math.round(112 + Math.cos(t) * r), Math.round(84 + Math.sin(t) * r * 0.7), r % 4 ? RM.marmer2 : RM.marmer3, 2, 1); }
    px(98, 84, RM.marmer, 29, 3); kuil(108, 70, 8, 6);
    px(98, 88, RM.marmer3, 29, 14); px(100, 90, '#7fa85a', 25, 10); for (let x = 101; x < 124; x += 4) px(x, 92, '#4f7a3a', 2, 2);
    // kuil-kuil di Campus Martius
    kuil(132, 64, 10, 8); kuil(170, 24, 10, 8); kuil(84, 50, 9, 7);
    // Capitolium: kuil Jupiter (atap perunggu berlapis emas) + kuil Juno
    kuil(172, 86, 22, 14, '#d4ab4a'); kuil(196, 92, 10, 8);
    // Forum Romanum
    px(200, 100, 50, 30, RM.marmer3); px(202, 102, 46, 26, RM.marmer);
    for (let i = 0; i < 120; i++) px(202 + Math.floor(rnd() * 46), 102 + Math.floor(rnd() * 26), i % 2 ? RM.marmer2 : '#f4efe2');
    kuil(204, 88, 14, 12); kuil(224, 90, 10, 10); kuil(238, 88, 12, 12);    // kuil Saturnus, Concordia, Castor
    kuil(204, 120, 40, 8, RM.genteng2);                                      // Basilika Julia (panjang)
    px(220, 106, 8, 3, RM.marmer3); px(220, 106, 8, 1, '#8a8070');           // Rostra (mimbar)
    px(234, 112, 4, 3, '#c9a24a');                                           // patung berkuda
    // Palatium: istana (Domus Tiberiana) dengan halaman & taman
    rumah(212, 140, 22, 12, RM.genteng, RM.marmer2); px(218, 143, 8, 4, '#6f9a4a'); px(220, 144, 4, 2, RM.air2);
    rumah(238, 138, 24, 14, RM.genteng, RM.marmer2); px(244, 141, 10, 5, '#6f9a4a'); px(247, 142, 4, 2, RM.air2);
    domus(222, 158, 16, 9); domus(244, 158, 14, 9);
    // Circus Maximus: tribun bertingkat, arena pasir, spina + obelisk, gerbang start (carceres)
    blob(184, 184, 64, 13, '#8a7e68'); blob(184, 183, 62, 12, RM.marmer3); blob(184, 183, 58, 10, RM.marmer2);
    for (let a = 0; a < 90; a++) { const t = a / 90 * Math.PI * 2; px(Math.round(184 + Math.cos(t) * 60), Math.round(183 + Math.sin(t) * 11), '#7a705e'); }
    blob(184, 183, 52, 7, RM.pasir); for (let i = 0; i < 80; i++) px(136 + Math.floor(rnd() * 96), 178 + Math.floor(rnd() * 10), '#d8bf86');
    px(146, 182, 76, 2, RM.marmer3); px(146, 182, 76, 1, RM.marmer);        // spina
    px(183, 176, 2, 7, '#c9a24a'); px(183, 175, 1, 1, '#ffcd75');           // obelisk Mesir (Augustus)
    px(150, 181, 3, 3, '#c9a24a'); px(216, 181, 3, 3, '#c9a24a');           // meta (tiang belokan)
    px(124, 176, 4, 15, RM.marmer3); for (let y = 177; y < 190; y += 2) px(125, y, '#5d4030', 2, 1);   // carceres
    // Subura: insula padat dengan gang sempit
    for (let gy = 0; gy < 5; gy++) for (let gx = 0; gx < 7; gx++) {
      const x = 256 + gx * 12 + (gy % 2) * 2, y = 60 + gy * 12;
      if ((x > 296 && x < 304) || (y > 84 && y < 92)) continue;
      insulaBlok(x, y, 10, 9, gx + gy);
    }
    // perumahan lain
    [[118, 104, 12, 9], [134, 108, 10, 8], [148, 106, 12, 9], [90, 140, 14, 9], [108, 142, 12, 8], [126, 140, 14, 9], [150, 142, 12, 8], [172, 142, 14, 8],
     [88, 166, 12, 8], [104, 164, 14, 9], [86, 196, 12, 8], [104, 204, 14, 8], [124, 200, 12, 8],
     [276, 142, 12, 9], [292, 146, 14, 9], [280, 158, 12, 8], [300, 160, 12, 8], [314, 142, 14, 9], [316, 192, 14, 8], [336, 186, 12, 8],
     [16, 112, 14, 9], [12, 140, 12, 8], [20, 166, 14, 9], [8, 60, 12, 8], [24, 40, 14, 9], [14, 90, 12, 8],
     [200, 60, 14, 10], [220, 58, 12, 10], [226, 74, 14, 9], [166, 60, 12, 9], [314, 104, 12, 10], [352, 98, 14, 10], [366, 80, 12, 8], [346, 124, 12, 9], [360, 140, 14, 9], [200, 196, 14, 8], [226, 200, 12, 8]]
      .forEach(([x, y, w, h], i) => (i % 3 === 0 ? domus : rumah)(x, y, w, h, i % 3 ? RM.genteng : RM.genteng2, i % 2 ? RM.dinding : RM.plester));
    // pohon
    [[112, 30], [132, 22], [168, 40], [96, 40], [140, 78], [184, 60], [200, 160], [262, 170], [252, 176], [350, 20], [366, 40], [334, 30], [356, 54], [320, 170], [336, 162], [30, 20], [60, 14], [20, 128], [36, 150], [120, 186], [96, 182], [70, 204]].forEach(([x, y]) => pinus(x, y));
    [[192, 108], [174, 104], [258, 150], [206, 152], [118, 176], [132, 196], [360, 140], [12, 24], [40, 104], [286, 120]].forEach(([x, y]) => siprus(x, y));
    // akuaduk Aqua Claudia dari timur (selesai 52 M: ujungnya masih perancah kayu)
    for (let x = 306; x < W2; x += 5) { px(x, 70, RM.marmer3, 5, 2); px(x, 70, RM.marmer, 5, 1); px(x, 72, RM.marmer2, 1, 6); px(x + 4, 72, RM.marmer2, 1, 6); px(x + 1, 76, 'rgba(0,0,0,0.25)', 4, 2); }
    for (let x = 290; x < 306; x += 3) { px(x, 70, RM.kayu, 1, 8); px(x, 70, RM.kayu, 3, 1); px(x, 74, RM.kayuT, 3, 1); }
  });
  // gerbang besar & label kecil peta (prop terpisah, bisa "pop")
  mapCanvas(scene, 'roma_penanda', 7, 9, (ctx, px) => {      // pin lokasi
    pxEllipse(px, 3, 3, 3, 3, '#e43b44'); px(2, 2, '#f4f4f4', 2, 2); px(3, 6, '#e43b44', 1, 3); px(2, 6, '#e43b44', 3, 1);
  });

  // =====================================================================
  //  ADEGAN JALAN (tampak samping)
  // =====================================================================
  // jalan batu basal poligonal (khas Roma) + trotoar, 192×18 (taruh y=108, depth 2.5)
  mapCanvas(scene, 'jalan_batu', 192, 22, (ctx, px) => {
    const rnd = mapRand(9);
    px(0, 0, '#b9a67c', 192, 3); px(0, 0, '#d8c69d', 192, 1);                 // trotoar (crepido)
    for (let x = 0; x < 192; x += 7) px(x, 1, '#a8956c', 1, 2);
    px(0, 3, RM.basal2, 192, 19);
    for (let row = 0; row < 5; row++) {                                          // batu poligonal
      let x = -Math.floor(rnd() * 6);
      while (x < 192) {
        const w = 5 + Math.floor(rnd() * 5), y = 4 + row * 4;
        px(x + 1, y, RM.basal, w - 1, 3); px(x + 1, y, RM.basalT, w - 2, 1);
        x += w;
      }
    }
  });
  // fasad insula (rumah susun Roma): kedai di lantai dasar, jendela kayu, balkon, genteng
  const insula = (key, wall, wallD, seed) => mapCanvas(scene, key, 58, 66, (ctx, px) => {
    const rnd = mapRand(seed), w = 58, h = 66;
    px(0, 0, RM.genteng2, w, 3); px(0, 0, RM.gentengT, w, 1);                   // tepi genteng
    for (let x = 0; x < w; x += 3) px(x, 2, RM.genteng, 2, 1);
    px(1, 3, wall, w - 2, h - 3);                                                // plester
    for (let i = 0; i < 90; i++) px(1 + Math.floor(rnd() * (w - 2)), 3 + Math.floor(rnd() * (h - 18)), wallD);   // noda/usang
    for (let i = 0; i < 6; i++) { const x = 4 + Math.floor(rnd() * 48), y = 8 + Math.floor(rnd() * 30); px(x, y, '#c9a979', 4, 2); px(x + 1, y + 1, '#b38f5e', 2, 1); }   // plester mengelupas → bata
    px(1, 3, 'rgba(0,0,0,0.12)', 2, h - 3); px(w - 3, 3, 'rgba(0,0,0,0.18)', 2, h - 3);
    const jendela = (x, y, open) => { px(x - 1, y - 1, wallD, 6, 7); px(x, y, '#2b1d16', 4, 5); if (open) { px(x - 2, y, RM.kayu, 1, 5); px(x + 4, y, RM.kayu, 1, 5); } else { px(x, y, RM.kayu, 4, 5); px(x + 2, y, RM.kayuT, 1, 5); } px(x - 1, y + 5, RM.marmer2, 6, 1); };
    [8, 22, 36, 48].forEach((x, i) => jendela(x, 7, i % 2));                    // lantai 3 (kecil, miskin)
    [8, 22, 36, 48].forEach((x, i) => jendela(x, 20, (i + 1) % 2));            // lantai 2
    // balkon kayu (maenianum) lantai 1
    px(3, 33, RM.kayuT, w - 6, 2); for (let x = 4; x < w - 4; x += 3) px(x, 30, RM.kayu, 1, 3); px(3, 29, RM.kayu, w - 6, 1);
    px(10, 35, RM.kayuT, 1, 4); px(w - 11, 35, RM.kayuT, 1, 4);                // penyangga
    [12, 30, 44].forEach(x => { px(x, 24, '#2b1d16', 4, 4); });
    // jemuran di balkon
    [[14, 30, '#b06a8f'], [22, 30, '#e8d9b0'], [38, 30, '#5a8fbf']].forEach(([x, y, c]) => { px(x, y + 1, c, 4, 5); px(x, y + 1, 'rgba(255,255,255,0.25)', 4, 1); });
    // lantai dasar: 2 kedai (taberna) berlengkung + pintu tangga
    px(1, 40, wallD, w - 2, 1);
    const kedai = (x) => {
      px(x, 44, '#2b1d16', 16, 22); for (let a = 0; a < 3; a++) px(x + a, 44 - (3 - a), '#2b1d16', 16 - a * 2, 1);
      px(x - 1, 41, RM.marmer2, 18, 1);
      px(x + 2, 52, '#3d2a1c', 12, 14); px(x + 1, 58, RM.marmer2, 14, 2);      // meja batu
      px(x + 3, 54, '#8b5a2b', 2, 4); px(x + 7, 54, '#8b5a2b', 2, 4); px(x + 11, 55, '#c9785a', 2, 3);   // guci di meja
    };
    kedai(4); kedai(38);
    px(24, 46, '#3d2a1c', 9, 20); px(24, 46, RM.kayuT, 9, 1); px(28, 46, RM.kayu, 1, 20);   // pintu tangga
    // tulisan cat merah (iklan/pemilu dinding, khas Pompeii/Roma) — huruf abstrak
    for (let i = 0; i < 9; i++) px(6 + i * 2 + (i % 3 ? 0 : 1), 37, '#a8323e', 1, 2);
  });
  insula('insula_a', RM.plester, '#c48a52', 3);
  insula('insula_b', '#d2876a', '#b8705a', 4);
  insula('insula_c', '#dcc08e', '#c4a674', 5);

  // kuil di kejauhan (latar): tiang, pedimen, tangga — pucat agar terasa jauh
  mapCanvas(scene, 'kuil_jauh', 48, 40, (ctx, px) => {
    const c1 = '#d9d2c2', c2 = '#c2baa7', c3 = '#aaa290';
    for (let y = 0; y < 9; y++) { const ins = Math.round((8 - y) * 2.6); px(ins + 2, y, c2, 44 - ins * 2, 1); }   // pedimen
    px(2, 8, c3, 44, 2); px(1, 10, c1, 46, 2);                                    // entablatur
    for (let x = 4; x < 46; x += 6) { px(x, 12, c1, 3, 22); px(x + 2, 12, c2, 1, 22); px(x - 1, 12, c1, 5, 1); }  // tiang
    px(0, 34, c1, 48, 2); px(0, 36, c2, 48, 2); px(0, 38, c3, 48, 2);              // tangga
    px(18, 3, '#c9a24a', 12, 2);                                                   // patung emas di pedimen
  });
  // pohon pinus payung (siluet tampak samping) & siprus
  mapCanvas(scene, 'pinus_samping', 30, 36, (ctx, px) => {
    px(14, 12, RM.kayuT, 2, 24); px(12, 18, RM.kayuT, 2, 1); px(16, 14, RM.kayuT, 3, 1);
    pxEllipse(px, 15, 8, 14, 5, '#2f6b3a'); pxEllipse(px, 13, 6, 10, 3, '#3f8a4a'); px(6, 5, '#5ca85a', 6, 1);
  });
  mapCanvas(scene, 'siprus_samping', 10, 34, (ctx, px) => {
    for (let y = 0; y < 30; y++) { const half = Math.round(1 + Math.sin(Math.min(1, y / 22) * Math.PI * 0.55) * 4); px(5 - half, y, RM.siprus, half * 2, 1); px(5 - half, y, '#2f6b3a', 1, 1); }
    px(4, 30, RM.kayuT, 2, 4);
  });
  // amfora (guci) berdiri & bersandar
  mapCanvas(scene, 'amfora', 7, 14, (ctx, px) => {
    px(2, 0, '#8b5a2b', 3, 1); px(3, 1, '#8b5a2b', 1, 2); px(1, 1, '#8b5a2b', 1, 3); px(5, 1, '#8b5a2b', 1, 3);
    pxEllipse(px, 3, 7, 3, 4, '#b5683b'); px(1, 5, '#cf8a55', 1, 4); px(3, 11, '#8b5a2b', 1, 2); px(3, 13, '#5d3a1a', 1, 1);
  });
  // kios roti: meja + roti bulat bersekat 8 (panis, seperti temuan Pompeii)
  mapCanvas(scene, 'roti_romawi', 7, 4, (ctx, px) => {
    pxEllipse(px, 3, 2, 3, 2, '#c98a45'); px(1, 1, '#e0a865', 3, 1); px(3, 0, '#8b5a2b', 1, 4); px(0, 2, '#8b5a2b', 7, 1);
  });
  mapCanvas(scene, 'meja_roti', 34, 16, (ctx, px) => {
    px(0, 4, RM.marmer2, 34, 2); px(0, 4, RM.marmer, 34, 1); px(2, 6, '#8b6a45', 30, 10); px(2, 6, '#6d5235', 30, 1);
    for (let x = 4; x < 30; x += 6) px(x, 8, '#5d4530', 3, 7);
    [[2, 0], [9, 0], [16, 0], [23, 0], [6, -1]].forEach(([x, y]) => { pxEllipse(px, x + 3, y + 2, 3, 2, '#c98a45'); px(x + 3, y, '#8b5a2b', 1, 4); px(x, y + 2, '#8b5a2b', 7, 1); });
  });
  // HP modern (menyala & mati), kecil untuk di tangan
  mapCanvas(scene, 'hp_nyala', 5, 8, (ctx, px) => { px(0, 0, '#1a1c2c', 5, 8); px(1, 1, '#41a6f6', 3, 5); px(1, 1, '#9fd4ff', 3, 1); px(2, 7, '#8b9bb4', 1, 1); });
  mapCanvas(scene, 'hp_mati', 5, 8, (ctx, px) => { px(0, 0, '#1a1c2c', 5, 8); px(1, 1, '#2b2f45', 3, 5); px(1, 1, '#3d4258', 1, 2); });
  // Dimas tergeletak (baru terbangun) — tampak samping berbaring
  mapCanvas(scene, 'dimas_tidur', 16, 6, (ctx, px) => {
    px(0, 1, RM.ink, 5, 5); px(1, 1, '#1a1c2c', 3, 2); px(1, 3, '#f4c29a', 3, 2);      // kepala
    px(5, 1, RM.ink, 6, 5); px(5, 2, '#8b9bb4', 6, 3);                                 // kaos
    px(11, 2, RM.ink, 4, 4); px(11, 3, '#29366f', 4, 2); px(15, 3, '#f4f4f4', 1, 2);  // jins, sepatu
  });
  // kilat (petir) vertikal untuk momen terlempar
  mapCanvas(scene, 'kilat', 12, 40, (ctx, px) => {
    const pts = [[7, 0], [4, 12], [8, 13], [3, 26], [7, 27], [2, 40]];
    for (let k = 0; k < pts.length - 1; k++) { const [x1, y1] = pts[k], [x2, y2] = pts[k + 1], n = Math.abs(y2 - y1) || 1; for (let t = 0; t <= n; t++) { const x = Math.round(x1 + (x2 - x1) * t / n), y = Math.round(y1 + (y2 - y1) * t / n); px(x - 1, y, '#9fd4ff', 3, 1); px(x, y, '#ffffff', 1, 1); } }
  });
  // air mancur umum (lacus) — tempat warga ambil air
  mapCanvas(scene, 'air_mancur', 26, 16, (ctx, px) => {
    px(0, 8, RM.marmer3, 26, 8); px(1, 8, RM.marmer2, 24, 7); px(1, 8, RM.marmer, 24, 1);
    px(3, 9, RM.air, 20, 2); px(3, 9, RM.air2, 20, 1);
    px(10, 0, RM.marmer2, 6, 8); px(11, 1, '#c2baa7', 4, 3); px(12, 2, RM.marmer3, 2, 1);   // tiang berkepala singa (abstrak)
    px(12, 4, RM.air2, 1, 5); px(13, 5, RM.air, 1, 4);
  });

  // =====================================================================
  //  BAB 2 — dunia serba manual & kota yang kotor
  // =====================================================================
  const anim = (key, rate) => { if (!scene.anims.exists(key)) scene.anims.create({ key, frames: [{ key: `${key}_0` }, { key: `${key}_1` }], frameRate: rate, repeat: -1 }); };
  // gilingan gandum batu "jam pasir" (seperti di toko roti Pompeii) — 2 frame: palang kayu berputar
  [0, 1].forEach(f => mapCanvas(scene, `gilingan_${f}`, 26, 26, (ctx, px) => {
    px(3, 22, '#8a8070', 20, 4); px(3, 22, '#a89f8a', 20, 1);                       // alas batu
    for (let y = 12; y < 22; y++) { const half = Math.round(3 + (y - 12) * 0.7); px(13 - half, y, '#6d6a62', half * 2, 1); px(13 - half, y, '#8a877e', 2, 1); }   // meta (kerucut bawah)
    for (let y = 2; y < 14; y++) { const half = Math.round(7 - Math.abs(y - 8) * 0.55); px(13 - half, y, '#5a5750', half * 2, 1); px(13 - half, y, '#7a776e', 2, 1); }  // catillus (jam pasir)
    px(10, 1, '#3d3a34', 6, 2);                                                      // corong gandum
    px(11, 0, '#d9b36c', 4, 1);
    if (f === 0) { px(0, 8, RM.kayu, 26, 2); px(0, 8, RM.kayuT, 26, 1); }            // palang menyamping
    else { px(11, 6, RM.kayu, 4, 5); px(9, 7, RM.kayuT, 8, 2); }                     // palang menghadap kamera
    px(4, 21, '#efe6cf', 18, 1); px(6, 20, '#efe6cf', 3, 1); px(17, 20, '#efe6cf', 3, 1);   // tepung tumpah
  }));
  anim('gilingan', 2.5);
  // meja juru tulis: gulungan papirus terbuka, tempat tinta, pena buluh, rak gulungan
  mapCanvas(scene, 'meja_tulis', 34, 22, (ctx, px) => {
    px(22, 0, RM.kayu, 12, 12); px(23, 1, RM.kayuT, 10, 10);                        // rak gulungan
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { px(24 + c * 3, 2 + r * 3, '#e8d9b0', 2, 2); px(24 + c * 3, 2 + r * 3, '#c9b48a', 1, 1); }
    px(0, 12, '#8b6a45', 34, 2); px(0, 12, '#a07c52', 34, 1); px(3, 14, '#6d5235', 2, 8); px(29, 14, '#6d5235', 2, 8);
    px(4, 9, '#efe3c2', 14, 3); px(3, 9, '#c9b48a', 2, 3); px(17, 9, '#c9b48a', 2, 3);   // papirus terbuka
    for (let x = 6; x < 16; x += 2) px(x, 10, '#5d4a3a', 1, 1);                     // tulisan
    px(19, 10, '#2b1d16', 2, 2); px(20, 7, '#c9a24a', 1, 3);                        // tinta + pena buluh
  });
  // lapak baju bekas: rangka kayu, tunik tergantung, meja
  mapCanvas(scene, 'lapak_baju', 40, 30, (ctx, px) => {
    px(1, 0, RM.kayuT, 2, 30); px(37, 0, RM.kayuT, 2, 30); px(0, 1, RM.kayu, 40, 2);   // rangka
    [[4, '#a08a68'], [13, '#b5523b'], [22, '#5a8fbf'], [31, '#d9b36c']].forEach(([x, c]) => {   // tunik tergantung
      px(x + 2, 3, '#3d2a1c', 1, 1); px(x, 4, c, 6, 2); px(x - 1, 5, c, 8, 2); px(x, 7, c, 6, 8); px(x, 10, 'rgba(0,0,0,0.25)', 6, 1); px(x + 1, 4, 'rgba(255,255,255,0.2)', 2, 10);
    });
    px(0, 20, '#8b6a45', 40, 2); px(0, 20, '#a07c52', 40, 1); px(3, 22, '#6d5235', 3, 8); px(34, 22, '#6d5235', 3, 8);
    px(8, 18, '#a08a68', 8, 2); px(20, 18, '#8a7f6a', 9, 2); px(21, 17, '#8a7f6a', 7, 1);   // tumpukan kain
  });
  // kaos + jins Dimas (dilipat) — barang aneh bagi orang Roma
  mapCanvas(scene, 'kaos_modern', 12, 11, (ctx, px) => {
    px(1, 0, '#1a1c2c', 10, 6); px(2, 1, '#8b9bb4', 8, 4); px(0, 1, '#8b9bb4', 2, 2); px(10, 1, '#8b9bb4', 2, 2); px(4, 1, '#a9b6cc', 4, 1);
    px(1, 6, '#1a1c2c', 10, 5); px(2, 7, '#29366f', 8, 3); px(6, 7, '#3b5dc9', 1, 3); px(3, 8, '#c9a24a', 1, 1);
  });
  // selokan terbuka di tengah jalan (air kotor kehijauan)
  mapCanvas(scene, 'selokan', 70, 5, (ctx, px) => {
    const rnd = mapRand(21);
    px(0, 0, '#3a3d48', 70, 5); px(1, 1, '#4f5a3a', 68, 3); px(1, 1, '#66704a', 68, 1);
    for (let i = 0; i < 25; i++) px(1 + Math.floor(rnd() * 67), 2 + Math.floor(rnd() * 2), i % 3 ? '#3d4630' : '#7a6a3a', 2, 1);
  });
  // lalat beterbangan (2 frame)
  [0, 1].forEach(f => mapCanvas(scene, `lalat_${f}`, 16, 10, (ctx, px) => {
    const pts = f ? [[2, 3], [7, 1], [12, 5], [5, 7], [14, 8]] : [[3, 1], [8, 4], [11, 2], [4, 8], [13, 6]];
    pts.forEach(([x, y]) => { px(x, y, '#1a1c2c'); px(x - 1, y - 1, 'rgba(220,230,240,0.7)'); px(x + 1, y - 1, 'rgba(220,230,240,0.7)'); });
  }));
  anim('lalat', 7);
  // warga demam terbaring di trotoar (tunik, kain kompres)
  mapCanvas(scene, 'orang_sakit', 18, 7, (ctx, px) => {
    px(0, 2, '#1a1c2c', 18, 5);
    px(1, 3, '#3b2a1a', 2, 3); px(3, 3, '#e8c4a0', 3, 3); px(3, 2, '#f4f4f4', 3, 1);   // kepala + kompres
    px(6, 3, '#8a7f6a', 8, 3); px(6, 4, '#5d4a32', 8, 1); px(14, 4, '#e8c4a0', 3, 2);  // tunik, kaki
    px(4, 4, '#c94a4a', 1, 1);                                                          // pipi merah (demam)
  });
  // tikar lusuh
  mapCanvas(scene, 'tikar', 22, 2, (ctx, px) => { px(0, 0, '#8a7350', 22, 2); for (let x = 1; x < 22; x += 3) px(x, 0, '#6d5a3c', 1, 2); });
}

// pasang ke mesin tanpa mengubah engine.js: dibungkus pada buildMapTextures
if (typeof buildMapTextures === 'function') {
  const _buildMapTexturesAsli = buildMapTextures;
  buildMapTextures = function (scene) { _buildMapTexturesAsli(scene); buildRomawiTextures(scene); };   // eslint-disable-line no-global-assign
}
