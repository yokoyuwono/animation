// ============================================================
//  "ANDAIKAN INDONESIA TANPA KORUPTOR" — seri Andaikan, gaya peta
//  Naskah: stories/tanpa-koruptor.naskah.md · Skema: stories/tanpa-koruptor.plan.md
//  Split: kiri KOTA A (seperti sekarang), kanan KOTA B (tanpa koruptor). Tokoh fiktif; angka bersumber/berlabel.
//  only: "long" = kalimat jembatan kompilasi; "short" = pembuka/CTA versi per bab.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "k-01": ["Bayangkan. Mulai besok, tidak ada satu pun koruptor di Indonesia.", "Bayangkan. Mulai besok, tidak ada satu pun koruptor di Indonesia."],
 "k-02": ["Jalan berlubang ditambal dengan aspal tebal.", "Jalan berlubang ditambal dengan aspal tebal."],
 "k-03": ["Atap sekolah Dinda yang bocor, akhirnya diganti.", "Atap sekolah Dinda yang bocor, akhirnya diganti."],
 "k-04": ["Andaikan Indonesia tanpa koruptor.", "Andaikan Indonesia tanpa koruptor."],
 "k-05": ["Kita bandingkan dua kota. A, seperti sekarang. B, bersih dari korupsi.", "Kita bandingkan dua kota. A, seperti sekarang. Be, bersih dari korupsi."],
 "k-06": ["Tapi anehnya, ada yang justru rugi. Kita lihat nanti.", "Tapi anehnya, ada yang justru rugi. Kita lihat nanti."],
 "k-07": ["Dari balai kota di tengah kota ini, kita lihat dulu skalanya.", "Dari balai kota di tengah kota ini, kita lihat dulu skalanya."],
 "k-07s": ["Seberapa besar sebenarnya korupsi di Indonesia?", "Seberapa besar sebenarnya korupsi di Indonesia?"],
 "k-08": ["Skor persepsi korupsi kita: 34 dari 100.", "Skor persepsi korupsi kita: tiga puluh empat dari seratus."],
 "k-09": ["Kerugian negara dari kasus yang divonis setahun: sekitar Rp300 triliun.", "Kerugian negara dari kasus yang divonis setahun: sekitar tiga ratus triliun rupiah."],
 "k-10": ["Yang berhasil dikembalikan? Kurang dari 5%.", "Yang berhasil dikembalikan? Kurang dari lima persen."],
 "k-11": ["Uang itu bukan hilang. Ia cuma pindah ke kantong yang salah.", "Uang itu bukan hilang. Ia cuma pindah ke kantong yang salah."],
 "k-12": ["Dari balai kota, uang proyek mengalir ke jalan Pak Slamet.", "Dari balai kota, uang proyek mengalir ke jalan Pak Slamet."],
 "k-12s": ["Kenapa jalan di depan rumahmu cepat berlubang lagi?", "Kenapa jalan di depan rumahmu cepat berlubang lagi?"],
 "k-13": ["Pak Slamet kontraktor kecil. Ia mengerjakan jalan kampung.", "Pak Slamet kontraktor kecil. Ia mengerjakan jalan kampung."],
 "k-14": ["Di kota A, amplop berpindah tangan di atas meja.", "Di kota A, amplop berpindah tangan di atas meja."],
 "k-15": ["Anggarannya digunting di tiap meja, sampai tipis seperti kerupuk.", "Anggarannya digunting di tiap meja, sampai tipis seperti kerupuk."],
 "k-16": ["Aspalnya tipis. Setahun kemudian, berlubang lagi.", "Aspalnya tipis. Setahun kemudian, berlubang lagi."],
 "k-17": ["Di kota B, seluruh anggaran sampai ke jalan. Aspalnya tebal dan awet.", "Di kota Be, seluruh anggaran sampai ke jalan. Aspalnya tebal dan awet."],
 "k-18": ["Jalan yang awet itu murah. Yang mahal, jalan yang dibangun dua kali.", "Jalan yang awet itu murah. Yang mahal, jalan yang dibangun dua kali."],
 "k-19": ["Lewat jalan itu, Dinda berangkat ke sekolah.", "Lewat jalan itu, Dinda berangkat ke sekolah."],
 "k-19s": ["Kalau hujan, kelas Dinda ikut kehujanan.", "Kalau hujan, kelas Dinda ikut kehujanan."],
 "k-20": ["Atap kelasnya bocor. Kalau hujan, buku ikut basah.", "Atap kelasnya bocor. Kalau hujan, buku ikut basah."],
 "k-21": ["Pungli jadi penyalahgunaan dana pendidikan yang paling sering ditemukan.", "Pungli jadi penyalahgunaan dana pendidikan yang paling sering ditemukan."],
 "k-22": ["Di kota B, dana sekolah utuh. Atap diganti, perpustakaan terisi.", "Di kota Be, dana sekolah utuh. Atap diganti, perpustakaan terisi."],
 "k-23": ["Korupsi di sekolah tidak hanya mencuri uang. Ia mencuri masa depan.", "Korupsi di sekolah tidak hanya mencuri uang. Ia mencuri masa depan."],
 "k-24": ["Ibu Dinda, Bu Wati, mau buka toko kue di samping sekolah.", "Ibu Dinda, Bu Wati, mau buka toko kue di samping sekolah."],
 "k-24s": ["Bu Wati mau buka toko kue. Masalahnya: izin.", "Bu Wati mau buka toko kue. Masalahnya: izin."],
 "k-25": ["Di kota A, antrean loket panjang. Lalu ada yang berbisik.", "Di kota A, antrean loket panjang. Lalu ada yang berbisik."],
 "k-26": ["\"Biar cepat, ada uang rokoknya?\"", "[whispering] Biar cepat, ada uang rokoknya?"],
 "k-27": ["Menurut BPS, sekitar 17% warga pernah membayar suap di layanan publik.", "Menurut be pe es, sekitar tujuh belas persen warga pernah membayar suap di layanan publik."],
 "k-28": ["Di kota B, izinnya beres lewat daring. Satu hari, tanpa amplop.", "Di kota Be, izinnya beres lewat daring. Satu hari, tanpa amplop."],
 "k-29": ["Amplop kecil di loket itu pajak tak resmi untuk setiap usaha.", "Amplop kecil di loket itu pajak tak resmi untuk setiap usaha."],
 "k-30": ["Tapi di depan balai kota yang sama, Bang Jali melamun.", "Tapi di depan balai kota yang sama, Bang Jali melamun."],
 "k-30s": ["Korupsi hilang. Tapi calo ini malah nganggur.", "Korupsi hilang. Tapi calo ini malah nganggur."],
 "k-31": ["Bang Jali calo. Dulu ia \"membantu\" urusan surat jadi lebih cepat.", "Bang Jali calo. Dulu ia \"membantu\" urusan surat jadi lebih cepat."],
 "k-32": ["Di kota B, tidak ada lagi jalur belakang. Penghasilannya hilang.", "Di kota Be, tidak ada lagi jalur belakang. Penghasilannya hilang."],
 "k-33": ["Dan anehnya, beberapa proyek jadi lebih lambat.", "Dan anehnya, beberapa proyek jadi lebih lambat."],
 "k-34": ["Pejabat jujur pun takut salah tanda tangan. Semua dicek tiga kali.", "Pejabat jujur pun takut salah tanda tangan. Semua dicek tiga kali."],
 "k-35": ["Ini bukan alasan membenarkan korupsi. Bersih saja tidak cukup, aturan juga harus sederhana.", "Ini bukan alasan membenarkan korupsi. Bersih saja tidak cukup, aturan juga harus sederhana."],
 "k-36": ["Lima tahun berlalu. Kota B mulai terlihat berbeda.", "Lima tahun berlalu. Kota Be mulai terlihat berbeda."],
 "k-36s": ["Lima tahun tanpa koruptor. Apa yang berubah?", "Lima tahun tanpa koruptor. Apa yang berubah?"],
 "k-37": ["Toko kue Bu Wati ramai. Dinda lulus dengan perpustakaan penuh.", "Toko kue Bu Wati ramai. Dinda lulus dengan perpustakaan penuh."],
 "k-38": ["Warga lebih rela bayar pajak, karena hasilnya kelihatan.", "Warga lebih rela bayar pajak, karena hasilnya kelihatan."],
 "k-39": ["Investor datang, karena biaya siluman hilang.", "Investor datang, karena biaya siluman hilang."],
 "k-40": ["Bang Jali kini membuka jasa antar dokumen, resmi dan bertarif.", "Bang Jali kini membuka jasa antar dokumen, resmi dan bertarif."],
 "k-41": ["Yang tumbuh paling cepat ternyata satu hal: rasa percaya.", "Yang tumbuh paling cepat ternyata satu hal: rasa percaya."],
 "k-42": ["Kembali ke balai kota di tengah kota.", "Kembali ke balai kota di tengah kota."],
 "k-42s": ["Jadi, koruptor itu sebenarnya siapa?", "Jadi, koruptor itu sebenarnya siapa?"],
 "k-43": ["Jadi, koruptor itu siapa?", "Jadi, koruptor itu siapa?"],
 "k-44": ["Bukan cuma orang di gedung tinggi. Kadang dimulai dari amplop kecil di loket.", "Bukan cuma orang di gedung tinggi. Kadang dimulai dari amplop kecil di loket."],
 "k-45": ["Kota B tidak dibangun oleh pahlawan. Ia dibangun oleh orang yang menolak.", "Kota Be tidak dibangun oleh pahlawan. Ia dibangun oleh orang yang menolak."],
 "k-46": ["Setuju nggak: bersih saja tidak cukup, harus cepat juga? Tulis di komentar.", "Setuju nggak: bersih saja tidak cukup, harus cepat juga? Tulis di komentar."],
 "k-47": ["Atau tag temanmu yang bakal jadi Bang Jali kalau korupsi hilang besok!", "Tag temanmu yang bakal jadi Bang Jali kalau korupsi hilang besok!"]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', KUNING = '#c9a85a';

// ---------- PETA KOTA (tampak atas): balai kota di tengah, jalan kampung Pak Slamet, sekolah Dinda, toko kue Bu Wati ----------
const KOTA = { roads: [[0, 60, 192, 60], [96, 60, 96, 108], [100, 86, 192, 86], [30, 0, 30, 60]], plaza: [78, 50, 36, 8] };
const T = { balai: [96, 36], jalan: [146, 84], sekolah: [140, 44], toko: [174, 46], jali: [116, 60] };
const JL = [112, 136, 160, 184];
function kota(dx, s, { mulus = false, investor = false } = {}) {
  return [
    { sprite: 'balai_top', x: 96 + dx, y: 46 },
    ...JL.map((x, i) => ({ id: `${s}jl${i}`, sprite: mulus ? 'jalan_mulus' : 'jalan_rusak', x: x + dx, y: 86, center: true, depth: 3.2 })),
    { sprite: 'sekolah_top', x: 140 + dx, y: 52 },
    { sprite: 'roti_top', x: 176 + dx, y: 52 },
    { id: s + 'mall', sprite: 'mall_top', x: 52 + dx, y: 26, hidden: !investor },
    { id: s + 'bank', sprite: 'bank_top', x: 62 + dx, y: 80, hidden: !investor },
    ...[[8, 76], [8, 92], [22, 104], [40, 104], [56, 104], [74, 104]].map(([x, y], i) => ({ sprite: `rumah_top_${i % 4}`, x: x + dx, y })),
    ...[[116, 104], [136, 104], [156, 104], [176, 104]].map(([x, y], i) => ({ sprite: `rumah_top_${(i + 2) % 4}`, x: x + dx, y })),
    ...[[10, 12], [52, 10], [70, 12], [160, 10], [184, 12], [10, 40], [120, 22], [78, 84], [44, 70]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => [
  { id: 'jali' + k, sprite: 'jali', x: 116 + dx, y: 62, scale: 0.75, tag: 'BANG JALI', tagColor: '#c98a1a' },
  { id: 'slamet' + k, sprite: 'slamet', x: 150 + dx, y: 92, scale: 0.75, tag: 'PAK SLAMET', tagColor: '#ef7d57' },
  { id: 'dinda' + k, sprite: 'dinda', x: 132 + dx, y: 64, scale: 0.75, tag: 'DINDA', tagColor: NAVY },
  { id: 'wati' + k, sprite: 'wati', x: 170 + dx, y: 64, scale: 0.75, tag: 'BU WATI', tagColor: '#7a3b8f' },
];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy', 'kid'];
function peta(steps, { split = true, c = cam('balai', 1.6), transition = 'clouds', n = [12, 12], aMulus = false, bInvestor = false } = {}) {
  const base = { transition, sky: 'map', map: KOTA, steps };
  return split ? { ...base, split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [RED, GREEN],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...kota(0, 'A', { mulus: aMulus }), ...kota(192, 'B', { mulus: true, investor: bInvestor })], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK } }
    : { ...base, camera: c, props: kota(0, 'A', { mulus: aMulus }), actors: tokoh(0, 'A'), walkers: { n: n[0] + 4, sprites: WALK } };
}
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'clouds', sky: 'day', split: true, focus: 'both', tags: ['KOTA A', 'KOTA B'], tagColors: [RED, GREEN],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const S_ = dx => dx ? 'B' : 'A';
// papan skor: B = kota tanpa koruptor
const SKOR = [['Infrastruktur', 'B'], ['Pendidikan', 'B'], ['Usaha', 'B'], ['Kecepatan proyek', 'A'], ['Kepercayaan', 'B']];
const SIDES = ['B', 'A'];
const skor = n => ({ at: 0.35, score: SKOR.slice(0, n), sides: SIDES, corner: true, dur: 2000 });
const kutip = (quote, sub) => ({ quote, sub, dur: 1500 });

const STORY = {
  title: 'Andaikan Indonesia Tanpa Koruptor',
  audioDir: 'audio/tanpa-koruptor',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Kota yang tiba-tiba jujur',
      scenes: [
        { ...peta([
          // 3 detik pertama: "dunia baru" penuh, belum terbelah
          { together: [{ camera: { x: 96, y: 56, zoom: 1 }, dur: 2800, ease: 'Cubic.easeOut' },
            C('k-01', [{ at: 'koruptor', kw: 'TANPA *KORUPTOR*' }, { at: 'koruptor', stamp: 'BERSIH', color: GREEN, at_: [0.5, 0.4] }])] },
          C('k-02', [{ at: 0, camera: cam('jalan', 2.4), dur: 700 }, { at: 'ditambal', swapAll: 'Ajl', to: 'jalan_mulus', stagger: 220 }, { at: 'ditambal', work: 'slametA' }, { at: 'tebal', kw: 'ASPAL *TEBAL*' }]),
          C('k-03', [{ at: 0, camera: cam('sekolah', 2.4), dur: 700 }, { at: 0, work: 'slametA', stop: true }, { at: 'diganti', label: 'ATAP BARU!', x: 140, y: 30, bg: GREEN, size: 12, dur: 0 },
            { at: 'diganti', kw: 'SEKOLAH *BARU*' }, { at: 'diganti', emote: 'dindaA', icon: 'heart', dur: 1100 }]),
          { clear: true },
          { together: [{ title: 'ANDAIKAN', sub: 'Indonesia tanpa koruptor', dark: true, size: 30, dur: 2000 }, C('k-04')] },
        ], { split: false, c: cam('balai', 2.6), transition: undefined, aMulus: false }), clock: 'TAHUN 1' },
        peta([
          C('k-05', [{ at: 'dua kota', kw: '*2* KOTA' }, { at: 'a, seperti', focus: 'left' }, { at: 'a, seperti', kw: 'A: *SEPERTI SEKARANG*' },
            { at: 'be,', focus: 'right' }, { at: 'bersih', kw: 'B: *BERSIH*' }, { at: 'bersih', stamp: 'BERSIH', color: GREEN, at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
          { together: [{ focus: 'right' }, C('k-06', [{ at: 0, camera: { ...cam('jali', 3), x: R(116) }, side: 'right', dur: 900 }, { at: 'rugi', emote: 'jaliB', icon: 'question', dur: 1500 },
            { at: 'rugi', sfx: 'jangkrik', vol: 0.8 }, { at: 'rugi', kw: 'ADA YANG *JUSTRU RUGI*' }])] },
          { together: [{ focus: 'both' }, { wait: 300 }] },
        ], { transition: 'cut', c: { x: 96, y: 56, zoom: 1.2 } }),
      ],
    },
    // ================= BAB 2 — SKALA =================
    {
      id: 'bab-2', title: 'Seberapa besar korupsi kita?',
      scenes: [
        peta([C('k-07', [{ at: 0, camera: { x: 96, y: 56, zoom: 1 }, dur: 1800 }, { at: 'skalanya', kw: 'LIHAT *SKALANYA*' }], { only: 'long' }),
          C('k-07s', [{ at: 0, camera: { x: 96, y: 56, zoom: 1 }, dur: 1800 }, { at: 'korupsi', kw: 'SEBERAPA *BESAR?*' }], { only: 'short' })], { split: false, c: cam('balai', 2.6) }),
        {
          transition: 'clouds', sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: 96, y: 70, zoom: 1.3 },
          props: [{ sprite: 'building1', x: 18, y: 90 }, { sprite: 'building2', x: 40, y: 90 }, { sprite: 'building4', x: 154, y: 90 }, { sprite: 'building3', x: 178, y: 90 },
            { sprite: 'table', x: 96, y: 101, depth: 5 },
            { id: 'kue', sprite: 'coins_pile', x: 84, y: 82, scale: 2.4, depth: 8, hidden: true },
            { id: 'amp', sprite: 'amplop', x: 128, y: 86, scale: 2.2, depth: 9, hidden: true },
            { id: 'remah', sprite: 'coin', x: 84, y: 90, scale: 1.4, depth: 9, hidden: true }],
          actors: [{ id: 'w1', sprite: 'warga', x: 56, y: 101 }, { id: 'w2', sprite: 'girl', x: 140, y: 101, face: 'left' }],
          steps: [
            C('k-08', [{ at: 'skor', chart: 'INDEKS PERSEPSI KORUPSI 2025', bars: [['Indonesia', 34, '#ef7d57']], max: 100, suffix: '/100', place: 'right', y: 0.1, dur: 0 },
              { at: 'tiga puluh', kw: 'IPK *34*/100' }, { at: 'seratus', label: 'Sumber: Transparency International', x: 96, y: 112, bg: '#333c57', size: 8, dur: 0 }]),
            { clear: true },
            C('k-09', [{ at: 'kerugian', pop: 'kue' }, { at: 'tiga ratus', kw: '±*Rp300 TRILIUN*' }, { at: 'tiga ratus', label: 'Sumber: ICW (kasus divonis, setahun)', x: 96, y: 112, bg: '#333c57', size: 8, dur: 0 },
              { at: 'triliun', emote: 'w1', icon: 'exclaim', dur: 1000 }]),
            C('k-10', [{ at: 0, pop: 'amp' }, { at: 'dikembalikan', move: 'kue', to: 128, speed: 60 }, { at: 'kurang', hide: 'kue' }, { at: 'kurang', pop: 'remah' },
              { at: 'kurang', kw: 'KEMBALI *<5%*' }, { at: 'persen', label: '≈ Rp1 JUTA/ORANG (hitungan)', x: 84, y: 40, bg: RED, size: 9, dur: 0 }]),
            { clear: true },
            C('k-11', [{ at: 'kantong', kw: 'PINDAH KE *KANTONG YANG SALAH*', keepKw: true }, { at: 'kantong', glow: 'amp', times: 2 }], { punch: true }),
            kutip('Uang itu bukan hilang. Ia cuma pindah ke kantong yang salah.', 'Sumber: TI 2025 · ICW'),
          ],
        },
      ],
    },
    // ================= BAB 3 — JALAN PAK SLAMET =================
    {
      id: 'bab-3', title: 'Jalan Pak Slamet',
      scenes: [
        peta([C('k-12', [...dua(0, cam('jalan', 2.4), 1500), { at: 'slamet', glow: 'slametA', times: 2 }, { at: 'mengalir', kw: 'UANG PROYEK *MENGALIR*' }], { only: 'long' }),
          C('k-12s', [...dua(0, cam('jalan', 2.4), 1500), { at: 'berlubang', kw: 'KENAPA *CEPAT BERLUBANG?*' }], { only: 'short' })], { c: cam('balai', 2) }),
        dekat(dx => [{ sprite: 'building2', x: 30 + dx, y: 90 }, { sprite: 'table', x: 56 + dx, y: 101, depth: 5 }, { sprite: 'tree', x: 182 + dx },
          { id: S_(dx) + 'asp', sprite: dx ? 'aspal_tebal' : 'aspal_tipis', x: 140 + dx, y: 104, depth: 6, hidden: true },
          { id: S_(dx) + 'amp', sprite: 'amplop', x: 44 + dx, y: 86, scale: 1.3, depth: 12, hidden: true },
          { id: S_(dx) + 'gt', sprite: 'gunting', x: 56 + dx, y: 74, scale: 1.6, depth: 13, hidden: true }],
          (dx, k) => [{ id: 'p1' + k, sprite: 'petugas', x: 40 + dx, y: 101 }, { id: 'p2' + k, sprite: 'warga2', x: 72 + dx, y: 101, face: 'left' },
            { id: 'slamet' + k, sprite: 'slamet', x: 120 + dx, y: 101, tag: 'PAK SLAMET', tagColor: '#ef7d57' }], [
          { together: [{ work: 'slametA' }, { work: 'slametB' }, C('k-13', [{ at: 0, camera: { x: 130, y: 80, zoom: VERT ? 1.5 : 1.9 }, dur: 600 }, { at: 0, camera: { x: R(130), y: 80, zoom: VERT ? 1.5 : 1.9 }, side: 'right', dur: 600 },
            { at: 'kontraktor', kw: 'KONTRAKTOR *KECIL*' }])] },
          { together: [{ focus: 'left' }, { camera: { x: 56, y: 80, zoom: VERT ? 1.5 : 1.9 }, dur: 700 }, C('k-14', [{ at: 'amplop', pop: 'Aamp' }, { at: 'tangan', move: 'Aamp', to: 66, speed: 30 },
            { at: 'meja', kw: 'AMPLOP *DI ATAS MEJA*' }, { at: 'meja', emote: 'p2A', icon: 'note', dur: 1000 }])] },
          { together: [C('k-15', [{ at: 'digunting', pop: 'Agt' }, { at: 'digunting', sfx: 'gunting' }, { at: 'kerupuk', kw: 'TIPIS *SEPERTI KERUPUK*' }]),
            { receipt: 'ANGGARAN JALAN · KOTA A (ilustrasi)', stagger: 380, lines: [['Anggaran awal', 'Rp1 M'], ['Meja 1', '-Rp150 jt'], ['Meja 2', '-Rp200 jt'], ['Meja 3', '-Rp150 jt']], total: ['SAMPAI ASPAL', 'Rp500 jt'], note: 'ilustrasi · simulasi' }] },
          { clear: true },
          { together: [{ camera: { x: 140, y: 82, zoom: VERT ? 1.5 : 1.9 }, dur: 700 }, C('k-16', [{ at: 0, pop: 'Aasp' }, { at: 'setahun', swap: 'Aasp', to: 'aspal_lubang' }, { at: 'berlubang', kw: '*BERLUBANG* LAGI' },
            { at: 'berlubang', work: 'slametA', stop: true }, { at: 'berlubang', emote: 'slametA', icon: 'sweat', dur: 1100 }])] },
          { together: [{ focus: 'right' }, { camera: { x: R(140), y: 82, zoom: VERT ? 1.5 : 1.9 }, side: 'right', dur: 700 }, C('k-17', [{ at: 'seluruh', pop: 'Basp' }, { at: 'awet', kw: 'ASPAL *AWET*' },
            { at: 'awet', label: 'TEBAL & AWET', x: R(140), y: 66, bg: GREEN, size: 12, dur: 0 }, { at: 'awet', emote: 'slametB', icon: 'heart', dur: 1000 }])] },
          { clear: true },
          { together: [{ focus: 'both' }, C('k-18', [skor(1), { at: 'dua kali', kw: 'YANG MAHAL: *DIBANGUN DUA KALI*', keepKw: true }], { punch: true })] },
          kutip('Jalan yang awet itu murah. Yang mahal, jalan yang dibangun dua kali.', 'Infrastruktur: B ✓'),
        ], { clock: 'TAHUN 1' }),
      ],
    },
    // ================= BAB 4 — SEKOLAH DINDA =================
    {
      id: 'bab-4', title: 'Sekolah Dinda',
      scenes: [
        peta([C('k-19', [...dua(0, cam('sekolah', 2.6), 1500), { at: 'dinda', glow: 'dindaA', times: 2 }, { at: 'sekolah', kw: 'DINDA *KE SEKOLAH*' }], { only: 'long' }),
          C('k-19s', [...dua(0, cam('sekolah', 2.6), 1500), { at: 'kehujanan', kw: 'KELAS *KEHUJANAN*' }, { at: 'kehujanan', emote: 'dindaA', icon: 'sweat', dur: 1000 }], { only: 'short' })], { c: cam('jalan', 2.4), aMulus: false }),
        dekat(dx => [{ id: S_(dx) + 'atap', sprite: 'atap_bocor', x: 100 + dx, y: 52, depth: 7 }, { sprite: 'papan_tulis', x: 66 + dx, y: 82, scale: 0.6, depth: 4 },
          { sprite: 'table', x: 104 + dx, y: 101, depth: 5 }, { id: S_(dx) + 'buku', sprite: 'buku', x: 104 + dx, y: 88, scale: 1.4, depth: 9 },
          ...[0, 1, 2].map(i => ({ id: `${S_(dx)}tt${i}`, sprite: 'tetes', x: 104 + dx, y: 62 + i * 9, scale: 1.4, depth: 10, hidden: true })),
          { id: S_(dx) + 'rak', sprite: 'rak_buku', x: 148 + dx, y: 101, depth: 5, hidden: true }],
          (dx, k) => [{ id: 'dinda' + k, sprite: 'dinda', x: 86 + dx, y: 101, tag: 'DINDA', tagColor: NAVY }], [
          C('k-20', [...[0, 1, 2].flatMap(i => [{ at: 0.2 + i * 0.12, pop: 'Att' + i }, { at: 0.2 + i * 0.12, pop: 'Btt' + i }]), { at: 'bocor', kw: 'ATAP *BOCOR*' },
            { at: 'basah', swap: 'Abuku', to: 'buku_basah' }, { at: 'basah', swap: 'Bbuku', to: 'buku_basah' }]),
          // jeda 1 detik tanpa narasi: tetes mengenai buku Dinda
          { together: [{ focus: 'left' }, { camera: { x: 100, y: 82, zoom: VERT ? 2 : 2.6 }, dur: 600 }, { sfx: 'tetes' }, { emote: 'dindaA', icon: 'sweat', dur: 1000 }] },
          C('k-21', [{ at: 'pungli', kw: '*PUNGLI* DANA SEKOLAH' }, { at: 'pungli', label: 'Sumber: ICW (via Databoks)', x: 100, y: 112, bg: '#333c57', size: 8, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'right' }, { camera: { x: R(110), y: 80, zoom: VERT ? 1.4 : 1.8 }, side: 'right', dur: 700 }, C('k-22', [{ at: 'utuh', swap: 'Batap', to: 'atap_baru' }, { at: 'utuh', hide: 'Btt0' }, { at: 'utuh', hide: 'Btt1' }, { at: 'utuh', hide: 'Btt2' },
            { at: 'atap diganti', swap: 'Bbuku', to: 'buku' }, { at: 'perpustakaan', pop: 'Brak' }, { at: 'perpustakaan', kw: 'BUKU *BARU*' }, { at: 'terisi', sticker: 'party', at_: Rt }])] },
          { clear: true },
          { together: [{ focus: 'both' }, C('k-23', [skor(2), { at: 'masa depan', kw: 'IA MENCURI *MASA DEPAN*', keepKw: true }], { punch: true })] },
          kutip('Korupsi di sekolah tidak hanya mencuri uang. Ia mencuri masa depan.', 'Pendidikan: B ✓'),
        ], { clock: 'TAHUN 2' }),
      ],
    },
    // ================= BAB 5 — BU WATI URUS IZIN =================
    {
      id: 'bab-5', title: 'Bu Wati urus izin',
      scenes: [
        peta([C('k-24', [...dua(0, cam('toko', 2.6), 1500), { at: 'wati', glow: 'watiA', times: 2 }, { at: 'toko kue', kw: 'BUKA *TOKO KUE*' }], { only: 'long' }),
          C('k-24s', [...dua(0, cam('toko', 2.6), 1500), { at: 'izin', kw: 'MASALAHNYA: *IZIN*' }], { only: 'short' })], { c: cam('sekolah', 2.6) }),
        dekat(dx => [{ sprite: 'loket', x: 52 + dx, y: 101, depth: 4 }, { sprite: 'tree', x: 178 + dx },
          { id: S_(dx) + 'amp', sprite: 'amplop', x: 70 + dx, y: 80, scale: 1.4, depth: 12, hidden: true },
          { id: S_(dx) + 'hp', sprite: 'phone', x: 150 + dx, y: 76, scale: 1.3, depth: 12, hidden: true }],
          (dx, k) => [{ id: 'ptg' + k, sprite: 'petugas', x: 52 + dx, y: 88, scale: 0.9, depth: 3 },
            ...(dx ? [] : [0, 1, 2, 3].map(i => ({ id: `q${i}A`, sprite: ['warga', 'girl', 'warga2', 'boy'][i], x: 80 + i * 13, y: 101, face: 'left' }))),
            { id: 'wati' + k, sprite: 'wati', x: dx ? 140 + dx : 140, y: 101, face: 'left', tag: 'BU WATI', tagColor: '#7a3b8f' }], [
          { together: [{ focus: 'left' }, C('k-25', [{ at: 'antrean', kw: 'ANTREAN *PANJANG*' }, { at: 'berbisik', emote: 'ptgA', icon: 'note', dur: 1000 }])] },
          C('k-26', [{ at: 0, pop: 'Aamp' }, { at: 0, label: 'UANG ROKOK?', x: 70, y: 60, bg: RED, size: 12, dur: 0 }, { at: 0.2, emote: 'watiA', icon: 'question', dur: 1200 }]),
          C('k-27', [{ at: 'tujuh belas', kw: '±*17%* PERNAH SUAP' }, { at: 'tujuh belas', label: 'Sumber: BPS (IPAK 2024)', x: 96, y: 112, bg: '#333c57', size: 8, dur: 0 }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('k-28', [{ at: 'daring', pop: 'Bhp' }, { at: 'satu hari', label: 'IZIN TERBIT · 1 HARI', x: R(150), y: 56, bg: GREEN, size: 11, dur: 0 },
            { at: 'satu hari', stamp: 'TERBIT', color: GREEN, at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }, { at: 'amplop', kw: '*1 HARI*, TANPA AMPLOP' }, { at: 'amplop', emote: 'watiB', icon: 'heart', dur: 1000 }])] },
          { clear: true },
          { together: [{ focus: 'both' }, C('k-29', [skor(3), { at: 'pajak', kw: '*PAJAK TAK RESMI* SETIAP USAHA', keepKw: true }], { punch: true })] },
          kutip('Amplop kecil di loket itu pajak tak resmi untuk setiap usaha.', 'Usaha: B ✓'),
        ], { clock: 'TAHUN 2' }),
      ],
    },
    // ================= BAB 6 — TWIST: BANG JALI =================
    {
      id: 'bab-6', title: 'Twist: yang justru rugi',
      scenes: [
        peta([
          { only: 'short', together: [{ label: 'BUKAN PEMBENARAN KORUPSI', x: T.toko[0], y: 22, bg: '#333c57', size: 9, dur: 0 }, { label: 'BUKAN PEMBENARAN KORUPSI', x: R(T.toko[0]), y: 22, bg: '#333c57', size: 9, dur: 0 }] },
          C('k-30', [...dua(0, cam('jali', 2.8), 1500), { at: 'melamun', emote: 'jaliB', icon: 'zzz', dur: 1200 }, { at: 'melamun', kw: 'BANG JALI *MELAMUN*' }], { only: 'long' }),
          C('k-30s', [...dua(0, cam('jali', 2.8), 1500), { at: 'nganggur', emote: 'jaliB', icon: 'zzz', dur: 1200 }, { at: 'nganggur', kw: 'CALO *NGANGGUR*' }], { only: 'short' })], { c: cam('toko', 2.4) }),
        dekat(dx => [{ sprite: 'building2', x: 60 + dx, y: 90, scale: 1.2 }, { sprite: 'table', x: 128 + dx, y: 101, depth: 5 }, { sprite: 'tree', x: 182 + dx },
          ...[1, 2, 3].map((n, i) => ({ id: `${S_(dx)}bk${i}`, sprite: `berkas_${n}`, x: 122 + i * 7 + dx, y: 88 - i * 3, depth: 9 + i, hidden: true }))],
          (dx, k) => [{ id: 'jali' + k, sprite: 'jali', x: 88 + dx, y: 101, tag: 'BANG JALI', tagColor: '#c98a1a' },
            { id: 'pj' + k, sprite: 'petugas', x: 146 + dx, y: 101, face: 'left', tag: 'PEJABAT' },
            ...(dx ? [] : [{ id: 'kl1A', sprite: 'warga', x: 70, y: 101, face: 'right' }])], [
          C('k-31', [{ at: 'calo', kw: '*CALO*: "MEMBANTU" URUS SURAT' }, { at: 'membantu', emote: 'jaliA', icon: 'note', dur: 1000 }, { at: 'cepat', emote: 'kl1A', icon: 'heart', dur: 900 }]),
          { together: [{ focus: 'right' }, C('k-32', [{ at: 'jalur', kw: 'TAK ADA *JALUR BELAKANG*' }, { at: 'hilang', sfx: 'jangkrik', vol: 0.8 }, { at: 'hilang', emote: 'jaliB', icon: 'sweat', dur: 1300 }])] },
          C('k-33', [{ at: 'proyek', camera: { x: R(132), y: 80, zoom: VERT ? 1.5 : 1.9 }, side: 'right', dur: 700 }, { at: 'lambat', kw: 'PROYEK *LEBIH LAMBAT*' }, { at: 'lambat', clock: 'HARI', from: 1, to: 60, dur: 1800 }]),
          C('k-34', [{ at: 'tanda tangan', pop: 'Bbk0' }, { at: 'dicek', pop: 'Bbk1' }, { at: 'tiga kali', pop: 'Bbk2' }, { at: 'tiga kali', kw: 'DICEK *3×*' }, { at: 'tiga kali', emote: 'pjB', icon: 'sweat', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('k-35', [{ at: 0, label: 'BUKAN PEMBENARAN KORUPSI', x: 96, y: 40, bg: '#333c57', size: 11, dur: 0 }, { at: 0, label: 'BUKAN PEMBENARAN KORUPSI', x: R(96), y: 40, bg: '#333c57', size: 11, dur: 0 },
            skor(4), { at: 'sederhana', kw: 'BERSIH SAJA TIDAK CUKUP: *ATURAN HARUS SEDERHANA*', keepKw: true }], { punch: true })] },
          kutip('Bersih saja tidak cukup. Aturan juga harus sederhana.', 'Kecepatan proyek: A ✓'),
        ], { clock: 'TAHUN 3' }),
      ],
    },
    // ================= BAB 7 — TAHUN KE-5 =================
    {
      id: 'bab-7', title: 'Tahun ke-5',
      scenes: [
        peta([
          C('k-36', [{ at: 0, camera: { x: 96, y: 56, zoom: 1.2 }, dur: 1200 }, { at: 'lima tahun', clock: 'TAHUN', from: 3, to: 5, dur: 1000 }, { at: 'berbeda', kw: 'KOTA B *BERBEDA*' }], { only: 'long' }),
          C('k-36s', [{ at: 0, camera: { x: 96, y: 56, zoom: 1.2 }, dur: 1200 }, { at: 'lima tahun', clock: 'TAHUN', from: 3, to: 5, dur: 1000 }, { at: 'berubah', kw: 'APA YANG *BERUBAH?*' }], { only: 'short' }),
          { together: [{ focus: 'right' }, C('k-37', [{ at: 0, camera: { x: R(160), y: 50, zoom: 2.4 }, side: 'right', dur: 800 }, { at: 'ramai', crowd: 'goto', side: 'right', x: R(176), y: 64, spread: 10, frac: 0.5, rush: 2 },
            { at: 'ramai', label: 'LARIS!', x: R(176), y: 30, bg: GREEN, size: 11, dur: 0 }, { at: 'lulus', tag: 'dindaB', text: 'DINDA · LULUS', color: GREEN }, { at: 'lulus', emote: 'dindaB', icon: 'heart', dur: 1000 }])] },
          C('k-38', [{ at: 0, camera: { x: R(96), y: 50, zoom: 2 }, side: 'right', dur: 800 }, { at: 'pajak', crowd: 'goto', side: 'right', x: R(96), y: 62, spread: 16, frac: 0.6 },
            { at: 'pajak', label: 'ANTRE BAYAR PAJAK', x: R(96), y: 22, bg: NAVY, size: 10, dur: 0 }, { at: 'kelihatan', kw: 'RELA *BAYAR PAJAK*' }]),
          C('k-39', [{ at: 0, camera: { x: R(60), y: 50, zoom: 1.7 }, side: 'right', dur: 800 }, { at: 'investor', pop: 'Bmall' }, { at: 'datang', pop: 'Bbank' },
            { at: 'siluman', kw: 'INVESTOR *DATANG* (ilustrasi)' }]),
          C('k-40', [{ at: 0, camera: { x: R(116), y: 60, zoom: 2.6 }, side: 'right', dur: 800 }, { at: 'jasa', tag: 'jaliB', text: 'BANG JALI · JASA RESMI', color: GREEN },
            { at: 'resmi', label: 'JASA ANTAR DOKUMEN · RESMI', x: R(116), y: 44, bg: GREEN, size: 9, dur: 0 }, { at: 'bertarif', emote: 'jaliB', icon: 'note', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'both' }, { camera: { x: 96, y: 56, zoom: 1.2 }, dur: 800 }, { camera: { x: R(96), y: 56, zoom: 1.2 }, side: 'right', dur: 800 },
            C('k-41', [skor(5), { at: 'rasa percaya', kw: 'YANG TUMBUH: *RASA PERCAYA*', keepKw: true }], { punch: true })] },
          kutip('Yang tumbuh paling cepat ternyata satu hal: rasa percaya.', 'Kepercayaan: B ✓'),
        ], { c: { x: 96, y: 56, zoom: 1.2 }, bInvestor: false, n: [12, 16] }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'bab-8', title: 'Koruptor itu siapa?',
      scenes: [
        { ...peta([
          C('k-42', [{ at: 0, camera: cam('balai', 2.6), dur: 1400 }, { at: 'balai', kw: 'KEMBALI KE *BALAI KOTA*' }], { only: 'long' }),
          C('k-42s', [{ at: 0, camera: cam('balai', 2.6), dur: 1400 }, { at: 'siapa', kw: 'KORUPTOR *ITU SIAPA?*' }], { only: 'short' }),
          C('k-43', [{ at: 0, kw: 'KORUPTOR *ITU SIAPA?*' }], { only: 'long' }),
          C('k-44', [{ at: 0, camera: { x: 96, y: 56, zoom: 1 }, dur: 2400 }, { at: 'amplop', kw: 'MULAI DARI *AMPLOP KECIL*' }]),
          C('k-45', [{ at: 'menolak', kw: 'BERANI *MENOLAK*' }, { at: 'menolak', stamp: 'TOLAK', color: GREEN, at_: [0.5, 0.42] }]),
          { together: [{ clear: true }, { score: SKOR, sides: SIDES, head: 'SKOR AKHIR', dur: 1300 }] },
          C('k-46', [{ at: 'setuju', kw: 'SETUJU *NGGAK?*' }, { at: 'komentar', label: 'KOMEN', x: 76, y: 24, bg: GREEN, dur: 0 }, { at: 'komentar', label: 'SUBSCRIBE', x: 124, y: 24, bg: '#e43b44', dur: 0 }], { only: 'long' }),
          C('k-47', [{ at: 'tag', kw: '*TAG* TEMANMU!' }, { at: 'jali', glow: 'jaliA', times: 2 }], { only: 'short' }),
          { wait: 1200 },
        ], { split: false, c: { x: 96, y: 56, zoom: 1.2 }, aMulus: false }), clock: 'TAHUN 5' },
      ],
    },
  ],
};
