// ============================================================
//  "ANDAIKAN KURSI WAPRES KOSONG" — seri Andaikan, gaya simulasi
//  8 bab, tiap bab bisa jadi short. Perbandingan utama (split):
//  kiri = SKENARIO A (kursi cepat terisi), kanan = SKENARIO B (tarik-ulur).
//  Netral: tidak menyebut/menebak calon; tokoh sejarah = siluet.
//  Angka dompet & grafik bertanda ILUSTRASI. Fakta per 17 Nov 2026.
// ============================================================

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;                                   // sisi kanan adegan split
const SA = VERT ? [0.5, 0.3] : [0.25, 0.36];              // posisi stiker sisi A / B (split)
const SB = VERT ? [0.5, 0.72] : [0.75, 0.36];
const L = [0.28, 0.3], Rt = [0.74, 0.3];                  // adegan biasa
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f';
const ILU = 'Angka ilustrasi · simulasi, bukan prediksi';

// ---------- dunia: ruang kursi istana ----------
function ruangKursi(o = {}, dx = 0) {
  const p = o.prefix || '';
  return [
    { sprite: 'karpet', x: 96 + dx, y: 102, depth: 3 },
    { sprite: 'pole', x: 22 + dx, y: 96 }, { anim: 'flag_id', x: 23 + dx, y: 94, depth: 6 },
    { sprite: 'pole', x: 170 + dx, y: 96 }, { anim: 'flag_id', x: 171 + dx, y: 94, depth: 6 },
    { id: p + 'kursiP', sprite: o.p || 'kursi', x: 70 + dx, y: 96, scale: 2.4, depth: 5, tag: o.noTag ? undefined : 'PRESIDEN', tagColor: NAVY },
    { id: p + 'kursiW', sprite: o.w || 'kursi', x: 122 + dx, y: 96, scale: 2.4, depth: 5, tag: o.noTag ? undefined : 'WAKIL PRESIDEN', tagColor: NAVY },
  ];
}

// ---------- dunia: parlemen + bidak partai (satu sisi) ----------
function sisiPolitik(dx, s) {
  return [
    { sprite: 'parlemen', x: 96 + dx, y: 90, scale: 1.1, depth: 3 },
    { id: s + 'b0', sprite: 'bidak_0', x: 64 + dx, y: 100, scale: 1.6, depth: 7, hidden: true },
    { id: s + 'b1', sprite: 'bidak_1', x: 82 + dx, y: 100, scale: 1.6, depth: 7, hidden: true },
    { id: s + 'b2', sprite: 'bidak_2', x: 110 + dx, y: 100, scale: 1.6, depth: 7, hidden: true },
    { id: s + 'b3', sprite: 'bidak_3', x: 128 + dx, y: 100, scale: 1.6, depth: 7, hidden: true },
    { id: s + 'berkas', sprite: 'berkas_1', x: 166 + dx, y: 102, scale: 1.4, depth: 7, hidden: true },
    { id: s + 'spanduk1', sprite: 'spanduk', x: 20 + dx, y: 92, scale: 1.2, depth: 9, hidden: true },
    { id: s + 'spanduk2', sprite: 'spanduk', x: 40 + dx, y: 94, scale: 1.2, depth: 9, hidden: true },
  ];
}

// ---------- dunia: kampung (satu sisi) ----------
function sisiKampung(dx, s) {
  return [
    { sprite: 'tree', x: 24 + dx },
    { sprite: 'warung', x: 62 + dx, y: 92, scale: 1.3, depth: 4 },
    { sprite: 'pompa', x: 96 + dx, y: 92, scale: 1.4, depth: 4 },
    { id: s + 'motor', sprite: 'motor_gas_0', x: 112 + dx, y: 96, scale: 1.1, depth: 8, tag: 'ANDI', tagColor: '#ef7d57' },
    { sprite: 'pabrik', x: 142 + dx, y: 92, scale: 0.85, depth: 4 },
    { id: s + 'tempe', sprite: 'tempe', x: 48 + dx, y: 46, scale: 2.2, depth: 12, hidden: true },
    { id: s + 'tahu', sprite: 'tofu', x: 62 + dx, y: 46, scale: 2.2, depth: 12, hidden: true },
    { id: s + 'mi', sprite: 'noodle', x: 76 + dx, y: 46, scale: 2.2, depth: 12, hidden: true },
  ];
}
const kampungActors = [
  { id: 'sitiA', sprite: 'siti', x: 62, y: 100, tag: 'BU SITI', tagColor: '#257179' },
  { id: 'sitiB', sprite: 'siti', x: R(62), y: 100, tag: 'BU SITI', tagColor: '#257179' },
  { id: 'rinaA', sprite: 'rina', x: 134, y: 100, tag: 'RINA', tagColor: '#41a6f6' },
  { id: 'rinaB', sprite: 'rina', x: R(134), y: 100, tag: 'RINA', tagColor: '#41a6f6' },
];

const STORY = {
  title: 'Andaikan Kursi Wapres Kosong',
  audioDir: 'audio/wapres-kosong',
  sfx: true,
  captionStyle: 'keyword',

  chapters: [
    // ======================================================
    // BAB 1 — HOOK: satu surat, satu kursi kosong
    // ======================================================
    {
      id: 'bab-1',
      title: 'Satu surat, satu kursi kosong',
      scenes: [
        {
          sky: 'day',
          camera: { x: 96, y: 70, zoom: 1.6 },
          props: [
            { sprite: 'tree', x: 20 }, { sprite: 'tree', x: 172 }, { sprite: 'bush', x: 44 }, { sprite: 'bush', x: 150 },
            { sprite: 'istana', x: 96, y: 92, scale: VERT ? 1.1 : 1.4, depth: 4 },
            { sprite: 'pole', x: 96, y: 50 }, { anim: 'flag_id', x: 97, y: 48, depth: 6 },
            { id: 'surat', sprite: 'surat', x: 96, y: 70, scale: 2, depth: 12, hidden: true },
          ],
          steps: [
            { together: [
              { camera: { x: 96, y: 62, zoom: 1 }, dur: 2600, ease: 'Cubic.easeOut' },
              { caption: '12 November 2026. Satu surat sampai di MPR.', vo: 'w-01',
                speak: 'Dua belas November, dua ribu dua puluh enam. Satu surat sampai di em pe er.',
                cues: [{ at: 'dua belas', kw: '*12 NOV* 2026' }, { at: 'satu surat', pop: 'surat' }, { at: 'em pe er', kw: 'SURAT KE *MPR*' }] },
            ] },
          ],
        },
        {
          transition: 'cut',
          sky: 'indoor', fit: 'width',
          camera: { x: 96, y: 66, zoom: 1.2 },
          clock: 'HARI 1',
          props: ruangKursi(),
          steps: [
            { caption: 'Dan satu kursi di istana langsung kosong.', vo: 'w-02',
              cues: [
                { at: 'satu kursi', camera: { x: 122, y: 66, zoom: 2 }, dur: 700 },
                { at: 'kosong', swap: 'kursiW', to: 'kursi_abu' }, { at: 'kosong', shake: 200 },
                { at: 'kosong', kw: 'KURSI *KOSONG*' }, { at: 'kosong', sticker: 'shock', at_: Rt },
              ] },
            { caption: 'Wakil presiden resmi berhenti.', vo: 'w-03',
              cues: [{ at: 'resmi', stamp: 'KOSONG', at_: [0.62, 0.42] }, { at: 'resmi', kw: 'WAPRES *BERHENTI*' }] },
            { clear: true },
            { together: [
              { camera: { x: 96, y: 62, zoom: 1 }, dur: 900 },
              { caption: 'Lalu, apa hubungannya dengan harga tempe di warung dekat rumahmu?', vo: 'w-04',
                cues: [{ at: 'harga tempe', kw: 'HARGA *TEMPE?*' }, { at: 'harga tempe', sticker: 'sus', at_: L }] },
            ] },
            { caption: 'Jawabannya ada di satu kata: ketidakpastian.', vo: 'w-05', punch: true,
              cues: [{ at: 'satu kata', kw: 'SATU KATA...' }, { at: 'ketidakpastian', kw: '*KETIDAKPASTIAN*' }, { at: 'ketidakpastian', mono: true }] },
            { mono: false },
            { together: [
              { title: 'ANDAIKAN', sub: 'kursi wapres kosong', dark: true, size: 30, dur: 2400 },
              { caption: 'Ini simulasinya: andaikan kursi wapres kosong.', vo: 'w-06', speak: 'Ini simulasinya: andaikan kursi wakil presiden kosong.' },
            ] },
            { caption: 'Kita bandingkan dua kemungkinan. A: kursi cepat terisi. B: tarik-ulur berbulan-bulan.', vo: 'w-07',
              speak: 'Kita bandingkan dua kemungkinan. A: kursi cepat terisi. Be: tarik-ulur berbulan-bulan.',
              cues: [
                { at: 'dua kemungkinan', kw: '*2* KEMUNGKINAN' },
                { at: 'cepat terisi', kw: 'A: *CEPAT TERISI*' }, { at: 'cepat terisi', label: 'A', x: 104, y: 30, bg: GREEN, size: 22, dur: 0 },
                { at: 'tarik-ulur', kw: 'B: *TARIK-ULUR*' }, { at: 'tarik-ulur', label: 'B', x: 140, y: 30, bg: RED, size: 22, dur: 0 },
              ] },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 2 — JAM 60 HARI
    // ======================================================
    {
      id: 'bab-2',
      title: 'Aturan 60 hari',
      scenes: [{
        transition: 'cut',
        sky: 'day',
        camera: { x: 96, y: 60, zoom: 1 },
        clock: 'HARI 1',
        props: [
          { sprite: 'tree', x: 14 }, { sprite: 'tree', x: 178 },
          { sprite: 'parlemen', x: 96, y: 90, scale: 1.3, depth: 3 },
          { id: 'nama1', sprite: 'surat', x: 74, y: 70, scale: 1.8, depth: 12, hidden: true },
          { id: 'nama2', sprite: 'surat', x: 118, y: 70, scale: 1.8, depth: 12, hidden: true },
        ],
        steps: [
          { caption: 'Kalau kursi wapres kosong, siapa yang mengisi? Ternyata sudah ada aturannya.', vo: 'w-08',
            speak: 'Kalau kursi wakil presiden kosong, siapa yang mengisi? Ternyata sudah ada aturannya.',
            cues: [{ at: 'siapa', kw: 'SIAPA *YANG MENGISI?*' }, { at: 'aturannya', kw: 'SUDAH ADA *ATURANNYA*' }] },
          { together: [
            { card: 'UUD 1945 · Pasal 8 ayat 2', items: ['Wapres kosong?', 'Presiden usul 2 nama', 'MPR pilih satu', 'Sidang paling lambat 60 hari'], x: 96, y: 34, stagger: 650, dur: 0 },
            { caption: 'Undang-Undang Dasar, Pasal 8 ayat 2.', vo: 'w-09', speak: 'Undang-Undang Dasar, pasal delapan ayat dua.',
              cues: [{ at: 'pasal', kw: '*PASAL 8* AYAT 2' }] },
          ] },
          { clear: true },
          { caption: 'Presiden mengusulkan dua nama. MPR memilih salah satunya.', vo: 'w-10',
            speak: 'Presiden mengusulkan dua nama. Em pe er memilih salah satunya.',
            cues: [
              { at: 'dua nama', kw: 'PRESIDEN USUL *2 NAMA*' }, { at: 'dua nama', pop: 'nama1' }, { at: 'nama.', pop: 'nama2' },
              { at: 'memilih', kw: 'MPR *MEMILIH*' }, { at: 'memilih', label: 'MPR', x: 96, y: 40, bg: NAVY, dur: 0 },
              { at: 'salah satunya', glow: 'nama1', times: 3 },
            ] },
          { caption: 'Batasnya: sidang paling lambat enam puluh hari.', vo: 'w-11',
            cues: [{ at: 'paling lambat', clock: 'HARI', from: 2, to: 60, dur: 1300 }, { at: 'enam puluh', kw: 'MAKS. *60 HARI*' }] },
          { clear: true },
          { caption: 'Jadwalnya sekarang: dua nama masuk paling lambat 25 November. Sidang MPR 9 Desember.', vo: 'w-12',
            speak: 'Jadwalnya sekarang: dua nama masuk paling lambat dua puluh lima November. Sidang em pe er sembilan Desember.',
            cues: [
              { at: 0, clock: 'HARI 1' },
              { at: 'dua puluh lima', clock: 'HARI', from: 2, to: 14, dur: 700 }, { at: 'dua puluh lima', kw: '25 NOV: *2 NAMA*' },
              { at: 'sidang', clock: 'HARI', from: 15, to: 28, dur: 700 }, { at: 'sidang', kw: '9 DES: *SIDANG MPR*' },
            ] },
          { caption: 'Artinya, kursi ini kosong sekitar empat minggu.', vo: 'w-13',
            cues: [{ at: 'empat minggu', kw: 'KOSONG *±4 MINGGU*' }, { at: 'empat minggu', sticker: 'sweat', at_: Rt }] },
          { together: [
            { mono: true },
            { caption: 'Tapi Indonesia pernah mengalami yang jauh lebih lama.', vo: 'w-14', punch: true,
              cues: [{ at: 'jauh', kw: 'PERNAH *JAUH LEBIH LAMA*' }, { at: 'jauh', sticker: 'shock', at_: [0.5, 0.34] }] },
          ] },
        ],
      }],
    },

    // ======================================================
    // BAB 3 — 1998 vs 2001
    // ======================================================
    {
      id: 'bab-3',
      title: '1998 vs 2001',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width', split: true, focus: 'left',
        tags: ['1998', '2001'], tagColors: [RED, GREEN],
        camera: { x: 96, y: 66, zoom: 1.3 }, cameraB: { x: R(96), y: 66, zoom: 1.3 },
        props: [...ruangKursi({ prefix: 'L' }), ...ruangKursi({ prefix: 'R', w: 'kursi_abu' }, 192)],
        actors: [
          { id: 'soeharto', sprite: 'siluet', x: 70, y: 100, tag: 'SOEHARTO', tagColor: NAVY },
          { id: 'habibie', sprite: 'siluet', x: 122, y: 100, tag: 'HABIBIE', tagColor: NAVY },
          { id: 'mega', sprite: 'siluet2', x: R(122), y: 100, tag: 'MEGAWATI', tagColor: NAVY },
          { id: 'hamzah', sprite: 'siluet', x: R(122), y: 100, tag: 'HAMZAH HAZ', tagColor: NAVY, hidden: true },
        ],
        steps: [
          { caption: 'Mei 1998. Presiden Soeharto berhenti. Wakilnya, Habibie, naik jadi presiden.', vo: 'w-15',
            speak: 'Mei sembilan belas sembilan puluh delapan. Presiden Soeharto berhenti. Wakilnya, Habibie, naik jadi presiden.',
            cues: [
              { at: 'mei', kw: '*MEI 1998*' },
              { at: 'berhenti', exit: 'soeharto', to: 'left' },
              { at: 'naik jadi', move: 'habibie', to: 70, dur: 1200 }, { at: 'naik jadi', kw: 'WAPRES *NAIK JADI PRESIDEN*' },
            ] },
          { caption: 'Kursi wapres? Dibiarkan kosong. Waktu itu belum ada aturan batas waktunya.', vo: 'w-16',
            speak: 'Kursi wakil presiden? Dibiarkan kosong. Waktu itu belum ada aturan batas waktunya.',
            cues: [
              { at: 'kosong', swap: 'LkursiW', to: 'kursi_abu' }, { at: 'kosong', camera: { x: 122, y: 66, zoom: 1.8 }, dur: 700 },
              { at: 'belum ada', kw: 'BELUM ADA *BATAS WAKTU*' },
            ] },
          { caption: 'Kosong sekitar tujuh belas bulan, sampai Oktober 1999.', vo: 'w-17',
            speak: 'Kosong sekitar tujuh belas bulan, sampai Oktober sembilan belas sembilan puluh sembilan.',
            cues: [
              { at: 0, clock: 'BULAN', from: 1, to: 17, dur: 1600 },
              { at: 'tujuh belas', kw: '*17 BULAN*' }, { at: 'tujuh belas', sticker: 'dizzy', at_: SA },
            ] },
          { together: [{ focus: 'right' }, { camera: { x: R(96), y: 66, zoom: 1.3 }, side: 'right', dur: 600 }] },
          { caption: 'Juli 2001. Megawati naik jadi presiden. Wapres baru terpilih hanya tiga hari kemudian.', vo: 'w-18',
            speak: 'Juli dua ribu satu. Megawati naik jadi presiden. Wakil presiden baru terpilih hanya tiga hari kemudian.',
            cues: [
              { at: 'juli', kw: '*JULI 2001*' }, { at: 'juli', clock: 'HARI 1' },
              { at: 'naik jadi', move: 'mega', to: R(70), dur: 1200 },
              { at: 'terpilih', clock: 'HARI', from: 2, to: 3, dur: 500 },
              { at: 'terpilih', swap: 'RkursiW', to: 'kursi' }, { at: 'terpilih', show: 'hamzah' },
              { at: 'tiga hari', kw: 'HANYA *3 HARI*' }, { at: 'tiga hari', sticker: 'cool', at_: VERT ? [0.5, 0.36] : [0.74, 0.3] },
            ] },
          { together: [{ focus: 'both' }, { camera: { x: 96, y: 70, zoom: 1.5 }, dur: 600 }, { camera: { x: R(96), y: 70, zoom: 1.5 }, side: 'right', dur: 600 }] },
          { caption: 'Tiga hari, lawan lima ratus hari lebih.', vo: 'w-19',
            cues: [
              { at: 0, chart: 'HARI TANPA WAPRES', bars: [['1998–1999', 518, '#e43b44'], ['2001', 3, GREEN]], max: 560, place: 'right', y: 0.1, dur: 0 },
              { at: 'lima ratus', kw: '*3* LAWAN *518* HARI' },
            ] },
          { clear: true },
          { caption: 'Sejak amandemen ketiga, batas enam puluh hari ditulis di Undang-Undang Dasar.', vo: 'w-20', punch: true,
            cues: [{ at: 'amandemen', kw: 'AMANDEMEN *KETIGA*' }, { at: 'enam puluh', kw: 'BATAS *60 HARI* DI UUD' }] },
        ],
      }],
    },

    // ======================================================
    // BAB 4 — DAMPAK POLITIK (A vs B)
    // ======================================================
    {
      id: 'bab-4',
      title: 'Dampak politik',
      scenes: [{
        transition: 'cut',
        sky: 'day', split: true,
        tags: ['SKENARIO A', 'SKENARIO B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 64, zoom: 1 }, cameraB: { x: R(96), y: 64, zoom: 1 },
        clock: 'HARI 1',
        note: ILU,
        props: [...sisiPolitik(0, 'A'), ...sisiPolitik(192, 'B')],
        actors: [
          { id: 'demo1', sprite: 'warga', x: R(28), y: 100, hidden: true },
          { id: 'demo2', sprite: 'warga2', x: R(48), y: 102, hidden: true },
          { id: 'demo3', sprite: 'warga', x: R(60), y: 100, hidden: true, face: 'left' },
        ],
        steps: [
          { caption: 'Sekarang simulasinya. Skenario A: semua mulus. Skenario B: tarik-ulur.', vo: 'w-21',
            speak: 'Sekarang simulasinya. Skenario A: semua mulus. Skenario Be: tarik-ulur.',
            cues: [{ at: 'semua mulus', kw: 'A: *MULUS*' }, { at: 'tarik-ulur', kw: 'B: *TARIK-ULUR*' }] },
          { caption: 'Kursi wapres itu kursi panas. Partai-partai mulai tawar-menawar.', vo: 'w-22',
            speak: 'Kursi wakil presiden itu kursi panas. Partai-partai mulai tawar-menawar.',
            cues: [
              { at: 'kursi panas', kw: 'KURSI *PANAS*' },
              { at: 'partai', pop: 'Ab0' }, { at: 'partai', pop: 'Bb0' }, { at: 'partai-partai mulai', pop: 'Ab1' }, { at: 'partai-partai mulai', pop: 'Bb1' },
              { at: 'mulai', pop: 'Ab2' }, { at: 'mulai', pop: 'Bb2' }, { at: 'tawar', pop: 'Ab3' }, { at: 'tawar', pop: 'Bb3' },
              { at: 'tawar', kw: 'TAWAR-*MENAWAR*' },
            ] },
          { caption: 'Di skenario A, dua nama cepat disepakati. Sidang tepat waktu.', vo: 'w-23',
            cues: [
              { at: 0, focus: 'left' },
              { at: 'disepakati', stamp: 'SEPAKAT', color: GREEN, at_: VERT ? [0.5, 0.4] : [0.5, 0.42] },
              { at: 'disepakati', kw: '2 NAMA *DISEPAKATI*' },
              { at: 'tepat waktu', clock: 'HARI', from: 2, to: 28, dur: 900 }, { at: 'tepat waktu', sticker: 'cool', at_: Rt },
            ] },
          { together: [{ focus: 'right' }, { clock: 'HARI 1' }] },
          { caption: 'Di skenario B, koalisi saling tarik. Rapat molor, nama berganti-ganti.', vo: 'w-24',
            cues: [
              { at: 'saling tarik', kw: 'KOALISI *SALING TARIK*' },
              { at: 'saling tarik', move: 'Bb0', to: R(50), dur: 500 }, { at: 'saling tarik', move: 'Bb3', to: R(142), dur: 500 },
              { at: 'molor', clock: 'HARI', from: 2, to: 45, dur: 1200 }, { at: 'molor', kw: 'RAPAT *MOLOR*' },
              { at: 'berganti', move: 'Bb1', to: R(110), dur: 400 }, { at: 'berganti', move: 'Bb2', to: R(82), dur: 400 },
              { at: 'berganti', sticker: 'dizzy', at_: Rt },
            ] },
          { caption: 'Sementara itu, keputusan penting ikut antre di meja.', vo: 'w-25',
            cues: [
              { at: 0, camera: { x: R(150), y: 80, zoom: 2 }, side: 'right', dur: 700 },
              { at: 'keputusan', pop: 'Bberkas' }, { at: 'penting', swap: 'Bberkas', to: 'berkas_3' },
              { at: 'antre', swap: 'Bberkas', to: 'berkas_5' }, { at: 'antre', kw: 'KEPUTUSAN *ANTRE*' },
              { at: 'meja', label: 'MENUNGGU', x: R(166), y: 66, bg: RED, size: 18, dur: 0 },
            ] },
          { caption: 'Anggaran, proyek, izin usaha. Semuanya menunggu kepastian.', vo: 'w-26',
            cues: [
              { at: 'anggaran', kw: '*ANGGARAN*' }, { at: 'proyek', kw: '*PROYEK*' }, { at: 'izin', kw: '*IZIN USAHA*' },
              { at: 'izin', swap: 'Bberkas', to: 'berkas_6' }, { at: 'menunggu', kw: 'MENUNGGU *KEPASTIAN*' },
            ] },
          { clear: true },
          { caption: 'Dan saat semua bingung, jalanan ikut ramai.', vo: 'w-27',
            cues: [
              { at: 0, camera: { x: R(60), y: 76, zoom: 1.6 }, side: 'right', dur: 700 },
              { at: 'jalanan', show: 'demo1' }, { at: 'jalanan', pop: 'Bspanduk1' }, { at: 'ikut', show: 'demo2' }, { at: 'ikut', pop: 'Bspanduk2' }, { at: 'ramai', show: 'demo3' },
              { at: 'ramai', kw: 'JALANAN *RAMAI*' }, { at: 'ramai', shake: 200 },
            ] },
          { together: [
            { focus: 'both' }, { camera: { x: R(96), y: 64, zoom: 1 }, side: 'right', dur: 600 }, { clock: 'HARI 60' },
          ] },
          { caption: 'Skor politik hari ke-60: A tenang, B panas.', vo: 'w-28',
            speak: 'Skor politik hari ke enam puluh: A tenang, Be panas.',
            cues: [
              { at: 0, chart: 'SUHU POLITIK (ilustrasi)', bars: [['Skenario A', 25, GREEN], ['Skenario B', 90, '#e43b44']], max: 100, place: 'right', y: 0.1, dur: 0 },
              { at: 'tenang', kw: 'A *TENANG*' }, { at: 'panas', kw: 'B *PANAS*' },
            ] },
          { clear: true },
        ],
      }],
    },

    // ======================================================
    // BAB 5 — DAMPAK KE PASAR
    // ======================================================
    {
      id: 'bab-5',
      title: 'Investor benci ketidakpastian',
      scenes: [{
        transition: 'cut',
        sky: 'day', split: true,
        tags: ['SKENARIO A', 'SKENARIO B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 62, zoom: 1 }, cameraB: { x: R(96), y: 62, zoom: 1 },
        clock: 'HARI 1',
        note: ILU,
        props: [0, 192].flatMap(dx => [
          { sprite: 'building1', x: 24 + dx }, { sprite: 'building3', x: 58 + dx }, { sprite: 'building2', x: 140 + dx }, { sprite: 'building4', x: 172 + dx },
          { sprite: 'atm', x: 100 + dx, y: 92, scale: 1.3 },
          { id: (dx ? 'B' : 'A') + 'duit1', sprite: 'duit', x: 80 + dx, y: 76, scale: 2, depth: 12, hidden: true },
          { id: (dx ? 'B' : 'A') + 'duit2', sprite: 'duit', x: 112 + dx, y: 70, scale: 2, depth: 12, hidden: true },
        ]),
        actors: [
          { id: 'invA1', sprite: 'investor', x: 76, y: 100 }, { id: 'invA2', sprite: 'investor', x: 120, y: 100, face: 'left' },
          { id: 'invB1', sprite: 'investor', x: R(76), y: 100 }, { id: 'invB2', sprite: 'investor', x: R(120), y: 100, face: 'left' },
        ],
        steps: [
          { caption: 'Sekarang lihat uangnya. Investor punya satu musuh: ketidakpastian.', vo: 'w-29',
            cues: [{ at: 'investor', kw: '*INVESTOR*' }, { at: 'satu musuh', kw: 'MUSUHNYA: *KETIDAKPASTIAN*' }, { at: 'musuh', sticker: 'sus', at_: L }] },
          { caption: 'Hari pertama kursi kosong, rupiah sempat tertekan ke sekitar 18.200 per dolar.', vo: 'w-30',
            speak: 'Hari pertama kursi kosong, rupiah sempat tertekan ke sekitar delapan belas ribu dua ratus per dolar.',
            cues: [
              { at: 'rupiah', kw: 'RUPIAH *TERTEKAN*' },
              { at: 'delapan belas', card: 'Kamis, 12 Nov 2026', items: ['Rupiah Rp18.247/US$', 'Bursa saham: naik 2,66%'], x: 96, y: 34, stagger: 900, dur: 0 },
              { at: 'delapan belas', kw: '*Rp18.200*/US$' },
            ] },
          { caption: 'Uniknya, bursa saham justru naik. Pasar lega, karena prosesnya jelas.', vo: 'w-31',
            cues: [{ at: 'justru naik', kw: 'SAHAM *JUSTRU NAIK*' }, { at: 'jelas', kw: 'PROSESNYA *JELAS*' }, { at: 'lega', sticker: 'cool', at_: Rt }] },
          { clear: true },
          { caption: 'Di skenario A, kepastian datang cepat. Uang tetap tinggal.', vo: 'w-32',
            cues: [
              { at: 0, focus: 'left' },
              { at: 'kepastian', kw: 'KEPASTIAN *CEPAT*' }, { at: 'uang', pop: 'Aduit1' }, { at: 'tinggal', pop: 'Aduit2' },
              { at: 'tinggal', kw: 'UANG *TETAP TINGGAL*' },
            ] },
          { focus: 'right' },
          { caption: 'Di skenario B, investor asing menarik uangnya keluar.', vo: 'w-33',
            cues: [
              { at: 'investor', pop: 'Bduit1' }, { at: 'investor', pop: 'Bduit2' },
              { at: 'menarik', exit: 'invB1', to: 'right' }, { at: 'menarik', exit: 'invB2', to: 'right' },
              { at: 'menarik', move: 'Bduit1', to: R(220), dur: 1400 }, { at: 'menarik', move: 'Bduit2', to: R(230), dur: 1600 },
              { at: 'keluar', kw: 'MODAL ASING *KELUAR*' }, { at: 'keluar', label: 'KELUAR →', x: R(150), y: 50, bg: RED, dur: 0 },
            ] },
          { clear: true },
          { together: [{ focus: 'both' }, { clock: 'BULAN 3' }] },
          { caption: 'Dolar makin langka, rupiah makin lemah.', vo: 'w-34',
            cues: [
              { at: 0, chart: 'RUPIAH PER US$ (ilustrasi)', bars: [['Skenario A', 18.0, GREEN], ['Skenario B', 19.6, '#e43b44']], max: 20, prefix: 'Rp', suffix: ' rb', place: 'right', y: 0.1, dur: 0 },
              { at: 'langka', kw: 'DOLAR *LANGKA*' }, { at: 'lemah', kw: 'RUPIAH *MELEMAH*' }, { at: 'lemah', sticker: 'sweat', at_: SB },
            ] },
          { clear: true },
        ],
      }],
    },

    // ======================================================
    // BAB 6 — DAMPAK KE DOMPET
    // ======================================================
    {
      id: 'bab-6',
      title: 'Dampaknya ke dompet kita',
      scenes: [{
        transition: 'cut',
        sky: 'day', split: true,
        tags: ['SKENARIO A', 'SKENARIO B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 66, zoom: 1 }, cameraB: { x: R(96), y: 66, zoom: 1 },
        clock: 'BULAN 1',
        note: ILU,
        props: [...sisiKampung(0, 'A'), ...sisiKampung(192, 'B')],
        actors: kampungActors,
        steps: [
          { caption: 'Lalu, apa hubungannya dengan dompet kita?', vo: 'w-35', cues: [{ at: 'dompet', kw: 'DOMPET *KITA?*' }] },
          { caption: 'Kenalin Bu Siti. Jualan nasi dan gorengan tempe.', vo: 'w-36',
            cues: [
              { at: 'bu siti', camera: { x: 62, y: 62, zoom: 1.5 }, dur: 600 }, { at: 'bu siti', camera: { x: R(62), y: 62, zoom: 1.5 }, side: 'right', dur: 600 },
              { at: 'bu siti', kw: '*BU SITI*' }, { at: 'gorengan', kw: 'GORENGAN *TEMPE*' },
            ] },
          { caption: 'Kedelai buat tempe dan tahu, sekitar 90% impor. Dibeli pakai dolar.', vo: 'w-37',
            speak: 'Kedelai buat tempe dan tahu, sekitar sembilan puluh persen impor. Dibeli pakai dolar.',
            cues: [
              { at: 'kedelai', pop: 'Atempe' }, { at: 'kedelai', pop: 'Btempe' }, { at: 'tahu', pop: 'Atahu' }, { at: 'tahu', pop: 'Btahu' },
              { at: 'sembilan puluh', kw: 'KEDELAI *±90% IMPOR*' }, { at: 'dolar', kw: 'DIBELI PAKAI *DOLAR*' },
            ] },
          { caption: 'Gandum untuk mi dan roti? Hampir semuanya impor.', vo: 'w-38',
            cues: [{ at: 'gandum', pop: 'Ami' }, { at: 'gandum', pop: 'Bmi' }, { at: 'hampir', kw: 'GANDUM: *HAMPIR SEMUA IMPOR*' }] },
          { together: [{ focus: 'right' }, { clock: 'BULAN', from: 2, to: 6, dur: 1200 }] },
          { caption: 'Di skenario B, rupiah melemah. Tempe, tahu, dan mi instan ikut naik.', vo: 'w-39',
            cues: [
              { at: 'tempe', label: 'NAIK!', x: R(48), y: 30, bg: '#e43b44', size: 18, dur: 0 },
              { at: 'tahu', label: 'NAIK!', x: R(62), y: 22, bg: '#e43b44', size: 18, dur: 0 },
              { at: 'mi instan', label: 'NAIK!', x: R(76), y: 30, bg: '#e43b44', size: 18, dur: 0 },
              { at: 'ikut naik', kw: 'HARGA *IKUT NAIK*' },
            ] },
          { caption: 'Biar harga jual tetap, Bu Siti memotong tempenya makin tipis.', vo: 'w-40',
            cues: [
              { at: 0, camera: { x: R(62), y: 70, zoom: 2.4 }, side: 'right', dur: 600 },
              { at: 'memotong', swap: 'Btempe', to: 'tempe_tipis' }, { at: 'makin tipis', kw: 'TEMPE *MAKIN TIPIS*' },
              { at: 'makin tipis', emote: 'sitiB', icon: 'sweat', dur: 1200 },
            ] },
          { clear: true },
          { caption: 'Andi, ojek online. Bensin nonsubsidi naik, penumpang makin hemat. Orderan sepi.', vo: 'w-41',
            cues: [
              { at: 0, camera: { x: R(104), y: 74, zoom: 2.2 }, side: 'right', dur: 700 },
              { at: 'bensin', kw: 'BENSIN *NAIK*' }, { at: 'bensin', label: 'NAIK!', x: R(96), y: 58, bg: '#e43b44', size: 18, dur: 0 },
              { at: 'orderan', kw: 'ORDERAN *SEPI*' }, { at: 'orderan', tag: 'Bmotor', text: 'ORDER -30%', color: RED },
            ] },
          { clear: true },
          { caption: 'Rina, buruh pabrik. Bahan baku impor makin mahal. Pabrik menunda lowongan baru.', vo: 'w-42',
            cues: [
              { at: 0, camera: { x: R(140), y: 70, zoom: 2 }, side: 'right', dur: 700 },
              { at: 'bahan baku', kw: 'BAHAN BAKU *MAHAL*' },
              { at: 'menunda', kw: 'LOWONGAN *DITUNDA*' }, { at: 'menunda', label: 'LOWONGAN DITUNDA', x: R(140), y: 50, bg: RED, size: 18, dur: 0 },
              { at: 'lowongan', emote: 'rinaB', icon: 'question', dur: 1200 },
            ] },
          { clear: true },
          { together: [{ focus: 'left' }, { camera: { x: 96, y: 66, zoom: 1 }, dur: 600 }] },
          { caption: 'Di skenario A? Harga naik sedikit, lalu kembali normal.', vo: 'w-43',
            cues: [{ at: 'naik sedikit', kw: 'NAIK *SEDIKIT*' }, { at: 'normal', kw: 'KEMBALI *NORMAL*' }, { at: 'normal', sticker: 'cool', at_: Rt }] },
          { together: [{ focus: 'both' }, { camera: { x: R(96), y: 66, zoom: 1 }, side: 'right', dur: 600 }] },
          { caption: 'Yang paling terasa? Keluarga menengah ke bawah. Sebagian besar uangnya habis untuk makan.', vo: 'w-44',
            cues: [{ at: 'menengah', kw: 'MENENGAH *KE BAWAH*' }, { at: 'habis', kw: 'HABIS *UNTUK MAKAN*' }] },
          { caption: 'Ini struk belanja Bu Siti di skenario B.', vo: 'w-45' },
          { receipt: 'STRUK BU SITI · SKENARIO B', stagger: 420,
            lines: [['Tempe', '+Rp3.000'], ['Tahu', '+Rp2.000'], ['Mi instan', '+Rp2.500'], ['Bensin', '+Rp10.000']],
            total: ['NAIK / MINGGU', '+Rp17.500'], note: '≈ Rp70 ribu/bulan · ILUSTRASI' },
          { wait: 900 },
          { clear: true },
          { caption: 'Tujuh puluh ribu sebulan. Buat banyak keluarga, itu jatah makan dua hari.', vo: 'w-46', punch: true,
            cues: [{ at: 'tujuh puluh', kw: '*Rp70 RIBU* SEBULAN' }, { at: 'jatah makan', kw: '= JATAH MAKAN *2 HARI*' }, { at: 'jatah makan', sticker: 'sweat', at_: SB }] },
        ],
      }],
    },

    // ======================================================
    // BAB 7 — ANDAIKAN PALING EKSTREM
    // ======================================================
    {
      id: 'bab-7',
      title: 'Kalau dua kursi kosong',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 64, zoom: 1.1 },
        props: ruangKursi({ w: 'kursi_abu' }),
        actors: [
          { id: 'm1', sprite: 'menteri', x: 70, y: 102, hidden: true, tag: 'MENLU', tagColor: NAVY },
          { id: 'm2', sprite: 'menteri', x: 96, y: 102, hidden: true, tag: 'MENDAGRI', tagColor: NAVY },
          { id: 'm3', sprite: 'menteri', x: 122, y: 102, hidden: true, tag: 'MENHAN', tagColor: NAVY },
        ],
        steps: [
          { together: [
            { mono: true },
            { caption: 'Sekarang, andaikan yang paling ekstrem.', vo: 'w-47', cues: [{ at: 'paling ekstrem', kw: 'PALING *EKSTREM*' }] },
          ] },
          { mono: false },
          { caption: 'Kursi presiden dan wapres kosong bersamaan.', vo: 'w-48', speak: 'Kursi presiden dan wakil presiden kosong bersamaan.',
            cues: [{ at: 'kosong', swap: 'kursiP', to: 'kursi_abu' }, { at: 'kosong', shake: 300 }, { at: 'bersamaan', kw: 'DUA KURSI *KOSONG*' }, { at: 'bersamaan', sticker: 'shock', at_: Rt }] },
          { caption: 'Undang-Undang Dasar sudah menyiapkan cadangannya: tiga menteri sekaligus.', vo: 'w-49',
            cues: [
              { at: 'cadangannya', kw: '*CADANGAN* SUDAH ADA' },
              { at: 'tiga menteri', enter: 'm1', from: 'left', to: 70, dur: 900 }, { at: 'tiga menteri', enter: 'm2', from: 'left', to: 96, dur: 1100 },
              { at: 'tiga menteri', enter: 'm3', from: 'right', to: 122, dur: 900 },
              { at: 'sekaligus', kw: '*3 MENTERI* SEKALIGUS' },
            ] },
          { caption: 'Menteri Luar Negeri, Menteri Dalam Negeri, dan Menteri Pertahanan. Bertugas bersama-sama.', vo: 'w-50',
            cues: [
              { at: 0, camera: { x: 96, y: 78, zoom: 2.2 }, dur: 700 },
              { at: 'luar negeri', glow: 'm1', times: 2 }, { at: 'dalam negeri', glow: 'm2', times: 2 }, { at: 'pertahanan', glow: 'm3', times: 2 },
              { at: 'bersama-sama', kw: 'BERTUGAS *BERSAMA-SAMA*' },
            ] },
          { caption: 'Paling lambat tiga puluh hari, MPR memilih presiden dan wapres baru.', vo: 'w-51',
            speak: 'Paling lambat tiga puluh hari, em pe er memilih presiden dan wakil presiden baru.',
            cues: [
              { at: 0, camera: { x: 96, y: 64, zoom: 1.1 }, dur: 700 },
              { at: 'tiga puluh', clock: 'HARI', from: 1, to: 30, dur: 1200 }, { at: 'tiga puluh', kw: 'MAKS. *30 HARI*' },
              { at: 'memilih', label: 'UUD Pasal 8 ayat 3', x: 96, y: 26, bg: NAVY, dur: 0 },
            ] },
          { clear: true },
          { caption: 'Jadi negara tidak pernah benar-benar tanpa pemimpin. Cadangannya berlapis.', vo: 'w-52', punch: true,
            cues: [
              { at: 'tidak pernah', kw: 'TIDAK PERNAH *TANPA PEMIMPIN*' },
              { at: 'berlapis', swap: 'kursiP', to: 'kursi' }, { at: 'berlapis', swap: 'kursiW', to: 'kursi' },
              { at: 'berlapis', kw: 'CADANGAN *BERLAPIS*' },
            ] },
        ],
      }],
    },

    // ======================================================
    // BAB 8 — PUNCHLINE
    // ======================================================
    {
      id: 'bab-8',
      title: 'Bukan kursinya, tapi kepastiannya',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 64, zoom: 1.1 },
        props: ruangKursi(),
        steps: [
          { caption: 'Jadi, kursi kosong di istana tidak langsung bikin harga naik.', vo: 'w-53',
            cues: [{ at: 'tidak langsung', kw: 'BUKAN *KURSINYA*...' }] },
          { caption: 'Yang bikin naik adalah ketidakpastian. Makin cepat terisi, makin cepat dompet tenang.', vo: 'w-54', punch: true,
            cues: [
              { at: 'ketidakpastian', kw: 'TAPI *KETIDAKPASTIAN*' },
              { at: 'makin cepat terisi', chart: 'UANG SISA AKHIR BULAN (ilustrasi)', bars: [['Bu Siti · A', 300, GREEN], ['Bu Siti · B', 230, '#e43b44']], max: 350, suffix: ' rb', place: 'right', y: 0.1, dur: 0 },
              { at: 'dompet', kw: 'DOMPET *TENANG*', keepKw: true },
            ] },
          { clear: true },
          { caption: 'Menurutmu, kita bakal ke skenario A atau B? Tulis di kolom komentar.', vo: 'w-55',
            speak: 'Menurutmu, kita bakal ke skenario A, atau Be? Tulis di kolom komentar.',
            cues: [
              { at: 'menurutmu', kw: 'SKENARIO *A* ATAU *B*?' },
              { at: 'tulis', label: 'LIKE', x: 58, y: 24, bg: '#3b5dc9', dur: 0 },
              { at: 'tulis', label: 'KOMEN', x: 96, y: 24, bg: GREEN, dur: 0 },
              { at: 'tulis', label: 'SUBSCRIBE', x: 140, y: 24, bg: '#e43b44', dur: 0 },
              { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true },
            ] },
          { wait: 1500 },
        ],
      }],
    },
  ],
};

// 9:16 — adegan ruang kursi (bukan split) dibuat lebih dekat agar kursi tidak kecil
if (VERT) {
  const zz = c => { if (c && typeof c === 'object' && c.zoom) c.zoom = Math.max(c.zoom, 1.7); };
  const walk = st => {
    if (st.together) st.together.forEach(walk);
    zz(st.camera);
    (st.cues || []).forEach(walk);
  };
  STORY.chapters.forEach(ch => ch.scenes.forEach(sc => {
    if (sc.sky !== 'indoor' || sc.split) return;
    zz(sc.camera);
    sc.steps.forEach(walk);
  }));
}
