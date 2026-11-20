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
 // bab 3 — dapur Bu Sri
 "r-19": ["Ongkos kirim yang berubah, langsung terasa di dapur Bu Sri.", "Ongkos kirim yang berubah, langsung terasa di dapur Bu Sri."],
 "r-19s": ["Dolar Rp7.000 atau Rp30.000. Tempe jadi berapa?", "Dolar tujuh ribu atau tiga puluh ribu. Tempe jadi berapa?"],
 "r-20": ["Sembilan puluh persen kedelai kita impor.", "Sembilan puluh persen kedelai kita impor."],
 "r-21": ["Hari ini, sekilo kedelai sekitar Rp11.500.", "Hari ini, sekilo kedelai sekitar sebelas ribu lima ratus."],
 "r-22": ["Kedelai melonjak jadi sekitar Rp19.000 sekilo.", "Kedelai melonjak jadi sekitar sembilan belas ribu sekilo."],
 "r-23": ["Sepotong tempe dari Rp5.000 jadi Rp7.500.", "Sepotong tempe dari lima ribu jadi tujuh ribu lima ratus."],
 "r-24": ["Bu Sri memilih harga tetap, tapi tempenya makin tipis.", "Bu Sri memilih harga tetap, tapi tempenya makin tipis."],
 "r-25": ["Pelanggan protes. Mie instan pun naik jadi Rp4.500.", "Pelanggan protes. Mie instan pun naik jadi empat ribu lima ratus."],
 "r-26": ["Malam itu, Bu Sri diam-diam melewatkan makan.", "Malam itu, Bu Sri diam-diam melewatkan makan."],
 "r-27": ["Kedelai turun jadi sekitar Rp5.000 sekilo.", "Kedelai turun jadi sekitar lima ribu sekilo."],
 "r-28": ["Tempe tebal lagi, cuma Rp3.500. Warung ramai.", "Tempe tebal lagi, cuma tiga ribu lima ratus. Warung ramai."],
 // bab 4 — HP Bima
 "r-29": ["Di warung itu, Bima menatap layar HP-nya yang retak.", "Di warung itu, Bima menatap layar ha pe nya yang retak."],
 "r-29s": ["HP flagship Rp25 juta. Kalau dolar berubah, jadi berapa?", "Ha pe flagship dua puluh lima juta. Kalau dolar berubah, jadi berapa?"],
 "r-30": ["Temannya pamer HP flagship baru, harganya Rp25 juta.", "Temannya pamer ha pe flagship baru, harganya dua puluh lima juta."],
 "r-31": ["HP yang sama melonjak jadi sekitar Rp38 juta.", "Ha pe yang sama melonjak jadi sekitar tiga puluh delapan juta."],
 "r-32": ["HP kelas menengah pun naik, dari Rp4 juta jadi Rp6 juta.", "Ha pe kelas menengah pun naik, dari empat juta jadi enam juta."],
 "r-33": ["HP retak Bima tak bisa diganti. Cicilan lama makin mencekik.", "Ha pe retak Bima tak bisa diganti. Cicilan lama makin mencekik."],
 "r-34": ["Toko HP Mas Yoga di sebelah akhirnya tutup.", "Toko ha pe Mas Yoga di sebelah akhirnya tutup."],
 "r-35": ["HP flagship turun jadi sekitar Rp12,5 juta.", "Ha pe flagship turun jadi sekitar dua belas setengah juta."],
 "r-36": ["Bima girang. Tapi Mas Yoga rugi besar.", "Bima girang. Tapi Mas Yoga rugi besar."],
 "r-37": ["Stok di tokonya dibeli dengan harga lama.", "Stok di tokonya dibeli dengan harga lama."],
 // bab 5 — pabrik Dina
 "r-38": ["Kakak Bima, Dina, bekerja di pabrik garmen ujung kota.", "Kakak Bima, Dina, bekerja di pabrik garmen ujung kota."],
 "r-38s": ["Rupiah menguat, kok malah banyak yang di-PHK?", "Rupiah menguat, kok malah banyak yang di pe ha ka?"],
 "r-39": ["Pabrik Dina menjual kaus ke luar negeri. Satu kaus dibayar $10.", "Pabrik Dina menjual kaus ke luar negeri. Satu kaus dibayar sepuluh dolar."],
 "r-40": ["Hari ini, $10 itu sama dengan Rp182.500.", "Hari ini, sepuluh dolar itu sama dengan seratus delapan puluh dua ribu lima ratus rupiah."],
 "r-41": ["Sekarang, $10 cuma Rp70.000.", "Sekarang, sepuluh dolar cuma tujuh puluh ribu rupiah."],
 "r-42": ["Tapi gaji, listrik, dan sewa pabrik tetap dibayar dengan harga lama.", "Tapi gaji, listrik, dan sewa pabrik tetap dibayar dengan harga lama."],
 "r-43": ["Naikkan harga? Pembeli pindah ke negara yang lebih murah.", "Naikkan harga? Pembeli pindah ke negara yang lebih murah."],
 "r-44": ["Di pasar, baju impor murah membanjir. Produk lokal kalah.", "Di pasar, baju impor murah membanjir. Produk lokal kalah."],
 "r-45": ["Pabrik merugi. Dina pulang membawa surat PHK.", "Pabrik merugi. Dina pulang membawa surat pe ha ka."],
 "r-46": ["Rupiah kuat terasa enak bagi pembeli. Tapi pekerja ekspor yang menanggungnya.", "Rupiah kuat terasa enak bagi pembeli. Tapi pekerja ekspor yang menanggungnya."],
 "r-47": ["$10 jadi Rp300.000. Pesanan membanjir, lembur tiap hari.", "Sepuluh dolar jadi tiga ratus ribu. Pesanan membanjir, lembur tiap hari."],
 "r-48": ["Tapi kain dan benang impor ikut mahal. Gaji Dina tetap tidak naik.", "Tapi kain dan benang impor ikut mahal. Gaji Dina tetap tidak naik."],
 // bab 6 — kebun kopi
 "r-49": ["Malam itu, Dina pulang lewat kebun kopi tempat ayahnya bekerja.", "Malam itu, Dina pulang lewat kebun kopi tempat ayahnya bekerja."],
 "r-49s": ["Es kopi susu aren Rp22.000. Kalau dolar berubah, jadi berapa?", "Es kopi susu aren dua puluh dua ribu. Kalau dolar berubah, jadi berapa?"],
 "r-50": ["Kopi dari kebun ini dijual ke luar negeri, dibayar dolar.", "Kopi dari kebun ini dijual ke luar negeri, dibayar dolar."],
 "r-51": ["Hari ini, segelas es kopi susu aren sekitar Rp22.000.", "Hari ini, segelas es kopi susu aren sekitar dua puluh dua ribu."],
 "r-52": ["Juragan kopi panen besar. Upah Pak Harun naik sedikit.", "Juragan kopi panen besar. Upah Pak Harun naik sedikit."],
 "r-53": ["Tapi susu, gelas plastik, dan biji kopinya ikut mahal.", "Tapi susu, gelas plastik, dan biji kopinya ikut mahal."],
 "r-54": ["Segelas es kopi susu aren jadi sekitar Rp30.000.", "Segelas es kopi susu aren jadi sekitar tiga puluh ribu."],
 "r-55": ["Pak Harun memetik kopi setiap hari, tapi tak sanggup membeli segelas.", "Pak Harun memetik kopi setiap hari, tapi tak sanggup membeli segelas."],
 "r-56": ["Es kopi murah, cuma sekitar Rp17.000.", "Es kopi murah, cuma sekitar tujuh belas ribu."],
 "r-57": ["Tapi harga biji kopi dalam rupiah anjlok. Upah buruh dipotong.", "Tapi harga biji kopi dalam rupiah anjlok. Upah buruh dipotong."],
 "r-58": ["Bensinnya murah, tapi tak ada lagi kerja di kebun.", "Bensinnya murah, tapi tak ada lagi kerja di kebun."],
 // bab 7 — tabungan umrah
 "r-59": ["Di kamar, Bu Sri membuka celengan umrahnya.", "Di kamar, Bu Sri membuka celengan umrahnya."],
 "r-59s": ["Sepuluh tahun menabung untuk umrah. Kurs berubah, mimpinya ikut berubah.", "Sepuluh tahun menabung untuk umrah. Kurs berubah, mimpinya ikut berubah."],
 "r-60": ["Sepuluh tahun Bu Sri menabung untuk umrah.", "Sepuluh tahun Bu Sri menabung untuk umrah."],
 "r-61": ["Biaya umrah sebagian besar dibayar dengan mata uang asing.", "Biaya umrah sebagian besar dibayar dengan mata uang asing."],
 "r-62": ["Biayanya melonjak hampir dua kali lipat.", "Biayanya melonjak hampir dua kali lipat."],
 "r-63": ["Tabungan sepuluh tahun, kini tinggal setengah jalan.", "Tabungan sepuluh tahun, kini tinggal setengah jalan."],
 "r-64": ["Akhirnya, tabungannya cukup. Bu Sri menangis bahagia.", "Akhirnya, tabungannya cukup. Bu Sri menangis bahagia."],
 "r-65": ["Tapi esok paginya, Dina di-PHK.", "Tapi esok paginya, Dina di pe ha ka."],
 "r-66": ["Uang umrah itu dipakai untuk menyambung hidup.", "Uang umrah itu dipakai untuk menyambung hidup."],
 // bab 8 — bulan ke-6
 "r-67": ["Enam bulan berlalu.", "Enam bulan berlalu."],
 "r-67s": ["Enam bulan dolar Rp7.000 dan Rp30.000. Siapa yang bertahan?", "Enam bulan dolar tujuh ribu dan tiga puluh ribu. Siapa yang bertahan?"],
 "r-68": ["Bensin, tempe, dan cicilan terus merayap naik.", "Bensin, tempe, dan cicilan terus merayap naik."],
 "r-69": ["Daya beli runtuh. Yang bertahan hanya yang dibayar dolar.", "Daya beli runtuh. Yang bertahan hanya yang dibayar dolar."],
 "r-70": ["Barang murah, tapi lowongan kerja menyempit.", "Barang murah, tapi lowongan kerja menyempit."],
 "r-71": ["Yang kehilangan pekerjaan belum juga pulih.", "Yang kehilangan pekerjaan belum juga pulih."],
 "r-72": ["Dua Indonesia. Dua-duanya punya luka.", "Dua Indonesia. Dua-duanya punya luka."],
 // bab 9 — kembali ke meja makan
 "r-73": ["Malam itu, keluarga Pak Harun kembali duduk di meja makan.", "Malam itu, keluarga Pak Harun kembali duduk di meja makan."],
 "r-73s": ["Dolar Rp7.000 atau Rp30.000. Kamu pilih yang mana?", "Dolar tujuh ribu atau tiga puluh ribu. Kamu pilih yang mana?"],
 "r-74": ["Pak Harun menatap anak-anaknya.", "Pak Harun menatap anak-anaknya."],
 "r-75": ["\"Terlalu kuat sakit. Terlalu lemah juga sakit.\"", "Terlalu kuat sakit. Terlalu lemah juga sakit."],
 "r-76": ["\"Yang kami butuhkan, harga yang tidak naik-turun.\"", "Yang kami butuhkan, harga yang tidak naik turun."],
 "r-77": ["\"Dan kerja yang pasti.\"", "Dan kerja yang pasti."],
 "r-78": ["Rupiah yang sehat bukan yang paling kuat, tapi yang paling stabil.", "Rupiah yang sehat bukan yang paling kuat, tapi yang paling stabil."],
 "r-79": ["Kamu pilih hidup di Indonesia yang mana? Tulis di kolom komentar.", "Kamu pilih hidup di Indonesia yang mana? Tulis di kolom komentar."],
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
    ...[60, 134].map(x => ({ sprite: 'kursi', x: x + dx, y: 96, depth: 4 })),
    { sprite: 'meja_makan', x: 96 + dx, y: 106, depth: 12 },
    { sprite: 'bakul_nasi', x: 122 + dx, y: 92, depth: 13 },
    { id: s + 'tempe', sprite: kondisi === 'mahal' ? 'piring_tipis' : 'piring_tempe', x: 90 + dx, y: 91, depth: 13, hidden: kondisi === 'kini' },
    { sprite: 'teko', x: 102 + dx, y: 91, depth: 13 },
    { sprite: 'gelas_teh', x: 129 + dx, y: 91, depth: 13 },
    // uang yang dihitung Bu Sri (muncul satu per satu)
    ...[0, 1, 2, 3].map(i => ({ id: `${s}duit${i}`, sprite: 'duit', x: 68 + i * 5 + dx, y: 91 - (i % 2), scale: 0.8, depth: 13 + i * 0.01, hidden: kondisi !== 'murah' })),
    { id: s + 'tagihan', sprite: 'tagihan', x: 95 + dx, y: 91, depth: 13.2, hidden: kondisi !== 'mahal' },
    { id: s + 'tagihan2', sprite: 'tagihan', x: 98 + dx, y: 90, depth: 13.3, hidden: kondisi !== 'mahal' },
    { sprite: 'kalkulator', x: 70 + dx, y: 91, depth: 13 },
    ...(penuh ? [{ sprite: 'uang_tumpuk', x: 72 + dx, y: 90, scale: 0.45, depth: 13.5 }] : []),
  ];
}
const keluarga = (dx, k) => [
  { id: 'harun' + k, sprite: 'harun', x: 60 + dx, y: 92, tag: 'PAK HARUN', tagColor: '#5d606b' },
  { id: 'sri' + k, sprite: 'sri', x: 80 + dx, y: 92, tag: 'BU SRI', tagColor: '#257179' },
  { id: 'dina' + k, sprite: 'dina', x: 112 + dx, y: 92, face: 'left', tag: 'DINA', tagColor: NAVY },
  { id: 'bima' + k, sprite: 'bimo', x: 134 + dx, y: 92, face: 'left', tag: 'BIMA', tagColor: '#7a3b8f' },
];
const tutup = { x: 97, y: 76, zoom: VERT ? 1.2 : 1.05 };

const buka = (idL, idS, cuesL = [], cuesS = cuesL) => [C(idL, cuesL, { only: 'long' }), C(idS, cuesS, { only: 'short' })];

// ---------- PETA KOTA (tempat pusat tiap bab): rumah Pak Harun, warung Bu Sri, pasar, toko HP, SPBU, pabrik, kebun kopi ----------
const KOTA = {
  river: [[0, 86], [24, 92], [44, 104], [52, 108]],
  roads: [[0, 56, 192, 56], [120, 0, 120, 108], [40, 30, 40, 56], [76, 56, 76, 96]],
};
const T = { rumah: [40, 30], warung: [64, 72], pasar: [96, 36], toko: [90, 74], spbu: [146, 66], pabrik: [160, 26], kebun: [168, 92] };
const kotaProps = (dx = 0, s = '') => kotaBase().map(p => ({ ...p, x: p.x + dx, ...(p.id ? { id: s + p.id } : {}) }));
const kotaBase = () => [
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


// ---------- helper bab 3–9 ----------
// pembuka bab: peta pusat, kamera menuju tempat (jembatan untuk long, pembuka khusus untuk short)
const hub = (idL, idS, place, kwL, kwS, zoom = 2.4, extra = []) => ({ ...peta([
  ...buka(idL, idS, [{ at: 0, camera: { x: T[place][0], y: T[place][1], zoom }, dur: 2200 }, ...(kwL ? [{ at: 0.4, kw: kwL }] : []), ...extra],
    [{ at: 0, camera: { x: T[place][0], y: T[place][1], zoom }, dur: 1600 }, ...(kwS ? [{ at: 0.3, kw: kwS }] : [])]),
], { x: 96, y: 54, zoom: 1.15 }) });
// adegan dekat terbelah: kiri Rp7.000, kanan Rp30.000
function dekat(propsFn, actorsFn, steps, { sky = 'day', c = { x: 100, y: 76, zoom: VERT ? 1.2 : 1.45 }, clock, note = 'Simulasi · harga ilustrasi' } = {}) {
  return { transition: 'clouds', sky, split: true, focus: 'both',
    tags: ['Rp 7.000 / USD', 'Rp 30.000 / USD'], tagColors: [HIJAU, MERAH], clock, note,
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
// label harga: sisi 'A' (kiri) / 'B' (kanan) / 'AB' (dua sisi)
const lab = (side, text, x, y, bg = NAVY, size = 12) => [...side].map(k => ({ label: text, x: x + (k === 'B' ? 192 : 0), y, bg, size, dur: 0 }));
const at = (w, arr) => arr.map(st => ({ at: w, ...st }));
const MERAH2 = '#e43b44';

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
    // ================= BAB 3 — DAPUR BU SRI =================
    {
      id: 'bab-3', title: 'Dapur Bu Sri',
      scenes: [
        hub('r-19', 'r-19s', 'warung', 'DAPUR *BU SRI*', 'TEMPE *JADI BERAPA?*'),
        dekat((dx, s) => [
          { sprite: 'tree', x: 16 + dx }, { sprite: 'warung', x: 92 + dx, y: 100, scale: 1.15, depth: 3 },
          { sprite: 'table', x: 96 + dx, y: 102, depth: 8 },
          ...[0, 1, 2].map(i => ({ id: `${s}tp${i}`, sprite: 'tempe', x: 86 + i * 9 + dx, y: 93, scale: 1.4, depth: 9 })),
          ...[0, 1, 2].map(i => ({ id: `${s}tt${i}`, sprite: 'tempe_tipis', x: 86 + i * 9 + dx, y: 93, scale: 1.4, depth: 9, hidden: true })),
          { sprite: 'noodle', x: 116 + dx, y: 93, depth: 9 }, { sprite: 'karung_gandum', x: 140 + dx, y: 101, scale: 1.2, depth: 6 },
        ], (dx, k) => [
          { id: 'sri' + k, sprite: 'sri', x: 72 + dx, y: 101, tag: 'BU SRI', tagColor: '#257179' },
          { id: 'beli' + k, sprite: 'warga2', x: 160 + dx, y: 101, face: 'left' },
          ...(k === 'A' ? [0, 1, 2].map(i => ({ id: 'ramai' + i, sprite: ['warga', 'girl', 'boy'][i], x: 172 - i * 10, y: 102, face: 'left', hidden: true })) : []),
        ], [
          C('r-20', [...at('kedelai', lab('AB', 'KEDELAI · 90% IMPOR', 140, 74, '#5d606b')), { at: 'impor', kw: '*90%* KEDELAI IMPOR' }, { at: 'impor', glow: 'Atp1', times: 2 }]),
          C('r-21', [{ at: 0, clearLabels: true }, ...at('kedelai', [...lab('AB', 'KEDELAI Rp11.500/kg', 140, 74), ...lab('AB', 'TEMPE Rp5.000', 96, 78)]), { at: 'sebelas', kw: 'KEDELAI *Rp11.500*/KG' }]),
          // --- Rp30.000 ---
          { together: [{ focus: 'right' }, C('r-22', [{ at: 'melonjak', clearLabels: true }, ...at('melonjak', [...lab('A', 'KEDELAI Rp11.500/kg', 140, 74), ...lab('A', 'TEMPE Rp5.000', 96, 78)]),
            ...at('melonjak', lab('B', 'KEDELAI ±Rp19.000/kg', 140, 74, MERAH2)), { at: 'melonjak', shake: 250 }, { at: 'sembilan belas', kw: 'KEDELAI *±Rp19.000*' }])] },
          C('r-23', [...at('tempe', lab('B', 'TEMPE Rp5.000 → Rp7.500', 96, 78, MERAH2)), { at: 'tujuh ribu', kw: 'TEMPE *Rp5.000 → Rp7.500*' }, { at: 'tujuh ribu', emote: 'beliB', icon: 'exclaim', dur: 1000 }]),
          C('r-24', [...[0, 1, 2].flatMap(i => [{ at: 'tipis', hide: `Btp${i}` }, { at: 'tipis', show: `Btt${i}` }]), { at: 'harga tetap', emote: 'sriB', icon: 'sweat', dur: 1300 },
            { at: 'tipis', kw: 'TEMPE *MAKIN TIPIS*' }]),
          C('r-25', [{ at: 'protes', say: 'beliB', text: 'Kok tipis, Bu?' }, ...at('mie', lab('B', 'MIE INSTAN Rp4.500', 116, 70, MERAH2)), { at: 'empat ribu', kw: 'MIE INSTAN *Rp4.500*' }]),
          { together: [{ tint: 0.45, color: GELAP, side: 'right', dur: 900 }, C('r-26', [{ at: 'malam', exit: 'beliB', to: 'right' }, { at: 'melewatkan', emote: 'sriB', icon: 'sweat', dur: 1500 },
            { at: 'melewatkan', kw: 'IBU *TIDAK MAKAN*' }])] },
          // --- Rp7.000 ---
          { together: [{ focus: 'left' }, C('r-27', [{ at: 'turun', clearLabels: true }, ...at('turun', lab('A', 'KEDELAI ±Rp5.000/kg', 140, 74, HIJAU)), { at: 'lima ribu', kw: 'KEDELAI *±Rp5.000*' }])] },
          C('r-28', [...at('tebal', lab('A', 'TEMPE Rp3.500', 96, 78, HIJAU)), { at: 'tebal', kw: 'TEMPE *Rp3.500*' }, ...[0, 1, 2].map(i => ({ at: 'ramai', show: 'ramai' + i })),
            { at: 'ramai', emote: 'sriA', icon: 'heart', dur: 1200 }, { at: 'ramai', sticker: 'party', at_: L }]),
          { together: [{ focus: 'both' }, { wait: 900 }] },
        ], { clock: 'HARI 3' }),
      ],
    },
    // ================= BAB 4 — HP BIMA =================
    {
      id: 'bab-4', title: 'HP Bima',
      scenes: [
        hub('r-29', 'r-29s', 'toko', 'HP *RETAK*', 'HP *JADI BERAPA?*'),
        dekat((dx, s) => [
          { sprite: 'house', x: 168 + dx, scale: 0.9 }, { sprite: 'toko_hp', x: 84 + dx, y: 100, depth: 3 },
          { sprite: 'etalase', x: 84 + dx, y: 101, depth: 7 },
          { id: s + 'hp', sprite: 'phone', x: 84 + dx, y: 82, scale: 1.3, depth: 9, hidden: true },
          { id: s + 'retak', sprite: 'phone_broken', x: 136 + dx, y: 82, scale: 0.8, depth: 9, hidden: true },
          { id: s + 'tutup', sprite: 'pintu_tutup', x: 84 + dx, y: 100, scale: 1.25, depth: 10, hidden: true },
        ], (dx, k) => [
          { id: 'yoga' + k, sprite: 'yoga', x: 60 + dx, y: 101, tag: 'MAS YOGA', tagColor: '#3b5dc9' },
          { id: 'bima' + k, sprite: 'bimo', x: 128 + dx, y: 101, face: 'left', tag: 'BIMA', tagColor: '#7a3b8f' },
          { id: 'teman' + k, sprite: 'boy', x: 148 + dx, y: 101, face: 'left' },
        ], [
          C('r-30', [{ at: 'pamer', pop: 'Bretak' }, { at: 'pamer', pop: 'Aretak' }, { at: 'pamer', emote: 'temanA', icon: 'note', dur: 1000 }, { at: 'pamer', emote: 'temanB', icon: 'note', dur: 1000 },
            { at: 'flagship', pop: 'Ahp' }, { at: 'flagship', pop: 'Bhp' }, ...at('dua puluh', lab('AB', 'FLAGSHIP Rp25 JUTA', 84, 66)), { at: 'dua puluh', kw: 'FLAGSHIP *Rp25 JUTA*' }]),
          // --- Rp30.000 ---
          { together: [{ focus: 'right' }, C('r-31', [{ at: 'melonjak', clearLabels: true }, ...at('melonjak', [...lab('A', 'FLAGSHIP Rp25 JUTA', 84, 66), ...lab('B', 'FLAGSHIP ±Rp38 JUTA', 84, 66, MERAH2)]),
            { at: 'melonjak', shake: 250 }, { at: 'tiga puluh', kw: 'FLAGSHIP *±Rp38 JUTA*' }])] },
          C('r-32', [...at('menengah', lab('B', 'KELAS MENENGAH Rp4 JT → Rp6 JT', 84, 56, MERAH2)), { at: 'enam juta', kw: 'KELAS MENENGAH *Rp6 JUTA*' }]),
          C('r-33', [{ at: 'retak', glow: 'Bretak', times: 3 }, { at: 'diganti', emote: 'bimaB', icon: 'sweat', dur: 1300 }, { at: 'mencekik', kw: 'CICILAN *MENCEKIK*' }]),
          C('r-34', [{ at: 'tutup', pop: 'Btutup' }, { at: 'tutup', stamp: 'TUTUP', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }, { at: 'tutup', emote: 'yogaB', icon: 'sweat', dur: 1300 }, { at: 'tutup', kw: 'TOKO *TUTUP*' }]),
          // --- Rp7.000 ---
          { together: [{ focus: 'left' }, C('r-35', [{ at: 'turun', clearLabels: true }, ...at('turun', lab('A', 'FLAGSHIP ±Rp12,5 JUTA', 84, 66, HIJAU)), { at: 'dua belas', kw: 'FLAGSHIP *±Rp12,5 JUTA*' }])] },
          C('r-36', [{ at: 'girang', jump: 'bimaA', times: 2, height: 5 }, { at: 'girang', emote: 'bimaA', icon: 'heart', dur: 1000 }, { at: 'rugi', emote: 'yogaA', icon: 'sweat', dur: 1400 }, { at: 'rugi', kw: 'MAS YOGA *RUGI BESAR*' }]),
          C('r-37', [{ at: 'stok', dialog: 'yogaA', text: 'Stokku kubeli waktu dolar masih Rp18.250...', dur: 500 }, { at: 'lama', kw: 'STOK LAMA = *RUGI*' }]),
          { together: [{ focus: 'both' }, { wait: 800 }] },
        ], { clock: 'HARI 9' }),
      ],
    },
    // ================= BAB 5 — PABRIK DINA =================
    {
      id: 'bab-5', title: 'Pabrik Dina',
      scenes: [
        hub('r-38', 'r-38s', 'pabrik', 'PABRIK *GARMEN*', 'RUPIAH KUAT, *KOK PHK?*'),
        dekat((dx, s) => [
          ...[46, 96, 146].map(x => ({ sprite: 'lampu_gantung', x: x + dx, y: 40, depth: 31 })), ...[46, 96, 146].map(x => ({ sprite: 'cahaya_lampu', x: x + dx, y: 92, scale: 0.8, depth: 30 })),
          { sprite: 'jam_dinding', x: 150 + dx, y: 56, depth: 2 }, { sprite: 'spanduk', x: 30 + dx, y: 88, scale: 1.4, depth: 2 },
          ...[46, 78, 110].map(x => ({ sprite: 'mesin_jahit', x: x + dx, y: 101, scale: 1.3, depth: 8 })),
          { sprite: 'tumpukan_kaus', x: 142 + dx, y: 101, scale: 1.2, depth: 6 },
          ...[0, 1].map(i => ({ id: `${s}tk${i}`, sprite: 'tumpukan_kaus', x: 158 + dx, y: 101 - i * 12, scale: 1.2, depth: 6 + i * 0.1, hidden: true })),
          { id: s + 'kaus', sprite: 'kaus', x: 96 + dx, y: 66, scale: 2, depth: 20, hidden: true },
          { id: s + 'surat', sprite: 'surat', x: 92 + dx, y: 84, scale: 0.8, depth: 12, hidden: true },
        ], (dx, k) => [
          { id: 'rekan' + k, sprite: 'warga2', x: 46 + dx, y: 97 },
          { id: 'dina' + k, sprite: 'dina', x: 78 + dx, y: 97, tag: 'DINA', tagColor: NAVY },
          { id: 'rekan2' + k, sprite: 'girl', x: 110 + dx, y: 97 },
        ], [
          C('r-39', [{ at: 'satu kaus', pop: 'Akaus' }, { at: 'satu kaus', pop: 'Bkaus' }, ...at('sepuluh', lab('AB', '1 KAUS = $10', 96, 50)), { at: 'sepuluh', kw: '1 KAUS = *$10*' }]),
          C('r-40', [...at('seratus', lab('AB', 'HARI INI: $10 = Rp182.500', 96, 84, '#5d606b')), { at: 'seratus', kw: '$10 = *Rp182.500*' }]),
          // --- Rp7.000 ---
          { together: [{ focus: 'left' }, C('r-41', [{ at: 'cuma', clearLabels: true }, ...at('cuma', [...lab('A', '$10 = Rp70.000', 96, 50, MERAH2), ...lab('B', '1 KAUS = $10', 96, 50)]),
            { at: 'tujuh puluh', kw: '$10 = *Rp70.000*' }, { at: 'tujuh puluh', emote: 'dinaA', icon: 'question', dur: 1000 }])] },
          C('r-42', [{ at: 'gaji', card: 'Biaya pabrik (rupiah)', items: ['Gaji UMR', 'Listrik', 'Sewa & cicilan mesin'], x: 142, y: 80, place: 'left', stagger: 300, dur: 0 }, { at: 'lama', kw: 'BIAYA *TETAP*' }]),
          C('r-43', [{ at: 0, clear: true }, { at: 'pembeli', label: 'PESANAN → NEGARA LAIN', x: 96, y: 60, bg: MERAH2, size: 10, dur: 0 }, { at: 'pindah', hide: 'Akaus' }, { at: 'pindah', kw: 'PEMBELI *PINDAH*' }]),
          C('r-44', [{ at: 'impor', kw: 'BAJU IMPOR *MEMBANJIR*' }, { at: 'kalah', kw: 'PRODUK LOKAL *KALAH*' }, { at: 'kalah', emote: 'rekanA', icon: 'sweat', dur: 1000 }]),
          { together: [{ tint: 0.3, color: GELAP, side: 'left', dur: 900 }, C('r-45', [{ at: 'merugi', clearLabels: true }, { at: 'surat', pop: 'Asurat' }, { at: 'surat', stamp: 'PHK', at_: L },
            { at: 'surat', emote: 'dinaA', icon: 'sweat', dur: 1500 }, { at: 'phk', kw: 'DINA *DI-PHK*' }, { at: 'pulang', exit: 'dinaA', to: 'right' }])] },
          C('r-46', [{ at: 'pembeli', kw: 'ENAK BAGI *PEMBELI*' }, { at: 'pekerja', kw: 'PEKERJA EKSPOR *MENANGGUNG*', keepKw: true }], { punch: true }),
          // --- Rp30.000 ---
          { together: [{ focus: 'right' }, C('r-47', [...at('tiga ratus', lab('B', '$10 = Rp300.000', 96, 50, HIJAU)), { at: 'tiga ratus', kw: '$10 = *Rp300.000*' },
            { at: 'membanjir', pop: 'Btk0' }, { at: 'membanjir', pop: 'Btk1' }, { at: 'lembur', label: 'LEMBUR s/d 22.00', x: 140, y: 64, bg: '#ef7d57', size: 10, dur: 0 }, { at: 'lembur', kw: 'LEMBUR *TIAP HARI*' }])] },
          C('r-48', [...at('kain', lab('B', 'KAIN & BENANG IMPOR ↑', 96, 84, MERAH2)), { at: 'gaji', emote: 'dinaB', icon: 'sweat', dur: 1200 }, { at: 'tidak naik', kw: 'GAJI *TETAP*' }]),
          { together: [{ focus: 'both' }, { wait: 800 }] },
        ], { sky: 'rumah', clock: 'MINGGU 3' }),
      ],
    },
    // ================= BAB 6 — KEBUN KOPI =================
    {
      id: 'bab-6', title: 'Kebun kopi Pak Harun',
      scenes: [
        hub('r-49', 'r-49s', 'kebun', 'KEBUN *KOPI*', 'ES KOPI *JADI BERAPA?*'),
        dekat((dx, s) => [
          ...[14, 30, 46, 140, 156, 172, 188].map((x, i) => ({ sprite: 'kopi', x: x + dx, y: 94 + (i % 2) * 6, scale: 2.6, depth: 3 + (i % 2) })),
          ...[22, 38, 164, 180].map(x => ({ sprite: 'kopi', x: x + dx, y: 88, scale: 2.2, depth: 2 })),
          { sprite: 'karung_kopi', x: 116 + dx, y: 101, scale: 1.2, depth: 6 }, { sprite: 'karung_kopi', x: 126 + dx, y: 101, scale: 1.2, depth: 6 },
          { id: s + 'es', sprite: 'es_kopi', x: 96 + dx, y: 66, scale: 2.4, depth: 20, hidden: true },
        ], (dx, k) => [
          { id: 'harun' + k, sprite: 'harun', x: 66 + dx, y: 101, tag: 'PAK HARUN', tagColor: '#5d606b' },
          { id: 'juragan' + k, sprite: 'juragan', x: 144 + dx, y: 101, face: 'left', tag: 'JURAGAN', tagColor: '#8b5a2b' },
        ], [
          C('r-50', [...at('luar negeri', lab('AB', 'EKSPOR · DIBAYAR DOLAR', 121, 82, '#5d606b')), { at: 'dolar', kw: 'KOPI = *DOLAR*' }]),
          C('r-51', [{ at: 'segelas', pop: 'Aes' }, { at: 'segelas', pop: 'Bes' }, ...at('dua puluh', lab('AB', 'ES KOPI SUSU AREN Rp22.000', 96, 46)), { at: 'dua puluh', kw: 'ES KOPI *Rp22.000*' }]),
          // --- Rp30.000 ---
          { together: [{ focus: 'right' }, C('r-52', [{ at: 'panen', jump: 'juraganB', times: 2, height: 5 }, { at: 'panen', emote: 'juraganB', icon: 'heart', dur: 1000 },
            { at: 'upah', tag: 'harunB', text: 'UPAH +SEDIKIT', color: HIJAU }, { at: 'upah', kw: 'UPAH *NAIK SEDIKIT*' }])] },
          C('r-53', [{ at: 'susu', kw: 'SUSU · GELAS · BIJI KOPI *MAHAL*' }, { at: 'mahal', glow: 'Bes', times: 2 }]),
          C('r-54', [{ at: 0, clearLabels: true }, ...at(0, lab('A', 'ES KOPI SUSU AREN Rp22.000', 96, 46)), ...at('tiga puluh', lab('B', 'ES KOPI Rp22.000 → ±Rp30.000', 96, 46, MERAH2)),
            { at: 'tiga puluh', kw: 'ES KOPI *±Rp30.000*' }]),
          C('r-55', [{ at: 'memetik', emote: 'harunB', icon: 'sweat', dur: 1500 }, { at: 'tak sanggup', kw: 'TAK SANGGUP *SEGELAS*' }]),
          // --- Rp7.000 ---
          { together: [{ focus: 'left' }, C('r-56', [{ at: 'murah', clearLabels: true }, ...at('murah', lab('A', 'ES KOPI ±Rp17.000', 96, 46, HIJAU)), { at: 'tujuh belas', kw: 'ES KOPI *±Rp17.000*' }])] },
          C('r-57', [...at('anjlok', lab('A', 'HARGA BIJI KOPI ↓', 121, 82, MERAH2)), { at: 'anjlok', emote: 'juraganA', icon: 'sweat', dur: 1100 },
            { at: 'dipotong', tag: 'harunA', text: 'UPAH DIPOTONG', color: MERAH2 }, { at: 'dipotong', kw: 'UPAH *DIPOTONG*' }]),
          C('r-58', [{ at: 'kerja', exit: 'juraganA', to: 'right' }, { at: 'kerja', emote: 'harunA', icon: 'question', dur: 1300 }, { at: 'kerja', kw: 'BENSIN MURAH, *KERJA HILANG*', keepKw: true }], { punch: true }),
          { together: [{ focus: 'both' }, { wait: 800 }] },
        ], { clock: 'BULAN 2' }),
      ],
    },
    // ================= BAB 7 — TABUNGAN UMRAH =================
    {
      id: 'bab-7', title: 'Tabungan umrah Bu Sri',
      scenes: [
        hub('r-59', 'r-59s', 'rumah', 'CELENGAN *UMRAH*', 'MIMPI *UMRAH*'),
        dekat((dx, s) => [
          { sprite: 'jendela_malam', x: 46 + dx, y: 64, depth: 2 }, { id: s + 'brosur', sprite: 'brosur_umrah', x: 124 + dx, y: 64, scale: 1.2, depth: 2 },
          { sprite: 'foto_keluarga', x: 150 + dx, y: 52, depth: 2 },
          { sprite: 'cahaya_lampu', x: 96 + dx, y: 98, scale: 1.2, depth: 30 }, { sprite: 'lampu_gantung', x: 96 + dx, y: 46, depth: 31 },
          { sprite: 'table', x: 100 + dx, y: 102, depth: 8 },
          { id: s + 'celengan', sprite: 'celengan', x: 100 + dx, y: 92, scale: 1.3, depth: 9 },
          { id: s + 'surat', sprite: 'surat', x: 140 + dx, y: 84, scale: 0.8, depth: 12, hidden: true },
        ], (dx, k) => [
          { id: 'sri' + k, sprite: 'sri', x: 80 + dx, y: 101, tag: 'BU SRI', tagColor: '#257179' },
          { id: 'dina' + k, sprite: 'dina', x: 150 + dx, y: 101, face: 'left', tag: 'DINA', tagColor: NAVY, hidden: true },
        ], [
          C('r-60', [{ at: 'menabung', glow: 'Acelengan', times: 2 }, { at: 'menabung', glow: 'Bcelengan', times: 2 }, ...at('sepuluh', lab('AB', 'TABUNGAN 10 TAHUN', 100, 74)), { at: 'umrah', kw: 'TABUNGAN *10 TAHUN*' }]),
          C('r-61', [{ at: 'biaya', glow: 'Abrosur', times: 2 }, { at: 'biaya', glow: 'Bbrosur', times: 2 }, ...at('asing', lab('AB', 'BIAYA = MATA UANG ASING', 124, 46, '#5d606b')), { at: 'asing', kw: 'DIBAYAR *MATA UANG ASING*' }]),
          // --- Rp30.000 ---
          { together: [{ focus: 'right' }, C('r-62', [...at('melonjak', lab('B', 'BIAYA ×2', 124, 56, MERAH2)), { at: 'melonjak', shake: 250 }, { at: 'dua kali', kw: 'BIAYA *×2*' }])] },
          C('r-63', [...at('setengah', lab('B', 'BARU SETENGAH JALAN', 100, 64, MERAH2)), { at: 'setengah', emote: 'sriB', icon: 'sweat', dur: 1500 }, { at: 'setengah', kw: 'TINGGAL *SETENGAH JALAN*' }]),
          // --- Rp7.000 ---
          { together: [{ focus: 'left' }, C('r-64', [...at('cukup', lab('A', 'CUKUP!', 100, 64, HIJAU)), { at: 'cukup', jump: 'sriA', times: 2, height: 5 }, { at: 'menangis', emote: 'sriA', icon: 'heart', dur: 1300 },
            { at: 'cukup', sticker: 'party', at_: L }, { at: 'cukup', kw: 'AKHIRNYA *CUKUP!*' }])] },
          C('r-65', [{ at: 'esok', show: 'dinaA' }, { at: 'esok', pop: 'Asurat' }, { at: 'phk', stamp: 'PHK', at_: L }, { at: 'phk', emote: 'sriA', icon: 'exclaim', dur: 1000 }, { at: 'phk', kw: 'DINA *DI-PHK*' }]),
          { together: [{ tint: 0.35, color: GELAP, side: 'left', dur: 900 }, C('r-66', [{ at: 0, clearLabels: true }, ...at('umrah', lab('A', 'UMRAH DITUNDA', 100, 64, MERAH2)),
            { at: 'menyambung', emote: 'sriA', icon: 'sweat', dur: 1500 }, { at: 'menyambung', kw: 'UMRAH *DITUNDA*', keepKw: true }], { punch: true })] },
          { together: [{ focus: 'both' }, { wait: 800 }] },
        ], { sky: 'rumah', c: { x: 100, y: 74, zoom: VERT ? 1.2 : 1.3 }, clock: 'BULAN 4' }),
      ],
    },
    // ================= BAB 8 — BULAN KE-6 =================
    {
      id: 'bab-8', title: 'Bulan ke-6',
      scenes: [
        { transition: 'clouds', sky: 'map', map: KOTA, split: true, focus: 'both',
          tags: ['Rp 7.000 / USD', 'Rp 30.000 / USD'], tagColors: [HIJAU, MERAH], clock: 'BULAN 4', note: 'Simulasi · ilustrasi',
          camera: { x: 100, y: 54, zoom: 1.35 }, cameraB: { x: R(100), y: 54, zoom: 1.35 },
          props: [...kotaProps(0, 'A'), ...kotaProps(192, 'B')], actors: [],
          walkers: { n: [12, 12], sprites: ['warga', 'warga2', 'girl', 'boy', 'kid'] },
          steps: [
            ...buka('r-67', 'r-67s', [{ at: 0, clock: 'BULAN', from: 4, to: 6, dur: 1400 }, { at: 'berlalu', kw: '*6 BULAN* KEMUDIAN' }],
              [{ at: 0, clock: 'BULAN', from: 1, to: 6, dur: 1800 }, { at: 'bertahan', kw: 'SIAPA *BERTAHAN?*' }]),
            // --- Rp30.000 ---
            { together: [{ focus: 'right' }, C('r-68', [{ at: 'bensin', label: 'BENSIN ↑', x: R(146), y: 58, bg: MERAH2, size: 15, dur: 0 },
              { at: 'tempe', label: 'TEMPE ↑', x: R(62), y: 62, bg: MERAH2, size: 15, dur: 0 }, { at: 'cicilan', label: 'CICILAN ↑', x: R(40), y: 24, bg: MERAH2, size: 15, dur: 0 },
              { at: 'merayap', kw: 'SEMUA *NAIK*' }])] },
            { together: [{ tint: 0.3, color: '#3b2a1a', side: 'right', dur: 1000 }, C('r-69', [{ at: 'runtuh', kw: 'DAYA BELI *RUNTUH*' },
              { at: 'dolar', label: 'DIBAYAR DOLAR ✓', x: R(168), y: 80, bg: HIJAU, size: 13, dur: 0 }])] },
            // --- Rp7.000 ---
            { together: [{ focus: 'left' }, C('r-70', [{ at: 'murah', label: 'BARANG MURAH', x: 96, y: 28, bg: HIJAU, size: 15, dur: 0 },
              { at: 'lowongan', label: 'LOWONGAN ✗', x: 162, y: 20, bg: MERAH2, size: 15, dur: 0 }, { at: 'menyempit', kw: 'LOWONGAN *MENYEMPIT*' }])] },
            C('r-71', [{ at: 'kehilangan', label: 'DINA MASIH MENCARI KERJA', x: 44, y: 24, bg: '#5d606b', size: 13, dur: 0 }, { at: 'pulih', kw: 'BELUM *PULIH*' }]),
            { together: [{ focus: 'both' }, C('r-72', [{ at: 'luka', kw: 'DUA INDONESIA, *DUA LUKA*', keepKw: true }], { punch: true })] },
          ],
        },
      ],
    },
    // ================= BAB 9 — KEMBALI KE MEJA MAKAN =================
    {
      id: 'bab-9', title: 'Kembali ke meja makan',
      scenes: [
        { ...hub('r-73', 'r-73s', 'rumah', 'KEMBALI KE *MEJA MAKAN*', 'KAMU *PILIH MANA?*'), clock: 'BULAN 6 · MALAM' },
        {
          transition: 'clouds', sky: 'rumah', split: true, focus: 'both',
          tags: ['Rp 7.000 / USD', 'Rp 30.000 / USD'], tagColors: [HIJAU, MERAH], clock: 'BULAN 6 · MALAM', note: 'Simulasi · ilustrasi',
          camera: tutup, cameraB: { ...tutup, x: R(tutup.x) },
          props: [...ruang(0, 'A', 'murah'), ...ruang(192, 'B', 'mahal')],
          actors: [...keluarga(0, 'A'), ...keluarga(192, 'B')],
          steps: [
            { together: [{ tint: 0.25, color: GELAP, side: 'left', dur: 600 }, { tint: 0.32, color: GELAP, side: 'right', dur: 600 },
              C('r-74', [{ at: 'menatap', glow: 'harunA', times: 2 }, { at: 'menatap', glow: 'harunB', times: 2 }])] },
            C('r-75', [{ at: 0, dialog: 'harunA', text: 'Terlalu kuat sakit. Terlalu lemah juga sakit.', dur: 300 }, { at: 'lemah', kw: 'KUAT SAKIT · LEMAH *SAKIT*' }]),
            C('r-76', [{ at: 0, dialog: 'harunA', text: 'Yang kami butuhkan, harga yang tidak naik-turun.', dur: 300 }, { at: 'turun', kw: 'HARGA *STABIL*' }]),
            C('r-77', [{ at: 0, dialog: 'harunA', text: 'Dan kerja yang pasti.', dur: 300 }, { at: 'pasti', emote: 'sriA', icon: 'heart', dur: 1000 }, { at: 'pasti', emote: 'sriB', icon: 'heart', dur: 1000 }]),
            { together: [{ tint: 0, color: GELAP, side: 'left', dur: 800 }, { tint: 0, color: GELAP, side: 'right', dur: 800 },
              C('r-78', [{ at: 'stabil', kw: 'RUPIAH SEHAT = *STABIL*', keepKw: true }], { punch: true })] },
            C('r-79', [{ at: 'pilih', label: 'Rp7.000?', x: 96, y: 52, bg: HIJAU, size: 14, dur: 0 }, { at: 'pilih', label: 'Rp30.000?', x: R(96), y: 52, bg: MERAH, size: 14, dur: 0 },
              { at: 'komentar', kw: 'TULIS DI *KOMENTAR*' }]),
            { wait: 1200 },
          ],
        },
      ],
    },
  ],
};
