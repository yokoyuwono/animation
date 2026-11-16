// ============================================================
//  "PAYLATER VS MENABUNG: Simulasi 5 Tahun"  — gaya simulasi
//  Uji coba 1 menit: Hook + Pembukaan + Babak 1–2 (+ cliffhanger)
//
//  Dunia tampak atas: kamar kos Dimas (kiri, x≈50) dan Raka (kanan, x≈142).
//  Narasi tampil sebagai KATA KUNCI (captionStyle: 'keyword') yang muncul
//  pada kata yang diucapkan lewat `cues: [{ at: 'kata', kw: 'TEKS *SOROTAN*' }]`.
//  Angka adalah ilustrasi.
// ============================================================

const DIMAS_X = 50, RAKA_X = 142;
const L = [0.28, 0.3], Rt = [0.74, 0.3]; // posisi stiker sisi kiri/kanan

function kosWorld(extra = []) {
  return [
    { sprite: 'room', x: DIMAS_X, y: 88, depth: 2 },
    { sprite: 'room', x: RAKA_X, y: 88, depth: 2 },
    { id: 'hp', sprite: 'phone', x: 72, y: 47, depth: 6, hidden: true },
    { id: 'sepatu', sprite: 'shoes', x: 26, y: 84, depth: 6, hidden: true },
    { id: 'tiket', sprite: 'ticket', x: 68, y: 74, depth: 6, hidden: true },
    { id: 'makan', sprite: 'food', x: 30, y: 72, depth: 6, hidden: true },
    { id: 'appA', sprite: 'app_a', x: 42, y: 57, depth: 7, hidden: true },
    { id: 'appB', sprite: 'app_b', x: 51, y: 55, depth: 7, hidden: true },
    { id: 'appC', sprite: 'app_c', x: 60, y: 57, depth: 7, hidden: true },
    { id: 'jar', sprite: 'jar_0', x: 164, y: 82, scale: 1.4, depth: 6 },
    ...extra,
  ];
}

const DIMAS = { id: 'dimas', sprite: 'dimas', x: DIMAS_X, y: 80 };
const RAKA = { id: 'raka', sprite: 'raka', x: RAKA_X, y: 80, face: 'left' };

const STORY = {
  title: 'Paylater vs Menabung',
  audioDir: 'audio/paylater',
  captionStyle: 'keyword',

  chapters: [
    {
      id: 'uji-1-menit',
      title: 'Gaji sama, nasib beda (uji coba)',
      scenes: [
        // ================= HOOK KILAS MAJU =================
        {
          sky: 'indoor', fit: 'width',
          camera: { x: 96, y: 60, zoom: 1.8 },
          clock: 'BULAN 1',
          props: kosWorld([
            { id: 'tagihan', sprite: 'bills', x: 30, y: 74, scale: 1.6, depth: 7, hidden: true },
            { id: 'hprusak', sprite: 'phone_broken', x: 70, y: 66, scale: 1.4, depth: 8, hidden: true },
            { id: 'rumah', sprite: 'house', x: RAKA_X, y: 90, scale: 2.4, depth: 9, hidden: true },
          ]),
          actors: [DIMAS, RAKA],
          steps: [
            { together: [
              { camera: { x: 96, y: 60, zoom: 1 }, dur: 2400, ease: 'Cubic.easeOut' },
              { caption: 'Dua orang. Gaji sama persis.', vo: 'p-01', cues: [{ at: 'gaji', kw: 'GAJI *SAMA*' }] },
            ] },
            { caption: 'Lima tahun kemudian, yang satu punya rumah... yang satu masih bayar HP yang sudah rusak.', vo: 'p-02',
              speak: 'Lima tahun kemudian, yang satu punya rumah... yang satu masih bayar ha pe yang sudah rusak.',
              cues: [
                { at: 'lima tahun', clock: 'BULAN', from: 2, to: 60, dur: 800 },
                { at: 'lima tahun', pop: 'sepatu' }, { at: 'tahun kemudian', pop: 'tiket' }, { at: 'kemudian', pop: 'makan' },
                { at: 'punya rumah', kw: 'PUNYA *RUMAH*' }, { at: 'punya rumah', pop: 'rumah' }, { at: 'rumah', sticker: 'party', at_: Rt }, { at: 'masih bayar', clock: 'TAHUN 5' },
                { at: 'masih bayar', kw: 'MASIH BAYAR *HP RUSAK*' }, { at: 'masih bayar', pop: 'tagihan' }, { at: 'sudah rusak', pop: 'hprusak' },
              ] },
            { together: [
              { mono: true },
              { sticker: 'sus', at: [0.5, 0.36], size: 1.3, life: 1400 },
              { caption: 'Kok bisa?', vo: 'p-03', cues: [{ at: 0, kw: 'KOK *BISA?*' }] },
            ] },
          ],
        },

        // ================= PEMBUKAAN =================
        {
          transition: 'cut',
          sky: 'indoor', fit: 'width',
          camera: { x: 96, y: 60, zoom: 1 },
          note: 'Angka ilustrasi · bukan nasihat keuangan',
          props: kosWorld(),
          actors: [DIMAS, RAKA],
          steps: [
            { together: [
              { title: 'PAYLATER VS MENABUNG', sub: 'simulasi 5 tahun', dark: false, size: 26, dur: 1900 },
              { caption: 'Ini simulasi lima tahun: paylater lawan menabung.', vo: 'p-04' },
            ] },
            { caption: 'Kenalin, Dimas dan Raka. Sama-sama dua puluh tiga tahun, gaji lima juta, ngekos di Jakarta.', vo: 'p-05',
              cues: [
                { at: 'dimas', camera: { x: DIMAS_X, y: 66, zoom: 2.2 }, dur: 600 },
                { at: 'dimas', tag: 'dimas', text: 'DIMAS' }, { at: 'dimas', kw: '*DIMAS*' },
                { at: 'raka', camera: { x: RAKA_X, y: 66, zoom: 2.2 }, dur: 600 },
                { at: 'raka', tag: 'raka', text: 'RAKA' }, { at: 'raka', kw: '*RAKA*' },
                { at: 'sama-sama', camera: { x: 96, y: 60, zoom: 1 }, dur: 700 },
                { at: 'gaji', kw: 'GAJI *5 JUTA*' },
              ] },
            { together: [
              { card: 'Per bulan', items: ['Gaji     Rp5.000.000', 'Kos     -Rp1.500.000', 'Hidup   -Rp2.500.000', 'SISA    Rp1.000.000'], x: 96, y: 40, stagger: 160, dur: 0 },
              { caption: 'Setelah bayar kos dan makan, sisanya satu juta per bulan.', vo: 'p-06', cues: [{ at: 'sisanya', kw: 'SISA *1 JUTA*' }] },
            ] },
            { clear: true },

            // ================= BABAK 1 — BULAN 1 =================
            { clock: 'BULAN 1' },
            { caption: 'Bulan pertama. Dimas lihat HP impiannya. Empat juta.', vo: 'p-07',
              speak: 'Bulan pertama. Dimas lihat ha pe impiannya. Empat juta.',
              cues: [
                { at: 'dimas', camera: { x: 66, y: 56, zoom: 2.6 }, dur: 700 },
                { at: 'impiannya', pop: 'hp' },
                { at: 'empat juta', kw: '*EMPAT JUTA*' },
              ] },
            { caption: 'Uangnya belum ada. Tapi ada tombol ajaib: bayar nanti.', vo: 'p-08',
              cues: [
                { at: 'tombol', kw: 'TOMBOL *AJAIB*' },
                { at: 'bayar nanti', kw: '*BAYAR NANTI*' }, { at: 'bayar nanti', sticker: 'smirk', at_: L },
                { at: 'bayar nanti', label: 'BAYAR NANTI', x: 72, y: 38, bg: '#ff77a8' },
              ] },
            { caption: 'Cicilan dua belas kali. Cuma empat ratus ribuan sebulan. Ringan, kan?', vo: 'p-09',
              cues: [
                { at: 'cuma', kw: '*CUMA* 400 RIBU' },
                { at: 'ringan', kw: 'RINGAN, *KAN?*' },
                { at: 'ringan', tag: 'dimas', text: 'UTANG Rp4,8 JT', color: '#b13e53' },
              ] },
            { clear: true },
            { caption: 'Raka juga pengen HP baru. Tapi dia pilih nabung dulu.', vo: 'p-10',
              speak: 'Raka juga pengen ha pe baru. Tapi dia pilih nabung dulu.',
              cues: [
                { at: 'raka', camera: { x: 154, y: 66, zoom: 2.6 }, dur: 800 },
                { at: 'nabung', kw: '*NABUNG* DULU' },
                { at: 'nabung', swap: 'jar', to: 'jar_1' },
                { at: 'dulu', tag: 'raka', text: 'TABUNGAN Rp1 JT', color: '#257179' },
              ] },
            { caption: 'Bulan pertama, siapa yang kelihatan lebih sukses? Jelas Dimas.', vo: 'p-11',
              cues: [
                { at: 'bulan pertama', camera: { x: 96, y: 60, zoom: 1 }, dur: 700 },
                { at: 'siapa', chart: 'SKOR GAYA HIDUP', bars: [['Dimas', 90, '#ef7d57'], ['Raka', 20, '#38b764']], max: 100, place: 'right', y: 0.08, dur: 0 },
                { at: 'sukses', kw: 'LEBIH *SUKSES?*' },
                { at: 'jelas', kw: 'JELAS *DIMAS*' }, { at: 'jelas', sticker: 'cool', at_: L },
              ] },
            { clear: true },

            // ================= BABAK 2 — BULAN 6 =================
            { caption: 'Masalahnya, tombol itu terlalu gampang.', vo: 'p-12',
              cues: [
                { at: 0, camera: { x: DIMAS_X, y: 64, zoom: 2 }, dur: 800 },
                { at: 'terlalu', kw: 'TERLALU *GAMPANG*' },
              ] },
            { caption: 'Sepatu, bayar nanti. Tiket konser, bayar nanti. Makan malam, bayar nanti.', vo: 'p-13',
              cues: [
                { at: 'sepatu', kw: '*SEPATU*' }, { at: 'sepatu', pop: 'sepatu' },
                { at: 'tiket', kw: '*KONSER*' }, { at: 'tiket', pop: 'tiket' },
                { at: 'makan', kw: '*MAKAN*' }, { at: 'makan', pop: 'makan' },
                { at: 'makan malam, bayar', sticker: 'money', at_: L },
              ] },
            { together: [
              { clock: 'BULAN', from: 2, to: 6, dur: 1600 },
              { swap: 'jar', to: 'jar_2', dur: 0 },
              { camera: { x: 96, y: 60, zoom: 1.2 }, dur: 900 },
            ] },
            { caption: 'Enam bulan kemudian, Dimas punya cicilan di tiga aplikasi.', vo: 'p-14',
              cues: [
                { at: 'dimas', camera: { x: DIMAS_X, y: 64, zoom: 2.2 }, dur: 700 },
                { at: 'tiga', kw: '*3* APLIKASI' },
                { at: 'tiga', pop: 'appA' }, { at: 'aplikasi', pop: 'appB' }, { at: 0.95, pop: 'appC' },
              ] },
            { caption: 'Totalnya satu koma dua juta per bulan. Lebih besar dari sisa gajinya.', vo: 'p-15',
              cues: [
                { at: 'satu koma', kw: '*1,2 JUTA* / BULAN' },
                { at: 'satu koma', chart: 'PER BULAN (ribu Rp)', bars: [['Sisa gaji', 1000, '#41a6f6'], ['Cicilan Dimas', 1200, '#e43b44']], max: 1300, place: 'right', y: 0.08, dur: 0 },
                { at: 'lebih besar', kw: 'LEBIH *BESAR*' }, { at: 'lebih besar', sticker: 'sweat', at_: L },
                { at: 'lebih besar', tag: 'dimas', text: 'UTANG Rp7,1 JT', color: '#b13e53' },
              ] },
            { clear: true },
            { caption: 'Sementara Raka? Tabungannya sudah enam juta. Itu dana daruratnya.', vo: 'p-16',
              cues: [
                { at: 0, camera: { x: 154, y: 66, zoom: 2.4 }, dur: 800 },
                { at: 'enam juta', kw: '*6 JUTA*' }, { at: 'enam juta', swap: 'jar', to: 'jar_4' },
                { at: 'enam juta', tag: 'raka', text: 'TABUNGAN Rp6 JT', color: '#257179' },
                { at: 'dana darurat', kw: 'DANA *DARURAT*' },
              ] },
            { caption: 'Dan skornya mulai berbalik.', vo: 'p-17',
              cues: [
                { at: 0, camera: { x: 96, y: 60, zoom: 1 }, dur: 700 },
                { at: 'skornya', chart: 'SKOR BULAN 6 (juta Rp)', bars: [['Utang Dimas', 7.1, '#e43b44'], ['Tabungan Raka', 6, '#38b764']], max: 8, suffix: ' jt', place: 'right', y: 0.08, dur: 0 },
                { at: 'berbalik', kw: 'MULAI *BERBALIK*' },
              ] },
            { clear: true },
            { together: [
              { mono: true },
              { caption: 'Padahal ini baru bulan keenam. Tahun kelima? Jauh lebih parah.', vo: 'p-18', punch: true,
                cues: [
                  { at: 'tahun kelima', clock: 'TAHUN 5 ...' },
                  { at: 'tahun kelima', kw: 'TAHUN *KELIMA?*' },
                  { at: 'jauh', kw: 'JAUH LEBIH *PARAH*' }, { at: 'jauh', sticker: 'shock', at_: [0.5, 0.34] },
                ] },
            ] },
          ],
        },
      ],
    },
  ],
};
