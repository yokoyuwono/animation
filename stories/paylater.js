// ============================================================
//  "PAYLATER VS MENABUNG: Simulasi 5 Tahun"  — gaya simulasi
//  Bab 1 = Hook + Pembukaan + Babak 1–2, Bab 2–4 = Babak 3–5,
//  Bab 5 = Bagian 2 (penjelasan), Bab 6 = penutup. Tiap bab bisa jadi short.
//
//  Dunia tampak atas: kamar kos Dimas (kiri, x≈50) dan Raka (kanan, x≈142).
//  Narasi tampil sebagai KATA KUNCI (captionStyle: 'keyword') yang muncul
//  pada kata yang diucapkan lewat `cues: [{ at: 'kata', kw: 'TEKS *SOROTAN*' }]`.
//  Angka adalah ilustrasi.
// ============================================================

// Kondisi dunia setelah bulan 6: barang Dimas sudah ada, celengan Raka penuh
function kosLater(extra = []) {
  return kosWorld(extra).map(p => (p.hidden && ['hp', 'sepatu', 'tiket', 'makan', 'appA', 'appB', 'appC'].includes(p.id)) ? { ...p, hidden: false }
    : p.id === 'jar' ? { ...p, sprite: 'jar_4' } : p);
}

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
      id: 'bab-1',
      title: 'Gaji sama, nasib beda',
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

    // ======================================================
    // BAB 2 — TAHUN 1: gali lubang tutup lubang
    // ======================================================
    {
      id: 'bab-2',
      title: 'Gali lubang tutup lubang',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 60, zoom: 1 },
        clock: 'BULAN 6',
        note: 'Angka ilustrasi · bukan nasihat keuangan',
        props: kosLater([
          { id: 'kalender', sprite: 'calendar', x: 26, y: 50, scale: 1.2, depth: 6, hidden: true },
          { id: 'tagihan', sprite: 'bills', x: 66, y: 86, scale: 1.4, depth: 7, hidden: true },
          { id: 'appD', sprite: 'app_d', x: 69, y: 57, depth: 7, hidden: true },
          { id: 'lubang1', sprite: 'hole', x: 30, y: 86, depth: 5, hidden: true },
          { id: 'lubang2', sprite: 'hole', x: 46, y: 90, depth: 5, hidden: true },
          { id: 'lubang3', sprite: 'hole', x: 66, y: 84, depth: 5, hidden: true },
          { id: 'tanah', sprite: 'dirt', x: 38, y: 84, depth: 6, hidden: true },
          { id: 'tunas', sprite: 'sprout_0', x: 124, y: 82, scale: 1.4, depth: 6, hidden: true },
        ]),
        actors: [{ ...DIMAS, tag: 'UTANG Rp7,1 JT', tagColor: '#b13e53' }, { ...RAKA, tag: 'TABUNGAN Rp6 JT', tagColor: '#257179' }],
        steps: [
          { caption: 'Tahun pertama. Karena cicilan lebih besar dari sisa gaji, Dimas mulai telat bayar.', vo: 'p-19',
            cues: [
              { at: 0, clock: 'BULAN', from: 7, to: 12, dur: 900 },
              { at: 'karena', clock: 'TAHUN 1' },
              { at: 'karena', camera: { x: DIMAS_X, y: 64, zoom: 2.1 }, dur: 800 },
              { at: 'telat', kw: 'MULAI *TELAT*' }, { at: 'telat', pop: 'kalender' },
              { at: 'telat bayar', swap: 'kalender', to: 'calendar_x' },
            ] },
          { caption: 'Telat berarti denda. Denda bikin tagihan makin besar.', vo: 'p-20',
            cues: [
              { at: 'denda', kw: '*DENDA*' }, { at: 'denda', pop: 'tagihan' },
              { at: 'makin besar', kw: 'MAKIN *BESAR*' }, { at: 'makin besar', tag: 'dimas', text: 'UTANG Rp8,4 JT', color: '#b13e53' },
            ] },
          { caption: 'Lalu Dimas melakukan hal paling berbahaya: pinjam online, untuk menutup paylater.', vo: 'p-21',
            cues: [
              { at: 'paling berbahaya', kw: 'PALING *BERBAHAYA*' }, { at: 'paling berbahaya', sticker: 'shock', at_: L },
              { at: 'pinjam online', kw: '*PINJOL*' }, { at: 'pinjam online', pop: 'appD' },
              { at: 'menutup', kw: 'BUAT *TUTUP PAYLATER*' },
            ] },
          { caption: 'Gali lubang, tutup lubang.', vo: 'p-22',
            cues: [
              { at: 0, kw: '*GALI LUBANG*' }, { at: 0, pop: 'lubang1' }, { at: 0.2, pop: 'tanah' }, { at: 0.35, pop: 'lubang2' },
              { at: 'tutup', kw: 'GALI LUBANG, *TUTUP LUBANG*' }, { at: 'tutup', pop: 'lubang3' }, { at: 'tutup', sticker: 'dizzy', at_: L },
            ] },
          { caption: 'HP-nya bunyi terus. Bukan chat dari teman. Tagihan.', vo: 'p-23', speak: 'Ha pe-nya bunyi terus. Bukan chat dari teman. Tagihan.',
            cues: [
              { at: 0, camera: { x: 70, y: 52, zoom: 2.8 }, dur: 700 },
              { at: 'bunyi', glow: 'hp', times: 4 }, { at: 'bunyi', shake: 300 },
              { at: 'bunyi', label: 'TAGIHAN!', x: 60, y: 36, bg: '#e43b44', dur: 0 },
              { at: 'bukan chat', label: 'JATUH TEMPO!', x: 82, y: 32, bg: '#e43b44', dur: 0 },
              { at: 'tagihan.', kw: '*TAGIHAN*' }, { at: 'tagihan.', label: 'DENDA!', x: 70, y: 28, bg: '#b13e53', dur: 0 },
              { at: 'tagihan.', tag: 'dimas', text: 'UTANG Rp11 JT', color: '#b13e53' },
            ] },
          { clear: true },
          { caption: 'Raka? Mulai investasi kecil-kecilan dari tabungannya.', vo: 'p-24',
            cues: [
              { at: 0, camera: { x: 150, y: 66, zoom: 2.4 }, dur: 800 },
              { at: 'investasi', kw: 'INVESTASI *KECIL*' }, { at: 'investasi', pop: 'tunas' },
              { at: 'kecil-kecilan', swap: 'tunas', to: 'sprout_1' },
              { at: 'tabungannya', swap: 'tunas', to: 'sprout_2' }, { at: 'tabungannya', tag: 'raka', text: 'TABUNGAN Rp12 JT', color: '#257179' },
            ] },
        ],
      }],
    },

    // ======================================================
    // BAB 3 — TAHUN 3: musibah & ditolak
    // ======================================================
    {
      id: 'bab-3',
      title: 'Saat musibah datang',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 62, zoom: 1 },
        clock: 'TAHUN 1',
        note: 'Angka ilustrasi · bukan nasihat keuangan',
        props: kosLater([
          { id: 'motorD', sprite: 'motor_park', x: 30, y: 104, depth: 8, smoke: { dx: -9, dy: -5, dark: true, every: 160, on: false } },
          { id: 'motorR', sprite: 'motor_park', x: 162, y: 104, depth: 8, smoke: { dx: -9, dy: -5, dark: true, every: 160, on: false } },
          { id: 'tunas', sprite: 'sprout_2', x: 124, y: 82, scale: 1.4, depth: 6 },
          { id: 'arsip', sprite: 'cabinet', x: 96, y: 74, scale: 1.3, depth: 6, hidden: true },
        ]),
        actors: [
          { ...DIMAS, tag: 'UTANG Rp11 JT', tagColor: '#b13e53' }, { ...RAKA, tag: 'TABUNGAN Rp12 JT', tagColor: '#257179' },
          { id: 'ayah', sprite: 'grandpa', x: 34, y: 82, hidden: true },
        ],
        steps: [
          { caption: 'Tahun ketiga. Musibah datang ke dua-duanya: motor rusak, butuh tiga juta.', vo: 'p-25',
            cues: [
              { at: 0, clock: 'TAHUN', from: 2, to: 3, dur: 700 },
              { at: 'musibah', camera: { x: 96, y: 78, zoom: 1.3 }, dur: 700 },
              { at: 'motor rusak', kw: 'MOTOR *RUSAK*' }, { at: 'motor rusak', smoke: 'motorD' }, { at: 'motor rusak', smoke: 'motorR' },
              { at: 'butuh', kw: 'BUTUH *3 JUTA*' },
            ] },
          { caption: 'Raka pakai dana darurat. Selesai dalam sehari.', vo: 'p-26',
            cues: [
              { at: 0, camera: { x: 156, y: 80, zoom: 2.2 }, dur: 700 },
              { at: 'dana darurat', kw: 'DANA *DARURAT*' },
              { at: 'selesai', smoke: 'motorR', on: false }, { at: 'selesai', kw: '*BERES* SEHARI' }, { at: 'selesai', sticker: 'cool', at_: Rt },
              { at: 'selesai', tag: 'raka', text: 'TABUNGAN Rp9 JT', color: '#257179' },
            ] },
          { caption: 'Dimas coba pinjam lagi. Ditolak.', vo: 'p-27',
            cues: [
              { at: 0, camera: { x: 40, y: 80, zoom: 2.2 }, dur: 700 },
              { at: 'pinjam lagi', kw: 'PINJAM *LAGI*' },
              { at: 'ditolak', stamp: 'DITOLAK' },
            ] },
          { caption: 'Kenapa? Semua riwayat telat bayarnya tercatat.', vo: 'p-28',
            cues: [
              { at: 0, camera: { x: 96, y: 66, zoom: 2 }, dur: 700 },
              { at: 'semua', pop: 'arsip' }, { at: 'semua', label: 'SLIK OJK', x: 96, y: 50, bg: '#29366f', dur: 0 },
              { at: 'tercatat', kw: 'SEMUA *TERCATAT*' }, { at: 'tercatat', label: 'DIMAS: TELAT 9x', x: 96, y: 80, bg: '#e43b44', dur: 0 },
            ] },
          { clear: true },
          { caption: 'Akhirnya pinjam ke keluarga. Yang ini bunganya bukan uang, tapi rasa malu.', vo: 'p-29',
            cues: [
              { at: 0, camera: { x: DIMAS_X, y: 66, zoom: 2.2 }, dur: 700 },
              { at: 'keluarga', show: 'ayah' }, { at: 'keluarga', kw: 'PINJAM KE *KELUARGA*' },
              { at: 'bunganya', emote: 'dimas', icon: 'sweat', dur: 1800 },
              { at: 'rasa malu', kw: 'BUNGANYA: *RASA MALU*' }, { at: 'rasa malu', sticker: 'sweat', at_: L },
            ] },
        ],
      }],
    },

    // ======================================================
    // BAB 4 — TAHUN 5: KPR & struk tagihan
    // ======================================================
    {
      id: 'bab-4',
      title: 'KPR ditolak gara-gara paylater',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 60, zoom: 1 },
        clock: 'TAHUN 3',
        note: 'Angka ilustrasi · bukan nasihat keuangan',
        props: kosLater([
          { id: 'tunas', sprite: 'sprout_2', x: 124, y: 82, scale: 1.4, depth: 6 },
          { id: 'formD', sprite: 'form', x: 66, y: 84, scale: 1.3, depth: 7, hidden: true },
          { id: 'formR', sprite: 'form', x: 120, y: 66, scale: 1.3, depth: 7, hidden: true },
          { id: 'rumah', sprite: 'house', x: RAKA_X, y: 90, scale: 2.4, depth: 9, hidden: true },
        ]),
        actors: [{ ...DIMAS, tag: 'UTANG Rp9 JT', tagColor: '#b13e53' }, { ...RAKA, tag: 'TABUNGAN Rp40 JT', tagColor: '#257179' }],
        steps: [
          { caption: 'Tahun kelima. Dua-duanya ingin punya rumah.', vo: 'p-30',
            cues: [
              { at: 0, clock: 'TAHUN', from: 4, to: 5, dur: 700 },
              { at: 'dua-duanya', pop: 'formD' }, { at: 'dua-duanya', pop: 'formR' },
              { at: 'rumah', kw: 'INGIN PUNYA *RUMAH*' },
            ] },
          { caption: 'Tabungan Raka sudah lebih dari 60 juta. Cukup untuk uang muka rumah sederhana.', vo: 'p-31',
            speak: 'Tabungan Raka sudah lebih dari enam puluh juta. Cukup untuk uang muka rumah sederhana.',
            cues: [
              { at: 0, camera: { x: 150, y: 66, zoom: 2.2 }, dur: 700 },
              { at: 'enam puluh', kw: '*60 JUTA+*' }, { at: 'enam puluh', tag: 'raka', text: 'TABUNGAN Rp60+ JT', color: '#257179' },
              { at: 'uang muka', kw: 'UANG *MUKA*' },
            ] },
          { caption: 'Pengajuan KPR-nya disetujui.', vo: 'p-32', speak: 'Pengajuan ka pe er-nya disetujui.',
            cues: [
              { at: 'disetujui', stamp: 'DISETUJUI', color: '#38b764', at_: [0.62, 0.4] },
              { at: 'disetujui', camera: { x: RAKA_X, y: 62, zoom: 1.4 }, dur: 600 },
              { at: 'disetujui', pop: 'rumah' }, { at: 'disetujui', sticker: 'party', at_: Rt },
            ] },
          { caption: 'Dimas juga mengajukan. Ditolak lagi. Riwayat kreditnya masih merah.', vo: 'p-33',
            cues: [
              { at: 0, camera: { x: DIMAS_X, y: 66, zoom: 2.1 }, dur: 700 },
              { at: 'ditolak', stamp: 'DITOLAK', at_: [0.4, 0.4] },
              { at: 'masih merah', kw: 'RIWAYAT *MASIH MERAH*' },
            ] },
          { caption: 'Dan HP empat juta itu? Rusak tahun lalu. Cicilannya baru lunas bulan ini.', vo: 'p-34',
            speak: 'Dan ha pe empat juta itu? Rusak tahun lalu. Cicilannya baru lunas bulan ini.',
            cues: [
              { at: 0, camera: { x: 70, y: 50, zoom: 2.8 }, dur: 700 },
              { at: 'rusak', swap: 'hp', to: 'phone_broken' }, { at: 'rusak', shake: 200 },
              { at: 'baru lunas', kw: 'BARU *LUNAS*' }, { at: 'baru lunas', sticker: 'sus', at_: L },
            ] },
          { together: [
            { camera: { x: 96, y: 60, zoom: 1 }, dur: 700 },
            { caption: 'Ini struk tagihannya.', vo: 'p-35' },
          ] },
          { receipt: 'STRUK TAGIHAN DIMAS', stagger: 420,
            lines: [['HP', 'Rp4.000.000'], ['Bunga cicilan', '+Rp1.200.000'], ['Denda telat', '+Rp900.000'], ['Bunga pinjol', '+Rp1.500.000']],
            total: ['TOTAL', 'Rp7.600.000'], note: '≈ hampir 2 HP · BONUS: KPR ditolak' },
          { wait: 1200 },
          { clear: true },
          { caption: 'Paylater-nya tidak jahat. Yang mahal itu: memakai uang yang belum kita punya, untuk hal yang belum kita butuhkan.', vo: 'p-36', punch: true,
            cues: [
              { at: 'tidak jahat', kw: 'PAYLATER *TIDAK JAHAT*' },
              { at: 'memakai', kw: 'UANG YANG *BELUM KITA PUNYA*' },
              { at: 'untuk hal', kw: 'UNTUK YANG *BELUM KITA BUTUHKAN*', keepKw: true },
            ] },
        ],
      }],
    },

    // ======================================================
    // BAB 5 — BAGIAN 2: kenapa ini bisa terjadi?
    // ======================================================
    {
      id: 'bab-5',
      title: 'Kenapa bisa begini',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 60, zoom: 1 },
        props: [
          { id: 'koin', sprite: 'coin', x: 66, y: 66, scale: 5, depth: 6, hidden: true },
          { id: 'tumpukan', sprite: 'coins_pile', x: 124, y: 80, scale: 5, depth: 6, hidden: true },
          { id: 'arsip', sprite: 'cabinet', x: 62, y: 88, scale: 2.6, depth: 6, hidden: true },
          { id: 'bank', sprite: 'building2', x: 132, y: 92, scale: 1.4, depth: 5, hidden: true },
        ],
        steps: [
          { together: [
            { title: 'BAGIAN 2', sub: 'kenapa ini bisa terjadi?', dark: true, size: 30, dur: 2400 },
            { caption: 'Bagian dua. Kenapa ini bisa terjadi?', vo: 'p-37' },
          ] },
          { caption: 'Pertama: ilusi kata cuma.', vo: 'p-38', cues: [{ at: 'ilusi', kw: 'ILUSI KATA *"CUMA"*' }, { at: 0, camera: { x: 96, y: 62, zoom: 1.5 }, dur: 900 }] },
          { caption: 'Otak kita merasa empat ratus ribu itu kecil. Padahal yang kita setujui empat juta lebih.', vo: 'p-39',
            cues: [
              { at: 'empat ratus', pop: 'koin' }, { at: 'empat ratus', kw: '*400 RIBU* = KECIL' }, { at: 'empat ratus', camera: { x: 70, y: 60, zoom: 2.4 }, dur: 600 },
              { at: 'padahal', camera: { x: 100, y: 64, zoom: 1.4 }, dur: 600 },
              { at: 'padahal', pop: 'tumpukan' }, { at: 'padahal', kw: 'PADAHAL *4 JUTA LEBIH*' }, { at: 'padahal', sticker: 'shock', at_: Rt },
            ] },
          { caption: 'Saat bayar tunai, ada rasa berat melepas uang. Tombol bayar nanti menghapus rasa itu.', vo: 'p-40',
            cues: [
              { at: 'rasa berat', kw: 'RASA *BERAT*' },
              { at: 'tombol', kw: 'BAYAR NANTI *MENGHAPUSNYA*' }, { at: 'tombol', sticker: 'smirk', at_: L },
            ] },
          { clear: true },
          { caption: 'Kedua: bunga dan denda itu menumpuk, bukan menunggu.', vo: 'p-41', cues: [{ at: 'menumpuk', kw: 'MENUMPUK, *BUKAN MENUNGGU*' }, { at: 'menumpuk', camera: { x: 124, y: 66, zoom: 2 }, dur: 900 }, { at: 'bukan', shake: 200 }] },
          { caption: 'Batas bunga pinjol resmi sekitar 0,1% per hari. Kelihatannya kecil.', vo: 'p-42',
            speak: 'Batas bunga pinjol resmi sekitar nol koma satu persen per hari. Kelihatannya kecil.',
            cues: [{ at: 0, camera: { x: 70, y: 60, zoom: 2.2 }, dur: 800 }, { at: 'nol koma', kw: '*0,1%* PER HARI' }, { at: 'kelihatannya', kw: 'KELIHATANNYA *KECIL*' }] },
          { caption: 'Tapi kalau dihitung setahun, bisa lebih dari 30%. Pinjol ilegal? Jauh lebih kejam.', vo: 'p-43',
            speak: 'Tapi kalau dihitung setahun, bisa lebih dari tiga puluh persen. Pinjol ilegal? Jauh lebih kejam.',
            cues: [
              { at: 0, camera: { x: 96, y: 60, zoom: 1 }, dur: 700 },
              { at: 'setahun', chart: 'BUNGA PINJOL RESMI (%)', bars: [['Per hari', 0.1, '#41a6f6'], ['Per bulan', 3, '#ffcd75'], ['Per tahun', 36, '#e43b44']], max: 40, suffix: '%', place: 'right', y: 0.1, dur: 0 },
              { at: 'tiga puluh', kw: '*30%+* SETAHUN' },
              { at: 'ilegal', kw: 'ILEGAL: *JAUH LEBIH KEJAM*' }, { at: 'ilegal', sticker: 'shock', at_: L },
            ] },
          { clear: true },
          { caption: 'Ketiga: semua utang punya jejak. Bank melihat riwayat bayarmu saat kamu mengajukan KPR.', vo: 'p-44',
            speak: 'Ketiga: semua utang punya jejak. Bank melihat riwayat bayarmu saat kamu mengajukan ka pe er.',
            cues: [
              { at: 0, camera: { x: 96, y: 66, zoom: 1.3 }, dur: 700 },
              { at: 'jejak', kw: 'SEMUA UTANG *PUNYA JEJAK*' }, { at: 'jejak', pop: 'arsip' },
              { at: 'bank', pop: 'bank' }, { at: 'bank', label: 'BANK', x: 132, y: 40, bg: '#29366f', dur: 0 },
              { at: 'riwayat', label: 'SLIK OJK', x: 60, y: 54, bg: '#29366f', dur: 0 },
            ] },
          { clear: true },
          { caption: 'Dan ini bukan cuma cerita Dimas. Per Maret 2026, ada sekitar 30 juta pengguna paylater, dengan utang Rp28 triliun.', vo: 'p-45',
            speak: 'Dan ini bukan cuma cerita Dimas. Per Maret dua ribu dua puluh enam, ada sekitar tiga puluh juta pengguna paylater, dengan utang dua puluh delapan triliun rupiah.',
            cues: [
              { at: 'bukan cuma', kw: 'BUKAN CUMA *DIMAS*' },
              { at: 'tiga puluh juta', card: 'Paylater di Indonesia', items: ['30,8 juta pengguna', 'Utang Rp28,3 triliun', '(OJK, Maret 2026)'], x: 96, y: 54, stagger: 200, dur: 0 },
              { at: 'tiga puluh juta', kw: '*30 JUTA* PENGGUNA' },
            ] },
          { clear: true },
          { caption: 'Hampir separuh kredit macet pinjol berasal dari usia 19 sampai 34 tahun.', vo: 'p-46',
            speak: 'Hampir separuh kredit macet pinjol berasal dari usia sembilan belas sampai tiga puluh empat tahun.',
            cues: [{ at: 'hampir separuh', kw: 'HAMPIR *SEPARUH*' }, { at: 'usia', kw: 'USIA *19–34*' }, { at: 'usia', sticker: 'sus', at_: Rt }] },
          { caption: 'Karena itu, sejak Juli 2026, OJK mewajibkan pengguna paylater minimal 18 tahun dan berpenghasilan minimal tiga juta.', vo: 'p-47',
            speak: 'Karena itu, sejak Juli dua ribu dua puluh enam, o je ka mewajibkan pengguna paylater minimal delapan belas tahun, dan berpenghasilan minimal tiga juta.',
            cues: [
              { at: 'mewajibkan', card: 'Aturan baru OJK', items: ['Usia minimal 18 tahun', 'Penghasilan min. Rp3 juta', '(berlaku Juli 2026)'], x: 96, y: 54, stagger: 200, dur: 0 },
              { at: 'mewajibkan', kw: 'ATURAN *BARU OJK*' },
            ] },
          { clear: true },
        ],
      }],
    },

    // ======================================================
    // BAB 6 — PENUTUP
    // ======================================================
    {
      id: 'bab-6',
      title: '4 aturan aman paylater',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 60, zoom: 1 },
        clock: 'TAHUN 5',
        props: kosLater([
          { id: 'rumah', sprite: 'house', x: RAKA_X, y: 90, scale: 2.4, depth: 9 },
          { id: 'pisau', sprite: 'knife', x: 80, y: 60, scale: 4, depth: 12, hidden: true },
          { id: 'wortel', sprite: 'carrot', x: 118, y: 64, scale: 4, depth: 12, hidden: true },
        ]),
        actors: [{ ...DIMAS, tag: 'DIMAS' }, { ...RAKA, tag: 'RAKA' }],
        steps: [
          { caption: 'Kalau mau tetap pakai paylater, pegang empat aturan ini.', vo: 'p-48', cues: [{ at: 'empat aturan', kw: '*4 ATURAN* AMAN' }] },
          { together: [
            { card: '4 aturan paylater', items: ['1. Total cicilan maks. 30% gaji', '2. Punya dana darurat dulu', '3. Untuk kebutuhan, bukan keinginan', '4. Cek legalitas di OJK'], x: 96, y: 50, stagger: 1500, dur: 0 },
            { caption: 'Total cicilan maksimal tiga puluh persen gaji. Punya dana darurat dulu. Pakai untuk kebutuhan, bukan keinginan. Dan cek legalitasnya di OJK.', vo: 'p-49',
              speak: 'Total cicilan maksimal tiga puluh persen gaji. Punya dana darurat dulu. Pakai untuk kebutuhan, bukan keinginan. Dan cek legalitasnya di o je ka.' },
          ] },
          { clear: true },
          { caption: 'Paylater itu seperti pisau. Bisa buat masak, bisa melukai. Bedanya, di cara memegang.', vo: 'p-50', punch: true,
            cues: [
              { at: 'pisau', pop: 'pisau' }, { at: 'pisau', kw: 'SEPERTI *PISAU*' },
              { at: 'masak', pop: 'wortel' }, { at: 'masak', kw: 'BISA *MASAK*' },
              { at: 'melukai', kw: 'BISA *MELUKAI*' },
              { at: 'bedanya', kw: 'BEDANYA DI *CARA MEMEGANG*', keepKw: true },
            ] },
          { clear: true },
          { caption: 'Kamu lebih mirip Dimas, atau Raka? Jujur di kolom komentar.', vo: 'p-51',
            cues: [
              { at: 'dimas', glow: 'dimas', times: 3 }, { at: 'raka', glow: 'raka', times: 3 },
              { at: 'kamu', kw: '*DIMAS* ATAU *RAKA*?' },
              { at: 'jujur', label: 'LIKE', x: 60, y: 22, bg: '#3b5dc9', dur: 0 },
              { at: 'jujur', label: 'KOMEN', x: 96, y: 22, bg: '#38b764', dur: 0 },
              { at: 'jujur', label: 'SUBSCRIBE', x: 136, y: 22, bg: '#e43b44', dur: 0 },
              { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true },
            ] },
          { wait: 1500 },
        ],
      }],
    },
  ],
};
