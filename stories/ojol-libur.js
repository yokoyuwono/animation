// ============================================================
//  "ANDAIKAN OJOL LIBUR SEBULAN" — seri Andaikan, gaya peta
//  Naskah: stories/ojol-libur.naskah.md · Skema: stories/ojol-libur.plan.md
//  Split: kiri KOTA A (ojol jalan), kanan KOTA B (ojol libur). Angka ber-label ilustrasi.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "o-01": ["Bayangkan. Besok pagi, semua aplikasi ojol libur. Sebulan penuh.", "Bayangkan. Besok pagi, semua aplikasi ojol libur. Sebulan penuh."],
 "o-02": ["Nadia telat kuliah. Warung Mak Ijah sepi pesanan.", "Nadia telat kuliah. Warung Mak Ijah sepi pesanan."],
 "o-03": ["Tapi Pak Joko, ojek pangkalan, tiba-tiba kebanjiran penumpang.", "Tapi Pak Joko, ojek pangkalan, tiba-tiba kebanjiran penumpang."],
 "o-04": ["Siapa yang untung, siapa yang buntung?", "Siapa yang untung, siapa yang buntung?"],
 "o-05": ["Andaikan ojol libur sebulan.", "Andaikan ojol libur sebulan."],
 "o-06": ["Kita bandingkan dua kota. A, ojol jalan. B, semua aplikasinya libur.", "Kita bandingkan dua kota. A, ojol jalan. Be, semua aplikasinya libur."],
 "o-07": ["Dari satu kota ini, kita lihat dulu skalanya.", "Dari satu kota ini, kita lihat dulu skalanya."],
 "o-08": ["Riset INDEF dan Paramadina tahun ini menghitungnya.", "Riset Indef dan Paramadina tahun ini menghitungnya."],
 "o-09": ["Ekosistem ojol menyumbang sekitar 565 triliun rupiah.", "Ekosistem ojol menyumbang sekitar lima ratus enam puluh lima triliun rupiah."],
 "o-10": ["Itu sekitar 2,4 persen ekonomi Indonesia.", "Itu sekitar dua koma empat persen ekonomi Indonesia."],
 "o-11": ["Lapangan kerja yang tercipta: sekitar 5,5 juta orang.", "Lapangan kerja yang tercipta: sekitar lima koma lima juta orang."],
 "o-12": ["Jadi ojol bukan cuma motor dan jaket. Ia urat nadi kota.", "Jadi ojol bukan cuma motor dan jaket. Ia urat nadi kota."],
 "o-13": ["Mulai dari orang yang paling dulu merasakannya.", "Mulai dari orang yang paling dulu merasakannya."],
 "o-14": ["Kenalin Bang Udin. Narik ojol tiap hari, dari subuh sampai malam.", "Kenalin Bang Udin. Narik ojol tiap hari, dari subuh sampai malam."],
 "o-15": ["Sejak Juli 2026, potongan aplikasi dibatasi delapan persen.", "Sejak Juli dua ribu dua puluh enam, potongan aplikasi dibatasi delapan persen."],
 "o-16": ["Di kota A, penghasilannya mulai membaik.", "Di kota A, penghasilannya mulai membaik."],
 "o-17": ["Di kota B, aplikasi mati. Penghasilannya nol.", "Di kota Be, aplikasi mati. Penghasilannya nol."],
 "o-18": ["Tapi cicilan motor dan uang sekolah anak tetap jalan.", "Tapi cicilan motor dan uang sekolah anak tetap jalan."],
 "o-19": ["Bang Udin coba mangkal manual. Penumpang sudah keburu diambil pangkalan.", "Bang Udin coba mangkal manual. Penumpang sudah keburu diambil pangkalan."],
 "o-20": ["Satu aplikasi libur, satu dapur ikut berhenti ngebul.", "Satu aplikasi libur, satu dapur ikut berhenti ngebul."],
 "o-21": ["Motor Bang Udin biasanya berhenti di satu warung.", "Motor Bang Udin biasanya berhenti di satu warung."],
 "o-22": ["Warung pecel Mak Ijah. Separuh pesanannya datang lewat aplikasi.", "Warung pecel Mak Ijah. Separuh pesanannya datang lewat aplikasi."],
 "o-23": ["Riset lain mencatat: pesan-antar menyumbang lebih dari separuh omzet warung mitra.", "Riset lain mencatat: pesan-antar menyumbang lebih dari separuh omzet warung mitra."],
 "o-24": ["Di kota B, pesanan online hilang. Sayur yang sudah dibeli ikut layu.", "Di kota Be, pesanan online hilang. Sayur yang sudah dibeli ikut layu."],
 "o-25": ["Mak Ijah pasang tulisan: bisa pesan lewat WA, antar sendiri.", "Mak Ijah pasang tulisan: bisa pesan lewat we a, antar sendiri."],
 "o-26": ["Tapi yang mengantar siapa? Cucunya, naik sepeda.", "Tapi yang mengantar siapa? Cucunya, naik sepeda."],
 "o-27": ["Ojol libur, warung kecil yang paling cepat merasa lapar.", "Ojol libur, warung kecil yang paling cepat merasa lapar."],
 "o-28": ["Di ujung jalan warung, ada kampus Nadia.", "Di ujung jalan warung, ada kampus Nadia."],
 "o-29": ["Nadia tidak punya motor. Biasanya tinggal pesan, lima menit sampai.", "Nadia tidak punya motor. Biasanya tinggal pesan, lima menit sampai."],
 "o-30": ["Di kota B, ia jalan kaki ke halte. Angkot penuh.", "Di kota Be, ia jalan kaki ke halte. Angkot penuh."],
 "o-31": ["Banyak orang kembali bawa mobil dan motor sendiri.", "Banyak orang kembali bawa mobil dan motor sendiri."],
 "o-32": ["Jalanan makin padat. Parkiran kampus penuh sesak.", "Jalanan makin padat. Parkiran kampus penuh sesak."],
 "o-33": ["Telat sekali, telat dua kali. Nilai kehadiran ikut turun.", "Telat sekali, telat dua kali. Nilai kehadiran ikut turun."],
 "o-34": ["Ojol ternyata juga mengurangi kendaraan di jalan.", "Ojol ternyata juga mengurangi kendaraan di jalan."],
 "o-35": ["Tapi tidak semua orang di kota ini sedih.", "Tapi tidak semua orang di kota ini sedih."],
 "o-36": ["Pak Joko, ojek pangkalan. Dulu sepi, sekarang antre penumpang.", "Pak Joko, ojek pangkalan. Dulu sepi, sekarang antre penumpang."],
 "o-37": ["Tarifnya? Tawar-menawar, seperti dulu.", "Tarifnya? Tawar-menawar, seperti dulu."],
 "o-38": ["Sopir angkot dan bengkel dekat halte ikut ramai.", "Sopir angkot dan bengkel dekat halte ikut ramai."],
 "o-39": ["Warung di dekat kantor juga laris. Karyawan malas pesan antar, jadi jalan kaki.", "Warung di dekat kantor juga laris. Karyawan malas pesan antar, jadi jalan kaki."],
 "o-40": ["Libur sebulan, pemenangnya: yang lama tersingkir oleh aplikasi.", "Libur sebulan, pemenangnya: yang lama tersingkir oleh aplikasi."],
 "o-41": ["Sebulan berlalu. Kota B mulai beradaptasi.", "Sebulan berlalu. Kota Be mulai beradaptasi."],
 "o-42": ["Grup WA kompleks jadi \"aplikasi\" baru. Pesan, antar, bayar tunai.", "Grup we a kompleks jadi \"aplikasi\" baru. Pesan, antar, bayar tunai."],
 "o-43": ["Tapi ongkosnya tidak pasti, dan tidak ada yang menjamin keamanan.", "Tapi ongkosnya tidak pasti, dan tidak ada yang menjamin keamanan."],
 "o-44": ["Riset yang sama menyebut ojol ikut menekan inflasi.", "Riset yang sama menyebut ojol ikut menekan inflasi."],
 "o-45": ["Tanpanya, ongkos antar dan harga makanan jadi diam-diam naik.", "Tanpanya, ongkos antar dan harga makanan jadi diam-diam naik."],
 "o-46": ["Kota bisa beradaptasi. Yang paling lama pulih: dompet pekerja harian.", "Kota bisa beradaptasi. Yang paling lama pulih: dompet pekerja harian."],
 "o-47": ["Kembali ke shelter ojol di tengah kota.", "Kembali ke shelter ojol di tengah kota."],
 "o-48": ["Jadi, ojol itu apa?", "Jadi, ojol itu apa?"],
 "o-49": ["Bukan sekadar aplikasi. Ia jembatan antara yang butuh kerja dan yang butuh cepat.", "Bukan sekadar aplikasi. Ia jembatan antara yang butuh kerja dan yang butuh cepat."],
 "o-50": ["Tapi jembatan itu juga perlu dirawat: adil untuk driver, aman untuk penumpang.", "Tapi jembatan itu juga perlu dirawat: adil untuk driver, aman untuk penumpang."],
 "o-51": ["Kamu tim kota A, atau kota B? Tulis di kolom komentar.", "Kamu tim kota A, atau kota Be? Tulis di kolom komentar."]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', HIJAU = '#2f8a55';

// ---------- PETA KOTA (tampak atas): shelter ojol, warung Mak Ijah, kampus Nadia, halte, pangkalan Pak Joko ----------
const KOTA = {
  river: [[0, 22], [20, 30], [16, 46], [26, 58]],
  roads: [[0, 58, 192, 58], [64, 0, 64, 108], [136, 0, 136, 108], [0, 94, 192, 94]],
};
const T = { shelter: [100, 46], warung: [30, 44], kampus: [166, 40], halte: [154, 84], pangkalan: [40, 84] };
function kota(dx, s, ojol = true) {
  return [
    { sprite: 'shelter_top', x: 100 + dx, y: 52 },
    ...[90, 99, 108].map((x, i) => ({ id: `${s}oj${i}`, sprite: 'ojol_top', x: x + dx, y: 66, hidden: !ojol })),
    { sprite: 'warung_top', x: 32 + dx, y: 52 },
    { sprite: 'sekolah_top', x: 166 + dx, y: 52 },
    { sprite: 'halte_top', x: 154 + dx, y: 90 },
    { sprite: 'pangkalan_top', x: 40 + dx, y: 90 },
    ...[0, 1, 2, 3, 4].map(i => ({ id: `${s}mob${i}`, sprite: `mobil_top_${i % 3}`, x: 70 + i * 14 + dx, y: 61, depth: 4.4, hidden: true })),
    ...[10, 24, 78, 92, 106, 120, 150, 164, 178].map((x, i) => ({ sprite: `rumah_top_${i % 4}`, x: x + dx, y: 107 })),
    ...[[82, 14], [96, 14], [110, 14], [124, 14], [150, 14]].map(([x, y], i) => ({ sprite: `rumah_top_${(i + 2) % 4}`, x: x + dx, y })),
    ...[[50, 30], [76, 34], [124, 34], [186, 66], [8, 76], [76, 78], [118, 80], [186, 102]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => [
  { id: 'udin' + k, sprite: 'udin', x: 116 + dx, y: 56, scale: 0.75, tag: 'BANG UDIN', tagColor: HIJAU },
  { id: 'ijah' + k, sprite: 'ijah', x: 48 + dx, y: 56, scale: 0.75, tag: 'MAK IJAH', tagColor: '#7a3b8f' },
  { id: 'nadia' + k, sprite: 'nadia', x: 166 + dx, y: 56, scale: 0.75, tag: 'NADIA', tagColor: NAVY },
  { id: 'joko' + k, sprite: 'joko', x: 54 + dx, y: 92, scale: 0.75, tag: 'PAK JOKO', tagColor: '#ef7d57' },
];
const cam = (t, z, dx = 0) => ({ x: T[t][0] + dx, y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK_A = ['udin', 'warga', 'udin', 'warga2', 'girl', 'udin', 'boy'], WALK_B = ['warga', 'warga2', 'girl', 'boy', 'kid'];
function peta(steps, { split = true, c = { x: 100, y: 56, zoom: 1.2 }, bOjol = false, transition = 'clouds', n = [14, 14] } = {}) {
  const base = { transition, sky: 'map', map: KOTA, steps };
  return split ? { ...base, split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...kota(0, 'A'), ...kota(192, 'B', bOjol)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK_A, spritesB: WALK_B } }
    : { ...base, camera: c, props: kota(0, 'A'), actors: tokoh(0, 'A'), walkers: { n: n[0] + 4, sprites: WALK_A } };
}
// adegan dekat tampak samping (split A/B)
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, sky = 'day', clock } = {}) {
  return { transition: 'clouds', sky, split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const jalan = dx => [{ sprite: 'tree', x: 14 + dx }, { sprite: 'building3', x: 176 + dx, y: 90, scale: 1 }, { sprite: 'house', x: 156 + dx, scale: 0.9 }];
const SKOR = [['Penghasilan driver', 'A'], ['Warung', 'A'], ['Mobilitas', 'A'], ['Ojek pangkalan', 'B'], ['Harga', 'A']];
const skor = n => ({ at: 0.3, score: SKOR.slice(0, n), dur: 1300 });

const STORY = {
  title: 'Andaikan Ojol Libur Sebulan',
  audioDir: 'audio/ojol-libur',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Kota tanpa jaket hijau',
      scenes: [
        { ...peta([
          { together: [
            { camera: { x: 100, y: 56, zoom: 1 }, dur: 2600, ease: 'Cubic.easeOut' },
            C('o-01', [{ at: 'semua aplikasi', kw: 'SEMUA APLIKASI *OJOL*...' }, { at: 'libur', hide: 'Aoj0' }, { at: 'libur', hide: 'Aoj1' }, { at: 'libur', hide: 'Aoj2' },
              { at: 'sebulan', kw: 'LIBUR *SEBULAN*' }, { at: 'sebulan', stamp: 'LIBUR', at_: [0.5, 0.4] }]),
          ] },
          C('o-02', [{ at: 0, camera: cam('kampus', 2.2), dur: 700 }, { at: 'nadia', emote: 'nadiaA', icon: 'sweat', dur: 1100 }, { at: 'nadia', kw: 'NADIA *TELAT*' },
            { at: 'warung', camera: cam('warung', 2.2), dur: 700 }, { at: 'sepi', kw: 'WARUNG *SEPI*' }, { at: 'sepi', emote: 'ijahA', icon: 'question', dur: 1100 }]),
          C('o-03', [{ at: 0, camera: cam('pangkalan', 2.2), dur: 700 }, { at: 'kebanjiran', crowd: 'goto', side: 'left', x: 40, y: 98, spread: 10, frac: 0.6, rush: 2 },
            { at: 'kebanjiran', kw: 'PANGKALAN *RAMAI*' }, { at: 'penumpang', sticker: 'party', at_: Rt }]),
          { together: [{ camera: { x: 100, y: 56, zoom: 1 }, dur: 800 }, { mono: true }, C('o-04', [{ at: 'untung', kw: 'SIAPA *UNTUNG*?' }, { at: 'buntung', kw: 'SIAPA *BUNTUNG*?' }])] },
          { mono: false },
          { together: [{ title: 'ANDAIKAN', sub: 'Ojol libur sebulan', dark: true, size: 30, dur: 2000 }, C('o-05')] },
        ], { split: false, c: cam('shelter', 2.4), transition: undefined }), clock: 'HARI 1' },
        peta([
          C('o-06', [{ at: 'dua kota', kw: '*2* KOTA' }, { at: 'a, ojol', focus: 'left' }, { at: 'a, ojol', kw: 'A: OJOL *JALAN*' },
            { at: 'be,', focus: 'right' }, { at: 'be,', kw: 'B: OJOL *LIBUR*' }, { at: 'libur', hide: 'Boj0' }, { at: 'libur', hide: 'Boj1' }, { at: 'libur', hide: 'Boj2' },
            { at: 'libur', stamp: 'LIBUR', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
          { together: [{ focus: 'both' }, { wait: 500 }] },
        ], { bOjol: true, transition: 'cut' }),
      ],
    },
    // ================= BAB 2 — SKALA =================
    {
      id: 'bab-2', title: 'Seberapa besar ojol?',
      scenes: [
        peta([C('o-07', [{ at: 0, camera: { x: 100, y: 56, zoom: 1 }, dur: 1800 }, { at: 'skalanya', kw: 'LIHAT *SKALANYA*' }])], { split: false, c: cam('shelter', 2.2) }),
        {
          transition: 'clouds', sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: 96, y: 66, zoom: 1.2 },
          props: [{ sprite: 'building1', x: 20, y: 90 }, { sprite: 'building2', x: 44, y: 90 }, { sprite: 'building4', x: 150, y: 90 }, { sprite: 'building3', x: 176, y: 90 },
            { sprite: 'motor_park', x: 80, y: 98, scale: 1.2 }, { sprite: 'motor_park', x: 104, y: 98, scale: 1.2, flip: true }, { sprite: 'motor_park', x: 128, y: 98, scale: 1.2 },
            { id: 'koin', sprite: 'coins_pile', x: 96, y: 60, scale: 2.4, depth: 12, hidden: true }],
          actors: [{ id: 'u1', sprite: 'udin', x: 70, y: 100 }, { id: 'u2', sprite: 'udin', x: 116, y: 100, face: 'left' }, { id: 'u3', sprite: 'udin', x: 138, y: 100 }],
          steps: [
            C('o-08', [{ at: 'riset', kw: '*RISET* 2026' }, { at: 'riset', card: 'Riset INDEF–Paramadina (Jun 2026)', items: ['Ekosistem transportasi online', 'Kontribusi ke PDB', 'Lapangan kerja'], x: 96, y: 30, stagger: 300, dur: 0 }]),
            { clear: true },
            C('o-09', [{ at: 'lima ratus', pop: 'koin' }, { at: 'lima ratus', kw: '*Rp565 TRILIUN*' }, { at: 'triliun', sticker: 'money', at_: Rt }]),
            C('o-10', [{ at: 'dua koma', chart: 'PORSI EKONOMI (PDB)', bars: [['Ekosistem ojol', 2.4, GREEN]], max: 5, suffix: '%', place: 'right', y: 0.1, dur: 0 }, { at: 'dua koma', kw: '±*2,4%* PDB' }]),
            { clear: true },
            C('o-11', [{ at: 'lapangan', kw: 'LAPANGAN KERJA' }, { at: 'lima koma', kw: '±*5,5 JUTA* ORANG' }, { at: 'lima koma', emote: 'u1', icon: 'heart', dur: 1000 }]),
            C('o-12', [{ at: 'bukan cuma', kw: 'BUKAN CUMA *MOTOR & JAKET*' }, { at: 'urat nadi', kw: '*URAT NADI* KOTA', keepKw: true }], { punch: true }),
          ],
        },
      ],
    },
    // ================= BAB 3 — BANG UDIN =================
    {
      id: 'bab-3', title: 'Bang Udin, driver ojol',
      scenes: [
        peta([C('o-13', [...dua(0, cam('shelter', 2.2)), { at: 'paling dulu', kw: 'YANG *PALING DULU* MERASA' }, { at: 'merasakannya', glow: 'udinA', times: 2 }])]),
        dekat(dx => [...jalan(dx), { sprite: 'motor_gas_2', x: 76 + dx, y: 100, scale: 1.2 }, { id: (dx ? 'B' : 'A') + 'hp', sprite: dx ? 'phone_broken' : 'phone', x: 100 + dx, y: 74, scale: 1.6, depth: 14, hidden: true }],
          (dx, k) => [{ id: 'udin' + k, sprite: 'udin', x: 96 + dx, y: 101, tag: 'BANG UDIN', tagColor: HIJAU }], [
          C('o-14', [{ at: 'kenalin', kw: '*BANG UDIN*, DRIVER' }, { at: 'subuh', clock: 'JAM 05.00' }, { at: 'malam', clock: 'JAM 22.00' }]),
          C('o-15', [{ at: 'potongan', kw: 'POTONGAN *MAKS 8%*' }, { at: 'potongan', card: 'Perpres 27/2026', items: ['Potongan aplikasi maks 8%', 'Berlaku 1 Juli 2026'], x: 96, y: 26, stagger: 400, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'left' }, C('o-16', [{ at: 0, pop: 'Ahp' }, { at: 'membaik', kw: 'A: PENGHASILAN *MEMBAIK*' }, { at: 'membaik', emote: 'udinA', icon: 'heart', dur: 1100 }])] },
          { together: [{ focus: 'right' }, C('o-17', [{ at: 0, pop: 'Bhp' }, { at: 'mati', kw: 'APLIKASI *MATI*' }, { at: 'nol', tag: 'udinB', text: 'PENGHASILAN Rp0', color: RED }, { at: 'nol', emote: 'udinB', icon: 'sweat', dur: 1200 }])] },
          { together: [C('o-18', [{ at: 'cicilan', kw: 'CICILAN *TETAP JALAN*' }]),
            { receipt: 'BANG UDIN · HARI 10 (ilustrasi)', stagger: 380, lines: [['Order hari ini', '0'], ['Cicilan motor', 'Rp45.000/hr'], ['Uang sekolah', 'Rp20.000/hr']], total: ['SALDO', 'MINUS'], note: 'ilustrasi · simulasi' }] },
          { clear: true },
          C('o-19', [{ at: 'mangkal', move: 'udinB', to: 70 + 192, speed: 26 }, { at: 'mangkal', kw: 'MANGKAL *MANUAL*' }, { at: 'diambil', dialog: 'udinB', text: 'Penumpangnya sudah ke pangkalan...', dur: 600 }]),
          { together: [{ focus: 'both' }, C('o-20', [skor(1), { at: 'satu dapur', kw: 'SATU *DAPUR* BERHENTI NGEBUL', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 1' }),
      ],
    },
    // ================= BAB 4 — MAK IJAH =================
    {
      id: 'bab-4', title: 'Warung Mak Ijah sepi',
      scenes: [
        peta([C('o-21', [...dua(0, cam('warung', 2.2), 1500), { at: 'satu warung', kw: 'BERHENTI DI *SATU WARUNG*' }, { at: 'warung', emote: 'ijahA', icon: 'heart', dur: 1000 }])], { c: cam('shelter', 2) }),
        dekat(dx => [{ sprite: 'warung', x: 84 + dx, y: 92, scale: 1.05, depth: 4 }, ...jalan(dx).slice(0, 1),
          ...[0, 1, 2].map(i => ({ id: `${dx ? 'B' : 'A'}f${i}`, sprite: 'food', x: 64 + i * 12 + dx, y: 82, scale: 1.3, depth: 12, hidden: true })),
          { id: (dx ? 'B' : 'A') + 'sayur', sprite: 'basket_full', x: 128 + dx, y: 101, scale: 1.4, depth: 9 },
          { id: (dx ? 'B' : 'A') + 'wa', sprite: 'phone', x: 140 + dx, y: 74, scale: 1.4, depth: 14, hidden: true }],
          (dx, k) => [{ id: 'ijah' + k, sprite: 'ijah', x: 108 + dx, y: 101, tag: 'MAK IJAH', tagColor: '#7a3b8f' }, { id: 'cucu' + k, sprite: 'kid', x: -20 + dx, y: 101, hidden: true }], [
          C('o-22', [{ at: 'mak ijah', kw: 'WARUNG PECEL *MAK IJAH*' }, { at: 'separuh', pop: 'Af0' }, { at: 'separuh', pop: 'Bf0' }, { at: 'aplikasi', pop: 'Af1' }, { at: 'aplikasi', pop: 'Bf1' }]),
          C('o-23', [{ at: 'separuh omzet', chart: 'OMZET WARUNG MITRA (Alvara)', bars: [['Dari pesan-antar', 57, GREEN], ['Makan di tempat', 43, '#41a6f6']], max: 70, suffix: '%', place: 'right', y: 0.1, dur: 0 }, { at: 'separuh', kw: '±*57%* OMZET' }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('o-24', [{ at: 'hilang', hide: 'Bf0' }, { at: 'hilang', hide: 'Bf1' }, { at: 'layu', swap: 'Bsayur', to: 'basket_half' }, { at: 'layu', kw: 'SAYUR *LAYU*' }, { at: 'layu', emote: 'ijahB', icon: 'sweat', dur: 1100 }])] },
          C('o-25', [{ at: 'tulisan', pop: 'Bwa' }, { at: 'tulisan', label: 'PESAN VIA WA', x: R(140), y: 58, bg: GREEN, size: 12, dur: 0 }, { at: 'antar sendiri', kw: 'ANTAR *SENDIRI*' }]),
          C('o-26', [{ at: 'cucunya', enter: 'cucuB', from: 'right', to: R(84), speed: 40 }, { at: 'cucunya', kw: 'KURIR *DADAKAN*' }, { at: 'sepeda', exit: 'cucuB', to: 'right', speed: 40 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('o-27', [skor(2), { at: 'warung kecil', kw: 'WARUNG KECIL *PALING CEPAT LAPAR*', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 5' }),
      ],
    },
    // ================= BAB 5 — NADIA & JALANAN =================
    {
      id: 'bab-5', title: 'Nadia dan jalanan macet',
      scenes: [
        peta([
          C('o-28', [...dua(0, cam('kampus', 2.2), 1500), { at: 'kampus', kw: 'KAMPUS *NADIA*' }, { at: 'nadia', glow: 'nadiaA', times: 2 }]),
          C('o-29', [{ at: 'tidak punya', kw: 'TIDAK PUNYA *MOTOR*' }, { at: 'lima menit', label: '5 MENIT SAMPAI', x: 166, y: 30, bg: GREEN, size: 11, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('o-30', [{ at: 'jalan kaki', move: 'nadiaB', to: R(154), speed: 18 }, { at: 'halte', camera: { ...cam('halte', 2), x: R(154) }, side: 'right', dur: 900 },
            { at: 'angkot', crowd: 'goto', side: 'right', x: R(154), y: 96, spread: 10, frac: 0.7, rush: 2 }, { at: 'penuh', kw: 'ANGKOT *PENUH*' }])] },
          C('o-31', [{ at: 0, camera: { x: R(100), y: 58, zoom: 1.6 }, side: 'right', dur: 700 }, ...[0, 1, 2, 3, 4].map(i => ({ at: 0.15 + i * 0.12, pop: 'Bmob' + i })), { at: 'mobil', kw: 'BAWA *MOBIL & MOTOR* SENDIRI' }]),
          C('o-32', [{ at: 'padat', kw: 'JALANAN *MACET*' }, { at: 'padat', label: 'MACET!', x: R(100), y: 48, bg: RED, size: 14, dur: 0 }, { at: 'parkiran', shake: 200 }]),
          C('o-33', [{ at: 'telat sekali', clock: 'HARI', from: 6, to: 20, dur: 1400 }, { at: 'telat', emote: 'nadiaB', icon: 'sweat', dur: 1300 }, { at: 'kehadiran', tag: 'nadiaB', text: 'KEHADIRAN TURUN', color: RED }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('o-34', [skor(3), { at: 'mengurangi', kw: 'OJOL *KURANGI KENDARAAN*', keepKw: true }], { punch: true })] },
        ], { c: cam('warung', 2), n: [14, 16] }),
      ],
    },
    // ================= BAB 6 — TWIST: PANGKALAN =================
    {
      id: 'bab-6', title: 'Twist: yang justru untung',
      scenes: [
        peta([C('o-35', [...dua(0, cam('pangkalan', 2.2), 1500), { at: 'tidak semua', kw: 'TIDAK SEMUA *SEDIH*' }, { at: 'sedih', emote: 'jokoB', icon: 'note', dur: 1100 }])], { c: cam('halte', 1.8) }),
        dekat(dx => [...jalan(dx), { sprite: 'motor_gas_1', x: 80 + dx, y: 100, scale: 1.2 }, { sprite: 'house', x: 44 + dx, scale: 1 }],
          (dx, k) => [{ id: 'joko' + k, sprite: 'joko', x: 100 + dx, y: 101, tag: 'PAK JOKO', tagColor: '#ef7d57' },
            ...[0, 1, 2].map(i => ({ id: `p${i}${k}`, sprite: ['warga', 'girl', 'nadia'][i], x: 160 + i * 12 + dx, y: 101, face: 'left', hidden: !dx }))], [
          { together: [{ focus: 'right' }, C('o-36', [{ at: 'dulu sepi', kw: 'DULU *SEPI*' }, { at: 'sekarang', enter: 'p0B', from: 'right', to: R(118), speed: 40 }, { at: 'antre', enter: 'p1B', from: 'right', to: R(130), speed: 40 },
            { at: 'penumpang', kw: 'PAK JOKO *PANEN*' }, { at: 'penumpang', sticker: 'party', at_: Rt }])] },
          C('o-37', [{ at: 'tarifnya', kw: 'TARIF *TAWAR-MENAWAR*' }, { at: 'tawar', dialog: 'jokoB', text: 'Ke kampus? Dua puluh ribu, Neng.', dur: 500 }]),
          C('o-38', [{ at: 'angkot', kw: 'ANGKOT & BENGKEL *RAMAI*' }, { at: 'bengkel', label: 'RAMAI!', x: R(80), y: 66, bg: GREEN, size: 13, dur: 0 }]),
          C('o-39', [{ at: 'warung', kw: 'WARUNG DEKAT KANTOR *LARIS*' }, { at: 'jalan kaki', exit: 'p0B', to: 'right', speed: 30 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('o-40', [skor(4), { at: 'pemenangnya', kw: 'PEMENANGNYA: *YANG LAMA TERSINGKIR*', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 20' }),
      ],
    },
    // ================= BAB 7 — HARI KE-30 =================
    {
      id: 'bab-7', title: 'Hari ke-30',
      scenes: [
        peta([
          C('o-41', [{ at: 'sebulan', clock: 'HARI', from: 21, to: 30, dur: 1200 }, { at: 'beradaptasi', focus: 'right' }, { at: 'beradaptasi', kw: 'KOTA B *BERADAPTASI*' }]),
          C('o-42', [{ at: 'grup', label: 'GRUP WA KOMPLEKS', x: R(100), y: 30, bg: GREEN, size: 12, dur: 0 }, { at: 'pesan, antar', crowd: 'goto', side: 'right', x: R(100), y: 74, spread: 18, frac: 0.5 }, { at: 'tunai', kw: 'PESAN · ANTAR · *TUNAI*' }]),
          C('o-43', [{ at: 'tidak pasti', kw: 'ONGKOS *TIDAK PASTI*' }, { at: 'keamanan', sticker: 'sus', at_: Rt }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('o-44', [{ at: 'riset', card: 'Riset INDEF–Paramadina', items: ['Ekosistem ojol ikut', 'menekan inflasi ±0,16%'], x: 96, y: 26, stagger: 400, dur: 0 }, { at: 'inflasi', kw: 'IKUT *MENEKAN INFLASI*' }])] },
          { clear: true },
          C('o-45', [{ at: 'ongkos antar', focus: 'right' }, { at: 'naik', label: 'HARGA NAIK (ilustrasi)', x: R(32), y: 30, bg: RED, size: 12, dur: 0 }, { at: 'diam-diam', kw: 'HARGA *DIAM-DIAM NAIK*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('o-46', [skor(5), { at: 'dompet', kw: 'PALING LAMA PULIH: *DOMPET PEKERJA HARIAN*', keepKw: true }], { punch: true })] },
        ], { c: { x: 100, y: 56, zoom: 1.1 }, n: [14, 12] }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'bab-8', title: 'Jembatan bernama ojol',
      scenes: [
        { ...peta([
          C('o-47', [{ at: 0, camera: cam('shelter', 2.4), dur: 1400 }, { at: 'shelter', kw: 'KEMBALI KE *SHELTER*' }, { at: 'shelter', glow: 'udinA', times: 2 }]),
          C('o-48', [{ at: 0, kw: 'OJOL *ITU APA?*' }]),
          C('o-49', [{ at: 0, camera: { x: 100, y: 56, zoom: 1 }, dur: 2500 }, { at: 'jembatan', kw: '*JEMBATAN* KERJA & CEPAT' }]),
          C('o-50', [{ at: 'dirawat', kw: 'PERLU *DIRAWAT*' }, { at: 'adil', kw: '*ADIL* & *AMAN*', keepKw: true }]),
          { together: [{ clear: true }, { score: SKOR, head: 'SKOR AKHIR', dur: 1200 }] },
          C('o-51', [{ at: 'kamu', kw: 'KOTA *A* ATAU *B*?' }, { at: 'tulis', label: 'LIKE', x: 66, y: 24, bg: '#3b5dc9', dur: 0 }, { at: 'tulis', label: 'KOMEN', x: 100, y: 24, bg: GREEN, dur: 0 },
            { at: 'tulis', label: 'SUBSCRIBE', x: 140, y: 24, bg: '#e43b44', dur: 0 }, { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true }]),
          { wait: 1200 },
        ], { split: false, c: { x: 100, y: 56, zoom: 1.2 } }), clock: 'HARI 30' },
      ],
    },
  ],
};
