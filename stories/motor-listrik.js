// ============================================================
//  VIDEO EXPLAINER — "Kalau semua motor jadi listrik, apa yang
//  terjadi pada Bumi?"
//
//  Long form = intro + 5 bab. Setiap bab berdiri sendiri
//  (hook → perbandingan → punchline) sehingga bisa langsung
//  dijadikan short. Pilih bab & format (16:9 / 9:16) di pemutar.
//
//  Adegan `split`: sisi KIRI x 0..192, sisi KANAN x 192..384.
//  Gunakan R(x) untuk posisi di sisi kanan.
// ============================================================

const R = x => 192 + x;

function cityRow(x0, n) {
  const kinds = ['building2', 'building1', 'building4', 'building3'];
  const out = [];
  let x = x0;
  for (let i = 0; i < n; i++) {
    out.push({ sprite: kinds[i % 4], x, depth: 4 });
    x += [22, 18, 20, 16][i % 4];
  }
  return out;
}

const STORY = {
  title: 'Motor Listrik dan Bumi',

  // ---------------- INTRO (hanya di long form) ----------------
  intro: [
    {
      sky: 'day', road: true, haze: 0.3,
      camera: { x: 96, y: 88, zoom: 2.2 },
      traffic: { kind: 'gas', count: 10 },
      props: [...cityRow(4, 10), { sprite: 'lamp', x: 40 }, { sprite: 'lamp', x: 140 }],
      steps: [
        { together: [
          { camera: { x: 96, y: 54, zoom: 1 }, dur: 3200 },
          { title: 'Kalau Semua Motor Jadi Listrik...', sub: 'apa yang terjadi pada Bumi?', dark: false, size: 26, dur: 2400 },
        ] },
      ],
    },
  ],

  chapters: [
    // ==========================================================
    // BAB 1 — Di jalan raya
    // ==========================================================
    {
      id: 'bab-1',
      title: '120 juta motor jadi listrik',
      scenes: [{
        transition: 'cut',
        split: true, focus: 'left',
        sky: 'day', road: true,
        tags: ['BENSIN', 'LISTRIK'],
        haze: [0.3, 0],
        camera: { x: 96, y: 82, zoom: 1.9 },
        cameraB: { x: R(96), y: 70, zoom: 1.2 },
        traffic: [
          { kind: 'gas', count: 8, x0: 0, x1: 192 },
          { kind: 'ev', count: 8, x0: 192, x1: 384 },
        ],
        props: [...cityRow(4, 10), ...cityRow(R(4), 10)],
        steps: [
          { together: [
            { hook: '120 juta motor jadi listrik dalam semalam?' },
            { camera: { x: 96, y: 62, zoom: 1.15 }, dur: 2600 },
          ] },
          { together: [
            { caption: 'Di Indonesia ada lebih dari 120 juta motor.' },
            { camera: { x: 70, y: 70, zoom: 1.4 }, dur: 2600 },
          ] },
          { together: [
            { caption: 'Hampir semuanya minum bensin.' },
            { haze: 0.55, dur: 2000 },
            { camera: { x: 110, y: 66, zoom: 1.25 }, dur: 2000 },
          ] },
          { together: [
            { focus: 'both', dur: 700 },
            { camera: { x: 96, y: 66, zoom: 1.1 }, dur: 700 },
            { caption: 'Sekarang bayangkan semuanya listrik.' },
          ] },
          { together: [{ badge: 'Asap: banyak', side: 'left' }, { badge: 'Asap: nol', side: 'right' }] },
          { together: [{ badge: 'Bising', side: 'left' }, { badge: 'Senyap', side: 'right' }] },
          { caption: 'Tanpa knalpot. Tanpa asap di jalan.' },
          { clear: true },
          { together: [
            { focus: 'right', dur: 700 },
            { camera: { x: R(96), y: 60, zoom: 1.05 }, side: 'right', dur: 2400 },
            { caption: 'Langit kota kembali biru.', punch: true },
          ] },
        ],
      }],
    },

    // ==========================================================
    // BAB 2 — Isi asap knalpot
    // ==========================================================
    {
      id: 'bab-2',
      title: 'Apa yang keluar dari knalpot',
      scenes: [{
        transition: 'cut',
        split: true, focus: 'both',
        sky: 'day', road: true,
        tags: ['BENSIN', 'LISTRIK'],
        haze: [0.15, 0],
        camera: { x: 100, y: 84, zoom: 1.6 },
        cameraB: { x: R(100), y: 84, zoom: 1.6 },
        props: [
          ...cityRow(4, 10), ...cityRow(R(4), 10),
          { sprite: 'trafficlight', x: 126 }, { sprite: 'trafficlight', x: R(126) },
          { id: 'mg', sprite: 'motor_gas_0', x: 100, y: 101, depth: 12, smoke: { dx: -9, dy: -5, every: 150 } },
          { id: 'me', sprite: 'motor_ev_0', x: R(100), y: 101, depth: 12 },
        ],
        steps: [
          { together: [
            { hook: 'Apa sebenarnya yang keluar dari knalpotmu?' },
            { camera: { x: 96, y: 80, zoom: 1.3 }, dur: 2600 },
            { camera: { x: R(96), y: 80, zoom: 1.3 }, side: 'right', dur: 2600 },
          ] },
          { together: [
            { focus: 'left', dur: 700 },
            { camera: { x: 92, y: 95, zoom: 3.2 }, dur: 1200, ease: 'Cubic.easeInOut' },
          ] },
          { glow: 'mg' },
          { card: 'Gas buang', items: ['CO2: memanaskan Bumi', 'CO: gas beracun', 'NOx: bikin sesak napas', 'Partikel: masuk paru-paru'], x: 91, y: 96, place: 'left', stagger: 260 },
          { caption: 'Keluar dari setiap motor, setiap hari.' },
          { clear: true },
          { together: [
            { focus: 'right', dur: 700 },
            { camera: { x: R(92), y: 95, zoom: 3.2 }, side: 'right', dur: 1200, ease: 'Cubic.easeInOut' },
          ] },
          { glow: 'me' },
          { card: 'Gas buang', items: ['Tidak ada knalpot', '0 emisi di jalan'], x: R(91), y: 96, place: 'left', color: '#a7f070' },
          { caption: 'Motor listrik tidak punya knalpot sama sekali.' },
          { clear: true },
          { together: [
            { focus: 'both', dur: 700 },
            { camera: { x: 96, y: 70, zoom: 1.15 }, dur: 900 },
            { camera: { x: R(96), y: 70, zoom: 1.15 }, side: 'right', dur: 900 },
          ] },
          { together: [{ badge: 'Energi jadi panas', side: 'left' }, { badge: 'Energi jadi gerak', side: 'right' }] },
          { caption: 'Mesin bensin juga membuang banyak energi jadi panas.' },
          { caption: 'Di jalan, motor listrik menang telak.', punch: true },
        ],
      }],
    },

    // ==========================================================
    // BAB 3 — Sumber listrik
    // ==========================================================
    {
      id: 'bab-3',
      title: 'Listriknya dari mana',
      scenes: [{
        transition: 'cut',
        split: true, focus: 'left',
        sky: 'day', road: true,
        tags: ['BATU BARA', 'SURYA & ANGIN'],
        tagColors: ['#333c57', '#3b5dc9'],
        haze: [0.2, 0],
        sunX: [60, R(40)],
        camera: { x: 30, y: 74, zoom: 1.6 },
        cameraB: { x: R(30), y: 70, zoom: 1.3 },
        traffic: [
          { kind: 'ev', count: 4, x0: 0, x1: 192, speed: 34 },
          { kind: 'ev', count: 4, x0: 192, x1: 384, speed: 34 },
        ],
        props: [
          { sprite: 'building2', x: 6, depth: 4 }, { id: 'chg', sprite: 'charger', x: 24, depth: 6 },
          { sprite: 'pylon', x: 70 }, { sprite: 'pylon', x: 118 },
          { id: 'pltu', sprite: 'plant', x: 166, smoke: { dx: 13, dy: -46, big: true, dark: true, every: 240 } },
          { sprite: 'building2', x: R(6), depth: 4 }, { sprite: 'charger', x: R(24), depth: 6 },
          { sprite: 'solar', x: R(52) }, { sprite: 'solar', x: R(72) }, { sprite: 'solar', x: R(92) },
          { sprite: 'turbine', x: R(124), y: 82 }, { sprite: 'turbine', x: R(152), y: 80, speed: 3000 }, { sprite: 'turbine', x: R(178), y: 82, speed: 2200 },
        ],
        wires: [[28, 77], [70, 69], [118, 69], [152, 70]],
        steps: [
          { together: [
            { hook: 'Motor listrik. Tapi listriknya dari mana?' },
            { glow: 'chg', times: 3 },
          ] },
          { together: [
            { caption: 'Sebagian besar listrik Indonesia masih dari batu bara.' },
            { camera: { x: 150, y: 62, zoom: 1.3 }, dur: 3200 },
          ] },
          { camera: { x: 176, y: 50, zoom: 2.6 }, dur: 1000 },
          { card: 'PLTU batu bara', items: ['Asapnya pindah ke sini'], x: 179, y: 46, place: 'left', color: '#c2c3c7' },
          { caption: 'Asapnya tidak hilang. Hanya pindah tempat.' },
          { clear: true },
          { together: [
            { focus: 'right', dur: 700 },
            { camera: { x: R(150), y: 62, zoom: 1.3 }, side: 'right', dur: 3200 },
            { caption: 'Dari matahari dan angin, asapnya benar-benar hilang.' },
          ] },
          { together: [
            { focus: 'both', dur: 700 },
            { camera: { x: 120, y: 58, zoom: 1 }, dur: 900 },
            { camera: { x: R(110), y: 58, zoom: 1 }, side: 'right', dur: 900 },
          ] },
          { together: [{ badge: 'Emisi turun sedikit', side: 'left' }, { badge: 'Emisi turun drastis', side: 'right' }] },
          { caption: 'Meski dari batu bara, totalnya tetap lebih rendah.' },
          { caption: 'Makin bersih listriknya, makin besar manfaatnya.', punch: true },
        ],
      }],
    },

    // ==========================================================
    // BAB 4 — Baterai & tambang
    // ==========================================================
    {
      id: 'bab-4',
      title: 'Harga tersembunyi baterai',
      scenes: [
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 60, zoom: 1.1 },
          props: [
            { sprite: 'tree', x: 24 }, { sprite: 'bush', x: 50 }, { sprite: 'tree', x: 168 }, { sprite: 'bush', x: 140 },
            { id: 'bat', sprite: 'battery', x: 96, scale: 2 },
          ],
          steps: [
            { together: [
              { hook: 'Ada harga tersembunyi di dalam baterai.' },
              { camera: { x: 96, y: 72, zoom: 2.1 }, dur: 2600 },
            ] },
            { glow: 'bat' },
            { card: 'Isi baterai', items: ['Nikel', 'Litium', 'Kobalt'], x: 96, y: 66, color: '#a7f070' },
            { caption: 'Indonesia punya cadangan nikel terbesar di dunia.' },
            { clear: true },
          ],
        },
        {
          transition: 'zoom',
          split: true, focus: 'both',
          sky: 'day',
          tags: ['TAMBANG ASAL-ASALAN', 'DIKELOLA & DAUR ULANG'],
          tagColors: ['#8b5a2b', '#38b764'],
          camera: { x: 96, y: 70, zoom: 1.1 },
          cameraB: { x: R(96), y: 70, zoom: 1.1 },
          props: [
            { sprite: 'stump', x: 30 }, { sprite: 'stump', x: 46 }, { sprite: 'stump', x: 60 },
            { sprite: 'excavator', x: 92 }, { sprite: 'rocks', x: 122 }, { sprite: 'rocks', x: 140 },
            { id: 'sungai1', sprite: 'river_dirty', x: 160, y: 100, scale: 2, depth: 3 },
            { sprite: 'tree', x: R(26) }, { sprite: 'tree', x: R(46) }, { sprite: 'bush', x: R(64) },
            { sprite: 'battery', x: R(104) },
            { id: 'daur', sprite: 'recycle', x: R(130), y: 66, center: true, scale: 1.4, spin: 6000 },
            { sprite: 'river_clean', x: R(160), y: 100, scale: 2, depth: 3 },
            { sprite: 'tree', x: R(176) },
          ],
          steps: [
            { together: [
              { focus: 'left', dur: 700 },
              { camera: { x: 110, y: 82, zoom: 1.8 }, dur: 1400 },
              { caption: 'Tambang yang asal-asalan merusak hutan...' },
            ] },
            { together: [
              { camera: { x: 160, y: 98, zoom: 2.2 }, dur: 1200 },
              { caption: '...dan mencemari sungai.' },
            ] },
            { together: [
              { focus: 'right', dur: 700 },
              { camera: { x: R(124), y: 72, zoom: 2 }, side: 'right', dur: 1400 },
              { caption: 'Baterai bekas bisa didaur ulang. Logamnya dipakai lagi.' },
            ] },
            { together: [
              { focus: 'both', dur: 700 },
              { camera: { x: 100, y: 64, zoom: 1 }, dur: 900 },
              { camera: { x: R(100), y: 64, zoom: 1 }, side: 'right', dur: 900 },
            ] },
            { caption: 'Baterai tidak bebas jejak. Cara mengelolanya yang menentukan.', punch: true },
          ],
        },
      ],
    },

    // ==========================================================
    // BAB 5 — Bumi
    // ==========================================================
    {
      id: 'bab-5',
      title: 'Apakah Bumi lebih baik',
      scenes: [{
        transition: 'cut',
        split: true, focus: 'both',
        sky: 'space',
        tags: ['TETAP BENSIN', 'LISTRIK + ENERGI BERSIH'],
        tagColors: ['#b13e53', '#38b764'],
        camera: { x: 96, y: 56, zoom: 1.3 },
        cameraB: { x: R(96), y: 56, zoom: 1.3 },
        props: [
          { sprite: 'earth', x: 96, y: 58, center: true, scale: 1.4, float: true },
          { id: 'smogL', sprite: 'earth_smog', x: 96, y: 58, center: true, scale: 1.4, float: true, alpha: 0.35 },
          { sprite: 'earth', x: R(96), y: 58, center: true, scale: 1.4, float: true },
          { id: 'smogR', sprite: 'earth_smog', x: R(96), y: 58, center: true, scale: 1.4, float: true, alpha: 0.35 },
        ],
        steps: [
          { together: [
            { hook: 'Jadi, apakah Bumi benar-benar lebih baik?' },
            { camera: { x: 96, y: 56, zoom: 1 }, dur: 2600 },
            { camera: { x: R(96), y: 56, zoom: 1 }, side: 'right', dur: 2600 },
          ] },
          { together: [
            { focus: 'left', dur: 700 },
            { camera: { x: 96, y: 56, zoom: 1.4 }, dur: 2600 },
            { alpha: 'smogL', to: 0.8, dur: 2600 },
            { caption: 'Tetap bensin: polusi terus menumpuk.' },
          ] },
          { together: [
            { focus: 'right', dur: 700 },
            { camera: { x: R(96), y: 56, zoom: 1.4 }, side: 'right', dur: 2600 },
            { alpha: 'smogR', to: 0, dur: 2600 },
            { caption: 'Listrik dari energi bersih: udara membaik.' },
          ] },
          { together: [
            { focus: 'both', dur: 700 },
            { camera: { x: 96, y: 56, zoom: 1 }, dur: 900 },
            { camera: { x: R(96), y: 56, zoom: 1 }, side: 'right', dur: 900 },
          ] },
          { caption: 'Kuncinya bukan cuma motornya, tapi sumber listriknya.', punch: true },
          { title: 'Motor listrik + energi bersih', sub: '= Bumi yang lebih sehat', dark: false, size: 24, dur: 2600, keep: true },
        ],
      }],
    },
  ],
};
