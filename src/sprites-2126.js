// ============================================================
//  SPRITES "ANDAIKAN KAMU TERBANGUN 100 TAHUN LAGI (2126)"
//  Tokoh: Mas Tejo, Bu Tini (2026) · Kirana, ayah Kirana, Robo-kasir, warga berkacamata layar (2126).
//  Benda 2026: kamar kos, dompet & uang generik, gorengan, wajan. Benda 2126: menara hijau, mobil melayang,
//  toko robot, papan menu & papan kurs digital, pasar robot, printer makanan, bengkel robot, cabai, cobek, foto.
//  Semua kunci berawalan t26_. Uang = desain generik (bukan uang asli).
//  Dimuat setelah sprites-faces.js; tekstur dibuat lewat pembungkus buildFaceTextures (mesin tidak diubah).
// ============================================================

if (typeof CHARACTERS !== 'undefined') Object.assign(CHARACTERS, {
  tejo:   { body: BOY_BODY, legs: BOY_LEGS, colors: { H: '#1a1c2c', R: '#ef7d57', B: '#333c57' } },            // kaus oranye, servis HP
  tini:   { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#b13e53', R: '#ffcd75', B: '#5d3a1a' } },           // jilbab merah, daster kuning
  // Kirana: rambut panjang hitam, bando cyan menyala, seragam putih-cyan
  kirana: { body: ['....KKKK....', '...KccccK...', '..KHHHHHHK..', '..KHSSSSHK..', '.KHSKSSKSHK.', '.KHSSSSSSHK.',
                   '.KHHKSSKHHK.', '..KWWccWWK..', '.KSWWccWWSK.', '.KSWWWWWWSK.', '..KccccccK..', '.KWWWWWWWWK.'],
            legs: GIRL_LEGS, colors: { H: '#1a1c2c', c: '#4fe3f0', W: '#e8f4f8' } },
  // ayah Kirana: montir robot, terusan abu + kacamata pelindung
  ayahkir:{ body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KcSSSScK..', '..KcKSSKcK..', '..KSSSSSSK..',
                   '...KSSSSK...', '..KRRRRRRK..', '.KSRRccRRSK.', '.KSRRRRRRSK.', '..KRRRRRRK..', '..KRRRRRRK..'],
            legs: BOY_LEGS, colors: { H: '#5d3a1a', R: '#6d7686', B: '#4a4f5c', c: '#4fe3f0' } },
  // warga 2126 berkacamata layar (visor cyan)
  warga26:  { body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KSSSSSSK..', '..KccccccK..', '..KSSSSSSK..',
                     '...KSSSSK...', '..KRRRRRRK..', '.KSRRRRRRSK.', '.KSRRRRRRSK.', '..KRRRRRRK..', '..KBBBBBBK..'],
              legs: BOY_LEGS, colors: { H: '#1a1c2c', R: '#e8f4f8', B: '#257179', c: '#4fe3f0' } },
  warga26b: { body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KHSSSSHK..', '.KHccccccHK.', '.KHSSSSSSHK.',
                     '.KHHKSSKHHK.', '..KRRRRRRK..', '.KSRRRRRRSK.', '.KSRRRRRRSK.', '..KRRRRRRK..', '.KRRRRRRRRK.'],
              legs: GIRL_LEGS, colors: { H: '#7a3b8f', R: '#a7f070', B: '#a7f070', c: '#4fe3f0' } },
  anak26:   { body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KSSSSSSK..', '..KccccccK..', '..KSSSSSSK..',
                     '...KSSSSK...', '..KRRRRRRK..', '.KSRRRRRRSK.', '.KSRRRRRRSK.', '..KRRRRRRK..', '..KBBBBBBK..'],
              legs: BOY_LEGS, colors: { H: '#ef7d57', R: '#ff77a8', B: '#29366f', c: '#4fe3f0' } },
  anak26c:  { body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KSSSSSSK..', '..KSKSSKSK..', '..KSSSSSSK..',
                     '...KSSSSK...', '..KRRRRRRK..', '.KSRRRRRRSK.', '.KSRRRRRRSK.', '..KRRRRRRK..', '..KBBBBBBK..'],
              legs: BOY_LEGS, colors: { H: '#ef7d57', R: '#ff77a8', B: '#29366f' } },           // anak yang sudah melepas kacamata
  // Robo-kasir: kepala layar, badan putih, lampu dada
  robo:   { body: ['..KKKKKKKK..', '..KccccccK..', '..KcKccKcK..', '..KccccccK..', '..KcKKKKcK..', '..KKKKKKKK..',
                   '....KWWK....', '..KWWWWWWK..', '.KWWWrrWWWK.', 'KWKWWrrWWKWK', '.K.WWWWWW.K.', '..KWWWWWWK..'],
            legs: [['..KWWKKWWK..', '..KWK..KWK..', '..KKK..KKK..'], ['..KWK..KWK..', '.KWK....KWK.', '.KKK....KKK.'], ['...KWKKWK...', '...KWKKWK...', '...KKKKKK...']],
            colors: { c: '#4fe3f0', W: '#e8eef4', r: '#e43b44' } },
  // Robo-satpam: helm biru, lampu sirene merah, badan biru tua
  robosatpam: { body: ['....KrrK....', '..KKKKKKKK..', '..KbbbbbbK..', '..KbKccKbK..', '..KbbbbbbK..', '..KKKKKKKK..',
                       '....KWWK....', '..KbbbbbbK..', '.KbbbyybbbK.', 'KbKbbbbbbKbK', '.K.bbbbbb.K.', '..KbbbbbbK..'],
                legs: [['..KbbKKbbK..', '..KbK..KbK..', '..KKK..KKK..'], ['..KbK..KbK..', '.KbK....KbK.', '.KKK....KKK.'], ['...KbKKbK...', '...KbKKbK...', '...KKKKKK...']],
                colors: { b: '#29366f', c: '#4fe3f0', r: '#e43b44', y: '#ffcd75', W: '#c8d4dc' } },
  // kolektor barang antik: rambut putih, kacamata tebal, rompi cokelat
  kolektor: { body: ['....KKKK....', '...KHHHHK...', '..KHHHHHHK..', '..KSSSSSSK..', '..KggSSggK..', '..KSSSSSSK..',
                     '...KSSSSK...', '..KRVRRVRK..', '.KSRVRRVRSK.', '.KSRVRRVRSK.', '..KRRRRRRK..', '..KBBBBBBK..'],
              legs: BOY_LEGS, colors: { H: '#e8eef4', R: '#f4e4c1', V: '#8b5a2b', B: '#5d3a1a', g: '#4fe3f0' } },
});

const T26 = {
  ink: '#1a1c2c', hijau: '#38b764', hijau2: '#257179', daun: '#a7f070', kaca: '#9fe8f0', kaca2: '#4fe3f0', putih: '#e8eef4',
  abu: '#8a8f99', abu2: '#5d606b', glow: '#4fe3f0', kuning: '#ffcd75', merah: '#e43b44', oranye: '#ef7d57',
  goreng: '#d98a3a', goreng2: '#a8601f', kayu: '#8b5a2b', kayu2: '#5d3a1a',
};

function buildT26Textures(scene) {
  const mk = (k, w, h, f) => mapCanvas(scene, k, w, h, f);
  const K = T26.ink;

  // ================= 2126: BANGUNAN & KENDARAAN =================
  // menara hijau (tampak samping): kaca + teras tanaman tiap lantai
  const menara = (key, w, h, seed) => mk(key, w, h, (c, p) => {
    const r = mapRand(seed);
    p(2, 4, K, w - 4, h - 4); p(3, 5, '#d8e8ee', w - 6, h - 6);
    p(3, 5, '#b8d0da', 3, h - 6);                                                  // sisi bayangan
    p(4, 0, K, w - 8, 5); p(5, 1, T26.hijau, w - 10, 3);                         // atap taman
    for (let x = 5; x < w - 6; x += 4) pxEllipse(p, x + 1, 1, 2, 1, T26.daun);
    for (let y = 9; y < h - 8; y += 10) {
      for (let x = 6; x < w - 7; x += 6) { p(x, y, K, 4, 5); p(x + 1, y + 1, T26.kaca, 2, 3); p(x + 1, y + 1, '#e8fbff', 1, 1); }
      p(1, y + 6, K, w - 2, 3); p(2, y + 6, T26.hijau2, w - 4, 1);              // teras
      for (let x = 2; x < w - 2; x += 3) { const t = 1 + Math.floor(r() * 2); p(x, y + 5 - t, r() < 0.5 ? T26.hijau : T26.daun, 2, t + 1); }
      if (r() < 0.6) for (let k = 0; k < 3; k++) p(2 + Math.floor(r() * (w - 6)), y + 9, T26.hijau, 1, 2 + Math.floor(r() * 3));   // tanaman menjuntai
    }
    p(Math.floor(w / 2) - 4, h - 9, K, 8, 9); p(Math.floor(w / 2) - 3, h - 8, T26.kaca2, 6, 8);   // pintu
  });
  menara('t26_menara_a', 34, 84, 3); menara('t26_menara_b', 28, 64, 7); menara('t26_menara_c', 40, 100, 11);

  // mobil melayang (tampak samping) + cahaya bawah
  const mobil = (key, body) => mk(key, 34, 16, (c, p) => {
    p(6, 0, K, 20, 2); p(4, 2, K, 26, 2); p(2, 4, K, 32, 6); p(4, 10, K, 28, 2);
    p(7, 1, '#c4eef5', 18, 1); p(5, 2, '#9fd4ff', 9, 2); p(16, 2, '#9fd4ff', 10, 2); p(15, 2, K, 1, 3);
    p(3, 4, body, 30, 6); p(3, 4, '#f4f4f4', 30, 1); p(5, 10, body, 24, 1);
    p(30, 6, T26.kuning, 3, 2); p(2, 6, T26.merah, 2, 2);
    p(8, 12, T26.glow, 6, 1); p(20, 12, T26.glow, 6, 1); p(9, 13, '#c4f8fc', 4, 2); p(21, 13, '#c4f8fc', 4, 2);
  });
  mobil('t26_mobil_a', '#e43b44'); mobil('t26_mobil_b', '#3b5dc9'); mobil('t26_mobil_c', '#ffcd75');

  // lampu taman & bangku
  mk('t26_lampu', 8, 30, (c, p) => { p(3, 4, K, 2, 26); p(0, 0, K, 8, 5); p(1, 1, T26.glow, 6, 3); p(2, 1, '#e8fbff', 2, 1); p(1, 28, K, 6, 2); });
  mk('t26_bangku', 30, 12, (c, p) => {
    p(0, 0, K, 30, 3); p(1, 1, '#e8eef4', 28, 1); p(0, 5, K, 30, 3); p(1, 6, T26.hijau2, 28, 1);
    p(3, 8, K, 2, 4); p(25, 8, K, 2, 4); p(1, 3, K, 2, 2); p(27, 3, K, 2, 2);
  });
  mk('t26_pohon', 22, 30, (c, p) => {
    p(10, 16, K, 3, 14); p(11, 16, T26.kayu, 1, 14);
    pxEllipse(p, 11, 10, 10, 9, K); pxEllipse(p, 11, 10, 9, 8, T26.hijau); pxEllipse(p, 8, 7, 4, 3, T26.daun); pxEllipse(p, 14, 12, 3, 2, '#5ad47a');
  });

  // toko robot (bekas warung Bu Tini)
  mk('t26_toko', 70, 50, (c, p) => {
    p(0, 0, K, 70, 12); p(1, 1, '#29366f', 68, 10); p(6, 4, T26.glow, 58, 1); p(6, 7, T26.glow, 40, 1);   // papan nama menyala
    p(2, 12, K, 66, 38); p(3, 13, '#e8eef4', 64, 37); p(3, 13, '#c8d4dc', 64, 2);
    p(6, 17, K, 58, 22); p(7, 18, '#bff2f8', 56, 20); p(7, 18, '#e8fbff', 56, 2);                       // etalase kaca
    for (let x = 10; x < 62; x += 8) { p(x, 30, '#5d606b', 6, 1); p(x + 1, 26, [T26.kuning, T26.merah, T26.hijau, T26.oranye][x % 4], 4, 4); }
    p(2, 40, K, 66, 2); p(3, 41, T26.hijau2, 64, 1); p(30, 42, K, 10, 8); p(31, 43, T26.kaca2, 8, 7);
  });
  // meja kasir
  mk('t26_meja_kasir', 40, 20, (c, p) => { p(0, 0, K, 40, 20); p(1, 1, '#e8eef4', 38, 19); p(1, 1, T26.glow, 38, 2); p(28, 4, K, 9, 6); p(29, 5, '#29366f', 7, 4); p(30, 6, T26.glow, 3, 1); });
  // papan menu digital (harga diisi lewat label)
  mk('t26_papan_menu', 56, 40, (c, p) => {
    p(0, 0, K, 56, 40); p(1, 1, '#11163a', 54, 38); p(1, 1, '#29366f', 54, 6);
    for (let y = 10; y < 38; y += 7) { p(4, y, T26.glow, 3, 3); }
  });
  // papan kurs raksasa (tampak samping, di tiang)
  mk('t26_papan_kurs', 80, 56, (c, p) => {
    p(37, 30, K, 6, 26); p(38, 30, T26.abu, 4, 26);
    p(0, 0, K, 80, 34); p(2, 2, '#0b0f2a', 76, 30); p(2, 2, '#1d2552', 76, 8);
    for (let x = 4; x < 76; x += 4) p(x, 30, T26.glow, 2, 1);
  });

  // ================= 2126: PASAR, MAKAN, BENGKEL =================
  mk('t26_lapak', 50, 36, (c, p) => {
    p(0, 0, K, 50, 6); for (let x = 1; x < 49; x += 6) { p(x, 1, T26.hijau2, 3, 4); p(x + 3, 1, '#e8eef4', 3, 4); }
    p(2, 6, K, 2, 30); p(46, 6, K, 2, 30);
    p(0, 20, K, 50, 4); p(1, 21, '#c8d4dc', 48, 2); p(2, 24, K, 46, 12); p(3, 25, '#e8eef4', 44, 11); p(3, 25, T26.glow, 44, 1);
  });
  mk('t26_karung_beras', 14, 16, (c, p) => { p(3, 0, K, 8, 2); pxEllipse(p, 7, 9, 6, 6, K); pxEllipse(p, 7, 9, 5, 5, '#f4f4f4'); p(3, 8, '#c9a46a', 8, 2); p(5, 11, T26.hijau2, 4, 1); });
  mk('t26_minyak', 8, 16, (c, p) => { p(2, 0, K, 4, 3); p(3, 1, T26.merah, 2, 1); p(1, 3, K, 6, 13); p(2, 4, T26.kuning, 4, 11); p(2, 8, '#f4f4f4', 4, 3); p(2, 4, '#fff2c4', 1, 11); });
  mk('t26_telur', 16, 10, (c, p) => { p(0, 4, K, 16, 6); p(1, 5, '#c9a46a', 14, 4); [[3, 3], [7, 2], [11, 3]].forEach(([x, y]) => { pxEllipse(p, x, y + 1, 2, 2, K); pxEllipse(p, x, y + 1, 1, 1, '#f8e8d0'); }); });
  mk('t26_mie', 12, 10, (c, p) => { p(0, 0, K, 12, 10); p(1, 1, T26.kuning, 10, 8); p(2, 3, T26.merah, 8, 3); p(3, 4, '#f4f4f4', 3, 1); });
  mk('t26_cabai', 14, 8, (c, p) => {
    [[1, 2], [5, 0], [9, 2]].forEach(([x, y]) => { p(x, y + 1, K, 4, 6); p(x + 1, y + 2, T26.merah, 2, 4); p(x + 1, y, '#38b764', 2, 2); p(x + 1, y + 2, '#ff8a8a', 1, 1); });
  });
  mk('t26_cobek', 18, 9, (c, p) => { pxEllipse(p, 9, 4, 8, 4, K); pxEllipse(p, 9, 4, 7, 3, '#5d606b'); pxEllipse(p, 9, 3, 5, 1, T26.merah); p(13, 0, K, 3, 5); p(14, 0, '#8a8f99', 1, 4); });
  mk('t26_printer', 26, 30, (c, p) => {
    p(0, 0, K, 26, 30); p(1, 1, '#e8eef4', 24, 29); p(1, 1, '#c8d4dc', 24, 2);
    p(4, 6, K, 18, 12); p(5, 7, '#29366f', 16, 10); p(6, 8, T26.glow, 6, 1); p(6, 10, T26.glow, 10, 1);
    p(6, 20, K, 14, 7); p(7, 21, '#11163a', 12, 5); pxEllipse(p, 13, 24, 4, 2, '#f4f4f4');   // nasi di nampan
  });
  mk('t26_nasi_printer', 16, 9, (c, p) => { p(0, 6, K, 16, 3); p(1, 6, '#e8eef4', 14, 1); for (let y = 0; y < 6; y++) p(4 - Math.min(y, 2) + 0, y, '#f8f8f8', 8 + Math.min(y, 2) * 2 - 0, 1); p(4, 0, K, 8, 1); p(11, 3, T26.glow, 1, 1); });
  mk('t26_nasi_bungkus', 14, 9, (c, p) => { p(1, 2, K, 12, 7); p(2, 3, '#d9b38c', 10, 5); p(4, 0, K, 6, 3); p(5, 1, '#a8784a', 4, 1); p(2, 5, '#5d3a1a', 10, 1); });
  // bengkel robot (latar dalam)
  mk('t26_rak_suku', 44, 40, (c, p) => {
    p(0, 0, K, 44, 40); p(1, 1, '#5d606b', 42, 39);
    [12, 24, 36].forEach(y => p(1, y, K, 42, 2));
    for (let i = 0; i < 9; i++) { const x = 4 + (i % 3) * 13, y = 4 + Math.floor(i / 3) * 12; p(x, y, K, 8, 7); p(x + 1, y + 1, [T26.abu, T26.kuning, T26.glow][i % 3], 6, 5); }
  });
  mk('t26_robot_rusak', 22, 22, (c, p) => {
    p(4, 0, K, 14, 10); p(5, 1, '#e8eef4', 12, 8); p(7, 3, K, 8, 4); p(8, 4, T26.glow, 2, 1); p(12, 4, T26.merah, 2, 1);
    p(2, 10, K, 18, 10); p(3, 11, '#c8d4dc', 16, 8); p(9, 13, T26.merah, 4, 3); p(0, 12, K, 3, 6); p(19, 12, K, 3, 6);
    p(4, 20, K, 14, 2); p(15, 0, K, 1, 0); p(16, 0, T26.kuning, 1, 1);
  });
  mk('t26_meja_kerja', 54, 20, (c, p) => { p(0, 0, K, 54, 4); p(1, 1, '#8a8f99', 52, 2); p(3, 4, K, 3, 16); p(48, 4, K, 3, 16); p(10, 0, K, 6, 1); });
  mk('t26_foto', 22, 18, (c, p) => {
    p(0, 0, K, 22, 18); p(1, 1, T26.kayu, 20, 16); p(3, 3, K, 16, 12); p(4, 4, '#d9c8a8', 14, 10);   // foto pudar (sepia)
    p(5, 9, '#8b6a4a', 12, 1); p(6, 5, '#a8845a', 8, 4); p(8, 6, '#6a4a2a', 2, 3); p(13, 6, '#c96a3a', 2, 3);   // ruko & Mas Tejo kecil
  });



  // ================= TOKO BARANG ANTIK =================
  mk('t26_rak_antik', 60, 44, (c, p) => {
    p(0, 0, K, 60, 44); p(1, 1, '#6a3f22', 58, 43); p(1, 1, '#8b5a2b', 58, 2);
    [14, 28, 42].forEach(y => p(1, y, K, 58, 2));
    // isi: radio, TV tabung kecil, kipas, kaset, telepon putar, jam, vas
    p(4, 6, K, 12, 8); p(5, 7, '#c9a46a', 10, 6); pxEllipse(p, 8, 10, 2, 2, K); p(11, 8, '#5d606b', 3, 4);               // radio
    p(20, 4, K, 12, 10); p(21, 5, '#8a8f99', 10, 8); p(22, 6, '#29366f', 6, 6); p(29, 7, K, 2, 1);                         // TV tabung
    pxEllipse(p, 41, 8, 5, 5, K); pxEllipse(p, 41, 8, 4, 4, '#c2c3c7'); p(40, 7, K, 3, 3); p(40, 13, K, 2, 1);             // kipas
    p(50, 8, K, 7, 6); p(51, 9, '#e43b44', 5, 4);                                                                         // telepon
    p(4, 20, K, 8, 8); p(5, 21, '#f4e4c1', 6, 6); p(8, 22, K, 1, 3); p(8, 24, K, 2, 1);                                    // jam
    for (let x = 16; x < 40; x += 6) { p(x, 22, K, 5, 6); p(x + 1, 23, ['#3b5dc9', '#38b764', '#ef7d57', '#7a3b8f'][(x / 6) % 4 | 0], 3, 4); }   // kaset
    p(44, 18, K, 8, 10); p(45, 19, '#257179', 6, 8); p(46, 17, K, 4, 2);                                                  // vas
    p(6, 32, K, 18, 9); p(7, 33, '#a8784a', 16, 7); p(30, 33, K, 10, 8); p(31, 34, '#5d606b', 8, 6); p(46, 32, K, 10, 9); p(47, 33, '#ffcd75', 8, 7);
  });
  mk('t26_meja_antik', 50, 22, (c, p) => { p(0, 0, K, 50, 22); p(1, 1, '#8b5a2b', 48, 21); p(1, 1, '#a8784a', 48, 2); p(1, 8, '#6a3f22', 48, 1); p(22, 12, K, 6, 3); p(23, 13, '#ffcd75', 4, 1); });
  mk('t26_lampu_antik', 12, 18, (c, p) => { p(5, 6, K, 2, 12); p(2, 0, K, 8, 7); p(3, 1, '#ffcd75', 6, 5); p(3, 16, K, 6, 2); });
  // HP 2026: mati (layar retak) & menyala (foto Andi & Mas Tejo)
  mk('t26_hp_mati', 12, 20, (c, p) => { p(0, 0, K, 12, 20); p(1, 1, '#333c57', 10, 18); p(2, 3, '#0b0f2a', 8, 13); p(3, 5, '#5d606b', 1, 1); p(4, 6, '#5d606b', 1, 1); p(5, 7, '#5d606b', 2, 1); p(7, 8, '#5d606b', 1, 2); p(5, 17, '#5d606b', 2, 1); });
  mk('t26_hp_nyala', 12, 20, (c, p) => {
    p(0, 0, K, 12, 20); p(1, 1, '#333c57', 10, 18); p(2, 3, '#9fd4ff', 8, 13);
    p(2, 11, '#c9b085', 8, 5); p(3, 8, '#8a5cc9', 2, 4); p(3, 6, '#e0a87a', 2, 2); p(7, 8, '#ef7d57', 2, 4); p(7, 6, '#e0a87a', 2, 2);   // Andi & Tejo
    p(5, 17, '#c2c3c7', 2, 1);
  });
  mk('t26_baterai', 10, 6, (c, p) => { p(0, 0, K, 9, 6); p(1, 1, '#38b764', 7, 4); p(1, 1, '#a7f070', 3, 4); p(9, 2, K, 1, 2); });
  mk('t26_kunci', 10, 6, (c, p) => { pxEllipse(p, 2, 3, 2, 2, K); p(2, 3, '#ffcd75', 1, 1); p(4, 2, K, 6, 2); p(5, 2, '#ffcd75', 4, 1); p(8, 4, K, 1, 2); });

  // ================= PETA (tampak atas) =================
  mk('t26_menara_top', 16, 16, (c, p) => {
    p(0, 0, K, 16, 16); p(1, 1, '#2f8a55', 14, 14); p(2, 2, T26.hijau, 12, 12);
    [[4, 4], [10, 5], [6, 10], [11, 11]].forEach(([x, y]) => pxEllipse(p, x, y, 2, 2, T26.daun));
    p(7, 7, T26.glow, 2, 2); p(1, 15, '#0a5c3a', 15, 1);
  });
  mk('t26_menara_top_b', 22, 14, (c, p) => {
    p(0, 0, K, 22, 14); p(1, 1, '#c8d4dc', 20, 12); p(2, 2, T26.hijau, 8, 10); p(12, 2, T26.kaca, 8, 10);
    pxEllipse(p, 5, 6, 2, 2, T26.daun); p(13, 3, '#e8fbff', 3, 1);
  });
  mk('t26_mobil_top', 9, 7, (c, p) => { p(0, 5, 'rgba(0,0,0,0.25)', 9, 2); p(1, 0, K, 7, 5); p(2, 1, '#e43b44', 5, 3); p(3, 1, '#9fd4ff', 3, 1); });
  mk('t26_jalur_top', 6, 6, (c, p) => { p(2, 2, T26.glow, 2, 2); p(0, 2, 'rgba(79,227,240,0.4)', 6, 2); });
  mk('t26_toko_top', 22, 14, (c, p) => { p(0, 0, K, 22, 14); p(1, 1, '#29366f', 20, 4); p(2, 2, T26.glow, 18, 1); p(1, 5, '#e8eef4', 20, 8); p(3, 7, T26.kaca, 16, 4); });
  mk('t26_bengkel_top', 26, 16, (c, p) => { p(0, 0, K, 26, 16); p(1, 1, '#6d7686', 24, 14); for (let x = 2; x < 24; x += 3) p(x, 2, '#8a8f99', 1, 12); p(10, 6, T26.glow, 6, 4); });
  mk('t26_taman_top', 30, 22, (c, p) => {
    p(0, 0, '#2f9150', 30, 22); p(1, 1, '#5ccf7a', 28, 20); p(12, 0, '#d6e8ee', 6, 22); p(0, 9, '#d6e8ee', 30, 4);
    [[5, 4], [24, 4], [5, 17], [24, 17]].forEach(([x, y]) => pxEllipse(p, x, y, 3, 3, T26.hijau)); p(13, 10, '#8b5a2b', 4, 2);
  });

  // ================= 2026: KAMAR, DOMPET, WARUNG =================
  mk('t26_kasur', 50, 14, (c, p) => { p(0, 2, K, 50, 12); p(1, 3, '#c2c3c7', 48, 6); p(1, 9, '#8a8f99', 48, 3); p(2, 0, K, 12, 6); p(3, 1, '#f4f4f4', 10, 4); for (let x = 16; x < 48; x += 6) p(x, 4, '#a8a8b0', 3, 1); });
  mk('t26_dompet', 16, 10, (c, p) => { p(0, 0, K, 16, 10); p(1, 1, T26.kayu, 14, 8); p(1, 4, T26.kayu2, 14, 1); p(12, 3, K, 3, 3); p(13, 4, T26.kuning, 1, 1); });
  // uang generik: warna & lebar beda per pecahan (angka lewat label)
  [['t26_uang50', '#3b5dc9'], ['t26_uang20', '#38b764'], ['t26_uang10', '#7a3b8f'], ['t26_uang5', '#a8784a']].forEach(([k, col]) => mk(k, 18, 9, (c, p) => {
    p(0, 0, K, 18, 9); p(1, 1, col, 16, 7); p(2, 2, '#f4f4f4', 4, 5); p(3, 3, col, 2, 3); p(8, 3, '#f4f4f4', 7, 1); p(8, 5, '#f4f4f4', 5, 1);
  }));
  mk('t26_gorengan', 18, 8, (c, p) => {
    p(0, 6, K, 18, 2); p(1, 6, '#f4f4f4', 16, 1);
    [[2, 2, 5], [7, 1, 5], [12, 3, 4], [5, 4, 6]].forEach(([x, y, w]) => { p(x, y, T26.goreng2, w, 3); p(x + 1, y, T26.goreng, w - 2, 2); p(x + 1, y, '#f2c27a', 1, 1); });
  });
  mk('t26_es_teh', 8, 14, (c, p) => { p(5, 0, K, 1, 4); p(0, 3, K, 8, 11); p(1, 4, '#c4eef5', 6, 2); p(1, 6, '#b86a3a', 6, 7); p(2, 7, '#d98a5a', 1, 5); });
  mk('t26_gerobak_uang', 40, 26, (c, p) => {
    for (let r = 0; r < 4; r++) for (let k = 0; k < 6 - (r % 2); k++) { const x = 5 + k * 5 + (r % 2) * 2, y = 11 - r * 3; p(x, y, K, 5, 3); p(x + 1, y + 1, '#38b764', 3, 1); }
    p(3, 13, K, 32, 9); p(4, 14, '#8b5a2b', 30, 7); p(34, 12, K, 6, 2); [10, 26].forEach(x => { p(x - 3, 21, K, 7, 5); p(x - 2, 22, '#5d606b', 5, 3); });
  });
}

// pembungkus: tekstur dibuat setelah tekstur wajah (tanpa mengubah src/engine.js)
if (typeof buildFaceTextures === 'function') {
  const _buildFaceTexturesT26 = buildFaceTextures;
  buildFaceTextures = function (scene) { _buildFaceTexturesT26(scene); buildT26Textures(scene); };
}
