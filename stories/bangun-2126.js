// ============================================================
//  "ANDAIKAN KAMU TERBANGUN 100 TAHUN LAGI (2126)" — seri Andaikan, tokoh utama ANDI
//  Naskah: stories/bangun-2126.naskah.md (draf 7, ±6 menit, 8 bab: denda → 3 rencana → barang antik & HP menyala).
//  Kampung Sukajaya: malam 2026 → satu hari di 2126 → pagi 2026. Angka masa depan = ilustrasi, bukan ramalan.
//  Semua kalimat belum bersuara: tampil sebagai [draf] dengan tempo perkiraan, VO dibuat setelah review.
// ============================================================
const SP = {
 "v1-01": ["Tahun dua ribu seratus dua puluh enam. Andi ditangkap robot satpam.", "Tahun dua ribu seratus dua puluh enam. Andi ditangkap robot satpam."],
 "v1-02": ["Kesalahannya: tidur di bangku taman.", "Kesalahannya: tidur di bangku taman."],
 "v1-03": ["Dendanya satu koma sembilan juta rupiah.", "Dendanya satu koma sembilan juta rupiah."],
 "v1-04": ["Isi dompet Andi: delapan puluh lima ribu.", "Isi dompet Andi: delapan puluh lima ribu."],
 "v1-05": ["Robot itu memindai uangnya, lalu berbunyi.", "Robot itu memindai uangnya, lalu berbunyi."],
 "v1-06": ["\"Nolnya kurang banyak, Pak.\"", "Nolnya kurang banyak, Pak."],
 "v1-07": ["\"Bayar sebelum matahari terbenam. Atau Anda diserahkan ke museum.\"", "Bayar sebelum matahari terbenam. Atau Anda diserahkan ke museum."],
 "v1-08": ["Kok bisa? Kita mundur ke tadi malam.", "Kok bisa? Kita mundur ke tadi malam."],
 "v2-s": ["Gaji lima koma tujuh juta, tanggal dua puluh dompet tinggal delapan puluh lima ribu.", "Gaji lima koma tujuh juta, tanggal dua puluh dompet tinggal delapan puluh lima ribu."],
 "v2-01": ["Tahun dua ribu dua puluh enam. Tanggal dua puluh. Andi pulang kerja.", "Tahun dua ribu dua puluh enam. Tanggal dua puluh. Andi pulang kerja."],
 "v2-02": ["Gajinya lima koma tujuh juta. Sudah habis untuk kos, listrik, dan cicilan.", "Gajinya lima koma tujuh juta. Sudah habis untuk kos, listrik, dan cicilan."],
 "v2-03": ["Sisanya delapan puluh lima ribu, untuk sepuluh hari.", "Sisanya delapan puluh lima ribu, untuk sepuluh hari."],
 "v2-04": ["Di warung Bu Tini, gorengan masih seribu.", "Di warung Bu Tini, gorengan masih seribu."],
 "v2-05": ["Di sebelahnya, Mas Tejo membetulkan HP: konektor dibersihkan, baterai diganti.", "Di sebelahnya, Mas Tejo membetulkan ha pe: konektor dibersihkan, baterai diganti."],
 "v2-06": ["\"Sederhana, Ndi. Yang penting sabar,\" katanya.", "Sederhana, Ndi. Yang penting sabar, katanya."],
 "v2-07": ["TV warung menyala: rupiah melemah lagi.", "TV warung menyala: rupiah melemah lagi."],
 "v2-08": ["Mas Tejo nyeletuk, \"Seratus tahun lagi, gorengan bisa sejuta, Ndi.\"", "Mas Tejo nyeletuk, Seratus tahun lagi, gorengan bisa sejuta, Ndi."],
 "v2-09": ["Andi tertawa. Tapi pulang dengan perasaan takut.", "Andi tertawa. Tapi pulang dengan perasaan takut."],
 "v2-10": ["Malam itu dia mimpi buruk: satu dolar tujuh belas juta.", "Malam itu dia mimpi buruk: satu dolar tujuh belas juta."],
 "v2-11": ["Andi terbangun kaget… di bangku taman.", "Andi terbangun kaget... di bangku taman."],
 "v2-12": ["Andaikan kamu bangun seratus tahun lagi… ayo kita lihat!", "Andaikan kamu bangun seratus tahun lagi... ayo kita lihat!"],
 "v3-s": ["Bangun seratus tahun lagi, langsung kena denda. Satu dolar jadi berapa?", "Bangun seratus tahun lagi, langsung kena denda. Satu dolar jadi berapa?"],
 "v3-01": ["Rumah-rumah berganti menara hijau. Mobil melayang di atas kepala.", "Rumah-rumah berganti menara hijau. Mobil melayang di atas kepala."],
 "v3-02": ["Di papan kurs raksasa: satu dolar empat ratus tiga puluh ribu.", "Di papan kurs raksasa: satu dolar empat ratus tiga puluh ribu."],
 "v3-03": ["\"Fuh, bukan tujuh belas juta,\" gumam Andi. Tapi itu tetap dua puluh tiga kali lipat.", "Fuh, bukan tujuh belas juta, gumam Andi. Tapi itu tetap dua puluh tiga kali lipat."],
 "v3-04": ["Lalu robot satpam datang, dan menjatuhkan denda.", "Lalu robot satpam datang, dan menjatuhkan denda."],
 "v3-05": ["Satu koma sembilan juta. Batasnya matahari terbenam.", "Satu koma sembilan juta. Batasnya matahari terbenam."],
 "v3-06": ["Seorang siswi melihat semuanya. Namanya Kirana.", "Seorang siswi melihat semuanya. Namanya Kirana."],
 "v3-07": ["\"Bajumu aneh. Kamu dari mana?\" \"Dari sini. Kemarin.\"", "Bajumu aneh. Kamu dari mana? Dari sini. Kemarin."],
 "v3-08": ["Kirana tertawa. \"Ayo. Kubantu cari uangnya.\"", "Kirana tertawa. Ayo. Kubantu cari uangnya."],
 "v4-s": ["Bawa delapan puluh lima ribu ke tahun dua ribu seratus dua puluh enam. Dapat apa?", "Bawa delapan puluh lima ribu ke tahun dua ribu seratus dua puluh enam. Dapat apa?"],
 "v4-01": ["Rencana pertama: makan dulu, biar kuat berpikir.", "Rencana pertama: makan dulu, biar kuat berpikir."],
 "v4-02": ["Warung Bu Tini sudah jadi toko robot.", "Warung Bu Tini sudah jadi toko robot."],
 "v4-03": ["Gorengan sembilan belas ribu. Dulu seribu.", "Gorengan sembilan belas ribu. Dulu seribu."],
 "v4-04": ["Nasi bungkus dua ratus delapan puluh delapan ribu.", "Nasi bungkus dua ratus delapan puluh delapan ribu."],
 "v4-05": ["Delapan puluh lima ribu cuma cukup untuk empat gorengan.", "Delapan puluh lima ribu cuma cukup untuk empat gorengan."],
 "v4-06": ["Andi menyodorkan uangnya ke kasir robot.", "Andi menyodorkan uangnya ke kasir robot."],
 "v4-07": ["\"Nolnya kurang banyak, Pak.\"", "Nolnya kurang banyak, Pak."],
 "v4-08": ["Kirana membayarkan empat gorengan itu dengan wajahnya.", "Kirana membayarkan empat gorengan itu dengan wajahnya."],
 "v4-09": ["\"Uangmu tidak cukup,\" katanya. \"Kamu butuh kerja.\"", "Uangmu tidak cukup, katanya. Kamu butuh kerja."],
 "v5-s": ["Gaji seratus juta sebulan. Kaya, atau biasa saja?", "Gaji seratus juta sebulan. Kaya, atau biasa saja?"],
 "v5-01": ["Rencana kedua: cari kerja.", "Rencana kedua: cari kerja."],
 "v5-02": ["Di pasar, beras sekilo dua ratus enam puluh tiga ribu. Telur sekilo lima ratus tiga puluh delapan ribu.", "Di pasar, beras sekilo dua ratus enam puluh tiga ribu. Telur sekilo lima ratus tiga puluh delapan ribu."],
 "v5-03": ["Mi instan sebungkus enam puluh tujuh ribu. \"Itu makanan darurat anak kos!\"", "Mi instan sebungkus enam puluh tujuh ribu. Itu makanan darurat anak kos!"],
 "v5-04": ["Tapi tak ada lowongan. Mengangkut, menyapu, menjaga toko, semua dikerjakan robot.", "Tapi tak ada lowongan. Mengangkut, menyapu, menjaga toko, semua dikerjakan robot."],
 "v5-05": ["Kirana mengajak Andi ke bengkel ayahnya. Dulu, itu ruko Mas Tejo.", "Kirana mengajak Andi ke bengkel ayahnya. Dulu, itu ruko Mas Tejo."],
 "v5-06": ["Di meja, slip gaji ayah Kirana: seratus sepuluh juta sebulan.", "Di meja, slip gaji ayah Kirana: seratus sepuluh juta sebulan."],
 "v5-07": ["\"Bapak miliarder?\" Ayah Kirana tertawa. \"Habis untuk sewa, makan, dan listrik.\"", "Bapak miliarder? Ayah Kirana tertawa. Habis untuk sewa, makan, dan listrik."],
 "v5-08": ["Gaji Andi lima koma tujuh juta, setara seratus sepuluh juta di tahun ini. Angkanya membesar, isinya sama.", "Gaji Andi lima koma tujuh juta, setara seratus sepuluh juta di tahun ini. Angkanya membesar, isinya sama."],
 "v5-09": ["\"Maaf, Nak. Bengkel kami tidak butuh orang baru.\"", "Maaf, Nak. Bengkel kami tidak butuh orang baru."],
 "v6-s": ["Uang lima puluh ribu dan HP tahun dua ribu dua puluh enam. Laku berapa di tahun dua ribu seratus dua puluh enam?", "Uang lima puluh ribu dan ha pe tahun dua ribu dua puluh enam. Laku berapa di tahun dua ribu seratus dua puluh enam?"],
 "v6-01": ["Rencana ketiga datang dari Kirana. \"Barang zamanmu kan sudah antik.\"", "Rencana ketiga datang dari Kirana. Barang zamanmu kan sudah antik."],
 "v6-02": ["Mereka masuk ke toko barang antik. Pemiliknya kolektor tua berkacamata tebal.", "Mereka masuk ke toko barang antik. Pemiliknya kolektor tua berkacamata tebal."],
 "v6-03": ["Andi mengeluarkan uang lima puluh ribu. Kolektor menawar dua ratus lima puluh ribu.", "Andi mengeluarkan uang lima puluh ribu. Kolektor menawar dua ratus lima puluh ribu."],
 "v6-04": ["Andi tertawa getir. Tadi pagi, uang ini tak bisa membeli satu gorengan.", "Andi tertawa getir. Tadi pagi, uang ini tak bisa membeli satu gorengan."],
 "v6-05": ["Uang sisanya, dompet, dan kunci kos laku seratus lima puluh ribu.", "Uang sisanya, dompet, dan kunci kos laku seratus lima puluh ribu."],
 "v6-06": ["Masih kurang satu koma lima juta. Matahari mulai condong.", "Masih kurang satu koma lima juta. Matahari mulai condong."],
 "v6-07": ["Barang terakhir: HP Andi. Kolektor membolak-baliknya.", "Barang terakhir: ha pe Andi. Kolektor membolak-baliknya."],
 "v6-08": ["\"Mati, ya? Kalau mati, cuma pajangan. Lima puluh ribu.\"", "Mati, ya? Kalau mati, cuma pajangan. Lima puluh ribu."],
 "v6-09": ["Andi menatap HP-nya. Lalu teringat Mas Tejo tadi malam.", "Andi menatap ha pe-nya. Lalu teringat Mas Tejo tadi malam."],
 "v7-s": ["HP tahun dua ribu dua puluh enam yang masih menyala, di tahun dua ribu seratus dua puluh enam. Berapa harganya?", "ha pe tahun dua ribu dua puluh enam yang masih menyala, di tahun dua ribu seratus dua puluh enam. Berapa harganya?"],
 "v7-01": ["Konektor dibersihkan. Baterai diganti. \"Yang penting sabar.\"", "Konektor dibersihkan. Baterai diganti. Yang penting sabar."],
 "v7-02": ["Andi meminjam baterai mainan dari bengkel ayah Kirana, lalu menyambungnya pelan-pelan.", "Andi meminjam baterai mainan dari bengkel ayah Kirana, lalu menyambungnya pelan-pelan."],
 "v7-03": ["Satu menit. Dua menit. Layar HP berkedip… lalu menyala.", "Satu menit. Dua menit. Layar ha pe berkedip... lalu menyala."],
 "v7-04": ["Kolektor itu berdiri dari kursinya. \"HP dua ribu dua puluh enam yang masih hidup?\"", "Kolektor itu berdiri dari kursinya. ha pe dua ribu dua puluh enam yang masih hidup?"],
 "v7-05": ["\"Satu koma lima juta. Sekarang juga.\"", "Satu koma lima juta. Sekarang juga."],
 "v7-06": ["Di layar, muncul foto lama: Andi dan Mas Tejo di depan ruko. Kirana terdiam.", "Di layar, muncul foto lama: Andi dan Mas Tejo di depan ruko. Kirana terdiam."],
 "v7-07": ["Total satu koma sembilan juta. Andi berlari ke taman sebelum matahari terbenam.", "Total satu koma sembilan juta. Andi berlari ke taman sebelum matahari terbenam."],
 "v7-08": ["Robot satpam memindai uangnya. \"Nolnya… cukup.\"", "Robot satpam memindai uangnya. Nolnya... cukup."],
 "v8-s": ["Uang menyusut dimakan waktu. Lalu, apa yang tidak ikut menyusut?", "Uang menyusut dimakan waktu. Lalu, apa yang tidak ikut menyusut?"],
 "v8-01": ["Malam itu, Kirana menunjuk foto di HP Andi. \"Ini kakek buyutku.\"", "Malam itu, Kirana menunjuk foto di ha pe Andi. Ini kakek buyutku."],
 "v8-02": ["\"Uangnya dulu habis dimakan zaman. Tapi keahliannya diwariskan.\"", "Uangnya dulu habis dimakan zaman. Tapi keahliannya diwariskan."],
 "v8-03": ["\"Dulu servis HP. Sekarang servis robot.\"", "Dulu servis ha pe. Sekarang servis robot."],
 "v8-04": ["Andi tersenyum. Uangnya hanya laku sebagai barang antik.", "Andi tersenyum. Uangnya hanya laku sebagai barang antik."],
 "v8-05": ["Yang menyelamatkannya hari ini adalah trik kecil dari Mas Tejo.", "Yang menyelamatkannya hari ini adalah trik kecil dari Mas Tejo."],
 "v8-06": ["Andi tertidur di bangku bengkel… dan bangun di teras rumah, tahun dua ribu dua puluh enam.", "Andi tertidur di bangku bengkel... dan bangun di teras rumah, tahun dua ribu dua puluh enam."],
 "v8-07": ["Gorengan Bu Tini masih seribu. Andi membeli sepuluh, membaginya dengan Mas Tejo.", "Gorengan Bu Tini masih seribu. Andi membeli sepuluh, membaginya dengan Mas Tejo."],
 "v8-08": ["\"Mas, ajari aku servis HP, ya.\" Mas Tejo tertawa. \"Mimpi apa semalam?\"", "Mas, ajari aku servis ha pe, ya. Mas Tejo tertawa. Mimpi apa semalam?"],
 "v8-09": ["Harga akan terus naik. Siapkan dirimu, bukan cuma dompetmu.", "Harga akan terus naik. Siapkan dirimu, bukan cuma dompetmu."],
 "v8-10": ["Kalau bangun seratus tahun lagi, barang apa milikmu yang jadi antik? Tulis di komentar.", "Kalau bangun seratus tahun lagi, barang apa milikmu yang jadi antik? Tulis di komentar."],
};
const KW = {
"v1-01": "TAHUN *2126*",
"v1-02": "TIDUR DI *TAMAN*",
"v1-03": "DENDA *Rp1,9 JUTA*",
"v1-04": "DOMPET *Rp85.000*",
"v1-06": "*NOLNYA KURANG BANYAK*",
"v1-07": "BATAS: *MATAHARI TERBENAM*",
"v2-01": "*2026* · TANGGAL 20",
"v2-02": "GAJI *Rp5,7 JUTA* → *HABIS*",
"v2-03": "*Rp85.000* · *10 HARI*",
"v2-04": "GORENGAN *Rp1.000*",
"v2-05": "TRIK *MAS TEJO*",
"v2-07": "1 DOLAR = *Rp18.245*",
"v2-10": "MIMPI: *Rp17,7 JUTA*/DOLAR",
"v2-11": "*BANGKU TAMAN?*",
"v2-12": "#JUDUL",
"v3-01": "*2126*",
"v3-02": "1 DOLAR = *Rp430.000*",
"v3-03": "*23× LIPAT*",
"v3-05": "*Rp1,9 JUTA* · SORE",
"v3-06": "*KIRANA*",
"v4-01": "RENCANA *1*",
"v4-03": "GORENGAN *Rp1.000 → Rp19.000*",
"v4-04": "NASI BUNGKUS *Rp15.000 → Rp288.000*",
"v4-05": "Rp85.000 = *4 GORENGAN*",
"v4-07": "*NOLNYA KURANG BANYAK* (lagi)",
"v5-01": "RENCANA *2*",
"v5-02": "BERAS *Rp263 RB* · TELUR *Rp538 RB*",
"v5-03": "MI INSTAN *Rp67.000*",
"v5-04": "LOWONGAN: *ROBOT*",
"v5-05": "BENGKEL *ROBOT*",
"v5-06": "GAJI *Rp110 JUTA*",
"v5-08": "ANGKA NAIK · *ISI SAMA*",
"v6-01": "RENCANA *3*: *BARANG ANTIK*",
"v6-03": "Rp50.000 → *Rp250.000*",
"v6-05": "TOTAL *Rp400.000*",
"v6-06": "KURANG *Rp1,5 JUTA*",
"v6-08": "HP MATI = *Rp50.000*",
"v7-01": "TRIK *MAS TEJO*",
"v7-03": "*MENYALA!*",
"v7-05": "HP MENYALA = *Rp1,5 JUTA*",
"v7-06": "FOTO *2026*",
"v7-07": "*Rp1,9 JUTA* · ⏳",
"v7-08": "*NOLNYA CUKUP*",
"v8-01": "*KAKEK BUYUT*",
"v8-03": "SERVIS HP → *SERVIS ROBOT*",
"v8-04": "UANG = *BARANG ANTIK*",
"v8-05": "*KEAHLIAN*",
"v8-06": "KEMBALI *2026*",
"v8-09": "#KUTIPAN"
};
// kalimat narasi: kata kunci dari naskah otomatis muncul di tengah kalimat (kecuali sudah ada cue kw)
const C = (id, cues = [], extra = {}) => {
  const k = KW[id] && !KW[id].startsWith('#') && !cues.some(c => 'kw' in c) ? [{ at: 0.45, kw: KW[id] }] : [];
  return { caption: SP[id][0], vo: id, speak: SP[id][1], cues: [...k, ...cues], ...extra };
};
const SHORT = id => C(id, [], { only: 'short' });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const L = [0.28, 0.3], Rt = [0.74, 0.3], MID = [0.5, 0.3];
const UNGU = '#7a3b8f', TEAL = '#257179', CYAN = '#4fe3f0', MERAH = '#e43b44', NAVY = '#29366f', GELAP = '#1a1c2c', HIJAU = '#38b764', OREN = '#ef7d57';
const NOTE26 = 'Cerita fiktif · harga 2026: Bapanas & warung umum';
const NOTE126 = 'Ilustrasi: harga ±19× (3%/thn) · bukan ramalan';

// ---------- PETA KAMPUNG SUKAJAYA (tempat pusat) ----------
const KAMPUNG = {
  river: [[0, 88], [22, 94], [40, 104], [48, 108]],
  roads: [[0, 56, 192, 56], [120, 0, 120, 108], [40, 22, 40, 56], [76, 56, 76, 100]],
  paths: [[86, 30, 112, 30], [130, 76, 182, 76], [56, 82, 108, 82]],
};
const T = { kos: [30, 34], warung: [62, 70], ruko: [100, 70], pasar: [96, 38], taman: [156, 38], bengkel: [100, 70] };
const RUMAH = [[30, 34], [12, 22], [60, 18], [10, 42], [140, 14], [178, 18], [178, 92], [140, 94], [150, 72], [180, 70]];
function kampung(era) {
  const baru = era === 2126;
  return [
    ...RUMAH.map(([x, y], i) => ({ id: 'rm' + i, sprite: baru ? (i % 3 ? 't26_menara_top' : 't26_menara_top_b') : `rumah_top_${i % 4}`, x, y })),
    { id: 'wr', sprite: baru ? 't26_toko_top' : 'warung_top', x: 62, y: 76 },
    { id: 'rk', sprite: baru ? 't26_bengkel_top' : 'bengkel_top', x: 100, y: 76 },
    { id: 'ps', sprite: baru ? 't26_menara_top_b' : 'pasar_top', x: 96, y: 44 },
    { id: 'tm', sprite: baru ? 't26_taman_top' : 'pohon_top', x: 156, y: 44, ...(baru ? { center: true, depth: 3.4 } : {}) },
    ...[[8, 104], [52, 100], [108, 14], [132, 30], [186, 46], [104, 104], [26, 104], [160, 104]].map(([x, y]) => ({ sprite: 'pohon_top', x, y })),
    // mobil melayang (2126): muncul & bergerak di atas jalan
    ...[[-10, 52], [202, 60], [116, -8]].map(([x, y], i) => ({ id: 'mb' + i, sprite: 't26_mobil_top', x, y, depth: 9, hidden: !baru })),
  ];
}
function peta(era, steps, { c = { x: 96, y: 54, zoom: 1.15 }, clock, andi = 'kos', malam = false, transition = 'clouds' } = {}) {
  const baru = era === 2126;
  return { transition, sky: 'map', map: KAMPUNG, clock, note: baru ? NOTE126 : NOTE26, camera: c, props: kampung(era),
    actors: andi ? [{ id: 'andiP', sprite: 'andi', x: T[andi][0], y: T[andi][1] + 8, scale: 0.75, tag: 'ANDI', tagColor: UNGU }] : [],
    walkers: { n: malam ? 6 : 14, sprites: baru ? ['warga26', 'warga26b', 'anak26'] : ['warga', 'warga2', 'girl', 'boy', 'kid'], scale: 0.42 },
    steps: [...(malam ? [{ tint: 0.45, color: '#0b0f2a', dur: 10 }] : []), ...(baru ? [{ together: [{ move: 'mb0', to: 210, speed: 26 }, { move: 'mb1', to: -20, speed: 22 }] }] : []), ...steps] };
}
const ke = (place, z = 2.4, dur = 1600) => ({ camera: { x: T[place][0], y: T[place][1], zoom: z }, dur });
const lab = (text, x, y, bg = NAVY, size = 14) => ({ label: text, x, y, bg, size, dur: 0 });
const at = (w, arr) => arr.map(st => ({ at: w, ...st }));
const andi = (x = 60, ex = {}) => ({ id: 'andi', name: 'Andi', sprite: 'andi', x, y: 101, tag: 'ANDI', tagColor: UNGU, ...ex });
const tejo = (x = 150, ex = {}) => ({ id: 'tejo', name: 'Mas Tejo', sprite: 'tejo', x, y: 101, tag: 'MAS TEJO', tagColor: OREN, ...ex });
const tini = (x = 72, ex = {}) => ({ id: 'tini', name: 'Bu Tini', sprite: 'tini', x, y: 101, tag: 'BU TINI', tagColor: MERAH, ...ex });
const kirana = (x = 130, ex = {}) => ({ id: 'kirana', name: 'Kirana', sprite: 'kirana', x, y: 101, tag: 'KIRANA', tagColor: TEAL, ...ex });
const ayah = (x = 96, ex = {}) => ({ id: 'ayah', name: 'Ayah Kirana', sprite: 'ayahkir', x, y: 101, tag: 'AYAH KIRANA', tagColor: TEAL, ...ex });

// ---------- set tampak samping ----------
const warung26 = (o = {}) => [
  { sprite: 'tree', x: 14 }, { id: 'tv', sprite: 'tv_tabung', x: 40, y: 100, depth: 4 },
  { sprite: 'warung', x: 82, y: 100, scale: 1.15, depth: 3 }, { sprite: 'table', x: 86, y: 102, depth: 8 },
  { id: 'gor', sprite: 't26_gorengan', x: 82, y: 93, depth: 9 }, { id: 'esteh', sprite: 't26_es_teh', x: 96, y: 93, depth: 9 },
  { id: 'ruko', sprite: 'toko_hp', x: 162, y: 100, depth: 2 },
  ...(o.pintu ? [{ id: 'pintu', sprite: 'pintu_tutup', x: 162, y: 100, depth: 2.5, hidden: true }] : []),
];
const kamar = () => [
  { sprite: 'jendela_malam', x: 52, y: 62, depth: 2 }, { sprite: 'jam_dinding', x: 140, y: 40, depth: 2 }, { sprite: 'kalender', x: 120, y: 60, depth: 2 },
  { id: 'kasur', sprite: 't26_kasur', x: 100, y: 102, scale: 1.2, depth: 6 },
  { id: 'dompet', sprite: 't26_dompet', x: 74, y: 80, scale: 1.4, depth: 14, hidden: true },
  ...[['u50', 't26_uang50'], ['u20', 't26_uang20'], ['u10', 't26_uang10'], ['u5', 't26_uang5']].map(([id, sp], i) => ({ id, sprite: sp, x: 60 + i * 20, y: 60, scale: 1.3, depth: 15, hidden: true })),
];
const taman = () => [
  { sprite: 't26_menara_c', x: 24, y: 100, depth: 1 }, { sprite: 't26_menara_a', x: 176, y: 100, depth: 1 }, { sprite: 't26_menara_b', x: 146, y: 100, depth: 1.1 },
  { id: 'kurs', sprite: 't26_papan_kurs', x: 92, y: 100, depth: 2 },
  { sprite: 't26_pohon', x: 128, y: 101, depth: 3 }, { sprite: 't26_lampu', x: 52, y: 101, depth: 3 },
  { id: 'bangku', sprite: 't26_bangku', x: 70, y: 102, depth: 5 },
  { id: 'mobA', sprite: 't26_mobil_a', x: -30, y: 26, depth: 4, float: true }, { id: 'mobB', sprite: 't26_mobil_b', x: 230, y: 40, depth: 4, float: true },
];
const toko = () => [
  { sprite: 't26_menara_b', x: 18, y: 100, depth: 1 }, { sprite: 't26_toko', x: 92, y: 100, depth: 2 },
  { id: 'menu', sprite: 't26_papan_menu', x: 166, y: 88, depth: 3 },
  { sprite: 't26_meja_kasir', x: 118, y: 102, depth: 8 },
  { id: 'nb', sprite: 't26_nasi_bungkus', x: 128, y: 83, scale: 1.2, depth: 9, hidden: true },
  ...[0, 1, 2, 3].map(i => ({ id: 'gr' + i, sprite: 't26_gorengan', x: 108 + i * 5, y: 83 - (i % 2), depth: 9 + i * 0.01, hidden: true })),
];
const pasar = () => [
  { sprite: 't26_menara_a', x: 20, y: 100, depth: 1 }, { sprite: 't26_menara_c', x: 182, y: 100, depth: 1 },
  { sprite: 't26_lapak', x: 66, y: 100, depth: 3 }, { sprite: 't26_lapak', x: 130, y: 100, depth: 3 },
  { id: 'beras', sprite: 't26_karung_beras', x: 56, y: 80, depth: 5 }, { id: 'minyak', sprite: 't26_minyak', x: 76, y: 80, depth: 5 },
  { id: 'telur', sprite: 't26_telur', x: 122, y: 80, depth: 5 }, { id: 'mie', sprite: 't26_mie', x: 140, y: 80, depth: 5 },
];
const bengkel = (o = {}) => [
  { sprite: 't26_rak_suku', x: 28, y: 100, depth: 2 }, { id: 'foto', sprite: 't26_foto', x: 150, y: 56, scale: 1.2, depth: 2 },
  { sprite: 't26_meja_kerja', x: 96, y: 102, depth: 6 }, { id: 'robot', sprite: 't26_robot_rusak', x: 92, y: 82, depth: 7 },
  { id: 'printer', sprite: 't26_printer', x: 176, y: 100, depth: 4 },
  { id: 'nasi', sprite: 't26_nasi_printer', x: 104, y: 82, scale: 1.2, depth: 8, hidden: !o.makan },
  { id: 'cabai', sprite: 't26_cabai', x: 82, y: 82, scale: 1.2, depth: 8, hidden: true },
  { id: 'cobek', sprite: 't26_cobek', x: 90, y: 82, scale: 1.2, depth: 8, hidden: true },
];
const dekat = (props, actors, steps, { sky = 'day', c = { x: 100, y: 76, zoom: VERT ? 1.3 : 1.6 }, clock, note = NOTE126, transition = 'zoom' } = {}) =>
  ({ transition, sky, clock, note, camera: c, props, actors, steps });

const satpam = (x = 120, ex = {}) => ({ id: 'satpam', name: 'Robo-satpam', sprite: 'robosatpam', x, y: 101, face: 'left', tag: 'ROBO-SATPAM', tagColor: NAVY, ...ex });
const kolektor = (x = 118, ex = {}) => ({ id: 'kolektor', name: 'Kolektor', sprite: 'kolektor', x, y: 96, face: 'left', tag: 'KOLEKTOR', tagColor: '#8b5a2b', ...ex });
// toko barang antik
const antik = () => [
  { sprite: 't26_rak_antik', x: 48, y: 100, depth: 2 }, { sprite: 't26_rak_antik', x: 168, y: 100, depth: 2 }, { sprite: 't26_lampu_antik', x: 120, y: 60, depth: 3 },
  { sprite: 't26_meja_antik', x: 112, y: 102, depth: 8 },
  ...[['u50', 't26_uang50', 96], ['u20', 't26_uang20', 104], ['u10', 't26_uang10', 112], ['u5', 't26_uang5', 120]].map(([id, sp, x]) => ({ id, sprite: sp, x, y: 81, depth: 9, hidden: true })),
  { id: 'dompet', sprite: 't26_dompet', x: 128, y: 81, depth: 9, hidden: true }, { id: 'kunci', sprite: 't26_kunci', x: 136, y: 81, depth: 9, hidden: true },
  { id: 'hp', sprite: 't26_hp_mati', x: 112, y: 84, scale: 1.6, depth: 15, hidden: true },
  { id: 'baterai', sprite: 't26_baterai', x: 96, y: 82, scale: 1.4, depth: 15, hidden: true },
];
const STORY = {
  title: 'Andaikan Kamu Terbangun 100 Tahun Lagi',
  audioDir: 'audio/bangun-2126',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — DENDA (HOOK) =================
    { id: 'bab-1', title: 'Denda', scenes: [
      dekat(taman(), [andi(70), satpam(200)], [
        C('v1-01', [{ at: 0, enter: 'satpam', from: 'right', to: 100 }, { at: 'ditangkap', sfx: 'buzz' }, { at: 'ditangkap', emote: 'andi', icon: 'exclaim', dur: 900 }]),
        C('v1-02', [{ at: 'bangku', glow: 'bangku', times: 2 }]),
        C('v1-03', [{ at: 'satu koma', ...lab('DENDA Rp1.900.000', 100, 46, MERAH, 15) }, { at: 'satu koma', stamp: 'DENDA', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
        C('v1-04', [{ at: 'delapan', ...lab('DOMPET Rp85.000', 70, 62, NAVY, 14) }, { at: 'delapan', emote: 'andi', icon: 'sweat', dur: 1000 }]),
        C('v1-05', [{ at: 'memindai', glow: 'satpam', times: 3 }]),
        C('v1-06', [{ at: 0, say: 'satpam', text: 'Nolnya kurang banyak, Pak.' }]),
        C('v1-07', [{ at: 'matahari', ...lab('BATAS: MATAHARI TERBENAM', 100, 30, OREN, 14) }, { at: 'museum', sticker: 'shock', at_: Rt }]),
        { clearLabels: true },
        C('v1-08', [{ at: 'mundur', mono: true }, { at: 'mundur', clock: 'TAHUN', from: 2126, to: 2026, dur: 1300 }]),
        { mono: false },
      ], { clock: 'TAHUN 2126 · PAGI', c: { x: 88, y: 76, zoom: VERT ? 1.3 : 1.6 }, transition: undefined }),
    ] },
    // ================= BAB 2 — MALAM TERAKHIR DI 2026 =================
    { id: 'bab-2', title: 'Malam terakhir di 2026', scenes: [
      peta(2026, [SHORT('v2-s'), C('v2-01', [{ at: 0, camera: { x: 96, y: 54, zoom: 1 }, dur: 1600 }, { at: 'pulang', ...ke('warung', 2.4, 1800) }, { at: 'pulang', move: 'andiP', to: 58, speed: 12 }])],
        { clock: 'TAHUN 2026 · TANGGAL 20', malam: true, andi: 'kos' }),
      dekat([...warung26(), { id: 'hpT', sprite: 't26_hp_mati', x: 150, y: 80, scale: 1.2, depth: 14 }, { id: 'grb', sprite: 't26_gerobak_uang', x: 220, y: 102, depth: 9, scale: 1.2 }],
        [tini(70), andi(112, { face: 'left' }), tejo(146, { face: 'left' })], [
        C('v2-02', [{ at: 'gajinya', ...lab('GAJI Rp5,7 JUTA', 112, 40, HIJAU, 14) }, { at: 'habis', ...lab('KOS · LISTRIK · CICILAN', 112, 50, MERAH, 12) }, { at: 'cicilan', emote: 'andi', icon: 'sweat', dur: 900 }]),
        C('v2-03', [{ at: 'sisanya', clearLabels: true }, { at: 'delapan', ...lab('Rp85.000 · 10 HARI', 112, 46, NAVY, 14) }]),
        C('v2-04', [{ at: 'gorengan', ...lab('GORENGAN Rp1.000', 82, 66, HIJAU, 13) }, { at: 'seribu', emote: 'andi', icon: 'heart', dur: 800 }]),
        { clearLabels: true },
        C('v2-05', [{ at: 0, camera: { x: 146, y: 74, zoom: VERT ? 2 : 2.5 }, dur: 900 }, { at: 'konektor', glow: 'hpT', times: 2 }, { at: 'baterai', swap: 'hpT', to: 't26_hp_nyala' }, { at: 'diganti', sfx: 'success' }]),
        C('v2-06', [{ at: 0, say: 'tejo', text: 'Sederhana, Ndi. Yang penting sabar.' }]),
        C('v2-07', [{ at: 0, camera: { x: 52, y: 76, zoom: VERT ? 2 : 2.5 }, dur: 900 }, { at: 'tv', glow: 'tv', times: 2 }, { at: 'rupiah', ...lab('1 USD = Rp18.245', 40, 56, MERAH, 13) }]),
        { together: [{ clearLabels: true }, { camera: { x: 120, y: 76, zoom: VERT ? 1.5 : 1.9 }, dur: 900 }] },
        C('v2-08', [{ at: 0, say: 'tejo', text: '100 tahun lagi, gorengan sejuta!' }]),
        C('v2-09', [{ at: 'tertawa', jump: 'andi', times: 1, height: 3 }, { at: 'takut', emote: 'andi', icon: 'sweat', dur: 1200 }]),
        { together: [{ tint: 0.45, color: '#5a0a1a', dur: 500 }, { camera: { x: 120, y: 76, zoom: VERT ? 1.3 : 1.5 }, dur: 600 },
          C('v2-10', [{ at: 'mimpi', move: 'grb', to: 150, speed: 30 }, { at: 'satu dolar', ...lab('1 USD = Rp17.700.000', 110, 48, MERAH, 15) }, { at: 'tujuh belas', shake: 350 }, { at: 'juta', sticker: 'dizzy', at_: Rt }])] },
        C('v2-11', [{ at: 'kaget', emote: 'andi', icon: 'exclaim', dur: 900 }, { at: 'kaget', clearLabels: true }]),
      ], { sky: 'night', clock: 'TAHUN 2026 · MALAM', note: NOTE26, c: { x: 104, y: 74, zoom: VERT ? 1.3 : 1.6 } }),
      peta(2026, [
        { together: [
          { clock: 'TAHUN', from: 2026, to: 2126, dur: 2600 },
          { swapAll: 'rm', to: 't26_menara_top', stagger: 160 }, { swap: 'wr', to: 't26_toko_top', dur: 0 }, { swap: 'rk', to: 't26_bengkel_top', dur: 0 }, { swap: 'ps', to: 't26_menara_top_b', dur: 0 },
          { tint: 0, dur: 1600 },
          C('v2-12', [{ at: 'ayo', title: 'ANDAIKAN', sub: 'Kamu terbangun 100 tahun lagi', dark: true, size: 30, dur: 2200 }]),
        ] },
      ], { clock: 'TAHUN 2026', malam: true, andi: null, transition: 'cut' }),
    ] },
    // ================= BAB 3 — SELAMAT PAGI, 2126 =================
    { id: 'bab-3', title: 'Selamat pagi, 2126', scenes: [
      dekat(taman(), [andi(70), satpam(220), kirana(240, { face: 'left' })], [
        SHORT('v3-s'),
        C('v3-01', [{ at: 0, camera: { x: 100, y: 64, zoom: VERT ? 1.1 : 1.3 }, dur: 1400 }, { at: 'mobil', move: 'mobA', to: 230, speed: 40 }, { at: 'kepala', move: 'mobB', to: -40, speed: 34 }]),
        C('v3-02', [{ at: 0, camera: { x: 92, y: 70, zoom: VERT ? 1.5 : 2 }, dur: 900 }, { at: 'satu dolar', ...lab('1 USD = Rp430.000', 92, 58, '#0b0f2a', 15) }, { at: 'empat ratus', sfx: 'notif' }]),
        C('v3-03', [{ at: 'fuh', emote: 'andi', icon: 'heart', dur: 800 }, { at: 'dua puluh tiga', ...lab('23× LIPAT', 92, 70, MERAH, 15) }, { at: 'lipat', emote: 'andi', icon: 'sweat', dur: 900 }]),
        { together: [{ clearLabels: true }, { camera: { x: 92, y: 76, zoom: VERT ? 1.3 : 1.6 }, dur: 900 }] },
        C('v3-04', [{ at: 0, enter: 'satpam', from: 'right', to: 104 }, { at: 'denda', sfx: 'buzz' }]),
        C('v3-05', [{ at: 'satu koma', ...lab('DENDA Rp1,9 JUTA', 104, 46, MERAH, 15) }, { at: 'matahari', ...lab('⏳ SEBELUM MATAHARI TERBENAM', 104, 34, OREN, 13) }, { at: 'terbenam', move: 'satpam', to: 230, speed: 30 }]),
        { clearLabels: true },
        C('v3-06', [{ at: 0, enter: 'kirana', from: 'right', to: 112 }, { at: 'kirana', glow: 'kirana', times: 2 }]),
        C('v3-07', [{ at: 0, say: 'kirana', text: 'Bajumu aneh. Kamu dari mana?' }, { at: 'kemarin', say: 'andi', text: 'Dari sini. Kemarin.' }]),
        C('v3-08', [{ at: 'tertawa', jump: 'kirana', times: 2, height: 4 }, { at: 'kubantu', kw: '"AYO, *KUBANTU*"' }], { punch: true }),
      ], { clock: 'TAHUN 2126 · PAGI', c: { x: 92, y: 74, zoom: VERT ? 1.3 : 1.6 }, transition: 'clouds' }),
    ] },
    // ================= BAB 4 — RENCANA 1: BELANJA HEMAT =================
    { id: 'bab-4', title: 'Rencana 1: belanja hemat', scenes: [
      peta(2126, [SHORT('v4-s'), C('v4-01', [{ at: 0, ...ke('warung', 2.4, 1600) }]), C('v4-02', [{ at: 'toko', glow: 'wr', times: 2 }])], { clock: 'TAHUN 2126 · PAGI', andi: 'warung' }),
      dekat(toko(), [andi(76, { face: 'right' }), kirana(58, { face: 'right' }), { id: 'robo', name: 'Robo-kasir', sprite: 'robo', x: 126, y: 95, face: 'left' }], [
        C('v4-03', [{ at: 0, camera: { x: 160, y: 70, zoom: VERT ? 1.8 : 2.3 }, dur: 900 }, { at: 'gorengan', ...lab('GORENGAN Rp1.000 → Rp19.000', 166, 62, MERAH, 11) }, { at: 'gorengan', sfx: 'notif' }]),
        C('v4-04', [{ at: 'nasi', ...lab('NASI BUNGKUS Rp15.000 → Rp288.000', 166, 72, MERAH, 11) }, { at: 'delapan', sticker: 'shock', at_: L }]),
        { together: [{ clearLabels: true }, { camera: { x: 110, y: 76, zoom: VERT ? 1.3 : 1.7 }, dur: 900 }] },
        C('v4-05', [{ at: 'delapan', ...lab('Rp85.000', 100, 64, NAVY, 14) }, { at: 'empat', pop: 'gr0' }, { at: 'empat', pop: 'gr1' }, { at: 'gorengan', pop: 'gr2' }, { at: 'gorengan', pop: 'gr3' }]),
        C('v4-06', [{ at: 'menyodorkan', move: 'andi', to: 100, speed: 20 }]),
        C('v4-07', [{ at: 0, say: 'robo', text: 'Nolnya kurang banyak, Pak.' }, { at: 0, sfx: 'buzz' }]),
        { clearLabels: true },
        C('v4-08', [{ at: 'membayarkan', move: 'kirana', to: 86, speed: 22 }, { at: 'wajahnya', sfx: 'success' }, { at: 'wajahnya', kw: 'BAYAR PAKAI *WAJAH*' }]),
        C('v4-09', [{ at: 0, say: 'kirana', text: 'Kamu butuh kerja.' }], { punch: true }),
      ], { clock: 'TAHUN 2126 · PAGI', c: { x: 110, y: 76, zoom: VERT ? 1.3 : 1.7 } }),
    ] },
    // ================= BAB 5 — RENCANA 2: CARI KERJA =================
    { id: 'bab-5', title: 'Rencana 2: cari kerja', scenes: [
      peta(2126, [SHORT('v5-s'), C('v5-01', [{ at: 0, ...ke('pasar', 2.4, 1600) }])], { clock: 'TAHUN 2126 · SIANG', andi: 'pasar' }),
      dekat(pasar(), [andi(90), kirana(118, { face: 'left' }), { id: 'rb', name: 'Robot', sprite: 'robo', x: 160, y: 101, face: 'left' }], [
        C('v5-02', [{ at: 'beras', glow: 'beras', times: 2 }, { at: 'dua ratus', ...lab('BERAS Rp13.700 → Rp263.000', 56, 60, MERAH, 12) }, { at: 'telur', glow: 'telur', times: 2 }, { at: 'lima ratus', ...lab('TELUR Rp28.000 → Rp538.000', 128, 60, MERAH, 12) }]),
        C('v5-03', [{ at: 'mi', glow: 'mie', times: 2 }, { at: 'enam puluh', ...lab('MI INSTAN Rp3.500 → Rp67.000', 96, 46, MERAH, 12) }, { at: 'darurat', say: 'andi', text: 'Makanan darurat anak kos!' }]),
        { clearLabels: true },
        C('v5-04', [{ at: 'robot', move: 'rb', to: 120, speed: 16 }, { at: 'robot', ...lab('LOWONGAN: DIISI ROBOT', 120, 46, NAVY, 13) }, { at: 'robot', emote: 'andi', icon: 'sweat', dur: 1000 }]),
      ], { clock: 'TAHUN 2126 · SIANG' }),
      dekat(bengkel(), [andi(56), kirana(144, { face: 'left' }), ayah(108, { face: 'left' })], [
        C('v5-05', [{ at: 'bengkel', glow: 'robot', times: 2 }, { at: 'tejo', ...lab('DULU: RUKO MAS TEJO', 96, 36, OREN, 13) }]),
        { clearLabels: true },
        C('v5-06', [{ at: 'slip', ...lab('GAJI Rp110 JUTA/BULAN', 108, 46, HIJAU, 14) }, { at: 'sebulan', sfx: 'kaching' }]),
        C('v5-07', [{ at: 'miliarder', say: 'andi', text: 'Bapak miliarder?' }, { at: 'tertawa', jump: 'ayah', times: 1, height: 3 }]),
        C('v5-08', [{ at: 'lima koma', ...lab('2026: Rp5,7 JUTA = 2126: Rp110 JUTA', 100, 58, NAVY, 12) }]),
        C('v5-09', [{ at: 0, clearLabels: true }, { at: 'tidak butuh', emote: 'andi', icon: 'sweat', dur: 1100 }], { punch: true }),
      ], { sky: 'indoor', clock: 'TAHUN 2126 · SIANG', c: { x: 96, y: 74, zoom: VERT ? 1.3 : 1.6 }, transition: 'clouds' }),
    ] },
    // ================= BAB 6 — RENCANA 3: BARANG ANTIK =================
    { id: 'bab-6', title: 'Rencana 3: barang antik', scenes: [
      dekat(antik(), [andi(80, { face: 'right' }), kirana(56, { face: 'right' }), kolektor(130)], [
        SHORT('v6-s'),
        C('v6-01', [{ at: 0, say: 'kirana', text: 'Barang zamanmu kan sudah antik!' }]),
        C('v6-02', [{ at: 'kolektor', glow: 'kolektor', times: 2 }, { at: 'tebal', emote: 'kolektor', icon: 'note', dur: 900 }]),
        C('v6-03', [{ at: 'lima puluh', pop: 'u50' }, { at: 'menawar', ...lab('Rp50.000 → Rp250.000', 100, 56, HIJAU, 14) }, { at: 'dua ratus', sfx: 'kaching' }]),
        C('v6-04', [{ at: 'getir', emote: 'andi', icon: 'sweat', dur: 1000 }, { at: 'gorengan', kw: 'TADI PAGI: *TAK BISA BELI GORENGAN*' }]),
        { clearLabels: true },
        C('v6-05', [{ at: 'sisanya', pop: 'u20' }, { at: 'sisanya', pop: 'u10' }, { at: 'dompet', pop: 'dompet' }, { at: 'kunci', pop: 'kunci' }, { at: 'seratus', ...lab('TOTAL Rp400.000', 110, 56, HIJAU, 14) }]),
        C('v6-06', [{ at: 'kurang', ...lab('KURANG Rp1.500.000', 110, 44, MERAH, 14) }, { at: 'matahari', tint: 0.18, color: '#ef7d57', dur: 900 }]),
        { clearLabels: true },
        C('v6-07', [{ at: 'hp', pop: 'hp' }, { at: 'membolak', glow: 'hp', times: 2 }]),
        C('v6-08', [{ at: 0, say: 'kolektor', text: 'Mati, ya? Cuma pajangan.' }, { at: 'lima puluh', ...lab('HP MATI = Rp50.000', 112, 44, MERAH, 14) }]),
        C('v6-09', [{ at: 'teringat', emote: 'andi', icon: 'exclaim', dur: 1100 }, { at: 'tejo', kw: 'INGAT *MAS TEJO*' }], { punch: true }),
      ], { sky: 'indoor', clock: 'TAHUN 2126 · SORE', c: { x: 104, y: 74, zoom: VERT ? 1.3 : 1.6 }, transition: 'clouds' }),
    ] },
    // ================= BAB 7 — HP YANG MENYALA LAGI =================
    { id: 'bab-7', title: 'HP yang menyala lagi', scenes: [
      dekat(antik(), [andi(96, { face: 'right' }), kirana(70, { face: 'right' }), kolektor(130)], [
        SHORT('v7-s'),
        { together: [{ pop: 'hp' }, { camera: { x: 110, y: 72, zoom: VERT ? 2 : 2.5 }, dur: 900 }] },
        C('v7-01', [{ at: 0, mono: true }, { at: 0, ...lab('KILAS BALIK: MAS TEJO', 110, 40, OREN, 13) }, { at: 'sabar', mono: false }]),
        { clearLabels: true },
        C('v7-02', [{ at: 'baterai', pop: 'baterai' }, { at: 'pelan', move: 'baterai', to: 104, speed: 6 }]),
        C('v7-03', [{ at: 'satu menit', clock: 'MENIT', from: 1, to: 2, dur: 900 }, { at: 'berkedip', glow: 'hp', times: 3 }, { at: 'menyala', swap: 'hp', to: 't26_hp_nyala' }, { at: 'menyala', sfx: 'success' }, { at: 'menyala', sticker: 'party', at_: Rt }]),
        C('v7-04', [{ at: 'berdiri', jump: 'kolektor', times: 2, height: 4 }, { at: 'hidup', emote: 'kolektor', icon: 'exclaim', dur: 1000 }]),
        C('v7-05', [{ at: 0, say: 'kolektor', text: 'Satu koma lima juta!' }, { at: 'satu koma', ...lab('HP MENYALA = Rp1.500.000', 110, 40, HIJAU, 14) }, { at: 'juta', sfx: 'kaching' }]),
        { clearLabels: true },
        C('v7-06', [{ at: 'foto', camera: { x: 112, y: 66, zoom: VERT ? 3 : 3.6 }, dur: 900 }, { at: 'foto', glow: 'hp', times: 2 }, { at: 'terdiam', emote: 'kirana', icon: 'question', dur: 1200 }]),
      ], { sky: 'indoor', clock: 'TAHUN 2126 · SORE', c: { x: 104, y: 74, zoom: VERT ? 1.3 : 1.6 }, transition: 'cut' }),
      dekat(taman(), [andi(-20, { face: 'right' }), satpam(120, { face: 'left' })], [
        C('v7-07', [{ at: 0, ...lab('Rp400.000 + Rp1.500.000 = Rp1.900.000', 96, 30, HIJAU, 12) }, { at: 'berlari', move: 'andi', to: 96, speed: 40 }]),
        C('v7-08', [{ at: 'memindai', glow: 'satpam', times: 2 }, { at: 'cukup', say: 'satpam', text: 'Nolnya... cukup.' }, { at: 'cukup', sfx: 'success' }, { at: 'cukup', jump: 'andi', times: 2, height: 5 }], { punch: true }),
      ], { sky: 'sunset', clock: 'TAHUN 2126 · MATAHARI TERBENAM', c: { x: 96, y: 76, zoom: VERT ? 1.3 : 1.6 }, transition: 'cut' }),
    ] },
    // ================= BAB 8 — WARISAN YANG TIDAK MENYUSUT =================
    { id: 'bab-8', title: 'Warisan yang tidak menyusut', scenes: [
      dekat([...bengkel(), { id: 'hpB', sprite: 't26_hp_nyala', x: 120, y: 74, scale: 1.6, depth: 15 }], [andi(104, { face: 'right' }), kirana(136, { face: 'left' }), ayah(80, { face: 'right' })], [
        SHORT('v8-s'),
        C('v8-01', [{ at: 0, camera: { x: 120, y: 66, zoom: VERT ? 2 : 2.6 }, dur: 1200 }, { at: 'kakek', glow: 'hpB', times: 2 }]),
        C('v8-02', [{ at: 'zaman', emote: 'kirana', icon: 'sweat', dur: 1000 }]),
        C('v8-03', [{ at: 0, camera: { x: 96, y: 74, zoom: VERT ? 1.3 : 1.6 }, dur: 1100 }, { at: 'robot', glow: 'robot', times: 2 }]),
        C('v8-04', [{ at: 'antik', emote: 'andi', icon: 'note', dur: 1000 }]),
        C('v8-05', [{ at: 'mas tejo', glow: 'hpB', times: 2 }], { punch: true }),
        C('v8-06', [{ at: 'tertidur', emote: 'andi', icon: 'zzz', dur: 1400 }, { at: 'tertidur', tint: 0.5, color: '#0b0f2a', dur: 900 }]),
      ], { sky: 'indoor', clock: 'TAHUN 2126 · MALAM', c: { x: 110, y: 74, zoom: VERT ? 1.3 : 1.6 }, transition: 'clouds' }),
      peta(2126, [
        { together: [
          { clock: 'TAHUN', from: 2126, to: 2026, dur: 2400 },
          { swapAll: 'rm', to: 'rumah_top_1', stagger: 140 }, { swap: 'wr', to: 'warung_top', dur: 0 }, { swap: 'rk', to: 'bengkel_top', dur: 0 }, { swap: 'ps', to: 'pasar_top', dur: 0 },
          ...[0, 1, 2].map(i => ({ hide: 'mb' + i })),
          { wait: 2600 },
        ] },
      ], { clock: 'TAHUN 2126', andi: 'kos', transition: 'cut' }),
      dekat(warung26(), [tini(70), andi(112, { face: 'left' }), tejo(146, { face: 'left' })], [
        C('v8-07', [{ at: 'seribu', ...lab('GORENGAN Rp1.000', 82, 66, HIJAU, 14) }, { at: 'membaginya', move: 'andi', to: 132, speed: 18 }, { at: 'seribu', sticker: 'party', at_: L }]),
        C('v8-08', [{ at: 0, say: 'andi', text: 'Mas, ajari aku servis HP, ya.' }, { at: 'tertawa', say: 'tejo', text: 'Mimpi apa semalam?' }]),
        { clearLabels: true },
        { together: [{ quote: 'Harga akan terus naik. Siapkan dirimu, bukan cuma dompetmu.', sub: 'ANDAIKAN KAMU TERBANGUN 100 TAHUN LAGI', dur: 2600 }, C('v8-09')] },
        C('v8-10', [{ at: 'antik', kw: 'BARANGMU YANG *JADI ANTIK*?' }, { at: 'komentar', ...lab('KOMEN', 70, 30, HIJAU, 14) }, { at: 'komentar', ...lab('SUBSCRIBE', 130, 30, MERAH, 14) }]),
        { wait: 1200 },
      ], { clock: 'TAHUN 2026 · PAGI', note: NOTE26, transition: 'clouds' }),
    ] },
  ],
};
