// ============================================================
//  "ANDAIKAN SEMUA ORANG KAYA RAYA" — seri Andaikan, gaya peta (Kampung Sukamakmur)
//  Naskah: stories/semua-kaya.naskah.md. Cerita fiktif sepenuhnya; semua angka = ilustrasi.
//  Layar terbelah: kiri DUNIA BIASA, kanan DUNIA KAYA RAYA (kampung yang sama).
//  Tokoh fiktif: Pak Darto (tukang sampah), Bu Imah (gorengan), Dika (remaja), Bu Ratna (pegawai bank).
//  Semua kalimat belum bersuara: tampil sebagai [draf] dengan tempo perkiraan, VO dibuat setelah review.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 // bab 1 — hook
 "k-01": ["Satu gorengan: satu juta rupiah.", "Satu gorengan: satu juta rupiah."],
 "k-02": ["Pak Darto mendorong gerobak penuh uang.", "Pak Darto mendorong gerobak penuh uang."],
 "k-03": ["Tapi dia tetap tidak bisa membeli sarapan.", "Tapi dia tetap tidak bisa membeli sarapan."],
 "k-04": ["Kok bisa? Kita mundur setahun.", "Kok bisa? Kita mundur setahun."],
 "k-05": ["Kampung Sukamakmur. Pagi yang biasa.", "Kampung Sukamakmur. Pagi yang biasa."],
 "k-06": ["Lalu semua HP berbunyi bersamaan.", "Lalu semua ha pe berbunyi bersamaan."],
 "k-07": ["Saldo setiap warga: sepuluh miliar rupiah.", "Saldo setiap warga: sepuluh miliar rupiah."],
 "k-08": ["Kiri: dunia biasa. Kanan: dunia kaya raya.", "Kiri: dunia biasa. Kanan: dunia kaya raya."],
 "k-09": ["Andaikan semua orang kaya raya.", "Andaikan semua orang kaya raya."],
 // bab 2 — hari pertama
 "k-10": ["Hari pertama, warga berlari ke pasar.", "Hari pertama, warga berlari ke pasar."],
 "k-10s": ["Semua orang dapat Rp10 miliar. Apa yang terjadi di pasar?", "Semua orang dapat sepuluh miliar. Apa yang terjadi di pasar?"],
 "k-11": ["Di dunia kaya, semua orang memborong apa saja.", "Di dunia kaya, semua orang memborong apa saja."],
 "k-12": ["Dika membeli lima HP sekaligus.", "Dika membeli lima ha pe sekaligus."],
 "k-13": ["Siang hari, rak pasar sudah kosong.", "Siang hari, rak pasar sudah kosong."],
 "k-14": ["Di dunia biasa, pasar ramai seperti kemarin.", "Di dunia biasa, pasar ramai seperti kemarin."],
 "k-15": ["Hari pertama: dunia kaya jelas lebih bahagia.", "Hari pertama: dunia kaya jelas lebih bahagia."],
 // bab 3 — minggu pertama: sampah
 "k-16": ["Seminggu kemudian, Pak Darto bangun kesiangan.", "Seminggu kemudian, Pak Darto bangun kesiangan."],
 "k-16s": ["Kalau semua orang kaya, siapa yang mau angkut sampah?", "Kalau semua orang kaya, siapa yang mau angkut sampah?"],
 "k-17": ["\"Buat apa kerja? Aku kan miliarder.\"", "Buat apa kerja? Aku kan miliarder."],
 "k-18": ["Petani berhenti. Tukang roti menutup tokonya.", "Petani berhenti. Tukang roti menutup tokonya."],
 "k-19": ["Sampah menumpuk di setiap gang.", "Sampah menumpuk di setiap gang."],
 "k-20": ["Lalat datang. Baunya menyebar ke seluruh kampung.", "Lalat datang. Baunya menyebar ke seluruh kampung."],
 "k-21": ["Di dunia biasa, gerobak Pak Darto tetap jalan tiap pagi.", "Di dunia biasa, gerobak Pak Darto tetap jalan tiap pagi."],
 "k-22": ["Uang tidak bisa menyapu jalan sendiri.", "Uang tidak bisa menyapu jalan sendiri."],
 // bab 4 — bulan pertama: gorengan sejuta
 "k-23": ["Sebulan berlalu. Antrean mengular di warung Bu Imah.", "Sebulan berlalu. Antrean mengular di warung Bu Imah."],
 "k-23s": ["Gorengan seribu jadi satu juta. Kok bisa?", "Gorengan seribu jadi satu juta. Kok bisa?"],
 "k-24": ["Bu Imah menggoreng sendirian. Pembantunya berhenti.", "Bu Imah menggoreng sendirian. Pembantunya berhenti."],
 "k-25": ["Minyak goreng langka. Pabriknya sepi pekerja.", "Minyak goreng langka. Pabriknya sepi pekerja."],
 "k-26": ["Pembelinya banyak, gorengannya sedikit.", "Pembelinya banyak, gorengannya sedikit."],
 "k-27": ["Siapa berani bayar lebih, dia yang dapat.", "Siapa berani bayar lebih, dia yang dapat."],
 "k-28": ["Seribu. Sepuluh ribu. Seratus ribu.", "Seribu. Sepuluh ribu. Seratus ribu."],
 "k-29": ["Akhirnya, satu gorengan satu juta rupiah.", "Akhirnya, satu gorengan satu juta rupiah."],
 "k-30": ["Di dunia biasa, gorengan tetap seribu.", "Di dunia biasa, gorengan tetap seribu."],
 "k-31": ["Uang bertambah, barang tidak. Yang naik: harga.", "Uang bertambah, barang tidak. Yang naik: harga."],
 // bab 5 — bulan ketiga: uang cuma tiket
 "k-32": ["Bulan ketiga, Dika datang ke bank dengan wajah kesal.", "Bulan ketiga, Dika datang ke bank dengan wajah kesal."],
 "k-32s": ["Saldo Rp10 miliar, tapi tetap merasa miskin. Kenapa?", "Saldo sepuluh miliar, tapi tetap merasa miskin. Kenapa?"],
 "k-33": ["\"Saldo saya sepuluh miliar. Kenapa tetap kurang?\"", "Saldo saya sepuluh miliar. Kenapa tetap kurang?"],
 "k-34": ["Bu Ratna tersenyum. \"Uang itu cuma tiket.\"", "Bu Ratna tersenyum. Uang itu cuma tiket."],
 "k-35": ["\"Tiketnya kebanyakan, kursinya tetap sedikit.\"", "Tiketnya kebanyakan, kursinya tetap sedikit."],
 "k-36": ["\"Yang berharga itu barang dan kerja orang.\"", "Yang berharga itu barang dan kerja orang."],
 "k-37": ["Warga mulai barter. HP Dika ditukar tiga butir telur.", "Warga mulai barter. Ha pe Dika ditukar tiga butir telur."],
 "k-38": ["Di dunia biasa, uang masih dipercaya.", "Di dunia biasa, uang masih dipercaya."],
 "k-39": ["Kalau semua kaya, tak ada yang benar-benar kaya.", "Kalau semua kaya, tak ada yang benar-benar kaya."],
 // bab 6 — bulan keenam: uang jadi kertas
 "k-40": ["Enam bulan kemudian, uang ada di mana-mana.", "Enam bulan kemudian, uang ada di mana-mana."],
 "k-40s": ["Kalau uang tak ada harganya, dipakai untuk apa?", "Kalau uang tak ada harganya, dipakai untuk apa?"],
 "k-41": ["Anak-anak membuat layangan dari uang.", "Anak-anak membuat layangan dari uang."],
 "k-42": ["Bu Imah membungkus gorengan dengan lembaran uang.", "Bu Imah membungkus gorengan dengan lembaran uang."],
 "k-43": ["Gorengan kini seratus juta. Warga panik.", "Gorengan kini seratus juta. Warga panik."],
 "k-44": ["Mereka menawari Pak Darto satu miliar sehari.", "Mereka menawari Pak Darto satu miliar sehari."],
 "k-45": ["\"Satu miliar? Cuma cukup buat sepuluh gorengan.\"", "Satu miliar? Cuma cukup buat sepuluh gorengan."],
 "k-46": ["Di dunia biasa, upah Pak Darto cukup untuk makan sekeluarga.", "Di dunia biasa, upah Pak Darto cukup untuk makan sekeluarga."],
 "k-47": ["Uang yang terlalu banyak berubah jadi kertas biasa.", "Uang yang terlalu banyak berubah jadi kertas biasa."],
 // bab 7 — tahun pertama: bangkit lagi
 "k-48": ["Setahun berlalu. Pak Darto mengambil gerobaknya lagi.", "Setahun berlalu. Pak Darto mengambil gerobaknya lagi."],
 "k-48s": ["Kampung miliarder penuh sampah. Bagaimana bangkit?", "Kampung miliarder penuh sampah. Bagaimana bangkit?"],
 "k-49": ["Satu per satu warga ikut kerja bakti.", "Satu per satu warga ikut kerja bakti."],
 "k-50": ["Sawah ditanam lagi. Pabrik minyak buka lagi.", "Sawah ditanam lagi. Pabrik minyak buka lagi."],
 "k-51": ["Bu Imah menggoreng bersama tetangga.", "Bu Imah menggoreng bersama tetangga."],
 "k-52": ["Barang bertambah. Harga gorengan pelan-pelan turun.", "Barang bertambah. Harga gorengan pelan-pelan turun."],
 "k-53": ["Mereka sadar: yang membuat kaya adalah kerja bersama.", "Mereka sadar: yang membuat kaya adalah kerja bersama."],
 // bab 8 — penutup
 "k-54": ["Jadi, dunia mana yang lebih sejahtera?", "Jadi, dunia mana yang lebih sejahtera?"],
 "k-54s": ["Semua orang kaya raya. Dunia mana yang menang?", "Semua orang kaya raya. Dunia mana yang menang?"],
 "k-55": ["Dunia biasa menang. Uangnya sedikit, barangnya cukup.", "Dunia biasa menang. Uangnya sedikit, barangnya cukup."],
 "k-56": ["Kaya itu bukan banyak angka di saldo.", "Kaya itu bukan banyak angka di saldo."],
 "k-57": ["Tapi banyak yang bisa dikerjakan bersama.", "Tapi banyak yang bisa dikerjakan bersama."],
 "k-58": ["Dapat Rp10 miliar, kamu beli apa dulu? Tulis di komentar.", "Dapat sepuluh miliar, kamu beli apa dulu? Tulis di komentar."],
 "k-59": ["Tag temanmu yang bakal langsung borong HP!", "Tag temanmu yang bakal langsung borong ha pe!"],
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const TEAL = '#257179', UNGU = '#7a3b8f', HIJAU = '#38b764', MERAH = '#b13e53', MERAH2 = '#e43b44', NAVY = '#29366f', GELAP = '#1a1c2c', KUNING = '#ffcd75';
const TAGS = ['DUNIA BIASA', 'DUNIA KAYA RAYA'];
const NOTE = 'Cerita fiktif · angka ilustrasi';

// ---------- PETA KAMPUNG SUKAMAKMUR (tempat pusat tiap bab) ----------
const KAMPUNG = {
  river: [[0, 86], [22, 92], [40, 104], [48, 108]],
  roads: [[0, 56, 192, 56], [120, 0, 120, 108], [40, 24, 40, 56], [76, 56, 76, 100]],
  paths: [[86, 30, 112, 30], [130, 76, 182, 76], [56, 80, 100, 80]],
};
const T = { rumah: [34, 30], warung: [64, 72], pasar: [96, 38], bank: [154, 36], tps: [164, 86], sawah: [26, 72], roti: [96, 84] };
// tumpukan sampah di gang (muncul satu per satu di dunia kaya)
const SAMPAH = [[52, 58, 1], [88, 58, 2], [122, 40, 1], [122, 70, 2], [40, 44, 1], [150, 58, 3], [76, 90, 2], [104, 66, 1], [176, 58, 2], [24, 58, 3]];
function kampung(dx, s, o = {}) {
  const sp = (id, sprite, x, y, ex = {}) => ({ id: s + id, sprite, x: x + dx, y, ...ex });
  const kaya = s === 'B';
  return [
    ...[[34, 30], [14, 22], [60, 18], [10, 40]].map(([x, y], i) => ({ sprite: `rumah_top_${i % 4}`, x: x + dx, y })),
    ...[[140, 14], [178, 18], [178, 40], [138, 98], [180, 98]].map(([x, y], i) => ({ sprite: `rumah_top_${(i + 1) % 4}`, x: x + dx, y })),
    sp('warung', 'warung_top', 62, 76), sp('gg', 'gerobak_goreng_top', 64, 64, { depth: 5 }),
    sp('pasar', 'pasar_top', 96, 44), sp('bank', 'bank_top', 154, 44), sp('roti', 'roti_top', 96, 92), sp('tps', 'tps_top', 164, 92),
    ...[[18, 70], [18, 88]].map(([x, y], i) => sp('sw' + i, kaya && o.sawahKering ? 'sawah_top_kurus' : 'sawah_top_subur', x, y, { center: true, depth: 3.5 })),
    ...[[8, 104], [50, 14], [108, 14], [132, 30], [186, 72], [140, 84], [104, 104], [58, 100], [30, 104]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
    ...SAMPAH.map(([x, y, n], i) => sp('sp' + i, `sampah_top_${n}`, x, y, { depth: 3.6, hidden: !(kaya && i < (o.sampah || 0)) })),
    sp('grb', 'gerobak_top', 150, 62, { depth: 5 }),
  ];
}
// warga bekerja: dunia biasa selalu; dunia kaya tergantung kondisi (o.kerja = true -> bekerja lagi)
function kerja(o, s) {
  const jalan = s === 'A' || o.kerja, jobs = [], stay = [];
  if (jalan) {
    jobs.push({ n: 3, from: [26, 70], to: [92, 50], carry: 'karung_beras_kecil', carryScale: 0.5 });
    jobs.push({ n: 2, from: [150, 60], to: [164, 86], carry: 'gerobak_top', carryScale: 0.7 });
    stay.push({ n: 4, x: 18, y: 80, spread: 8 });
  }
  if (s === 'B' && o.antre) stay.push({ act: 'idle', n: 10, x: 70, y: 78, spread: 8 });
  if (s === 'B' && o.santai) [[100, 60], [130, 60], [60, 40]].forEach(([x, y]) => stay.push({ act: 'idle', n: 4, x, y, spread: 6 }));
  return { jobs, stay };
}
const WALK = ['warga', 'warga2', 'girl', 'boy', 'kid'];
const tokohPeta = (dx, k) => [{ id: 'darto' + k, sprite: 'darto', x: 146 + dx, y: 64, scale: 0.75, tag: 'PAK DARTO', tagColor: k === 'A' ? TEAL : UNGU }];
function peta(steps, { c = { x: 96, y: 56, zoom: 1.15 }, o = {}, transition = 'clouds', clock } = {}) {
  const kA = kerja(o, 'A'), kB = kerja(o, 'B');
  return { transition, sky: 'map', map: KAMPUNG, split: true, focus: 'both', tags: TAGS, tagColors: [TEAL, UNGU], clock, note: NOTE,
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...kampung(0, 'A', o), ...kampung(192, 'B', o)], actors: [...tokohPeta(0, 'A'), ...tokohPeta(192, 'B')],
    walkers: { n: [14, o.kerja ? 14 : 10], sprites: WALK, scale: 0.42, jobs: [kA.jobs, kB.jobs], stay: [kA.stay, kB.stay] }, steps };
}
// adegan dekat terbelah (tampak samping)
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 78, zoom: VERT ? 1.25 : 1.5 }, clock, sky = 'day', transition = 'zoom' } = {}) {
  return { transition, sky, split: true, focus: 'both', tags: TAGS, tagColors: [TEAL, UNGU], clock, note: NOTE,
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const buka = (idL, idS, cuesL = [], cuesS = cuesL) => [C(idL, cuesL, { only: 'long' }), C(idS, cuesS, { only: 'short' })];
const lab = (side, text, x, y, bg = NAVY, size = 13) => [...side].map(k => ({ label: text, x: x + (k === 'B' ? 192 : 0), y, bg, size, dur: 0 }));
const at = (w, arr) => arr.map(st => ({ at: w, ...st }));
// papan skor A (kiri, dunia biasa) vs B (kanan, dunia kaya)
const SKOR = [['Hari pertama', 'B'], ['Kampung bersih', 'A'], ['Harga gorengan', 'A'], ['Nilai uang', 'A'], ['Upah kerja', 'A'], ['Bangkit lagi', 'B']];
const skor = n => ({ at: 0.35, score: SKOR.slice(0, n), corner: true, dur: 1900 });
// harga gorengan di papan (x tengah papan)
const harga = (side, teks, bg = NAVY, x = 156) => lab(side, teks, x, 66, bg, 13);

// ---------- set tampak samping ----------
const darto = (dx, k, x = 60, ex = {}) => ({ id: 'darto' + k, sprite: 'darto', x: x + dx, y: 101, tag: 'PAK DARTO', tagColor: k === 'A' ? TEAL : UNGU, ...ex });
const imah = (dx, k, x = 72, ex = {}) => ({ id: 'imah' + k, sprite: 'imah', x: x + dx, y: 101, tag: 'BU IMAH', tagColor: k === 'A' ? TEAL : UNGU, ...ex });
const dika = (dx, k, x = 130, ex = {}) => ({ id: 'dika' + k, sprite: 'dika', x: x + dx, y: 101, tag: 'DIKA', tagColor: k === 'A' ? TEAL : UNGU, ...ex });
const ratna = (dx, k, x = 96, ex = {}) => ({ id: 'ratna' + k, sprite: 'ratna', x: x + dx, y: 101, tag: 'BU RATNA', tagColor: k === 'A' ? TEAL : UNGU, ...ex });
// warung gorengan Bu Imah
const warung = (dx, s, o = {}) => [
  { sprite: 'tree', x: 16 + dx }, { sprite: 'house', x: 186 + dx, scale: 0.8 },
  { sprite: 'warung', x: 88 + dx, y: 100, scale: 1.15, depth: 3 },
  { sprite: 'table', x: 92 + dx, y: 102, depth: 8 },
  { id: s + 'wajan', sprite: 'wajan', x: 84 + dx, y: 93, depth: 9 },
  { id: s + 'gor', sprite: 'gorengan', x: 102 + dx, y: 93, depth: 9 },
  { id: s + 'mny', sprite: 'jerigen', x: 60 + dx, y: 101, depth: 7 },
  { id: s + 'papan', sprite: 'papan_gorengan', x: 156 + dx, y: 101, depth: 4 },
  ...(o.sampah && s === 'B' ? [{ sprite: 'sampah_2', x: 30 + dx, y: 102, depth: 6 }, { sprite: 'sampah_1', x: 178 + dx, y: 102, depth: 6 }] : []),
  ...[0, 1, 2].map(i => ({ id: `${s}lalat${i}`, sprite: 'lalat', x: 26 + i * 6 + dx, y: 86 - i * 3, scale: 1.4, depth: 20, float: true, hidden: !(o.sampah && s === 'B') })),
];
const antre = (dx, s, n, x0 = 120) => [...Array(n)].map((_, i) => ({ id: `${s}q${i}`, sprite: ['warga', 'warga2', 'girl', 'boy', 'kid'][i % 5], x: x0 + i * 11 + dx, y: 102, face: 'left', hidden: s === 'A' && i > 1 }));
// gang dengan rumah & tumpukan sampah
const gang = (dx, s) => [
  { sprite: 'house', x: 40 + dx, scale: 1.1 }, { sprite: 'tree', x: 90 + dx }, { sprite: 'house', x: 150 + dx, scale: 0.95 },
  { sprite: 'fence', x: 112 + dx }, { sprite: 'bush', x: 186 + dx },
  ...[[30, 1], [70, 2], [118, 3], [176, 2]].map(([x, n], i) => ({ id: `${s}sm${i}`, sprite: `sampah_${n}`, x: x + dx, y: 102, depth: 6, hidden: true })),
  ...[0, 1, 2, 3, 4].map(i => ({ id: `${s}lalat${i}`, sprite: 'lalat', x: 60 + i * 14 + dx, y: 80 - (i % 2) * 6, scale: 1.4, depth: 20, float: true, hidden: true })),
  { id: s + 'grb', sprite: 'gerobak_sampah', x: 140 + dx, y: 102, depth: 8 },
];
// pasar: rak penuh -> kosong
const pasar = (dx, s) => [
  { sprite: 'tree', x: 14 + dx },
  ...[52, 100, 148].map((x, i) => ({ id: `${s}rak${i}`, sprite: 'rak_penuh', x: x + dx, y: 100, depth: 3 })),
  { id: s + 'hp', sprite: 'phone', x: 128 + dx, y: 74, scale: 1.3, depth: 14, hidden: true },
];
// bank Bu Ratna
const bank = (dx, s) => [
  { sprite: 'tree', x: 16 + dx }, { sprite: 'bank', x: 100 + dx, y: 100, depth: 2 },
  { sprite: 'loket_bank', x: 100 + dx, y: 102, depth: 8 },
  { id: s + 'telur', sprite: 'telur', x: 150 + dx, y: 88, scale: 1.3, depth: 14, hidden: true },
  { id: s + 'hp', sprite: 'phone', x: 136 + dx, y: 86, scale: 1.2, depth: 14, hidden: true },
];
// lapangan: layangan uang
const lapangan = (dx, s) => [
  { sprite: 'tree', x: 20 + dx }, { sprite: 'house', x: 176 + dx, scale: 0.85 }, { sprite: 'bush', x: 120 + dx },
  ...[0, 1, 2].map(i => ({ id: `${s}ly${i}`, sprite: s === 'B' ? 'layangan_uang' : 'kite', x: 60 + i * 34 + dx, y: 60 + (i % 2) * 6, scale: 1.2, depth: 12, float: true, hidden: true })),
  { id: s + 'grb', sprite: s === 'B' ? 'gerobak_uang' : 'gerobak_sampah', x: 150 + dx, y: 102, depth: 8 },
  { id: s + 'bks', sprite: 'bungkus_uang', x: 92 + dx, y: 76, scale: 1.4, depth: 14, hidden: true },
];

const STORY = {
  title: 'Andaikan Semua Orang Kaya Raya',
  audioDir: 'audio/semua-kaya',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Gorengan sejuta',
      scenes: [
        // kilas maju: dunia kaya, bulan 6 (satu layar)
        {
          sky: 'day', clock: 'BULAN 6', note: NOTE,
          camera: { x: 120, y: 74, zoom: VERT ? 1.3 : 1.6 },
          props: [...warung(0, 'B', { sampah: true }).map(p => ({ ...p, id: p.id && p.id.replace(/^B/, 'K') })),
            { id: 'Kgrb_u', sprite: 'gerobak_uang', x: 162, y: 102, depth: 8, hidden: true }],
          actors: [imah(0, 'K', 72, { tagColor: UNGU }), darto(0, 'K', 196, { face: 'left' })],
          steps: [
            { together: [{ sfx: 'notif', vol: 0.6 }, C('k-01', [{ at: 'gorengan', label: 'GORENGAN', x: 156, y: 54, bg: MERAH2, size: 16, dur: 0 },
              { at: 'satu juta', label: 'Rp1.000.000', x: 156, y: 68, bg: MERAH2, size: 15, dur: 0 }, { at: 'satu juta', shake: 250 },
              { at: 'satu juta', kw: '1 GORENGAN = *Rp1 JUTA*' }, { at: 'rupiah', sticker: 'shock', at_: [0.75, 0.3] }])] },
            { together: [{ camera: { x: 120, y: 80, zoom: VERT ? 1.4 : 1.8 }, dur: 1600 }, { enter: 'dartoK', from: 'right', to: 138 },
              C('k-02', [{ at: 'gerobak', pop: 'Kgrb_u' }, { at: 'uang', kw: 'GEROBAK *PENUH UANG*' }, { at: 'uang', sticker: 'money', at_: [0.3, 0.3] }])] },
            C('k-03', [{ at: 'tidak bisa', emote: 'dartoK', icon: 'sweat', dur: 1200 }, { at: 'sarapan', kw: 'TETAP *TIDAK BISA SARAPAN*' }, { at: 'sarapan', emote: 'imahK', icon: 'question', dur: 1000 }]),
            C('k-04', [{ at: 'mundur', clock: 'BULAN', from: 6, to: 0, dur: 1200 }, { at: 'mundur', mono: true }, { at: 'setahun', kw: 'KOK BISA? *MUNDUR*' }]),
            { mono: false },
          ],
        },
        // kembali ke hari biasa: peta kampung (dua sisi masih sama)
        { ...peta([
          { together: [{ camera: { x: 96, y: 56, zoom: 1 }, dur: 2400, ease: 'Cubic.easeOut' }, { camera: { x: R(96), y: 56, zoom: 1 }, side: 'right', dur: 2400, ease: 'Cubic.easeOut' },
            C('k-05', [{ at: 'sukamakmur', kw: 'KAMPUNG *SUKAMAKMUR*' }, { at: 'sukamakmur', label: 'KAMPUNG SUKAMAKMUR', x: 96, y: 10, bg: GELAP, size: 13, dur: 0 }, { at: 'sukamakmur', label: 'KAMPUNG SUKAMAKMUR', x: R(96), y: 10, bg: GELAP, size: 13, dur: 0 }])] },
          C('k-06', [{ at: 'hp', sfx: 'notif' }, { at: 'berbunyi', shake: 200 }, { at: 'berbunyi', kw: 'SEMUA HP *BERBUNYI*' }, { at: 'bersamaan', sfx: 'notif' },
            { at: 'berbunyi', emote: 'dartoA', icon: 'exclaim', dur: 900 }, { at: 'berbunyi', emote: 'dartoB', icon: 'exclaim', dur: 900 }]),
          { clearLabels: true },
          C('k-07', [{ at: 'saldo', label: 'SALDO: Rp10.000.000.000', x: R(96), y: 22, bg: UNGU, size: 15, dur: 0 }, { at: 'sepuluh', kw: 'SALDO *Rp10 MILIAR*' }, { at: 'sepuluh', sfx: 'kaching' },
            { at: 'miliar', crowd: 'goto', side: 'right', x: R(96), y: 50, spread: 16, frac: 0.6 }, { at: 'rupiah', sticker: 'money', at_: Rt }]),
          { clearLabels: true },
          C('k-08', [{ at: 'kiri', focus: 'left' }, { at: 'biasa', kw: 'KIRI: *DUNIA BIASA*' }, { at: 'kanan', focus: 'right' }, { at: 'kaya', kw: 'KANAN: *DUNIA KAYA RAYA*' }, { at: 'raya', sticker: 'party', at_: [0.5, 0.3] }]),
          { together: [{ focus: 'both' }, { title: 'ANDAIKAN', sub: 'Semua orang kaya raya', dark: true, size: 30, dur: 2200 }, C('k-09')] },
        ], { transition: 'zoom', c: { x: 34, y: 30, zoom: 2.6 }, clock: 'HARI 1' }) },
      ],
    },
    // ================= BAB 2 — HARI PERTAMA =================
    {
      id: 'hari-1', title: 'Hari pertama: borong!',
      scenes: [
        peta([...buka('k-10', 'k-10s', [...dua(0, cam('pasar', 2), 1400), { at: 'berlari', crowd: 'goto', side: 'right', x: R(96), y: 50, spread: 14, frac: 0.8, rush: 1.8 }, { at: 'pasar', kw: 'SERBU *PASAR*' }],
            [...dua(0, cam('pasar', 2), 1400), { at: 'dapat', label: 'SALDO Rp10 MILIAR', x: R(96), y: 22, bg: UNGU, size: 14, dur: 0 }, { at: 'pasar', crowd: 'goto', side: 'right', x: R(96), y: 50, spread: 14, frac: 0.8, rush: 1.8 }, { at: 'pasar', kw: 'APA YANG *TERJADI*?' }])],
          { c: cam('rumah', 1.8), clock: 'HARI 1' }),
        dekat(pasar, (dx, k) => [dika(dx, k, 128), { id: 'p1' + k, sprite: 'warga2', x: 76 + dx, y: 101 }, { id: 'p2' + k, sprite: 'warga', x: 168 + dx, y: 101, face: 'left' }], [
          { together: [{ focus: 'right' }, C('k-11', [{ at: 'memborong', kw: '*MEMBORONG* APA SAJA' }, { at: 'memborong', jump: 'p1B', times: 2 }, { at: 'apa saja', jump: 'p2B', times: 2 }, { at: 'apa saja', sfx: 'kaching' }])] },
          C('k-12', [{ at: 'lima', pop: 'Bhp' }, { at: 'lima', label: 'HP x5', x: R(128), y: 60, bg: UNGU, size: 15, dur: 0 }, { at: 'sekaligus', kw: 'DIKA: *5 HP* SEKALIGUS' }, { at: 'sekaligus', emote: 'dikaB', icon: 'heart', dur: 1000 }]),
          C('k-13', [{ at: 'rak', swapAll: 'Brak', to: 'rak_kosong', stagger: 300 }, { at: 'kosong', kw: 'RAK *KOSONG*' }, { at: 'kosong', emote: 'p2B', icon: 'question', dur: 1000 }]),
          { clearLabels: true },
          { together: [{ focus: 'left' }, C('k-14', [{ at: 'ramai', kw: 'PASAR *SEPERTI BIASA*' }, { at: 'kemarin', emote: 'dikaA', icon: 'note', dur: 1000 }])] },
          { together: [{ focus: 'both' }, C('k-15', [skor(1), { at: 'bahagia', kw: 'HARI 1: *KAYA LEBIH BAHAGIA*', keepKw: true }, { at: 'bahagia', sticker: 'party', at_: Rt }], { punch: true })] },
        ], { clock: 'HARI 1 · SIANG' }),
      ],
    },
    // ================= BAB 3 — MINGGU 1: SAMPAH =================
    {
      id: 'minggu-1', title: 'Siapa angkut sampah?',
      scenes: [
        peta([...buka('k-16', 'k-16s', [...dua(0, { x: 150, y: 62, zoom: 2.1 }, 1300), { at: 'kesiangan', emote: 'dartoB', icon: 'zzz', dur: 1400 }, { at: 'kesiangan', kw: 'BANGUN *KESIANGAN*' }],
            [...dua(0, { x: 150, y: 62, zoom: 2.1 }, 1300), { at: 'sampah', kw: 'SIAPA ANGKUT *SAMPAH*?' }, { at: 'sampah', emote: 'dartoB', icon: 'zzz', dur: 1400 }])],
          { c: { x: 96, y: 56, zoom: 1.4 }, o: { santai: true }, clock: 'MINGGU 1' }),
        dekat(gang, (dx, k) => [darto(dx, k, 112, { face: 'right' }), { id: 'w1' + k, sprite: 'warga', x: 64 + dx, y: 101 }], [
          { together: [{ focus: 'right' }, C('k-17', [{ at: 'kerja', say: 'dartoB', text: 'Buat apa kerja?' }, { at: 'miliarder', kw: '"AKU KAN *MILIARDER*"' }, { at: 'miliarder', sticker: 'cool', at_: Rt }])] },
          C('k-18', [{ at: 'petani', kw: 'PETANI *BERHENTI*' }, { at: 'roti', kw: 'TOKO ROTI *TUTUP*' }, { at: 'roti', stamp: 'TUTUP', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }]),
          C('k-19', [...[0, 1, 2, 3].map(i => ({ at: 0.2 + i * 0.15, pop: 'Bsm' + i })), { at: 'menumpuk', kw: 'SAMPAH *MENUMPUK*' }]),
          C('k-20', [...[0, 1, 2, 3, 4].map(i => ({ at: 0.1 + i * 0.08, show: 'Blalat' + i })), { at: 'bau', tint: 0.25, color: '#6d7a3a', side: 'right', dur: 800 }, { at: 'bau', emote: 'w1B', icon: 'sweat', dur: 1100 }, { at: 'menyebar', kw: 'BAU *SEKAMPUNG*' }]),
          { together: [{ focus: 'left' }, C('k-21', [{ at: 'gerobak', move: 'Agrb', to: 176, speed: 22 }, { at: 'gerobak', move: 'dartoA', to: 150, speed: 22 }, { at: 'pagi', kw: 'GEROBAK *TETAP JALAN*' }])] },
          { together: [{ focus: 'both' }, C('k-22', [skor(2), { at: 'menyapu', kw: 'UANG *TIDAK BISA MENYAPU*', keepKw: true }], { punch: true })] },
        ], { clock: 'MINGGU 1' }),
      ],
    },
    // ================= BAB 4 — BULAN 1: GORENGAN SEJUTA =================
    {
      id: 'bulan-1', title: 'Gorengan sejuta',
      scenes: [
        peta([...buka('k-23', 'k-23s', [...dua(0, cam('warung', 2.1), 1300), { at: 'antrean', kw: 'ANTREAN *MENGULAR*' }],
            [...dua(0, cam('warung', 2.1), 1300), { at: 'juta', label: 'Rp1.000 → Rp1.000.000?', x: R(64), y: 50, bg: MERAH2, size: 13, dur: 0 }, { at: 'bisa', kw: 'KOK *BISA*?' }])],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { antre: true, sampah: 5 }, clock: 'BULAN 1' }),
        dekat((dx, s) => warung(dx, s, { sampah: true }), (dx, k) => [imah(dx, k, 72), ...antre(dx, k, k === 'B' ? 5 : 2)], [
          ...harga('A', 'Rp1.000'), ...harga('B', 'Rp1.000'),
          { together: [{ focus: 'right' }, C('k-24', [{ at: 'menggoreng', glow: 'Bwajan', times: 3 }, { at: 'sendirian', kw: 'MENGGORENG *SENDIRIAN*' }, { at: 'berhenti', emote: 'imahB', icon: 'sweat', dur: 1100 }])] },
          C('k-25', [{ at: 'minyak', swap: 'Bmny', to: 'jerigen_kosong' }, { at: 'langka', kw: 'MINYAK *LANGKA*' }, { at: 'sepi', label: 'PABRIK SEPI', x: R(60), y: 64, bg: MERAH, size: 12, dur: 0 }]),
          C('k-26', [{ at: 'pembelinya', glow: 'Bq4', times: 2 }, { at: 'sedikit', kw: 'PEMBELI *BANYAK* · GORENGAN *SEDIKIT*' }]),
          C('k-27', [{ at: 'bayar lebih', jump: 'Bq3', times: 2 }, { at: 'dapat', kw: 'BAYAR LEBIH = *DAPAT*' }, { at: 'dapat', sfx: 'kaching' }]),
          { clearLabels: true }, ...harga('A', 'Rp1.000'),
          C('k-28', [{ at: 'seribu', label: 'Rp1.000', x: R(156), y: 66, bg: NAVY, size: 13, dur: 0 }, { at: 'seribu', sfx: 'tick' },
            { at: 'sepuluh', label: 'Rp10.000', x: R(156), y: 66, bg: MERAH, size: 13, dur: 0 }, { at: 'sepuluh', sfx: 'tick' },
            { at: 'seratus', label: 'Rp100.000', x: R(156), y: 66, bg: MERAH2, size: 13, dur: 0 }, { at: 'seratus', sfx: 'tick' }, { at: 'seratus', kw: 'HARGA *NAIK TERUS*' }]),
          C('k-29', [{ at: 'satu juta', label: 'Rp1.000.000', x: R(156), y: 66, bg: MERAH2, size: 14, dur: 0 }, { at: 'satu juta', shake: 300 }, { at: 'satu juta', stamp: 'Rp1 JUTA', at_: VERT ? [0.5, 0.7] : [0.75, 0.42] }, { at: 'rupiah', kw: '1 GORENGAN *Rp1 JUTA*' }]),
          { receipt: 'STRUK JAJAN DIKA (ilustrasi)', stagger: 280,
            lines: [['Saldo awal', 'Rp10.000.000.000'], ['5 HP (hari 1)', '-Rp9.000.000.000'], ['Gorengan x3', '-Rp3.000.000'], ['Sisa', 'Rp997.000.000']],
            total: ['CUKUP UNTUK', '±997 GORENGAN'], note: 'cerita fiktif · angka ilustrasi' },
          { together: [{ focus: 'left' }, C('k-30', [{ at: 'seribu', glow: 'Agor', times: 2 }, { at: 'seribu', kw: 'GORENGAN *TETAP Rp1.000*' }, { at: 'seribu', emote: 'imahA', icon: 'note', dur: 1000 }])] },
          { together: [{ focus: 'both' }, C('k-31', [skor(3), { at: 'barang', kw: 'UANG ↑ BARANG = → *HARGA ↑*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 1', c: { x: 112, y: 76, zoom: VERT ? 1.25 : 1.5 } }),
      ],
    },
    // ================= BAB 5 — BULAN 3: UANG CUMA TIKET =================
    {
      id: 'bulan-3', title: 'Uang cuma tiket',
      scenes: [
        peta([...buka('k-32', 'k-32s', [...dua(0, cam('bank', 2), 1300), { at: 'bank', kw: 'KE *BANK*' }],
            [...dua(0, cam('bank', 2), 1300), { at: 'miskin', kw: 'TETAP *MERASA MISKIN*?' }])],
          { c: { x: 96, y: 56, zoom: 1.4 }, o: { sampah: 7, sawahKering: true, santai: true }, clock: 'BULAN 3' }),
        dekat(bank, (dx, k) => [ratna(dx, k, 100, { y: 95 }), dika(dx, k, 136, { face: 'left' })], [
          { together: [{ focus: 'right' }, C('k-33', [{ at: 'saldo', label: 'SALDO Rp10 MILIAR', x: R(136), y: 62, bg: UNGU, size: 13, dur: 0 }, { at: 'kurang', emote: 'dikaB', icon: 'exclaim', dur: 1000 }, { at: 'kurang', kw: 'KENAPA *TETAP KURANG*?' }])] },
          C('k-34', [{ at: 'tersenyum', emote: 'ratnaB', icon: 'note', dur: 1000 }, { at: 'tiket', kw: 'UANG = *TIKET*' }, { at: 'tiket', sticker: 'smirk', at_: Rt }]),
          { clearLabels: true },
          C('k-35', [{ at: 'tiketnya', card: 'TIKET vs KURSI', items: ['Tiket (uang): 1.000x lipat', 'Kursi (barang): tetap', 'Hasil: harga tiket naik'], x: R(96), y: 22, stagger: 330, dur: 0 },
            { at: 'kursinya', kw: 'TIKET BANYAK, *KURSI SEDIKIT*' }]),
          { clear: true },
          C('k-36', [{ at: 'barang', kw: 'YANG BERHARGA: *BARANG & KERJA*' }, { at: 'kerja', glow: 'ratnaB', times: 2 }]),
          C('k-37', [{ at: 'barter', kw: 'MULAI *BARTER*' }, { at: 'hp', pop: 'Bhp' }, { at: 'telur', pop: 'Btelur' }, { at: 'tiga', label: 'HP = 3 TELUR', x: R(144), y: 70, bg: MERAH2, size: 13, dur: 0 }, { at: 'telur', sticker: 'dizzy', at_: Rt }]),
          { clearLabels: true },
          { together: [{ focus: 'left' }, C('k-38', [{ at: 'dipercaya', kw: 'UANG *MASIH DIPERCAYA*' }, { at: 'dipercaya', emote: 'dikaA', icon: 'heart', dur: 1000 }])] },
          { together: [{ focus: 'both' }, C('k-39', [skor(4), { at: 'benar-benar', kw: 'SEMUA KAYA = *TAK ADA YANG KAYA*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 3' }),
      ],
    },
    // ================= BAB 6 — BULAN 6: UANG JADI KERTAS =================
    {
      id: 'bulan-6', title: 'Uang jadi kertas',
      scenes: [
        peta([...buka('k-40', 'k-40s', [...dua(0, { x: 96, y: 60, zoom: 2 }, 1300), { at: 'mana-mana', kw: 'UANG *DI MANA-MANA*' }],
            [...dua(0, { x: 96, y: 60, zoom: 2 }, 1300), { at: 'apa', kw: 'DIPAKAI *UNTUK APA*?' }])],
          { c: { x: 96, y: 56, zoom: 1.3 }, o: { sampah: 10, sawahKering: true, santai: true }, clock: 'BULAN 6' }),
        dekat(lapangan, (dx, k) => [{ id: 'anak1' + k, sprite: 'kid', x: 56 + dx, y: 101 }, { id: 'anak2' + k, sprite: 'kid', x: 98 + dx, y: 101, face: 'left' }, imah(dx, k, 84, { hidden: true }), darto(dx, k, 128)], [
          { together: [{ focus: 'right' }, C('k-41', [...[0, 1, 2].map(i => ({ at: 0.2 + i * 0.12, pop: 'Bly' + i })), { at: 'uang', kw: 'LAYANGAN *DARI UANG*' }, { at: 'uang', jump: 'anak1B', times: 2 }])] },
          C('k-42', [{ at: 'membungkus', show: 'imahB' }, { at: 'membungkus', pop: 'Bbks' }, { at: 'lembaran', kw: 'BUNGKUS GORENGAN = *UANG*' }]),
          C('k-43', [{ at: 'seratus', label: 'GORENGAN Rp100.000.000', x: R(96), y: 22, bg: MERAH2, size: 14, dur: 0 }, { at: 'seratus', shake: 250 }, { at: 'panik', kw: 'GORENGAN *Rp100 JUTA*' }, { at: 'panik', emote: 'anak2B', icon: 'exclaim', dur: 900 }]),
          C('k-44', [{ at: 'menawari', label: 'UPAH Rp1 MILIAR/HARI', x: R(128), y: 56, bg: UNGU, size: 13, dur: 0 }, { at: 'miliar', kw: 'UPAH *Rp1 MILIAR* SEHARI' }]),
          C('k-45', [{ at: 'satu miliar', say: 'dartoB', text: 'Cuma 10 gorengan!' }, { at: 'sepuluh', kw: '= *10 GORENGAN*' }, { at: 'gorengan', sticker: 'sus', at_: Rt }]),
          { clearLabels: true },
          { together: [{ focus: 'left' }, C('k-46', [{ at: 'upah', label: 'UPAH CUKUP', x: 128, y: 56, bg: TEAL, size: 13, dur: 0 }, { at: 'sekeluarga', kw: 'UPAH *CUKUP MAKAN*' }, { at: 'sekeluarga', emote: 'dartoA', icon: 'heart', dur: 1000 }, { at: 'upah', pop: 'Aly0' }])] },
          { together: [{ focus: 'both' }, C('k-47', [skor(5), { at: 'kertas', kw: 'UANG BERLEBIH = *KERTAS BIASA*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 6' }),
      ],
    },
    // ================= BAB 7 — TAHUN 1: BANGKIT LAGI =================
    {
      id: 'tahun-1', title: 'Bangkit lagi',
      scenes: [
        peta([...buka('k-48', 'k-48s', [...dua(0, { x: 150, y: 62, zoom: 2.1 }, 1300), { at: 'gerobaknya', kw: 'AMBIL *GEROBAK* LAGI' }, { at: 'lagi', move: 'dartoB', to: R(164), speed: 14 }],
            [...dua(0, { x: 150, y: 62, zoom: 2.1 }, 1300), { at: 'bangkit', kw: 'BAGAIMANA *BANGKIT*?' }, { at: 'bangkit', move: 'dartoB', to: R(164), speed: 14 }]),
          C('k-49', [...dua(0, { x: 96, y: 56, zoom: 1.3 }, 1200), { at: 'kerja bakti', kw: 'KERJA *BAKTI*' },
            ...SAMPAH.map((_, i) => ({ at: 0.35 + i * 0.05, hide: 'Bsp' + i })), { at: 'bakti', crowd: 'goto', side: 'right', x: R(150), y: 60, spread: 20, frac: 0.6 }]),
          C('k-50', [{ at: 'sawah', swapAll: 'Bsw', to: 'sawah_top_subur', stagger: 300 }, { at: 'ditanam', kw: 'SAWAH *DITANAM LAGI*' }, { at: 'pabrik', crowd: 'roam', side: 'right' }]),
        ], { c: { x: 96, y: 56, zoom: 1.3 }, o: { sampah: 10, sawahKering: true, kerja: true }, clock: 'TAHUN 1' }),
        dekat((dx, s) => warung(dx, s), (dx, k) => [imah(dx, k, 72), ...antre(dx, k, 2), { id: 'tg' + k, sprite: 'warga2', x: 54 + dx, y: 101, hidden: k === 'B' }], [
          { together: [{ focus: 'right' }, ...harga('A', 'Rp1.000'), ...harga('B', 'Rp100.000.000', MERAH2),
            C('k-51', [{ at: 'bersama', show: 'tgB' }, { at: 'bersama', glow: 'Bwajan', times: 3 }, { at: 'tetangga', emote: 'tgB', icon: 'heart', dur: 1000 }, { at: 'tetangga', kw: 'MENGGORENG *BERSAMA*' }])] },
          C('k-52', [{ at: 'turun', label: 'Rp1.000.000', x: R(156), y: 66, bg: MERAH, size: 13, dur: 0 }, { at: 'pelan-pelan', label: 'Rp50.000', x: R(156), y: 66, bg: NAVY, size: 13, dur: 0 }, { at: 'pelan-pelan', sfx: 'tick' },
            { at: 'turun', kw: 'HARGA *PELAN-PELAN TURUN*' }]),
          { together: [{ focus: 'both' }, C('k-53', [skor(6), { at: 'kerja', kw: 'KAYA = *KERJA BERSAMA*', keepKw: true }, { at: 'bersama', sticker: 'party', at_: Rt }], { punch: true })] },
        ], { clock: 'TAHUN 1', c: { x: 112, y: 76, zoom: VERT ? 1.25 : 1.5 } }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'penutup', title: 'Dunia mana yang menang?',
      scenes: [
        { ...peta([
          ...buka('k-54', 'k-54s', [...dua(0, { x: 96, y: 56, zoom: 1.6 }, 2400), { at: 0.2, kw: 'MANA YANG *LEBIH SEJAHTERA*?' }, { at: 0.5, crowd: 'goto', x: 64, y: 66, spread: 14, frac: 0.5 }, { at: 0.5, crowd: 'goto', side: 'right', x: R(150), y: 62, spread: 14, frac: 0.5 }],
            [...dua(0, { x: 96, y: 56, zoom: 1.6 }, 2400), { at: 0.2, kw: 'DUNIA MANA *MENANG*?' }, { at: 0.5, crowd: 'goto', x: 64, y: 66, spread: 14, frac: 0.5 }, { at: 0.5, crowd: 'goto', side: 'right', x: R(150), y: 62, spread: 14, frac: 0.5 }]),
          { together: [{ clear: true }, { score: SKOR, head: 'SKOR AKHIR', dur: 1500 }] },
          C('k-55', [{ at: 'menang', kw: 'DUNIA BIASA *MENANG*' }, { at: 'cukup', glow: 'dartoA', times: 2 }]),
          C('k-56', [...dua(0, { x: 150, y: 62, zoom: 2.2 }, 1400), { at: 'saldo', kw: 'BUKAN *ANGKA DI SALDO*' }, { at: 'saldo', label: 'SALDO ≠ KAYA', x: R(150), y: 48, bg: UNGU, size: 13, dur: 0 }]),
          { together: [{ quote: 'Kaya itu bukan banyak angka di saldo, tapi banyak yang bisa dikerjakan bersama.', sub: 'ANDAIKAN SEMUA ORANG KAYA RAYA', dur: 2600 }, C('k-57')] },
          C('k-58', [{ at: 'beli', kw: 'KAMU *BELI APA DULU*?' }, { at: 'komentar', label: 'KOMEN', x: 76, y: 24, bg: HIJAU, dur: 0 }, { at: 'komentar', label: 'SUBSCRIBE', x: R(116), y: 24, bg: MERAH2, dur: 0 }], { only: 'long' }),
          C('k-59', [{ at: 'tag', kw: '*TAG* TEMANMU!' }, { at: 'hp', glow: 'dartoB', times: 2 }], { only: 'short' }),
          { wait: 1200 },
        ], { c: { x: 96, y: 56, zoom: 1.1 }, o: { kerja: true } }), clock: 'TAHUN 1' },
      ],
    },
  ],
};
