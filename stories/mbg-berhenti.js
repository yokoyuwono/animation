// ============================================================
//  "ANDAIKAN MBG BERHENTI BESOK" — seri Andaikan, gaya simulasi
//  Naskah lengkap: stories/mbg-berhenti.naskah.md (dibuat per bab).
//  Perbandingan (split): kiri DESA A (dapur jalan), kanan DESA B (dapur berhenti).
//  Angka bertanda ilustrasi. Fakta per 17 Nov 2026.
// ============================================================

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f';

// ---------- dunia: aula makan sekolah ----------
function aulaMakan(plate = 'piring_isi') {
  const props = [];
  [44, 96, 148].forEach((x, t) => {
    props.push({ sprite: 'table', x, y: 96, depth: 12 });
    [-7, 7].forEach((dx, j) => props.push({ id: `p${t}${j}`, sprite: plate, x: x + dx, y: 91, scale: 1.3, depth: 13 }));
  });
  return props;
}
const ANAK = [
  { id: 'k1', sprite: 'kid', x: 40, y: 92 }, { id: 'k2', sprite: 'girl', x: 53, y: 92, face: 'left' },
  { id: 'sari', sprite: 'girl', x: 92, y: 92 }, { id: 'k4', sprite: 'boy', x: 103, y: 92, face: 'left' },
  { id: 'k5', sprite: 'kid', x: 144, y: 92 }, { id: 'k6', sprite: 'girl', x: 155, y: 92, face: 'left' },
];
const PIRING_IDS = ['p00', 'p01', 'p10', 'p11', 'p20', 'p21'];

// ---------- dunia: desa (satu sisi) ----------
function sisiDesa(dx, s, open) {
  return [
    { sprite: 'tree', x: 20 + dx }, { sprite: 'house', x: 160 + dx, scale: 0.9 },
    { id: s + 'dapur', sprite: open ? 'dapur' : 'dapur_tutup', x: 96 + dx, y: 92, scale: 1.4, depth: 4,
      smoke: open ? { dx: 0, dy: -36, every: 260 } : undefined },
  ];
}

const STORY = {
  title: 'Andaikan MBG Berhenti Besok',
  audioDir: 'audio/mbg-berhenti',
  sfx: true,
  captionStyle: 'keyword',

  chapters: [
    // ======================================================
    // BAB 1 — HOOK: 58 juta piring kosong
    // ======================================================
    {
      id: 'bab-1',
      title: '58 juta piring kosong',
      scenes: [
        // aula makan: piring penuh → kosong
        {
          sky: 'indoor', fit: 'width',
          camera: { x: 96, y: 82, zoom: 3.2 },
          clock: 'HARI 1',
          props: aulaMakan(),
          actors: ANAK,
          steps: [
            { together: [
              { camera: { x: 96, y: 80, zoom: 1.7 }, dur: 2600, ease: 'Cubic.easeOut' },
              { caption: 'Bayangkan. Besok pagi, MBG berhenti.', vo: 'm-01',
                speak: 'Bayangkan. Besok pagi, em be ge berhenti.',
                cues: [{ at: 'besok', kw: 'BESOK PAGI...' }, { at: 'berhenti', kw: 'MBG *BERHENTI*' }, { at: 'berhenti', stamp: 'BERHENTI', at_: [0.5, 0.4] }] },
            ] },
            { caption: '58 juta piring tiba-tiba kosong.', vo: 'm-02',
              speak: 'Lima puluh delapan juta piring tiba-tiba kosong.',
              cues: [
                { at: 'lima puluh', kw: '*58 JUTA* PIRING' },
                ...PIRING_IDS.map((id, i) => ({ at: 0.3 + i * 0.09, swap: id, to: 'piring_kosong' })),
                { at: 'kosong', kw: '*58 JUTA* PIRING *KOSONG*' }, { at: 'kosong', sticker: 'shock', at_: Rt },
                { at: 'kosong', emote: 'sari', icon: 'question', dur: 1200 },
              ] },
          ],
        },
        // pasar (kiri) & kandang (kanan)
        {
          transition: 'cut',
          sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: VERT ? 62 : 52, y: 70, zoom: 2.2 },
          props: [
            { sprite: 'warung', x: 46, y: 92, scale: 1.3, depth: 4 },
            { id: 'a1', sprite: 'ayam', x: 36, y: 72, scale: 1.4, depth: 8 }, { id: 'a2', sprite: 'ayam', x: 48, y: 72, scale: 1.4, depth: 8 },
            { id: 'a3', sprite: 'ayam', x: 60, y: 72, scale: 1.4, depth: 8 },
            { sprite: 'kandang', x: 144, y: 92, depth: 4 },
            ...[124, 132, 140, 148, 156, 164].map((x, i) => ({ id: 'c' + i, sprite: 'ayam', x, y: 90 - (i % 2) * 2, depth: 5 })),
            ...[128, 136, 144, 152, 160].map((x, i) => ({ id: 'd' + i, sprite: 'ayam', x, y: 84, depth: 5, hidden: true })),
          ],
          actors: [
            { id: 'rina', sprite: 'warga2', x: 76, y: 96, face: 'left', tag: 'BU RINA', tagColor: '#b13e53' },
            { id: 'darto', sprite: 'darto', x: 176, y: 96, face: 'left', tag: 'PAK DARTO', tagColor: '#7d8a4a' },
          ],
          steps: [
            { caption: 'Harga ayam di pasar turun. Ibu-ibu senang.', vo: 'm-03',
              cues: [
                { at: 'harga ayam', kw: 'HARGA *AYAM*' },
                { at: 'turun', label: 'TURUN ↓', x: 48, y: 52, bg: GREEN, size: 18, dur: 0 }, { at: 'turun', kw: 'AYAM *MURAH*' },
                { at: 'senang', emote: 'rina', icon: 'heart', dur: 1200 }, { at: 'senang', sticker: 'party', at_: L },
              ] },
            { clear: true },
            { caption: 'Tapi di kandang, peternak justru menangis.', vo: 'm-04',
              cues: [
                { at: 0, camera: { x: 150, y: 74, zoom: 2.2 }, dur: 800 },
                { at: 'kandang', pop: 'd0' }, { at: 'kandang', pop: 'd1' }, { at: 'peternak', pop: 'd2' }, { at: 'peternak', pop: 'd3' }, { at: 'justru', pop: 'd4' },
                { at: 'peternak', label: 'MENUMPUK!', x: 144, y: 60, bg: RED, size: 16, dur: 0 },
                { at: 'menangis', kw: 'PETERNAK *MENANGIS*' }, { at: 'menangis', emote: 'darto', icon: 'sweat', dur: 1500 },
                { at: 'menangis', sticker: 'sweat', at_: Rt },
              ] },
            { clear: true },
            { together: [
              { camera: { x: 96, y: 66, zoom: 1 }, dur: 700 },
              { mono: true },
              { caption: 'Kok bisa? Kita simulasikan.', vo: 'm-05', cues: [{ at: 0, kw: 'KOK *BISA?*' }, { at: 0.2, sticker: 'sus', at_: [0.5, 0.34] }] },
            ] },
            { mono: false },
            { together: [
              { title: 'ANDAIKAN', sub: 'MBG berhenti besok', dark: true, size: 30, dur: 2200 },
              { caption: 'Andaikan MBG berhenti besok.', vo: 'm-06', speak: 'Andaikan em be ge berhenti besok.' },
            ] },
          ],
        },
        // desa A vs desa B
        {
          transition: 'cut',
          sky: 'day', split: true, focus: 'both',
          tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
          camera: { x: 96, y: 66, zoom: 1 }, cameraB: { x: R(96), y: 66, zoom: 1 },
          clock: 'HARI 1',
          props: [...sisiDesa(0, 'A', true), ...sisiDesa(192, 'B', true)],
          actors: [
            { id: 'tA', sprite: 'siti', x: 120, y: 98, tag: 'DAPUR JALAN', tagColor: GREEN },
            { id: 'tB', sprite: 'siti', x: R(120), y: 98 },
          ],
          steps: [
            { caption: 'Kita bandingkan dua desa. Desa A, dapur MBG tetap jalan. Desa B, dapurnya berhenti besok.', vo: 'm-07',
              speak: 'Kita bandingkan dua desa. Desa A, dapur em be ge tetap jalan. Desa Be, dapurnya berhenti besok.',
              cues: [
                { at: 'dua desa', kw: '*2* DESA' },
                { at: 'desa a', focus: 'left' }, { at: 'desa a', kw: 'A: DAPUR *JALAN*' },
                { at: 'desa be', focus: 'right' }, { at: 'desa be', kw: 'B: DAPUR *BERHENTI*' },
                { at: 'berhenti besok', swap: 'Bdapur', to: 'dapur_tutup' }, { at: 'berhenti besok', smoke: 'Bdapur', on: false },
                { at: 'berhenti besok', stamp: 'TUTUP', at_: VERT ? [0.5, 0.45] : [0.5, 0.42] },
                { at: 'besok.', tag: 'tB', text: 'DAPUR TUTUP', color: RED },
              ] },
            { together: [{ focus: 'both' }, { wait: 900 }] },
          ],
        },
      ],
    },
    // ======================================================
    // BAB 2 — SEBERAPA BESAR MBG?
    // ======================================================
    {
      id: 'bab-2',
      title: 'Seberapa besar MBG?',
      scenes: [{
        transition: 'cut',
        sky: 'day', fit: VERT ? undefined : 'width',
        camera: { x: 96, y: 62, zoom: 1 },
        props: [
          { sprite: 'tree', x: 14 }, { sprite: 'tree', x: 180 },
          { id: 'dapur', sprite: 'dapur', x: 96, y: 92, scale: 1.3, depth: 4, smoke: { dx: 0, dy: -33, every: 260 } },
          ...[0, 1, 2, 3, 4, 5].map(i => ({ id: 'pr' + i, sprite: 'piring_isi', x: 40 + i * 22, y: 28, scale: 1.4, depth: 12, hidden: true })),
          ...[0, 1, 2, 3].map(i => ({ id: 'dp' + i, sprite: 'dapur', x: 30 + i * 44, y: 50, scale: 0.6, depth: 11, hidden: true })),
          { id: 'kerangA', sprite: 'basket_full', x: 40, y: 100, scale: 1.4, depth: 9, hidden: true },
          { id: 'kerangB', sprite: 'telur', x: 150, y: 100, scale: 1.4, depth: 9, hidden: true },
          { id: 'uang', sprite: 'coins_pile', x: 96, y: 104, scale: 2.5, depth: 13, hidden: true },
        ],
        actors: [
          { id: 'w1', sprite: 'tini', x: 66, y: 98, hidden: true }, { id: 'w2', sprite: 'warga', x: 78, y: 98, hidden: true },
          { id: 'w3', sprite: 'tini', x: 114, y: 98, hidden: true, face: 'left' }, { id: 'w4', sprite: 'warga2', x: 126, y: 98, hidden: true, face: 'left' },
          { id: 'darto', sprite: 'darto', x: 24, y: 100, hidden: true }, { id: 'p2', sprite: 'worker', x: 166, y: 100, hidden: true, face: 'left' },
        ],
        steps: [
          { caption: 'Pertama, seberapa besar sebenarnya MBG?', vo: 'm-08', speak: 'Pertama, seberapa besar sebenarnya em be ge?',
            cues: [{ at: 'seberapa', kw: 'SEBERAPA *BESAR?*' }, { at: 0, camera: { x: 96, y: 70, zoom: 1.6 }, dur: 900 }] },
          { caption: 'Penerimanya lebih dari 58 juta orang. Sekitar seperlima penduduk Indonesia.', vo: 'm-09',
            speak: 'Penerimanya lebih dari lima puluh delapan juta orang. Sekitar seperlima penduduk Indonesia.',
            cues: [
              { at: 0, camera: { x: 96, y: 56, zoom: 1 }, dur: 600 },
              ...[0, 1, 2, 3, 4, 5].map(i => ({ at: 0.1 + i * 0.07, pop: 'pr' + i })),
              { at: 'lima puluh', kw: '*58 JUTA* PENERIMA' }, { at: 'seperlima', kw: '±*1/5* PENDUDUK' },
            ] },
          { caption: 'Dapurnya sekitar 26 ribu.', vo: 'm-10', speak: 'Dapurnya sekitar dua puluh enam ribu.',
            cues: [...[0, 1, 2, 3].map(i => ({ at: 0.15 + i * 0.12, pop: 'dp' + i })), { at: 'dua puluh', kw: '*26 RIBU* DAPUR' }] },
          { caption: 'Yang bekerja di dalamnya, sekitar satu juta orang.', vo: 'm-11',
            cues: [{ at: 'bekerja', show: 'w1' }, { at: 'bekerja', show: 'w2' }, { at: 'dalamnya', show: 'w3' }, { at: 'dalamnya', show: 'w4' }, { at: 'satu juta', kw: '*±1 JUTA* PEKERJA' }] },
          { caption: 'Pemasoknya 80 ribu, kebanyakan usaha kecil.', vo: 'm-12', speak: 'Pemasoknya delapan puluh ribu, kebanyakan usaha kecil.',
            cues: [{ at: 0, show: 'darto' }, { at: 0, pop: 'kerangA' }, { at: 0.2, show: 'p2' }, { at: 0.2, pop: 'kerangB' }, { at: 'delapan puluh', kw: '*80 RIBU* PEMASOK' }, { at: 'usaha kecil', kw: '*83%* UMKM' }] },
          { caption: 'Anggarannya tahun ini: Rp218 triliun.', vo: 'm-13', speak: 'Anggarannya tahun ini: dua ratus delapan belas triliun rupiah.',
            cues: [{ at: 'dua ratus', pop: 'uang' }, { at: 'dua ratus', kw: '*Rp218 TRILIUN*' }, { at: 'triliun', sticker: 'money', at_: Rt }] },
          { caption: 'Jadi kalau berhenti, yang kena bukan cuma piring.', vo: 'm-14', punch: true,
            cues: [{ at: 'berhenti', swap: 'dapur', to: 'dapur_tutup' }, { at: 'berhenti', smoke: 'dapur', on: false }, { at: 'bukan cuma', kw: 'BUKAN CUMA *PIRING*' }] },
        ],
      }],
    },

    // ======================================================
    // BAB 3 — SARI
    // ======================================================
    {
      id: 'bab-3',
      title: 'Sari dan bekal Rp300 ribu',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width', split: true, focus: 'both',
        tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 76, zoom: VERT ? 2.4 : 1.7 }, cameraB: { x: R(96), y: 76, zoom: VERT ? 2.4 : 1.7 },
        clock: 'HARI 1',
        note: 'Angka bekal = ilustrasi',
        props: [0, 192].flatMap(dx => {
          const s = dx ? 'B' : 'A';
          return [
            { sprite: 'papan_tulis', x: 96 + dx, y: 66, depth: 3 },
            { sprite: 'table', x: 96 + dx, y: 100, depth: 12 },
            { id: s + 'piring', sprite: 'piring_isi', x: 90 + dx, y: 95, scale: 1.4, depth: 13, hidden: true },
            { id: s + 'bekal', sprite: 'bekal', x: 104 + dx, y: 95, scale: 1.4, depth: 13, hidden: true },
          ];
        }),
        actors: [
          { id: 'sariA', sprite: 'girl', x: 96, y: 96, tag: 'SARI', tagColor: NAVY },
          { id: 'sariB', sprite: 'girl', x: R(96), y: 96, tag: 'SARI', tagColor: NAVY },
        ],
        steps: [
          { caption: 'Kenalin Sari, kelas 4 SD.', vo: 'm-15', speak: 'Kenalin Sari, kelas empat es de.',
            cues: [{ at: 'sari', kw: '*SARI*, KELAS 4 SD' }, { at: 'sari', glow: 'sariA', times: 2 }, { at: 'sari', glow: 'sariB', times: 2 }] },
          { together: [{ focus: 'left' }, { wait: 300 }] },
          { caption: 'Di desa A, jam istirahat ada nasi, telur, dan sayur.', vo: 'm-16',
            cues: [{ at: 'istirahat', pop: 'Apiring' }, { at: 'nasi', kw: 'NASI, *TELUR*, SAYUR' }, { at: 'sayur', emote: 'sariA', icon: 'heart', dur: 1200 }] },
          { together: [{ focus: 'right' }, { wait: 300 }] },
          { caption: 'Di desa B, besok semua itu tidak ada lagi.', vo: 'm-17', speak: 'Di desa Be, besok semua itu tidak ada lagi.',
            cues: [{ at: 'besok', kw: 'TIDAK ADA *LAGI*' }, { at: 'tidak ada', emote: 'sariB', icon: 'question', dur: 1200 }] },
          { caption: 'Orang tuanya harus menyiapkan bekal, sekitar 10–15 ribu sehari.', vo: 'm-18',
            speak: 'Orang tuanya harus menyiapkan bekal, sekitar sepuluh sampai lima belas ribu sehari.',
            cues: [{ at: 'bekal', pop: 'Bbekal' }, { at: 'sepuluh', kw: 'BEKAL *Rp10–15 RB*/HARI' }] },
          { caption: 'Sebulan bisa 300 ribu. Untuk keluarga pas-pasan, itu berat.', vo: 'm-19',
            speak: 'Sebulan bisa tiga ratus ribu. Untuk keluarga pas-pasan, itu berat.',
            cues: [{ at: 'tiga ratus', kw: '*Rp300 RB*/BULAN' }, { at: 'tiga ratus', tag: 'sariB', text: 'BEKAL Rp300 RB/BLN', color: RED }, { at: 'berat', sticker: 'sweat', at_: Rt }] },
          { caption: 'Yang tidak sanggup? Anaknya berangkat dengan perut kosong.', vo: 'm-20',
            cues: [{ at: 'tidak sanggup', hide: 'Bbekal' }, { at: 'perut kosong', kw: 'PERUT *KOSONG*' }, { at: 'perut', emote: 'sariB', icon: 'sweat', dur: 1500 }] },
          { together: [{ focus: 'both' }, { wait: 300 }] },
          { caption: 'Perut kosong, susah fokus. Pelajaran jam ketiga lewat begitu saja.', vo: 'm-21', punch: true,
            cues: [{ at: 'susah fokus', kw: 'SUSAH *FOKUS*' }, { at: 'susah', emote: 'sariB', icon: 'zzz', dur: 2000 }, { at: 'jam ketiga', clock: 'JAM KE-3' }, { at: 'lewat', sticker: 'dizzy', at_: VERT ? [0.5, 0.72] : [0.75, 0.32] }] },
        ],
      }],
    },

    // ======================================================
    // BAB 4 — BU TINI
    // ======================================================
    {
      id: 'bab-4',
      title: 'Bu Tini kehilangan honor',
      scenes: [{
        transition: 'cut',
        sky: 'day', split: true, focus: 'both',
        tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 68, zoom: 1.2 }, cameraB: { x: R(96), y: 68, zoom: 1.2 },
        clock: 'HARI 1',
        props: [...sisiDesa(0, 'A', true), ...sisiDesa(192, 'B', true),
          { id: 'tagihan', sprite: 'bills', x: R(70), y: 100, scale: 1.4, depth: 12, hidden: true }],
        actors: [
          { id: 'tiniA', sprite: 'tini', x: 120, y: 98, tag: 'BU TINI', tagColor: GREEN },
          { id: 'tiniB', sprite: 'tini', x: R(120), y: 98, tag: 'BU TINI', tagColor: GREEN },
          { id: 'kA', sprite: 'warga', x: 70, y: 98 }, { id: 'kB', sprite: 'warga', x: R(70), y: 98 },
        ],
        steps: [
          { caption: 'Ini Bu Tini, juru masak di dapur MBG.', vo: 'm-22', speak: 'Ini Bu Tini, juru masak di dapur em be ge.',
            cues: [{ at: 'bu tini', kw: '*BU TINI*, JURU MASAK' }, { at: 'bu tini', glow: 'tiniA', times: 2 }] },
          { caption: 'Satu dapur rata-rata mempekerjakan sekitar 47 orang.', vo: 'm-23',
            speak: 'Satu dapur rata-rata mempekerjakan sekitar empat puluh tujuh orang.',
            cues: [{ at: 'empat puluh', kw: '*±47 ORANG*/DAPUR' }, { at: 'empat puluh', label: '×47', x: 96, y: 34, bg: NAVY, size: 18, dur: 0 }, { at: 'empat puluh', label: '×47', x: R(96), y: 34, bg: NAVY, size: 18, dur: 0 }] },
          { clear: true },
          { together: [{ focus: 'right' }, { wait: 300 }] },
          { caption: 'Di desa B, dapurnya tutup. Honornya berhenti hari itu juga.', vo: 'm-24',
            speak: 'Di desa Be, dapurnya tutup. Honornya berhenti hari itu juga.',
            cues: [
              { at: 'tutup', swap: 'Bdapur', to: 'dapur_tutup' }, { at: 'tutup', smoke: 'Bdapur', on: false }, { at: 'tutup', stamp: 'TUTUP', at_: [0.5, 0.42] },
              { at: 'honornya', tag: 'tiniB', text: 'HONOR Rp0', color: RED }, { at: 'honornya', kw: 'HONOR *BERHENTI*' }, { at: 'hari itu', emote: 'tiniB', icon: 'sweat', dur: 1500 },
            ] },
          { together: [{ focus: 'both' }, { wait: 200 }] },
          { caption: 'Kalikan 26 ribu dapur: sekitar satu juta orang kehilangan penghasilan.', vo: 'm-25',
            speak: 'Kalikan dua puluh enam ribu dapur: sekitar satu juta orang kehilangan penghasilan.',
            cues: [{ at: 'kalikan', kw: '× *26 RIBU* DAPUR' }, { at: 'satu juta', chart: 'KEHILANGAN PENGHASILAN', bars: [['Desa A', 0, GREEN], ['Desa B (nasional)', 1, '#e43b44']], max: 1.2, suffix: ' juta org', place: 'right', y: 0.1, dur: 0 }, { at: 'satu juta', kw: '*±1 JUTA* ORANG' }] },
          { clear: true },
          { together: [{ focus: 'right' }, { camera: { x: R(80), y: 76, zoom: 2 }, side: 'right', dur: 600 }] },
          { caption: 'Pemilik dapur juga terjepit. Bangunan dan alat masak masih dicicil.', vo: 'm-26',
            cues: [{ at: 'pemilik', show: 'kB' }, { at: 'terjepit', kw: 'PEMILIK *TERJEPIT*' }, { at: 'bangunan', pop: 'tagihan' }, { at: 'dicicil', label: 'CICILAN!', x: R(70), y: 74, bg: RED, size: 16, dur: 0 }, { at: 'dicicil', emote: 'kB', icon: 'sweat', dur: 1200 }] },
          { caption: 'Ini bukan andai-andai. Mitra dapur yang ditangguhkan sudah mengadu ke DPR karena terlilit utang.', vo: 'm-27', punch: true,
            speak: 'Ini bukan andai-andai. Mitra dapur yang ditangguhkan sudah mengadu ke de pe er karena terlilit utang.',
            cues: [{ at: 'bukan andai', kw: '*BUKAN* ANDAI-ANDAI' }, { at: 'mengadu', kw: 'MENGADU KE *DPR*' }, { at: 'terlilit', kw: 'TERLILIT *UTANG*' }, { at: 'terlilit', sticker: 'shock', at_: Rt }] },
          { clear: true },
        ],
      }],
    },

    // ======================================================
    // BAB 5 — HARGA & PASOKAN
    // ======================================================
    {
      id: 'bab-5',
      title: 'Pembeli raksasa bernama MBG',
      scenes: [
        {
          transition: 'cut',
          sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: 120, y: 66, zoom: 1.6 },
          clock: 'JULI 2026',
          note: 'Harga ayam di tingkat peternak (Bapanas, Juli 2026)',
          props: [
            { sprite: 'kandang', x: 120, y: 92, depth: 4 },
            ...[100, 108, 116, 124, 132, 140].map((x, i) => ({ id: 'c' + i, sprite: 'ayam', x, y: 90 - (i % 2) * 2, depth: 5 })),
            ...[104, 112, 120, 128, 136].map((x, i) => ({ id: 'd' + i, sprite: 'ayam', x, y: 84, depth: 5, hidden: true })),
            { id: 'sekolah', sprite: 'gedung', x: 36, y: 92, scale: 1.1, depth: 3 },
          ],
          actors: [{ id: 'darto', sprite: 'darto', x: 158, y: 96, face: 'left', tag: 'PAK DARTO', tagColor: '#7d8a4a' }],
          steps: [
            { caption: 'Sekarang, dampak yang paling aneh: harga.', vo: 'm-28', cues: [{ at: 'paling aneh', kw: 'PALING *ANEH*: HARGA' }, { at: 'harga', sticker: 'sus', at_: L }] },
            { caption: 'Ini pernah terjadi. Juli 2026, sekolah libur, dapur MBG berhenti sementara.', vo: 'm-29',
              speak: 'Ini pernah terjadi. Juli dua ribu dua puluh enam, sekolah libur, dapur em be ge berhenti sementara.',
              cues: [{ at: 0, camera: { x: 36, y: 66, zoom: 2 }, dur: 600 }, { at: 'pernah', kw: '*PERNAH* TERJADI' }, { at: 'libur', label: 'LIBUR', x: 36, y: 50, bg: RED, size: 18, dur: 0 }, { at: 'berhenti', kw: 'MBG *BERHENTI SEMENTARA*' }] },
            { clear: true },
            { caption: 'Harga ayam di peternak anjlok ke 14 ribu per kilo. Stok kebanyakan.', vo: 'm-30',
              speak: 'Harga ayam di peternak anjlok ke empat belas ribu per kilo. Stok kebanyakan.',
              cues: [
                { at: 0, camera: { x: 124, y: 70, zoom: 1.8 }, dur: 600 },
                { at: 'anjlok', kw: 'ANJLOK *Rp14 RB*/KG' }, { at: 'anjlok', shake: 200 },
                ...[0, 1, 2, 3, 4].map(i => ({ at: 0.55 + i * 0.07, pop: 'd' + i })), { at: 'stok', emote: 'darto', icon: 'sweat', dur: 1500 },
              ] },
            { caption: 'Begitu MBG jalan lagi, ayam, telur, sampai timun ikut naik.', vo: 'm-31', speak: 'Begitu em be ge jalan lagi, ayam, telur, sampai timun ikut naik.',
              cues: [
                { at: 0, camera: { x: 96, y: 60, zoom: 1 }, dur: 600 },
                { at: 'jalan lagi', chart: 'HARGA AYAM PETERNAK (ribu Rp/kg)', bars: [['Libur, MBG stop', 14, '#e43b44'], ['MBG jalan lagi', 21.7, GREEN]], max: 25, suffix: ' rb', place: 'right', y: 0.1, dur: 0 },
                { at: 'ikut naik', kw: 'AYAM, TELUR, TIMUN *NAIK*' },
              ] },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', split: true, focus: 'both',
          tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
          camera: { x: 96, y: 70, zoom: 1.3 }, cameraB: { x: R(96), y: 70, zoom: 1.3 },
          clock: 'BULAN 1',
          props: [0, 192].flatMap(dx => {
            const s = dx ? 'B' : 'A';
            return [
              { sprite: 'warung', x: 70 + dx, y: 92, scale: 1.1, depth: 4 },
              { id: s + 'telur', sprite: 'telur', x: 70 + dx, y: 72, scale: 1.6, depth: 8 },
              { sprite: 'kandang', x: 140 + dx, y: 92, scale: 0.8, depth: 4 },
              ...[126, 134, 142, 150].map(x => ({ sprite: 'ayam', x: x + dx, y: 90, depth: 5 })),
              ...(dx ? [128, 136, 144, 152].map((x, i) => ({ id: 'Bm' + i, sprite: 'ayam', x: x + dx, y: 84, depth: 5, hidden: true })) : []),
            ];
          }),
          actors: [
            { id: 'rinaA', sprite: 'warga2', x: 92, y: 98, face: 'left', tag: 'BU RINA', tagColor: RED }, { id: 'tiniA', sprite: 'tini', x: 50, y: 98, hidden: true },
            { id: 'rinaB', sprite: 'warga2', x: R(92), y: 98, face: 'left', tag: 'BU RINA', tagColor: RED },
            { id: 'dartoA', sprite: 'darto', x: 168, y: 98, face: 'left' }, { id: 'dartoB', sprite: 'darto', x: R(168), y: 98, face: 'left', tag: 'PAK DARTO', tagColor: '#7d8a4a' },
          ],
          steps: [
            { caption: 'Kenalin Pak Darto, peternak ayam yang memasok dapur.', vo: 'm-32',
              cues: [{ at: 'pak darto', kw: '*PAK DARTO*, PETERNAK' }, { at: 'pak darto', glow: 'dartoB', times: 2 }, { at: 'pak darto', glow: 'dartoA', times: 2 }] },
            { together: [{ focus: 'right' }, { wait: 200 }] },
            { caption: 'Di desa B, pembeli tetapnya hilang. Ayamnya menumpuk, harganya jatuh.', vo: 'm-33',
              speak: 'Di desa Be, pembeli tetapnya hilang. Ayamnya menumpuk, harganya jatuh.',
              cues: [{ at: 'pembeli', kw: 'PEMBELI *HILANG*' }, ...[0, 1, 2, 3].map(i => ({ at: 0.45 + i * 0.07, pop: 'Bm' + i })), { at: 'harganya', label: 'TURUN ↓', x: R(140), y: 60, bg: '#e43b44', size: 16, dur: 0 }, { at: 'jatuh', kw: 'HARGA *JATUH*' }] },
            { caption: 'Bu Rina yang belanja di pasar justru senang. Ayam dan telur jadi murah.', vo: 'm-34',
              cues: [{ at: 0, camera: { x: R(80), y: 74, zoom: 2 }, side: 'right', dur: 600 }, { at: 'senang', emote: 'rinaB', icon: 'heart', dur: 1300 }, { at: 'murah', kw: 'AYAM & TELUR *MURAH*' }, { at: 'murah', sticker: 'party', at_: L }] },
            { clear: true },
            { caption: 'Tapi Pak Darto rugi, lalu mengurangi ternaknya.', vo: 'm-35',
              cues: [{ at: 0, camera: { x: R(146), y: 76, zoom: 2 }, side: 'right', dur: 600 }, { at: 'rugi', tag: 'dartoB', text: 'RUGI', color: RED }, { at: 'rugi', emote: 'dartoB', icon: 'sweat', dur: 1300 }, ...[0, 1, 2, 3].map(i => ({ at: 0.6 + i * 0.06, hide: 'Bm' + i })), { at: 'mengurangi', kw: 'TERNAK *DIKURANGI*' }] },
            { caption: 'Beberapa bulan kemudian, pasokan menipis. Harga bisa naik lagi.', vo: 'm-36',
              cues: [{ at: 0, clock: 'BULAN', from: 2, to: 4, dur: 900 }, { at: 'menipis', kw: 'PASOKAN *MENIPIS*' }, { at: 'naik lagi', label: 'NAIK LAGI ↑', x: R(80), y: 56, bg: '#e43b44', size: 16, dur: 0 }, { at: 'naik lagi', sticker: 'shock', at_: Rt }] },
            { clear: true },
            { together: [{ focus: 'left' }, { camera: { x: 72, y: 74, zoom: 2 }, dur: 600 }, { clock: 'BULAN 1' }] },
            { caption: 'Di desa A? Dapur dan ibu rumah tangga berebut telur di pasar yang sama.', vo: 'm-37',
              cues: [{ at: 'dapur', enter: 'tiniA', from: 'left', to: 56, dur: 700 }, { at: 'berebut', kw: '*BEREBUT* TELUR' }, { at: 'berebut', shake: 200 }, { at: 'berebut', emote: 'rinaA', icon: 'exclaim', dur: 1200 }, { at: 'pasar', label: 'NAIK!', x: 70, y: 56, bg: '#e43b44', size: 16, dur: 0 }] },
            { clear: true },
            { together: [{ focus: 'both' }, { camera: { x: 96, y: 70, zoom: 1.3 }, dur: 500 }, { camera: { x: R(96), y: 70, zoom: 1.3 }, side: 'right', dur: 500 }] },
            { caption: 'MBG itu seperti pembeli raksasa. Datang, harga naik. Pergi, harga jatuh.', vo: 'm-38', punch: true,
              speak: 'Em be ge itu seperti pembeli raksasa. Datang, harga naik. Pergi, harga jatuh.',
              cues: [{ at: 'pembeli raksasa', kw: 'PEMBELI *RAKSASA*' }, { at: 'datang', kw: 'DATANG: *HARGA NAIK*' }, { at: 'pergi', kw: 'PERGI: *HARGA JATUH*', keepKw: true }] },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 6 — KERACUNAN
    // ======================================================
    {
      id: 'bab-6',
      title: 'Kasus keracunan',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 76, zoom: 1.6 },
        props: [...aulaMakan(), { id: 'bahaya', sprite: 'bahaya', x: 96, y: 72, scale: 2, depth: 20, hidden: true }],
        actors: ANAK,
        steps: [
          { caption: 'Lalu kenapa ada yang ingin MBG berhenti?', vo: 'm-39', speak: 'Lalu kenapa ada yang ingin em be ge berhenti?',
            cues: [{ at: 'kenapa', kw: 'KENAPA *INGIN BERHENTI?*' }] },
          { caption: 'Alasan terbesarnya: kasus keracunan.', vo: 'm-40',
            cues: [{ at: 'keracunan', pop: 'bahaya' }, { at: 'keracunan', kw: '*KERACUNAN*' }, { at: 'keracunan', shake: 300 }, { at: 'keracunan', emote: 'sari', icon: 'sweat', dur: 1500 }, { at: 'keracunan', emote: 'k4', icon: 'sweat', dur: 1500 }] },
          { together: [
            { card: 'Data BGN (Komisi IX DPR)', items: ['5.482 korban', '71 kejadian', '22 Juli – 3 Sep 2026'], x: 96, y: 36, stagger: 600, dur: 0 },
            { caption: 'Data BGN: 5.482 korban, dalam 71 kejadian.', vo: 'm-41',
              speak: 'Data be ge en: lima ribu empat ratus delapan puluh dua korban, dalam tujuh puluh satu kejadian.',
              cues: [{ at: 'lima ribu', kw: '*5.482* KORBAN' }, { at: 'tujuh puluh', kw: '*71* KEJADIAN' }] },
          ] },
          { caption: 'Itu baru dari akhir Juli sampai awal September 2026.', vo: 'm-42',
            speak: 'Itu baru dari akhir Juli sampai awal September dua ribu dua puluh enam.',
            cues: [{ at: 'baru', kw: 'BARU *±6 MINGGU*' }, { at: 'september', sticker: 'shock', at_: Rt }] },
          { clear: true },
          { together: [
            { card: 'Pemantau independen (JPPI)', items: ['±43 ribu korban dugaan', 'sejak 2025 – Agustus 2026'], x: 96, y: 36, stagger: 600, dur: 0 },
            { caption: 'Lembaga pemantau mencatat jauh lebih besar: sekitar 43 ribu korban dugaan, sejak 2025.', vo: 'm-43',
              speak: 'Lembaga pemantau mencatat jauh lebih besar: sekitar empat puluh tiga ribu korban dugaan, sejak dua ribu dua puluh lima.',
              cues: [{ at: 'jauh lebih', kw: 'JAUH *LEBIH BESAR*' }, { at: 'empat puluh', kw: '*±43 RIBU* KORBAN DUGAAN' }] },
          ] },
          { clear: true },
          { caption: 'Dapur yang melanggar standar akhirnya ditangguhkan.', vo: 'm-44',
            cues: [{ at: 'melanggar', kw: 'MELANGGAR *STANDAR*' }, { at: 'ditangguhkan', stamp: 'DITANGGUHKAN', at_: [0.5, 0.42] }] },
          { caption: 'Di desa A, kalau dapur jalan tanpa dibenahi, risikonya tetap ada.', vo: 'm-45',
            cues: [{ at: 'tanpa dibenahi', kw: 'TANPA *DIBENAHI*' }, { at: 'risikonya', kw: 'RISIKO *TETAP ADA*' }, { at: 'risikonya', glow: 'bahaya', times: 3 }] },
          { caption: 'Di desa B, risikonya hilang. Tapi manfaatnya ikut hilang.', vo: 'm-46', punch: true,
            speak: 'Di desa Be, risikonya hilang. Tapi manfaatnya ikut hilang.',
            cues: [
              { at: 'risikonya hilang', hide: 'bahaya' }, { at: 'risikonya hilang', kw: 'RISIKO *HILANG*' },
              ...PIRING_IDS.map((id, i) => ({ at: 0.55 + i * 0.05, swap: id, to: 'piring_kosong' })),
              { at: 'manfaatnya', kw: 'MANFAAT *IKUT HILANG*', keepKw: true },
            ] },
        ],
      }],
    },

    // ======================================================
    // BAB 7 — UANG
    // ======================================================
    {
      id: 'bab-7',
      title: 'Hemat Rp600 miliar sehari?',
      scenes: [{
        transition: 'cut',
        sky: 'day', split: true, focus: 'both',
        tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
        camera: { x: 96, y: 68, zoom: 1.2 }, cameraB: { x: R(96), y: 68, zoom: 1.2 },
        clock: 'BULAN 3',
        note: 'Struk = ilustrasi',
        props: [...sisiDesa(0, 'A', true), ...sisiDesa(192, 'B', false),
          { id: 'uang', sprite: 'coins_pile', x: R(60), y: 102, scale: 2, depth: 12, hidden: true }],
        actors: [
          { id: 'tiniB', sprite: 'tini', x: R(124), y: 98, tag: 'HONOR Rp0', tagColor: RED },
          { id: 'dartoB', sprite: 'darto', x: R(140), y: 98, face: 'left', tag: 'RUGI', tagColor: RED },
          { id: 'sariB', sprite: 'girl', x: R(40), y: 98, tag: 'BEKAL +Rp300 RB', tagColor: RED },
        ],
        steps: [
          { caption: 'Terakhir, soal uang.', vo: 'm-47', cues: [{ at: 'uang', kw: 'SOAL *UANG*' }] },
          { together: [{ focus: 'right' }, { wait: 200 }] },
          { caption: 'Kalau MBG berhenti, negara hemat sekitar Rp600 miliar per hari.', vo: 'm-48',
            speak: 'Kalau em be ge berhenti, negara hemat sekitar enam ratus miliar rupiah per hari.',
            cues: [{ at: 'hemat', pop: 'uang' }, { at: 'enam ratus', kw: 'HEMAT *Rp600 M*/HARI' }, { at: 'enam ratus', sticker: 'money', at_: L }] },
          { caption: 'Kedengarannya besar. Tapi ada biaya yang tidak tercatat di APBN.', vo: 'm-49',
            speak: 'Kedengarannya besar. Tapi ada biaya yang tidak tercatat di a pe be en.',
            cues: [{ at: 'tapi', kw: 'BIAYA *TIDAK TERCATAT*' }, { at: 'tidak tercatat', sticker: 'sus', at_: Rt }] },
          { caption: 'Satu juta orang kehilangan kerja. Peternak dan petani kehilangan pembeli. Jutaan anak kembali makan seadanya.', vo: 'm-50',
            cues: [{ at: 'satu juta', glow: 'tiniB', times: 2 }, { at: 'satu juta', kw: '*1 JUTA* KEHILANGAN KERJA' }, { at: 'peternak', glow: 'dartoB', times: 2 }, { at: 'peternak', kw: 'PEMASOK *KEHILANGAN PEMBELI*' }, { at: 'jutaan anak', glow: 'sariB', times: 2 }, { at: 'jutaan anak', kw: 'ANAK *MAKAN SEADANYA*' }] },
          { caption: 'Ini struk desa B setelah tiga bulan.', vo: 'm-51', speak: 'Ini struk desa Be setelah tiga bulan.' },
          { receipt: 'STRUK DESA B · 3 BULAN', stagger: 450,
            lines: [['Anggaran negara', 'HEMAT ✓'], ['Honor pekerja dapur', 'HILANG'], ['Pembeli tetap peternak', 'HILANG'], ['Bekal anak / keluarga', '+Rp900 RB']],
            total: ['TAGIHAN TERSEMBUNYI', '???'], note: 'ilustrasi · bekal Rp300 rb × 3 bulan' },
          { wait: 900 },
          { clear: true },
          { together: [{ focus: 'both' }, { wait: 200 }] },
          { caption: 'Hemat di satu kolom, bisa jadi tagihan di kolom lain.', vo: 'm-52', punch: true,
            cues: [{ at: 'hemat', kw: 'HEMAT DI *SATU KOLOM*' }, { at: 'tagihan', kw: 'TAGIHAN DI *KOLOM LAIN*', keepKw: true }] },
        ],
      }],
    },

    // ======================================================
    // BAB 8 — PUNCHLINE
    // ======================================================
    {
      id: 'bab-8',
      title: 'Bukan saklar lampu',
      scenes: [{
        transition: 'cut',
        sky: 'indoor', fit: 'width',
        camera: { x: 96, y: 60, zoom: 1.4 },
        props: [{ id: 'saklar', sprite: 'saklar_on', x: 96, y: 90, scale: 5, depth: 10 }],
        steps: [
          { caption: 'Jadi, apa jawabannya?', vo: 'm-53', cues: [{ at: 0, kw: 'APA *JAWABANNYA?*' }] },
          { caption: 'MBG tidak bisa dimatikan seperti saklar lampu.', vo: 'm-54', speak: 'Em be ge tidak bisa dimatikan seperti saklar lampu.',
            cues: [{ at: 'dimatikan', swap: 'saklar', to: 'saklar_off' }, { at: 'dimatikan', shake: 200 }, { at: 'seperti', swap: 'saklar', to: 'saklar_on' }, { at: 'saklar', kw: 'BUKAN *SAKLAR LAMPU*' }] },
          { caption: 'Masalahnya bukan lanjut atau stop. Tapi aman, atau asal jalan.', vo: 'm-55', punch: true,
            cues: [{ at: 'bukan lanjut', kw: 'BUKAN *LANJUT* ATAU *STOP*' }, { at: 'aman', kw: '*AMAN*, ATAU *ASAL JALAN?*', keepKw: true }] },
          { clear: true },
          { caption: 'Menurutmu: lanjut tapi dibenahi, atau stop saja? Tulis di kolom komentar.', vo: 'm-56',
            cues: [
              { at: 'menurutmu', kw: '*LANJUT & DIBENAHI* ATAU *STOP*?' },
              { at: 'tulis', label: 'LIKE', x: 66, y: 34, bg: '#3b5dc9', dur: 0 },
              { at: 'tulis', label: 'KOMEN', x: 96, y: 34, bg: GREEN, dur: 0 },
              { at: 'tulis', label: 'SUBSCRIBE', x: 130, y: 34, bg: '#e43b44', dur: 0 },
              { at: 'komentar', kw: 'TULIS DI *KOMENTAR*', keepKw: true },
            ] },
          { wait: 1500 },
        ],
      }],
    },
  ],
};

// 9:16 — adegan ber-fit lebar (bukan split) dibuat lebih dekat
if (VERT) {
  const zz = c => { if (c && typeof c === 'object' && c.zoom) c.zoom = Math.max(c.zoom, 1.7); };
  const walk = st => { if (st.together) st.together.forEach(walk); zz(st.camera); (st.cues || []).forEach(walk); };
  STORY.chapters.forEach(ch => ch.scenes.forEach(sc => {
    if (sc.fit !== 'width' || sc.split) return;
    zz(sc.camera); sc.steps.forEach(walk);
  }));
}
