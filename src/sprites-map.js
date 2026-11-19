// ============================================================
//  SPRITES PETA — gaya "tampak atas" (kota/desa dari ketinggian)
//  + sawah yang berubah kondisi + alat kerja tokoh (cangkul).
//  Dibuat langsung di canvas (bukan teks) agar bentuk bulat/elips rapi.
// ============================================================

function mapCanvas(scene, key, w, h, draw) {
  if (scene.textures.exists(key)) return;
  const tex = scene.textures.createCanvas(key, w, h);
  const ctx = tex.getContext();
  const px = (x, y, c, ww = 1, hh = 1) => { ctx.fillStyle = c; ctx.fillRect(x, y, ww, hh); };
  draw(ctx, px);
  tex.refresh();
}

// elips piksel terisi
function pxEllipse(px, cx, cy, rx, ry, color) {
  for (let y = -ry; y <= ry; y++) {
    const half = Math.floor(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry))) + 0.3);
    px(cx - half, cy + y, color, half * 2 + 1, 1);
  }
}

// angka acak tetap (agar gambar sama tiap kali dimuat)
function mapRand(seed) { let s = seed; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); }


// ---------- tokoh baru (seri Andaikan: ojol, internet, nasi) ----------
if (typeof CHARACTERS !== 'undefined') Object.assign(CHARACTERS, {
  udin:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#2f8a55', R: '#38b764', B: '#1a1c2c' } },  // driver ojol (helm & jaket hijau polos)
  joko:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#ef7d57', B: '#5d3a1a' } },  // ojek pangkalan (rompi oranye)
  ijah:  { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#7a3b8f', R: '#ffcd75', B: '#7a3b8f' } },
  nadia: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#41a6f6', B: '#29366f' } },
  hasan: { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#257179', B: '#5d3a1a' } },
  rara:  { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#ff77a8', B: '#b13e53' } },
  dafa:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#f4f4f4', B: '#e43b44' } },  // seragam SD
  nenek: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#c2c3c7', R: '#7a3b8f', B: '#5d3a1a' } },
  wiryo: { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#c2c3c7', R: '#8b5a2b', B: '#1a1c2c' } },
  endang:{ body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#b13e53', R: '#f4f4f4', B: '#b13e53' } },
  tole:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#e43b44', B: '#3b5dc9' } },
  bima:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#f4f4f4', R: '#f4f4f4', B: '#5d3a1a' } },  // tukang roti
  // seri tanpa-koruptor (semua fiktif)
  slamet:{ body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#ffcd75', R: '#ef7d57', B: '#333c57' } },  // kontraktor kecil (helm proyek)
  dinda: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#1a1c2c', R: '#f4f4f4', B: '#e43b44' } },  // seragam SD
  wati:  { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#b13e53', R: '#ff77a8', B: '#7a3b8f' } },
  jali:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#ffcd75', B: '#1a1c2c' } },  // calo (kemeja kuning mencolok)
  petugas:{ body: BOY_BODY, legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#a8b84a', B: '#5d3a1a' } },
  // seri genz-milenial (fiktif): pulau A Gen Z (ungu), pulau B milenial (teal)
  kayla: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#7a3b8f', R: '#c9a0dc', B: '#29366f' } },
  rafi:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#7a3b8f', B: '#333c57' } },
  bayu:  { body: BOY_BODY,  legs: BOY_LEGS,  colors: { H: '#1a1c2c', R: '#257179', B: '#5d3a1a' } },
  sinta: { body: GIRL_BODY, legs: GIRL_LEGS, colors: { H: '#5d3a1a', R: '#73eff7', B: '#257179' } },
});

function buildMapTextures(scene) {
  // ---------- gunung api dari atas ----------
  ['on', 'off'].forEach(state => mapCanvas(scene, `gunung_top_${state}`, 76, 50, (ctx, px) => {
    const on = state === 'on', rnd = mapRand(on ? 7 : 8);
    const lit = on ? '#9a7550' : '#8a8a78', mid = on ? '#7d5a3c' : '#6f6f60', dark = on ? '#5d4030' : '#55554a';
    pxEllipse(px, 38, 44, 37, 5, '#1f5c45');                                   // kaki gunung (bayangan hutan)
    for (let y = 5; y <= 44; y++) {                                             // kerucut ¾ (segitiga)
      const half = Math.round(5 + (y - 5) * 0.84), l = 38 - half;
      px(l, y, lit, half, 1); px(38, y, mid, half + 1, 1);
      px(38 + Math.round(half * 0.55), y, dark, Math.max(1, Math.round(half * 0.45)), 1);
    }
    for (let k = -3; k <= 3; k++) {                                             // alur lereng
      if (!k) continue;
      for (let y = 8; y < 40; y++) if ((y + k * 3) % 2) px(Math.round(38 + k * 1.6 + k * (y - 8) * 0.24), y, dark);
    }
    for (let x = 2; x < 74; x++) {                                              // hutan di kaki gunung (tepi bergerigi)
      const top = 33 + Math.round(Math.abs(x - 38) * 0.14) + Math.round(rnd() * 3);
      for (let y = top; y <= 46; y++) {
        const half = Math.round(5 + (y - 5) * 0.84);
        if (Math.abs(x - 38) <= half + (y > 41 ? 3 : 0)) px(x, y, (x + y) % 5 ? (x < 38 ? '#2f8a55' : '#1f6b45') : '#165040');
      }
    }
    pxEllipse(px, 38, 6, 7, 2, '#2b1d16');                                      // bibir kawah
    if (on) {
      pxEllipse(px, 38, 6, 5, 1, '#e43b44'); px(37, 6, '#ffcd75', 3, 1);
      for (let y = 8; y < 24; y++) px(35 - Math.round((y - 8) * 0.25), y, y % 3 ? '#e43b44' : '#ef7d57', 2, 1);   // aliran lava
    } else {
      pxEllipse(px, 38, 6, 5, 1, '#4a5160');
      for (let i = 0; i < 26; i++) px(20 + Math.floor(rnd() * 36), 14 + Math.floor(rnd() * 20), '#4f9a5a', 2, 1);   // lereng mulai menghijau
    }
  }));

  // ---------- petak sawah dari atas ----------
  const plot = (key, base, draw) => mapCanvas(scene, key, 26, 16, (ctx, px) => {
    px(0, 0, '#6b4a2b', 26, 16); px(1, 1, base, 24, 14); draw(px);
  });
  plot('sawah_top_air', '#3b7fd0', px => { for (let y = 2; y < 15; y += 3) px(2, y, '#5d3a1a', 22, 1); px(4, 3, '#9fd4ff', 4, 1); px(15, 9, '#9fd4ff', 3, 1); });
  plot('sawah_top_subur', '#2f6fbf', px => { for (let y = 2; y < 15; y += 2) for (let x = 2 + (y % 4 ? 1 : 0); x < 24; x += 2) px(x, y, (x + y) % 6 ? '#38b764' : '#5ccf7a', 1, 1); });
  plot('sawah_top_kurus', '#b89a52', px => { const r = mapRand(3); for (let y = 2; y < 15; y += 3) for (let x = 2; x < 24; x += 4) if (r() < 0.75) px(x, y, '#a8b84a', 1, 1); });
  plot('sawah_top_kering', '#a0703c', px => {
    const r = mapRand(11);
    for (let i = 0; i < 9; i++) { let x = 2 + Math.floor(r() * 21), y = 2 + Math.floor(r() * 11); for (let k = 0; k < 5; k++) { px(x, y, '#6b4423'); x += r() < 0.5 ? 1 : 0; y += r() < 0.5 ? 1 : -1; if (y < 1 || y > 14) break; } }
  });

  // ---------- rumah kecil (¾) & pohon ----------
  ['#b13e53', '#3b5dc9', '#7a3b8f', '#ef7d57'].forEach((roof, i) => mapCanvas(scene, `rumah_top_${i}`, 13, 12, (ctx, px) => {
    px(1, 11, 'rgba(0,0,0,0.25)', 12, 1);
    for (let y = 0; y < 6; y++) px(6 - y, y, roof, y * 2 + 1, 1);               // atap segitiga
    px(0, 5, roof, 13, 1); px(1, 4, 'rgba(255,255,255,0.18)', 4, 1);
    px(1, 6, '#f4e4c1', 11, 5); px(1, 6, '#d9c3a0', 11, 1);                    // dinding
    px(5, 8, '#5d3a1a', 3, 3); px(2, 7, '#41a6f6', 2, 2); px(9, 7, '#41a6f6', 2, 2);
  }));
  mapCanvas(scene, 'pohon_top', 10, 11, (ctx, px) => {
    px(2, 10, 'rgba(0,0,0,0.25)', 7, 1); px(4, 7, '#5d3a1a', 2, 3);
    pxEllipse(px, 5, 4, 4, 4, '#257a4a'); pxEllipse(px, 4, 3, 3, 3, '#38b764'); px(2, 2, '#5ccf7a', 2, 1);
  });
  mapCanvas(scene, 'tenda_top', 12, 9, (ctx, px) => {
    px(1, 8, 'rgba(0,0,0,0.25)', 11, 1);
    for (let y = 0; y < 7; y++) px(6 - y, y + 1, '#3b5dc9', y * 2 + 1, 1);
    px(5, 4, '#1a1c2c', 2, 4); px(6, 0, '#f4f4f4', 1, 1);
  });
  mapCanvas(scene, 'awan_besar', 64, 30, (ctx, px) => {   // untuk transisi awan
    [[16, 18, 15, 11], [34, 14, 18, 13], [50, 19, 13, 10], [28, 22, 22, 8]].forEach(([x, y, rx, ry]) => pxEllipse(px, x, y, rx, ry, '#f4f4f4'));
    pxEllipse(px, 30, 25, 26, 4, '#dfe6ee');
  });

  // ---------- bangunan desa (¾) untuk peta MBG ----------
  const gedung = (key, w, h, roof, wall, extra) => mapCanvas(scene, key, w, h, (ctx, px) => {
    const rh = Math.round(h * 0.45);
    px(1, h - 1, 'rgba(0,0,0,0.25)', w - 1, 1);
    for (let y = 0; y < rh; y++) { const ins = Math.max(0, Math.round((rh - 1 - y) * 0.6)); px(ins, y, roof, w - ins * 2, 1); }
    px(0, rh - 1, '#1a1c2c', w, 1); px(2, 1, 'rgba(255,255,255,0.18)', Math.round(w / 3), 1);
    px(1, rh, wall, w - 2, h - rh - 1); px(1, rh, 'rgba(0,0,0,0.12)', w - 2, 1);
    extra(px, rh);
  });
  gedung('sekolah_top', 42, 22, '#b13e53', '#f4e4c1', (px, rh) => {
    for (let x = 4; x < 38; x += 6) if (x < 18 || x > 23) px(x, rh + 3, '#41a6f6', 3, 3);
    px(19, rh + 4, '#5d3a1a', 4, 22 - rh - 5);
    px(40, 0, '#c2c3c7', 1, 10); px(37, 0, '#e43b44', 3, 2); px(37, 2, '#f4f4f4', 3, 2);    // tiang bendera
  });
  ['on', 'off'].forEach(st => gedung(`dapur_top_${st}`, 28, 18, st === 'on' ? '#ef7d57' : '#6f6f70', st === 'on' ? '#f4f4f4' : '#a8a8a8', (px, rh) => {
    px(20, 0, '#5d3a1a', 3, rh);                                         // cerobong
    px(4, rh + 3, st === 'on' ? '#ffcd75' : '#565c6e', 4, 3); px(20, rh + 3, st === 'on' ? '#ffcd75' : '#565c6e', 4, 3);
    px(11, rh + 3, '#5d3a1a', 6, 18 - rh - 4);
    if (st === 'off') { for (let i = 0; i < 6; i++) { px(11 + i, rh + 3 + i, '#e43b44'); px(16 - i, rh + 3 + i, '#e43b44'); } }
  }));
  gedung('kos_top', 30, 22, '#3b5dc9', '#f4e4c1', (px, rh) => {
    for (let r = 0; r < 2; r++) for (let x = 3; x < 28; x += 6) px(x, rh + 2 + r * 5, r ? '#ffcd75' : '#41a6f6', 3, 3);
    px(13, 22 - 5, '#5d3a1a', 4, 4); px(10, rh, '#1a1c2c', 10, 1);
  });
  gedung('mall_top', 44, 22, '#7a3b8f', '#c2c3c7', (px, rh) => {
    for (let x = 2; x < 42; x += 4) px(x, rh + 2, '#41a6f6', 3, 5);
    px(16, rh + 9, '#1a1c2c', 12, 22 - rh - 10); px(18, rh + 10, '#5fcde4', 8, 22 - rh - 11);
    px(8, 1, '#ffcd75', 28, 2);
  });
  gedung('bank_top', 30, 22, '#257179', '#f4f4f4', (px, rh) => {
    for (let x = 3; x < 28; x += 5) px(x, rh + 2, '#c2c3c7', 2, 22 - rh - 4);
    px(12, 3, '#ffcd75', 6, 3);
  });
  gedung('bengkel_top', 26, 16, '#ef7d57', '#a8a8a8', (px, rh) => {
    px(4, rh + 2, '#333c57', 18, 16 - rh - 3); for (let y = rh + 3; y < 15; y += 2) px(4, y, '#565c6e', 18, 1);
  });

  // ---------- peta: ojol / internet / nasi ----------
  gedung('shelter_top', 26, 14, '#38b764', '#d6d6d6', (px, rh) => { px(2, rh + 2, '#1a1c2c', 22, 1); for (let x = 3; x < 24; x += 5) px(x, rh + 3, '#8b5a2b', 1, 14 - rh - 4); });
  gedung('halte_top', 22, 12, '#3b5dc9', '#c2c3c7', (px, rh) => { px(2, rh + 3, '#8b5a2b', 18, 2); });
  gedung('pangkalan_top', 18, 12, '#ef7d57', '#f4e4c1', (px, rh) => { px(3, rh + 2, '#1a1c2c', 12, 1); });
  gedung('warung_top', 22, 14, '#e43b44', '#f4e4c1', (px, rh) => { for (let k = 0; k < 22; k += 4) px(k, rh - 2, '#f4f4f4', 2, 2); px(3, rh + 3, '#ffcd75', 16, 3); });
  gedung('gudang_top', 40, 22, '#8a8f99', '#c9c3a8', (px, rh) => { px(14, rh + 3, '#5d3a1a', 12, 22 - rh - 4); for (let x = 2; x < 38; x += 4) px(x, 2, '#6f747d', 1, rh - 3); });
  gedung('roti_top', 24, 16, '#ffcd75', '#f4f4f4', (px, rh) => { px(4, rh + 2, '#c9a85a', 6, 3); px(14, rh + 2, '#c9a85a', 6, 3); px(10, rh + 5, '#5d3a1a', 4, 16 - rh - 6); });
  ['on', 'off'].forEach(st => mapCanvas(scene, `menara_top_${st}`, 14, 30, (ctx, px) => {
    const c = st === 'on' ? '#c2c3c7' : '#6f6f70';
    px(2, 29, 'rgba(0,0,0,0.25)', 11, 1);
    for (let y = 2; y < 29; y++) { const h = Math.round(1 + y * 0.18); px(7 - h, y, c, 1, 1); px(6 + h, y, c, 1, 1); if (y % 4 === 0) px(7 - h, y, c, h * 2, 1); }
    px(6, 0, c, 2, 3);
    if (st === 'on') { px(5, 0, '#e43b44', 1, 1); px(8, 0, '#e43b44', 1, 1); px(3, 5, '#41a6f6', 2, 2); px(9, 5, '#41a6f6', 2, 2); }
  }));
  [['#e43b44', 0], ['#3b5dc9', 1], ['#ffcd75', 2]].forEach(([c, i]) => mapCanvas(scene, `mobil_top_${i}`, 14, 9, (ctx, px) => {
    px(1, 8, 'rgba(0,0,0,0.3)', 13, 1); px(1, 2, '#1a1c2c', 12, 6); px(2, 3, c, 10, 4); px(4, 3, '#9fd4ff', 6, 2); px(2, 7, '#1a1c2c', 2, 1); px(10, 7, '#1a1c2c', 2, 1);
  }));
  mapCanvas(scene, 'ojol_top', 9, 8, (ctx, px) => { px(1, 7, 'rgba(0,0,0,0.3)', 8, 1); px(1, 5, '#1a1c2c', 7, 2); px(3, 1, '#38b764', 3, 4); px(3, 0, '#2f8a55', 3, 2); px(0, 6, '#1a1c2c', 2, 1); px(7, 6, '#1a1c2c', 2, 1); });
  const ladang = (key, base, crop) => mapCanvas(scene, key, 26, 16, (ctx, px) => { px(0, 0, '#6b4a2b', 26, 16); px(1, 1, base, 24, 14); for (let y = 2; y < 15; y += 3) for (let x = 2; x < 24; x += 3) px(x, y, crop, 2, 2); });
  ladang('ladang_jagung', '#8b6a46', '#c9c94a');
  ladang('ladang_singkong', '#8b6a46', '#38b764');
  ladang('lahan_rumah', '#c9c3a8', '#a8a8a8');

  mapCanvas(scene, 'kandang_top', 30, 16, (ctx, px) => {
    px(1, 15, 'rgba(0,0,0,0.25)', 29, 1);
    px(0, 4, '#8b5a2b', 30, 1); px(0, 14, '#8b5a2b', 30, 1); for (let x = 0; x < 30; x += 3) px(x, 4, '#5d3a1a', 1, 11);   // pagar
    px(1, 5, '#c9b07a', 28, 9);
    px(2, 0, '#7a5a3a', 12, 5); px(2, 0, '#1a1c2c', 12, 1);                                          // kandang kecil
    [[17, 7], [21, 10], [25, 6], [8, 10], [14, 12], [24, 12]].forEach(([x, y]) => { px(x, y, '#f4f4f4', 2, 2); px(x + 1, y - 1, '#e43b44'); });
  });
  mapCanvas(scene, 'pasar_top', 36, 18, (ctx, px) => {
    px(1, 17, 'rgba(0,0,0,0.25)', 35, 1);
    [0, 12, 24].forEach((x, i) => {
      const c = ['#e43b44', '#41a6f6', '#38b764'][i];
      for (let k = 0; k < 11; k += 2) px(x + k, 0, c, 1, 6), px(x + k + 1, 0, '#f4f4f4', 1, 6);
      px(x, 6, '#1a1c2c', 11, 1); px(x + 1, 7, '#8b5a2b', 9, 8);
      px(x + 2, 8, ['#ffcd75', '#f4f4f4', '#38b764'][i], 7, 3); px(x + 3, 11, '#ef7d57', 5, 2);
    });
  });

  mapCanvas(scene, 'karung_pupuk', 10, 12, (ctx, px) => {
    px(1, 11, 'rgba(0,0,0,0.3)', 9, 1); px(2, 0, '#1a1c2c', 6, 1); px(1, 1, '#1a1c2c', 8, 11); px(2, 1, '#f4f4f4', 6, 10); px(2, 1, '#c2c3c7', 6, 1);
    px(3, 4, '#38b764', 4, 3); px(4, 5, '#f4f4f4', 2, 1);
  });

  // ---------- sawah tampak samping (petak & padi) ----------
  mapCanvas(scene, 'petak_air', 48, 6, (ctx, px) => { px(0, 0, '#6b4a2b', 48, 6); px(1, 1, '#3b7fd0', 46, 4); for (let x = 2; x < 46; x += 7) px(x, 2, '#9fd4ff', 3, 1); for (let x = 5; x < 46; x += 9) px(x, 3, '#5d3a1a', 3, 1); });
  mapCanvas(scene, 'petak_retak', 48, 6, (ctx, px) => { px(0, 0, '#6b4a2b', 48, 6); px(1, 1, '#a0703c', 46, 4); const r = mapRand(5); for (let x = 2; x < 46; x += 3) px(x, 1 + Math.floor(r() * 4), '#5d3a1a', 1 + Math.floor(r() * 2), 1); });
  mapCanvas(scene, 'padi_kering', 18, 10, (ctx, px) => { for (let x = 1; x < 18; x += 3) { px(x, 6 + (x % 2), '#8b5a2b', 1, 3 - (x % 2)); px(x, 5 + (x % 2), '#c9a85a', 1, 1); } px(0, 8, '#a0703c', 18, 1); px(0, 9, '#5d3a1a', 18, 1); px(4, 8, '#5d3a1a', 2, 1); px(12, 8, '#5d3a1a', 3, 1); });
  mapCanvas(scene, 'padi_muda', 18, 10, (ctx, px) => { for (let x = 1; x < 18; x += 3) { px(x, 5, '#5ccf7a', 1, 3); px(x - 1, 5, '#38b764', 1, 1); px(x + 1, 6, '#38b764', 1, 1); } px(0, 8, '#41a6f6', 18, 1); px(0, 9, '#5d3a1a', 18, 1); });

  // ---------- seri tanpa-koruptor ----------
  gedung('balai_top', 46, 26, '#b13e53', '#f4f4f4', (px, rh) => {
    for (let x = 4; x < 44; x += 6) px(x, rh + 2, '#c2c3c7', 2, 26 - rh - 4);
    px(19, rh + 10, '#5d3a1a', 8, 26 - rh - 11); px(10, 1, '#ffcd75', 26, 2);
    px(44, 0, '#c2c3c7', 1, 10); px(41, 0, '#e43b44', 3, 2); px(41, 2, '#f4f4f4', 3, 2);
  });
  mapCanvas(scene, 'jalan_rusak', 24, 8, (ctx, px) => {
    px(0, 0, '#6f6f70', 24, 8); const r = mapRand(11);
    [[4, 3], [12, 5], [19, 2]].forEach(([x, y]) => { pxEllipse(px, x, y, 2, 1, '#3b2a1a'); px(x - 1, y, '#41a6f6', 2, 1); });
    for (let i = 0; i < 10; i++) px(Math.floor(r() * 24), Math.floor(r() * 8), '#8a8f99');
  });
  mapCanvas(scene, 'jalan_mulus', 24, 8, (ctx, px) => { px(0, 0, '#333c57', 24, 8); for (let x = 1; x < 24; x += 6) px(x, 3, '#f4f4f4', 3, 1); });
  mapCanvas(scene, 'amplop', 12, 8, (ctx, px) => {
    px(0, 0, '#c9a46a', 12, 8); px(1, 1, '#f4e4c1', 10, 6);
    for (let i = 0; i < 5; i++) { px(1 + i, 1 + i * 0.6 | 0, '#c9a46a'); px(10 - i, 1 + i * 0.6 | 0, '#c9a46a'); }
    px(5, 4, '#e43b44', 2, 2);
  });
  mapCanvas(scene, 'loket', 48, 40, (ctx, px) => {
    px(0, 39, 'rgba(0,0,0,0.3)', 48, 1); px(0, 0, '#a8a8a8', 48, 40); px(1, 1, '#c2c3c7', 46, 38);
    px(2, 2, '#3b5dc9', 44, 6); for (let x = 6; x < 42; x += 6) px(x, 4, '#f4f4f4', 3, 2);
    px(8, 11, '#1a1c2c', 32, 16); px(9, 12, '#d8f1ff', 30, 14); for (let x = 14; x < 40; x += 6) px(x, 12, '#8a8f99', 1, 14);
    px(4, 27, '#5d3a1a', 40, 3); px(6, 30, '#8b5a2b', 36, 9);
  });
  ['bocor', 'baru'].forEach(st => mapCanvas(scene, `atap_${st}`, 96, 12, (ctx, px) => {
    const a = st === 'baru' ? '#e43b44' : '#8a3b3b', b = st === 'baru' ? '#b13e53' : '#5d2a2a';
    for (let y = 0; y < 12; y += 3) for (let x = (y / 3) % 2 * 3; x < 96; x += 6) { px(x, y, a, 5, 3); px(x, y + 2, b, 5, 1); }
    px(0, 10, '#5d3a1a', 96, 2);
    if (st === 'bocor') { px(44, 2, '#1a1c2c', 8, 10); px(46, 0, '#1a1c2c', 3, 2); px(41, 5, '#5d3a1a', 3, 1); }
  }));
  mapCanvas(scene, 'tetes', 3, 4, (ctx, px) => { px(1, 0, '#9fd4ff'); px(0, 1, '#41a6f6', 3, 2); px(1, 3, '#41a6f6'); });
  ['buku', 'buku_basah'].forEach(st => mapCanvas(scene, st, 14, 7, (ctx, px) => {
    px(0, 1, '#29366f', 14, 6); px(1, 0, '#f4f4f4', 6, 6); px(7, 0, '#f4f4f4', 6, 6);
    for (let y = 1; y < 6; y++) { px(2, y, '#565c6e', 4, 1); px(8, y, '#565c6e', 4, 1); y++; }
    if (st === 'buku_basah') { pxEllipse(px, 4, 3, 3, 2, 'rgba(65,166,246,0.75)'); pxEllipse(px, 10, 3, 2, 2, 'rgba(65,166,246,0.6)'); px(3, 5, '#3b5dc9', 1, 2); px(9, 5, '#3b5dc9', 1, 2); }
  }));
  mapCanvas(scene, 'rak_buku', 26, 32, (ctx, px) => {
    px(0, 31, 'rgba(0,0,0,0.3)', 26, 1); px(0, 0, '#5d3a1a', 26, 32); px(1, 1, '#8b5a2b', 24, 30);
    const cs = ['#e43b44', '#41a6f6', '#38b764', '#ffcd75', '#7a3b8f', '#ef7d57'];
    [2, 12, 22].forEach((y, r) => { px(1, y + 8, '#5d3a1a', 24, 1); for (let x = 2, i = r; x < 24; x += 3, i++) px(x, y + (i % 2), cs[i % 6], 2, 8 - (i % 2)); });
  });
  ['tipis', 'lubang', 'tebal'].forEach(st => mapCanvas(scene, `aspal_${st}`, 80, st === 'tebal' ? 8 : 5, (ctx, px) => {
    const h = st === 'tebal' ? 8 : 5;
    px(0, 0, st === 'tebal' ? '#1a1c2c' : '#565c6e', 80, h);
    if (st === 'tebal') for (let x = 4; x < 80; x += 12) px(x, 3, '#f4f4f4', 6, 1);
    else { const r = mapRand(5); for (let i = 0; i < 14; i++) px(Math.floor(r() * 80), Math.floor(r() * h), '#8a8f99', 2, 1); }
    if (st === 'lubang') [[14, 2], [38, 3], [60, 2]].forEach(([x, y]) => { pxEllipse(px, x, y, 4, 2, '#3b2a1a'); px(x - 2, y, '#41a6f6', 4, 1); });
  }));
  mapCanvas(scene, 'gunting', 14, 10, (ctx, px) => {
    pxEllipse(px, 3, 7, 2, 2, '#e43b44'); pxEllipse(px, 3, 7, 1, 1, '#f4f4f4'); pxEllipse(px, 8, 8, 2, 1, '#e43b44'); px(8, 8, '#f4f4f4');
    for (let i = 0; i < 8; i++) { px(4 + i, 5 - (i >> 1), '#c2c3c7'); px(5 + i, 6 - (i >> 2), '#a8a8a8'); }
  });

  // ---------- seri genz-milenial (pulau) ----------
  mapCanvas(scene, 'kapal_karam', 28, 12, (ctx, px) => {
    px(2, 11, 'rgba(0,0,0,0.25)', 25, 1); px(1, 3, '#5d3a1a', 24, 7); px(2, 4, '#8b5a2b', 22, 5);
    for (let x = 4; x < 24; x += 4) px(x, 4, '#5d3a1a', 1, 5); px(24, 2, '#5d3a1a', 3, 3); px(14, 0, '#c2c3c7', 1, 4); px(15, 0, '#f4f4f4', 5, 3);
    px(8, 5, '#2f6fbf', 5, 3);
  });
  mapCanvas(scene, 'api_top', 9, 9, (ctx, px) => {
    [[1, 3], [3, 1], [5, 1], [7, 3], [7, 5], [5, 7], [3, 7], [1, 5]].forEach(([x, y]) => px(x, y, '#8a8f99', 1, 1));
    pxEllipse(px, 4, 4, 2, 2, '#ef7d57'); px(4, 3, '#ffcd75', 1, 2);
  });
  mapCanvas(scene, 'api_unggun', 18, 16, (ctx, px) => {
    px(1, 15, 'rgba(0,0,0,0.3)', 16, 1); px(2, 12, '#5d3a1a', 14, 2); px(4, 10, '#8b5a2b', 10, 2);
    pxEllipse(px, 9, 7, 4, 4, '#e43b44'); pxEllipse(px, 9, 8, 3, 3, '#ef7d57'); pxEllipse(px, 9, 9, 1, 2, '#ffcd75'); px(8, 1, '#ef7d57', 2, 3);
  });
  mapCanvas(scene, 'hp_jadul', 7, 12, (ctx, px) => {
    px(0, 0, '#1a1c2c', 7, 12); px(1, 1, '#8a8f99', 5, 10); px(2, 2, '#a7f070', 3, 3);
    for (let y = 6; y < 10; y += 2) for (let x = 1; x < 6; x += 2) px(x, y, '#333c57');
  });
  mapCanvas(scene, 'kincir', 30, 30, (ctx, px) => {
    const c = 15;
    for (let a = 0; a < 64; a++) { const t = (a / 64) * Math.PI * 2; px(Math.round(c + 13 * Math.cos(t)), Math.round(c + 13 * Math.sin(t)), '#c9a46a'); }
    for (let k = 0; k < 8; k++) { const t = (k / 8) * Math.PI * 2; for (let r = 2; r < 14; r++) px(Math.round(c + r * Math.cos(t)), Math.round(c + r * Math.sin(t)), '#8b5a2b'); px(Math.round(c + 14 * Math.cos(t)) - 1, Math.round(c + 14 * Math.sin(t)) - 1, '#41a6f6', 3, 3); }
    pxEllipse(px, c, c, 2, 2, '#5d3a1a');
  });
  mapCanvas(scene, 'lumbung', 30, 32, (ctx, px) => {
    px(1, 31, 'rgba(0,0,0,0.3)', 29, 1);
    [5, 13, 21].forEach(x => px(x, 22, '#5d3a1a', 2, 9));
    px(4, 12, '#8b5a2b', 22, 10); for (let x = 6; x < 26; x += 3) px(x, 13, '#a0703c', 1, 8);
    for (let y = 0; y < 12; y++) px(15 - y - 1, y, '#c9a85a', (y + 1) * 2 + 1, 1);
    px(12, 15, '#5d3a1a', 6, 7); px(13, 16, '#ffcd75', 4, 2);
  });
  mapCanvas(scene, 'kelapa', 9, 9, (ctx, px) => { pxEllipse(px, 4, 5, 3, 3, '#5d3a1a'); pxEllipse(px, 3, 4, 1, 1, '#8b5a2b'); px(3, 0, '#38b764', 3, 2); });
  mapCanvas(scene, 'jalur_pasir', 34, 14, (ctx, px) => {
    pxEllipse(px, 17, 7, 16, 6, '#e4d3a8'); const r = mapRand(9); for (let i = 0; i < 20; i++) px(Math.floor(2 + r() * 30), Math.floor(3 + r() * 8), '#c9b98a');
  });

  // perahu (tampak atas & samping), kerang, ember, papan aturan, daun obat, anyaman
  mapCanvas(scene, 'perahu_top', 20, 9, (ctx, px) => { px(1, 8, 'rgba(0,0,0,0.2)', 18, 1); px(0, 3, '#5d3a1a', 20, 4); px(2, 2, '#8b5a2b', 16, 6); px(9, 0, '#c9a46a', 6, 4); px(10, 1, '#e4d3a8', 4, 2); });
  mapCanvas(scene, 'perahu', 44, 30, (ctx, px) => {
    px(20, 2, '#5d3a1a', 2, 20); for (let y = 3; y < 19; y++) px(22, y, '#c9a46a', Math.round((y - 2) * 0.9), 1);
    for (let x = 0; x < 44; x++) { const d = Math.round(Math.abs(x - 22) / 6); px(x, 21 + d, '#5d3a1a', 1, 1); }
    px(4, 21, '#8b5a2b', 36, 3); px(8, 24, '#8b5a2b', 28, 2); px(12, 26, '#5d3a1a', 20, 2);
  });
  mapCanvas(scene, 'kerang', 9, 7, (ctx, px) => { pxEllipse(px, 4, 4, 4, 3, '#f4e4c1'); for (let x = 1; x < 8; x += 2) px(x, 2, '#c9a46a', 1, 4); px(3, 6, '#c9a46a', 3, 1); });
  mapCanvas(scene, 'ember', 10, 10, (ctx, px) => { px(0, 2, '#8a8f99', 10, 8); px(1, 3, '#c2c3c7', 8, 6); px(1, 3, '#41a6f6', 8, 2); px(2, 0, '#1a1c2c', 6, 1); px(1, 1, '#1a1c2c', 1, 2); px(8, 1, '#1a1c2c', 1, 2); });
  mapCanvas(scene, 'papan_aturan', 30, 28, (ctx, px) => {
    px(4, 18, '#5d3a1a', 2, 10); px(24, 18, '#5d3a1a', 2, 10); px(0, 0, '#5d3a1a', 30, 20); px(1, 1, '#c9a46a', 28, 18);
    px(4, 3, '#1a1c2c', 22, 2); for (let y = 7; y < 18; y += 3) { px(4, y, '#5d3a1a', 3, 1); px(9, y, '#5d3a1a', 15, 1); }
  });
  mapCanvas(scene, 'daun_obat', 12, 10, (ctx, px) => { pxEllipse(px, 4, 4, 3, 2, '#38b764'); pxEllipse(px, 8, 5, 3, 2, '#5ccf7a'); px(5, 6, '#2f8a55', 1, 4); px(3, 3, '#a7f070'); });
  // ---------- sumber daya alam pulau (tampak atas) + barang bawaan ----------
  mapCanvas(scene, 'kelapa_top', 15, 15, (ctx, px) => {
    px(3, 13, 'rgba(0,0,0,0.25)', 10, 2);
    [[0, -1], [1, 0], [0, 1], [-1, 0], [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7]].forEach(([dx, dy], i) => { for (let r = 1; r < 7; r++) px(Math.round(7 + dx * r), Math.round(7 + dy * r), r > 4 ? '#2f8a55' : '#38b764', i % 2 ? 1 : 2, 1); });
    px(6, 6, '#8b5a2b', 3, 3); px(8, 8, '#5d3a1a', 1, 1);
  });
  mapCanvas(scene, 'bambu_top', 14, 14, (ctx, px) => {
    px(2, 12, 'rgba(0,0,0,0.25)', 11, 2); const r = mapRand(31);
    for (let i = 0; i < 9; i++) { const x = 2 + Math.floor(r() * 10), y = 2 + Math.floor(r() * 9); px(x, y, '#a8b84a', 2, 2); px(x, y, '#5ccf7a', 1, 1); }
    pxEllipse(px, 7, 7, 2, 2, '#c9c94a');
  });
  mapCanvas(scene, 'batu_top', 16, 11, (ctx, px) => { px(1, 10, 'rgba(0,0,0,0.3)', 15, 1); pxEllipse(px, 5, 6, 4, 3, '#8a8f99'); pxEllipse(px, 11, 5, 4, 3, '#a8a8a8'); pxEllipse(px, 8, 8, 3, 2, '#c2c3c7'); px(4, 4, '#e4e4e4', 2, 1); });
  mapCanvas(scene, 'karang_top', 16, 10, (ctx, px) => { const c = ['#ff77a8', '#ef7d57', '#ffcd75', '#b13e53']; const r = mapRand(41); for (let i = 0; i < 14; i++) px(Math.floor(r() * 15), Math.floor(r() * 9), c[i % 4], 2, 1 + (i % 2)); });
  ['0', '1'].forEach(f => mapCanvas(scene, 'ikan_top_' + f, 12, 6, (ctx, px) => { const o = f === '1' ? 1 : 0; [[1, 2], [7, 3 - o]].forEach(([x, y]) => { px(x, y, '#c2c3c7', 3, 1); px(x + 3, y, '#9fd4ff', 1, 1); px(x - 1, y - 1 + o, '#c2c3c7', 1, 1); }); }));
  mapCanvas(scene, 'tanah_liat', 22, 12, (ctx, px) => { pxEllipse(px, 11, 6, 10, 5, '#8b4a2b'); pxEllipse(px, 11, 6, 7, 3, '#a0603c'); px(6, 5, '#c97a4a', 3, 1); px(13, 7, '#c97a4a', 4, 1); });
  mapCanvas(scene, 'kayu', 10, 4, (ctx, px) => { px(0, 0, '#8b5a2b', 10, 4); px(0, 0, '#5d3a1a', 10, 1); px(9, 1, '#c9a46a', 1, 2); });
  mapCanvas(scene, 'ikan', 9, 5, (ctx, px) => { px(1, 1, '#8a8f99', 6, 3); px(2, 1, '#c2c3c7', 4, 1); px(7, 0, '#8a8f99', 2, 5); px(2, 2, '#1a1c2c'); });
  mapCanvas(scene, 'batu_kecil', 7, 5, (ctx, px) => { pxEllipse(px, 3, 2, 3, 2, '#a8a8a8'); px(2, 1, '#e4e4e4'); });
  mapCanvas(scene, 'bambu_batang', 12, 3, (ctx, px) => { px(0, 0, '#a8b84a', 12, 3); px(4, 0, '#5d7a2b', 1, 3); px(8, 0, '#5d7a2b', 1, 3); });
  // tumpukan uang kertas merah berpita (gaya ikatan bank), tampak samping
  mapCanvas(scene, 'uang_tumpuk', 22, 18, (ctx, px) => {
    for (let i = 0; i < 5; i++) { const y = 15 - i * 3; px(0, y - 1, '#1a1c2c', 22, 4); px(1, y, '#e43b44', 20, 2); px(1, y, '#ff8a8a', 20, 1); px(2, y + 1, '#f4f4f4', 18, 1); }
    px(9, 2, '#1a1c2c', 4, 16); px(10, 3, '#ffcd75', 2, 14);   // pita kertas
  });
  mapCanvas(scene, 'sabun', 10, 6, (ctx, px) => { px(0, 1, '#c9a46a', 10, 5); px(1, 0, '#f4e4c1', 8, 5); px(2, 1, '#ffffff', 3, 1); px(7, 0, '#9fd4ff', 2, 1); });
  mapCanvas(scene, 'tempayan', 14, 16, (ctx, px) => { px(1, 15, 'rgba(0,0,0,0.3)', 13, 1); pxEllipse(px, 7, 9, 6, 6, '#a0603c'); pxEllipse(px, 7, 9, 4, 5, '#c97a4a'); px(4, 1, '#8b4a2b', 7, 3); px(5, 2, '#41a6f6', 5, 1); px(3, 9, '#8b4a2b', 9, 1); });
  mapCanvas(scene, 'rumah_batu', 44, 34, (ctx, px) => {
    px(1, 33, 'rgba(0,0,0,0.3)', 43, 1); px(2, 14, '#8a8f99', 40, 19);
    const r = mapRand(21); for (let y = 15; y < 32; y += 4) for (let x = 3 + ((y / 4) % 2) * 3; x < 41; x += 7) px(x, y, r() > 0.5 ? '#c2c3c7' : '#a8a8a8', 6, 3);
    for (let y = 0; y < 14; y++) px(21 - y - 1 - 1, y, '#5d3a1a', (y + 1) * 2 + 3, 1);
    px(18, 22, '#5d3a1a', 8, 11); px(7, 18, '#41a6f6', 6, 5); px(31, 18, '#41a6f6', 6, 5);
  });
  mapCanvas(scene, 'anyaman', 14, 8, (ctx, px) => { px(0, 0, '#a0703c', 14, 8); for (let y = 0; y < 8; y += 2) for (let x = (y / 2) % 2 * 2; x < 14; x += 4) px(x, y, '#e4d3a8', 2, 2); });

  // ---------- benda dekat (tampak samping): internet & nasi ----------
  mapCanvas(scene, 'paket', 20, 16, (ctx, px) => {                                   // tumpukan paket
    [[0, 8, 11, 8], [10, 9, 10, 7], [3, 1, 12, 7]].forEach(([x, y, w, h]) => { px(x, y, '#5d3a1a', w, h); px(x + 1, y + 1, '#c9a46a', w - 2, h - 2); px(x + Math.floor(w / 2) - 1, y + 1, '#e4d3a8', 2, h - 2); px(x + 2, y + 3, '#f4f4f4', 3, 2); });
  });
  ['ok', 'fail'].forEach(st => mapCanvas(scene, `qr_${st}`, 12, 16, (ctx, px) => {   // papan QR kasir
    px(0, 0, '#1a1c2c', 12, 14); px(1, 1, '#f4f4f4', 10, 12); px(4, 14, '#1a1c2c', 4, 2);
    const r = mapRand(7); for (let y = 2; y < 11; y++) for (let x = 2; x < 10; x++) if (r() > 0.5) px(x, y, '#1a1c2c');
    [[2, 2], [7, 2], [2, 7]].forEach(([x, y]) => { px(x, y, '#1a1c2c', 3, 3); px(x + 1, y + 1, '#f4f4f4'); });
    if (st === 'fail') for (let i = 0; i < 10; i++) { px(1 + i, 2 + i, '#e43b44', 2, 1); px(10 - i, 2 + i, '#e43b44', 2, 1); }
  }));
  mapCanvas(scene, 'radio', 16, 11, (ctx, px) => {
    px(10, 0, '#1a1c2c', 1, 3); px(0, 3, '#5d3a1a', 16, 8); px(1, 4, '#8b5a2b', 14, 6);
    pxEllipse(px, 5, 7, 2, 2, '#1a1c2c'); px(9, 5, '#ffcd75', 5, 2); px(9, 8, '#c2c3c7', 2, 1); px(12, 8, '#c2c3c7', 2, 1);
  });
  ['on', 'off'].forEach(st => mapCanvas(scene, `ringlight_${st}`, 14, 30, (ctx, px) => {  // lampu siaran langsung
    const c = st === 'on' ? '#fff6c2' : '#565c6e';
    for (let a = 0; a < 40; a++) { const t = (a / 40) * Math.PI * 2; px(Math.round(7 + 6 * Math.cos(t)), Math.round(7 + 6 * Math.sin(t)), c, 1, 1); }
    px(5, 5, '#1a1c2c', 4, 6); px(6, 6, st === 'on' ? '#41a6f6' : '#333c57', 2, 4);
    px(6, 14, '#1a1c2c', 2, 14); px(2, 28, '#1a1c2c', 10, 2);
  }));
  mapCanvas(scene, 'karung_beras', 12, 14, (ctx, px) => {
    px(1, 13, 'rgba(0,0,0,0.3)', 11, 1); px(1, 2, '#c9c3a8', 10, 11); px(2, 3, '#f4f4f4', 8, 9); px(3, 0, '#c9c3a8', 6, 3); px(4, 6, '#38b764', 4, 3);
  });
  mapCanvas(scene, 'karung_gandum', 12, 14, (ctx, px) => {
    px(1, 13, 'rgba(0,0,0,0.3)', 11, 1); px(1, 2, '#a8865a', 10, 11); px(2, 3, '#d9b77a', 8, 9); px(3, 0, '#a8865a', 6, 3); px(4, 5, '#3b5dc9', 4, 4); px(5, 6, '#f4f4f4', 2, 2);
  });
  mapCanvas(scene, 'etalase', 40, 20, (ctx, px) => {                                 // etalase warteg
    px(0, 19, 'rgba(0,0,0,0.3)', 40, 1); px(0, 10, '#5d3a1a', 40, 10); px(1, 11, '#8b5a2b', 38, 8);
    px(0, 0, '#c2c3c7', 40, 10); px(1, 1, '#d8f1ff', 38, 8);
    [[3, '#f4f4f4'], [12, '#38b764'], [21, '#e43b44'], [30, '#ffcd75']].forEach(([x, c]) => { px(x, 5, '#a8a8a8', 7, 3); px(x + 1, 4, c, 5, 2); });
  });
  mapCanvas(scene, 'etalase_kosong', 40, 20, (ctx, px) => {
    px(0, 19, 'rgba(0,0,0,0.3)', 40, 1); px(0, 10, '#5d3a1a', 40, 10); px(1, 11, '#8b5a2b', 38, 8);
    px(0, 0, '#c2c3c7', 40, 10); px(1, 1, '#d8f1ff', 38, 8);
    [[3, '#a8a8a8'], [12, '#38b764'], [21, '#e43b44'], [30, '#c9c94a']].forEach(([x, c]) => { px(x, 5, '#a8a8a8', 7, 3); if (x > 3) px(x + 1, 4, c, 5, 2); });
  });
  mapCanvas(scene, 'kapal_top', 30, 10, (ctx, px) => {                               // kapal kargo tampak atas
    px(2, 9, 'rgba(0,0,0,0.2)', 27, 1); px(0, 3, '#e43b44', 2, 4); px(2, 1, '#1a1c2c', 26, 8); px(28, 3, '#1a1c2c', 2, 4); px(3, 2, '#b13e53', 24, 6);
    [[5, '#ffcd75'], [10, '#41a6f6'], [15, '#38b764'], [20, '#ffcd75']].forEach(([x, c]) => px(x, 3, c, 4, 4)); px(24, 3, '#f4f4f4', 3, 4);
  });
}

// ---------- alat kerja: cangkul (dibuat dari frame tokoh mana pun) ----------
function makeToolFrames(scene, sprite, kind = 'hoe') {
  if (kind === 'cangkul') return makeMapHoe(scene, sprite);
  const key0 = `${sprite}_hoe_0`;
  if (scene.textures.exists(key0) || !scene.textures.exists(`${sprite}_0`)) return;
  const src = scene.textures.get(`${sprite}_0`).getSourceImage();
  const w = src.width + 8, h = src.height + 2, ox = 4, oy = 2;
  const frames = [
    // 0: cangkul diangkat
    (px) => { for (let i = 0; i < 8; i++) px(ox + 9 + Math.round(i * 0.5), oy + 8 - i, '#8b5a2b'); px(ox + 12, oy - 2, '#1a1c2c', 4, 3); px(ox + 13, oy - 1, '#c2c3c7', 3, 1); },
    // 1: cangkul menghantam tanah (badan sedikit membungkuk)
    (px) => { for (let i = 0; i < 7; i++) px(ox + 9 + i, oy + 8 + Math.round(i * 0.7), '#8b5a2b'); px(ox + 15, oy + 11, '#1a1c2c', 3, 4); px(ox + 16, oy + 12, '#c2c3c7', 1, 2); },
  ];
  frames.forEach((draw, i) => {
    const tex = scene.textures.createCanvas(`${sprite}_hoe_${i}`, w, h);
    const ctx = tex.getContext();
    ctx.drawImage(src, ox + (i ? 1 : 0), oy);
    draw((x, y, c, ww = 1, hh = 1) => { ctx.fillStyle = c; ctx.fillRect(x, y, ww, hh); });
    tex.refresh();
  });
}

// versi peta (kecil): cangkul cokelat tanpa mata logam mengilap, agar tidak tampak seperti ember di kepala
function makeMapHoe(scene, sprite) {
  if (scene.textures.exists(`${sprite}_cangkul_0`) || !scene.textures.exists(`${sprite}_0`)) return;
  const src = scene.textures.get(`${sprite}_0`).getSourceImage();
  const w = src.width + 8, h = src.height + 2, ox = 4, oy = 2;
  const frames = [
    (px) => { for (let i = 0; i < 6; i++) px(ox + 10 + i, oy + 9 - Math.round(i * 0.6), '#8b5a2b'); px(ox + 16, oy + 4, '#3a2a1a', 2, 2); },            // diangkat ke samping
    (px) => { for (let i = 0; i < 6; i++) px(ox + 10 + i, oy + 9 + Math.round(i * 0.6), '#8b5a2b'); px(ox + 16, oy + 13, '#3a2a1a', 2, 2); },           // menghantam tanah
  ];
  frames.forEach((draw, i) => {
    const tex = scene.textures.createCanvas(`${sprite}_cangkul_${i}`, w, h);
    const ctx = tex.getContext();
    ctx.drawImage(src, ox + (i ? 1 : 0), oy + (i ? 1 : 0));
    draw((x, y, c, ww = 1, hh = 1) => { ctx.fillStyle = c; ctx.fillRect(x, y, ww, hh); });
    tex.refresh();
  });
}
