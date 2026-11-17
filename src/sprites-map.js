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

  mapCanvas(scene, 'karung_pupuk', 10, 12, (ctx, px) => {
    px(1, 11, 'rgba(0,0,0,0.3)', 9, 1); px(2, 0, '#1a1c2c', 6, 1); px(1, 1, '#1a1c2c', 8, 11); px(2, 1, '#f4f4f4', 6, 10); px(2, 1, '#c2c3c7', 6, 1);
    px(3, 4, '#38b764', 4, 3); px(4, 5, '#f4f4f4', 2, 1);
  });

  // ---------- sawah tampak samping (petak & padi) ----------
  mapCanvas(scene, 'petak_air', 48, 6, (ctx, px) => { px(0, 0, '#6b4a2b', 48, 6); px(1, 1, '#3b7fd0', 46, 4); for (let x = 2; x < 46; x += 7) px(x, 2, '#9fd4ff', 3, 1); for (let x = 5; x < 46; x += 9) px(x, 3, '#5d3a1a', 3, 1); });
  mapCanvas(scene, 'petak_retak', 48, 6, (ctx, px) => { px(0, 0, '#6b4a2b', 48, 6); px(1, 1, '#a0703c', 46, 4); const r = mapRand(5); for (let x = 2; x < 46; x += 3) px(x, 1 + Math.floor(r() * 4), '#5d3a1a', 1 + Math.floor(r() * 2), 1); });
  mapCanvas(scene, 'padi_kering', 18, 10, (ctx, px) => { for (let x = 1; x < 18; x += 3) { px(x, 6 + (x % 2), '#8b5a2b', 1, 3 - (x % 2)); px(x, 5 + (x % 2), '#c9a85a', 1, 1); } px(0, 8, '#a0703c', 18, 1); px(0, 9, '#5d3a1a', 18, 1); px(4, 8, '#5d3a1a', 2, 1); px(12, 8, '#5d3a1a', 3, 1); });
  mapCanvas(scene, 'padi_muda', 18, 10, (ctx, px) => { for (let x = 1; x < 18; x += 3) { px(x, 5, '#5ccf7a', 1, 3); px(x - 1, 5, '#38b764', 1, 1); px(x + 1, 6, '#38b764', 1, 1); } px(0, 8, '#41a6f6', 18, 1); px(0, 9, '#5d3a1a', 18, 1); });
}

// ---------- alat kerja: cangkul (dibuat dari frame tokoh mana pun) ----------
function makeToolFrames(scene, sprite) {
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
