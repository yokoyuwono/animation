// ============================================================
//  "ANDAIKAN INDONESIA TANPA GUNUNG BERAPI" — seri Andaikan (fantasi-sains)
//  Naskah: stories/tanpa-gunung-api.naskah.md · teks ucapan di SP (sama persis dgn VO).
//  Split: kiri INDONESIA A (asli), kanan INDONESIA B (semua gunung api padam).
//  Gaya: peta desa tampak atas (warga jalan sendiri) <-> zoom ke sawah Mbah Karto (tampak samping).
// ============================================================

const SP = {
 "g-01": "Bayangkan. Besok pagi, semua gunung berapi di Indonesia padam.",
 "g-02": "Selamanya. Tidak ada lagi letusan.",
 "g-03": "Kedengarannya aman, kan?",
 "g-04": "Tapi sepuluh tahun kemudian, sawah Mbah Karto makin kurus.",
 "g-05": "Tagihan listrik naik. Harga nasi bungkus ikut naik.",
 "g-06": "Dan kalau ditarik lebih jauh... mungkin Indonesia tidak pernah ada.",
 "g-07": "Andaikan Indonesia tanpa gunung berapi.",
 "g-08": "Kita bandingkan dua Indonesia. A, yang asli. Be, yang semua gunung apinya padam.",
 "g-09": "Pertama, seberapa banyak gunung berapi kita?",
 "g-10": "Ada sekitar lima ratus gunung api. Seratus dua puluh tujuh di antaranya masih aktif.",
 "g-11": "Itu salah satu yang terbanyak di dunia.",
 "g-12": "Sekitar lima belas juta orang tinggal di sekitar gunung yang sedang waspada atau siaga.",
 "g-13": "Salah satunya Mbah Karto, petani di lereng gunung.",
 "g-14": "Jadi gunung api bukan sekadar pemandangan. Ia tetangga kita.",
 "g-15": "Mulai dari kabar baiknya.",
 "g-16": "Di Indonesia Be, tidak ada lagi sirene evakuasi.",
 "g-17": "Tidak ada hujan abu. Bandara tidak perlu tutup.",
 "g-18": "Padahal sejarah kita penuh letusan besar.",
 "g-19": "Tambora tahun delapan belas lima belas membuat dunia mengalami tahun tanpa musim panas.",
 "g-20": "Krakatau tahun delapan belas delapan puluh tiga terdengar sampai ribuan kilometer.",
 "g-21": "Di Indonesia Be, semua itu tidak pernah terjadi.",
 "g-22": "Untuk urusan bencana, Indonesia Be menang telak.",
 "g-23": "Tapi ada yang pelan-pelan hilang: kesuburan tanah.",
 "g-24": "Abu gunung itu seperti pupuk alami yang turun dari langit.",
 "g-25": "Itu salah satu alasan Jawa jadi lumbung padi.",
 "g-26": "Jawa menyumbang sekitar lima puluh tiga persen beras nasional.",
 "g-27": "Di Indonesia Be, tanah tidak lagi mendapat abu baru.",
 "g-28": "Dalam simulasi ini, tanahnya makin lelah. Panen Mbah Karto turun.",
 "g-29": "Supaya tetap panen, pupuk harus ditambah. Biayanya naik.",
 "g-30": "Ujungnya sampai ke kota: harga beras naik, nasi bungkus ikut naik.",
 "g-31": "Gunung yang galak itu ternyata ikut mengisi piring kita.",
 "g-32": "Sekarang listrik. Kenalin Pak Ojan, teknisi pembangkit panas bumi.",
 "g-33": "Panas dari perut bumi bisa memutar turbin listrik.",
 "g-34": "Potensi panas bumi kita sekitar dua puluh empat gigawatt.",
 "g-35": "Kapasitas terpasangnya sekarang nomor dua di dunia.",
 "g-36": "Di Indonesia Be, semua sumber panas itu hilang.",
 "g-37": "Listriknya harus diganti, kebanyakan dari batu bara.",
 "g-38": "Udara kota makin kotor, dan tagihan listrik bisa ikut naik.",
 "g-39": "Kehilangan gunung api berarti kehilangan listrik bersih.",
 "g-40": "Kenalin Laras, cucu Mbah Karto. Ia pemandu wisata.",
 "g-41": "Matahari terbit di Bromo. Api biru Kawah Ijen. Danau Toba.",
 "g-42": "Danau Toba sendiri adalah sisa letusan raksasa puluhan ribu tahun lalu.",
 "g-43": "Bahkan banyak kopi enak kita tumbuh di tanah vulkanik.",
 "g-44": "Di Indonesia Be, semua itu tidak ada.",
 "g-45": "Laras, tukang ojek, warung, dan homestay kehilangan tamu.",
 "g-46": "Ternyata gunung api juga lapangan kerja.",
 "g-47": "Sekarang, twist terbesarnya.",
 "g-48": "Gunung api muncul karena lempeng bumi saling bertabrakan.",
 "g-49": "Lempeng samudra menyusup ke bawah, meleleh, lalu naik jadi magma.",
 "g-50": "Tabrakan yang sama ikut mengangkat dan membentuk banyak pulau kita.",
 "g-51": "Jadi kalau proses itu tidak pernah ada...",
 "g-52": "Sebagian pulau Indonesia mungkin tidak pernah muncul dari laut.",
 "g-53": "Tanpa gunung api, mungkin tidak ada Indonesia seperti yang kita kenal.",
 "g-54": "Jadi, gunung berapi itu apa?",
 "g-55": "Tetangga yang galak, tapi dermawan.",
 "g-56": "Kadang mengambil. Tapi jauh lebih sering memberi.",
 "g-57": "Kamu pilih tinggal di Indonesia A, atau Be? Tulis di kolom komentar."
};

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const SA = VERT ? [0.5, 0.3] : [0.25, 0.34], SB = VERT ? [0.5, 0.72] : [0.75, 0.34];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', KARTO = '#7d8a4a';
const C = (id, caption, extra = {}) => ({ caption, vo: id, speak: SP[id], ...extra });
const FITW = VERT ? undefined : 'width';
const VOLC = [[98.4, 3.2], [100.5, -0.4], [101.3, -1.7], [105.4, -6.1], [107.7, -7.2], [110.4, -7.5], [112.9, -8.1], [114.2, -8.1], [115.5, -8.3], [116.5, -8.4], [118, -8.2], [122.8, -8.5], [124.8, 1.4], [127.3, 0.8], [129.9, -4.5]];

// ---------- PETA DESA LERENG (tampak atas) ----------
const DESA = {
  river: [[0, 36], [14, 42], [24, 56], [20, 78], [27, 108]],
  roads: [[0, 70, 192, 70], [40, 20, 40, 108], [120, 70, 120, 108], [40, 94, 192, 94], [40, 20, 108, 20]],
  plaza: [54, 76, 30, 13],
};
const LADANG = [[60, 36], [88, 36], [60, 54], [88, 54], [140, 82], [168, 82]];
function desa(dx, s, { aktif = true, sawahTex = 'sawah_top_subur', extra = [] } = {}) {
  const p = [
    { id: s + 'gunung', sprite: aktif ? 'gunung_top_on' : 'gunung_top_off', x: 152 + dx, y: 50, depth: 3.9, smoke: aktif ? { dx: 0, dy: -34, every: 320 } : undefined },
    ...LADANG.map(([x, y], i) => ({ id: `${s}f${i}`, sprite: sawahTex, x: x + dx, y, center: true, depth: 3.5 })),
    ...[52, 66, 80, 94, 108, 134, 150, 166, 182].map((x, i) => ({ sprite: `rumah_top_${i % 4}`, x: x + dx, y: 107 })),
    ...[52, 66, 80, 94].map((x, i) => ({ sprite: `rumah_top_${(i + 2) % 4}`, x: x + dx, y: 17 })),
    ...[[8, 64], [8, 90], [9, 106]].map(([x, y], i) => ({ sprite: `rumah_top_${(i + 1) % 4}`, x: x + dx, y })),
    ...[[6, 20], [24, 12], [30, 30], [108, 40], [110, 60], [186, 60], [58, 88], [80, 88], [69, 81], [34, 86], [100, 84], [186, 106]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
    ...extra,
  ];
  return p;
}
const KARTO_MAP = (dx, id = 'karto') => ({ id, sprite: 'grandpa', x: 60 + dx, y: 44, scale: 0.7, tag: 'MBAH KARTO', tagColor: KARTO });

// ---------- SAWAH MBAH KARTO (tampak samping, dekat) ----------
function sawahDekat(dx, s, aktif = true, extra = []) {
  return [
    { id: s + 'gunung', sprite: aktif ? 'gunung_api' : 'gunung_padam', x: 150 + dx, y: 90, scale: 1.4, depth: 3, smoke: aktif ? { dx: 0, dy: -44, every: 300 } : undefined },
    { sprite: 'tree', x: 14 + dx }, { sprite: 'house', x: 182 + dx, scale: 0.8 },
    ...[0, 1, 2, 3].map(i => ({ id: `${s}p${i}`, sprite: 'padi_subur', x: 26 + i * 18 + dx, y: 101, depth: 6 })),
    { id: s + 'k0', sprite: 'petak_air', x: 112 + dx, y: 103, depth: 5 },
    ...extra,
  ];
}
// sisi tampak samping (bab listrik & wisata)
function sisi(dx, s, aktif, extra = []) {
  return [
    { id: s + 'gunung', sprite: aktif ? 'gunung_api' : 'gunung_padam', x: 120 + dx, y: 90, scale: 1.4, depth: 3,
      smoke: aktif ? { dx: 0, dy: -44, every: 300 } : undefined },
    { sprite: 'tree', x: 20 + dx }, { sprite: 'house', x: 176 + dx, scale: 0.8 },
    ...extra,
  ];
}
const CAM_DEKAT = VERT ? { x: 96, y: 84, zoom: 1.7 } : { x: 90, y: 82, zoom: 2.2 };

const STORY = {
  title: 'Andaikan Indonesia Tanpa Gunung Berapi',
  audioDir: 'audio/tanpa-gunung-api',
  sfx: true,
  captionStyle: 'keyword',

  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1',
      title: 'Semua gunung api padam',
      scenes: [
        {
          sky: 'map', map: DESA,
          camera: { x: VERT ? 120 : 96, y: 54, zoom: 1.6 },
          clock: 'TAHUN 1',
          props: [...desa(0, 'A'), { id: 'nasi', sprite: 'nasi_bungkus', x: 86, y: 60, scale: 1.6, depth: 40, hidden: true }],
          actors: [KARTO_MAP(0)],
          walkers: { n: 16 },
          steps: [
            { work: 'karto' },
            { together: [
              { camera: { x: VERT ? 140 : 100, y: 54, zoom: 1 }, dur: 2600, ease: 'Cubic.easeOut' },
              C('g-01', 'Bayangkan. Besok pagi, semua gunung berapi di Indonesia padam.', { cues: [
                { at: 'semua gunung', kw: 'SEMUA *GUNUNG API*...' },
                { at: 'padam', swap: 'Agunung', to: 'gunung_top_off' }, { at: 'padam', smoke: 'Agunung', on: false }, { at: 'padam', kw: '*PADAM*' }, { at: 'padam', shake: 300 },
              ] }),
            ] },
            C('g-02', 'Selamanya. Tidak ada lagi letusan.', { cues: [{ at: 'selamanya', kw: '*SELAMANYA*' }, { at: 'tidak ada', kw: 'TANPA *LETUSAN*' }] }),
            C('g-03', 'Kedengarannya aman, kan?', { cues: [{ at: 0, kw: 'AMAN, *KAN?*' }, { at: 0.2, sticker: 'cool', at_: Rt }] }),
            C('g-04', 'Tapi 10 tahun kemudian, sawah Mbah Karto makin kurus.', { cues: [
              { at: 'sepuluh', clock: 'TAHUN', from: 2, to: 10, dur: 1100 },
              { at: 'sawah', camera: { x: 74, y: 46, zoom: 2.2 }, dur: 700 },
              { at: 'makin kurus', swapAll: 'Af', to: 'sawah_top_kurus', stagger: 120 },
              { at: 'kurus', kw: 'SAWAH *MAKIN KURUS*' }, { at: 'kurus', work: 'karto', stop: true }, { at: 'kurus', emote: 'karto', icon: 'sweat', dur: 1400 },
            ] }),
            C('g-05', 'Tagihan listrik naik. Harga nasi bungkus ikut naik.', { cues: [
              { at: 'tagihan', label: 'LISTRIK NAIK!', x: 92, y: 34, bg: '#e43b44', size: 14, dur: 0 }, { at: 'tagihan', kw: 'LISTRIK *NAIK*' },
              { at: 'nasi bungkus', pop: 'nasi' }, { at: 'nasi bungkus', kw: 'NASI BUNGKUS *NAIK*' }, { at: 'ikut naik', label: 'NAIK!', x: 86, y: 44, bg: '#e43b44', size: 14, dur: 0 },
            ] }),
            { clear: true },
            { together: [
              { mono: true }, { camera: { x: VERT ? 100 : 96, y: 54, zoom: 1 }, dur: 900 },
              C('g-06', 'Dan kalau ditarik lebih jauh... mungkin Indonesia tidak pernah ada.', { punch: true, cues: [
                { at: 'lebih jauh', kw: 'LEBIH JAUH...' }, { at: 'tidak pernah', kw: 'INDONESIA *TIDAK PERNAH ADA?*' }, { at: 'tidak pernah', sticker: 'shock', at_: [0.5, 0.34] },
              ] }),
            ] },
            { mono: false },
            { together: [
              { title: 'ANDAIKAN', sub: 'Indonesia tanpa gunung berapi', dark: true, size: 30, dur: 2200 },
              C('g-07', 'Andaikan Indonesia tanpa gunung berapi.'),
            ] },
          ],
        },
        {
          transition: 'cut',
          sky: 'map', map: DESA, split: true, focus: 'both',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: 110, y: 54, zoom: 1.1 }, cameraB: { x: R(110), y: 54, zoom: 1.1 },
          props: [...desa(0, 'A'), ...desa(192, 'B')],
          walkers: { n: [12, 12] },
          steps: [
            C('g-08', 'Kita bandingkan dua Indonesia. A, yang asli. B, yang semua gunung apinya padam.', { cues: [
              { at: 'dua indonesia', kw: '*2* INDONESIA' },
              { at: 'a, yang', focus: 'left' }, { at: 'a, yang', kw: 'A: *ASLI*' },
              { at: 'be,', focus: 'right' }, { at: 'be,', kw: 'B: *PADAM*' },
              { at: 'padam', swap: 'Bgunung', to: 'gunung_top_off' }, { at: 'padam', smoke: 'Bgunung', on: false }, { at: 'padam', shake: 250 },
            ] }),
            { together: [{ focus: 'both' }, { wait: 800 }] },
          ],
        },
      ],
    },

    // ================= BAB 2 — SEBERAPA BANYAK =================
    {
      id: 'bab-2',
      title: '127 gunung api aktif',
      scenes: [
        {
          transition: 'cut',
          sky: 'ocean', fit: 'width',
          camera: { x: 96, y: 54, zoom: VERT ? 1.7 : 1 },
          props: [{ sprite: 'map_indo', x: 96, y: 108, depth: 3 }],
          steps: [
            C('g-09', 'Pertama, seberapa banyak gunung berapi kita?', { cues: [{ at: 'seberapa', kw: 'SEBERAPA *BANYAK?*' }] }),
            C('g-10', 'Ada sekitar 500 gunung api. 127 di antaranya masih aktif.', { cues: [
              { at: 'lima ratus', kw: '±*500* GUNUNG API' },
              ...VOLC.map((v, i) => ({ at: 0.35 + i * 0.035, ping: P(v[0], v[1]), size: 3 })),
              { at: 'seratus', kw: '*127* MASIH AKTIF' },
            ] }),
            C('g-11', 'Itu salah satu yang terbanyak di dunia.', { cues: [{ at: 'terbanyak', kw: 'SALAH SATU *TERBANYAK DI DUNIA*' }, { at: 'dunia', sticker: 'shock', at_: Rt }] }),
            C('g-12', 'Sekitar 15 juta orang tinggal di sekitar gunung yang sedang waspada atau siaga.', { cues: [
              { at: 'lima belas', kw: '*±15 JUTA* ORANG' },
              { at: 'lima belas', card: 'Badan Geologi (Des 2025)', items: ['±500 gunung api', '127 aktif', '±15 juta warga di sekitar', 'gunung waspada/siaga'], x: 96, y: 30, stagger: 300, dur: 0 },
            ] }),
            { clear: true },
          ],
        },
        {
          transition: 'clouds',
          sky: 'day', fit: FITW,
          camera: CAM_DEKAT,
          props: sawahDekat(0, 'A'),
          actors: [{ id: 'karto', sprite: 'grandpa', x: 98, y: 102, tag: 'MBAH KARTO', tagColor: KARTO }],
          steps: [
            { work: 'karto' },
            C('g-13', 'Salah satunya Mbah Karto, petani di lereng gunung.', { cues: [
              { at: 'mbah karto', kw: '*MBAH KARTO*, PETANI' },
              { at: 'petani', dialog: 'karto', text: 'Sawah saya subur, berkat abu gunung.', dur: 900 },
            ] }),
            C('g-14', 'Jadi gunung api bukan sekadar pemandangan. Ia tetangga kita.', { punch: true, cues: [
              { at: 'bukan sekadar', kw: 'BUKAN SEKADAR *PEMANDANGAN*' },
              { at: 'tetangga', work: 'karto', stop: true }, { at: 'tetangga', face: 'karto', dir: 'right' },
              { at: 'tetangga', kw: '*TETANGGA* KITA', keepKw: true }, { at: 'tetangga', emote: 'karto', icon: 'heart', dur: 1300 },
            ] }),
          ],
        },
      ],
    },

    // ================= BAB 3 — TANPA LETUSAN =================
    {
      id: 'bab-3',
      title: 'Hidup tanpa letusan',
      scenes: [{
        transition: 'clouds',
        sky: 'map', map: DESA, split: true, focus: 'both',
        tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
        camera: { x: 100, y: 58, zoom: 1.2 }, cameraB: { x: R(100), y: 58, zoom: 1.2 },
        props: [
          ...desa(0, 'A', { extra: [
            { id: 't1', sprite: 'tenda_top', x: 60, y: 104, scale: 1.4, depth: 4.6, hidden: true }, { id: 't2', sprite: 'tenda_top', x: 78, y: 104, scale: 1.4, depth: 4.6, hidden: true },
            { id: 'pesawat', sprite: 'plane', x: 70, y: 28, scale: 1.2, depth: 35, hidden: true },
          ] }),
          ...desa(192, 'B', { aktif: false }),
        ],
        actors: [{ id: 'wB', sprite: 'warga', x: R(70), y: 84, scale: 0.7 }],
        walkers: { n: [16, 12] },
        steps: [
          C('g-15', 'Mulai dari kabar baiknya.', { cues: [{ at: 0, kw: 'KABAR *BAIKNYA*' }] }),
          C('g-16', 'Di Indonesia B, tidak ada lagi sirene evakuasi.', { cues: [
            { at: 0, focus: 'left' },
            { at: 'tidak ada', pop: 't1' }, { at: 'tidak ada', pop: 't2' },
            { at: 'sirene', crowd: 'goto', side: 'left', x: 69, y: 100, spread: 14, rush: 2.4 },
            { at: 'sirene', label: 'EVAKUASI!', x: 70, y: 62, bg: '#e43b44', size: 16, dur: 0 },
            { at: 'evakuasi', focus: 'right' }, { at: 'evakuasi', kw: 'B: TANPA *EVAKUASI*' }, { at: 'evakuasi', emote: 'wB', icon: 'note', dur: 1400 },
          ] }),
          { together: [{ focus: 'both' }, { clear: true }] },
          C('g-17', 'Tidak ada hujan abu. Bandara tidak perlu tutup.', { cues: [
            { at: 'hujan abu', tint: 0.45, color: '#8a8a8a', side: 'left', dur: 800 }, { at: 'hujan abu', kw: 'TANPA *HUJAN ABU*' },
            { at: 'bandara', pop: 'pesawat' }, { at: 'tutup', label: 'BANDARA TUTUP', x: 70, y: 14, bg: '#e43b44', size: 14, dur: 0 },
          ] }),
          { clear: true },
          { together: [{ focus: 'left' }, { wait: 200 }] },
          C('g-18', 'Padahal sejarah kita penuh letusan besar.', { cues: [{ at: 'sejarah', kw: 'SEJARAH *LETUSAN BESAR*' }, { at: 'letusan', shake: 300 }] }),
          { together: [
            { card: 'Tambora · 1815', items: ['Letusan terbesar di sejarah modern', '1816: "tahun tanpa musim panas"'], x: 96, y: 34, stagger: 900, dur: 0 },
            C('g-19', 'Tambora tahun 1815 membuat dunia mengalami tahun tanpa musim panas.', { cues: [{ at: 'tambora', kw: '*TAMBORA* 1815' }, { at: 'tanpa musim', kw: 'TAHUN *TANPA MUSIM PANAS*' }] }),
          ] },
          { clear: true },
          { together: [
            { card: 'Krakatau · 1883', items: ['Suaranya terdengar', 'ribuan kilometer jauhnya'], x: 96, y: 34, stagger: 900, dur: 0 },
            C('g-20', 'Krakatau tahun 1883 terdengar sampai ribuan kilometer.', { cues: [{ at: 'krakatau', kw: '*KRAKATAU* 1883' }, { at: 'terdengar', shake: 400 }, { at: 'ribuan', sticker: 'shock', at_: Rt }] }),
          ] },
          { clear: true },
          { together: [{ focus: 'right' }, { wait: 200 }] },
          C('g-21', 'Di Indonesia B, semua itu tidak pernah terjadi.', { cues: [{ at: 'tidak pernah', kw: 'B: *TIDAK PERNAH TERJADI*' }, { at: 'terjadi', sticker: 'cool', at_: Rt }] }),
          { together: [{ focus: 'both' }, { tint: 0, side: 'left', dur: 600 }, { crowd: 'roam', side: 'left' }] },
          C('g-22', 'Untuk urusan bencana, Indonesia B menang telak.', { punch: true, cues: [
            { at: 'bencana', chart: 'RISIKO BENCANA GUNUNG API', bars: [['Indonesia A', 90, '#e43b44'], ['Indonesia B', 2, GREEN]], max: 100, suffix: '', place: 'right', y: 0.1, dur: 0 },
            { at: 'menang telak', kw: 'B *MENANG TELAK*' },
          ] }),
          { clear: true },
        ],
      }],
    },

    // ================= BAB 4 — SAWAH & BERAS =================
    {
      id: 'bab-4',
      title: 'Gunung yang mengisi piring',
      scenes: [
        {
          transition: 'cut',
          sky: 'map', map: DESA, split: true, focus: 'both',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: 84, y: 50, zoom: 1.5 }, cameraB: { x: R(84), y: 50, zoom: 1.5 },
          props: [...desa(0, 'A'), ...desa(192, 'B', { aktif: false })],
          actors: [KARTO_MAP(0, 'kartoA'), KARTO_MAP(192, 'kartoB')],
          walkers: { n: [10, 10] },
          steps: [
            { together: [{ work: 'kartoA' }, { work: 'kartoB' }] },
            C('g-23', 'Tapi ada yang pelan-pelan hilang: kesuburan tanah.', { cues: [{ at: 'pelan-pelan', kw: 'PELAN-PELAN *HILANG*' }, { at: 'kesuburan', kw: '*KESUBURAN* TANAH' }] }),
            C('g-24', 'Abu gunung itu seperti pupuk alami yang turun dari langit.', { cues: [
              { at: 0, focus: 'left' }, { at: 'abu', tint: 0.22, color: '#c2c3c7', side: 'left', dur: 600 },
              { at: 'pupuk alami', kw: 'ABU = *PUPUK ALAMI*' }, { at: 'pupuk', label: 'ABU = PUPUK', x: 74, y: 26, bg: GREEN, size: 14, dur: 0 },
              { at: 'langit', tint: 0, side: 'left', dur: 800 },
            ] }),
            C('g-25', 'Itu salah satu alasan Jawa jadi lumbung padi.', { cues: [{ at: 'jawa', kw: 'JAWA = *LUMBUNG PADI*' }, { at: 'lumbung', emote: 'kartoA', icon: 'heart', dur: 1200 }] }),
            { clear: true },
            { together: [{ focus: 'both' }, { wait: 100 }] },
            C('g-26', 'Jawa menyumbang sekitar 53% beras nasional.', { cues: [
              { at: 'menyumbang', chart: 'PRODUKSI BERAS 2024 (BPS)', bars: [['Pulau Jawa', 53.4, GREEN], ['Luar Jawa', 46.6, '#41a6f6']], max: 60, suffix: '%', place: 'right', y: 0.1, dur: 0 },
              { at: 'lima puluh', kw: 'JAWA *±53%* BERAS' },
            ] }),
            { clear: true },
          ],
        },
        {
          transition: 'clouds',
          sky: 'day', split: true, focus: 'both',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: VERT ? 92 : 86, y: 86, zoom: VERT ? 1.6 : 2.4 }, cameraB: { x: R(VERT ? 92 : 86), y: 86, zoom: VERT ? 1.6 : 2.4 },
          clock: 'TAHUN 1',
          note: 'Simulasi · disederhanakan',
          props: [...sawahDekat(0, 'A'), ...sawahDekat(192, 'B', false, [
            { id: 'pupuk1', sprite: 'karung_pupuk', x: R(70), y: 103, scale: 1.2, depth: 9, hidden: true },
            { id: 'pupuk2', sprite: 'karung_pupuk', x: R(80), y: 103, scale: 1.2, depth: 9, hidden: true },
          ]),
          { id: 'nasiB', sprite: 'nasi_bungkus', x: R(76), y: 84, scale: 1.4, depth: 14, hidden: true }],
          actors: [
            { id: 'kartoA', sprite: 'grandpa', x: 98, y: 102, tag: 'MBAH KARTO', tagColor: KARTO },
            { id: 'kartoB', sprite: 'grandpa', x: R(98), y: 102, tag: 'MBAH KARTO', tagColor: KARTO },
          ],
          steps: [
            { together: [{ work: 'kartoA' }, { work: 'kartoB' }, { focus: 'right' }] },
            C('g-27', 'Di Indonesia B, tanah tidak lagi mendapat abu baru.', { cues: [{ at: 'tanah', kw: 'TANPA *ABU BARU*' }] }),
            C('g-28', 'Dalam simulasi ini, tanahnya makin lelah. Panen Mbah Karto turun.', { cues: [
              { at: 0, clock: 'TAHUN', from: 2, to: 10, dur: 1600 },
              { at: 'tanahnya', swap: 'Bk0', to: 'petak_retak' }, { at: 'tanahnya', work: 'kartoB', ground: 'dry', speed: 700 },
              { at: 'lelah', swapAll: 'Bp', to: 'padi_kurus', stagger: 220 }, { at: 'lelah', kw: 'TANAH *MAKIN LELAH*' },
              { at: 'panen', swap: 'Bp0', to: 'padi_kering' }, { at: 'panen', swap: 'Bp2', to: 'padi_kering' },
              { at: 'turun', work: 'kartoB', stop: true }, { at: 'turun', tag: 'kartoB', text: 'PANEN TURUN', color: RED }, { at: 'turun', emote: 'kartoB', icon: 'sweat', dur: 1300 },
            ] }),
            C('g-29', 'Supaya tetap panen, pupuk harus ditambah. Biayanya naik.', { cues: [
              { at: 0, dialog: 'kartoB', text: 'Tanahnya keras... harus beli pupuk lagi.', dur: 700 },
              { at: 'pupuk', pop: 'pupuk1' }, { at: 'pupuk', kw: 'PUPUK *DITAMBAH*' }, { at: 'ditambah', pop: 'pupuk2' }, { at: 'biayanya', kw: 'BIAYA *NAIK*' },
            ] }),
            { receipt: 'STRUK MBAH KARTO · TAHUN 10', stagger: 420,
              lines: [['Pupuk tambahan', '+Rp1.500.000'], ['Panen', '-20%'], ['Harga gabah', 'NAIK']],
              total: ['UNTUNG PETANI', 'MENIPIS'], note: 'ilustrasi · simulasi' },
            { wait: 700 },
            { clear: true },
            C('g-30', 'Ujungnya sampai ke kota: harga beras naik, nasi bungkus ikut naik.', { cues: [
              { at: 'kota', kw: 'SAMPAI KE *KOTA*' }, { at: 'harga beras', label: 'BERAS NAIK!', x: R(90), y: 72, bg: '#e43b44', size: 14, dur: 0 },
              { at: 'nasi bungkus', pop: 'nasiB' }, { at: 'nasi bungkus', kw: 'NASI BUNGKUS *NAIK*' }, { at: 'ikut naik', sticker: 'sweat', at_: Rt },
            ] }),
            { clear: true },
            { together: [{ focus: 'both' }, { wait: 100 }] },
            C('g-31', 'Gunung yang galak itu ternyata ikut mengisi piring kita.', { punch: true, cues: [{ at: 'galak', kw: 'GUNUNG YANG *GALAK*...' }, { at: 'mengisi', kw: '...IKUT *MENGISI PIRING* KITA', keepKw: true }] }),
          ],
        },
      ],
    },
    // ================= BAB 5 — LISTRIK =================
    {
      id: 'bab-5',
      title: 'Listrik dari perut bumi',
      scenes: [{
        transition: 'clouds',
        sky: 'day', split: true, focus: 'both',
        tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 66, zoom: 1.2 }, cameraB: { x: R(96), y: 66, zoom: 1.2 },
        props: [
          ...sisi(0, 'A', true, [{ id: 'Apltp', sprite: 'pltp', x: 60, y: 92, scale: 1.3, depth: 5, smoke: { dx: -6, dy: -18, every: 260 } }]),
          ...sisi(192, 'B', false, [
            { id: 'Bpltp', sprite: 'pltp', x: R(60), y: 92, scale: 1.3, depth: 5 },
            { id: 'Bpltu', sprite: 'plant', x: R(60), y: 92, scale: 0.9, depth: 6, hidden: true, smoke: { dx: 6, dy: -40, dark: true, every: 200, on: false } },
          ]),
        ],
        actors: [{ id: 'ojanA', sprite: 'ojan', x: 88, y: 100, tag: 'PAK OJAN', tagColor: '#ef7d57' }, { id: 'ojanB', sprite: 'ojan', x: R(88), y: 100, tag: 'PAK OJAN', tagColor: '#ef7d57' }],
        steps: [
          C('g-32', 'Sekarang listrik. Kenalin Pak Ojan, teknisi pembangkit panas bumi.', { cues: [{ at: 'listrik', kw: 'SOAL *LISTRIK*' }, { at: 'pak ojan', kw: '*PAK OJAN*, TEKNISI' }, { at: 'pak ojan', glow: 'ojanA', times: 2 }] }),
          { together: [{ focus: 'left' }, { wait: 200 }] },
          C('g-33', 'Panas dari perut bumi bisa memutar turbin listrik.', { cues: [{ at: 'panas', kw: 'PANAS *PERUT BUMI*' }, { at: 'turbin', label: 'LISTRIK ON', x: 60, y: 52, bg: GREEN, size: 14, dur: 0 }, { at: 'turbin', kw: 'PUTAR *TURBIN*' }] }),
          { clear: true },
          { together: [{ focus: 'both' }, { wait: 100 }] },
          C('g-34', 'Potensi panas bumi kita sekitar 24 gigawatt.', { cues: [
            { at: 'potensi', chart: 'PANAS BUMI INDONESIA (GW)', bars: [['Potensi', 24, '#ffcd75'], ['Terpasang', 2.8, GREEN]], max: 26, suffix: ' GW', place: 'right', y: 0.1, dur: 0 },
            { at: 'dua puluh', kw: 'POTENSI *±24 GW*' },
          ] }),
          C('g-35', 'Kapasitas terpasangnya sekarang nomor dua di dunia.', { cues: [{ at: 'nomor dua', kw: '*NOMOR 2* DI DUNIA' }, { at: 'nomor dua', sticker: 'party', at_: SA }] }),
          { clear: true },
          { together: [{ focus: 'right' }, { wait: 200 }] },
          C('g-36', 'Di Indonesia B, semua sumber panas itu hilang.', { cues: [{ at: 'hilang', hide: 'Bpltp' }, { at: 'hilang', kw: 'PANAS BUMI *HILANG*' }, { at: 'hilang', emote: 'ojanB', icon: 'question', dur: 1300 }] }),
          C('g-37', 'Listriknya harus diganti, kebanyakan dari batu bara.', { cues: [{ at: 'diganti', pop: 'Bpltu' }, { at: 'batu bara', smoke: 'Bpltu' }, { at: 'batu bara', kw: 'GANTI *BATU BARA*' }] }),
          C('g-38', 'Udara kota makin kotor, dan tagihan listrik bisa ikut naik.', { cues: [
            { at: 'udara', haze: 0.5, side: 'right', dur: 1200 }, { at: 'kotor', kw: 'UDARA *KOTOR*' },
            { at: 'tagihan', label: 'TAGIHAN NAIK!', x: R(96), y: 40, bg: '#e43b44', size: 14, dur: 0 }, { at: 'tagihan', kw: 'TAGIHAN *NAIK*' },
          ] }),
          { clear: true },
          { together: [{ focus: 'both' }, { wait: 100 }] },
          C('g-39', 'Kehilangan gunung api berarti kehilangan listrik bersih.', { punch: true, cues: [{ at: 'kehilangan listrik', kw: 'KEHILANGAN *LISTRIK BERSIH*', keepKw: true }] }),
        ],
      }],
    },

    // ================= BAB 6 — WISATA & KOPI =================
    {
      id: 'bab-6',
      title: 'Bromo, Ijen, Toba, dan kopi',
      scenes: [
        {
          transition: 'clouds',
          sky: 'map', map: DESA, split: true, focus: 'both',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: VERT ? 76 : 96, y: 66, zoom: 1.4 }, cameraB: { x: R(VERT ? 76 : 96), y: 66, zoom: 1.4 },
          props: [...desa(0, 'A'), ...desa(192, 'B', { aktif: false })],
          actors: [{ id: 'larasA', sprite: 'laras', x: 69, y: 86, scale: 0.75, tag: 'LARAS', tagColor: GREEN }, { id: 'larasB', sprite: 'laras', x: R(69), y: 86, scale: 0.75, tag: 'LARAS', tagColor: GREEN }],
          walkers: { n: [18, 18], sprites: ['warga', 'warga2', 'girl', 'boy', 'kid'] },
          steps: [
            C('g-40', 'Kenalin Laras, cucu Mbah Karto. Ia pemandu wisata.', { cues: [
              { at: 'laras', kw: '*LARAS*, PEMANDU WISATA' }, { at: 'laras', glow: 'larasA', times: 2 },
              { at: 'pemandu', crowd: 'goto', side: 'left', x: 69, y: 84, spread: 12, frac: 0.5 },
            ] }),
          ],
        },
        {
          transition: 'clouds',
          sky: 'dawn', split: true, focus: 'left',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: 100, y: 68, zoom: 1.2 }, cameraB: { x: R(100), y: 68, zoom: 1.2 },
          props: [
            ...sisi(0, 'A', true, [
              { id: 'ijen', sprite: 'api_biru', x: 120, y: 64, scale: 2, depth: 8, hidden: true },
              { id: 'toba', sprite: 'danau', x: 60, y: 100, scale: 1.2, depth: 4, hidden: true },
              { id: 'kopi1', sprite: 'kopi', x: 30, y: 100, scale: 1.4, depth: 6, hidden: true }, { id: 'kopi2', sprite: 'kopi', x: 44, y: 100, scale: 1.4, depth: 6, hidden: true },
            ]),
            ...sisi(192, 'B', false),
          ],
          actors: [
            { id: 'larasA', sprite: 'laras', x: 88, y: 102, tag: 'LARAS', tagColor: GREEN },
            { id: 'tur1', sprite: 'warga', x: 100, y: 102 }, { id: 'tur2', sprite: 'warga2', x: 76, y: 102, face: 'left' },
          ],
          steps: [
            C('g-41', 'Matahari terbit di Bromo. Api biru Kawah Ijen. Danau Toba.', { cues: [
              { at: 'bromo', kw: '*BROMO*' }, { at: 'api biru', pop: 'ijen' }, { at: 'api biru', kw: 'API BIRU *IJEN*' }, { at: 'danau toba', pop: 'toba' }, { at: 'danau toba', kw: 'DANAU *TOBA*' },
              { at: 'kawah', emote: 'tur1', icon: 'heart', dur: 1200 },
            ] }),
            C('g-42', 'Danau Toba sendiri adalah sisa letusan raksasa puluhan ribu tahun lalu.', { cues: [{ at: 'sisa letusan', kw: 'SISA *LETUSAN RAKSASA*' }, { at: 'puluhan ribu', kw: '±*74 RIBU* TAHUN LALU' }] }),
            C('g-43', 'Bahkan banyak kopi enak kita tumbuh di tanah vulkanik.', { cues: [{ at: 'kopi', pop: 'kopi1' }, { at: 'kopi', pop: 'kopi2' }, { at: 'tanah vulkanik', kw: 'KOPI *TANAH VULKANIK*' }] }),
          ],
        },
        {
          transition: 'cut',
          sky: 'map', map: DESA, split: true, focus: 'right',
          tags: ['INDONESIA A', 'INDONESIA B'], tagColors: [GREEN, RED],
          camera: { x: VERT ? 76 : 96, y: 66, zoom: 1.4 }, cameraB: { x: R(VERT ? 76 : 96), y: 66, zoom: 1.4 },
          props: [...desa(0, 'A'), ...desa(192, 'B', { aktif: false })],
          actors: [{ id: 'larasA', sprite: 'laras', x: 69, y: 86, scale: 0.75, tag: 'LARAS', tagColor: GREEN }, { id: 'larasB', sprite: 'laras', x: R(69), y: 86, scale: 0.75, tag: 'LARAS', tagColor: GREEN }],
          walkers: { n: [18, 18], sprites: ['warga', 'warga2', 'girl', 'boy', 'kid'] },
          steps: [
            C('g-44', 'Di Indonesia B, semua itu tidak ada.', { cues: [{ at: 'tidak ada', kw: 'B: *TIDAK ADA*' }] }),
            C('g-45', 'Laras, tukang ojek, warung, dan homestay kehilangan tamu.', { cues: [
              { at: 'laras', crowd: 'leave', side: 'right', frac: 0.85, rush: 1.6 },
              { at: 'kehilangan', kw: 'KEHILANGAN *TAMU*' }, { at: 'kehilangan', emote: 'larasB', icon: 'sweat', dur: 1300 }, { at: 'tamu', tag: 'larasB', text: 'TAMU 0', color: RED },
            ] }),
            { together: [{ focus: 'both' }, { wait: 100 }] },
            C('g-46', 'Ternyata gunung api juga lapangan kerja.', { punch: true, cues: [{ at: 'lapangan kerja', kw: 'GUNUNG API = *LAPANGAN KERJA*', keepKw: true }] }),
          ],
        },
      ],
    },

    // ================= BAB 7 — TWIST =================
    {
      id: 'bab-7',
      title: 'Indonesia mungkin tidak ada',
      scenes: [{
        transition: 'cut',
        sky: 'deep', fit: 'width',
        camera: { x: 100, y: 74, zoom: VERT ? 1.7 : 1.3 },
        note: 'Penjelasan geologi disederhanakan',
        props: [
          { id: 'samudra', sprite: 'lempeng_samudra', x: 40, y: 82, depth: 4 },
          { id: 'benua', sprite: 'lempeng_benua', x: 150, y: 80, depth: 5 },
          { id: 'magma', sprite: 'magma', x: 120, y: 86, scale: 1.6, depth: 6, hidden: true },
          { id: 'pulau', sprite: 'pulau', x: 120, y: 70, scale: 1.6, depth: 6 },
          { id: 'gunungT', sprite: 'gunung_api', x: 124, y: 60, scale: 0.6, depth: 7, hidden: true },
        ],
        steps: [
          C('g-47', 'Sekarang, twist terbesarnya.', { cues: [{ at: 0, kw: '*TWIST* TERBESAR' }, { at: 0.2, sticker: 'sus', at_: L }] }),
          C('g-48', 'Gunung api muncul karena lempeng bumi saling bertabrakan.', { cues: [
            { at: 'lempeng', kw: 'LEMPENG *BERTABRAKAN*' }, { at: 'lempeng', label: 'LEMPENG SAMUDRA', x: 40, y: 72, bg: NAVY, size: 12, dur: 0 },
            { at: 'bertabrakan', label: 'LEMPENG BENUA', x: 150, y: 66, bg: '#8b5a2b', size: 12, dur: 0 }, { at: 'bertabrakan', move: 'samudra', to: 70, dur: 2000 }, { at: 'bertabrakan', shake: 300 },
          ] }),
          { clearLabels: true },
          C('g-49', 'Lempeng samudra menyusup ke bawah, meleleh, lalu naik jadi magma.', { cues: [
            { at: 'menyusup', raise: 'samudra', to: 96, dur: 1600 }, { at: 'menyusup', kw: '*MENYUSUP* KE BAWAH' },
            { at: 'meleleh', pop: 'magma' }, { at: 'naik jadi', raise: 'magma', to: 74, dur: 1400 }, { at: 'magma', kw: 'NAIK JADI *MAGMA*' },
          ] }),
          C('g-50', 'Tabrakan yang sama ikut mengangkat dan membentuk banyak pulau kita.', { cues: [{ at: 'mengangkat', raise: 'pulau', to: 58, dur: 1600 }, { at: 'membentuk', pop: 'gunungT' }, { at: 'membentuk', kw: 'MEMBENTUK *PULAU-PULAU*' }] }),
          { together: [{ mono: true }, C('g-51', 'Jadi kalau proses itu tidak pernah ada...', { cues: [{ at: 'tidak pernah', kw: 'KALAU *TIDAK PERNAH ADA*...' }] })] },
          C('g-52', 'Sebagian pulau Indonesia mungkin tidak pernah muncul dari laut.', { cues: [{ at: 'sebagian', hide: 'gunungT' }, { at: 'sebagian', raise: 'pulau', to: 92, dur: 2200 }, { at: 'tidak pernah muncul', kw: 'PULAU *TIDAK PERNAH MUNCUL*' }, { at: 'laut', sticker: 'shock', at_: Rt }] }),
          C('g-53', 'Tanpa gunung api, mungkin tidak ada Indonesia seperti yang kita kenal.', { punch: true, cues: [{ at: 'tidak ada indonesia', kw: 'MUNGKIN *TIDAK ADA INDONESIA*', keepKw: true }] }),
          { mono: false },
        ],
      }],
    },

    // ================= BAB 8 — PUNCHLINE =================
    {
      id: 'bab-8',
      title: 'Tetangga galak tapi dermawan',
      scenes: [
        {
          transition: 'clouds',
          sky: 'day', fit: FITW,
          camera: CAM_DEKAT,
          props: sawahDekat(0, 'A'),
          actors: [{ id: 'karto', sprite: 'grandpa', x: 98, y: 102, tag: 'MBAH KARTO', tagColor: KARTO }, { id: 'laras', sprite: 'laras', x: 76, y: 102, tag: 'LARAS', tagColor: GREEN }],
          steps: [
            { work: 'karto' },
            C('g-54', 'Jadi, gunung berapi itu apa?', { cues: [{ at: 0, kw: 'GUNUNG API *ITU APA?*' }] }),
            C('g-55', 'Tetangga yang galak, tapi dermawan.', { punch: true, cues: [
              { at: 'galak', kw: '*GALAK*...' }, { at: 'dermawan', kw: 'TAPI *DERMAWAN*', keepKw: true },
              { at: 'dermawan', work: 'karto', stop: true }, { at: 'dermawan', face: 'karto', dir: 'right' }, { at: 'dermawan', emote: 'karto', icon: 'heart', dur: 1300 },
            ] }),
          ],
        },
        {
          transition: 'cut',
          sky: 'map', map: DESA,
          camera: { x: 64, y: 44, zoom: 3 },
          props: desa(0, 'A'),
          actors: [KARTO_MAP(0)],
          walkers: { n: 18 },
          steps: [
            { work: 'karto' },
            { together: [
              { camera: { x: VERT ? 100 : 96, y: 54, zoom: 1 }, dur: 3500, ease: 'Sine.easeInOut' },
              { card: 'Papan skor', items: ['Bencana : B', 'Beras   : A', 'Listrik : A', 'Wisata  : A'], x: 96, y: 30, stagger: 500, dur: 0 },
              C('g-56', 'Kadang mengambil. Tapi jauh lebih sering memberi.', { cues: [{ at: 'mengambil', kw: 'KADANG *MENGAMBIL*' }, { at: 'memberi', kw: 'LEBIH SERING *MEMBERI*' }] }),
            ] },
            { clear: true },
            C('g-57', 'Kamu pilih tinggal di Indonesia A, atau B? Tulis di kolom komentar.', { cues: [
              { at: 'kamu pilih', kw: 'INDONESIA *A* ATAU *B*?' },
              { at: 'tulis', label: 'LIKE', x: 66, y: 24, bg: '#3b5dc9', dur: 0 },
              { at: 'tulis', label: 'KOMEN', x: 100, y: 24, bg: GREEN, dur: 0 },
              { at: 'tulis', label: 'SUBSCRIBE', x: 140, y: 24, bg: '#e43b44', dur: 0 },
              { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true },
            ] }),
            { wait: 1500 },
          ],
        },
      ],
    },
  ],
};
