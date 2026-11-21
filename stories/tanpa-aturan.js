// ============================================================
//  "ANDAIKAN KAMU TERLEMPAR KE DUNIA TANPA ATURAN" — UJI GAYA
//  Semua aset digambar sebagai kode: src/sprites-ta.js (grid 480x270, awalan ta2_).
//  Belum ada VO: tempo perkiraan + teks [draf].
// ============================================================
const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const HD = 192 / 480;                       // 1 piksel aset = 0,4 unit dunia
const A2 = (sprite, x, y, extra = {}) => ({ sprite: 'ta2_' + sprite, x, y, scale: HD, ...extra });
const orang = (id, sprite, x, y = 91, extra = {}) => ({ id, sprite: 'ta2_' + sprite, x, y, scale: HD, depth: 20, ...extra });
const C = (caption, cues = [], extra = {}) => ({ caption, cues, ...extra });

// perempatan: susunan sama, versi normal vs rusak
const perempatan = (dx, rusak) => {
  const r = s => s + (rusak ? '_rusak' : '');
  return [
    A2(r('jalan'), 96 + dx, 108, { depth: 2.5 }),
    A2(r('ruko'), 26 + dx, 89, { depth: 3 }), A2(r('kantor'), 170 + dx, 89, { depth: 3 }),
    A2(rusak ? 'pohon_layu' : 'pohon', 66 + dx, 90, { depth: 4 }),
    A2(r('lampu_jalan'), 124 + dx, 90, { depth: 4 }),
    A2(rusak ? 'lampu_bengkok' : 'lampu_merah', 92 + dx, 91, { depth: 5, id: rusak ? 'Blampu' : 'Alampu' }),
    A2(r('halte'), 146 + dx, 90, { depth: 4 }),
    ...(rusak
      ? [A2('sampah', 112 + dx, 91, { depth: 6 }), A2('gerobak', 48 + dx, 91, { depth: 6 }),
         A2('ambulans', 26 + dx, 104, { depth: 9 }), A2('mobil_merah_rusak', 100 + dx, 103, { depth: 9, id: 'Bmobil' }),
         A2('sedan_biru', 148 + dx, 106, { depth: 10, flip: true }), A2('motor_b', 128 + dx, 108, { depth: 11, id: 'Bmotor', flip: true }),
         A2('palang', 178 + dx, 108, { depth: 12 }), A2('cone', 188 + dx, 108, { depth: 12 })]
      : [A2('pot_bunga', 50 + dx, 91, { depth: 6 }), A2('tong_sampah', 110 + dx, 91, { depth: 6 }),
         A2('zebra', 96 + dx, 103, { depth: 2.6 }),
         A2('mobil_merah', 38 + dx, 104, { depth: 9, id: 'Amobil' }), A2('motor_a', 16 + dx, 108, { depth: 11, id: 'Amotor' })]),
  ];
};

const STORY = {
  title: 'Andaikan Kamu Terlempar ke Dunia Tanpa Aturan',
  captionStyle: 'keyword',
  sfx: true,
  alive: true,
  chapters: [
    {
      id: 'uji-gaya', title: 'Uji gaya: perempatan',
      scenes: [
        {
          sky: 'day', noHills: true, noSun: true, split: true, focus: 'right', captionTop: true,
          haze: [0, 0.2], tags: ['DUNIA NORMAL', 'TANPA ATURAN'], tagColors: ['#38b764', '#b13e53'], clock: 'HARI 1',
          camera: { x: 96, y: 54, zoom: 1 }, cameraB: { x: 192 + 96, y: 54, zoom: 1 },
          props: [...perempatan(0, false), ...perempatan(192, true)],
          actors: [orang('rakaA', 'raka', 104, 91), orang('rakaB', 'raka', 192 + 62, 91)],
          steps: [
            { together: [{ move: 'rakaB', to: 192 + 84, speed: 10 }, C('Raka terbangun di jalan yang sama.', [{ at: 'terbangun', kw: 'JALAN *YANG SAMA*' }])] },
            { together: [{ swap: 'rakaB', to: 'ta2_raka_shock', dur: 50 }, { emote: 'rakaB', icon: 'exclaim' }, { glow: 'Blampu', times: 3 },
              C('Lampu merahnya bengkok. Mobil menyerobot, motor melawan arah.', [{ at: 'bengkok', kw: 'LAMPU *BENGKOK*' },
                { at: 'menyerobot', move: 'Bmobil', to: 192 + 62, speed: 40 }, { at: 'melawan', move: 'Bmotor', to: 192 + 20, speed: 45 }, { at: 'melawan', shake: 250 }])] },
            { dialog: 'rakaB', face: 'face_raka_kaget', name: 'Raka', text: 'Kok nggak ada yang ditilang?', dur: 900 },
            { focus: 'left' },
            { together: [{ move: 'Amobil', to: 66, speed: 22 }, { move: 'Amotor', to: 40, speed: 22 }, { emote: 'rakaA', icon: 'note' },
              C('Di dunia asalnya, mobil berhenti saat lampu merah.', [{ at: 'berhenti', kw: 'BERHENTI *SAAT MERAH*' }])] },
            { focus: 'both' },
            C('Aturan kecil, tapi bedanya besar.', [{ at: 'bedanya', kw: 'BEDANYA *BESAR*' }], { punch: true }),
          ],
        },
      ],
    },
  ],
};

// wajah dialog Raka: potret kode (src/sprites-faces.js)
if (typeof FACES !== 'undefined' && typeof makePortrait === 'function') {
  FACES.raka_kaget = makePortrait({ hair: '#22202e', shirt: '#8fc9f0', style: 'neat', face: 'shock' });
}
