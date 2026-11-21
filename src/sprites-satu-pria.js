// ============================================================
//  SPRITE seri "Andaikan Aku Satu-satunya Pria di Dunia" (stories/satu-pria.js)
//  Tokoh: Dimas (kacamata) + warga Negeri Sekar (beragam profesi & usia).
//  Peta tampak atas: menara jam, stadion, lab, biro jodoh, studio TV.
//  Tampak samping: kasur, menara jam besar, kamera TV, pintu kamar, sofa ibu.
//  Dimuat setelah sprites-map.js (memakai mapCanvas/pxEllipse). Tekstur dibuat lewat
//  pembungkus buildMapTextures (tanpa mengubah engine).
// ============================================================

// Dimas: badan laki-laki + kacamata bundar
const DMS_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '..KHSSSSHK..',
  '..KKKSSKKK..',
  '..KcKKKKcK..',
  '...KSSSSK...',
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '..KBBBBBBK..',
];
// jilbab (H = warna kain, menutup kepala & leher)
const HIJAB_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '..KHSSSSHK..',
  '..KHKSSKHK..',
  '..KHSSSSHK..',
  '..KHHSSHHK..',
  '..KHHHHHHK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '.KRRRRRRRRK.',
];
// topi (H dipakai untuk topi pilot/montir/polisi; rambut tetap gelap di samping)
const CAP_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '.KHHHHHHHHK.',
  '.KtSKSSKSt..',
  '.KtSSSSSStK.',
  '..KtKSSKtK..',
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '.KRRRRRRRRK.',
];
// kacamata untuk tokoh perempuan (Dr. Sinta)
const GLASS_GIRL_BODY = [
  '....KKKK....',
  '...KHHHHK...',
  '..KHHHHHHK..',
  '..KHSSSSHK..',
  '.KHKKSSKKHK.',
  '.KHcKSSKcHK.',
  '.KHHKSSKHHK.',
  '..KRRRRRRK..',
  '.KSRRRRRRSK.',
  '.KSRRRRRRSK.',
  '..KRRRRRRK..',
  '.KRRRRRRRRK.',
];

Object.assign(CHARACTERS, {
  dms:     { body: DMS_BODY,        legs: BOY_LEGS,  colors: { H: '#3a2a20', R: '#5a6988', B: '#29366f' } },   // Dimas, kemeja gudang abu-biru
  dms_rmh: { body: DMS_BODY,        legs: BOY_LEGS,  colors: { H: '#3a2a20', R: '#ffcd75', B: '#5d3a1a' } },   // Dimas kaus rumah
  ratna:   { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#29366f', B: '#29366f' } },   // wali kota, blazer biru tua
  drsinta: { body: GLASS_GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#f4f4f4', B: '#41a6f6' } },   // jas lab putih
  rani:    { body: CAP_BODY,        legs: GIRL_LEGS, colors: { H: '#e43b44', R: '#e43b44', B: '#f4f4f4' } },   // pelatih bola
  darmi:   { body: HIJAB_BODY,      legs: GIRL_LEGS, colors: { H: '#b13e53', R: '#ff77a8', B: '#7a3b8f' } },   // biro jodoh
  wulan:   { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#ffcd75', B: '#333c57' } },   // wartawan TV
  ibu:     { body: HIJAB_BODY,      legs: GIRL_LEGS, colors: { H: '#38b764', R: '#257179', B: '#5d3a1a' } },   // ibu Dimas
  // warga Negeri Sekar (beragam profesi, usia, gaya)
  montir:  { body: CAP_BODY,        legs: GIRL_LEGS, colors: { H: '#3b5dc9', R: '#3b5dc9', B: '#29366f' } },
  pilot:   { body: CAP_BODY,        legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#29366f', B: '#1a1c2c' } },
  polwan:  { body: CAP_BODY,        legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#8b5a2b', B: '#5d3a1a' } },
  kuli:    { body: CAP_BODY,        legs: GIRL_LEGS, colors: { H: '#ffcd75', R: '#ef7d57', B: '#5a6988' } },
  sk1:     { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#38b764', B: '#257179' } },
  sk2:     { body: HIJAB_BODY,      legs: GIRL_LEGS, colors: { H: '#41a6f6', R: '#f4f4f4', B: '#3b5dc9' } },
  sk3:     { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#ef7d57', R: '#7a3b8f', B: '#1a1c2c' } },
  sk4:     { body: HIJAB_BODY,      legs: GIRL_LEGS, colors: { H: '#ffcd75', R: '#b13e53', B: '#5d3a1a' } },
  sk5:     { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#c2c3c7', R: '#73eff7', B: '#566c86' } },   // nenek
  sk6:     { body: GIRL_BODY,       legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#ff77a8', B: '#ff77a8' } },
});

(function () {
  const prev = typeof buildMapTextures === 'function' ? buildMapTextures : null;
  buildMapTextures = function (scene) { if (prev) prev(scene); buildSatuPriaTextures(scene); };
})();

function buildSatuPriaTextures(scene) {
  if (scene.textures.exists('kasur')) return;
  buildKampungTextures(scene);
  const gedung = (key, w, h, roof, wall, extra) => mapCanvas(scene, key, w, h, (ctx, px) => {
    const rh = Math.round(h * 0.45);
    px(1, h - 1, 'rgba(0,0,0,0.25)', w - 1, 1);
    for (let y = 0; y < rh; y++) { const ins = Math.max(0, Math.round((rh - 1 - y) * 0.6)); px(ins, y, roof, w - ins * 2, 1); }
    px(0, rh - 1, '#1a1c2c', w, 1); px(2, 1, 'rgba(255,255,255,0.18)', Math.round(w / 3), 1);
    px(1, rh, wall, w - 2, h - rh - 1); px(1, rh, 'rgba(0,0,0,0.12)', w - 2, 1);
    extra(px, rh);
  });

  // ---------- PETA (tampak atas ¾) ----------

  // ---------- TAMPAK SAMPING ----------
  mapCanvas(scene, 'kasur', 44, 18, (ctx, px) => {                 // kasur kamar Dimas
    px(0, 2, '#5d3a1a', 3, 16); px(41, 8, '#5d3a1a', 3, 10);            // kepala & kaki ranjang
    px(3, 9, '#8b5a2b', 38, 5); px(3, 14, '#5d3a1a', 38, 2);
    px(3, 6, '#f4f4f4', 38, 4); px(3, 6, '#c2c3c7', 38, 1);
    px(4, 3, '#f4f4f4', 9, 4); px(4, 3, '#c2c3c7', 9, 1);              // bantal
    px(14, 5, '#3b5dc9', 27, 5); for (let x = 16; x < 40; x += 5) px(x, 6, '#41a6f6', 2, 1);   // selimut
  });
  mapCanvas(scene, 'kasur_dimas', 44, 18, (ctx, px) => {           // Dimas tidur (kepala di bantal, selimut sampai dada)
    px(0, 2, '#5d3a1a', 3, 16); px(41, 8, '#5d3a1a', 3, 10);
    px(3, 9, '#8b5a2b', 38, 5); px(3, 14, '#5d3a1a', 38, 2);
    px(3, 6, '#f4f4f4', 38, 4); px(4, 3, '#f4f4f4', 9, 4);
    px(6, 0, '#1a1c2c', 7, 6); px(7, 0, '#3a2a20', 5, 2); px(7, 2, '#f4c29a', 5, 4);   // kepala
    px(7, 3, '#1a1c2c', 2, 1); px(10, 3, '#1a1c2c', 2, 1); px(9, 3, '#1a1c2c', 1, 1);  // kacamata
    px(12, 4, '#3b5dc9', 29, 6); for (let x = 15; x < 40; x += 5) px(x, 5, '#41a6f6', 2, 1);
    px(13, 3, '#3b5dc9', 6, 1);
  });
  mapCanvas(scene, 'kamera_tv', 16, 22, (ctx, px) => {             // kamera TV di tripod
    px(2, 2, '#333c57', 10, 7); px(12, 3, '#1a1c2c', 3, 5); px(13, 4, '#41a6f6', 1, 3);
    px(3, 3, '#566c86', 3, 2); px(9, 0, '#e43b44', 2, 2);
    px(6, 9, '#1a1c2c', 2, 4); px(6, 13, '#1a1c2c', 1, 9); px(2, 13, '#1a1c2c', 1, 9); px(11, 13, '#1a1c2c', 1, 9);
    px(2, 13, '#1a1c2c', 10, 1);
  });
  mapCanvas(scene, 'pintu_kamar', 22, 40, (ctx, px) => {
    px(0, 0, '#5d3a1a', 22, 40); px(2, 2, '#8b5a2b', 18, 38); px(4, 5, '#a0703c', 14, 13); px(4, 22, '#a0703c', 14, 14);
    px(16, 20, '#ffcd75', 2, 2);
  });
  mapCanvas(scene, 'sofa', 46, 20, (ctx, px) => {
    px(0, 4, '#7a3b8f', 5, 16); px(41, 4, '#7a3b8f', 5, 16); px(3, 0, '#9a4fb0', 40, 11); px(3, 11, '#7a3b8f', 40, 6);
    px(5, 1, '#b46dc8', 12, 2); px(2, 18, '#1a1c2c', 3, 2); px(41, 18, '#1a1c2c', 3, 2);
  });
  mapCanvas(scene, 'hp_notif', 14, 22, (ctx, px) => {              // HP besar dengan notifikasi
    px(0, 0, '#1a1c2c', 14, 22); px(1, 2, '#f4f4f4', 12, 17); px(1, 3, '#3b5dc9', 12, 3);
    px(2, 8, '#c2c3c7', 10, 1); px(2, 10, '#c2c3c7', 8, 1); px(2, 12, '#c2c3c7', 9, 1); px(6, 20, '#566c86', 2, 1);
  });
  mapCanvas(scene, 'bunga', 8, 12, (ctx, px) => {
    [[2, 2, '#e43b44'], [5, 1, '#ff77a8'], [4, 4, '#ffcd75'], [1, 5, '#ff77a8'], [6, 4, '#e43b44']].forEach(([x, y, c]) => pxEllipse(px, x, y, 1, 1, c));
    px(3, 6, '#257179', 2, 6); px(2, 8, '#38b764', 4, 2);
  });
  mapCanvas(scene, 'meja_kafe', 30, 16, (ctx, px) => {
    px(0, 0, '#8b5a2b', 30, 3); px(0, 0, '#a0703c', 30, 1); px(13, 3, '#5d3a1a', 4, 12); px(8, 15, '#5d3a1a', 14, 1);
  });
  mapCanvas(scene, 'cangkir', 6, 6, (ctx, px) => { px(0, 1, '#f4f4f4', 5, 5); px(1, 1, '#5d3a1a', 3, 1); px(5, 2, '#f4f4f4', 1, 2); px(0, 5, '#c2c3c7', 5, 1); });
  mapCanvas(scene, 'komodo', 34, 12, (ctx, px) => {               // komodo (tampak samping, menghadap kanan)
    px(0, 7, '#6f7a5a', 8, 2); px(6, 6, '#6f7a5a', 6, 3);                  // ekor
    px(10, 4, '#7d8a63', 16, 5); px(12, 3, '#8f9c70', 12, 1); px(11, 8, '#5f6a4c', 14, 1);
    px(25, 3, '#7d8a63', 7, 4); px(31, 5, '#7d8a63', 3, 2); px(29, 4, '#1a1c2c'); px(33, 6, '#e43b44', 1, 1);   // kepala & lidah
    [[12, 9], [16, 9], [21, 9], [24, 9]].forEach(([x, y]) => px(x, y, '#5f6a4c', 2, 3));
    for (let x = 12; x < 25; x += 3) px(x, 5, '#9aa77a', 1, 1);
  });
  mapCanvas(scene, 'telur', 18, 8, (ctx, px) => {
    [[3, 4], [9, 3], [15, 4]].forEach(([x, y]) => { pxEllipse(px, x, y, 2, 3, '#f4e4c1'); px(x - 1, y - 1, '#ffffff', 1, 1); });
    px(0, 7, '#c9a85a', 18, 1);
  });
  mapCanvas(scene, 'rotifer', 14, 18, (ctx, px) => {               // rotifer (hewan mikro) — di bawah mikroskop
    pxEllipse(px, 7, 9, 5, 7, '#73eff7'); pxEllipse(px, 7, 9, 4, 6, '#a8f4f9');
    pxEllipse(px, 7, 7, 2, 2, '#38b764'); px(4, 1, '#41a6f6', 2, 2); px(8, 1, '#41a6f6', 2, 2);   // mahkota silia
    px(6, 15, '#73eff7', 2, 3);
  });
  mapCanvas(scene, 'mikroskop', 14, 20, (ctx, px) => {
    px(2, 18, '#333c57', 10, 2); px(9, 6, '#566c86', 2, 12); px(4, 12, '#566c86', 7, 2);
    px(3, 2, '#c2c3c7', 4, 8); px(3, 2, '#1a1c2c', 4, 1); px(4, 10, '#1a1c2c', 2, 2);
  });
  mapCanvas(scene, 'meja_lab', 40, 16, (ctx, px) => {
    px(0, 0, '#c2c3c7', 40, 3); px(0, 0, '#f4f4f4', 40, 1); px(2, 3, '#566c86', 3, 13); px(35, 3, '#566c86', 3, 13);
  });
  mapCanvas(scene, 'dimas_baring', 18, 7, (ctx, px) => {          // Dimas berbaring di tanah (kepala di kiri)
    px(0, 1, '#1a1c2c', 6, 6); px(1, 1, '#3a2a20', 4, 2); px(1, 3, '#f4c29a', 4, 3);
    px(1, 3, '#1a1c2c', 2, 1); px(3, 3, '#1a1c2c', 2, 1); px(2, 3, '#41a6f6', 1, 1);
    px(6, 2, '#5a6988', 7, 5); px(13, 3, '#29366f', 5, 4); px(17, 3, '#1a1c2c', 1, 4);
  });
  mapCanvas(scene, 'mimbar', 30, 24, (ctx, px) => {                 // meja sidang balai kota
    px(0, 0, '#5d3a1a', 30, 4); px(2, 4, '#8b5a2b', 26, 20); px(10, 9, '#ffcd75', 10, 6); px(12, 11, '#b13e53', 6, 2);
  });
}

// ============================================================
//  ASET KAMPUNG KOTA INDONESIA (Negeri Sekar & dunia Dimas)
//  Tampak samping: ruko 2 lantai, warung, rumah genteng, tugu jam, pohon mangga, tiang listrik, gerobak.
//  Latar ruangan (240×108): kamar kos, warkop, lorong losmen, lab kampus, pendopo kelurahan.
//  Peta tampak atas: rumah genteng, kelurahan, lab, lapangan, biro jodoh, studio TV, losmen, tugu jam.
// ============================================================
function buildKampungTextures(scene) {
  const H = (c, a) => c;                                   // (pembantu keterbacaan)
  // genteng: baris-baris ubin dengan bayangan; trapesium (ins = indentasi per baris)
  const genteng = (px, x0, y0, w, rows, c, dark, ins = 1) => {
    for (let r = 0; r < rows; r++) {
      const x = x0 + (rows - 1 - r) * ins, ww = w - (rows - 1 - r) * ins * 2;
      px(x, y0 + r, c, ww, 1);
      if (r % 2) for (let k = x + (r % 4 === 1 ? 1 : 3); k < x + ww; k += 4) px(k, y0 + r, dark, 1, 1);
      else px(x, y0 + r, dark, ww, 0);
    }
    px(x0, y0 + rows, dark, w, 1);
  };
  const squiggle = (px, x, y, w, c) => { for (let k = 0; k < w; k += 3) px(x + k, y + (k % 6 ? 0 : 1), c, 2, 1); };
  const kaca = (px, x, y, w, h, frame = '#5d3a1a', glass = '#9fd4ff') => {
    px(x, y, frame, w, h); px(x + 1, y + 1, glass, w - 2, h - 2); px(x + 1, y + 1, 'rgba(255,255,255,0.45)', 2, 1);
    px(x + Math.floor(w / 2), y + 1, frame, 1, h - 2);
  };

  // ---------- RUKO 2 lantai (44×52) ----------
  [['a', '#9fd8c4', '#257179', '#e43b44', '#ef7d57'], ['b', '#f2b8a0', '#b13e53', '#3b5dc9', '#41a6f6'], ['c', '#f6d98b', '#c98a1a', '#38b764', '#e43b44'], ['d', '#c9b8e8', '#7a3b8f', '#ef7d57', '#ffcd75']]
    .forEach(([k, wall, trim, sign, awn]) => mapCanvas(scene, 'ruko_' + k, 44, 52, (ctx, px) => {
      px(0, 0, trim, 44, 3); px(1, 1, 'rgba(255,255,255,0.25)', 42, 1);                 // dinding atap (parapet)
      px(1, 3, wall, 42, 46); px(1, 3, 'rgba(255,255,255,0.15)', 3, 46); px(40, 3, 'rgba(0,0,0,0.12)', 3, 46);
      [5, 26].forEach(x => {                                                                // jendela nako lantai 2
        px(x, 7, '#5d3a1a', 13, 11); px(x + 1, 8, '#9fd4ff', 11, 9);
        for (let y = 9; y < 17; y += 2) px(x + 1, y, '#c8e8ff', 11, 1);
        px(x - 1, 18, trim, 15, 1);
      });
      px(19, 9, '#e8e8e8', 5, 3); px(19, 12, '#c2c3c7', 5, 1);                             // AC kecil
      px(3, 21, sign, 38, 7); px(4, 22, 'rgba(255,255,255,0.2)', 36, 1); squiggle(px, 7, 24, 30, '#ffffff');   // papan nama
      for (let x = 1; x < 43; x++) px(x, 28 + (x % 2), ((x >> 2) % 2) ? awn : '#f4f4f4', 1, 3 - (x % 2)); // tenda kanopi belang
      px(1, 31, 'rgba(0,0,0,0.25)', 42, 1);
      px(4, 32, '#3a2a20', 36, 16);                                                         // toko terbuka
      for (let y = 34; y < 46; y += 5) { px(5, y + 3, '#8b5a2b', 34, 1); for (let x = 6; x < 38; x += 3) px(x, y, ['#ffcd75', '#e43b44', '#41a6f6', '#38b764', '#f4f4f4'][(x + y) % 5], 2, 3); }
      px(4, 32, '#8a8f99', 36, 3); for (let x = 5; x < 40; x += 2) px(x, 33, '#6f747f', 1, 1);  // rolling door terangkat
      px(0, 48, '#8a8f99', 44, 2); px(0, 50, '#6f747f', 44, 2);                             // teras & tangga
    }));
  // ---------- WARUNG kopi/kelontong (40×30) ----------
  mapCanvas(scene, 'warung_s', 40, 30, (ctx, px) => {
    for (let y = 0; y < 8; y++) for (let x = 0; x < 40; x++) px(x, y, ((x >> 2) % 2) ? '#3b5dc9' : '#ef7d57');   // terpal belang
    for (let x = 0; x < 40; x += 4) px(x, 8, '#29366f', 2, 1);
    px(1, 9, '#5d3a1a', 2, 21); px(37, 9, '#5d3a1a', 2, 21);
    for (let x = 4; x < 36; x += 3) px(x, 9, ['#e43b44', '#ffcd75', '#38b764', '#41a6f6', '#ff77a8'][x % 5], 2, 4);  // renceng sachet
    px(3, 17, '#c9a85a', 34, 2);
    [[6, 13], [12, 13], [18, 13]].forEach(([x, y]) => { px(x, y, '#c2e3f2', 4, 4); px(x, y, '#f4f4f4', 4, 1); px(x + 1, y + 2, '#ef7d57', 2, 2); });  // toples
    px(3, 19, '#8b5a2b', 34, 11); px(4, 20, '#a0703c', 32, 1); px(8, 22, '#ffcd75', 24, 5); squiggle(px, 10, 24, 20, '#b13e53');
  });
  // ---------- RUMAH GENTENG (42×34) ----------
  [['', '#f4f4f4', '#38b764'], ['_b', '#f6e7c1', '#3b5dc9']].forEach(([k, wall, kus]) => mapCanvas(scene, 'rumah_genteng' + k, 42, 34, (ctx, px) => {
    genteng(px, 0, 0, 42, 11, '#c8582c', '#8c3a1e', 1.6);
    px(19, 0, '#8c3a1e', 4, 1);
    px(2, 12, wall, 38, 21); px(2, 12, 'rgba(0,0,0,0.12)', 38, 1);
    kaca(px, 6, 16, 10, 8, kus); px(5, 15, kus, 12, 1); px(5, 24, kus, 12, 1);
    px(22, 15, kus, 9, 18); px(23, 16, '#8b5a2b', 7, 17); px(28, 24, '#ffcd75', 1, 1);
    kaca(px, 33, 16, 6, 8, kus);
    px(0, 32, '#c2c3c7', 42, 2);
  }));
  mapCanvas(scene, 'pagar', 24, 10, (ctx, px) => { px(0, 2, '#29366f', 24, 1); px(0, 8, '#29366f', 24, 1); for (let x = 0; x < 24; x += 3) { px(x, 0, '#29366f', 1, 10); px(x, 0, '#41a6f6', 1, 1); } });
  mapCanvas(scene, 'pot_tanaman', 8, 11, (ctx, px) => { pxEllipse(px, 4, 3, 3, 3, '#2f8a55'); px(2, 1, '#5ccf7a', 2, 1); px(1, 6, '#c8582c', 6, 5); px(1, 6, '#e07a4a', 6, 1); });
  mapCanvas(scene, 'pohon_mangga', 34, 40, (ctx, px) => {
    px(15, 22, '#5d3a1a', 4, 18); px(13, 26, '#5d3a1a', 2, 3); px(19, 24, '#5d3a1a', 3, 2);
    [[17, 13, 16, 12, '#1f6b45'], [11, 12, 9, 8, '#257a4a'], [23, 11, 9, 8, '#257a4a'], [17, 9, 11, 8, '#38b764'], [12, 15, 6, 5, '#2f8a55']].forEach(([x, y, rx, ry, c]) => pxEllipse(px, x, y, rx, ry, c));
    [[8, 17], [24, 18], [15, 20], [27, 12], [10, 10]].forEach(([x, y]) => { px(x, y, '#ffcd75', 2, 3); px(x, y + 2, '#ef7d57', 2, 1); });
    px(12, 4, '#5ccf7a', 5, 1); px(20, 3, '#5ccf7a', 4, 1);
  });
  mapCanvas(scene, 'tiang_listrik', 14, 64, (ctx, px) => {
    px(6, 0, '#8a8f99', 3, 64); px(6, 0, '#c2c3c7', 1, 64); px(0, 4, '#5d3a1a', 14, 2); px(1, 3, '#f4f4f4', 1, 1); px(12, 3, '#f4f4f4', 1, 1);
    px(9, 18, '#566c86', 4, 6);                                                                                    // gardu kecil
  });
  mapCanvas(scene, 'gerobak_s', 28, 24, (ctx, px) => {
    px(2, 0, '#e43b44', 24, 3); px(4, 3, '#5d3a1a', 1, 6); px(23, 3, '#5d3a1a', 1, 6);
    px(2, 9, '#41a6f6', 22, 9); px(3, 10, '#c2e3f2', 9, 6); px(14, 10, '#c2e3f2', 9, 6); px(5, 12, '#f4f4f4', 4, 3); px(16, 13, '#ffcd75', 5, 2);
    px(2, 18, '#29366f', 22, 1); pxEllipse(px, 7, 21, 3, 3, '#1a1c2c'); pxEllipse(px, 7, 21, 1, 1, '#c2c3c7'); px(24, 14, '#5d3a1a', 4, 1);
  });
  // ---------- TUGU JAM alun-alun (36×64): balkon di y 18, jam di badan ----------
  mapCanvas(scene, 'menara_jam', 36, 64, (ctx, px) => {
    genteng(px, 2, 0, 32, 5, '#c8582c', '#8c3a1e', 2); genteng(px, 6, 6, 24, 4, '#c8582c', '#8c3a1e', 1);   // atap tumpang (joglo)
    px(17, 0, '#ffcd75', 2, 1);
    px(9, 11, '#f4e4c1', 18, 7); px(9, 11, '#257179', 18, 1);                                                // ruang atas
    for (let x = 4; x < 32; x += 3) px(x, 13, '#5d3a1a', 1, 5); px(3, 13, '#5d3a1a', 30, 1); px(2, 18, '#5d3a1a', 32, 2);   // balkon kayu
    px(7, 20, '#f4e4c1', 22, 40); px(7, 20, '#ffffff', 4, 40); px(25, 20, '#d9c3a0', 4, 40);                  // badan tugu
    px(7, 20, '#257179', 2, 40); px(27, 20, '#257179', 2, 40);                                                // les hijau
    pxEllipse(px, 18, 30, 7, 7, '#257179'); pxEllipse(px, 18, 30, 6, 6, '#f4f4f4');                           // jam
    px(18, 25, '#1a1c2c', 1, 6); px(18, 30, '#1a1c2c', 4, 1); [[18, 25], [23, 30], [18, 35], [13, 30]].forEach(([x, y]) => px(x, y, '#e43b44'));
    kaca(px, 15, 41, 6, 6, '#257179');
    px(14, 51, '#5d3a1a', 8, 9); px(14, 51, '#257179', 8, 1); px(20, 55, '#ffcd75', 1, 1);
    px(3, 60, '#c2c3c7', 30, 4); px(3, 60, '#e8e8e8', 30, 1);                                                 // undakan
  });

  // ---------- LATAR RUANGAN 240×108 (letakkan x = tengah kamera, y = 108) ----------
  const latar = (key, draw) => mapCanvas(scene, key, 240, 108, (ctx, px) => draw(px));
  const tegel = (px, y0, c1, c2) => { for (let y = y0, r = 0; y < 108; y += 8, r++) for (let x = 0, c = 0; x < 240; x += 8, c++) { px(x, y, (r + c) % 2 ? c1 : c2, 8, 8); px(x, y, 'rgba(0,0,0,0.08)', 8, 1); px(x, y, 'rgba(0,0,0,0.08)', 1, 8); } };
  latar('latar_kamar', px => {                                     // kamar kos Dimas: dinding hijau pastel, jendela kayu, poster
    px(0, 0, '#b8d8be', 240, 88); for (let x = 0; x < 240; x += 20) px(x, 0, 'rgba(0,0,0,0.03)', 10, 88);
    px(0, 86, '#7a5a3a', 240, 3); tegel(px, 89, '#e8e4dc', '#d6d0c4');
    px(52, 26, '#8b5a2b', 34, 34); px(55, 29, '#41a6f6', 13, 28); px(70, 29, '#41a6f6', 13, 28); px(55, 29, 'rgba(255,255,255,0.3)', 28, 3);
    for (let y = 26; y < 62; y += 3) { px(46, y, '#ef7d57', 6, 2); px(86, y, '#ef7d57', 6, 2); }                // gorden
    px(150, 24, '#f4f4f4', 22, 28); px(152, 26, '#3b5dc9', 18, 24); for (let k = 0; k < 9; k++) px(153 + k, 44 - k, '#f4f4f4', 1, 1); for (let k = 0; k < 8; k++) px(161 + k, 37 + k, '#f4f4f4', 1, 1); pxEllipse(px, 165, 31, 2, 2, '#ffcd75');  // poster gunung
    px(186, 40, '#8b5a2b', 28, 2); [['#e43b44', 4], ['#ffcd75', 3], ['#38b764', 4], ['#3b5dc9', 3], ['#7a3b8f', 4]].forEach(([c, w], i) => px(188 + i * 5, 32, c, w, 8));   // rak buku
    pxEllipse(px, 118, 18, 6, 6, '#1a1c2c'); pxEllipse(px, 118, 18, 5, 5, '#f4f4f4'); px(118, 14, '#1a1c2c', 1, 5); px(118, 18, '#1a1c2c', 3, 1);   // jam dinding
    px(18, 20, '#c2c3c7', 10, 3); pxEllipse(px, 23, 26, 5, 5, '#e8e8e8'); pxEllipse(px, 23, 26, 2, 2, '#41a6f6');   // kipas angin dinding
  });
  latar('latar_warkop', px => {                                    // warkop biro jodoh: bata ekspos, rak toples, papan menu
    px(0, 0, '#f2e2b8', 240, 50); px(0, 50, '#d9a68a', 240, 36); for (let r = 0; r * 4 + 50 < 86; r++) for (let x = r % 2 ? -6 : 0; x < 240; x += 12) px(Math.max(0, x), 50 + r * 4, ['#b55a3a', '#a84f32', '#c0643f'][(r + x) % 3 === 0 ? 1 : (x % 36 ? 0 : 2)], x < 0 ? 5 : 11, 3);
    px(0, 48, '#8b5a2b', 240, 2); px(0, 86, '#5d3a1a', 240, 2); tegel(px, 88, '#e0b878', '#c99a5a');
    [24, 40].forEach(y => px(20, y, '#8b5a2b', 64, 2)); for (let x = 22; x < 82; x += 8) { [16, 32].forEach(y => { px(x, y, '#c2e3f2', 6, 8); px(x, y, '#f4f4f4', 6, 1); px(x + 1, y + 4, ['#ef7d57', '#ffcd75', '#b13e53'][x % 3], 4, 4); }); }
    px(148, 14, '#5d3a1a', 44, 30); px(150, 16, '#2f5a3a', 40, 26); for (let y = 19; y < 40; y += 4) squiggle(px, 153, y, 32, '#f4f4f4');   // papan menu
    [110, 210].forEach(x => { px(x, 0, '#1a1c2c', 1, 14); pxEllipse(px, x, 16, 3, 3, '#ffcd75'); px(x - 1, 14, '#ffffff', 2, 1); });
    px(100, 22, '#ff77a8', 30, 12); px(112, 25, '#e43b44', 2, 2); px(116, 25, '#e43b44', 2, 2); px(112, 26, '#e43b44', 6, 2); px(113, 28, '#e43b44', 4, 1); px(114, 29, '#e43b44', 2, 1);   // papan hati biro jodoh
  });
  latar('latar_losmen', px => {                                    // lorong losmen: dinding krem, lis kayu, pintu bernomor
    px(0, 0, '#efe0c2', 240, 88); px(0, 58, '#a0703c', 240, 28); for (let x = 0; x < 240; x += 10) px(x, 58, '#8b5a2b', 1, 28); px(0, 57, '#5d3a1a', 240, 2);
    px(0, 86, '#5d3a1a', 240, 2); tegel(px, 88, '#c2c3c7', '#a8aab0');
    [20, 120, 200].forEach((x, i) => { px(x, 46, '#5d3a1a', 22, 40); px(x + 2, 48, '#8b5a2b', 18, 38); px(x + 4, 51, '#a0703c', 14, 12); px(x + 7, 40, '#f4f4f4', 8, 5); px(x + 9, 41, '#1a1c2c', [1, 3, 3][i], 3); px(x + 16, 66, '#ffcd75', 2, 2); });
    [70, 170].forEach(x => { px(x, 20, '#8b5a2b', 6, 3); pxEllipse(px, x + 3, 26, 3, 3, '#ffcd75'); });
  });
  latar('latar_lab', px => {                                       // lab kampus: dinding putih, keramik tosca, lemari kaca
    px(0, 0, '#eef3f3', 240, 88); for (let y = 52; y < 86; y += 6) for (let x = 0; x < 240; x += 6) px(x, y, '#73c7c0', 5, 5);
    px(0, 50, '#257179', 240, 2); px(0, 86, '#566c86', 240, 2); tegel(px, 88, '#dfe4e8', '#c8cfd6');
    px(14, 22, '#566c86', 36, 64); px(16, 24, '#c2e3f2', 32, 60); for (let y = 38; y < 84; y += 15) { px(16, y, '#566c86', 32, 1); for (let x = 18; x < 46; x += 6) { px(x, y - 8, ['#e43b44', '#38b764', '#ffcd75', '#7a3b8f'][(x + y) % 4], 3, 7); px(x, y - 9, '#f4f4f4', 3, 1); } }
    px(170, 16, '#f4f4f4', 26, 34); px(170, 16, '#41a6f6', 26, 4); for (let y = 22; y < 48; y++) { const t = (y - 22) / 26 * Math.PI * 2; px(178 + Math.round(Math.sin(t) * 5), y, '#e43b44'); px(188 - Math.round(Math.sin(t) * 5), y, '#3b5dc9'); if (y % 3 === 0) px(178 + Math.round(Math.sin(t) * 5), y, '#c2c3c7', 188 - Math.round(Math.sin(t) * 5) - (178 + Math.round(Math.sin(t) * 5)), 1); }   // poster DNA
    [90, 130].forEach(x => { px(x, 0, '#c2c3c7', 30, 3); px(x + 2, 3, '#f4f4f4', 26, 2); });
  });
  latar('latar_pendopo', px => {                                   // pendopo kelurahan: kayu, umbul-umbul merah putih, spanduk
    px(0, 0, '#7a4a2a', 240, 88); for (let x = 0; x < 240; x += 12) px(x, 0, '#6a3e22', 2, 88);
    [16, 92, 148, 224].forEach(x => { px(x, 6, '#3a2414', 8, 80); px(x + 1, 6, '#5d3a1a', 2, 80); });
    px(0, 0, '#5d3a1a', 240, 6); px(0, 6, '#1a1c2c', 240, 1);
    for (let x = 0, i = 0; x < 240; x += 10, i++) for (let k = 0; k < 5; k++) px(x + 1 + k, 7 + k, i % 2 ? '#f4f4f4' : '#e43b44', 8 - k * 2, 1);   // umbul-umbul segitiga merah-putih
    px(56, 18, '#f4f4f4', 128, 12); px(56, 18, '#e43b44', 128, 2); squiggle(px, 62, 23, 116, '#29366f');      // spanduk (tanpa tulisan asli)
    px(0, 86, '#3a2414', 240, 2); tegel(px, 88, '#e8d6a8', '#d2bd8a');
  });

  // ---------- PETA tampak atas (kampung kota) ----------
  ['#c8582c', '#a8452a', '#d77a3a', '#8c5a3a'].forEach((roof, i) => mapCanvas(scene, `rumahk_top_${i}`, 14, 13, (ctx, px) => {
    px(1, 12, 'rgba(0,0,0,0.25)', 13, 1);
    for (let y = 0; y < 8; y++) { px(0, y, roof, 14, 1); if (y % 2) for (let x = (y % 4 === 1 ? 1 : 3); x < 14; x += 4) px(x, y, 'rgba(0,0,0,0.25)'); }
    px(0, 3, 'rgba(0,0,0,0.3)', 14, 1); px(0, 7, '#5d3a1a', 14, 1);
    px(1, 8, '#f4e4c1', 12, 4); px(5, 9, '#5d3a1a', 3, 3); px(2, 9, '#41a6f6', 2, 2); px(10, 9, '#41a6f6', 2, 2);
  }));
  const gtop = (key, w, h, roof, wall, extra) => mapCanvas(scene, key, w, h, (ctx, px) => {
    const rh = Math.round(h * 0.5);
    px(1, h - 1, 'rgba(0,0,0,0.25)', w - 1, 1);
    for (let y = 0; y < rh; y++) { px(0, y, roof, w, 1); if (y % 2) for (let x = (y % 4 === 1 ? 1 : 3); x < w; x += 4) px(x, y, 'rgba(0,0,0,0.22)'); }
    px(0, Math.floor(rh / 2), 'rgba(0,0,0,0.3)', w, 1); px(0, rh - 1, '#5d3a1a', w, 1);
    px(1, rh, wall, w - 2, h - rh - 1); extra(px, rh);
  });
  gtop('kelurahan_top', 46, 26, '#8c3a1e', '#f4e4c1', (px, rh) => {      // kantor kelurahan (pendopo)
    px(6, 2, '#c8582c', 34, 8); for (let x = 4; x < 44; x += 6) px(x, rh + 1, '#5d3a1a', 2, 26 - rh - 2);
    px(19, rh + 4, '#5d3a1a', 8, 26 - rh - 5); px(44, 0, '#c2c3c7', 1, 11); px(41, 0, '#e43b44', 3, 2); px(41, 2, '#f4f4f4', 3, 2);
  });
  gtop('lab_top', 34, 22, '#38b764', '#f4f4f4', (px, rh) => {        // lab kampus (atap seng hijau)
    for (let x = 4; x < 32; x += 5) px(x, rh + 2, '#73eff7', 3, 3); px(15, rh + 4, '#566c86', 4, 22 - rh - 5);
    px(14, 1, '#f4f4f4', 6, 6); px(16, 2, '#41a6f6', 2, 4); px(15, 5, '#41a6f6', 4, 1);
  });
  mapCanvas(scene, 'stadion_top', 48, 30, (ctx, px) => {               // lapangan bola kampung
    px(0, 0, '#b07a4a', 48, 30); px(2, 2, '#4fb85f', 44, 26); for (let x = 2; x < 46; x += 6) px(x, 2, '#46a855', 3, 26);
    px(4, 4, '#f4f4f4', 40, 1); px(4, 25, '#f4f4f4', 40, 1); px(4, 4, '#f4f4f4', 1, 22); px(43, 4, '#f4f4f4', 1, 22); px(23, 4, '#f4f4f4', 1, 22);
    pxEllipse(px, 23, 15, 4, 4, '#f4f4f4'); pxEllipse(px, 23, 15, 3, 3, '#4fb85f');
    px(1, 11, '#f4f4f4', 3, 8); px(44, 11, '#f4f4f4', 3, 8);
    px(6, 27, '#c9a85a', 36, 3); for (let x = 7; x < 41; x += 3) px(x, 28, '#8b5a2b', 1, 1);   // tribun bambu
  });
  gtop('biro_top', 30, 20, '#c8582c', '#ffd6e6', (px, rh) => {
    px(4, rh + 2, '#41a6f6', 4, 3); px(22, rh + 2, '#41a6f6', 4, 3); px(13, rh + 2, '#5d3a1a', 4, 20 - rh - 3);
    px(10, 0, '#ff77a8', 10, 6); px(12, 1, '#e43b44', 2, 2); px(16, 1, '#e43b44', 2, 2); px(12, 2, '#e43b44', 6, 2); px(13, 4, '#e43b44', 4, 1);   // papan hati
  });
  gtop('studio_top', 30, 22, '#3b5dc9', '#f4f4f4', (px, rh) => {
    px(3, rh + 2, '#41a6f6', 5, 3); px(22, rh + 2, '#41a6f6', 5, 3); px(12, rh + 3, '#333c57', 6, 22 - rh - 4);
    px(24, 0, '#c2c3c7', 1, 9); for (let y = 1; y < 9; y += 2) px(23, y, '#c2c3c7', 3, 1); px(24, 0, '#e43b44', 1, 1);   // menara antena
    px(4, 2, '#e43b44', 9, 4); px(5, 3, '#f4f4f4', 2, 2);
  });
  gtop('hotel_top', 30, 24, '#c8582c', '#f6e7c1', (px, rh) => {      // losmen
    for (let x = 3; x < 28; x += 5) { px(x, rh + 2, '#41a6f6', 3, 3); px(x, rh + 7, '#41a6f6', 3, 2); }
    px(8, 1, '#ffcd75', 14, 3); squiggle(px, 9, 2, 12, '#b13e53');
  });
  mapCanvas(scene, 'menara_jam_top', 16, 28, (ctx, px) => {            // tugu jam dari atas (¾)
    px(2, 27, 'rgba(0,0,0,0.3)', 13, 1);
    for (let y = 0; y < 7; y++) { const w = 2 + y * 2; px(7 - y, y, '#c8582c', w, 1); if (y % 2) for (let x = 8 - y; x < 7 + y; x += 3) px(x, y, '#8c3a1e', 1, 1); }
    px(1, 7, '#5d3a1a', 15, 1);
    px(3, 8, '#f4e4c1', 10, 19); px(3, 8, '#ffffff', 3, 19); px(11, 8, '#d9c3a0', 2, 19); px(3, 8, '#257179', 1, 19); px(12, 8, '#257179', 1, 19);
    pxEllipse(px, 8, 13, 3, 3, '#257179'); pxEllipse(px, 8, 13, 2, 2, '#f4f4f4'); px(8, 11, '#1a1c2c', 1, 3);
    px(6, 21, '#5d3a1a', 4, 6);
  });
}
