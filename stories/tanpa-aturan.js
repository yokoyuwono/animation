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
  .forEach(n => [0, 1, 2].forEach(i => { IMG[`${n}_${i}`] = `${A}potong/${n}_${i}.png`; }));
// anak pekerja: frame 0 tanpa karung -> pakai frame 1 agar karung tidak berkedip
Object.assign(IMG, { anak_kerja_0: `${A}potong/anak_kerja_1.png`, anak_kerja_1: `${A}potong/anak_kerja_1.png`, anak_kerja_2: `${A}potong/anak_kerja_2.png` });
['raka_kaget', 'raka_lari', 'raka_pincang', 'raka_sembunyi', 'raka_foto'].forEach(n => { IMG[`${n}_0`] = `${A}potong/${n}_0.png`; });
['raka_heran', 'raka_kaget', 'raka_takut', 'raka_lega', 'ibu_waspada', 'ibu_haru', 'sinta_kesal', 'preman'].forEach(n => { IMG[`face_${n}`] = `${A}potong/face_${n}_0.png`; });
['jalan_malam', 'perempatan_normal', 'perempatan_kacau', 'tugu', 'kelas_normal', 'kelas_kosong', 'pasar_normal', 'pasar_kacau',
 'rusun_miring', 'rs_normal', 'rs_lelang', 'jalan_preman', 'gang', 'rumah_ibu', 'pos_ronda', 'pagi_rambu'].forEach(n => { IMG[`bg_${n}`] = `${A}latar/bg_${n}.png`; });

const SK = 0.2;      // skala tokoh (gambar ±135 px -> ±135 px di layar 960x540)
const tokoh = (id, sprite, x, y = 100, extra = {}) => ({ id, sprite, x, y, scale: SK, ...extra });
const C = (caption, cues = [], extra = {}) => ({ caption, cues, ...extra });

const STORY = {
  title: 'Andaikan Kamu Terlempar ke Dunia Tanpa Aturan',
  captionStyle: 'keyword',
  sfx: true,
  alive: true,
  images: IMG,
  chapters: [
    {
      id: 'uji-gaya', title: 'Uji gaya Nano Banana',
      scenes: [
        // 1 — malam, kena tilang, jatuh ke lubang
        {
          sky: 'image', bgImage: 'bg_jalan_malam', clock: 'MALAM INI',
          camera: { x: 70, y: 60, zoom: VERT ? 1.4 : 1.15 },
          actors: [tokoh('raka', 'raka', 14, 99, { name: 'Raka' })],
          steps: [
            { together: [{ move: 'raka', to: 52, speed: 22 },
              C('Malam itu, Raka baru saja kena tilang.', [{ at: 'tilang', kw: 'KENA *TILANG*' }])] },
            { dialog: 'raka', face: 'face_raka_heran', name: 'Raka', text: 'Aturan cuma bikin susah!', dur: 900 },
            { together: [{ move: 'raka', to: 92, speed: 26 }, { camera: { x: 92, y: 70, zoom: VERT ? 2 : 1.7 }, dur: 1800 },
              C('Ia tidak melihat lubang galian tanpa rambu.', [{ at: 'lubang', kw: 'LUBANG *TANPA RAMBU*' }])] },
            { together: [{ shake: 450 }, { hide: 'raka' }, { sfx: 'scratch' }] },
            { wait: 500 },
          ],
        },
        // 2 — perempatan: normal vs tanpa aturan
        {
          transition: 'clouds', sky: 'image', split: true, focus: 'right',
          bgImage: 'bg_perempatan_normal', bgImageB: 'bg_perempatan_kacau',
          tags: ['DUNIA NORMAL', 'TANPA ATURAN'], tagColors: ['#38b764', '#b13e53'], clock: 'HARI 1',
          camera: { x: 96, y: 56, zoom: 1 }, cameraB: { x: 192 + 96, y: 56, zoom: 1 },
          actors: [tokoh('rakaA', 'raka', 62, 103), tokoh('rakaB', 'raka', 192 + 70, 103)],
          steps: [
            C('Raka terbangun di jalan yang sama.', [{ at: 'terbangun', kw: 'JALAN *YANG SAMA*' }]),
            { together: [{ swap: 'rakaB', to: 'raka_kaget_0', dur: 50 }, { emote: 'rakaB', icon: 'exclaim' },
              C('Tapi lampu merahnya bengkok, mobil saling serobot.', [{ at: 'bengkok', kw: 'LAMPU MERAH *BENGKOK*' }, { at: 'serobot', shake: 300 }])] },
            { dialog: 'rakaB', face: 'face_raka_kaget', name: 'Raka', text: 'Kok nggak ada yang ditilang?', dur: 900 },
            { focus: 'both' },
            C('Di dunia asalnya, orang masih menunggu lampu hijau.', [{ at: 'menunggu', kw: 'MENUNGGU *LAMPU HIJAU*' }, { at: 'menunggu', emote: 'rakaA', icon: 'note' }]),
          ],
        },
        // 3 — sekolah kosong, anak bekerja
        {
          transition: 'zoom', sky: 'image', bgImage: 'bg_kelas_kosong', clock: 'HARI 1 · SIANG',
          camera: { x: 96, y: 56, zoom: 1 },
          actors: [tokoh('raka', 'raka', 30, 103), tokoh('anak', 'anak_kerja', 210, 103, { face: 'left' })],
          steps: [
            C('Raka mampir ke SD-nya dulu. Kelasnya kosong.', [{ at: 'kosong', kw: 'KELAS *KOSONG*' }, { at: 'kosong', emote: 'raka', icon: 'question' }]),
            { together: [{ move: 'anak', to: 120, speed: 24 }, C('Seorang anak lewat, memanggul karung.', [{ at: 'karung', kw: 'ANAK *BEKERJA*' }])] },
            { say: 'anak', text: 'Ngapain sekolah? Nggak ada yang wajibin.' },
            { together: [{ move: 'anak', to: 230, speed: 26 }, { emote: 'raka', icon: 'sweat' },
              C('Raka terdiam.', [{ at: 'terdiam', kw: 'RAKA *TERDIAM*' }], { punch: true })] },
          ],
        },
        // 4 — rumah sakit lelang
        {
          transition: 'zoom', sky: 'image', bgImage: 'bg_rs_lelang', clock: 'HARI 2',
          camera: { x: 96, y: 56, zoom: 1 },
          actors: [tokoh('lelang', 'lelang', 74, 100, { name: 'Petugas' }), tokoh('kakek', 'kakek', 150, 104, { face: 'left' }),
            tokoh('raka', 'raka', 24, 104)],
          steps: [
            C('Di rumah sakit, tidak ada antrean. Yang ada lelang.', [{ at: 'lelang', kw: 'RS *LELANG*' }, { at: 'lelang', jump: 'lelang', times: 1, height: 4 }]),
            { dialog: 'lelang', name: 'Petugas', text: 'Yang bayar paling tinggi, dirawat duluan!', dur: 900 },
            { together: [{ emote: 'kakek', icon: 'sweat' }, C('Kakek yang datang lebih dulu, terus tergeser.', [{ at: 'tergeser', kw: 'YANG MISKIN *TERGESER*' }])] },
            { together: [{ swap: 'raka', to: 'raka_kaget_0', dur: 50 }, { dialog: 'raka', face: 'face_raka_kaget', name: 'Raka', text: 'Bukannya yang darurat duluan?', dur: 900 }] },
          ],
        },
        // 5 — gang: dikejar warga, diselamatkan Ibu
        {
          transition: 'zoom', sky: 'image', bgImage: 'bg_gang', clock: 'HARI 3',
          camera: { x: 96, y: 56, zoom: 1 },
          actors: [tokoh('raka', 'raka', -20, 106), tokoh('w1', 'warga_a', -50, 106), tokoh('w2', 'preman_b', -70, 106), tokoh('w3', 'warga_d', -90, 106),
            tokoh('ibu', 'ibu_paralel', 168, 104, { face: 'left', name: 'Ibu' })],
          steps: [
            { together: [{ move: 'raka', to: 120, speed: 60 }, { move: 'w1', to: 60, speed: 50 }, { move: 'w2', to: 40, speed: 48 }, { move: 'w3', to: 22, speed: 46 },
              C('Raka dituduh maling. Warga mengejarnya.', [{ at: 'maling', kw: 'DITUDUH *MALING*' }, { at: 'mengejarnya', shake: 300 }])] },
            { together: [{ emote: 'ibu', icon: 'exclaim' }, { move: 'raka', to: 160, speed: 50 }] },
            { together: [{ hide: 'raka' }, { hide: 'ibu' }, { emote: 'w1', icon: 'question' }] },
            { dialog: 'w1', name: 'Warga', face: 'face_preman', text: 'Ke mana dia?!', dur: 600 },
            { dialog: 'ibu', face: 'face_ibu_waspada', name: 'Ibu', text: 'Sst! Diam di sini.', dur: 800 },
            { dialog: 'raka', face: 'face_raka_kaget', name: 'Raka', text: 'Ibu...?', dur: 900 },
            { title: 'ANDAIKAN', sub: 'Kamu terlempar ke dunia tanpa aturan', dark: true, size: 30, dur: 2600 },
          ],
        },
      ],
    },
  ],
};
