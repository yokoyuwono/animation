// ============================================================
//  "ANDAIKAN RUPIAH MENJADI Rp7.000 LAGI" — seri Andaikan
//  Naskah: stories/rupiah-7000.naskah.md
//  Layar terbelah: kiri Rp 7.000 (dolar murah), kanan Rp 30.000 (dolar mahal).
//  Keluarga Pak Harun (fiktif) ada di kedua sisi. Semua harga = perkiraan simulasi.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "r-01": ["Dolar hari ini: Rp18.250.", "Dolar hari ini: delapan belas ribu dua ratus lima puluh rupiah."],
 "r-02": ["Di meja makan Pak Harun, uang dihitung berkali-kali.", "Di meja makan Pak Harun, uang dihitung berkali-kali."],
 "r-03": ["Gaji Dina habis sebelum tanggal 20.", "Gaji Dina habis sebelum tanggal dua puluh."],
 "r-04": ["Harga tempe naik. Cicilan motor belum lunas.", "Harga tempe naik. Cicilan motor belum lunas."],
 "r-05": ["Bima bergumam pelan, \"Andai dolar Rp7.000 lagi…\"", "Bima bergumam pelan, andai dolar tujuh ribu lagi."],
 "r-06": ["Bagaimana kalau besok rupiah benar-benar berubah?", "Bagaimana kalau besok rupiah benar-benar berubah?"],
 "r-07": ["Kiri: dolar jadi Rp7.000. Kanan: dolar jadi Rp30.000.", "Kiri: dolar jadi tujuh ribu. Kanan: dolar jadi tiga puluh ribu."],
 "r-08": ["Andaikan rupiah menjadi Rp7.000 lagi.", "Andaikan rupiah menjadi tujuh ribu lagi."],
 // bab 2 — pom bensin
 "r-09": ["Pagi pertama, Pak Harun berangkat ke kebun dengan motornya.", "Pagi pertama, Pak Harun berangkat ke kebun dengan motornya."],
 "r-09s": ["Dolar Rp7.000 atau Rp30.000. Bensinmu jadi berapa?", "Dolar tujuh ribu atau tiga puluh ribu. Bensinmu jadi berapa?"],
 "r-10": ["Sebagian besar minyak kita dibeli dengan dolar.", "Sebagian besar minyak kita dibeli dengan dolar."],
 "r-11": ["Hari ini, Pertamax Rp15.950.", "Hari ini, Pertamax lima belas ribu sembilan ratus lima puluh."],
 "r-12": ["Pertamax melonjak jadi sekitar Rp23.000.", "Pertamax melonjak jadi sekitar dua puluh tiga ribu."],
 "r-13": ["Subsidi Pertalite membengkak. Harganya terpaksa naik ke Rp14.000.", "Subsidi Pertalite membengkak. Harganya terpaksa naik ke empat belas ribu."],
 "r-14": ["Antrean mengular. Ongkos angkot dan ongkos kirim ikut naik.", "Antrean mengular. Ongkos angkot dan ongkos kirim ikut naik."],
 "r-15": ["Uang bensin Pak Harun memakan jatah makan siangnya.", "Uang bensin Pak Harun memakan jatah makan siangnya."],
 "r-16": ["Pertamax turun jadi sekitar Rp9.000.", "Pertamax turun jadi sekitar sembilan ribu."],
 "r-17": ["Lebih murah dari Pertalite hari ini.", "Lebih murah dari Pertalite hari ini."],
 "r-18": ["Satu liter bensin bisa mengubah harga semua barang di pasar.", "Satu liter bensin bisa mengubah harga semua barang di pasar."],
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const HIJAU = '#38b764', MERAH = '#b13e53', NAVY = '#29366f', GELAP = '#0b0f2a', HANGAT = '#ffcd75';

// ---------- RUANG MAKAN keluarga Pak Harun (tampak samping, malam) ----------
// kondisi: 'kini' (Rp18.250), 'murah' (Rp7.000, meja penuh & terang), 'mahal' (Rp30.000, meja kosong & redup)
function ruang(dx, s, kondisi = 'kini') {
  const penuh = kondisi === 'murah';
  return [
    { sprite: 'jendela_malam', x: 46 + dx, y: 64, scale: 1, depth: 2 },
    { sprite: 'foto_keluarga', x: 116 + dx, y: 52, depth: 2 },
    { id: s + 'kal', sprite: 'kalender', x: 134 + dx, y: 64, depth: 2 },
    { sprite: 'jam_dinding', x: 72 + dx, y: 40, depth: 2 },
    { id: s + 'tv', sprite: 'tv_tabung', x: 152 + dx, y: 90, depth: 3 },
    { id: s + 'cahaya', sprite: 'cahaya_lampu', x: 96 + dx, y: 98, scale: 1.2, depth: 30 },
    { id: s + 'lampu', sprite: 'lampu_gantung', x: 96 + dx, y: 46, depth: 31 },
    ...[54, 138].map(x => ({ sprite: 'kursi', x: x + dx, y: 96, depth: 4 })),
    { sprite: 'meja_makan', x: 96 + dx, y: 106, depth: 12 },
    { sprite: 'bakul_nasi', x: 122 + dx, y: 92, depth: 13 },
    { id: s + 'tempe', sprite: kondisi === 'mahal' ? 'piring_tipis' : 'piring_tempe', x: 90 + dx, y: 91, depth: 13, hidden: kondisi === 'kini' },
    { sprite: 'teko', x: 102 + dx, y: 91, depth: 13 },
    { sprite: 'gelas_teh', x: 129 + dx, y: 91, depth: 13 },
    // uang yang dihitung Bu Sri (muncul satu per satu)
    ...[0, 1, 2, 3].map(i => ({ id: `${s}duit${i}`, sprite: 'duit', x: 68 + i * 5 + dx, y: 91 - (i % 2), scale: 0.8, depth: 13 + i * 0.01, hidden: kondisi !== 'murah' })),
    { id: s + 'tagihan', sprite: 'tagihan', x: 95 + dx, y: 91, depth: 13.2, hidden: kondisi !== 'mahal' },
    { id: s + 'tagihan2', sprite: 'tagihan', x: 98 + dx, y: 90, depth: 13.3, hidden: kondisi !== 'mahal' },
    { sprite: 'kalkulator', x: 66 + dx, y: 91, depth: 13 },
    ...(penuh ? [{ sprite: 'uang_tumpuk', x: 72 + dx, y: 90, scale: 0.45, depth: 13.5 }] : []),
  ];
}
const keluarga = (dx, k) => [
  { id: 'harun' + k, sprite: 'harun', x: 54 + dx, y: 92, tag: 'PAK HARUN', tagColor: '#5d606b' },
  { id: 'sri' + k, sprite: 'sri', x: 80 + dx, y: 92, tag: 'BU SRI', tagColor: '#257179' },
  { id: 'dina' + k, sprite: 'dina', x: 112 + dx, y: 92, face: 'left', tag: 'DINA', tagColor: NAVY },
  { id: 'bima' + k, sprite: 'bimo', x: 138 + dx, y: 92, face: 'left', tag: 'BIMA', tagColor: '#7a3b8f' },
];
const tutup = { x: 96, y: 74, zoom: VERT ? 1.2 : 1.45 };

const buka = (idL, idS, cuesL = [], cuesS = cuesL) => [C(idL, cuesL, { only: 'long' }), C(idS, cuesS, { only: 'short' })];

// ---------- PETA KOTA (tempat pusat tiap bab): rumah Pak Harun, warung Bu Sri, pasar, toko HP, SPBU, pabrik, kebun kopi ----------
const KOTA = {
  river: [[0, 86], [24, 92], [44, 104], [52, 108]],
  roads: [[0, 56, 192, 56], [120, 0, 120, 108], [40, 30, 40, 56], [76, 56, 76, 96]],
};
const T = { rumah: [40, 30], warung: [64, 72], pasar: [96, 36], toko: [90, 74], spbu: [146, 66], pabrik: [160, 26], kebun: [168, 92] };
const kotaProps = () => [
  { sprite: 'rumah_top_1', x: 40, y: 30 }, { sprite: 'warung_top', x: 62, y: 76 }, { sprite: 'pasar_top', x: 96, y: 44 },
  { sprite: 'rumah_top_2', x: 92, y: 78 }, { sprite: 'spbu_top', x: 146, y: 74 }, { sprite: 'gudang_top', x: 162, y: 36 },
  ...[[10, 22], [24, 40], [138, 14], [182, 14]].map(([x, y], i) => ({ sprite: `rumah_top_${i % 4}`, x, y })),
  ...[[150, 92], [160, 100], [172, 92], [182, 102], [164, 86], [186, 88], [154, 104]].map(([x, y]) => ({ sprite: 'pohon_top', x, y })),
  ...[[8, 70], [104, 98], [70, 16], [132, 40]].map(([x, y]) => ({ sprite: 'pohon_top', x, y })),
  { id: 'motor', sprite: 'motor_top', x: 40, y: 58, depth: 6 },
];
const peta = (steps, c = { x: 96, y: 54, zoom: 1.15 }, extra = {}) => ({
  transition: 'clouds', sky: 'map', map: KOTA, camera: c, props: kotaProps(), actors: [],
  walkers: { n: 14, sprites: ['warga', 'warga2', 'girl', 'boy', 'kid'] }, steps, ...extra });

// ---------- POM BENSIN (tampak samping, pagi) ----------
function spbu(dx, s) {
  return [
    { sprite: 'tree', x: 18 + dx }, { sprite: 'house', x: 176 + dx, scale: 0.85 },
    { sprite: 'spbu_kanopi', x: 92 + dx, y: 100, depth: 3 },
    ...[80, 106].map((x, i) => ({ sprite: 'pompa_bensin', x: x + dx, y: 100, depth: 5 })),
    { sprite: 'papan_harga', x: 146 + dx, y: 100, depth: 4 },
    { id: s + 'motor', sprite: 'motor_harun', x: 66 + dx, y: 101, depth: 9 },
    // antrean (sisi Rp30.000 saja)
    ...[0, 1, 2].map(i => ({ id: `${s}q${i}`, sprite: `motor_gas_${i}`, x: 46 - i * 15 + dx, y: 101, depth: 8, hidden: true })),
    { id: s + 'angkot', sprite: 'angkot', x: -24 + dx, y: 103, depth: 10 },
  ];
}
const harga = (dx, rows) => rows.map(([nama, nilai, bg], i) => ({ label: `${nama} ${nilai}`, x: 146 + dx, y: 61 + i * 10, bg: bg || NAVY, size: 11, dur: 0 }));
const hargaKini = dx => harga(dx, [['PERTALITE', 'Rp10.000'], ['PERTAMAX', 'Rp15.950']]);
const camSpbu = { x: 110, y: 74, zoom: VERT ? 1.2 : 1.2 };

const STORY = {
  title: 'Andaikan Rupiah Menjadi Rp7.000 Lagi',
  audioDir: 'audio/rupiah-7000',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — MALAM DI MEJA MAKAN =================
    {
      id: 'bab-1', title: 'Malam di meja makan',
      scenes: [
        {
          sky: 'rumah', clock: 'MALAM INI',
          camera: { x: 150, y: 72, zoom: VERT ? 2 : 2.8 },
          props: ruang(0, 'A'), actors: keluarga(0, 'A'),
          steps: [
            { sfx: 'jangkrik', vol: 0.45 },
            // TV berita: kurs hari ini
            C('r-01', [{ at: 0, label: 'BERITA · KURS HARI INI', x: 150, y: 54, bg: MERAH, size: 9, dur: 0 },
              { at: 'delapan belas', label: '1 USD = Rp18.250', x: 150, y: 62, bg: NAVY, size: 11, dur: 0 },
              { at: 'delapan belas', kw: '1 DOLAR = *Rp18.250*' }, { at: 'rupiah', glow: 'Atv', times: 2 }]),
            // kamera pindah ke meja: Bu Sri menghitung uang
            { together: [{ clearLabels: true }, { camera: { x: 94, y: 78, zoom: VERT ? 1.3 : 2 }, dur: 1400, ease: 'Sine.easeInOut' },
              C('r-02', [...[0, 1, 2, 3].map(i => ({ at: 0.25 + i * 0.12, pop: 'Aduit' + i })),
                { at: 'dihitung', emote: 'sriA', icon: 'sweat', dur: 1200 }, { at: 'dihitung', kw: 'UANG *DIHITUNG*' },
                { at: 'berkali-kali', glow: 'Aduit3', times: 2 }, { at: 'berkali-kali', kw: '*BERKALI-KALI*' }])] },
            // gaji Dina habis sebelum tanggal 20
            C('r-03', [{ at: 0, camera: { x: 124, y: 70, zoom: VERT ? 1.8 : 2.3 }, dur: 900 }, { at: 'gaji', emote: 'dinaA', icon: 'sweat', dur: 1100 },
              { at: 'habis', kw: 'GAJI *HABIS*' }, { at: 'tanggal', glow: 'Akal', times: 3 }, { at: 'dua puluh', label: 'TGL 20', x: 134, y: 42, bg: '#e43b44', size: 10, dur: 0 }]),
            // tempe naik, cicilan → struk bulanan keluarga
            C('r-04', [{ at: 0, clearLabels: true }, { at: 0, camera: { x: 96, y: 78, zoom: VERT ? 1.3 : 2 }, dur: 800 }, { at: 'tempe', pop: 'Atempe' },
              { at: 'tempe', kw: 'TEMPE *NAIK*' }, { at: 'naik', emote: 'sriA', icon: 'exclaim', dur: 900 },
              { at: 'cicilan', kw: 'CICILAN *BELUM LUNAS*' }, { at: 'cicilan', emote: 'harunA', icon: 'question', dur: 1000 }]),
            { receipt: 'BULAN INI · KELUARGA PAK HARUN (ilustrasi)', stagger: 260,
              lines: [['Gaji Dina (UMR)', 'Rp3.500.000'], ['Kontrakan', '-Rp1.000.000'], ['Cicilan motor', '-Rp800.000'], ['Dapur sebulan', '-Rp1.500.000'], ['Sekolah Bima', '-Rp400.000']],
              total: ['SISA', '-Rp200.000'], note: 'ilustrasi · bukan data' },
            // Bima: "Andai dolar Rp7.000 lagi..."
            C('r-05', [{ at: 0, camera: { x: 124, y: 80, zoom: VERT ? 1.8 : 2.5 }, dur: 700 }, { at: 'bergumam', dialog: 'bimaA', text: 'Andai dolar Rp7.000 lagi...', dur: 600 },
              { at: 'tujuh ribu', kw: 'ANDAI *Rp7.000*...' }]),
            // bagaimana kalau besok berubah? kamera mundur ke jendela, lampu berkedip
            C('r-06', [{ at: 0, camera: { x: 80, y: 70, zoom: VERT ? 1.2 : 1.7 }, dur: 1600 }, { at: 'besok', glow: 'Alampu', times: 3 },
              { at: 'benar-benar', kw: 'KALAU BESOK *BERUBAH*?' }, { at: 'berubah', shake: 250 }]),
          ],
        },
        // dua Indonesia: kiri dolar murah (terang), kanan dolar mahal (redup)
        {
          transition: 'clouds', sky: 'rumah', split: true, focus: 'both',
          tags: ['Rp 7.000 / USD', 'Rp 30.000 / USD'], tagColors: [HIJAU, MERAH], clock: 'HARI 1',
          note: 'Simulasi · angka ilustrasi',
          camera: tutup, cameraB: { ...tutup, x: R(tutup.x) },
          props: [...ruang(0, 'A', 'murah'), ...ruang(192, 'B', 'mahal')],
          actors: [...keluarga(0, 'A'), ...keluarga(192, 'B')],
          steps: [
            { together: [{ tint: 0.32, color: GELAP, side: 'right', dur: 900 }, { alpha: 'Bcahaya', to: 0.3, dur: 900 },
              C('r-07', [{ at: 'kiri', focus: 'left' }, { at: 'kiri', kw: 'DOLAR *Rp7.000*' }, { at: 'tujuh ribu', emote: 'bimaA', icon: 'heart', dur: 1000 },
                { at: 'tujuh ribu', emote: 'sriA', icon: 'note', dur: 1000 },
                { at: 'kanan', focus: 'right' }, { at: 'kanan', kw: 'DOLAR *Rp30.000*' }, { at: 'tiga puluh', emote: 'harunB', icon: 'sweat', dur: 1000 },
                { at: 'tiga puluh', emote: 'sriB', icon: 'exclaim', dur: 1000 }, { at: 'tiga puluh', glow: 'Btagihan', times: 2 }])] },
            { together: [{ focus: 'both' }, { title: 'ANDAIKAN', sub: 'Rupiah menjadi Rp7.000 lagi', dark: true, size: 30, dur: 2200 }, C('r-08')] },
          ],
        },
      ],
    },
    // ================= BAB 2 — POM BENSIN =================
    {
      id: 'bab-2', title: 'Pagi di pom bensin',
      scenes: [
        { ...peta([
          ...buka('r-09', 'r-09s', [{ at: 0, camera: { x: 40, y: 40, zoom: 2.4 }, dur: 600 }, { at: 'berangkat', move: 'motor', to: 140, speed: 40 },
              { at: 'berangkat', camera: { x: 120, y: 58, zoom: 1.8 }, dur: 2600 }, { at: 'kebun', kw: 'PAGI *PERTAMA*' }],
            [{ at: 0, camera: { x: 146, y: 66, zoom: 2.2 }, dur: 800 }, { at: 'tujuh ribu', kw: '*Rp7.000* / *Rp30.000*' }, { at: 'bensinmu', kw: 'BENSINMU *JADI BERAPA?*' }]),
          C('r-10', [{ at: 0, move: 'motor', to: 146, speed: 30 }, { at: 0, camera: { x: 146, y: 66, zoom: 2.6 }, dur: 900 },
            { at: 'minyak', label: 'MINYAK = DOLAR', x: 146, y: 52, bg: '#e43b44', size: 10, dur: 0 }, { at: 'dolar', kw: 'MINYAK = *DOLAR*' }, { at: 'dolar', sticker: 'money', at_: Rt }]),
        ], { x: 40, y: 34, zoom: 2 }, { transition: 'clouds' }), clock: 'HARI 1 · PAGI' },
        {
          transition: 'zoom', sky: 'day', split: true, focus: 'both',
          tags: ['Rp 7.000 / USD', 'Rp 30.000 / USD'], tagColors: [HIJAU, MERAH], clock: 'HARI 1 · PAGI', note: 'Simulasi · harga ilustrasi',
          camera: camSpbu, cameraB: { ...camSpbu, x: R(camSpbu.x) },
          props: [...spbu(0, 'A'), ...spbu(192, 'B')],
          actors: [0, 192].flatMap((dx, i) => { const k = i ? 'B' : 'A'; return [
            { id: 'harun' + k, sprite: 'harun', x: 56 + dx, y: 101, tag: 'PAK HARUN', tagColor: '#5d606b' },
            { id: 'petugas' + k, sprite: 'petugas', x: 92 + dx, y: 101, face: 'left' }]; }),
          steps: [
            // harga hari ini (sama di dua sisi)
            C('r-11', [{ at: 'pertamax', label: 'HARI INI', x: 146, y: 51, bg: '#5d606b', size: 10, dur: 0 }, { at: 'pertamax', label: 'HARI INI', x: R(146), y: 51, bg: '#5d606b', size: 10, dur: 0 },
              ...hargaKini(0).map(l => ({ at: 'pertamax', ...l })), ...hargaKini(192).map(l => ({ at: 'pertamax', ...l })), { at: 'lima belas', kw: 'PERTAMAX *Rp15.950*' }]),
            // --- Rp30.000 ---
            { together: [{ focus: 'right' }, { tint: 0.14, color: '#5d606b', side: 'right', dur: 900 },
              C('r-12', [{ at: 'melonjak', clearLabels: true }, ...hargaKini(0).map(l => ({ at: 'melonjak', ...l })),
                ...harga(192, [['PERTALITE', 'Rp10.000'], ['PERTAMAX', '±Rp23.000', '#e43b44']]).map(l => ({ at: 'melonjak', ...l })),
                { at: 'melonjak', shake: 250 }, { at: 'dua puluh', kw: 'PERTAMAX *±Rp23.000*' }, { at: 'dua puluh', emote: 'harunB', icon: 'exclaim', dur: 1000 }])] },
            C('r-13', [{ at: 'subsidi', kw: 'SUBSIDI *MEMBENGKAK*' }, { at: 'terpaksa', clearLabels: true }, ...hargaKini(0).map(l => ({ at: 'terpaksa', ...l })),
              ...harga(192, [['PERTALITE', '±Rp14.000', '#e43b44'], ['PERTAMAX', '±Rp23.000', '#e43b44']]).map(l => ({ at: 'terpaksa', ...l })),
              { at: 'empat belas', kw: 'PERTALITE *±Rp14.000*' }, { at: 'empat belas', stamp: 'NAIK', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
            C('r-14', [...[0, 1, 2].map(i => ({ at: 0.05 + i * 0.1, pop: `Bq${i}` })), { at: 'mengular', kw: 'ANTREAN *MENGULAR*' },
              { at: 'angkot', move: 'Bangkot', to: R(26), speed: 34 }, { at: 'ongkos', kw: 'ONGKOS ANGKOT & KIRIM *NAIK*' },
              { at: 'ongkos', label: 'ONGKOS ↑', x: R(26), y: 74, bg: '#e43b44', size: 9, dur: 0 }]),
            C('r-15', [{ at: 'uang bensin', emote: 'harunB', icon: 'sweat', dur: 1300 }, { at: 'makan siang', kw: 'MAKAN SIANG *DIPOTONG*' }]),
            { receipt: 'UANG HARIAN PAK HARUN · Rp30.000/USD (ilustrasi)', stagger: 280,
              lines: [['Uang harian', 'Rp40.000'], ['Bensin 2 L', '-Rp28.000'], ['Sisa', 'Rp12.000'], ['Nasi bungkus', 'Rp15.000']],
              total: ['MAKAN SIANG', 'TIDAK CUKUP'], note: 'ilustrasi · simulasi' },
            // --- Rp7.000 ---
            { together: [{ focus: 'left' },
              C('r-16', [{ at: 'turun', clearLabels: true },
                ...harga(0, [['PERTALITE', 'Rp10.000'], ['PERTAMAX', '±Rp9.000', '#38b764']]).map(l => ({ at: 'turun', ...l })),
                ...harga(192, [['PERTALITE', '±Rp14.000', '#e43b44'], ['PERTAMAX', '±Rp23.000', '#e43b44']]).map(l => ({ at: 'turun', ...l })),
                { at: 'sembilan', kw: 'PERTAMAX *±Rp9.000*' }, { at: 'sembilan', emote: 'harunA', icon: 'heart', dur: 1100 }])] },
            C('r-17', [{ at: 'lebih murah', kw: 'LEBIH MURAH DARI *PERTALITE*' }, { at: 'pertalite', sticker: 'party', at_: L }, { at: 'pertalite', jump: 'harunA', times: 1, height: 5 }]),
            // kembali dua sisi: satu liter mengubah semua harga
            { together: [{ focus: 'both' }, { camera: { ...camSpbu, zoom: camSpbu.zoom * 0.9 }, dur: 1600 }, { camera: { ...camSpbu, x: R(camSpbu.x), zoom: camSpbu.zoom * 0.9 }, side: 'right', dur: 1600 },
              C('r-18', [{ at: 'satu liter', move: 'Aangkot', to: 26, speed: 40 }, { at: 'mengubah', kw: '1 LITER = *SEMUA HARGA*', keepKw: true }], { punch: true })] },
          ],
        },
      ],
    },
  ],
};
