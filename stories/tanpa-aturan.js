// ============================================================
//  "ANDAIKAN KAMU TERLEMPAR KE DUNIA TANPA ATURAN" — UJI GAYA (aset Nano Banana)
//  Sprite & latar: assets/tanpa-aturan/ (dipotong dengan tools/potong-sprite.py).
//  Belum ada VO: tempo perkiraan + teks [draf].
// ============================================================
const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const A = 'assets/tanpa-aturan/';
const IMG = {};
// tokoh (3 frame), pose tunggal, wajah, latar
['raka', 'ibu_normal', 'ibu_paralel', 'sinta', 'polisi', 'preman_bos', 'preman_a', 'preman_b', 'pedagang', 'anak_sekolah', 'kakek', 'lelang', 'warga_a', 'warga_b', 'warga_c', 'warga_d']
  .forEach(n => [0, 1, 2].forEach(i => { IMG[`${n}_${i}`] = `${A}hd/${n}_${i}.png`; }));
// anak pekerja: frame 0 tanpa karung -> pakai frame 1 agar karung tidak berkedip
Object.assign(IMG, { anak_kerja_0: `${A}hd/anak_kerja_1.png`, anak_kerja_1: `${A}hd/anak_kerja_1.png`, anak_kerja_2: `${A}hd/anak_kerja_2.png` });
['raka_kaget', 'raka_lari', 'raka_pincang', 'raka_sembunyi', 'raka_foto'].forEach(n => { IMG[`${n}_0`] = `${A}hd/${n}_0.png`; });
['raka_heran', 'raka_kaget', 'raka_takut', 'raka_lega', 'ibu_waspada', 'ibu_haru', 'sinta_kesal', 'preman'].forEach(n => { IMG[`face_${n}`] = `${A}hd/face_${n}_0.png`; });
['jalan_malam', 'perempatan_normal', 'perempatan_kacau', 'tugu', 'kelas_normal', 'kelas_kosong', 'pasar_normal', 'pasar_kacau',
 'rusun_miring', 'rs_normal', 'rs_lelang', 'jalan_preman', 'gang', 'rumah_ibu', 'pos_ronda', 'pagi_rambu'].forEach(n => { IMG[`bg_${n}`] = `${A}hd/bg_${n}.png`; });

// Grid 480x270: 1 piksel gambar = 0,4 unit dunia (192x108) = 2 px kanvas = 4 px di video 1080p.
const HD = 192 / 480;
const SK = HD;       // tokoh tinggi 65 px gambar
const tokoh = (id, sprite, x, y = 100, extra = {}) => ({ id, sprite, x, y, scale: SK, ...extra });
const C = (caption, cues = [], extra = {}) => ({ caption, cues, ...extra });

// ---------- perempatan sebagai kode (prop terpisah) ----------
const perempatanNormal = dx => [
  { sprite: 'ta_gedung_a', x: 22 + dx, y: 90, depth: 3 }, { sprite: 'ta_gedung_b', x: 172 + dx, y: 90, depth: 3 },
  { sprite: 'ta_lampu', x: 74 + dx, y: 93, depth: 6 }, { sprite: 'ta_lampu_l', x: 124 + dx, y: 93, depth: 6 },
  { sprite: 'ta_zebra', x: 99 + dx, y: 107, depth: 4 },
  { id: 'Amobil1', sprite: 'ta_mobil_merah', x: 40 + dx, y: 107, depth: 11 },
  { id: 'Amotor', sprite: 'ta_motor_a', x: 150 + dx, y: 104, depth: 10 },
];
const perempatanKacau = dx => [
  { sprite: 'ta_gedung_a_rusak', x: 22 + dx, y: 90, depth: 3 }, { sprite: 'ta_gedung_b_rusak', x: 172 + dx, y: 90, depth: 3 },
  { id: 'Blampu1', sprite: 'ta_lampu_bengkok', x: 72 + dx, y: 93, depth: 6 }, { sprite: 'ta_lampu_bengkok_l', x: 126 + dx, y: 93, depth: 6 },
  { sprite: 'ta_retak_jalan', x: 100 + dx, y: 99, depth: 4 },
  { sprite: 'ta_ambulans', x: 28 + dx, y: 103, depth: 9 },
  { sprite: 'ta_mobil_hijau', x: 118 + dx, y: 100, depth: 8 }, { sprite: 'ta_mobil_ungu', x: 160 + dx, y: 101, depth: 8, flip: true },
  { id: 'Bmobil1', sprite: 'ta_mobil_merah', x: 78 + dx, y: 105, depth: 10 },
  { sprite: 'ta_mobil_biru', x: 52 + dx, y: 109, depth: 12, flip: true },
  { sprite: 'ta_motor_b', x: 132 + dx, y: 108, depth: 12 }, { sprite: 'ta_motor_c', x: 100 + dx, y: 109, depth: 13, flip: true },
  { sprite: 'ta_sampah', x: 66 + dx, y: 94, depth: 5 }, { sprite: 'ta_sampah', x: 160 + dx, y: 107, depth: 13 },
];

// ---------- adegan dari KIT (sprite kode hasil rekonstruksi: src/sprites-kit-kota.js & src/sprites-kit-normal.js) ----------
const KS = HD;   // 1 piksel kit = 0,4 unit (grid 480x270); tokoh 37 px sepadan dengan penggaris kit
const KP = (sprite, x, y, extra = {}) => ({ sprite, x, y, scale: KS, ...extra });
const kotaNormal = dx => [
  KP('normal_ruko', 26 + dx, 92, { depth: 3 }), KP('normal_gedung_kantor', 168 + dx, 92, { depth: 3 }),
  KP('normal_pohon', 70 + dx, 93, { depth: 4 }), KP('normal_lampu_jalan', 124 + dx, 93, { depth: 4 }),
  KP('normal_lampu_merah', 98 + dx, 94, { depth: 5, id: 'Alampu' }), KP('normal_halte', 146 + dx, 94, { depth: 4 }),
  KP('normal_pot_bunga', 52 + dx, 94, { depth: 6 }), KP('normal_tong_sampah', 112 + dx, 94, { depth: 6 }),
  KP('normal_mobil_merah', 40 + dx, 104, { depth: 9, id: 'Amobil' }), KP('normal_motor', 20 + dx, 108, { depth: 11, id: 'Amotor' }),
];
const kotaKacau = dx => [
  KP('kota_gedung_retak_a', 26 + dx, 92, { depth: 3 }), KP('kota_gedung_retak_b', 168 + dx, 92, { depth: 3 }),
  KP('kota_pohon', 70 + dx, 93, { depth: 4 }), KP('kota_lampu_jalan', 124 + dx, 93, { depth: 4 }),
  KP('kota_lampu_bengkok_merah', 98 + dx, 94, { depth: 5, id: 'Blampu' }), KP('kota_sampah', 146 + dx, 96, { depth: 6 }),
  KP('kota_gerobak', 50 + dx, 95, { depth: 6 }),
  KP('kota_ambulans', 30 + dx, 104, { depth: 9 }), KP('kota_mobil_merah', 104 + dx, 103, { depth: 9, id: 'Bmobil' }),
  KP('kota_mobil_biru', 150 + dx, 106, { depth: 10, flip: true }), KP('kota_motor', 126 + dx, 108, { depth: 11, id: 'Bmotor', flip: true }),
  KP('kota_palang', 178 + dx, 108, { depth: 12 }), KP('kota_cone', 188 + dx, 108, { depth: 12 }),
];

const STORY = {
  title: 'Andaikan Kamu Terlempar ke Dunia Tanpa Aturan',
  captionStyle: 'keyword',
  sfx: true,
  alive: true,
  images: IMG,
  chapters: [
    {
      id: 'uji-gaya', title: 'Uji gaya: perempatan',
      scenes: [
        // dunia normal vs tanpa aturan — semua benda dari kit kode
        {
          sky: 'day', road: true, noHills: true, noSun: true, split: true, focus: 'right', captionTop: true,
          haze: [0, 0.2], tags: ['DUNIA NORMAL', 'TANPA ATURAN'], tagColors: ['#38b764', '#b13e53'], clock: 'HARI 1',
          camera: { x: 96, y: 54, zoom: 1 }, cameraB: { x: 192 + 96, y: 54, zoom: 1 },
          props: [...kotaNormal(0), ...kotaKacau(192)],
          actors: [tokoh('rakaA', 'raka', 104, 96, { depth: 20 }), tokoh('rakaB', 'raka', 192 + 60, 96, { depth: 20 })],
          steps: [
            { together: [{ move: 'rakaB', to: 192 + 84, speed: 10 }, C('Raka terbangun di jalan yang sama.', [{ at: 'terbangun', kw: 'JALAN *YANG SAMA*' }])] },
            { together: [{ swap: 'rakaB', to: 'raka_kaget_0', dur: 50 }, { emote: 'rakaB', icon: 'exclaim' }, { glow: 'Blampu', times: 3 },
              C('Lampu merahnya bengkok. Mobil menyerobot, motor melawan arah.', [{ at: 'bengkok', kw: 'LAMPU *BENGKOK*' },
                { at: 'menyerobot', move: 'Bmobil', to: 192 + 60, speed: 40 }, { at: 'melawan', move: 'Bmotor', to: 192 + 20, speed: 45 }, { at: 'melawan', shake: 250 }])] },
            { dialog: 'rakaB', face: 'face_raka_kaget', name: 'Raka', text: 'Kok nggak ada yang ditilang?', dur: 900 },
            { focus: 'left' },
            { together: [{ move: 'Amobil', to: 66, speed: 22 }, { move: 'Amotor', to: 38, speed: 22 }, { emote: 'rakaA', icon: 'note' },
              C('Di dunia asalnya, mobil berhenti saat lampu merah.', [{ at: 'berhenti', kw: 'BERHENTI *SAAT MERAH*' }])] },
            { focus: 'both' },
            C('Aturan kecil, tapi bedanya besar.', [{ at: 'bedanya', kw: 'BEDANYA *BESAR*' }], { punch: true }),
          ],
        },
      ],
    },
  ],
};
