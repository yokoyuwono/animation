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
  if (scene.textures.exists('menara_jam')) return;
  const gedung = (key, w, h, roof, wall, extra) => mapCanvas(scene, key, w, h, (ctx, px) => {
    const rh = Math.round(h * 0.45);
    px(1, h - 1, 'rgba(0,0,0,0.25)', w - 1, 1);
    for (let y = 0; y < rh; y++) { const ins = Math.max(0, Math.round((rh - 1 - y) * 0.6)); px(ins, y, roof, w - ins * 2, 1); }
    px(0, rh - 1, '#1a1c2c', w, 1); px(2, 1, 'rgba(255,255,255,0.18)', Math.round(w / 3), 1);
    px(1, rh, wall, w - 2, h - rh - 1); px(1, rh, 'rgba(0,0,0,0.12)', w - 2, 1);
    extra(px, rh);
  });

  // ---------- PETA (tampak atas ¾) ----------
  mapCanvas(scene, 'menara_jam_top', 16, 30, (ctx, px) => {     // menara jam alun-alun
    px(2, 29, 'rgba(0,0,0,0.3)', 13, 1);
    for (let y = 0; y < 6; y++) px(7 - y, y, '#7a3b8f', y * 2 + 2, 1);      // atap runcing
    px(1, 6, '#1a1c2c', 14, 1);
    px(2, 7, '#d9c3a0', 12, 22); px(2, 7, '#f4e4c1', 4, 22); px(12, 7, '#b59c72', 2, 22);
    pxEllipse(px, 8, 12, 4, 4, '#1a1c2c'); pxEllipse(px, 8, 12, 3, 3, '#f4f4f4');
    px(8, 10, '#1a1c2c', 1, 3); px(8, 12, '#1a1c2c', 2, 1);                   // jarum jam
    px(6, 23, '#5d3a1a', 4, 6); px(2, 18, '#b59c72', 12, 1);
  });
  mapCanvas(scene, 'stadion_top', 46, 30, (ctx, px) => {
    pxEllipse(px, 23, 15, 22, 14, '#c2c3c7'); pxEllipse(px, 23, 15, 20, 12, '#e43b44');
    pxEllipse(px, 23, 15, 17, 10, '#38b764');
    for (let x = 8; x < 39; x += 4) px(x, 8, '#2f9150', 2, 15);
    px(22, 6, '#f4f4f4', 1, 19); pxEllipse(px, 23, 15, 3, 3, '#f4f4f4'); pxEllipse(px, 23, 15, 2, 2, '#38b764');
    px(8, 11, '#f4f4f4', 1, 9); px(38, 11, '#f4f4f4', 1, 9);
  });
  gedung('lab_top', 34, 22, '#c2c3c7', '#f4f4f4', (px, rh) => {
    for (let x = 4; x < 32; x += 5) px(x, rh + 3, '#73eff7', 3, 3);
    px(15, rh + 5, '#566c86', 4, 22 - rh - 6);
    px(14, 1, '#41a6f6', 6, 6); px(15, 0, '#41a6f6', 4, 1); px(16, 2, '#73eff7', 2, 2);   // labu ukur
  });
  gedung('biro_top', 30, 20, '#ff77a8', '#f4e4c1', (px, rh) => {
    px(4, rh + 3, '#41a6f6', 4, 3); px(22, rh + 3, '#41a6f6', 4, 3); px(13, rh + 3, '#5d3a1a', 4, 20 - rh - 4);
    px(12, 2, '#e43b44', 2, 2); px(16, 2, '#e43b44', 2, 2); px(12, 3, '#e43b44', 6, 2); px(13, 5, '#e43b44', 4, 1); px(14, 6, '#e43b44', 2, 1);   // hati
  });
  gedung('studio_top', 30, 22, '#3b5dc9', '#f4f4f4', (px, rh) => {
    px(3, rh + 3, '#41a6f6', 5, 3); px(22, rh + 3, '#41a6f6', 5, 3); px(12, rh + 4, '#333c57', 6, 22 - rh - 5);
    px(24, 0, '#c2c3c7', 1, 8); pxEllipse(px, 21, 3, 3, 2, '#f4f4f4'); px(20, 3, '#e43b44', 2, 1);   // antena parabola
    px(4, 2, '#e43b44', 8, 3); px(5, 3, '#f4f4f4', 2, 1);                       // papan ON AIR
  });
  gedung('hotel_top', 30, 24, '#ef7d57', '#f4e4c1', (px, rh) => {
    for (let y = rh + 2; y < 21; y += 4) for (let x = 3; x < 28; x += 5) px(x, y, '#41a6f6', 3, 2);
  });

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
  mapCanvas(scene, 'menara_jam', 40, 96, (ctx, px) => {            // menara jam besar (Dimas terpojok di balkon y≈34)
    px(2, 95, 'rgba(0,0,0,0.3)', 37, 1);
    for (let y = 0; y < 14; y++) px(20 - Math.round(y * 0.9), y, '#7a3b8f', Math.round(y * 1.8) + 1, 1);   // atap
    px(6, 14, '#1a1c2c', 29, 1);
    px(8, 15, '#d9c3a0', 25, 81); px(8, 15, '#f4e4c1', 7, 81); px(28, 15, '#b59c72', 5, 81);
    pxEllipse(px, 20, 24, 7, 7, '#1a1c2c'); pxEllipse(px, 20, 24, 6, 6, '#f4f4f4');
    px(20, 19, '#1a1c2c', 1, 6); px(20, 24, '#1a1c2c', 4, 1);
    [[20, 19], [25, 24], [20, 29], [15, 24]].forEach(([x, y]) => px(x, y, '#e43b44'));
    px(3, 34, '#5d3a1a', 35, 2); for (let x = 4; x < 37; x += 3) px(x, 30, '#5d3a1a', 1, 4); px(3, 30, '#5d3a1a', 35, 1);   // balkon
    for (let y = 44; y < 84; y += 14) { px(13, y, '#41a6f6', 4, 6); px(23, y, '#41a6f6', 4, 6); px(13, y, '#1a1c2c', 4, 1); px(23, y, '#1a1c2c', 4, 1); }
    px(16, 84, '#5d3a1a', 8, 12); px(16, 84, '#1a1c2c', 8, 1);
    for (let y = 20; y < 96; y += 6) px(9, y, 'rgba(0,0,0,0.08)', 23, 1);
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
