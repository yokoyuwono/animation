// ============================================================
//  "ANDAIKAN BERHENTI MAKAN NASI SETAHUN" — seri Andaikan, gaya peta
//  Naskah: stories/tanpa-nasi.naskah.md · Skema: stories/tanpa-nasi.plan.md
//  Split: kiri DESA A (makan nasi), kanan DESA B (tanpa nasi). Angka ber-label ilustrasi. Tanpa klaim kesehatan.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "n-01": ["Bayangkan. Mulai besok, tidak ada orang Indonesia yang makan nasi. Setahun penuh.", "Bayangkan. Mulai besok, tidak ada orang Indonesia yang makan nasi. Setahun penuh."],
 "n-02": ["Gudang beras penuh. Harga gabah anjlok.", "Gudang beras penuh. Harga gabah anjlok."],
 "n-03": ["Toko roti antre panjang. Tapi dolar diam-diam ikut terkuras.", "Toko roti antre panjang. Tapi dolar diam-diam ikut terkuras."],
 "n-04": ["Dan Tole, anak kos, bilang: \"Belum makan kalau belum nasi.\"", "Dan Tole, anak kos, bilang: \"Belum makan kalau belum nasi.\""],
 "n-05": ["Andaikan Indonesia berhenti makan nasi.", "Andaikan Indonesia berhenti makan nasi."],
 "n-06": ["Kita bandingkan dua desa. A, makan nasi seperti biasa. B, nasi hilang dari piring.", "Kita bandingkan dua desa. A, makan nasi seperti biasa. Be, nasi hilang dari piring."],
 "n-07": ["Dari sawah di pinggir desa ini, kita lihat dulu skalanya.", "Dari sawah di pinggir desa ini, kita lihat dulu skalanya."],
 "n-08": ["Kebutuhan beras kita sekitar 31 juta ton setahun.", "Kebutuhan beras kita sekitar tiga puluh satu juta ton setahun."],
 "n-09": ["Tahun lalu, produksinya sekitar 34 juta ton. Lebih dari cukup.", "Tahun lalu, produksinya sekitar tiga puluh empat juta ton. Lebih dari cukup."],
 "n-10": ["Kalau dibagi rata, kira-kira 110 kilo per orang setahun.", "Kalau dibagi rata, kira-kira seratus sepuluh kilo per orang setahun."],
 "n-11": ["Nasi bukan sekadar makanan. Ia hampir seperti jam makan itu sendiri.", "Nasi bukan sekadar makanan. Ia hampir seperti jam makan itu sendiri."],
 "n-12": ["Yang pertama merasakan: pemilik sawah ini, Pak Wiryo.", "Yang pertama merasakan: pemilik sawah ini, Pak Wiryo."],
 "n-13": ["Pak Wiryo menanam padi sejak muda. Panen dua kali setahun.", "Pak Wiryo menanam padi sejak muda. Panen dua kali setahun."],
 "n-14": ["Rumah tangga petani tanaman pangan ada sekitar 15 juta.", "Rumah tangga petani tanaman pangan ada sekitar lima belas juta."],
 "n-15": ["Di desa B, gabahnya tidak ada yang beli. Harga jatuh bebas.", "Di desa Be, gabahnya tidak ada yang beli. Harga jatuh bebas."],
 "n-16": ["Gudang penuh, sawah dibiarkan. Buruh tanam kehilangan upah.", "Gudang penuh, sawah dibiarkan. Buruh tanam kehilangan upah."],
 "n-17": ["Berhenti makan nasi berarti menghentikan dapur jutaan petani.", "Berhenti makan nasi berarti menghentikan dapur jutaan petani."],
 "n-18": ["Gabah Pak Wiryo menumpuk. Lalu piring orang kota diisi apa?", "Gabah Pak Wiryo menumpuk. Lalu piring orang kota diisi apa?"],
 "n-19": ["Kebanyakan beralih ke mi dan roti. Bahannya: gandum.", "Kebanyakan beralih ke mi dan roti. Bahannya: gandum."],
 "n-20": ["Masalahnya, Indonesia tidak menanam gandum. Seratus persen impor.", "Masalahnya, Indonesia tidak menanam gandum. Seratus persen impor."],
 "n-21": ["Tahun 2024 saja, impornya sekitar 12 juta ton.", "Tahun dua ribu dua puluh empat saja, impornya sekitar dua belas juta ton."],
 "n-22": ["Di desa B, kebutuhan gandum bisa melonjak berkali lipat.", "Di desa Be, kebutuhan gandum bisa melonjak berkali lipat."],
 "n-23": ["Dibeli pakai dolar. Rupiah tertekan, harga mi ikut naik.", "Dibeli pakai dolar. Rupiah tertekan, harga mi ikut naik."],
 "n-24": ["Lari dari nasi, kita malah lari ke pelukan impor.", "Lari dari nasi, kita malah lari ke pelukan impor."],
 "n-25": ["Tapi di ladang sebelah sawah, ada yang tersenyum.", "Tapi di ladang sebelah sawah, ada yang tersenyum."],
 "n-26": ["Petani jagung dan singkong tiba-tiba kebanjiran pesanan.", "Petani jagung dan singkong tiba-tiba kebanjiran pesanan."],
 "n-27": ["Di timur, sagu kembali naik daun. Ubi dan sukun masuk menu kota.", "Di timur, sagu kembali naik daun. Ubi dan sukun masuk menu kota."],
 "n-28": ["Mas Bima, tukang roti, mulai bikin roti dari tepung singkong.", "Mas Bima, tukang roti, mulai bikin roti dari tepung singkong."],
 "n-29": ["Diet nasi, pangan lokal justru dapat panggung.", "Diet nasi, pangan lokal justru dapat panggung."],
 "n-30": ["Kabar itu sampai ke warteg Bu Endang di ujung gang.", "Kabar itu sampai ke warteg Bu Endang di ujung gang."],
 "n-31": ["Etalase biasanya: nasi, sayur, telur balado. Sekarang tanpa nasi.", "Etalase biasanya: nasi, sayur, telur balado. Sekarang tanpa nasi."],
 "n-32": ["Pelanggan protes: \"Lauknya enak, tapi kok nggak kenyang?\"", "Pelanggan protes: \"Lauknya enak, tapi kok nggak kenyang?\""],
 "n-33": ["Bu Endang ganti dengan kentang dan jagung. Ongkos belanja naik.", "Bu Endang ganti dengan kentang dan jagung. Ongkos belanja naik."],
 "n-34": ["Porsi tetap, harga terpaksa naik dua ribu.", "Porsi tetap, harga terpaksa naik dua ribu."],
 "n-35": ["Warung kecil yang paling repot menyesuaikan diri.", "Warung kecil yang paling repot menyesuaikan diri."],
 "n-36": ["Setahun berlalu. Pak Wiryo berdiri di pinggir sawahnya.", "Setahun berlalu. Pak Wiryo berdiri di pinggir sawahnya."],
 "n-37": ["Sebagian sawah sudah dijual. Jadi perumahan dan gudang.", "Sebagian sawah sudah dijual. Jadi perumahan dan gudang."],
 "n-38": ["Lalu orang-orang kangen nasi. Tapi sawahnya sudah tidak ada.", "Lalu orang-orang kangen nasi. Tapi sawahnya sudah tidak ada."],
 "n-39": ["Membangun sawah butuh bertahun-tahun. Menghilangkannya cukup setahun.", "Membangun sawah butuh bertahun-tahun. Menghilangkannya cukup setahun."],
 "n-40": ["Kebiasaan bisa kembali dalam semalam. Sawah tidak.", "Kebiasaan bisa kembali dalam semalam. Sawah tidak."],
 "n-41": ["Kembali ke sawah di pinggir desa.", "Kembali ke sawah di pinggir desa."],
 "n-42": ["Jadi, nasi itu apa buat kita?", "Jadi, nasi itu apa buat kita?"],
 "n-43": ["Lapangan kerja, budaya, dan tameng dari ketergantungan impor.", "Lapangan kerja, budaya, dan tameng dari ketergantungan impor."],
 "n-44": ["Tapi pelajaran dari desa B juga penting: piring kita bisa lebih beragam.", "Tapi pelajaran dari desa Be juga penting: piring kita bisa lebih beragam."],
 "n-45": ["Kamu bisa hidup setahun tanpa nasi? Tulis di kolom komentar.", "Kamu bisa hidup setahun tanpa nasi? Tulis di kolom komentar."]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', WIRYO = '#8b5a2b';

// ---------- PETA DESA PINGGIR KOTA (tampak atas): sawah Pak Wiryo, gudang beras, ladang, warteg, toko roti, kos, sungai kapal ----------
const DESA = { river: [[0, 98], [50, 102], [110, 97], [192, 101]], roads: [[0, 62, 192, 62], [92, 0, 92, 92]] };
const T = { sawah: [46, 34], gudang: [126, 28], ladang: [164, 34], warteg: [24, 72], roti: [58, 72], kos: [124, 72], };
const PLOT = [[18, 22], [46, 22], [74, 22], [18, 40], [46, 40], [74, 40]];
function desa(dx, s, sawah = 'sawah_top_subur') {
  return [
    ...PLOT.map(([x, y], i) => ({ id: `${s}f${i}`, sprite: sawah, x: x + dx, y, center: true, depth: 3.5 })),
    ...[3, 4, 5].map(i => ({ id: `${s}nr${i}`, sprite: `rumah_top_${i % 4}`, x: PLOT[i][0] + dx, y: PLOT[i][1] + 6, hidden: true })),
    { sprite: 'gudang_top', x: 126 + dx, y: 36 },
    { id: s + 'jg', sprite: 'ladang_jagung', x: 164 + dx, y: 22, center: true, depth: 3.5 },
    { id: s + 'sk', sprite: 'ladang_singkong', x: 164 + dx, y: 42, center: true, depth: 3.5 },
    { sprite: 'warung_top', x: 24 + dx, y: 80 },
    { sprite: 'roti_top', x: 58 + dx, y: 80 },
    { sprite: 'kos_top', x: 124 + dx, y: 82 },
    ...[[150, 78], [172, 80]].map(([x, y], i) => ({ sprite: `rumah_top_${i + 1}`, x: x + dx, y })),
    ...[[6, 8], [108, 10], [108, 46], [140, 52], [186, 60], [80, 76], [4, 58], [186, 8]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => [
  { id: 'wiryo' + k, sprite: 'wiryo', x: 46 + dx, y: 52, scale: 0.75, tag: 'PAK WIRYO', tagColor: WIRYO },
  { id: 'endang' + k, sprite: 'endang', x: 34 + dx, y: 82, scale: 0.75, tag: 'BU ENDANG', tagColor: RED },
  { id: 'bima' + k, sprite: 'bima', x: 70 + dx, y: 82, scale: 0.75, tag: 'MAS BIMA', tagColor: '#c9a85a' },
  { id: 'tole' + k, sprite: 'tole', x: 136 + dx, y: 84, scale: 0.75, tag: 'TOLE', tagColor: NAVY },
];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy', 'kid'];
function peta(steps, { split = true, c = cam('sawah', 2), bSawah = 'sawah_top_subur', transition = 'clouds', n = [12, 12] } = {}) {
  const base = { transition, sky: 'map', map: DESA, steps };
  return split ? { ...base, split: true, focus: 'both', tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...desa(0, 'A'), ...desa(192, 'B', bSawah)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK } }
    : { ...base, camera: c, props: desa(0, 'A'), actors: tokoh(0, 'A'), walkers: { n: n[0] + 4, sprites: WALK } };
}
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'clouds', sky: 'day', split: true, focus: 'both', tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const S_ = dx => dx ? 'B' : 'A';
const SKOR = [['Petani', 'A'], ['Devisa', 'A'], ['Pangan lokal', 'B'], ['Warung', 'A'], ['Ketahanan pangan', 'A']];
const skor = n => ({ at: 0.3, score: SKOR.slice(0, n), dur: 1300 });

const STORY = {
  title: 'Andaikan Berhenti Makan Nasi Setahun',
  audioDir: 'audio/tanpa-nasi',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Piring tanpa nasi',
      scenes: [
        { ...peta([
          { together: [{ work: 'wiryoA' }, { camera: { x: 96, y: 54, zoom: 1 }, dur: 2600, ease: 'Cubic.easeOut' },
            C('n-01', [{ at: 'nasi', kw: 'TANPA *NASI*' }, { at: 'setahun', stamp: 'TANPA NASI', at_: [0.5, 0.4] }])] },
          C('n-02', [{ at: 0, camera: cam('gudang', 2.4), dur: 700 }, { at: 'penuh', label: 'GUDANG PENUH', x: 126, y: 14, bg: '#ef7d57', size: 11, dur: 0 }, { at: 'anjlok', kw: 'GABAH *ANJLOK*' },
            { at: 'anjlok', work: 'wiryoA', stop: true }, { at: 'anjlok', emote: 'wiryoA', icon: 'sweat', dur: 1100 }]),
          { clear: true },
          C('n-03', [{ at: 0, camera: cam('roti', 2.4), dur: 700 }, { at: 'antre', crowd: 'goto', side: 'left', x: 58, y: 90, spread: 10, frac: 0.6, rush: 2 }, { at: 'antre', kw: 'TOKO ROTI *ANTRE*' },
            { at: 'dolar', kw: 'DOLAR *TERKURAS?*' }, { at: 'terkuras', sticker: 'money', at_: Rt }]),
          C('n-04', [{ at: 0, camera: cam('kos', 2.4), dur: 700 }, { at: 'tole', glow: 'toleA', times: 2 }, { at: 'belum makan', dialog: 'toleA', text: 'Belum makan kalau belum nasi!', dur: 500 }]),
          { together: [{ title: 'ANDAIKAN', sub: 'Berhenti makan nasi setahun', dark: true, size: 30, dur: 2000 }, C('n-05')] },
        ], { split: false, c: cam('sawah', 2.4), transition: undefined }), clock: 'BULAN 1' },
        peta([
          C('n-06', [{ at: 'dua desa', kw: '*2* DESA' }, { at: 'a, makan', focus: 'left' }, { at: 'a, makan', kw: 'A: MAKAN *NASI*' },
            { at: 'be,', focus: 'right' }, { at: 'hilang', kw: 'B: *TANPA NASI*' }, { at: 'piring', stamp: 'TANPA NASI', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
          { together: [{ focus: 'both' }, { wait: 400 }] },
        ], { transition: 'cut', c: { x: 96, y: 54, zoom: 1.2 } }),
      ],
    },
    // ================= BAB 2 — SKALA =================
    {
      id: 'bab-2', title: 'Seberapa besar nasi?',
      scenes: [
        peta([{ together: [{ work: 'wiryoA' }, C('n-07', [{ at: 0, camera: { x: 96, y: 54, zoom: 1 }, dur: 1800 }, { at: 'skalanya', kw: 'LIHAT *SKALANYA*' }])] }], { split: false, c: cam('sawah', 2.4) }),
        {
          transition: 'clouds', sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: 96, y: 72, zoom: 1.3 },
          props: [{ sprite: 'tree', x: 14 }, { sprite: 'house', x: 176, scale: 0.9 },
            ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({ id: 'kr' + i, sprite: 'karung_beras', x: 60 + (i % 5) * 14 + (i > 4 ? 7 : 0), y: i > 4 ? 90 : 101, scale: 1.3, depth: i > 4 ? 9 : 8, hidden: true })),
            ...[0, 1, 2].map(i => ({ id: 'pd' + i, sprite: 'padi_subur', x: 26 + i * 120 / 2, y: 101, depth: 6 }))],
          actors: [{ id: 'wiryo', sprite: 'wiryo', x: 150, y: 101, face: 'left', tag: 'PAK WIRYO', tagColor: WIRYO }],
          steps: [
            C('n-08', [...[0, 1, 2, 3, 4].map(i => ({ at: 0.2 + i * 0.1, pop: 'kr' + i })), { at: 'tiga puluh', kw: 'BUTUH *31 JUTA TON*/TAHUN' }]),
            C('n-09', [...[5, 6, 7, 8, 9].map(i => ({ at: 0.15 + (i - 5) * 0.08, pop: 'kr' + i })),
              { at: 'produksinya', chart: 'BERAS (juta ton)', bars: [['Kebutuhan', 31.2, '#41a6f6'], ['Produksi 2025', 34.7, GREEN]], max: 40, suffix: ' jt', place: 'right', y: 0.1, dur: 0 },
              { at: 'cukup', kw: '*34,7 JUTA TON* · CUKUP' }, { at: 'cukup', emote: 'wiryo', icon: 'heart', dur: 1000 }]),
            { clear: true },
            C('n-10', [{ at: 'seratus', kw: '±*110 KG*/ORANG' }, { at: 'seratus', label: '±110 KG/ORANG/TAHUN (hitungan)', x: 96, y: 30, bg: GREEN, size: 11, dur: 0 }]),
            C('n-11', [{ at: 'jam makan', kw: 'NASI = *JAM MAKAN*', keepKw: true }], { punch: true }),
          ],
        },
      ],
    },
    // ================= BAB 3 — PAK WIRYO =================
    {
      id: 'bab-3', title: 'Pak Wiryo, petani padi',
      scenes: [
        peta([{ together: [{ work: 'wiryoA' }, { work: 'wiryoB' }, C('n-12', [...dua(0, cam('sawah', 2.4), 1300), { at: 'pertama', kw: 'YANG *PERTAMA* MERASAKAN' }, { at: 'wiryo', glow: 'wiryoB', times: 2 }])] }], { c: { x: 96, y: 54, zoom: 1.2 } }),
        dekat(dx => [{ sprite: 'tree', x: 14 + dx }, { sprite: 'house', x: 180 + dx, scale: 0.8 },
          ...[0, 1, 2, 3].map(i => ({ id: `${S_(dx)}p${i}`, sprite: 'padi_subur', x: 30 + i * 18 + dx, y: 101, depth: 6 })),
          { id: S_(dx) + 'k0', sprite: 'petak_air', x: 112 + dx, y: 103, depth: 5 },
          ...[0, 1, 2, 3, 4].map(i => ({ id: `${S_(dx)}g${i}`, sprite: 'karung_beras', x: 122 + (i % 3) * 13 + (i > 2 ? 6 : 0) + dx, y: i > 2 ? 90 : 101, scale: 1.2, depth: 8, hidden: true }))],
          (dx, k) => [{ id: 'wiryo' + k, sprite: 'wiryo', x: 100 + dx, y: 101, tag: 'PAK WIRYO', tagColor: WIRYO }], [
          { together: [{ work: 'wiryoA' }, { work: 'wiryoB' }, C('n-13', [{ at: 'sejak muda', kw: 'MENANAM PADI *SEJAK MUDA*' }, { at: 'dua kali', label: 'PANEN 2× SETAHUN', x: 100, y: 46, bg: GREEN, size: 11, dur: 0 }])] },
          { clear: true },
          C('n-14', [{ at: 'rumah tangga', card: 'Sensus Pertanian 2023 (BPS)', items: ['Rumah tangga petani', 'tanaman pangan ±15,5 juta'], x: 96, y: 26, stagger: 400, dur: 0 }, { at: 'lima belas', kw: '±*15,5 JUTA* RUMAH TANGGA' }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('n-15', [{ at: 'gabahnya', pop: 'Bg0' }, { at: 'gabahnya', pop: 'Bg1' }, { at: 'tidak ada', pop: 'Bg2' }, { at: 'tidak ada', label: 'TAK LAKU', x: R(134), y: 60, bg: RED, size: 13, dur: 0 },
            { at: 'jatuh', kw: 'GABAH *TAK LAKU*' }, { at: 'jatuh', work: 'wiryoB', stop: true }, { at: 'jatuh', emote: 'wiryoB', icon: 'sweat', dur: 1100 }])] },
          C('n-16', [{ at: 'gudang', pop: 'Bg3' }, { at: 'gudang', pop: 'Bg4' }, { at: 'dibiarkan', swapAll: 'Bp', to: 'padi_kurus', stagger: 160 }, { at: 'dibiarkan', swap: 'Bk0', to: 'petak_retak' },
            { at: 'buruh', kw: 'BURUH *KEHILANGAN UPAH*' }, { at: 'buruh', dialog: 'wiryoB', text: 'Mau dijual ke mana gabah ini...', dur: 500 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('n-17', [skor(1), { at: 'jutaan', kw: 'DAPUR *JUTAAN PETANI* BERHENTI', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 2' }),
      ],
    },
    // ================= BAB 4 — GANDUM =================
    {
      id: 'bab-4', title: 'Penggantinya dari mana?',
      scenes: [
        peta([C('n-18', [...dua(0, cam('roti', 2.2), 1500), { at: 'menumpuk', kw: 'GABAH *MENUMPUK*' }, { at: 'diisi apa', kw: 'PIRING DIISI *APA?*' }, { at: 'diisi apa', emote: 'toleB', icon: 'question', dur: 1000 }])],
          { c: cam('sawah', 2.2), bSawah: 'sawah_top_kurus' }),
        dekat(dx => [{ sprite: 'house', x: 40 + dx, scale: 1.1 }, { sprite: 'tree', x: 176 + dx }, { sprite: 'table', x: 100 + dx, y: 101, depth: 5 },
          ...[0, 1, 2].map(i => ({ id: `${S_(dx)}rt${i}`, sprite: i === 1 ? 'noodle' : 'bread', x: 90 + i * 10 + dx, y: 88, scale: 1.2, depth: 9, hidden: true })),
          ...[0, 1, 2, 3, 4, 5].map(i => ({ id: `${S_(dx)}gd${i}`, sprite: 'karung_gandum', x: 120 + (i % 3) * 13 + (i > 2 ? 6 : 0) + dx, y: i > 2 ? 90 : 101, scale: 1.2, depth: 8, hidden: true }))],
          (dx, k) => [{ id: 'bima' + k, sprite: 'bima', x: 84 + dx, y: 101, tag: 'MAS BIMA', tagColor: '#c9a85a' }], [
          C('n-19', [{ at: 'mi dan roti', pop: 'Art0' }, { at: 'mi dan roti', pop: 'Brt0' }, { at: 'roti', pop: 'Art1' }, { at: 'roti', pop: 'Brt1' }, { at: 'gandum', pop: 'Brt2' }, { at: 'gandum', kw: 'MI & ROTI = *GANDUM*' }]),
          C('n-20', [{ at: 'tidak menanam', pop: 'Agd0' }, { at: 'tidak menanam', pop: 'Bgd0' }, { at: 'seratus', kw: 'GANDUM *100% IMPOR*' }, { at: 'impor', sticker: 'shock', at_: Rt }]),
          C('n-21', [{ at: 'impornya', chart: 'IMPOR GANDUM 2024', bars: [['Indonesia', 12.1, '#ef7d57']], max: 15, suffix: ' jt ton', place: 'right', y: 0.1, dur: 0 }, { at: 'dua belas', kw: '±*12 JUTA TON*' }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('n-22', [...[1, 2, 3, 4, 5].map((i, j) => ({ at: 0.2 + j * 0.12, pop: 'Bgd' + i })), { at: 'melonjak', kw: 'GANDUM *MELONJAK* (ilustrasi)' }, { at: 'lipat', emote: 'bimaB', icon: 'exclaim', dur: 1000 }])] },
          C('n-23', [{ at: 'dolar', label: 'RUPIAH ↓', x: R(132), y: 46, bg: RED, size: 14, dur: 0 }, { at: 'tertekan', kw: 'RUPIAH *TERTEKAN*' }, { at: 'harga mi', label: 'HARGA MI ↑ (ilustrasi)', x: R(96), y: 30, bg: '#ef7d57', size: 11, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('n-24', [skor(2), { at: 'pelukan', kw: 'LARI KE *PELUKAN IMPOR*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 4' }),
      ],
    },
    // ================= BAB 5 — TWIST: PANGAN LOKAL =================
    {
      id: 'bab-5', title: 'Twist: pangan lokal bangkit',
      scenes: [
        peta([C('n-25', [...dua(0, cam('ladang', 2.4), 1500), { at: 'ladang', kw: 'LADANG *SEBELAH SAWAH*' }, { at: 'tersenyum', sticker: 'party', at_: Rt }])], { c: cam('sawah', 2.2), bSawah: 'sawah_top_kurus' }),
        dekat(dx => [{ sprite: 'tree', x: 16 + dx }, { sprite: 'house', x: 180 + dx, scale: 0.8 }, { sprite: 'table', x: 104 + dx, y: 101, depth: 5 },
          ...['corn', 'cassava', 'corn'].map((sp, i) => ({ id: `${S_(dx)}lk${i}`, sprite: sp, x: 94 + i * 10 + dx, y: 88, scale: 1.6, depth: 9, hidden: true })),
          ...['sago', 'yam', 'bread'].map((sp, i) => ({ id: `${S_(dx)}lx${i}`, sprite: sp, x: 136 + i * 12 + dx, y: 100, scale: 1.6, depth: 9, hidden: true }))],
          (dx, k) => [{ id: 'tani' + k, sprite: 'warga', x: 74 + dx, y: 101, tag: 'PETANI JAGUNG', tagColor: '#c9a85a' },
            ...[0, 1].map(i => ({ id: `by${i}${k}`, sprite: ['girl', 'warga2'][i], x: 210 + dx, y: 101, face: 'left', hidden: true })),
            { id: 'bima' + k, sprite: 'bima', x: 210 + dx, y: 101, face: 'left', hidden: true, tag: 'MAS BIMA', tagColor: '#c9a85a' }], [
          { together: [{ focus: 'right' }, C('n-26', [{ at: 0, pop: 'Blk0' }, { at: 'singkong', pop: 'Blk1' }, { at: 'singkong', pop: 'Blk2' }, { at: 'kebanjiran', enter: 'by0B', from: 'right', to: R(122), speed: 50 },
            { at: 'kebanjiran', enter: 'by1B', from: 'right', to: R(136), speed: 46 }, { at: 'pesanan', kw: 'JAGUNG & SINGKONG *LARIS*' }, { at: 'pesanan', emote: 'taniB', icon: 'heart', dur: 1000 }])] },
          C('n-27', [{ at: 'sagu', pop: 'Blx0' }, { at: 'ubi', pop: 'Blx1' }, { at: 'sagu', kw: '*SAGU* · *UBI* · *SUKUN*' }, { at: 'menu', label: 'MENU BARU KOTA', x: R(150), y: 60, bg: GREEN, size: 11, dur: 0 }]),
          { clear: true },
          C('n-28', [{ at: 'mas bima', enter: 'bimaB', from: 'right', to: R(160), speed: 46 }, { at: 'tepung', pop: 'Blx2' }, { at: 'tepung', label: 'ROTI SINGKONG', x: R(160), y: 60, bg: '#c9a85a', size: 12, dur: 0 }, { at: 'singkong', kw: 'ROTI *TEPUNG SINGKONG*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('n-29', [skor(3), { at: 'panggung', kw: 'PANGAN LOKAL *DAPAT PANGGUNG*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 6' }),
      ],
    },
    // ================= BAB 6 — WARTEG BU ENDANG =================
    {
      id: 'bab-6', title: 'Bu Endang dan warteg',
      scenes: [
        peta([C('n-30', [...dua(0, cam('warteg', 2.4), 1500), { at: 'warteg', kw: 'WARTEG *BU ENDANG*' }, { at: 'ujung gang', emote: 'endangB', icon: 'exclaim', dur: 1000 }])], { c: cam('ladang', 2.2), bSawah: 'sawah_top_kurus' }),
        dekat(dx => [{ sprite: 'warung', x: 70 + dx, y: 92, scale: 1.05, depth: 3 }, { id: S_(dx) + 'et', sprite: 'etalase', x: 100 + dx, y: 101, scale: 1.2, depth: 6 }, { sprite: 'tree', x: 176 + dx }],
          (dx, k) => [{ id: 'endang' + k, sprite: 'endang', x: 82 + dx, y: 101, tag: 'BU ENDANG', tagColor: RED },
            { id: 'tole' + k, sprite: 'tole', x: 210 + dx, y: 101, face: 'left', hidden: true, tag: 'TOLE', tagColor: NAVY }], [
          C('n-31', [{ at: 'nasi', kw: 'NASI · SAYUR · *TELUR BALADO*' }, { at: 'sekarang', focus: 'right' }, { at: 'tanpa nasi', swap: 'Bet', to: 'etalase_kosong' }, { at: 'tanpa nasi', kw: 'SEKARANG *TANPA NASI*' }]),
          C('n-32', [{ at: 0, enter: 'toleB', from: 'right', to: R(134), speed: 60 }, { at: 'lauknya', dialog: 'toleB', text: 'Lauknya enak, tapi kok nggak kenyang?', dur: 500 }]),
          { together: [C('n-33', [{ at: 'kentang', kw: 'GANTI *KENTANG & JAGUNG*' }]),
            { receipt: 'BELANJA BU ENDANG · SEMINGGU (ilustrasi)', stagger: 380, lines: [['Kentang', 'Rp180.000'], ['Jagung', 'Rp90.000'], ['Dulu: beras', 'Rp150.000']], total: ['ONGKOS', 'NAIK'], note: 'ilustrasi · simulasi' }] },
          { clear: true },
          C('n-34', [{ at: 'harga', label: 'PORSI +Rp2.000 (ilustrasi)', x: R(100), y: 50, bg: RED, size: 12, dur: 0 }, { at: 'dua ribu', kw: 'PORSI *+Rp2.000*' }, { at: 'dua ribu', emote: 'toleB', icon: 'sweat', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('n-35', [skor(4), { at: 'warung kecil', kw: 'WARUNG KECIL *PALING REPOT*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 8' }),
      ],
    },
    // ================= BAB 7 — BULAN KE-12 =================
    {
      id: 'bab-7', title: 'Bulan ke-12',
      scenes: [
        peta([
          C('n-36', [{ at: 'setahun', clock: 'BULAN', from: 9, to: 12, dur: 1100 }, { at: 'pak wiryo', focus: 'right' }, { at: 'pinggir', glow: 'wiryoB', times: 2 }, { at: 'pinggir', kw: 'PAK WIRYO *DI PINGGIR SAWAH*' }]),
          C('n-37', [{ at: 'dijual', swap: 'Bf3', to: 'lahan_rumah' }, { at: 'dijual', swap: 'Bf4', to: 'lahan_rumah' }, { at: 'perumahan', pop: 'Bnr3' }, { at: 'perumahan', pop: 'Bnr4' },
            { at: 'gudang', swap: 'Bf5', to: 'lahan_rumah' }, { at: 'gudang', pop: 'Bnr5' }, { at: 'perumahan', kw: 'JADI *PERUMAHAN & GUDANG*' }]),
          { together: [{ focus: 'both' }, C('n-38', [{ at: 'kangen', kw: 'ORANG *KANGEN NASI*' }, { at: 'kangen', emote: 'toleB', icon: 'heart', dur: 900 }, { at: 'sudah tidak', kw: 'SAWAH *HILANG*' },
            { at: 'sudah tidak', emote: 'wiryoB', icon: 'sweat', dur: 1300 }, { at: 'sudah tidak', mono: true }])] },
          { mono: false },
          C('n-39', [{ at: 'bertahun', label: 'MEMBANGUN: BERTAHUN-TAHUN', x: 46, y: 6, bg: GREEN, size: 10, dur: 0 }, { at: 'menghilangkannya', label: 'MENGHILANGKAN: SETAHUN', x: R(46), y: 6, bg: RED, size: 10, dur: 0 }, { at: 'cukup setahun', kw: 'HILANG *CUKUP SETAHUN*' }]),
          { clear: true },
          C('n-40', [skor(5), { at: 'sawah tidak', kw: 'KEBIASAAN KEMBALI. *SAWAH TIDAK.*', keepKw: true }], { punch: true }),
        ], { c: cam('sawah', 1.6), bSawah: 'sawah_top_kurus' }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'bab-8', title: 'Nasi dan piring kita',
      scenes: [
        { ...peta([
          { together: [{ work: 'wiryoA' }, C('n-41', [{ at: 0, camera: cam('sawah', 2.4), dur: 1400 }, { at: 'sawah', kw: 'KEMBALI KE *SAWAH*' }, { at: 'sawah', glow: 'wiryoA', times: 2 }])] },
          C('n-42', [{ at: 0, kw: 'NASI *ITU APA?*' }]),
          C('n-43', [{ at: 0, camera: { x: 96, y: 54, zoom: 1 }, dur: 2400 }, { at: 'lapangan', kw: '*KERJA* · *BUDAYA* · *TAMENG IMPOR*' }]),
          C('n-44', [{ at: 'beragam', camera: cam('ladang', 2), dur: 1200 }, { at: 'beragam', kw: 'PIRING *BERAGAM*' }, { at: 'beragam', glow: 'Ajg', times: 2 }]),
          { together: [{ clear: true }, { camera: { x: 96, y: 54, zoom: 1.1 }, dur: 900 }, { score: SKOR, head: 'SKOR AKHIR', dur: 1200 }] },
          C('n-45', [{ at: 'setahun', kw: '*SANGGUP?*' }, { at: 'tulis', label: 'LIKE', x: 66, y: 24, bg: '#3b5dc9', dur: 0 }, { at: 'tulis', label: 'KOMEN', x: 100, y: 24, bg: GREEN, dur: 0 },
            { at: 'tulis', label: 'SUBSCRIBE', x: 140, y: 24, bg: '#e43b44', dur: 0 }, { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true }]),
          { wait: 1200 },
        ], { split: false, c: { x: 96, y: 54, zoom: 1.2 } }), clock: 'BULAN 12' },
      ],
    },
  ],
};
