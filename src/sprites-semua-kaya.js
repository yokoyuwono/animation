// ============================================================
//  SPRITES "ANDAIKAN SEMUA ORANG KAYA RAYA"
//  Tokoh: Bu Imah (penjual gorengan), Dika (remaja), Bu Ratna (pegawai bank). Pak Darto = sprite 'darto' (lama).
//  Benda: gerobak sampah / gerobak uang, gorengan, wajan, rak pasar penuh/kosong, tumpukan sampah,
//  layangan & bungkus dari uang, peta (sampah_top, tps_top, bank_top). Uang = uang generik (bukan desain asli).
//  Dimuat setelah sprites-faces.js; tekstur dibuat lewat pembungkus buildFaceTextures (mesin tidak diubah).
// ============================================================

if (typeof CHARACTERS !== 'undefined') Object.assign(CHARACTERS, {
  imah:  { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#7a3b8f', R: '#ef7d57', B: '#5d3a1a' } },   // kerudung ungu, baju oranye
  dika:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#41a6f6', B: '#29366f' } },   // kaus biru
  ratna: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#29366f', B: '#1a1c2c' } },   // seragam bank biru tua
});

const SK = { ink: '#1a1c2c', uang: '#38b764', uang2: '#257179', uangHi: '#a7f070', kayu: '#8b5a2b', kayu2: '#5d3a1a',
  hijau: '#3a9a5a', hijau2: '#2a7445', abu: '#8a8f99', minyak: '#ffcd75', goreng: '#d98a3a', goreng2: '#a8601f' };

function buildSemuaKayaTextures(scene) {
  const mk = (k, w, h, f) => mapCanvas(scene, k, w, h, f);

  // ---------- gerobak (tampak samping): isi 'sampah' | 'uang' | 'kosong' ----------
  const gerobak = (key, isi) => mk(key, 40, 24, (c, p) => {
    if (isi === 'sampah') {
      [[6, 4, 8, '#3a4a3a'], [14, 2, 9, '#2b2a36'], [23, 3, 8, '#5a4a6a'], [30, 5, 6, '#8fbfe0']].forEach(([x, y, w, col]) => p(x, y, col, w, 7 - y + 4));
      [[8, 3], [17, 1], [26, 2], [12, 6], [29, 4]].forEach(([x, y], i) => p(x, y, ['#e43b44', '#f4f4f4', '#ffcd75'][i % 3], 2, 1));
    } else if (isi === 'uang') {
      for (let r = 0; r < 3; r++) for (let k = 0; k < 6 - (r % 2); k++) {
        const x = 5 + k * 5 + (r % 2) * 2, y = 8 - r * 3;
        p(x, y, SK.ink, 5, 3); p(x + 1, y + 1, SK.uang, 3, 1); p(x + 2, y + 1, SK.uangHi, 1, 1);
      }
    }
    p(3, 10, SK.ink, 32, 10); p(4, 11, SK.hijau, 30, 8); p(4, 11, SK.hijau2, 30, 1);           // bak
    for (let x = 7; x < 33; x += 6) p(x, 12, SK.hijau2, 1, 6);
    p(34, 9, SK.ink, 6, 2); p(38, 8, SK.ink, 2, 4);                                              // pegangan
    p(8, 19, SK.ink, 2, 2); p(28, 19, SK.ink, 2, 2);
    [10, 26].forEach(x => { p(x - 3, 19, SK.ink, 7, 5); p(x - 2, 20, '#5d606b', 5, 3); p(x, 21, '#c2c3c7', 1, 1); });   // roda
  });
  gerobak('gerobak_sampah', 'sampah'); gerobak('gerobak_uang', 'uang'); gerobak('gerobak_kosong', 'kosong');

  // ---------- tumpukan sampah tampak samping (3 tingkat) ----------
  [[1, 30, 8], [2, 46, 14], [3, 64, 22]].forEach(([n, w, h]) => mk(`sampah_${n}`, w, h, (c, p) => {
    const r = mapRand(n * 7);
    for (let i = 0; i < n * 7; i++) {
      const bw = 6 + Math.floor(r() * 8), bh = 4 + Math.floor(r() * 5), x = Math.floor(r() * (w - bw)), y = h - bh - Math.floor(r() * (h - bh) * (1 - Math.abs(x + bw / 2 - w / 2) / (w / 2)));
      const col = ['#2b2a36', '#3a4a3a', '#5a4a6a', '#333c57', '#4a3a2a'][i % 5];
      p(x, y, SK.ink, bw, bh); p(x + 1, y + 1, col, bw - 2, bh - 2); p(x + 2, y + 1, '#6d7686', 2, 1);
    }
    for (let i = 0; i < n * 6; i++) p(Math.floor(r() * (w - 2)), h - 1 - Math.floor(r() * h * 0.6), ['#e43b44', '#f4f4f4', '#ffcd75', '#8fbfe0'][i % 4], 2, 1);
  }));
  // lalat
  mk('lalat', 3, 2, (c, p) => { p(1, 1, SK.ink); p(0, 0, '#c2c3c7'); p(2, 0, '#c2c3c7'); });

  // ---------- gorengan ----------
  mk('gorengan', 16, 8, (c, p) => {
    p(0, 6, SK.ink, 16, 2); p(1, 6, '#f4f4f4', 14, 1);                                            // piring
    [[2, 2, 5], [7, 1, 5], [11, 3, 4], [5, 4, 6]].forEach(([x, y, w]) => { p(x, y, SK.goreng2, w, 3); p(x + 1, y, SK.goreng, w - 2, 2); p(x + 1, y, '#f2c27a', 1, 1); });
  });
  mk('gorengan_satu', 7, 4, (c, p) => { p(0, 1, SK.goreng2, 7, 3); p(1, 0, SK.goreng, 5, 3); p(2, 0, '#f2c27a', 2, 1); });
  mk('wajan', 26, 12, (c, p) => {
    p(0, 3, SK.ink, 26, 2); p(2, 5, SK.ink, 22, 3); p(4, 8, SK.ink, 18, 2);                          // wajan
    p(2, 3, SK.minyak, 22, 1); [[6, 2], [12, 1], [17, 2]].forEach(([x, y]) => { p(x, y, SK.goreng, 4, 2); });
    p(6, 10, '#5d606b', 14, 2); [8, 13, 18].forEach(x => p(x, 10, '#ef7d57', 2, 1));                   // kompor
  });
  mk('jerigen', 10, 14, (c, p) => { p(0, 2, SK.ink, 10, 12); p(1, 3, SK.minyak, 8, 10); p(3, 0, SK.ink, 4, 3); p(4, 1, '#e43b44', 2, 1); p(2, 6, '#f4f4f4', 6, 3); });
  mk('jerigen_kosong', 10, 14, (c, p) => { p(0, 2, SK.ink, 10, 12); p(1, 3, '#f4f4f4', 8, 10); p(1, 11, SK.minyak, 8, 2); p(3, 0, SK.ink, 4, 3); });

  // ---------- rak pasar (tampak samping): penuh / kosong ----------
  const rak = (key, penuh) => mk(key, 44, 34, (c, p) => {
    p(0, 0, SK.ink, 44, 34); p(1, 1, '#c9a46a', 42, 32);
    [10, 20, 30].forEach(y => p(1, y, SK.kayu2, 42, 2));
    if (penuh) {
      const goods = ['#e43b44', '#ffcd75', '#38b764', '#41a6f6', '#ef7d57', '#f4f4f4', '#7a3b8f'];
      [2, 12, 22].forEach((y, r) => { for (let x = 3, i = r; x < 40; x += 5, i++) { p(x, y + 1, SK.ink, 4, 7); p(x + 1, y + 2, goods[i % goods.length], 2, 5); } });
    } else {
      p(30, 26, '#ffcd75', 3, 4); p(30, 26, SK.ink, 3, 1);                                         // tinggal satu barang
      for (let x = 4; x < 40; x += 9) p(x, 9, '#a8845a', 4, 1);                                     // debu
    }
  });
  rak('rak_penuh', true); rak('rak_kosong', false);

  // ---------- uang generik ----------
  mk('ikat_uang', 12, 6, (c, p) => { p(0, 0, SK.ink, 12, 6); p(1, 1, SK.uang, 10, 4); p(5, 1, '#f4f4f4', 2, 4); p(2, 2, SK.uangHi, 2, 1); });
  mk('karung_uang', 18, 20, (c, p) => {
    p(5, 0, SK.ink, 8, 3); p(3, 3, SK.ink, 12, 2); pxEllipse(p, 9, 13, 8, 7, SK.ink); pxEllipse(p, 9, 13, 7, 6, '#c9a46a');
    p(6, 9, SK.uang2, 6, 1); p(8, 8, SK.uang2, 2, 9); p(6, 12, SK.uang2, 5, 1); p(7, 15, SK.uang2, 5, 1);         // tanda "Rp" sederhana
  });
  mk('layangan_uang', 14, 16, (c, p) => {
    for (let y = 0; y < 14; y++) { const h = y < 7 ? y : 13 - y; p(7 - h, y, SK.ink, h * 2 + 1, 1); if (h > 0) p(8 - h, y, SK.uang, h * 2 - 1, 1); }
    p(7, 1, SK.uang2, 1, 12); p(2, 7, SK.uang2, 11, 1); p(6, 5, '#f4f4f4', 3, 3);
    p(7, 14, SK.ink, 1, 2); p(6, 15, '#e43b44', 1, 1); p(8, 15, '#ffcd75', 1, 1);
  });
  mk('bungkus_uang', 12, 8, (c, p) => { p(0, 2, SK.ink, 12, 6); p(1, 3, SK.uang, 10, 4); p(5, 3, '#f4f4f4', 2, 4); p(3, 0, SK.goreng2, 6, 3); p(4, 0, SK.goreng, 4, 2); });

  // ---------- papan harga gorengan (angka diisi lewat label) ----------
  mk('papan_gorengan', 30, 40, (c, p) => {
    p(13, 18, SK.kayu2, 4, 22); p(0, 0, SK.ink, 30, 20); p(1, 1, '#f4f4f4', 28, 18); p(1, 1, '#e43b44', 28, 5);
    p(4, 9, SK.goreng, 6, 3); p(5, 8, '#f2c27a', 3, 1);
  });

  // ---------- kantor bank kecil (tampak samping) ----------
  mk('bank', 64, 46, (c, p) => {
    p(0, 0, SK.ink, 64, 10); p(1, 1, '#29366f', 62, 8); p(6, 4, '#f4f4f4', 52, 2);              // papan nama
    p(2, 10, SK.ink, 60, 36); p(3, 11, '#e8e4d8', 58, 35); p(3, 11, '#c9c3a8', 58, 1);
    [8, 46].forEach(x => { p(x, 16, SK.ink, 12, 12); p(x + 1, 17, '#9fd4ff', 10, 10); p(x + 1, 17, '#c4eef5', 10, 2); });
    p(26, 18, SK.ink, 12, 28); p(27, 19, '#5d606b', 10, 27); p(31, 19, SK.ink, 1, 27);           // pintu kaca
    [4, 22, 40, 58].forEach(x => p(x, 30, '#c2c3c7', 2, 16));
  });
  mk('loket_bank', 40, 22, (c, p) => { p(0, 0, SK.ink, 40, 22); p(1, 1, '#c9a46a', 38, 21); p(1, 1, '#8a8f99', 38, 9); p(2, 2, '#c4eef5', 36, 7); p(18, 12, '#29366f', 4, 4); });

  // ---------- barang barter ----------
  mk('sabun_batang', 8, 5, (c, p) => { p(0, 0, SK.ink, 8, 5); p(1, 1, '#9fd4ff', 6, 3); p(2, 1, '#f4f4f4', 2, 1); });
  mk('karung_beras_kecil', 12, 14, (c, p) => { p(2, 0, SK.ink, 8, 2); pxEllipse(p, 6, 8, 5, 6, SK.ink); pxEllipse(p, 6, 8, 4, 5, '#f4e4c1'); p(3, 7, '#c9a46a', 6, 2); });

  // ---------- peta (tampak atas) ----------
  [[1, 10, 8], [2, 16, 12], [3, 24, 16]].forEach(([n, w, h]) => mk(`sampah_top_${n}`, w, h, (c, p) => {
    const r = mapRand(n * 13);
    pxEllipse(p, Math.floor(w / 2), Math.floor(h / 2), Math.floor(w / 2) - 1, Math.floor(h / 2) - 1, '#4a4858');
    for (let i = 0; i < n * 8; i++) p(1 + Math.floor(r() * (w - 3)), 1 + Math.floor(r() * (h - 3)), ['#2b2a36', '#5a4a6a', '#e43b44', '#f4f4f4', '#ffcd75', '#3a4a3a'][i % 6], 2, 2);
  }));
  mk('tps_top', 20, 14, (c, p) => { p(0, 0, SK.ink, 20, 14); p(1, 1, '#6d7686', 18, 12); p(2, 2, SK.hijau, 7, 5); p(11, 2, SK.hijau, 7, 5); p(2, 8, SK.hijau, 7, 5); p(11, 8, '#e0b040', 7, 5); });
  mk('gerobak_top', 8, 6, (c, p) => { p(0, 0, SK.ink, 8, 6); p(1, 1, SK.hijau, 6, 4); p(2, 2, '#3a4a3a', 4, 2); });
  mk('bank_top', 28, 18, (c, p) => {
    p(0, 0, SK.ink, 28, 18); p(1, 1, '#c2c3c7', 26, 16); p(1, 1, '#29366f', 26, 6); p(3, 2, '#f4f4f4', 22, 1); p(3, 4, '#f4f4f4', 22, 1);
    for (let x = 4; x < 25; x += 5) p(x, 9, '#8a8f99', 2, 7); p(12, 12, SK.ink, 4, 5);
  });
  mk('gerobak_goreng_top', 12, 8, (c, p) => { p(0, 0, SK.ink, 12, 8); p(1, 1, '#ffcd75', 10, 6); p(2, 2, SK.goreng, 3, 2); p(6, 3, SK.goreng, 3, 2); p(0, 7, SK.ink, 12, 1); });
}

// pembungkus: tekstur dibuat setelah tekstur wajah (tanpa mengubah src/engine.js)
if (typeof buildFaceTextures === 'function') {
  const _buildFaceTexturesSK = buildFaceTextures;
  buildFaceTextures = function (scene) { _buildFaceTexturesSK(scene); buildSemuaKayaTextures(scene); };
}
