// ============================================================
//  SPRITES "DUNIA TANPA ATURAN" — digambar ulang sebagai kode piksel
//  dari acuan Nano Banana (assets/tanpa-aturan/latar/bg_perempatan_*.png).
//  Tiap benda prop terpisah -> bisa digerakkan/disorot.
// ============================================================

const TA = {
  ink: '#2b2a3a', ink2: '#4a4660',
  beige: '#e8c98a', beige2: '#cfa96a', beige3: '#b38a52', cream: '#f6e2b0',
  win: '#ffd98a', win2: '#e8b860', winDark: '#3a3550', winBlue: '#9fc8e8',
  steel: '#9aa3b0', steel2: '#6d7686', steelHi: '#c9d0da',
  red: '#e43b44', redDim: '#7a2a32', yel: '#ffcd45', yelDim: '#7a6230', grn: '#3ec46d', grnDim: '#2a5a3a',
  glass: '#9ad0f0', glass2: '#6fb0dc', tire: '#23222e', hub: '#9aa3b0',
};

function buildAturanTextures(scene) {
  const mk = (k, w, h, f) => mapCanvas(scene, k, w, h, f);

  // ---------- gedung (tampak samping) ----------
  const gedung = (key, w, h, rusak) => mk(key, w, h, (c, p) => {
    p(0, 2, TA.ink, w, h - 2);                                   // garis tepi
    p(1, 3, rusak ? TA.beige2 : TA.beige, w - 2, h - 3);
    p(1, 3, rusak ? TA.beige3 : TA.beige2, 2, h - 3);            // sisi bayangan kiri
    p(0, 0, TA.ink, w, 3); p(1, 1, rusak ? TA.beige2 : TA.cream, w - 2, 1);   // atap/lis
    const cols = Math.floor((w - 6) / 6), rows = Math.floor((h - 12) / 7);
    const x0 = Math.floor((w - cols * 6) / 2) + 1;
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const x = x0 + k * 6, y = 7 + r * 7;
      const pecah = rusak && ((r * 7 + k * 3) % 5 === 0);
      p(x, y, TA.ink2, 4, 4);
      p(x, y, pecah ? TA.winDark : TA.win, 3, 3);
      if (!pecah) p(x, y + 2, TA.win2, 3, 1);
      else { p(x + 1, y + 1, TA.ink, 1, 2); p(x + 2, y, TA.steel2, 1, 1); }
    }
    p(1, h - 1, TA.ink, w - 2, 1);
    if (rusak) {                                                  // retak zig-zag + sudut gompal
      let x = Math.floor(w * 0.3);
      for (let y = 8; y < h * 0.6; y++) { x += (y % 4 < 2 ? 1 : -1); p(x, y, TA.ink, 1, 1); }
      let x2 = Math.floor(w * 0.75);
      for (let y = Math.floor(h * 0.45); y < h * 0.8; y++) { x2 += (y % 3 === 0 ? -1 : 0); p(x2, y, TA.ink, 1, 1); }
      c.clearRect(w - 4, 0, 4, 3); p(w - 5, 1, TA.ink, 1, 3); p(w - 4, 3, TA.ink, 4, 1);
    }
  });
  gedung('ta_gedung_a', 34, 52, false); gedung('ta_gedung_b', 38, 64, false);
  gedung('ta_gedung_a_rusak', 34, 52, true); gedung('ta_gedung_b_rusak', 38, 64, true);

  // ---------- kepala lampu lalu lintas ----------
  const kepala = (p, x, y, nyala, mati) => {
    p(x, y, TA.ink, 6, 14); p(x + 1, y + 1, '#3d3b4e', 4, 12);
    const lamp = (yy, on, off, lit) => { p(x + 1, y + yy, lit ? on : off, 4, 3); if (lit) p(x + 2, y + yy, '#ffffff', 1, 1); };
    lamp(1, TA.red, TA.redDim, !mati && nyala === 'r');
    lamp(5, TA.yel, TA.yelDim, !mati && nyala === 'y');
    lamp(9, TA.grn, TA.grnDim, !mati && nyala === 'g');
  };

  // lampu lalu lintas normal: tiang tegak + lengan ke kanan + 2 kepala
  const lampu = (key, flip) => mk(key, 30, 48, (c, p) => {
    const P = (x, y, col, w = 1, h = 1) => p(flip ? 30 - x - w : x, y, col, w, h);
    P(3, 6, TA.ink, 4, 42); P(4, 6, TA.steel, 2, 42); P(4, 6, TA.steelHi, 1, 42);   // tiang
    P(2, 46, TA.ink, 6, 2);                                                         // kaki
    P(3, 5, TA.ink, 24, 3); P(4, 6, TA.steel, 22, 1);                               // lengan
    // kepala atas (menggantung di ujung lengan) & kepala tiang
    const k1 = flip ? 30 - 22 - 6 : 22, k2 = flip ? 30 - 7 - 6 : 7;
    kepala(p, k1, 8, 'r'); kepala(p, k2, 20, 'r');
  });
  lampu('ta_lampu', false); lampu('ta_lampu_l', true);

  // lampu bengkok: tiang miring, lengan melengkung ke bawah, kepala terbalik, kabel menjuntai
  const bengkok = (key, flip) => mk(key, 32, 48, (c, p) => {
    const P = (x, y, col, w = 1, h = 1) => p(flip ? 32 - x - w : x, y, col, w, h);
    for (let y = 8; y < 46; y++) { const dx = Math.round((46 - y) * 0.18); P(4 + dx, y, TA.ink, 4, 1); P(5 + dx, y, TA.steel2, 2, 1); }
    P(2, 46, TA.ink, 8, 2);
    for (let i = 0; i < 18; i++) { const x = 11 + i, y = 6 + Math.round(i * i * 0.035); P(x, y, TA.ink, 1, 3); P(x, y + 1, TA.steel2, 1, 1); }  // lengan melengkung
    P(10, 6, TA.ink, 3, 3);
    const kx = flip ? 32 - 26 - 6 : 26;
    kepala(p, kx, 18, 'r', true);                                                   // kepala mati, miring ke bawah
    P(9, 26, TA.ink, 6, 12); P(10, 27, '#3d3b4e', 4, 10); P(10, 28, TA.redDim, 4, 2); P(10, 32, TA.yel, 4, 2);   // kepala tiang: kuning kedip
    for (let y = 22; y < 34; y++) P(28 + (y % 3 === 0 ? 1 : 0), y, '#1a1c2c', 1, 1); // kabel menjuntai
    P(28, 34, TA.yel, 1, 1);                                                        // percikan
  });
  bengkok('ta_lampu_bengkok', false); bengkok('ta_lampu_bengkok_l', true);

  // ---------- kendaraan (tampak samping, menghadap kanan; proporsi sesuai tokoh 26 px) ----------
  const mobil = (key, body, dark) => mk(key, 44, 21, (c, p) => {
    p(11, 1, TA.ink, 20, 9); p(12, 2, body, 18, 8);                         // kabin
    p(13, 3, TA.glass, 7, 6); p(22, 3, TA.glass, 7, 6); p(13, 3, TA.glass2, 1, 6); p(21, 2, body, 1, 8);
    p(14, 3, '#d6ecfa', 2, 1); p(23, 3, '#d6ecfa', 2, 1);                   // kilau kaca
    p(1, 9, TA.ink, 42, 9); p(2, 10, body, 40, 7); p(2, 15, dark, 40, 2);  // badan
    p(2, 10, '#ffffff33', 40, 1);
    p(40, 11, TA.yel, 2, 2); p(2, 11, TA.red, 1, 2);                        // lampu
    p(24, 12, dark, 4, 1); p(14, 12, dark, 4, 1);                           // pegangan pintu
    p(21, 10, dark, 1, 6);                                                  // garis pintu
    for (const wx of [7, 31]) { p(wx - 1, 15, TA.ink, 9, 6); p(wx, 15, TA.tire, 7, 6); p(wx + 2, 17, TA.hub, 3, 2); p(wx + 3, 18, TA.steel2, 1, 1); }
  });
  mobil('ta_mobil_merah', '#d9434b', '#9c2a33'); mobil('ta_mobil_biru', '#3e86d6', '#245a9c');
  mobil('ta_mobil_hijau', '#46b06a', '#2a7445'); mobil('ta_mobil_ungu', '#8a5cc2', '#5c3a88'); mobil('ta_mobil_abu', '#a9b0bb', '#6d7686');

  mk('ta_ambulans', 56, 27, (c, p) => {
    p(1, 2, TA.ink, 40, 20); p(2, 3, '#f4f4f4', 38, 18); p(2, 3, '#e0e4ea', 38, 1);
    p(2, 14, TA.red, 38, 3); p(18, 5, TA.red, 4, 10); p(15, 8, TA.red, 10, 4);    // palang merah
    p(40, 7, TA.ink, 15, 15); p(41, 8, '#f4f4f4', 13, 13); p(43, 9, TA.glass, 8, 5); p(41, 14, TA.red, 13, 3);
    p(20, 0, TA.ink, 7, 3); p(21, 0, '#41a6f6', 5, 2);                            // sirene
    p(53, 16, TA.yel, 2, 2);
    for (const wx of [7, 40]) { p(wx - 1, 19, TA.ink, 10, 8); p(wx, 19, TA.tire, 8, 8); p(wx + 3, 22, TA.hub, 2, 2); }
  });

  // motor + pengendara berhelm
  const motor = (key, jaket, helm) => mk(key, 30, 28, (c, p) => {
    p(9, 2, TA.ink, 8, 7); p(10, 3, helm, 6, 5); p(15, 5, TA.glass2, 2, 2);     // helm
    p(11, 9, TA.ink, 6, 9); p(12, 10, jaket, 4, 8); p(16, 11, jaket, 4, 2); p(19, 11, '#f4c29a', 2, 2);   // badan & lengan
    p(11, 17, '#3a3d48', 7, 3); p(16, 19, '#3a3d48', 3, 4);                      // kaki
    p(4, 17, TA.ink, 20, 6); p(5, 18, '#d9434b', 18, 4); p(20, 14, TA.ink, 2, 5); p(22, 14, TA.ink, 3, 1);   // bodi & setang
    p(24, 18, TA.yel, 2, 2);
    for (const wx of [3, 20]) { p(wx, 21, TA.ink, 7, 7); p(wx + 1, 22, TA.tire, 5, 5); p(wx + 3, 24, TA.hub, 1, 1); }
  });
  motor('ta_motor_a', '#3e86d6', '#f4f4f4'); motor('ta_motor_b', '#46b06a', '#46b06a'); motor('ta_motor_c', '#e8b23a', '#d9434b');

  // ---------- zebra cross & sampah ----------
  mk('ta_zebra', 40, 7, (c, p) => { for (let x = 0; x < 40; x += 4) p(x, 0, '#f4f4f4', 2, 7); });
  mk('ta_sampah', 14, 5, (c, p) => {
    const r = mapRand(7); for (let i = 0; i < 9; i++) p(Math.floor(r() * 12), 1 + Math.floor(r() * 4), ['#8a7f6a', '#c2c3c7', '#5d6b7d', '#b13e53', '#f4f4f4'][i % 5], 2, 1);
  });
  mk('ta_retak_jalan', 24, 4, (c, p) => { let y = 1; for (let x = 0; x < 24; x++) { y += (x % 5 === 0 ? 1 : x % 7 === 0 ? -1 : 0); y = Math.max(0, Math.min(3, y)); p(x, y, '#1a1c2c', 1, 1); } });
}
