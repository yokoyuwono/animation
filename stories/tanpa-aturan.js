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
  .forEach(n => [0, 1, 2].forEach(i => { IMG[`${n}_${i}`] = `${A}grid/${n}_${i}.png`; }));
// anak pekerja: frame 0 tanpa karung -> pakai frame 1 agar karung tidak berkedip
Object.assign(IMG, { anak_kerja_0: `${A}grid/anak_kerja_1.png`, anak_kerja_1: `${A}grid/anak_kerja_1.png`, anak_kerja_2: `${A}grid/anak_kerja_2.png` });
['raka_kaget', 'raka_lari', 'raka_pincang', 'raka_sembunyi', 'raka_foto'].forEach(n => { IMG[`${n}_0`] = `${A}grid/${n}_0.png`; });
['raka_heran', 'raka_kaget', 'raka_takut', 'raka_lega', 'ibu_waspada', 'ibu_haru', 'sinta_kesal', 'preman'].forEach(n => { IMG[`face_${n}`] = `${A}grid/face_${n}_0.png`; });
['jalan_malam', 'perempatan_normal', 'perempatan_kacau', 'tugu', 'kelas_normal', 'kelas_kosong', 'pasar_normal', 'pasar_kacau',
 'rusun_miring', 'rs_normal', 'rs_lelang', 'jalan_preman', 'gang', 'rumah_ibu', 'pos_ronda', 'pagi_rambu'].forEach(n => { IMG[`bg_${n}`] = `${A}grid/bg_${n}.png`; });

const SK = 1;        // aset sudah disamakan ke grid piksel mesin (tokoh tinggi 26 px)
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
      id: 'uji-gaya', title: 'Uji gaya: perempatan',
      scenes: [
        // 2 — perempatan: normal vs tanpa aturan
        {
          sky: 'image', split: true, focus: 'right', captionTop: true,
          bgImage: 'bg_perempatan_normal', bgImageB: 'bg_perempatan_kacau',
          tags: ['DUNIA NORMAL', 'TANPA ATURAN'], tagColors: ['#38b764', '#b13e53'], clock: 'HARI 1',
          camera: { x: 96, y: 56, zoom: 1 }, cameraB: { x: 192 + 96, y: 56, zoom: 1 },
          actors: [tokoh('rakaA', 'raka', 56, 99), tokoh('rakaB', 'raka', 192 + 120, 104)],
          steps: [
            { together: [{ move: 'rakaB', to: 192 + 160, speed: 16 }, C('Raka terbangun di jalan yang sama.', [{ at: 'terbangun', kw: 'JALAN *YANG SAMA*' }])] },
            { together: [{ swap: 'rakaB', to: 'raka_kaget_0', dur: 50 }, { emote: 'rakaB', icon: 'exclaim' },
              C('Tapi lampu merahnya bengkok, mobil saling serobot.', [{ at: 'bengkok', kw: 'LAMPU MERAH *BENGKOK*' }, { at: 'serobot', shake: 300 }])] },
            { dialog: 'rakaB', face: 'face_raka_kaget', name: 'Raka', text: 'Kok nggak ada yang ditilang?', dur: 900 },
            { focus: 'both' },
            C('Di dunia asalnya, orang masih menunggu lampu hijau.', [{ at: 'menunggu', kw: 'MENUNGGU *LAMPU HIJAU*' }, { at: 'menunggu', emote: 'rakaA', icon: 'note' }]),
          ],
        },
      ],
    },
  ],
};
