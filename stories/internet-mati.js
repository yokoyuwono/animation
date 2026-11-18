// ============================================================
//  "ANDAIKAN INTERNET MATI SEMINGGU" — seri Andaikan, gaya peta
//  Naskah: stories/internet-mati.naskah.md · Skema: stories/internet-mati.plan.md
//  Split: kiri KOTA A (internet normal), kanan KOTA B (sinyal padam). Angka ber-label ilustrasi.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "i-01": ["Bayangkan. Senin pagi, internet se-Indonesia mati. Seminggu penuh.", "Bayangkan. Senin pagi, internet se-Indonesia mati. Seminggu penuh."],
 "i-02": ["Kode QR di kasir tidak bisa dipindai. Live jualan Kak Rara gelap.", "Kode kyu ar di kasir tidak bisa dipindai. Live jualan Kak Rara gelap."],
 "i-03": ["Tapi Nenek Sum malah tersenyum. Cucunya akhirnya mau ngobrol.", "Tapi Nenek Sum malah tersenyum. Cucunya akhirnya mau ngobrol."],
 "i-04": ["Kok bisa? Kita simulasikan.", "Kok bisa? Kita simulasikan."],
 "i-05": ["Andaikan internet mati seminggu.", "Andaikan internet mati seminggu."],
 "i-06": ["Kita bandingkan dua kota. A, internet normal. B, sinyalnya padam.", "Kita bandingkan dua kota. A, internet normal. Be, sinyalnya padam."],
 "i-07": ["Dari menara sinyal di tengah kota ini, kita lihat dulu skalanya.", "Dari menara sinyal di tengah kota ini, kita lihat dulu skalanya."],
 "i-08": ["Pengguna internet Indonesia tahun ini: sekitar 235 juta orang.", "Pengguna internet Indonesia tahun ini: sekitar dua ratus tiga puluh lima juta orang."],
 "i-09": ["Itu delapan dari sepuluh penduduk.", "Itu delapan dari sepuluh penduduk."],
 "i-10": ["Kebanyakan online empat sampai enam jam sehari.", "Kebanyakan online empat sampai enam jam sehari."],
 "i-11": ["Jadi kalau sinyal padam, yang berhenti bukan cuma media sosial.", "Jadi kalau sinyal padam, yang berhenti bukan cuma media sosial."],
 "i-12": ["Yang pertama panik: kasir di warung Pak Hasan.", "Yang pertama panik: kasir di warung Pak Hasan."],
 "i-13": ["Pak Hasan sudah terbiasa dibayar pakai QRIS.", "Pak Hasan sudah terbiasa dibayar pakai kyuris."],
 "i-14": ["Semester pertama 2026, transaksi QRIS tembus 12,5 miliar kali.", "Semester pertama dua ribu dua puluh enam, transaksi kyuris tembus dua belas koma lima miliar kali."],
 "i-15": ["Kalau dibagi rata, sekitar 69 juta transaksi setiap hari.", "Kalau dibagi rata, sekitar enam puluh sembilan juta transaksi setiap hari."],
 "i-16": ["Dan hampir semua penerimanya usaha kecil, seperti Pak Hasan.", "Dan hampir semua penerimanya usaha kecil, seperti Pak Hasan."],
 "i-17": ["Di kota B, pembeli tidak bawa uang tunai. Antrean ATM mengular.", "Di kota Be, pembeli tidak bawa uang tunai. Antrean a te em mengular."],
 "i-18": ["Pak Hasan pasang kertas: \"Boleh utang dulu.\"", "Pak Hasan pasang kertas: \"Boleh utang dulu.\""],
 "i-19": ["Dompet digital penuh, tapi tidak bisa dipakai beli gorengan.", "Dompet digital penuh, tapi tidak bisa dipakai beli gorengan."],
 "i-20": ["Di seberang warung, toko Kak Rara juga sepi.", "Di seberang warung, toko Kak Rara juga sepi."],
 "i-21": ["Kak Rara jualan baju lewat siaran langsung. Biasanya ratusan penonton.", "Kak Rara jualan baju lewat siaran langsung. Biasanya ratusan penonton."],
 "i-22": ["Di kota B, siarannya tidak bisa mulai. Pesanan nol.", "Di kota Be, siarannya tidak bisa mulai. Pesanan nol."],
 "i-23": ["Paket yang sudah dikemas menumpuk. Resinya tidak bisa dilacak.", "Paket yang sudah dikemas menumpuk. Resinya tidak bisa dilacak."],
 "i-24": ["Satu minggu tanpa internet, satu bulan omzet ikut hilang.", "Satu minggu tanpa internet, satu bulan omzet ikut hilang."],
 "i-25": ["Toko online tanpa internet, seperti toko tanpa pintu.", "Toko online tanpa internet, seperti toko tanpa pintu."],
 "i-26": ["Adik Kak Rara, Dafa, pulang sekolah dengan bingung.", "Adik Kak Rara, Dafa, pulang sekolah dengan bingung."],
 "i-27": ["Tugas dikumpulkan lewat daring. Pengumuman ujian ada di grup.", "Tugas dikumpulkan lewat daring. Pengumuman ujian ada di grup."],
 "i-28": ["Di kota B, guru kembali menulis di papan dan mencetak kertas.", "Di kota Be, guru kembali menulis di papan dan mencetak kertas."],
 "i-29": ["Ini pernah terjadi, dalam skala kecil. Juni 2024, pusat data nasional diserang ransomware.", "Ini pernah terjadi, dalam skala kecil. Juni dua ribu dua puluh empat, pusat data nasional diserang ransomware."],
 "i-30": ["Sekitar 210 instansi terganggu. Antrean imigrasi di bandara mengular berhari-hari.", "Sekitar dua ratus sepuluh instansi terganggu. Antrean imigrasi di bandara mengular berhari-hari."],
 "i-31": ["Negara digital butuh cadangan yang tidak digital.", "Negara digital butuh cadangan yang tidak digital."],
 "i-32": ["Tapi di ujung kota, ada rumah yang justru lebih ramai.", "Tapi di ujung kota, ada rumah yang justru lebih ramai."],
 "i-33": ["Rumah Nenek Sum. Cucu-cucunya tidak bisa main HP.", "Rumah Nenek Sum. Cucu-cucunya tidak bisa main ha pe."],
 "i-34": ["Mereka main di halaman, makan bersama, dan tidur lebih cepat.", "Mereka main di halaman, makan bersama, dan tidur lebih cepat."],
 "i-35": ["Radio tua dinyalakan lagi. Koran jadi rebutan.", "Radio tua dinyalakan lagi. Koran jadi rebutan."],
 "i-36": ["Seminggu tanpa sinyal, rumah yang paling sepi jadi paling hangat.", "Seminggu tanpa sinyal, rumah yang paling sepi jadi paling hangat."],
 "i-37": ["Seminggu berlalu. Kota B mulai menemukan caranya sendiri.", "Seminggu berlalu. Kota Be mulai menemukan caranya sendiri."],
 "i-38": ["Tunai kembali jadi raja. Catatan pindah ke buku tulis.", "Tunai kembali jadi raja. Catatan pindah ke buku tulis."],
 "i-39": ["Tetangga saling titip pesan, seperti zaman dulu.", "Tetangga saling titip pesan, seperti zaman dulu."],
 "i-40": ["Lalu, hari kedelapan, sinyal menyala lagi. Notifikasi meledak.", "Lalu, hari kedelapan, sinyal menyala lagi. Notifikasi meledak."],
 "i-41": ["Yang hilang bukan cuma uang. Juga kebiasaan kecil yang sempat kembali.", "Yang hilang bukan cuma uang. Juga kebiasaan kecil yang sempat kembali."],
 "i-42": ["Kembali ke menara sinyal di tengah kota.", "Kembali ke menara sinyal di tengah kota."],
 "i-43": ["Jadi, internet itu apa buat kita?", "Jadi, internet itu apa buat kita?"],
 "i-44": ["Seperti listrik. Baru terasa penting saat padam.", "Seperti listrik. Baru terasa penting saat padam."],
 "i-45": ["Tapi kadang, padam sebentar membuat kita ingat yang di sebelah kita.", "Tapi kadang, padam sebentar membuat kita ingat yang di sebelah kita."],
 "i-46": ["Kamu sanggup hidup di kota B seminggu? Tulis di kolom komentar.", "Kamu sanggup hidup di kota Be seminggu? Tulis di kolom komentar."]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', TEAL = '#257179';

// ---------- PETA KOTA (tampak atas): menara sinyal, warung Pak Hasan, toko Kak Rara, ATM, sekolah Dafa, rumah Nenek Sum ----------
const KOTA = { roads: [[0, 62, 192, 62], [50, 0, 50, 108], [146, 0, 146, 108], [50, 26, 146, 26]], plaza: [80, 40, 32, 14] };
const T = { menara: [96, 34], warung: [26, 50], toko: [26, 80], atm: [118, 50], sekolah: [172, 48], nenek: [172, 94] };
function kota(dx, s, on = true) {
  const tw = on ? 'menara_top_on' : 'menara_top_off';
  return [
    { id: s + 'tw0', sprite: tw, x: 96 + dx, y: 46, depth: 4.6 },
    { id: s + 'tw1', sprite: tw, x: 14 + dx, y: 30, scale: 0.7 }, { id: s + 'tw2', sprite: tw, x: 182 + dx, y: 26, scale: 0.7 },
    { sprite: 'warung_top', x: 26 + dx, y: 56 },
    { sprite: 'kos_top', x: 26 + dx, y: 86 },
    { sprite: 'bank_top', x: 118 + dx, y: 56 },
    { sprite: 'sekolah_top', x: 172 + dx, y: 56 },
    { sprite: 'rumah_top_1', x: 172 + dx, y: 100 },
    ...[64, 78, 92, 106, 120, 134].map((x, i) => ({ sprite: `rumah_top_${i % 4}`, x: x + dx, y: 104 })),
    ...[64, 78, 114, 128].map((x, i) => ({ sprite: `rumah_top_${(i + 2) % 4}`, x: x + dx, y: 18 })),
    ...[[8, 10], [34, 12], [8, 100], [160, 82], [186, 84], [186, 106], [64, 80], [130, 82], [74, 44], [158, 14]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => [
  { id: 'hasan' + k, sprite: 'hasan', x: 40 + dx, y: 58, scale: 0.75, tag: 'PAK HASAN', tagColor: TEAL },
  { id: 'rara' + k, sprite: 'rara', x: 40 + dx, y: 88, scale: 0.75, tag: 'KAK RARA', tagColor: '#b13e53' },
  { id: 'dafa' + k, sprite: 'dafa', x: 160 + dx, y: 60, scale: 0.75, tag: 'DAFA', tagColor: NAVY },
  { id: 'nenek' + k, sprite: 'nenek', x: 160 + dx, y: 102, scale: 0.75, tag: 'NENEK SUM', tagColor: '#7a3b8f' },
];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy', 'kid'];
function peta(steps, { split = true, c = cam('menara', 1.4), bOn = false, transition = 'clouds', n = [14, 14] } = {}) {
  const base = { transition, sky: 'map', map: KOTA, steps };
  return split ? { ...base, split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...kota(0, 'A'), ...kota(192, 'B', bOn)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK } }
    : { ...base, camera: c, props: kota(0, 'A'), actors: tokoh(0, 'A'), walkers: { n: n[0] + 4, sprites: WALK } };
}
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'clouds', sky: 'day', split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [GREEN, RED],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const SKOR = [['Transaksi', 'A'], ['Jualan', 'A'], ['Layanan publik', 'A'], ['Keluarga', 'B'], ['Waktu istirahat', 'B']];
const skor = n => ({ at: 0.3, score: SKOR.slice(0, n), dur: 1300 });

const STORY = {
  title: 'Andaikan Internet Mati Seminggu',
  audioDir: 'audio/internet-mati',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Sinyal hilang',
      scenes: [
        { ...peta([
          { together: [
            { camera: { x: 96, y: 54, zoom: 1 }, dur: 2600, ease: 'Cubic.easeOut' },
            C('i-01', [{ at: 'senin', clock: 'HARI 1' }, { at: 'mati', swapAll: 'Atw', to: 'menara_top_off', stagger: 220 }, { at: 'mati', kw: 'INTERNET *MATI*' },
              { at: 'seminggu', stamp: 'PADAM', at_: [0.5, 0.4] }]),
          ] },
          C('i-02', [{ at: 0, camera: cam('warung', 2.4), dur: 700 }, { at: 'kasir', emote: 'hasanA', icon: 'question', dur: 1100 }, { at: 'dipindai', kw: 'QR *GAGAL*' },
            { at: 'rara', camera: cam('toko', 2.4), dur: 700 }, { at: 'gelap', kw: 'LIVE *GELAP*' }, { at: 'gelap', emote: 'raraA', icon: 'sweat', dur: 1100 }]),
          C('i-03', [{ at: 0, camera: cam('nenek', 2.4), dur: 800 }, { at: 'tersenyum', emote: 'nenekA', icon: 'heart', dur: 1300 }, { at: 'tersenyum', kw: 'NENEK *SENYUM*' }, { at: 'ngobrol', sticker: 'cool', at_: Rt }]),
          { together: [{ camera: { x: 96, y: 54, zoom: 1 }, dur: 800 }, { mono: true }, C('i-04', [{ at: 'kok', kw: '*KOK BISA?*' }])] },
          { mono: false },
          { together: [{ title: 'ANDAIKAN', sub: 'Internet mati seminggu', dark: true, size: 30, dur: 2000 }, C('i-05')] },
        ], { split: false, c: cam('menara', 2.4), transition: undefined }), clock: 'HARI 1' },
        peta([
          C('i-06', [{ at: 'dua kota', kw: '*2* KOTA' }, { at: 'a, internet', focus: 'left' }, { at: 'a, internet', kw: 'A: INTERNET *NYALA*' },
            { at: 'be,', focus: 'right' }, { at: 'padam', kw: 'B: SINYAL *PADAM*' }, { at: 'padam', swapAll: 'Btw', to: 'menara_top_off', stagger: 200 },
            { at: 'padam', stamp: 'PADAM', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
          { together: [{ focus: 'both' }, { wait: 500 }] },
        ], { bOn: true, transition: 'cut', c: { x: 96, y: 54, zoom: 1.2 } }),
      ],
    },
    // ================= BAB 2 — SKALA =================
    {
      id: 'bab-2', title: 'Seberapa tergantung kita?',
      scenes: [
        peta([C('i-07', [{ at: 0, camera: { x: 96, y: 54, zoom: 1 }, dur: 1800 }, { at: 'menara', glow: 'Atw0', times: 2 }, { at: 'skalanya', kw: 'LIHAT *SKALANYA*' }])], { split: false, c: cam('menara', 2.4) }),
        {
          transition: 'clouds', sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: 96, y: 66, zoom: 1.2 },
          props: [{ sprite: 'building1', x: 20, y: 90 }, { sprite: 'building2', x: 44, y: 90 }, { sprite: 'building4', x: 150, y: 90 }, { sprite: 'building3', x: 176, y: 90 },
            ...[0, 1, 2, 3].map(i => ({ id: 'ph' + i, sprite: 'phone', x: 70 + i * 20, y: 86, scale: 0.55, depth: 12, hidden: true }))],
          actors: [{ id: 'w0', sprite: 'warga', x: 64, y: 100 }, { id: 'w1', sprite: 'girl', x: 84, y: 100 }, { id: 'w2', sprite: 'boy', x: 104, y: 100, face: 'left' }, { id: 'w3', sprite: 'warga2', x: 124, y: 100 }],
          steps: [
            C('i-08', [{ at: 'pengguna', card: 'APJII 2026', items: ['Pengguna internet Indonesia', '±235 juta orang'], x: 96, y: 30, stagger: 300, dur: 0 }, { at: 'dua ratus', kw: '*235 JUTA* PENGGUNA' },
              ...[0, 1, 2, 3].map(i => ({ at: 0.4 + i * 0.1, pop: 'ph' + i }))]),
            { clear: true },
            C('i-09', [{ at: 'delapan', chart: 'PENETRASI INTERNET', bars: [['Penduduk online', 81.7, GREEN]], max: 100, suffix: '%', place: 'right', y: 0.1, dur: 0 }, { at: 'delapan', kw: '*8 DARI 10* (81,7%)' }]),
            { clear: true },
            C('i-10', [{ at: 'empat', kw: '*4–6 JAM*/HARI' }, { at: 'empat', clock: 'JAM', from: 1, to: 6, dur: 1400 }, { at: 'sehari', emote: 'w1', icon: 'zzz', dur: 1000 }]),
            C('i-11', [{ at: 'bukan cuma', kw: 'BUKAN CUMA *MEDIA SOSIAL*', keepKw: true }, { at: 'padam', mono: true }], { punch: true }),
            { mono: false },
          ],
        },
      ],
    },
    // ================= BAB 3 — PAK HASAN & UANG =================
    {
      id: 'bab-3', title: 'Pak Hasan dan QRIS',
      scenes: [
        peta([C('i-12', [...dua(0, cam('warung', 2.4), 1500), { at: 'panik', kw: 'YANG PERTAMA *PANIK*' }, { at: 'hasan', glow: 'hasanB', times: 2 }])], { c: cam('menara', 1.8) }),
        dekat(dx => [{ sprite: 'warung', x: 66 + dx, y: 92, scale: 1.05, depth: 4 }, { id: (dx ? 'B' : 'A') + 'qr', sprite: 'qr_ok', x: 92 + dx, y: 84, scale: 1.2, depth: 12, hidden: true },
          { sprite: dx ? 'atm_err' : 'atm', x: 170 + dx, y: 101, depth: 5 }, { sprite: 'tree', x: 136 + dx },
          { id: (dx ? 'B' : 'A') + 'buku', sprite: 'form', x: 58 + dx, y: 66, scale: 1.2, depth: 14, hidden: true }],
          (dx, k) => [{ id: 'hasan' + k, sprite: 'hasan', x: 76 + dx, y: 101, tag: 'PAK HASAN', tagColor: TEAL },
            { id: 'beli' + k, sprite: 'warga2', x: 106 + dx, y: 101, face: 'left' },
            ...[0, 1, 2].map(i => ({ id: `q${i}${k}`, sprite: ['warga', 'girl', 'boy'][i], x: 210 + dx, y: 101, face: 'right', hidden: true }))], [
          C('i-13', [{ at: 0, pop: 'Aqr' }, { at: 0, pop: 'Bqr' }, { at: 'qris', kw: 'BAYAR PAKAI *QRIS*' }, { at: 'qris', emote: 'hasanA', icon: 'note', dur: 1000 }]),
          C('i-14', [{ at: 'semester', card: 'Bank Indonesia · Smt I 2026', items: ['12,55 miliar transaksi QRIS', '±Rp600 triliun'], x: 96, y: 26, stagger: 400, dur: 0 }, { at: 'dua belas', kw: '*12,5 MILIAR* TRANSAKSI' }]),
          { clear: true },
          C('i-15', [{ at: 'enam puluh', kw: '±*69 JUTA*/HARI' }, { at: 'enam puluh', label: '±69 JUTA/HARI (hitungan)', x: 96, y: 30, bg: GREEN, size: 11, dur: 0 }]),
          C('i-16', [{ at: 'usaha kecil', kw: '*97%* UMKM' }, { at: 'pak hasan', glow: 'hasanA', times: 2 }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('i-17', [{ at: 0, swap: 'Bqr', to: 'qr_fail' }, { at: 'tunai', emote: 'beliB', icon: 'sweat', dur: 1000 }, { at: 'antrean', kw: 'ANTRE *ATM*' },
            { at: 'antrean', enter: 'q0B', from: 'right', to: R(152), speed: 46 }, { at: 'antrean', enter: 'q1B', from: 'right', to: R(140), speed: 40 }, { at: 'mengular', enter: 'q2B', from: 'right', to: R(128), speed: 40 }])] },
          C('i-18', [{ at: 'kertas', pop: 'Bbuku' }, { at: 'kertas', label: 'BOLEH UTANG DULU', x: R(70), y: 52, bg: '#ef7d57', size: 12, dur: 0 }, { at: 'utang', kw: 'BUKU *UTANG*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('i-19', [skor(1), { at: 'gorengan', kw: 'DOMPET PENUH, *TAK BISA BELI GORENGAN*', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 1' }),
      ],
    },
    // ================= BAB 4 — KAK RARA =================
    {
      id: 'bab-4', title: 'Toko online Kak Rara',
      scenes: [
        peta([C('i-20', [...dua(0, cam('toko', 2.4), 1300), { at: 'seberang', kw: 'DI *SEBERANG* WARUNG' }, { at: 'sepi', emote: 'raraB', icon: 'sweat', dur: 1000 }])], { c: cam('warung', 2.4) }),
        dekat(dx => [{ sprite: 'house', x: 40 + dx, scale: 1 }, { sprite: 'tree', x: 176 + dx }, { sprite: 'table', x: 100 + dx, y: 101, depth: 5 },
          { id: (dx ? 'B' : 'A') + 'ring', sprite: 'ringlight_on', x: 124 + dx, y: 101, scale: 1.2, depth: 6 },
          { id: (dx ? 'B' : 'A') + 'pkt', sprite: 'paket', x: 70 + dx, y: 101, scale: 1.4, depth: 7, hidden: true }],
          (dx, k) => [{ id: 'rara' + k, sprite: 'rara', x: 100 + dx, y: 101, tag: 'KAK RARA', tagColor: '#b13e53' }], [
          C('i-21', [{ at: 'siaran', kw: 'JUALAN *SIARAN LANGSUNG*' }, { at: 'ratusan', label: 'LIVE · 312 PENONTON', x: 112, y: 44, bg: RED, size: 11, dur: 0 },
            { at: 'ratusan', label: 'LIVE · 287 PENONTON', x: R(112), y: 44, bg: RED, size: 11, dur: 0 }, { at: 'ratusan', emote: 'raraA', icon: 'heart', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('i-22', [{ at: 'tidak bisa', swap: 'Bring', to: 'ringlight_off' }, { at: 'nol', label: 'PESANAN: 0', x: R(112), y: 44, bg: '#333c57', size: 13, dur: 0 }, { at: 'nol', kw: 'PESANAN *0*' }])] },
          C('i-23', [{ at: 'paket', pop: 'Bpkt' }, { at: 'menumpuk', kw: 'PAKET *MENUMPUK*' }, { at: 'dilacak', emote: 'raraB', icon: 'question', dur: 1100 }]),
          { clear: true },
          { together: [C('i-24', [{ at: 'omzet', kw: 'OMZET *IKUT HILANG*' }]),
            { receipt: 'TOKO KAK RARA · 1 MINGGU (ilustrasi)', stagger: 380, lines: [['Pesanan masuk', '0'], ['Paket tertahan', '40'], ['Pelanggan pindah', 'banyak']], total: ['OMZET', '-1 BULAN'], note: 'ilustrasi · simulasi' }] },
          { clear: true },
          { together: [{ focus: 'both' }, C('i-25', [skor(2), { at: 'pintu', kw: 'TOKO *TANPA PINTU*', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 3' }),
      ],
    },
    // ================= BAB 5 — DAFA & LAYANAN PUBLIK =================
    {
      id: 'bab-5', title: 'Dafa dan layanan publik',
      scenes: [
        peta([C('i-26', [...dua(0, cam('sekolah', 2.4), 1500), { at: 'dafa', kw: 'ADIK KAK RARA, *DAFA*' }, { at: 'bingung', emote: 'dafaB', icon: 'question', dur: 1100 }])], { c: cam('toko', 2.4) }),
        dekat(dx => [{ sprite: 'papan_tulis', x: 128 + dx, y: 80, scale: 0.6, depth: 4 }, { sprite: 'table', x: 84 + dx, y: 101, depth: 5 },
          { id: (dx ? 'B' : 'A') + 'hp', sprite: 'phone', x: 84 + dx, y: 74, scale: 1.4, depth: 14, hidden: true },
          { id: (dx ? 'B' : 'A') + 'ks', sprite: 'form', x: 84 + dx, y: 74, scale: 1.3, depth: 14, hidden: true }],
          (dx, k) => [{ id: 'dafa' + k, sprite: 'dafa', x: 70 + dx, y: 101, tag: 'DAFA', tagColor: NAVY }, { id: 'guru' + k, sprite: 'warga', x: 140 + dx, y: 101, face: 'left', tag: 'GURU' }], [
          C('i-27', [{ at: 'daring', pop: 'Ahp' }, { at: 'daring', pop: 'Bhp' }, { at: 'daring', kw: 'TUGAS *DARING*' }, { at: 'grup', kw: 'PENGUMUMAN DI *GRUP*' }]),
          { together: [{ focus: 'right' }, C('i-28', [{ at: 0, hide: 'Bhp' }, { at: 'papan', move: 'guruB', to: R(128), speed: 30 }, { at: 'kertas', pop: 'Bks' }, { at: 'kertas', kw: 'KEMBALI KE *KERTAS*' }])] },
          { together: [{ focus: 'both' }, C('i-29', [{ at: 'pernah', kw: 'INI *PERNAH* TERJADI' },
            { at: 'juni', card: 'Juni 2024 · Pusat Data Nasional', items: ['Diserang ransomware', '±210 instansi terganggu', 'Imigrasi pulih 28 Juni'], x: 96, y: 26, stagger: 450, dur: 0 }, { at: 'ransomware', sticker: 'shock', at_: Rt }])] },
          C('i-30', [{ at: 'dua ratus', kw: '*210* INSTANSI' }, { at: 'imigrasi', kw: 'ANTREAN *IMIGRASI*' }, { at: 'berhari', emote: 'guruA', icon: 'sweat', dur: 1000 }]),
          { clear: true },
          C('i-31', [skor(3), { at: 'cadangan', kw: 'BUTUH *CADANGAN NON-DIGITAL*', keepKw: true }], { punch: true }),
        ], { clock: 'HARI 4' }),
      ],
    },
    // ================= BAB 6 — TWIST: NENEK SUM =================
    {
      id: 'bab-6', title: 'Twist: rumah Nenek Sum',
      scenes: [
        peta([C('i-32', [...dua(0, cam('nenek', 2.4), 1500), { at: 'ujung kota', kw: 'DI *UJUNG KOTA*' }, { at: 'ramai', kw: 'JUSTRU *LEBIH RAMAI*' }, { at: 'ramai', emote: 'nenekB', icon: 'heart', dur: 1100 }])], { c: cam('sekolah', 2.4) }),
        dekat(dx => [{ sprite: 'house', x: 60 + dx, scale: 1.3 }, { sprite: 'tree', x: 168 + dx }, { sprite: 'flower', x: 150 + dx }, { sprite: 'table', x: 112 + dx, y: 101, depth: 5 },
          ...(dx ? [] : [0, 1].map(i => ({ id: 'Aph' + i, sprite: 'phone', x: 128 + i * 20, y: 82, scale: 0.9, depth: 14 }))),
          { id: (dx ? 'B' : 'A') + 'radio', sprite: 'radio', x: 112 + dx, y: 88, scale: 1.2, depth: 9, hidden: true },
          { id: (dx ? 'B' : 'A') + 'nasi', sprite: 'nasi_bungkus', x: 104 + dx, y: 90, scale: 1, depth: 9, hidden: true }],
          (dx, k) => [{ id: 'nenek' + k, sprite: 'nenek', x: 92 + dx, y: 101, tag: 'NENEK SUM', tagColor: '#7a3b8f' },
            { id: 'c1' + k, sprite: 'kid', x: 130 + dx, y: 101, face: dx ? 'left' : 'right' }, { id: 'c2' + k, sprite: 'girl', x: 150 + dx, y: 101, face: dx ? 'left' : 'right' }], [
          { together: [{ focus: 'right' }, C('i-33', [{ at: 'nenek', kw: 'RUMAH *NENEK SUM*' }, { at: 'main', kw: 'CUCU *TANPA HP*' }, { at: 'main', jump: 'c1B', times: 2 }])] },
          C('i-34', [{ at: 'halaman', jump: 'c2B', times: 2 }, { at: 'makan', pop: 'Bnasi' }, { at: 'makan', kw: 'NGOBROL *LAGI*' }, { at: 'tidur', emote: 'c1B', icon: 'zzz', dur: 1000 }]),
          C('i-35', [{ at: 'radio', pop: 'Bradio' }, { at: 'radio', emote: 'nenekB', icon: 'note', dur: 1200 }, { at: 'radio', kw: 'RADIO *HIDUP*' }, { at: 'koran', label: 'KORAN JADI REBUTAN', x: R(112), y: 50, bg: '#ef7d57', size: 11, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'both' }, { tint: 0.14, color: '#ffcd75', side: 'right', dur: 800 }, C('i-36', [skor(4), { at: 'hangat', kw: 'YANG SEPI JADI *PALING HANGAT*', keepKw: true }], { punch: true })] },
          { tint: 0, side: 'right', dur: 300 },
        ], { clock: 'HARI 5' }),
      ],
    },
    // ================= BAB 7 — HARI KE-7 =================
    {
      id: 'bab-7', title: 'Hari ke-7',
      scenes: [
        peta([
          C('i-37', [{ at: 'seminggu', clock: 'HARI', from: 5, to: 7, dur: 1000 }, { at: 'kota be', focus: 'right' }, { at: 'caranya', kw: 'KOTA B *MENEMUKAN CARA*' }]),
          C('i-38', [{ at: 'tunai', camera: { ...cam('warung', 2), x: R(30) }, side: 'right', dur: 800 }, { at: 'tunai', crowd: 'goto', side: 'right', x: R(30), y: 66, spread: 12, frac: 0.5 },
            { at: 'raja', label: 'TUNAI = RAJA', x: R(30), y: 36, bg: GREEN, size: 12, dur: 0 }, { at: 'buku', kw: 'CATATAN DI *BUKU TULIS*' }]),
          C('i-39', [{ at: 0, camera: { x: R(96), y: 54, zoom: 1.2 }, side: 'right', dur: 900 }, { at: 'titip', crowd: 'roam', side: 'right' }, { at: 'titip', kw: 'TITIP *PESAN*' }, { at: 'zaman', emote: 'nenekB', icon: 'note', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('i-40', [{ at: 'kedelapan', clock: 'HARI 8' }, { at: 'menyala', swapAll: 'Btw', to: 'menara_top_on', stagger: 150 }, { at: 'meledak', label: 'NOTIF 999+', x: R(96), y: 22, bg: RED, size: 16, dur: 0 },
            { at: 'meledak', shake: 250 }, { at: 'meledak', sticker: 'shock', at_: Rt }, { at: 'meledak', kw: 'NOTIF *999+*' }])] },
          { clear: true },
          C('i-41', [skor(5), { at: 'kebiasaan', kw: 'KEBIASAAN KECIL *SEMPAT KEMBALI*', keepKw: true }], { punch: true }),
        ], { c: { x: 96, y: 54, zoom: 1.2 }, n: [14, 12] }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'bab-8', title: 'Baru terasa saat padam',
      scenes: [
        { ...peta([
          C('i-42', [{ at: 0, camera: cam('menara', 2.4), dur: 1400 }, { at: 'menara', kw: 'KEMBALI KE *MENARA*' }, { at: 'menara', glow: 'Atw0', times: 2 }]),
          C('i-43', [{ at: 0, kw: 'INTERNET *ITU APA?*' }]),
          C('i-44', [{ at: 'listrik', kw: 'SEPERTI *LISTRIK*' }, { at: 'padam', swapAll: 'Atw', to: 'menara_top_off', stagger: 80 }, { at: 'padam', kw: 'TERASA SAAT *PADAM*' }, { at: 0.95, swapAll: 'Atw', to: 'menara_top_on', stagger: 80 }]),
          C('i-45', [{ at: 0, camera: { x: 96, y: 54, zoom: 1 }, dur: 2400 }, { at: 'ingat', kw: 'INGAT *YANG DEKAT*' }, { at: 'sebelah', emote: 'nenekA', icon: 'heart', dur: 1200 }]),
          { together: [{ clear: true }, { score: SKOR, head: 'SKOR AKHIR', dur: 1200 }] },
          C('i-46', [{ at: 'sanggup', kw: 'SANGGUP DI *KOTA B*?' }, { at: 'tulis', label: 'LIKE', x: 66, y: 24, bg: '#3b5dc9', dur: 0 }, { at: 'tulis', label: 'KOMEN', x: 100, y: 24, bg: GREEN, dur: 0 },
            { at: 'tulis', label: 'SUBSCRIBE', x: 140, y: 24, bg: '#e43b44', dur: 0 }, { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true }]),
          { wait: 1200 },
        ], { split: false, c: { x: 96, y: 54, zoom: 1.2 } }), clock: 'HARI 8' },
      ],
    },
  ],
};
