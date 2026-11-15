// ============================================================
//  VIDEO EXPLAINER
//  "Kalau semua motor jadi listrik, apa yang terjadi pada Bumi?"
//
//  Layar = 192 x 108 piksel dunia, tanah di y = 90.
//  Jalan: lajur atas di y = 100, lajur bawah di y = 107.
// ============================================================

// Deretan gedung kota (dipakai ulang di beberapa adegan)
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
  scenes: [
    // ---------------------------------------------------------
    // 1. PEMBUKA — jalanan kota penuh motor bensin
    // ---------------------------------------------------------
    {
      sky: 'day',
      road: true,
      haze: 0.15,
      captionTop: true,
      camera: { x: 96, y: 90, zoom: 2.2 },          // mulai dekat ke jalan
      traffic: { kind: 'gas', count: 10, speed: 40 },
      props: [
        ...cityRow(4, 10),
        { sprite: 'lamp', x: 40 }, { sprite: 'lamp', x: 140 },
      ],
      steps: [
        { title: 'Kalau Semua Motor Jadi Listrik...', sub: 'apa yang terjadi pada Bumi?', dark: false, size: 22, dur: 3200 },
        { together: [
          { camera: { x: 96, y: 54, zoom: 1 }, dur: 3500 },   // zoom keluar: lihat seluruh kota
          { caption: 'Setiap hari, jalanan kita dipenuhi sepeda motor.' },
        ] },
        { caption: 'Di Indonesia jumlahnya lebih dari 120 juta unit, dan hampir semuanya masih memakai bensin.' },
        { together: [
          { haze: 0.4, dur: 4000 },
          { caption: 'Asap dari jutaan knalpot itu terus menumpuk di udara kota.' },
        ] },
      ],
    },

    // ---------------------------------------------------------
    // 2. ZOOM KE KNALPOT — apa isi asapnya?
    // ---------------------------------------------------------
    {
      transition: 'zoom',
      sky: 'day',
      road: true,
      haze: 0.15,
      captionTop: true,
      props: [
        ...cityRow(4, 10),
        { sprite: 'trafficlight', x: 128 },
        { id: 'motor', sprite: 'motor_gas_0', x: 100, y: 101, depth: 12, smoke: { dx: -9, dy: -5, every: 160 } },
        { sprite: 'motor_gas_2', x: 64, y: 101, depth: 12, smoke: { dx: -9, dy: -5, every: 190 } },
      ],
      steps: [
        { caption: 'Lampu merah. Mari kita lihat lebih dekat...' },
        { camera: { x: 88, y: 94, zoom: 4 }, dur: 2200, ease: 'Cubic.easeInOut' },   // ZOOM IN ke knalpot
        { glow: 'motor', times: 2 },
        { caption: 'Saat bensin dibakar di mesin, knalpot mengeluarkan gas buang:', dur: 1200 },
        { label: 'CO2', x: 74, y: 86, bg: '#566c86', dur: 400 },
        { label: 'CO', x: 74, y: 90, bg: '#b13e53', dur: 400 },
        { label: 'NOx', x: 74, y: 94, bg: '#ef7d57', dur: 400 },
        { label: 'Partikel halus', x: 74, y: 98, bg: '#1a1c2c', dur: 600 },
        { caption: 'CO2 memerangkap panas di atmosfer dan ikut memicu pemanasan global.' },
        { caption: 'CO, NOx, dan partikel halus mencemari udara yang kita hirup setiap hari.' },
        { clearLabels: true },
        { together: [
          { camera: 'reset', dur: 2500 },                                            // ZOOM OUT
          { haze: 0.55, dur: 3500 },
          { caption: 'Sekarang kalikan dengan jutaan motor, setiap hari...' },
        ] },
      ],
    },

    // ---------------------------------------------------------
    // 3. BAGAIMANA JIKA SEMUANYA LISTRIK?
    // ---------------------------------------------------------
    {
      sky: 'day',
      road: true,
      haze: 0.55,
      captionTop: true,
      traffic: { kind: 'gas', count: 10, speed: 40 },
      props: [
        ...cityRow(4, 10),
        { sprite: 'lamp', x: 40 },
        { id: 'charger', sprite: 'charger', x: 150, depth: 6 },
      ],
      steps: [
        { caption: 'Sekarang bayangkan: semua motor itu berganti menjadi motor listrik.' },
        { shake: 250 },
        { convert: 'ev', stagger: 120 },
        { together: [
          { haze: 0, dur: 5000 },
          { caption: 'Tidak ada knalpot, tidak ada asap di jalan. Udara kota jauh lebih bersih, dan jalanan lebih senyap.' },
        ] },
        { camera: { x: 150, y: 80, zoom: 3 }, dur: 1800 },                          // ZOOM ke stasiun pengisian
        { label: 'Isi daya', x: 150, y: 72, bg: '#38b764', dur: 300 },
        { caption: 'Motor listrik juga lebih efisien: sebagian besar energi baterainya benar-benar dipakai untuk bergerak.' },
        { caption: 'Mesin bensin justru membuang sebagian besar energinya menjadi panas.' },
        { clearLabels: true },
        { camera: 'reset', dur: 1800 },
      ],
    },

    // ---------------------------------------------------------
    // 4. LISTRIKNYA DARI MANA? — geser kamera ke PLTU
    // ---------------------------------------------------------
    {
      transition: 'zoom',
      sky: 'day',
      width: 400,
      road: true,
      captionTop: true,
      sunX: 250,
      camera: { x: 96 },
      traffic: { kind: 'ev', count: 12, speed: 40 },
      props: [
        ...cityRow(4, 7),
        { sprite: 'charger', x: 150, depth: 6 },
        { sprite: 'pylon', x: 190 }, { sprite: 'pylon', x: 250 }, { sprite: 'pylon', x: 310 },
        { id: 'pltu', sprite: 'plant', x: 360, smoke: { dx: 13, dy: -46, big: true, dark: true, every: 260 } },
      ],
      wires: [[154, 77], [190, 69], [250, 69], [310, 69], [345, 70]],
      steps: [
        { caption: 'Tapi tunggu... listriknya datang dari mana?' },
        { camera: { x: 304 }, dur: 5000 },                                        // PAN mengikuti kabel listrik
        { camera: { x: 373, y: 52, zoom: 2.5 }, dur: 1800 },                       // ZOOM ke cerobong
        { label: 'Batu bara', x: 358, y: 50, bg: '#1a1c2c', dur: 400 },
        { caption: 'Sebagian besar listrik di Indonesia masih berasal dari pembangkit listrik tenaga batu bara.' },
        { caption: 'Artinya, sebagian asap tidak benar-benar hilang. Ia pindah dari knalpot di jalan ke cerobong pembangkit.' },
        { clearLabels: true },
        { camera: { x: 220, y: 54, zoom: 1 }, dur: 2200 },
        { caption: 'Meski begitu, berbagai studi menunjukkan total emisi motor listrik umumnya tetap lebih rendah, karena jauh lebih efisien.' },
        { caption: 'Hanya saja, pengurangannya tidak sebesar yang dibayangkan selama listriknya masih dari batu bara.' },
      ],
    },

    // ---------------------------------------------------------
    // 5. BATERAI & TAMBANG NIKEL
    // ---------------------------------------------------------
    {
      transition: 'zoom',
      sky: 'day',
      captionTop: true,
      props: [
        { sprite: 'tree', x: 8 }, { sprite: 'stump', x: 24 }, { sprite: 'stump', x: 38 }, { sprite: 'tree', x: 54 },
        { sprite: 'stump', x: 66 },
        { sprite: 'excavator', x: 92 },
        { sprite: 'rocks', x: 118 }, { sprite: 'rocks', x: 132, scale: 1 },
        { id: 'baterai', sprite: 'battery', x: 168, scale: 2 },
      ],
      steps: [
        { caption: 'Masih ada satu bagian penting lagi: baterai.' },
        { camera: { x: 160, y: 72, zoom: 2.5 }, dur: 1800 },                       // ZOOM ke baterai
        { glow: 'baterai' },
        { label: 'Nikel', x: 140, y: 64, bg: '#38b764', dur: 350 },
        { label: 'Litium', x: 140, y: 72, bg: '#3b5dc9', dur: 350 },
        { label: 'Kobalt', x: 140, y: 80, bg: '#7a3b6e', dur: 500 },
        { caption: 'Baterai membutuhkan logam seperti nikel. Indonesia memiliki cadangan nikel terbesar di dunia.' },
        { clearLabels: true },
        { camera: { x: 60, y: 72, zoom: 2 }, dur: 2000 },                          // PAN ke area tambang
        { caption: 'Jika penambangan tidak dikelola dengan baik, hutan bisa rusak dan sungai di sekitarnya tercemar.' },
        { camera: 'reset', dur: 1800 },
        { caption: 'Baterai bekas juga harus didaur ulang, agar tidak menjadi limbah berbahaya dan logamnya bisa dipakai lagi.' },
      ],
    },

    // ---------------------------------------------------------
    // 6. ENERGI BERSIH
    // ---------------------------------------------------------
    {
      transition: 'zoom',
      sky: 'day',
      width: 384,
      road: true,
      captionTop: true,
      sunX: 60,
      camera: { x: 96 },
      traffic: { kind: 'ev', count: 12, speed: 42 },
      birds: 3,
      props: [
        { sprite: 'solar', x: 16 }, { sprite: 'solar', x: 36 }, { sprite: 'solar', x: 56 },
        { sprite: 'turbine', x: 92, y: 80 }, { sprite: 'turbine', x: 122, y: 76, speed: 3000 }, { sprite: 'turbine', x: 152, y: 80, speed: 2200 },
        ...cityRow(196, 9),
        { sprite: 'charger', x: 186, depth: 6 },
      ],
      steps: [
        { caption: 'Dampak terbaik baru terasa jika listriknya berasal dari energi bersih.' },
        { label: 'Matahari', x: 36, y: 72, bg: '#ef7d57', dur: 400 },
        { label: 'Angin', x: 122, y: 40, bg: '#3b5dc9', dur: 600 },
        { caption: 'Panel surya, angin, air, dan panas bumi bisa mengisi motor listrik tanpa asap sama sekali.' },
        { clearLabels: true },
        { together: [
          { camera: { x: 288 }, dur: 5000 },
          { caption: 'Udara bersih, dari pembangkit sampai ke jalan raya.' },
        ] },
      ],
    },

    // ---------------------------------------------------------
    // 7. BUMI — kesimpulan
    // ---------------------------------------------------------
    {
      transition: 'zoom',
      sky: 'space',
      captionTop: true,
      camera: { x: 96, y: 54, zoom: 1 },
      props: [
        { sprite: 'earth', x: 96, y: 58, center: true, scale: 1.4, float: true },
        { id: 'polusi', sprite: 'earth_smog', x: 96, y: 58, center: true, scale: 1.4, float: true, alpha: 0.55 },
      ],
      steps: [
        { caption: 'Jadi, apa yang terjadi pada Bumi?' },
        { together: [
          { hide: 'polusi', dur: 4000 },
          { caption: 'Udara kota lebih bersih, dan emisi gas rumah kaca dari transportasi berkurang.' },
        ] },
        { caption: 'Tapi hasil terbaiknya hanya tercapai jika listriknya makin hijau dan baterainya dikelola dengan bijak.' },
        { camera: { zoom: 1.3 }, dur: 1500 },
        { title: 'Motor listrik + energi bersih', sub: '= Bumi yang lebih sehat', dark: false, size: 22, dur: 3500, keep: true },
      ],
    },
  ],
};
