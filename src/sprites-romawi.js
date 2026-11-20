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
const SALAM_BODY = [
  '....KKKK..K.',
  '...KHHHHKKSK',
  '..KHHHHHHKSK',
  '..KSSSSSSKSK',
  '..KSKSSKSKSK',
  '..KSSSSSSKSK',
  '...KSSSSKKSK',
  '..KRRRRRRRSK',
  '.KSRRRRRRRK.',
  '.KSRRRRRRK..',
  '..KBBBBBBK..',
  '..KRRRRRRK..',
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
  // Dimas duduk mengemis: tunik, tangan terulur ke kanan, kaki bersila
  dimas_duduk: { body: [...ROMA_HEAD, '..KRRRRRRK..', '.KSRRRRRRKSS', '..KBBBBBBK..'], legs: Array(3).fill(['.KRRRRRRRRK.', 'KSSSSKSSSSTK', '.KKKKKKKKKK.']),
                 colors: { H: '#1a1c2c', R: '#a08a68', B: '#5d3a1a', T: '#5d3a1a' } },
  // Lanista Varus: pemilik sekolah gladiator — gemuk, tunik merah anggur bersabuk emas
  rm_lanista:  { body: [...ROMA_HEAD, '.KRRRRRRRRK.', 'KSRRRRRRRRSK', 'KSRRRRRRRRSK', '.KBBBBBBBBK.', '.KRRRRRRRRK.'],
                 legs: [['.KRRRRRRRRK.', '...KSKKSK...', '...KTKKTK...'], ['.KRRRRRRRRK.', '..KSK..KSK..', '..KTK..KTK..'], ['..KRRRRRRK..', '....KSSK....', '....KTTK....']],
                 colors: { H: '#8a8a8a', R: '#7a2a3a', B: '#c9a24a', T: '#3b2a1a' } },
  // salam khas "Fulmen": kepalan tangan terangkat
  dimas_salam: { body: SALAM_BODY, legs: TUNIC_LEGS, colors: { H: '#1a1c2c', R: '#a08a68', B: '#5d3a1a', T: '#5d3a1a' } },
  rm_anak:     { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#5d3a1a', R: '#d9b36c', B: '#8b5a2b', T: '#5d3a1a' } },
  rm_anak2:    { body: TUNIC_BODY, legs: TUNIC_LEGS, colors: { H: '#1a1c2c', R: '#7a8f5a', B: '#5d3a1a', T: '#5d3a1a' } },
  rm_anak_salam:  { body: SALAM_BODY, legs: TUNIC_LEGS, colors: { H: '#5d3a1a', R: '#d9b36c', B: '#8b5a2b', T: '#5d3a1a' } },
  rm_anak2_salam: { body: SALAM_BODY, legs: TUNIC_LEGS, colors: { H: '#1a1c2c', R: '#7a8f5a', B: '#5d3a1a', T: '#5d3a1a' } },
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
  // =====================================================================
  //  BAB 3 — kelaparan: mengemis, gandum gratis khusus warga, lapak buah
  // =====================================================================
  // mangkuk kayu kosong untuk mengemis
  mapCanvas(scene, 'mangkuk', 6, 3, (ctx, px) => { px(0, 0, '#5d3a1a', 6, 1); px(1, 1, '#7a4a24', 4, 1); px(2, 2, '#5d3a1a', 2, 1); px(1, 0, '#3b2a1a', 4, 1); });
  // karung gandum
  mapCanvas(scene, 'karung_gandum', 10, 11, (ctx, px) => {
    px(3, 0, '#8a7350', 4, 2); px(4, 0, '#d9b36c', 2, 1);
    pxEllipse(px, 5, 7, 5, 4, '#b59a6a'); px(1, 5, '#cbb284', 2, 4); px(0, 10, 'rgba(0,0,0,0.25)', 10, 1); px(4, 2, '#6d5a3c', 2, 1);
  });
  // meja pembagian gandum: tumpukan gandum, takaran modius (ember kayu berkaki), daftar nama (papan lilin)
  mapCanvas(scene, 'meja_gandum', 44, 20, (ctx, px) => {
    pxEllipse(px, 12, 7, 9, 4, '#d9b36c'); px(5, 6, '#e8c98a', 8, 1); for (let i = 0; i < 12; i++) px(5 + (i * 7) % 15, 5 + (i * 3) % 5, '#b8943f');   // tumpukan gandum
    px(25, 2, '#5d3a1a', 9, 9); px(26, 3, '#7a4a24', 7, 7); px(26, 3, '#d9b36c', 7, 1); px(25, 5, '#c9a24a', 9, 1); px(25, 8, '#c9a24a', 9, 1);   // modius berpita perunggu
    px(36, 7, '#5d3a1a', 7, 4); px(37, 8, '#c9a24a', 5, 2); for (let x = 37; x < 42; x += 2) px(x, 8, '#5d3a1a');   // papan lilin daftar warga
    px(0, 10, '#8b6a45', 44, 2); px(0, 10, '#a07c52', 44, 1); px(2, 12, '#6d5235', 3, 8); px(39, 12, '#6d5235', 3, 8); px(5, 13, '#6d5235', 34, 1);
  });
  // lapak buah: atap kain belang, keranjang ara, anggur, apel, delima
  mapCanvas(scene, 'lapak_buah', 42, 32, (ctx, px) => {
    for (let x = 0; x < 42; x++) px(x, 0, (Math.floor(x / 6) % 2) ? '#b5523b' : '#ece4d0', 1, 4);   // atap kain
    for (let x = 0; x < 42; x += 6) px(x + 1, 4, (Math.floor(x / 6) % 2) ? '#93402e' : '#cfc6b0', 4, 1);
    px(1, 4, RM.kayuT, 2, 28); px(39, 4, RM.kayuT, 2, 28);
    px(0, 21, '#8b6a45', 42, 2); px(0, 21, '#a07c52', 42, 1); px(3, 23, '#6d5235', 3, 9); px(36, 23, '#6d5235', 3, 9);
    const kranjang = (x, c1, c2) => { px(x, 17, '#8a6a3a', 9, 4); px(x, 17, '#a8844c', 9, 1); for (let i = 0; i < 6; i++) px(x + 1 + (i % 3) * 3, 14 + Math.floor(i / 3) * 2, i % 2 ? c1 : c2, 2, 2); };
    kranjang(4, '#6a3d6e', '#8a5a8f');      // ara
    kranjang(16, '#b13e53', '#e43b44');     // apel
    kranjang(28, '#c9a24a', '#e0b85a');     // pir
    px(10, 8, '#38b764', 1, 3); pxEllipse(px, 11, 12, 2, 2, '#7a3b8f'); px(10, 11, '#9a5bb0', 1, 1);   // anggur tergantung
    px(33, 8, RM.kayuT, 1, 2); pxEllipse(px, 33, 11, 2, 2, '#c0392b');                                  // delima tergantung
  });
  // buah jatuh / sisa di tanah
  mapCanvas(scene, 'buah_jatuh', 8, 3, (ctx, px) => { px(0, 1, '#8a5a8f', 2, 2); px(3, 0, '#b13e53', 3, 3); px(4, 0, '#e86a73', 1, 1); px(6, 2, '#6d5a3c', 2, 1); });
  // =====================================================================
  //  BAB 4 — arena: amfiteater batu, tribun, gladiator, perekrutan, sumpah
  // =====================================================================
  // gladiator (tampak samping, menghadap kanan). pose 'siaga' / 'serang'. 22×22
  const gladiator = (key, o, pose) => mapCanvas(scene, key, 22, 25, (ctx, px0) => {
    const px = (x, y, c, w, h) => px0(x, y + 3, o.siluet && !/^rgba/.test(c) ? '#120d1c' : c, w, h);
    const K = '#1a1c2c', kulit = o.kulit || '#d9a273', kulitG = '#b07d52', bronze = '#c9a24a', bronzeG = '#8f6d2a', besi = '#c2c3c7';
    // kaki + pelindung betis + sandal
    px(7, 15, K, 3, 6); px(8, 15, kulit, 1, 5); px(11, 15, K, 3, 6); px(12, 15, kulit, 1, 5);
    if (o.greave2) px(7, 16, bronze, 3, 4);
    px(11, 16, bronze, 3, 4); px(12, 16, '#e0c070', 1, 3);
    px(6, 20, K, 4, 2); px(11, 20, K, 4, 2);
    // cawat (subligaculum) + sabuk lebar
    px(6, 12, K, 9, 4); px(7, 13, '#ece4d0', 7, 2); px(7, 12, o.sabuk || bronze, 7, 1);
    // badan telanjang dada
    px(6, 6, K, 9, 7); px(7, 7, kulit, 7, 5); px(8, 8, kulitG, 1, 1); px(11, 8, kulitG, 1, 1); px(9, 10, kulitG, 3, 1);
    // helm
    if (o.tanpaHelm) {                                                    // retiarius: kepala terbuka (wajah terlihat)
      px(7, -1, K, 7, 8); px(8, 0, kulit, 5, 6); px(7, -1, o.rambut || '#1a1c2c', 7, 2); px(7, 1, o.rambut || '#1a1c2c', 2, 3);
      px(11, 2, K, 1, 1); px(13, 2, K, 1, 1); px(12, 4, kulitG, 2, 1);
    } else if (o.helm === 'secutor') {                                    // secutor: helm bulat licin, 2 lubang mata kecil
      const hw = o.helmWarna || '#a9aebb'; px(7, -2, K, 7, 1); px(6, -1, K, 9, 8); px(7, -1, hw, 7, 7); px(8, -2, hw, 5, 1); px(8, 0, '#e8ecf2', 2, 2); px(9, -3, K, 3, 1);
      px(12, 2, K, 1, 1); px(14, 2, K, 1, 1); px(6, 5, '#8b9bb4', 10, 1);
    } else {
      px(6, 0, K, 9, 7); px(7, 1, o.helm || bronze, 7, 5); px(7, 1, '#e0c070', 3, 1); px(6, 5, o.helm || bronze, 10, 1);   // pinggiran lebar
      px(10, 3, K, 4, 2); px(11, 3, '#5a5f6e', 1, 1); px(13, 3, '#5a5f6e', 1, 1);                                           // kisi mata
    }
    if (o.jambul === 'tinggi') { px(7, -2, K, 7, 2); px(8, -3, K, 5, 1); px(8, -2, o.bulu || '#b13e53', 5, 2); px(9, -3, o.bulu || '#b13e53', 3, 1); }
    if (o.jambul === 'griffin') { px(8, -2, bronzeG, 2, 2); px(10, -3, bronzeG, 3, 1); px(13, -2, bronzeG, 2, 2); px(15, -1, bronzeG, 1, 2); px(9, -2, '#e0c070', 1, 1); }
    // lengan senjata (dengan manica/pelindung lengan) + senjata
    const pedang = (x1, y1, x2, y2) => { const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)); for (let t = 0; t <= n; t++) px(Math.round(x1 + (x2 - x1) * t / n), Math.round(y1 + (y2 - y1) * t / n), besi); };
    const kayu = (x1, y1, x2, y2) => { const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)); for (let t = 0; t <= n; t++) px(Math.round(x1 + (x2 - x1) * t / n), Math.round(y1 + (y2 - y1) * t / n), '#7a4a24'); };
    if (o.senjata === 'trisula') {                                        // retiarius: trisula panjang + jaring
      if (pose === 'serang') { kayu(2, 10, 18, 10); px(18, 8, besi, 1, 5); px(19, 8, besi, 3, 1); px(19, 10, besi, 3, 1); px(19, 12, besi, 3, 1); px(9, 9, K, 3, 3); }
      else { kayu(3, 17, 17, 3); px(16, 0, besi, 1, 3); px(17, 2, besi, 3, 1); px(18, -1, besi, 1, 3); px(19, 0, besi, 2, 1); px(20, -1, besi, 1, 2); px(9, 9, K, 3, 3); }
      if (o.jaring !== false && pose !== 'serang') for (let y = 9; y < 19; y += 2) for (let x = 1; x < 6; x += 2) { px(x, y, '#c9b48a'); px(x + 1, y + 1, '#8a7350'); }
      if (o.galerus) { px(5, 5, K, 5, 3); px(6, 5, bronze, 3, 2); px(6, 5, '#e0c070', 2, 1); }
    } else if (pose === 'serang') {
      px(10, 2, K, 3, 6); px(11, 3, '#ece4d0', 1, 4);                    // lengan terangkat
      if (o.senjata === 'sica') { pedang(12, 2, 17, -2); px(18, -1, besi); px(19, 0, besi); } else pedang(12, 2, 19, -3);
      px(11, 1, '#7a4a24', 2, 2);
    } else {
      px(4, 8, K, 3, 4); px(5, 9, '#ece4d0', 1, 2);                      // lengan di belakang
      if (o.senjata === 'sica') { pedang(5, 11, 9, 13); px(10, 12, besi); } else pedang(5, 11, 3, 15);
      px(4, 10, '#7a4a24', 2, 2);
    }
    // perisai di depan
    if (o.perisai === 'scutum') { px(14, 5, K, 7, 13); px(15, 6, o.warnaPerisai || '#b13e53', 5, 11); px(15, 6, '#d65a6e', 1, 11); px(17, 9, bronze, 2, 4); px(17, 10, '#e0c070', 1, 1); }
    else if (o.perisai === 'parma') { px(14, 7, K, 6, 7); px(15, 8, o.warnaPerisai || '#3b5dc9', 4, 5); px(16, 9, bronze, 2, 2); }
  });
  [['murmillo', { jambul: 'tinggi', perisai: 'scutum', warnaPerisai: '#b13e53', bulu: '#e43b44' }],
   ['thraex', { jambul: 'griffin', perisai: 'parma', warnaPerisai: '#3b5dc9', senjata: 'sica', greave2: true, kulit: '#c98e63' }],
   ['secutor', { helm: 'secutor', perisai: 'scutum', warnaPerisai: '#b5523b', kulit: '#c98e63' }],
   ['bruno', { helm: 'secutor', helmWarna: '#c9a24a', perisai: 'scutum', warnaPerisai: '#29366f', kulit: '#a8714a', sabuk: '#7a2a3a' }],
   ['retiarius', { tanpaHelm: true, senjata: 'trisula', perisai: 'none', galerus: true, kulit: '#c98e63', rambut: '#8b5a2b' }],
   ['siluet', { jambul: 'tinggi', perisai: 'scutum', siluet: true }],
   ['dimas_ret', { tanpaHelm: true, senjata: 'trisula', perisai: 'none', galerus: true, kulit: '#f4c29a', rambut: '#1a1c2c' }]]
    .forEach(([n, o]) => { gladiator(`gl_${n}`, o, 'siaga'); gladiator(`gl_${n}_serang`, o, 'serang'); });
  // percikan benturan logam
  mapCanvas(scene, 'denting', 13, 13, (ctx, px) => {
    [[6, 0, 1, 13], [0, 6, 13, 1]].forEach(([x, y, w, h]) => px(x, y, '#ffcd75', w, h));
    for (let i = 0; i < 5; i++) { px(2 + i * 2, 2 + i * 2, '#ffcd75'); px(10 - i * 2, 2 + i * 2, '#ffcd75'); }
    px(4, 4, '#ffffff', 5, 5); px(5, 3, '#ffffff', 3, 7); px(3, 5, '#ffffff', 7, 3);
  });
  // fasad amfiteater batu (2 lantai arkade + atik + tiang velarium + spanduk)
  mapCanvas(scene, 'amfiteater_luar', 170, 84, (ctx, px) => {
    const rnd = mapRand(44), b1 = '#d8cfba', b2 = '#bfb49c', b3 = '#9c917a', gelap = '#3b2f28';
    px(0, 14, b2, 170, 70); px(0, 14, b1, 170, 2);
    for (let i = 0; i < 260; i++) px(Math.floor(rnd() * 168), 16 + Math.floor(rnd() * 66), i % 2 ? b3 : '#cfc6b0', 2, 1);   // tekstur batu
    const lantai = (y0, h) => {
      px(0, y0 - 2, b1, 170, 2); px(0, y0, b3, 170, 1);                                // entablatur
      for (let x = 4; x < 166; x += 18) {
        px(x, y0 + 4, gelap, 12, h - 4); px(x, y0 + 2, gelap, 12, 3); px(x + 1, y0 + 1, gelap, 10, 1); px(x + 3, y0, gelap, 6, 1);   // lengkung arkade
        px(x + 1, y0 + h - 3, '#5a4a3a', 10, 3);                                       // lantai dalam
        px(x + 13, y0 + 1, b1, 3, h); px(x + 13, y0 + 1, '#ece6d6', 1, h); px(x + 12, y0, b1, 5, 1);   // tiang setengah
      }
    };
    lantai(22, 28); lantai(52, 30);
    px(0, 14, b1, 170, 6); for (let x = 2; x < 170; x += 9) px(x, 16, b3, 4, 2);     // atik berjendela
    for (let x = 10; x < 170; x += 24) { px(x, 0, '#7a4a24', 2, 16); px(x - 1, 0, '#5d3a1a', 4, 1); }   // tiang velarium
    for (let x = 22; x < 160; x += 36) { px(x, 26, '#b13e53', 7, 16); px(x, 26, '#c9a24a', 7, 2); px(x + 2, 31, '#c9a24a', 3, 3); px(x + 1, 42, '#b13e53', 2, 2); px(x + 4, 42, '#b13e53', 2, 2); }   // spanduk
    px(78, 56, '#2b1d16', 14, 28); px(76, 54, b1, 18, 2); px(82, 52, '#c9a24a', 6, 2);   // gerbang utama
    px(0, 82, b3, 170, 2);
  });
  // ikon Colosseum (untuk kartu "belum ada") + tanda silang
  mapCanvas(scene, 'colosseum_ikon', 44, 28, (ctx, px) => {
    px(0, 0, '#f4f4f4', 44, 28); px(1, 1, '#41a6f6', 42, 26);
    pxEllipse(px, 22, 16, 18, 9, '#bfb49c'); px(4, 9, '#d8cfba', 36, 14); px(6, 22, '#9c917a', 32, 2);
    for (let r = 0; r < 3; r++) for (let x = 6; x < 38; x += 4) px(x, 11 + r * 4, '#5a4a3a', 2, 2);
    px(30, 6, '#d8cfba', 9, 4); px(4, 8, '#ece6d6', 36, 1);
  });
  mapCanvas(scene, 'tanda_x', 30, 30, (ctx, px) => { for (let i = 0; i < 30; i++) { px(i, i - 1, '#1a1c2c', 1, 4); px(29 - i, i - 1, '#1a1c2c', 1, 4); } for (let i = 1; i < 29; i++) { px(i, i, '#e43b44', 1, 2); px(29 - i, i, '#e43b44', 1, 2); } });
  // tribun penonton (dalam arena, tampak samping): undakan + penonton bersorak (2 frame)
  [0, 1].forEach(f => mapCanvas(scene, `tribun_${f}`, 192, 70, (ctx, px) => {
    const rnd = mapRand(77), baju = ['#ece4d0', '#b5523b', '#d9b36c', '#5a8fbf', '#8a7f6a', '#b06a8f', '#7a8f5a', '#a08a68', '#ece4d0'], rambut = ['#1a1c2c', '#3b2a1a', '#5d3a1a', '#8b5a2b', '#c2c3c7'];
    px(0, 0, '#9c917a', 192, 70);
    for (let t = 0; t < 7; t++) {
      const y = 4 + t * 8;
      px(0, y + 6, '#cfc6b0', 192, 2); px(0, y + 7, '#8a8070', 192, 1);               // undakan batu
      for (let x = 1 + (t % 2) * 2; x < 190; x += 4) {
        if (rnd() < 0.08) continue;
        const c = baju[Math.floor(rnd() * baju.length)], h = rambut[Math.floor(rnd() * rambut.length)], up = f === 1 && rnd() < 0.45;
        px(x, y + 3, c, 3, 3); px(x, y + 1, '#e0b089', 3, 2); px(x, y + 1, h, 3, 1);
        if (up) { px(x - 1, y, '#e0b089', 1, 3); px(x + 3, y, '#e0b089', 1, 3); }
      }
      if (t === 2) px(0, y + 6, '#b5523b', 192, 1);                                      // batas kelas tempat duduk
    }
    px(84, 30, '#5a2a5a', 24, 14); px(84, 30, '#c9a24a', 24, 2); px(86, 32, '#7a3b8f', 20, 12);   // tribun kehormatan
    for (let x = 88; x < 106; x += 4) { px(x, 36, '#ece4d0', 3, 4); px(x, 34, '#e0b089', 3, 2); }
    px(0, 60, '#ece4d0', 192, 10); px(0, 60, '#c9a24a', 192, 1);                        // dinding podium bercat
    for (let x = 4; x < 192; x += 24) { px(x, 62, '#b13e53', 16, 6); px(x + 1, 63, '#d65a6e', 14, 1); }
    for (let x = 0; x < 192; x += 6) px(x, 57, '#5d3a1a', 1, 3); px(0, 57, '#5d3a1a', 192, 1);   // pagar pengaman
  }));
  anim('tribun', 3);
  // velarium (kain peneduh bergaris di atas tribun)
  mapCanvas(scene, 'velarium', 192, 12, (ctx, px) => { for (let x = 0; x < 192; x++) { const d = Math.round(Math.sin(x / 192 * Math.PI) * 6); px(x, 0, (Math.floor(x / 12) % 2) ? '#b13e53' : '#ece4d0', 1, 5 + d); } px(0, 0, '#7a4a24', 192, 1); });
  // lantai pasir arena
  mapCanvas(scene, 'pasir_arena', 192, 22, (ctx, px) => {
    const rnd = mapRand(9); px(0, 0, '#e4cf98', 192, 22); px(0, 0, '#c9b07a', 192, 2);
    for (let i = 0; i < 220; i++) px(Math.floor(rnd() * 192), 2 + Math.floor(rnd() * 20), i % 3 ? '#d6be86' : '#f0dcaa', 2, 1);
    px(60, 9, '#c98a6a', 3, 1); px(130, 14, '#c98a6a', 2, 1);
  });
  // meja perekrut: kantong koin, tumpukan koin, papan lilin perjanjian
  mapCanvas(scene, 'meja_rekrut', 36, 18, (ctx, px) => {
    pxEllipse(px, 8, 5, 5, 4, '#8b5a2b'); px(6, 0, '#5d3a1a', 5, 2); px(7, 2, '#c9a24a', 3, 1);   // kantong
    [[16, 6], [19, 6], [17, 5], [22, 6]].forEach(([x, y]) => { px(x, y, '#e0b85a', 3, 2); px(x, y, '#ffcd75', 2, 1); });   // koin
    px(26, 3, '#5d3a1a', 8, 6); px(27, 4, '#c9a24a', 6, 4); for (let y = 5; y < 8; y += 2) px(28, y, '#5d3a1a', 4, 1);
    px(0, 9, '#8b6a45', 36, 2); px(0, 9, '#a07c52', 36, 1); px(2, 11, '#6d5235', 3, 7); px(31, 11, '#6d5235', 3, 7);
  });
  mapCanvas(scene, 'koin', 4, 4, (ctx, px) => { px(1, 0, '#c9a24a', 2, 4); px(0, 1, '#c9a24a', 4, 2); px(1, 1, '#ffcd75', 1, 1); });
  mapCanvas(scene, 'obor', 6, 22, (ctx, px) => { px(2, 6, '#5d3a1a', 2, 16); px(1, 5, '#8b5a2b', 4, 2); px(1, 0, '#ef7d57', 4, 5); px(2, 1, '#ffcd75', 2, 3); });
  // ikon sumpah: api, rantai, cambuk, pedang (16×16)
  mapCanvas(scene, 'ikon_api', 16, 16, (ctx, px) => { pxEllipse(px, 8, 10, 6, 5, '#e43b44'); px(5, 3, '#e43b44', 3, 5); px(9, 1, '#e43b44', 3, 7); pxEllipse(px, 8, 11, 4, 3, '#ef7d57'); px(7, 6, '#ef7d57', 2, 4); pxEllipse(px, 8, 12, 2, 2, '#ffcd75'); });
  mapCanvas(scene, 'ikon_rantai', 16, 16, (ctx, px) => { for (let i = 0; i < 4; i++) { const x = 1 + i * 3, y = 1 + i * 3; px(x, y, '#8b9bb4', 5, 2); px(x, y + 3, '#8b9bb4', 5, 2); px(x, y, '#8b9bb4', 2, 5); px(x + 3, y, '#8b9bb4', 2, 5); px(x + 1, y + 1, '#c2c3c7', 1, 1); } });
  mapCanvas(scene, 'ikon_cambuk', 16, 16, (ctx, px) => { px(1, 11, '#5d3a1a', 5, 3); px(1, 11, '#8b5a2b', 5, 1); [[6, 11], [8, 10], [10, 8], [11, 6], [12, 4], [12, 2], [11, 1], [9, 1]].forEach(([x, y]) => px(x, y, '#3b2a1a', 2, 1)); px(8, 0, '#3b2a1a', 1, 2); });
  mapCanvas(scene, 'ikon_pedang', 16, 16, (ctx, px) => { for (let i = 0; i < 10; i++) px(4 + i, 11 - i, '#c2c3c7', 2, 2); px(13, 1, '#f4f4f4', 1, 1); px(2, 10, '#c9a24a', 5, 2); px(4, 8, '#c9a24a', 2, 5); px(1, 13, '#5d3a1a', 3, 2); });
  // =====================================================================
  //  BAB 5 — ludus (sekolah gladiator) & ilmu fisika
  // =====================================================================
  // ludus di peta (tampak atas): halaman pasir berpagar + deretan sel beratap genteng
  mapCanvas(scene, 'ludus_peta', 34, 24, (ctx, px) => {
    px(0, 0, RM.genteng2, 34, 24); px(1, 1, RM.genteng, 32, 22); for (let x = 2; x < 33; x += 3) px(x, 1, RM.gentengT, 1, 22);
    px(5, 5, RM.marmer3, 24, 14); px(6, 6, RM.pasir, 22, 12); px(6, 6, '#d4bf86', 22, 1);
    for (let x = 9; x < 27; x += 5) { px(x, 9, '#5d3a1a', 1, 2); px(x + 1, 13, '#1a1c2c', 1, 1); }   // tiang latihan (palus) + orang
    px(15, 18, '#2b1d16', 4, 2);
  });
  // dinding dalam ludus: batu, pintu sel berjeruji, obor menyala
  mapCanvas(scene, 'dinding_ludus', 192, 64, (ctx, px) => {
    const rnd = mapRand(31); px(0, 0, '#7a705e', 192, 64);
    for (let y = 0; y < 64; y += 6) for (let x = (y / 6) % 2 * 6; x < 192; x += 12) { px(x, y, '#8a8070', 11, 5); px(x, y, '#9c917a', 11, 1); }
    for (let i = 0; i < 120; i++) px(Math.floor(rnd() * 190), Math.floor(rnd() * 62), '#6a604e', 2, 1);
    for (let x = 10; x < 192; x += 46) { px(x, 26, '#1a1c2c', 22, 38); px(x + 1, 27, '#2b1d16', 20, 37); for (let k = x + 3; k < x + 21; k += 4) px(k, 27, '#5a5f6e', 1, 37); px(x + 1, 40, '#5a5f6e', 20, 1); px(x - 2, 24, '#9c917a', 26, 2); }
    px(0, 60, '#5a4a3a', 192, 4);
  });
  [0, 1].forEach(f => mapCanvas(scene, `api_obor_${f}`, 6, 8, (ctx, px) => { px(1, f ? 1 : 0, '#e43b44', 4, 7 - (f ? 1 : 0)); px(2, f ? 2 : 1, '#ef7d57', 2, 5); px(2, f ? 4 : 3, '#ffcd75', 2, 3); px(f ? 0 : 5, 2, '#ef7d57', 1, 2); }));
  anim('api_obor', 6);
  mapCanvas(scene, 'gagang_obor', 4, 12, (ctx, px) => { px(1, 0, '#3b2a1a', 2, 12); px(0, 0, '#5a5f6e', 4, 2); });
  // meja makan panjang + mangkuk bubur, kendi, cangkir
  mapCanvas(scene, 'meja_makan', 70, 14, (ctx, px) => { px(0, 0, '#8b6a45', 70, 3); px(0, 0, '#a07c52', 70, 1); px(3, 3, '#6d5235', 3, 11); px(64, 3, '#6d5235', 3, 11); px(33, 3, '#6d5235', 3, 11); });
  mapCanvas(scene, 'mangkuk_bubur', 9, 5, (ctx, px) => { px(1, 0, '#e8d9b0', 7, 2); px(2, 0, '#c9a86a', 2, 1); px(5, 1, '#8b5a2b', 1, 1); px(0, 1, '#7a4a24', 9, 2); px(1, 3, '#5d3a1a', 7, 1); px(2, 4, '#5d3a1a', 5, 1); });
  [0, 1].forEach(f => mapCanvas(scene, `uap_${f}`, 8, 8, (ctx, px) => { const xs = f ? [2, 3, 2, 1] : [3, 2, 3, 4]; xs.forEach((x, i) => { px(x, i * 2, 'rgba(255,255,255,0.75)', 1, 2); px(x + 3, i * 2 + 1, 'rgba(255,255,255,0.55)', 1, 1); }); }));
  anim('uap', 3);
  mapCanvas(scene, 'cangkir_abu', 6, 7, (ctx, px) => { px(0, 0, '#5a5f6e', 6, 1); px(1, 1, '#9a9a8a', 4, 1); px(0, 1, '#b5683b', 1, 5); px(5, 1, '#b5683b', 1, 5); px(1, 2, '#b5683b', 4, 5); px(1, 2, '#cf8a55', 1, 4); });
  // halaman ludus: pagar tiang + atap serambi di latar
  mapCanvas(scene, 'serambi_ludus', 192, 50, (ctx, px) => {
    px(0, 0, RM.genteng2, 192, 6); px(0, 0, RM.gentengT, 192, 2); for (let x = 0; x < 192; x += 4) px(x, 2, RM.genteng, 2, 4);
    px(0, 6, '#d8cfba', 192, 3); px(0, 9, '#5a4a3a', 192, 41);
    for (let x = 4; x < 192; x += 16) { px(x, 9, '#d8cfba', 4, 41); px(x, 9, '#ece6d6', 1, 41); px(x - 1, 9, '#bfb49c', 6, 2); }
    for (let x = 12; x < 192; x += 32) { px(x, 22, '#2b1d16', 8, 28); }
  });
  // trainee memukul tiang latihan (palus) — 2 frame
  [0, 1].forEach(f => mapCanvas(scene, `latih_${f}`, 26, 22, (ctx, px) => {
    px(19, 2, '#5d3a1a', 4, 20); px(19, 2, '#7a4a24', 1, 20); px(18, 21, '#3b2a1a', 6, 1); px(19, 7, '#8a7350', 4, 1); px(19, 12, '#8a7350', 4, 1);   // palus
    px(5, 14, '#1a1c2c', 3, 7); px(9, 14, '#1a1c2c', 3, 7); px(6, 14, '#c98e63', 1, 6); px(10, 14, '#c98e63', 1, 6);
    px(4, 11, '#1a1c2c', 9, 4); px(5, 11, '#ece4d0', 7, 3); px(4, 5, '#1a1c2c', 9, 7); px(5, 6, '#c98e63', 7, 5);
    px(5, 0, '#1a1c2c', 7, 6); px(6, 1, '#c98e63', 5, 4); px(5, 0, '#3b2a1a', 7, 2); px(9, 2, '#1a1c2c', 1, 1);
    if (f) { for (let i = 0; i < 7; i++) px(11 + i, 6 + Math.floor(i / 3), '#a07c52', 1, 2); px(18, 7, '#ffcd75'); px(17, 5, '#ffcd75'); }   // rudis (pedang kayu) mengenai tiang
    else { for (let i = 0; i < 6; i++) px(10 + Math.floor(i / 2), 4 - i, '#a07c52', 1, 2); }
    px(1, 7, '#8a7350', 4, 7); px(1, 7, '#a08a68', 1, 7);   // perisai anyaman
  }));
  anim('latih', 4);
  // rak senjata: scutum, parma, gladius, trisula, jaring, helm
  mapCanvas(scene, 'rak_senjata', 56, 30, (ctx, px) => {
    px(0, 4, '#5d3a1a', 56, 2); px(0, 18, '#5d3a1a', 56, 2); px(1, 4, '#3b2a1a', 2, 26); px(53, 4, '#3b2a1a', 2, 26);
    px(4, 6, '#1a1c2c', 9, 16); px(5, 7, '#b13e53', 7, 14); px(8, 11, '#c9a24a', 2, 4);                    // scutum
    pxEllipse(px, 19, 12, 4, 4, '#3b5dc9'); px(18, 11, '#c9a24a', 2, 2);                                      // parma
    for (let k = 0; k < 3; k++) { px(26 + k * 3, 2, '#c2c3c7', 1, 14); px(25 + k * 3, 15, '#c9a24a', 3, 1); px(26 + k * 3, 16, '#5d3a1a', 1, 3); }   // gladius
    px(37, 0, '#7a4a24', 1, 28); px(35, 0, '#c2c3c7', 5, 1); px(35, 0, '#c2c3c7', 1, 3); px(37, 0, '#c2c3c7', 1, 3); px(39, 0, '#c2c3c7', 1, 3);   // trisula
    for (let y = 6; y < 17; y += 2) for (let x = 41; x < 47; x += 2) { px(x, y, '#c9b48a'); px(x + 1, y + 1, '#8a7350'); }   // jaring
    pxEllipse(px, 50, 24, 3, 3, '#c9a24a'); px(48, 22, '#e0c070', 2, 1); pxEllipse(px, 9, 25, 3, 3, '#a9aebb');   // helm
  });
  // scutum berat (untuk dicoba Dimas)
  mapCanvas(scene, 'scutum', 10, 16, (ctx, px) => { px(0, 0, '#1a1c2c', 10, 16); px(1, 1, '#b13e53', 8, 14); px(1, 1, '#d65a6e', 1, 14); px(4, 6, '#c9a24a', 2, 4); });
  // helm secutor besar (zoom detail): telur licin, 2 lubang mata kecil, sirip
  mapCanvas(scene, 'helm_secutor_besar', 44, 46, (ctx, px) => {
    pxEllipse(px, 22, 24, 19, 21, '#1a1c2c'); pxEllipse(px, 22, 24, 18, 20, '#a9aebb'); pxEllipse(px, 18, 18, 11, 12, '#c2c7d2'); pxEllipse(px, 14, 12, 4, 5, '#eef1f6');
    px(20, 2, '#1a1c2c', 4, 6); px(21, 2, '#8b9bb4', 2, 6);                                                    // sirip
    pxEllipse(px, 16, 24, 2, 2, '#1a1c2c'); pxEllipse(px, 28, 24, 2, 2, '#1a1c2c'); px(15, 23, '#3d4258'); px(27, 23, '#3d4258');   // lubang mata kecil
    px(4, 40, '#8b9bb4', 36, 3); px(4, 40, '#1a1c2c', 36, 1);                                                 // pelindung leher
  });
  [0, 1].forEach(f => mapCanvas(scene, `napas_${f}`, 12, 8, (ctx, px) => { const a = f ? 0.8 : 0.45; px(0, 3, `rgba(255,255,255,${a})`, f ? 8 : 5, 2); px(f ? 7 : 4, 1, `rgba(255,255,255,${a * 0.7})`, 4, 2); px(f ? 9 : 6, 5, `rgba(255,255,255,${a * 0.6})`, 3, 2); }));
  anim('napas', 2);
  // =====================================================================
  //  BAB 6–8 + PENUTUP — data, penonton, duel
  // =====================================================================
  // daun palma (simbol kemenangan gladiator)
  mapCanvas(scene, 'palma', 8, 14, (ctx, px) => { px(4, 3, '#5d3a1a', 1, 11); for (let i = 0; i < 5; i++) { px(1, 1 + i * 2, '#38b764', 3, 1); px(5, 1 + i * 2, '#38b764', 3, 1); px(2, 2 + i * 2, '#257179', 2, 1); px(5, 2 + i * 2, '#257179', 2, 1); } px(4, 0, '#38b764', 1, 2); });
  // papan lilin kecil (dipegang) & besar (catatan analis)
  mapCanvas(scene, 'papan_lilin', 9, 7, (ctx, px) => { px(0, 0, '#5d3a1a', 9, 7); px(1, 1, '#c9a24a', 7, 5); for (let y = 2; y < 6; y += 2) px(2, y, '#5d3a1a', 5, 1); });
  mapCanvas(scene, 'papan_lilin_besar', 104, 62, (ctx, px) => {
    px(0, 0, '#3b2a1a', 104, 62); px(2, 2, '#7a4a24', 100, 58); px(6, 6, '#2b2218', 92, 50); px(7, 7, '#4a3b28', 90, 48);
    for (let i = 0; i < 40; i++) px(8 + (i * 37) % 88, 8 + (i * 13) % 46, '#5a4a32', 2, 1);   // goresan lilin
    px(51, 0, '#3b2a1a', 2, 62);                                                              // lipatan diptych
    for (let y = 2; y < 60; y += 12) { px(0, y, '#c9a24a', 2, 3); px(102, y, '#c9a24a', 2, 3); }
  });
  // panah memutar (arah gerak)
  mapCanvas(scene, 'panah_kiri', 22, 14, (ctx, px) => { for (let a = 0; a <= 20; a++) { const t = Math.PI * a / 20; px(Math.round(11 + Math.cos(t) * 9), Math.round(11 - Math.sin(t) * 9), '#e43b44', 2, 2); } px(0, 7, '#e43b44', 5, 2); px(1, 9, '#e43b44', 3, 2); px(2, 11, '#e43b44', 1, 2); });
  mapCanvas(scene, 'panah_kanan', 22, 14, (ctx, px) => { for (let a = 0; a <= 20; a++) { const t = Math.PI * a / 20; px(Math.round(11 + Math.cos(t) * 9), Math.round(11 - Math.sin(t) * 9), '#38b764', 2, 2); } px(17, 7, '#38b764', 5, 2); px(18, 9, '#38b764', 3, 2); px(19, 11, '#38b764', 1, 2); });
  // kaisar Claudius di tribun kehormatan: siluet berjubah ungu + mahkota daun
  mapCanvas(scene, 'kaisar_siluet', 10, 14, (ctx, px) => { px(2, 0, '#c9a24a', 6, 1); px(3, 1, '#1a1c2c', 4, 4); px(1, 5, '#5a2a5a', 8, 9); px(2, 5, '#7a3b8f', 6, 8); px(1, 1, '#38b764', 1, 2); px(7, 1, '#38b764', 1, 2); });
  // retiarius kalah: berlutut, satu jari terangkat (minta ampun / missio)
  mapCanvas(scene, 'ret_berlutut', 20, 17, (ctx, px) => {
    const K = '#1a1c2c', kulit = '#c98e63';
    px(6, 0, K, 7, 7); px(7, 1, kulit, 5, 5); px(6, 0, '#8b5a2b', 7, 2); px(10, 3, K, 1, 1); px(11, 5, '#9a6a45', 2, 1);   // kepala tanpa helm
    px(5, 6, K, 9, 6); px(6, 7, kulit, 7, 4); px(3, 6, '#c9a24a', 4, 2);                                                  // badan + galerus
    px(13, 1, K, 3, 7); px(14, 2, kulit, 1, 5); px(14, 0, K, 1, 2); px(14, 0, kulit, 1, 1);                               // lengan & jari terangkat
    px(5, 11, K, 9, 3); px(6, 11, '#ece4d0', 7, 2); px(6, 11, '#c9a24a', 7, 1);                                           // cawat
    px(4, 13, K, 10, 3); px(5, 14, kulit, 8, 1); px(12, 14, K, 3, 3); px(3, 15, K, 3, 2);                                 // kaki terlipat
    px(0, 16, '#7a4a24', 20, 1);                                                                                          // trisula tergeletak
  });
  // jaring terbang & secutor terjerat (terbaring)
  mapCanvas(scene, 'jaring_terbang', 18, 12, (ctx, px) => { for (let y = 0; y < 12; y += 2) for (let x = (y / 2) % 2; x < 18; x += 2) { px(x, y, '#d9c79a'); px(x + 1, y + 1, '#8a7350'); } px(0, 0, '#5d3a1a', 2, 2); px(16, 10, '#5d3a1a', 2, 2); });
  mapCanvas(scene, 'bruno_terjerat', 30, 12, (ctx, px) => {
    const K = '#1a1c2c', kulit = '#a8714a';
    pxEllipse(px, 5, 6, 5, 4, K); pxEllipse(px, 5, 6, 4, 3, '#c9a24a'); px(3, 4, '#e0c070', 2, 1); px(7, 6, K, 1, 1);        // helm
    px(9, 3, K, 10, 7); px(10, 4, kulit, 8, 5); px(18, 4, K, 4, 6); px(19, 5, '#ece4d0', 2, 4);                           // badan
    px(22, 5, K, 8, 3); px(22, 6, kulit, 7, 1); px(22, 8, K, 8, 3); px(22, 9, '#c9a24a', 6, 1);                          // kaki
    px(10, 0, K, 9, 3); px(11, 1, '#29366f', 7, 1);                                                                       // perisai jatuh
    for (let y = 0; y < 12; y += 2) for (let x = (y / 2) % 2; x < 28; x += 3) px(x, y, 'rgba(217,199,154,0.95)');        // jaring menutupi
  });
  // koin hadiah berserakan, daging panggang
  mapCanvas(scene, 'koin_serak', 30, 5, (ctx, px) => { [[0, 3], [5, 2], [9, 4], [14, 1], [18, 3], [23, 2], [27, 4]].forEach(([x, y]) => { px(x, y, '#c9a24a', 3, 1); px(x, y - 1, '#ffcd75', 2, 1); }); });
  mapCanvas(scene, 'daging', 12, 7, (ctx, px) => { pxEllipse(px, 5, 3, 5, 3, '#8b3a2a'); px(2, 1, '#b5523b', 4, 2); px(9, 2, '#f4f4f4', 3, 2); px(11, 1, '#f4f4f4', 1, 4); px(0, 6, '#c2c3c7', 12, 1); });
  // dinding bercoretan "FULMEN" + petir (grafiti seperti di Pompeii)
  mapCanvas(scene, 'grafiti_fulmen', 60, 22, (ctx, px) => {
    px(0, 0, '#e2c79a', 60, 22); px(0, 0, '#c9a979', 60, 1); for (let i = 0; i < 30; i++) px((i * 23) % 58, (i * 7) % 20, '#d6b98a', 2, 1);
    const F = { F: ['111', '100', '110', '100', '100'], U: ['101', '101', '101', '101', '111'], L: ['100', '100', '100', '100', '111'], M: ['10001', '11011', '10101', '10001', '10001'], E: ['111', '100', '110', '100', '111'], N: ['1001', '1101', '1011', '1001', '1001'] };
    let x = 4; 'FULMEN'.split('').forEach(ch => { F[ch].forEach((row, y) => row.split('').forEach((b, i) => b === '1' && px(x + i * 2, 5 + y * 2, '#b13e53', 2, 2))); x += F[ch][0].length * 2 + 2; });
    [[51, 3], [49, 8], [53, 9], [50, 15]].forEach(([a, b], i, arr) => { if (i < arr.length - 1) { const [c, d] = arr[i + 1]; const n = Math.max(Math.abs(c - a), Math.abs(d - b)); for (let t = 0; t <= n; t++) px(Math.round(a + (c - a) * t / n), Math.round(b + (d - b) * t / n), '#c9a24a', 2, 1); } });
  });
  // gerbang arena (pintu kayu di dinding podium)
  mapCanvas(scene, 'gerbang_arena', 22, 26, (ctx, px) => { px(0, 0, '#9c917a', 22, 26); px(1, 1, '#d8cfba', 20, 3); px(3, 4, '#2b1d16', 16, 22); px(3, 4, '#2b1d16', 16, 22); px(4, 5, '#5d3a1a', 14, 21); for (let x = 6; x < 18; x += 3) px(x, 5, '#3b2a1a', 1, 21); px(4, 12, '#5a5f6e', 14, 1); px(4, 20, '#5a5f6e', 14, 1); });
}

// pasang ke mesin tanpa mengubah engine.js: dibungkus pada buildMapTextures
if (typeof buildMapTextures === 'function') {
  const _buildMapTexturesAsli = buildMapTextures;
  buildMapTextures = function (scene) { _buildMapTexturesAsli(scene); buildRomawiTextures(scene); };   // eslint-disable-line no-global-assign
}
