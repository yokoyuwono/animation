// ============================================================
//  VIDEO EXPLAINER (long form ±10 menit)
//  "Andaikan terjadi perang dunia, bagaimana dengan Indonesia?"
//
//  Skenario edukatif, bukan ramalan. Pihak yang berperang
//  disebut netral (Blok A / Blok B); peristiwa nyata disebut
//  apa adanya. Setiap bab = hook → perbandingan → punchline,
//  sehingga bisa dijadikan short.
//
//  P(lon, lat)  : koordinat peta Indonesia (lihat sprites-war.js)
//  PH(lon, lat) : koordinat peta Selat Hormuz
//  R(x), RP()   : posisi di sisi kanan adegan terbelah
// ============================================================

const R = x => 192 + x;
const RP = (lon, lat) => { const [x, y] = P(lon, lat); return [x + 192, y]; };
const pts = list => list.map(([lo, la]) => P(lo, la));
const ptsR = list => list.map(([lo, la]) => RP(lo, la));
const at = (lon, lat, extra = {}) => { const [x, y] = P(lon, lat); return { x, y, ...extra }; };

const MAP = { sprite: 'map_indo', x: 96, y: 108, depth: 3 };
const MAP_R = { sprite: 'map_indo', x: R(96), y: 108, depth: 3 };

// Jalur laut (lon, lat)
const LANE_MALAKA = [[92, 6.5], [96, 6], [99.5, 4], [102, 2], [104.2, 1.2], [106, 3], [109, 8], [111, 11]];
const LANE_PUTAR = [[92, -9], [100, -11], [110, -10.5], [115.8, -9.4], [115.9, -8.4], [117.3, -5], [118.3, -2], [119.4, 2], [121, 6], [122.5, 11]];
const ALKI_1 = [[104, -10], [105.8, -6.2], [107, -3.5], [108.6, 0], [108.6, 4.5], [109, 11]];
const ALKI_2 = [[115.7, -11], [115.8, -8.6], [117.2, -5], [118.3, -2], [119.4, 2], [121, 6], [122.5, 11]];
const ALKI_3 = [[125, -12], [125.5, -8.3], [126.5, -5.5], [126, -2], [126.2, 2], [127.5, 6.5], [128, 11]];
const HORMUZ = [[50.5, 28.6], [52, 27.4], [55, 26.6], [56.4, 26.4], [57.5, 25.2], [60, 24.4], [62.5, 24]];

function cityRow(x0, n, off) {
  const kinds = ['building2', 'building1', 'building4', 'building3'];
  const out = [];
  let x = x0;
  for (let i = 0; i < n; i++) {
    out.push({ sprite: kinds[i % 4] + (off ? '_off' : ''), x, depth: 4 });
    x += [22, 18, 20, 16][i % 4];
  }
  return out;
}

const STORY = {
  title: 'Perang Dunia dan Indonesia',
  audioDir: 'audio/perang-dunia',

  // ======================== INTRO ========================
  intro: [
    {
      sky: 'space', fit: 'width',
      camera: { x: 96, y: 56, zoom: 1 },
      props: [{ sprite: 'earth', x: 96, y: 56, center: true, scale: 1.6, depth: 3 }],
      steps: [
        { together: [
          { camera: { x: 96, y: 56, zoom: 1.25 }, dur: 4500 },
          { caption: 'Bayangkan besok pagi, semua berita dunia sama.' },
        ] },
        { ping: [74, 40] }, { ping: [116, 36] }, { ping: [92, 74] }, { ping: [120, 62], dur: 400 },
        { together: [{ shake: 300 }, { hook: 'PERANG DUNIA KETIGA DIMULAI.', dur: 2200 }] },
        { together: [
          { camera: { x: 108, y: 64, zoom: 2.4 }, dur: 2200 },
          { caption: 'Lalu, bagaimana dengan Indonesia?' },
        ] },
      ],
    },
    {
      transition: 'zoom',
      sky: 'ocean', fit: 'width',
      props: [MAP],
      steps: [
        { caption: 'Sebenarnya, tahun ini kita sudah merasakan cicipannya.' },
        { chart: 'Harga minyak Indonesia (US$/barel)', bars: [['Asumsi APBN 2026', 70, '#41a6f6'], ['ICP April 2026', 117, '#e43b44']], max: 130 },
        { caption: 'Satu perang di Timur Tengah, dan harga BBM nonsubsidi kita naik dua kali.' },
        { clear: true },
        { title: 'Kalau Perang Dunia Pecah...', sub: 'bagaimana nasib Indonesia?', dark: false, size: 26, dur: 2600 },
        { card: 'Di video ini', items: ['Selat yang bisa melumpuhkan Asia', 'Kenapa harga mie ikut naik', 'Perang tanpa satu peluru pun', 'Siapa yang justru untung?'], x: 96, y: 54, stagger: 380, dur: 1400 },
        { clear: true },
        { caption: 'Ini skenario, bukan ramalan. Kita bahas pakai sejarah, peta, dan data.' },
      ],
    },
  ],

  chapters: [
    // ======================================================
    // BAB 1 — Di pihak mana?
    // ======================================================
    {
      id: 'bab-1',
      title: 'Indonesia di pihak mana',
      scenes: [
        {
          transition: 'cut',
          sky: 'day', water: 84, noClouds: false,
          camera: { x: 96, y: 74, zoom: 1.7 },
          props: [
            { id: 'kiri', sprite: 'rock_a', x: 34, y: 104, scale: 1.3, depth: 5 },
            { anim: 'flag_a', x: 34, y: 47, depth: 5 },
            { id: 'kanan', sprite: 'rock_b', x: 158, y: 104, scale: 1.3, depth: 5 },
            { anim: 'flag_b', x: 158, y: 47, depth: 5 },
            { id: 'perahu', sprite: 'boat', x: 96, y: 92, bob: true, depth: 6 },
          ],
          steps: [
            { together: [
              { hook: 'Kalau dunia terbelah dua, Indonesia di pihak mana?' },
              { camera: { x: 96, y: 58, zoom: 1 }, dur: 3000 },
            ] },
            { label: 'BLOK A', x: 34, y: 34, bg: '#b13e53', dur: 150 },
            { label: 'BLOK B', x: 158, y: 34, bg: '#2a4f8f', dur: 150 },
            { caption: 'Sejak 1948, jawabannya sama: tidak memihak blok mana pun.' },
            { clear: true },
            { together: [
              { camera: { x: 96, y: 86, zoom: 2.4 }, dur: 1600 },
              { caption: 'Bung Hatta menyebutnya: mendayung di antara dua karang.' },
            ] },
            { card: 'Politik bebas aktif', items: ['Bebas: tidak ikut blok militer', 'Aktif: ikut menjaga perdamaian'], x: 96, y: 86, place: 'right' },
            { wait: 1200 },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 66, zoom: 1.1 },
          props: [
            { sprite: 'tree', x: 14 }, { sprite: 'tree', x: 178 },
            { sprite: 'gedung', x: 96, scale: 2, depth: 4 },
            { anim: 'flag_a', x: 30 }, { anim: 'flag_c', x: 44 }, { anim: 'flag_id', x: 58 },
            { anim: 'flag_d', x: 134 }, { anim: 'flag_b', x: 148 }, { anim: 'flag_c', x: 162 },
          ],
          steps: [
            { together: [
              { camera: { x: 96, y: 70, zoom: 1.5 }, dur: 4000 },
              { caption: 'Tahun 1955, Indonesia menggelar Konferensi Asia-Afrika di Bandung.' },
            ] },
            { label: 'KAA 1955', x: 96, y: 52, bg: '#1a1c2c', dur: 200 },
            { caption: 'Dari semangat itu lahir Gerakan Non-Blok. Indonesia salah satu pendirinya.' },
            { clear: true },
            { card: 'Pembukaan UUD 1945', items: ['"...ikut melaksanakan', 'ketertiban dunia..."'], x: 96, y: 72 },
            { wait: 1600 },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', water: 84,
          camera: { x: 96, y: 58, zoom: 1 },
          props: [
            { id: 'kiri', sprite: 'rock_a', x: 34, y: 104, scale: 1.3, depth: 5 },
            { id: 'kanan', sprite: 'rock_b', x: 158, y: 104, scale: 1.3, depth: 5 },
            { id: 'perahu', sprite: 'boat', x: 96, y: 92, bob: true, depth: 6 },
          ],
          steps: [
            { caption: 'Hari ini, dua karang itu terasa nyata.' },
            { label: 'BRICS', x: 34, y: 38, bg: '#b13e53', dur: 150 },
            { caption: 'Sejak 2025, Indonesia resmi menjadi anggota BRICS.' },
            { label: 'Dagang dengan AS', x: 158, y: 38, bg: '#2a4f8f', dur: 150 },
            { caption: 'Februari 2026, Indonesia meneken kesepakatan dagang dengan Amerika: tarif 19%.' },
            { clear: true },
            { together: [
              { move: 'kiri', to: 64, dur: 3500 },
              { move: 'kanan', to: 128, dur: 3500 },
              { camera: { x: 96, y: 80, zoom: 1.8 }, dur: 3500 },
              { caption: 'Ada klausulnya: tarif bisa kembali 32% kalau Indonesia dianggap merugikan AS.' },
            ] },
            { shake: 250 },
            { caption: 'Secara prinsip, kita tidak ikut perang. Tapi apakah perang akan membiarkan kita?', punch: true },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 2 — Pelajaran Perang Dunia II
    // ======================================================
    {
      id: 'bab-2',
      title: 'Pelajaran Perang Dunia II',
      scenes: [
        {
          transition: 'cut',
          sky: 'ocean', fit: 'width', sepia: true,
          props: [MAP],
          routes: [
            { id: 'serbu1', points: pts([[112, 11], [113, 5], [116.8, -1.2]]), hidden: true, color: '#e43b44', ships: 2, speed: 8 },
            { id: 'serbu2', points: pts([[104, 11], [105, 4], [104.6, -2.8]]), hidden: true, color: '#e43b44', ships: 2, speed: 8 },
          ],
          steps: [
            { hook: 'Indonesia pernah terseret perang dunia.' },
            { together: [
              { route: 'serbu1', dur: 2000 },
              { route: 'serbu2', dur: 2000 },
              { caption: 'Tahun 1942, Jepang menyerbu Hindia Belanda, nama Indonesia saat itu.' },
            ] },
            { together: [
              { camera: at(116.8, -1.2, { zoom: 2.8 }), dur: 1500 },
              { ping: P(116.8, -1.2), color: '#ffcd75' },
            ] },
            { card: 'Yang diincar', items: ['Minyak', 'Karet', 'Timah'], ...at(116.8, -1.2), place: 'left' },
            { caption: 'Yang diincar bukan pulaunya, tapi minyaknya.' },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', sepia: true,
          camera: { x: 110, y: 66, zoom: 1.4 },
          props: [{ sprite: 'refinery', x: 160, scale: 1.4 }, { sprite: 'palm', x: 20 }, { sprite: 'palm', x: 120 }],
          actors: [
            { id: 'w1', sprite: 'worker', x: -10 }, { id: 'w2', sprite: 'worker', x: -26 },
            { id: 'w3', sprite: 'worker', x: -42 }, { id: 'w4', sprite: 'worker', x: -58 },
          ],
          steps: [
            { together: [
              { move: 'w1', to: 110, speed: 16 }, { move: 'w2', to: 94, speed: 16 },
              { move: 'w3', to: 78, speed: 16 }, { move: 'w4', to: 62, speed: 16 },
              { camera: { x: 86, y: 70, zoom: 1.7 }, dur: 6000 },
              { caption: 'Tiga setengah tahun pendudukan membawa kerja paksa romusha dan kelaparan.' },
            ] },
            { caption: 'Lalu Agustus 1945, Jepang menyerah. Terjadi kekosongan kekuasaan.' },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', sepia: true,
          camera: { x: 96, y: 58, zoom: 1.2 },
          props: [{ sprite: 'pole', x: 96 }, { id: 'merahputih', anim: 'flag_id', x: 97, y: 88, depth: 6 }],
          actors: [
            { id: 'a', sprite: 'boy', x: 74 }, { id: 'b', sprite: 'girl', x: 84 }, { id: 'c', sprite: 'grandpa', x: 110, face: 'left' },
            { id: 'd', sprite: 'kid', x: 120, face: 'left' }, { id: 'e', sprite: 'worker', x: 62 },
          ],
          steps: [
            { together: [
              { raise: 'merahputih', to: 49, dur: 4200 },
              { camera: { x: 96, y: 56, zoom: 1.3 }, dur: 4200 },
              { caption: '17 Agustus 1945, kemerdekaan Indonesia diproklamasikan.' },
            ] },
            { restoreColor: true },
            { together: [{ emote: 'd', icon: 'heart', dur: 900 }, { emote: 'b', icon: 'heart', dur: 900 }] },
            { caption: 'Pelajarannya: negara kaya sumber daya tidak pernah jauh dari perang.', punch: true },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 3 — Laut kita tidak bisa netral
    // ======================================================
    {
      id: 'bab-3',
      title: 'Laut kita tidak bisa netral',
      scenes: [
        {
          transition: 'cut',
          sky: 'ocean', fit: 'width',
          props: [MAP],
          routes: [
            { id: 'malaka', points: pts(LANE_MALAKA), hidden: true, color: '#ffcd75', ships: 6, speed: 9 },
            { id: 'alki1', points: pts(ALKI_1), hidden: true, color: '#73eff7', ships: 2 },
            { id: 'alki2', points: pts(ALKI_2), hidden: true, color: '#73eff7', ships: 2 },
            { id: 'alki3', points: pts(ALKI_3), hidden: true, color: '#73eff7', ships: 2 },
          ],
          steps: [
            { hook: 'Indonesia boleh netral. Tapi lautnya tidak bisa.' },
            { label: 'SAMUDRA HINDIA', x: 30, y: 88, bg: '#29366f', dur: 150 },
            { label: 'SAMUDRA PASIFIK', x: 160, y: 20, bg: '#29366f', dur: 150 },
            { label: 'ASIA', x: 18, y: 6, bg: '#566c86', dur: 150 },
            { label: 'AUSTRALIA', x: 150, y: 102, bg: '#566c86', dur: 150 },
            { caption: 'Indonesia ada di persimpangan dua samudra dan dua benua.' },
            { clear: true },
            { together: [
              { route: 'malaka', dur: 1600 },
              { camera: { x: 36, y: 26, zoom: 2.6 }, dur: 1800 },
              { caption: 'Selat Malaka: salah satu jalur laut tersibuk di dunia.' },
            ] },
            { together: [
              { camera: 'reset', dur: 1200 },
              { route: 'alki1', dur: 1000 }, { route: 'alki2', dur: 1300 }, { route: 'alki3', dur: 1600 },
              { caption: 'Indonesia juga punya tiga Alur Laut Kepulauan: ALKI I, II, dan III.' },
            ] },
            { together: [
              { camera: { x: 58, y: 24, zoom: 2.8 }, dur: 1500 },
              { ping: P(108, 4), color: '#ffcd75' },
            ] },
            { label: 'NATUNA', ...at(108, 5.6), bg: '#1a1c2c', dur: 100 },
            { caption: 'Di utara ada Natuna, berbatasan dengan Laut China Selatan, salah satu titik panas dunia.' },
            { clear: true },
          ],
        },
        {
          transition: 'zoom',
          split: true, focus: 'left',
          sky: 'ocean', fit: 'width',
          tags: ['SELAT HORMUZ - 2026', 'SELAT MALAKA - SKENARIO'],
          tagColors: ['#b13e53', '#29366f'],
          camera: { x: 100, y: 52, zoom: 1.3 },
          cameraB: { x: R(50), y: 36, zoom: 1.5 },
          props: [{ sprite: 'map_hormuz', x: 96, y: 108, depth: 3 }, MAP_R],
          routes: [
            { id: 'hormuz', points: HORMUZ.map(([lo, la]) => PH(lo, la)), color: '#ffcd75', ships: 6, speed: 14, ship: 'tanker', shipScale: 0.35 },
            { id: 'malakaR', points: ptsR(LANE_MALAKA), color: '#ffcd75', ships: 6, speed: 9 },
            { id: 'putar', points: ptsR(LANE_PUTAR), color: '#ef7d57', ships: 4, speed: 7, hidden: true },
          ],
          steps: [
            { caption: 'Tahun ini, dunia sudah melihat apa yang terjadi.' },
            { block: 'hormuz', at: PH(56.4, 26.4) },
            { caption: 'Selat Hormuz terganggu. Jalur sekitar 20% minyak dunia tersendat.' },
            { card: 'Dampaknya', items: ['Minyak tembus US$100/barel', 'Krisis energi global'], x: 102, y: 50, place: 'left' },
            { wait: 1200 },
            { clear: true },
            { together: [
              { focus: 'right', dur: 700 },
              { caption: 'Sekarang bayangkan hal yang sama terjadi di Selat Malaka.' },
            ] },
            { block: 'malakaR', at: RP(101.5, 2.6) },
            { together: [
              { camera: { x: R(96), y: 54, zoom: 1 }, side: 'right', dur: 1500 },
              { route: 'putar', dur: 2600 },
              { caption: 'Kapal harus memutar lewat Lombok atau Sunda. Lebih jauh, lebih lama.' },
            ] },
            { together: [
              { focus: 'both', dur: 700 },
              { camera: { x: 100, y: 54, zoom: 1 }, dur: 700 },
            ] },
            { together: [{ badge: 'Harga minyak naik', side: 'left' }, { badge: 'Ongkos kirim naik', side: 'right' }] },
            { caption: 'Ongkos kirim naik, harga barang ikut naik.' },
            { caption: 'Letak yang membuat Indonesia penting, juga yang membuatnya rawan.', punch: true },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 4 — Dari dompet sampai dapur
    // ======================================================
    {
      id: 'bab-4',
      title: 'Dari dompet sampai dapur',
      scenes: [
        {
          transition: 'cut',
          sky: 'day', water: 82,
          camera: { x: 96, y: 66, zoom: 1.2 },
          props: [
            ...cityRow(110, 4),
            { id: 'tanker', sprite: 'tanker', x: -30, y: 96, scale: 1.6, bob: true, depth: 6 },
          ],
          steps: [
            { together: [
              { hook: 'Perang di negara lain, harga mie di sini ikut naik. Kok bisa?', vo: 'b4-01' },
              { move: 'tanker', to: 70, dur: 5000 },
              { camera: { x: 80, y: 72, zoom: 1.6 }, dur: 5000 },
            ] },
            { together: [
              { camera: { x: 70, y: 84, zoom: 2.4 }, dur: 2200 },
              { glow: 'tanker', times: 2 },
              { caption: 'Indonesia masih mengimpor minyak dan BBM dalam jumlah besar.', vo: 'b4-02', speak: 'Indonesia masih mengimpor minyak dan be be em dalam jumlah besar.' },
            ] },
            { together: [
              { camera: { x: 80, y: 70, zoom: 1.5 }, dur: 900 },
              { chart: 'Harga minyak Indonesia (US$/barel)', bars: [['Asumsi APBN 2026', 70, '#41a6f6'], ['ICP April 2026', 117, '#e43b44']], max: 130, place: 'right', y: 0.1, dur: 0 },
              { caption: 'April 2026: US$117 per barel, jauh di atas asumsi APBN US$70.', vo: 'b4-03', speak: 'April dua ribu dua puluh enam, harga minyak kita tembus seratus tujuh belas dolar per barel. Jauh di atas asumsi a pe be en, tujuh puluh dolar.' },
            ] },
            { caption: 'Harga BBM nonsubsidi naik dua kali: April dan Juni.', vo: 'b4-04', speak: 'Harga be be em nonsubsidi pun naik dua kali, April dan Juni.' },
            { caption: 'Pertalite dan Solar ditahan. Selisihnya ditanggung subsidi APBN.', vo: 'b4-05', speak: 'Pertalite dan Solar ditahan. Selisihnya ditanggung subsidi a pe be en.' },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', noHills: false,
          camera: { x: 96, y: 74, zoom: 1.4 },
          props: [
            { sprite: 'table', x: 96, y: 90, scale: 4.4, depth: 4 },
            { id: 'mie', sprite: 'noodle', x: 50, y: 64, scale: 2.4, depth: 6 },
            { id: 'roti', sprite: 'bread', x: 76, y: 64, scale: 2.4, depth: 6 },
            { id: 'tahu', sprite: 'tofu', x: 114, y: 64, scale: 2.4, depth: 6 },
            { id: 'tempe', sprite: 'tempe', x: 142, y: 64, scale: 2.4, depth: 6 },
          ],
          steps: [
            { together: [
              { camera: { x: 63, y: 62, zoom: 2.6 }, dur: 1400 },
              { caption: 'Gandum untuk mie dan roti? Hampir semuanya impor.', vo: 'b4-06' },
            ] },
            { together: [
              { camera: { x: 128, y: 62, zoom: 2.6 }, dur: 1400 },
              { caption: 'Kedelai untuk tahu dan tempe pun sebagian besar impor.', vo: 'b4-07' },
            ] },
            { camera: { x: 96, y: 66, zoom: 1.2 }, dur: 600 },
            { card: 'Ikut naik saat perang', items: ['BBM', 'Gandum: mie, roti', 'Kedelai: tahu, tempe', 'Pupuk'], x: 96, y: 60, stagger: 120, dur: 150 },
            { caption: 'Ini pola yang berulang: 2022 karena Rusia-Ukraina, 2026 karena krisis Hormuz.', vo: 'b4-08', speak: 'Dan ini pola yang berulang. Dua ribu dua puluh dua, karena perang Rusia Ukraina. Dua ribu dua puluh enam, karena krisis Hormuz.' },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          split: true, focus: 'both',
          sky: 'day',
          tags: ['SEBELUM', 'SAAT PERANG'],
          tagColors: ['#38b764', '#b13e53'],
          camera: { x: 92, y: 72, zoom: 1.8 },
          cameraB: { x: R(92), y: 72, zoom: 1.8 },
          props: [
            ...cityRow(4, 9), ...cityRow(R(4), 9),
            { sprite: 'basket_full', x: 102, y: 90, scale: 1.5, depth: 11 },
            { sprite: 'basket_half', x: R(102), y: 90, scale: 1.5, depth: 11 },
          ],
          actors: [{ id: 'ibu1', sprite: 'girl', x: 86 }, { id: 'ibu2', sprite: 'girl', x: R(86) }],
          steps: [
            { together: [
              { caption: 'Uang belanjanya sama, tapi isi keranjangnya berkurang.', vo: 'b4-09' },
              { badge: 'Keranjang penuh', side: 'left' }, { badge: 'Keranjang setengah', side: 'right' },
            ] },
            { together: [
              { emote: 'ibu1', icon: 'note' }, { emote: 'ibu2', icon: 'sweat', dur: 2200 },
              { caption: 'Inflasi ikut naik, didorong harga BBM dan pangan.', vo: 'b4-10', speak: 'Inflasi pun ikut naik, didorong harga be be em dan pangan.' },
            ] },
            { caption: 'Perang tidak perlu sampai ke sini untuk terasa di dapur kita.', punch: true, vo: 'b4-11' },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 5 — Ada yang untung?
    // ======================================================
    {
      id: 'bab-5',
      title: 'Indonesia untung dari perang',
      scenes: [{
        transition: 'cut',
        split: true, focus: 'left',
        sky: 'day',
        tags: ['NERACA NEGARA', 'DOMPET WARGA'],
        tagColors: ['#29366f', '#b13e53'],
        water: 84,
        camera: { x: 96, y: 70, zoom: 1.3 },
        cameraB: { x: R(96), y: 72, zoom: 1.6 },
        props: [
          { sprite: 'palm', x: 14, y: 84 }, { sprite: 'palm', x: 30, y: 84 }, { sprite: 'palm', x: 46, y: 84 },
          { id: 'tongkang', sprite: 'barge', x: 60, y: 96, scale: 1.6, bob: true, depth: 6 },
          ...cityRow(R(4), 9),
          { sprite: 'basket_half', x: R(108), y: 90, scale: 1.5, depth: 11 },
        ],
        actors: [{ id: 'warga', sprite: 'grandpa', x: R(92) }],
        steps: [
          { together: [
            { hook: 'Anehnya, perang juga bisa membuat Indonesia untung.' },
            { move: 'tongkang', to: 150, dur: 6000 },
          ] },
          { together: [
            { camera: { x: 120, y: 86, zoom: 2.2 }, dur: 1500 },
            { caption: 'Saat harga energi naik, harga batu bara dan sawit ikut naik.' },
          ] },
          { label: 'Batu bara', x: 150, y: 80, bg: '#1a1c2c', dur: 150 },
          { together: [
            { camera: { x: 34, y: 70, zoom: 2 }, dur: 1500 },
            { label: 'Sawit', x: 30, y: 58, bg: '#257179', dur: 150 },
          ] },
          { together: [
            { camera: { x: 96, y: 66, zoom: 1.2 }, dur: 2500 },
            { caption: 'Indonesia adalah pengekspor besar keduanya. Tahun 2022, ekspor kita mencetak rekor.' },
          ] },
          { clear: true },
          { together: [{ focus: 'both', dur: 700 }, { camera: { x: 100, y: 66, zoom: 1.1 }, dur: 700 }] },
          { together: [{ badge: 'Pemasukan naik', side: 'left' }, { badge: 'Harga naik', side: 'right' }] },
          { together: [{ emote: 'warga', icon: 'sweat' }, { caption: 'Tapi untung di neraca negara tidak otomatis terasa di dompet warga.' }] },
          { caption: 'Yang untung angkanya. Yang menanggung sering kali rakyat kecil.', punch: true },
        ],
      }],
    },

    // ======================================================
    // BAB 6 — Perang tanpa peluru
    // ======================================================
    {
      id: 'bab-6',
      title: 'Perang tanpa peluru',
      scenes: [
        {
          transition: 'cut',
          split: true, focus: 'both',
          sky: 'night', road: true,
          tags: ['NORMAL', 'DISERANG'],
          tagColors: ['#38b764', '#b13e53'],
          camera: { x: 96, y: 62, zoom: 1.1 },
          cameraB: { x: R(96), y: 62, zoom: 1.1 },
          props: [
            ...cityRow(4, 9), ...cityRow(R(4), 9),
            { sprite: 'atm', x: 100, depth: 7 }, { id: 'atmR', sprite: 'atm', x: R(100), depth: 7 },
          ],
          steps: [
            { hook: 'Perang modern bisa dimulai tanpa satu peluru pun.' },
            { together: [
              { camera: { x: R(96), y: 56, zoom: 1.5 }, side: 'right', dur: 2500 },
              { ping: [R(60), 50], color: '#e43b44', dur: 100 },
              { caption: 'Para ahli mengingatkan: infrastruktur energi kita rawan serangan siber.' },
            ] },
            { ping: [R(130), 44], color: '#e43b44', dur: 100 },
            { together: [
              { blackout: 'right' },
              { swap: 'atmR', to: 'atm_err' },
              { caption: 'Kalau listrik dan jaringan diserang: lampu padam, ATM dan transfer berhenti.' },
            ] },
            { together: [{ badge: 'Transfer: lancar', side: 'left' }, { badge: 'Transfer: gagal', side: 'right' }] },
            { wait: 800 },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'night',
          camera: { x: 96, y: 66, zoom: 1.6 },
          props: [
            { id: 's1', sprite: 'server', x: 66, scale: 2 }, { id: 's2', sprite: 'server', x: 96, scale: 2 }, { id: 's3', sprite: 'server', x: 126, scale: 2 },
          ],
          steps: [
            { together: [
              { camera: { x: 96, y: 70, zoom: 2 }, dur: 3000 },
              { caption: 'Ini pernah terjadi. Juni 2024, Pusat Data Nasional lumpuh karena ransomware.' },
            ] },
            { swap: 's1', to: 'server_hit', dur: 250 }, { swap: 's2', to: 'server_hit', dur: 250 }, { swap: 's3', to: 'server_hit', dur: 250 },
            { shake: 250 },
            { card: 'Ransomware', items: ['Data dikunci', 'Layanan publik terganggu'], x: 96, y: 60, color: '#e43b44' },
            { wait: 1400 },
            { clear: true },
          ],
        },
        {
          transition: 'zoom',
          sky: 'deep', width: 320,
          camera: { x: 96, y: 70, zoom: 1.4 },
          props: [{ sprite: 'rocks', x: 70 }, { sprite: 'rocks', x: 210 }, { sprite: 'stump', x: 150 }],
          wires: [[0, 89], [80, 90], [160, 89], [240, 90], [320, 89]],
          wireColor: '#ffcd75',
          steps: [
            { together: [
              { camera: { x: 224, y: 74, zoom: 1.4 }, dur: 5000 },
              { caption: 'Internet kita bergantung pada kabel bawah laut dan satelit.' },
            ] },
            { card: 'Kabel bawah laut', items: ['Membawa sebagian besar', 'data internet antarnegara'], x: 220, y: 88, place: 'left' },
            { wait: 1200 },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'night',
          camera: { x: 96, y: 62, zoom: 1.8 },
          props: [{ id: 'hp', sprite: 'phone', x: 96, y: 84, scale: 3, depth: 6 }],
          steps: [
            { together: [
              { caption: 'Lalu ada perang informasi: hoaks dan propaganda untuk memecah belah.' },
              { emote: 'hp', icon: 'exclaim', dur: 1600 },
            ] },
            { together: [{ shake: 200 }, { emote: 'hp', icon: 'question', dur: 1200 }] },
            { caption: 'Di perang modern, jempol kita bisa jadi senjata. Cek dulu sebelum sebar.', punch: true },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 7 — Kalau ancaman sampai ke wilayah kita
    // ======================================================
    {
      id: 'bab-7',
      title: 'Kalau ancaman sampai ke sini',
      scenes: [
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 70, zoom: 1.6 },
          props: [
            { sprite: 'table', x: 96, y: 90, scale: 3, depth: 8 },
            { sprite: 'dove', x: 96, y: 40, scale: 2, float: true, depth: 9 },
            { anim: 'flag_id', x: 40 }, { anim: 'flag_c', x: 152 },
          ],
          actors: [
            { id: 'd1', sprite: 'diplomat', x: 70 }, { id: 'd2', sprite: 'diplomat2', x: 122, face: 'left' },
            { id: 'p1', sprite: 'peace', x: -20, hidden: true }, { id: 'p2', sprite: 'peace', x: -20, hidden: true },
          ],
          steps: [
            { together: [
              { hook: 'Kalau perang sampai ke perairan kita, apa yang dilakukan Indonesia?' },
              { camera: { x: 96, y: 62, zoom: 1.2 }, dur: 3000 },
            ] },
            { together: [
              { camera: { x: 96, y: 72, zoom: 2.2 }, dur: 2200 },
              { caption: 'Langkah pertama Indonesia selalu diplomasi.' },
            ] },
            { together: [
              { camera: { x: 96, y: 52, zoom: 1.6 }, dur: 2000 },
              { label: 'KTT ASEAN - NOV 2026', x: 96, y: 26, bg: '#29366f', dur: 100 },
              { caption: 'November 2026 di KTT ASEAN, Laut China Selatan dan krisis energi jadi bahasan utama.' },
            ] },
            { clear: true },
            { camera: { x: 70, y: 62, zoom: 1.3 }, dur: 900 },
            { together: [
              { enter: 'p1', to: 30, speed: 40 }, { enter: 'p2', to: 16, speed: 40 },
              { caption: 'Indonesia juga termasuk penyumbang besar pasukan perdamaian PBB.' },
            ] },
          ],
        },
        {
          transition: 'zoom',
          sky: 'ocean', fit: 'width',
          props: [MAP],
          camera: { x: 58, y: 22, zoom: 1 },
          routes: [{ id: 'patroli', points: pts([[106.5, 3], [107.5, 6], [110, 6.5], [110.5, 3.5], [108.5, 2], [106.5, 3]]), color: '#a7f070', ships: 3, speed: 6, hidden: true }],
          steps: [
            { together: [
              { camera: { x: 58, y: 22, zoom: 3 }, dur: 1800 },
              { route: 'patroli', dur: 1800 },
              { caption: 'Di Natuna, pangkalan militer terus diperkuat.' },
            ] },
            { card: 'Natuna 2026', items: ['Pangkalan diperkuat', 'Ada tawaran pelabuhan dari Jepang', 'Patroli belum menjangkau semua'], ...at(108, 4), place: 'left' },
            { caption: 'Indonesia menjaga keseimbangan: bekerja sama, tanpa masuk blok mana pun.' },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day', water: 82,
          camera: { x: 96, y: 66, zoom: 1.3 },
          props: [
            { sprite: 'palm', x: 12, y: 82 },
            { id: 'kapal', sprite: 'patrol', x: 120, y: 96, scale: 1.8, bob: true, depth: 6 },
            { id: 'pesawat', sprite: 'plane', x: -20, y: 30, scale: 1.5, depth: 7 },
          ],
          actors: [{ id: 't1', sprite: 'soldier', x: 30, y: 84 }, { id: 't2', sprite: 'soldier', x: 44, y: 84 }],
          steps: [
            { together: [
              { move: 'pesawat', to: 230, dur: 5000 },
              { caption: 'Doktrin pertahanannya: Sishankamrata, pertahanan rakyat semesta.' },
            ] },
            { card: 'Sishankamrata', items: ['TNI: kekuatan utama', 'Rakyat: kekuatan pendukung'], x: 120, y: 84, place: 'left' },
            { caption: 'Tantangannya, anggaran pertahanan masih di bawah 1% PDB.' },
            { clear: true },
            { caption: 'Tujuannya bukan menang perang, tapi membuat perang tidak layak dimulai.', punch: true },
          ],
        },
      ],
    },

    // ======================================================
    // BAB 8 — Apa yang bisa kita siapkan?
    // ======================================================
    {
      id: 'bab-8',
      title: 'Apa yang bisa kita siapkan',
      scenes: [
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 70, zoom: 1.5 },
          props: [
            { sprite: 'corn', x: 50, scale: 3 }, { sprite: 'cassava', x: 78, scale: 3 },
            { sprite: 'yam', x: 112, scale: 3 }, { sprite: 'sago', x: 142, scale: 3 },
            { sprite: 'palm', x: 14 }, { sprite: 'tree', x: 178 },
          ],
          steps: [
            { hook: 'Kita bukan tentara. Lalu apa yang bisa kita siapkan?' },
            { label: 'Jagung', x: 50, y: 62, bg: '#ef7d57', dur: 120 },
            { label: 'Singkong', x: 78, y: 70, bg: '#8b5a2b', dur: 120 },
            { label: 'Ubi', x: 112, y: 70, bg: '#7a3b9e', dur: 120 },
            { label: 'Sagu', x: 142, y: 66, bg: '#566c86', dur: 120 },
            { caption: 'Ketahanan pangan: makin beragam pangan lokal, makin kecil ketergantungan impor.' },
            { clear: true },
          ],
        },
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 62, zoom: 1.3 },
          props: [
            { sprite: 'solar', x: 30 }, { sprite: 'solar', x: 50 }, { sprite: 'solar', x: 70 },
            { sprite: 'turbine', x: 110, y: 82 }, { sprite: 'turbine', x: 140, y: 80, speed: 3000 },
            { sprite: 'charger', x: 170 },
          ],
          steps: [
            { together: [
              { camera: { x: 110, y: 58, zoom: 1.1 }, dur: 4000 },
              { caption: 'Ketahanan energi: cadangan yang kuat dan energi dari dalam negeri.' },
            ] },
          ],
        },
        {
          transition: 'cut',
          sky: 'day',
          camera: { x: 96, y: 62, zoom: 1.8 },
          props: [{ id: 'hp', sprite: 'phone', x: 96, y: 84, scale: 3, depth: 6 }],
          steps: [
            { label: 'CEK FAKTA', x: 96, y: 40, bg: '#38b764', dur: 200 },
            { caption: 'Ketahanan informasi: jangan jadi penyebar hoaks.' },
            { clear: true },
          ],
        },
        {
          transition: 'zoom',
          sky: 'ocean', fit: 'width',
          props: [MAP],
          camera: { x: 96, y: 54, zoom: 1.2 },
          steps: [
            { ping: P(101, 0), color: '#a7f070', dur: 150 }, { ping: P(109, -7), color: '#a7f070', dur: 150 },
            { ping: P(114, 0), color: '#a7f070', dur: 150 }, { ping: P(121, -2), color: '#a7f070', dur: 150 },
            { ping: P(129, -3), color: '#a7f070', dur: 150 }, { ping: P(138, -4), color: '#a7f070', dur: 150 },
            { together: [
              { camera: { x: 96, y: 54, zoom: 1 }, dur: 3000 },
              { caption: 'Di tengah krisis global, negara yang dalam negerinya gaduh jadi lebih rentan.' },
            ] },
            { together: [
              { camera: { x: 58, y: 56, zoom: 1.8 }, dur: 1600 },
              { ping: P(110, -7), color: '#ffcd75', dur: 100 },
              { caption: 'Persatuan adalah pertahanan pertama.' },
            ] },
            { together: [
              { camera: { x: 96, y: 54, zoom: 0.9 }, dur: 3500 },
              { caption: 'Indonesia mungkin tidak ikut berperang. Tapi pasti ikut merasakan dampaknya.', punch: true },
            ] },
          ],
        },
      ],
    },
  ],

  // ======================== OUTRO ========================
  outro: [
    {
      transition: 'zoom',
      sky: 'space', fit: 'width',
      camera: { x: 96, y: 56, zoom: 1.3 },
      props: [{ sprite: 'earth', x: 96, y: 56, center: true, scale: 1.6, float: true }],
      steps: [
        { together: [
          { camera: { x: 96, y: 56, zoom: 1 }, dur: 3000 },
          { caption: 'Menurutmu, sektor mana yang paling rawan? Tulis di kolom komentar.' },
        ] },
        { title: 'Terima kasih sudah menonton', sub: 'Sumber: BPS, Kemenkeu, ESDM, Kompas, Antara, The Diplomat', dark: false, size: 22, dur: 3000, keep: true },
      ],
    },
  ],
};
