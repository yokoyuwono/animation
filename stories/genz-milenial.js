// ============================================================
//  "ANDAIKAN GEN Z vs MILENIAL TERDAMPAR: 10 TAHUN" — seri Andaikan, gaya peta (dua pulau), per tahun
//  Naskah: stories/genz-milenial.naskah.md (draf 5). Tiap tahun: MASALAH -> respons A vs B -> konflik -> poin.
//  Semua terdampar umur 20. Kiri PULAU A (Gen Z, 2026), kanan PULAU B (milenial versi umur 20, 2010). Tokoh fiktif.
//  Kalimat y-* belum bersuara: tampil sebagai [draf] dengan tempo perkiraan, VO dibuat setelah review.
// ============================================================
// id → [teks layar, teks ucapan VO]  (z-: suara lama dipakai ulang · y-: kalimat baru, suara dibuat setelah review)
const SP = {
 "z-01": ["Bayangkan. Dua kapal karam di dua pulau kembar.", "Bayangkan. Dua kapal karam di dua pulau kembar."],
 "z-02": ["Pulau A: seratus Gen Z, umur dua puluh.", "Pulau A: seratus Gen Zi, umur dua puluh."],
 "z-03": ["Pulau B: seratus milenial, saat mereka juga umur dua puluh.", "Pulau Be: seratus milenial, saat mereka juga umur dua puluh."],
 "z-05": ["Sepuluh tahun kemudian, pulau mana yang lebih berhasil?", "Sepuluh tahun kemudian, pulau mana yang lebih berhasil?"],
 "z-06": ["Andaikan Gen Z dan milenial terdampar.", "Andaikan Gen Zi dan milenial terdampar."],
 "z-07s": ["Gen Z terdampar di pulau. Siapa yang bisa bikin api duluan?", "Gen Zi terdampar di pulau. Siapa yang bisa bikin api duluan?"],
 "z-10": ["Dari lima video yang dia ingat, cuma satu yang berhasil.", "Dari lima video yang dia ingat, cuma satu yang berhasil."],
 "z-12": ["Di pulau B, Bayu mengandalkan ingatan buku saku. Gosok kayu, gagal, ulang.", "Di pulau Be, Bayu mengandalkan ingatan buku saku. Gosok kayu, gagal, ulang."],
 "z-16": ["Di pulau A, banyak yang gelisah. Tangan masih refleks meraba saku.", "Di pulau A, banyak yang gelisah. Tangan masih refleks meraba saku."],
 "z-17": ["Di pulau B, Sinta dan kawan-kawan malah bikin permainan sendiri.", "Di pulau Be, Sinta dan kawan-kawan malah bikin permainan sendiri."],
 "z-18": ["Masa kecil mereka memang akrab dengan bosan, tanpa layar di tangan.", "Masa kecil mereka memang akrab dengan bosan, tanpa layar di tangan."],
 "z-20": ["Di pulau, kebal bosan ternyata keahlian bertahan hidup.", "Di pulau, kebal bosan ternyata keahlian bertahan hidup."],
 "z-22": ["Di pulau B, masalah dipendam. \"Nggak apa-apa,\" kata semua orang.", "Di pulau Be, masalah dipendam. Nggak apa-apa, kata semua orang."],
 "z-23": ["Sampai suatu sore, rebutan satu buah kelapa meledak jadi perkelahian.", "Sampai suatu sore, rebutan satu buah kelapa meledak jadi perkelahian."],
 "z-24": ["Di pulau A, Kayla membuat lingkaran curhat tiap malam di dekat api.", "Di pulau A, Kayla membuat lingkaran curhat tiap malam di dekat api."],
 "z-25": ["Generasi ini terbiasa membicarakan kesehatan mental terang-terangan.", "Generasi ini terbiasa membicarakan kesehatan mental terang-terangan."],
 "z-26": ["Mengakui lelah ternyata lebih cepat memadamkan api konflik.", "Mengakui lelah ternyata lebih cepat memadamkan api konflik."],
 "z-27s": ["Musim kemarau di pulau. Siapa yang kelaparan?", "Musim kemarau di pulau. Siapa yang kelaparan?"],
 "z-29": ["Di pulau B, Bayu menyisihkan sebagian ke lumbung. Dana darurat versi pulau.", "Di pulau Be, Bayu menyisihkan sebagian ke lumbung. Dana darurat versi pulau."],
 "z-30": ["Mereka dibesarkan orang tua yang trauma krisis 1998.", "Mereka dibesarkan orang tua yang trauma krisis sembilan puluh delapan."],
 "z-33": ["Self-reward itu enak, sampai kemarau datang.", "Self-reward itu enak, sampai kemarau datang."],
 "z-34": ["Tahun kelima. Pulau B rapi dan aman. Tapi pulau A mulai membangun hal aneh.", "Tahun kelima. Pulau Be rapi dan aman. Tapi pulau A mulai membangun hal aneh."],
 "z-34s": ["Lima tahun di pulau. Gen Z membangun sesuatu yang aneh.", "Lima tahun di pulau. Gen Zi membangun sesuatu yang aneh."],
 "z-35": ["Rafi, si anak teknik dari pulau A, membuat kincir air dari bambu.", "Rafi, si anak teknik dari pulau A, membuat kincir air dari bambu."],
 "z-36": ["Gagal tiga kali. Tiap gagal, dia mencoba cara baru.", "Gagal tiga kali. Tiap gagal, dia mencoba cara baru."],
 "z-39": ["Saat kincir Rafi berputar, pulau A punya air mengalir ke ladang.", "Saat kincir Rafi berputar, pulau A punya air mengalir ke ladang."],
 "z-40": ["Berani gagal ternyata mesin inovasi paling murah.", "Berani gagal ternyata mesin inovasi paling murah."],
 "z-41": ["Tahun kesepuluh. Semuanya kini berumur tiga puluh.", "Tahun kesepuluh. Semuanya kini berumur tiga puluh."],
 "z-41s": ["Sepuluh tahun kemudian, dua pulau akhirnya bertemu.", "Sepuluh tahun kemudian, dua pulau akhirnya bertemu."],
 "z-42": ["Dan pinggang mulai sering bunyi.", "Dan pinggang mulai sering bunyi."],
 "z-44": ["Pulau A membawa kincir dan cara berbicara yang terbuka.", "Pulau A membawa kincir dan cara berbicara yang terbuka."],
 "z-45": ["Pulau B membawa lumbung dan ketahanan menghadapi bosan.", "Pulau Be membawa lumbung dan ketahanan menghadapi bosan."],
 "z-46": ["Gabungan keduanya jadi desa paling kuat di kepulauan itu.", "Gabungan keduanya jadi desa paling kuat di kepulauan itu."],
 "z-47": ["Jadi, siapa yang bertahan?", "Jadi, siapa yang bertahan?"],
 "z-47s": ["Gen Z atau milenial, siapa yang bertahan?", "Gen Zi atau milenial, siapa yang bertahan?"],
 "z-50": ["Kamu tim pulau A atau pulau B? Tulis di kolom komentar.", "Kamu tim pulau A atau pulau Be? Tulis di kolom komentar."],
 "z-51": ["Tag temanmu yang bakal jadi Bayu, atau Kayla, di pulau itu!", "Tag temanmu yang bakal jadi Bayu, atau Kayla, di pulau itu!"],
 "y-04": ["Ponsel tidak ada sinyal. Hari ketiga, semua baterai habis.", "Ponsel tidak ada sinyal. Hari ketiga, semua baterai habis."],
 "y-05": ["Mulai sekarang, hanya tangan dan kepala mereka.", "Mulai sekarang, hanya tangan dan kepala mereka."],
 "y-08": ["Tahun pertama dimulai dengan malam yang paling berat.", "Tahun pertama dimulai dengan malam yang paling berat."],
 "y-08s": ["Terdampar di pulau, malam pertama hujan badai. Siapa yang selamat?", "Terdampar di pulau, malam pertama hujan badai. Siapa yang selamat?"],
 "y-09": ["Hujan deras, angin dingin. Tanpa api dan atap, mereka bisa sakit.", "Hujan deras, angin dingin. Tanpa api dan atap, mereka bisa sakit."],
 "y-10": ["Kayla dari pulau A mengingat video life-hack 15 detik.", "Kayla dari pulau A mengingat video life-hack lima belas detik."],
 "y-12": ["Apinya menyala, tapi tenda daun roboh dua kali. Banyak yang cepat lelah.", "Apinya menyala, tapi tenda daun roboh dua kali. Banyak yang cepat lelah."],
 "y-14": ["Masa kecil tanpa banyak kemudahan membuat mereka tahan capek.", "Masa kecil tanpa banyak kemudahan membuat mereka tahan capek."],
 "y-15": ["Sebelum malam, pulau B sudah punya api dan atap kokoh.", "Sebelum malam, pulau Be sudah punya api dan atap kokoh."],
 "y-16": ["Tahun kedua, mereka harus menanam makanan sendiri.", "Tahun kedua, mereka harus menanam makanan sendiri."],
 "y-16s": ["Setahun tanpa layar. Siapa yang paling tersiksa?", "Setahun tanpa layar. Siapa yang paling tersiksa?"],
 "y-17": ["Ladang harus digarap setiap hari. Tidak ada hiburan sama sekali.", "Ladang harus digarap setiap hari. Tidak ada hiburan sama sekali."],
 "y-19": ["Ada yang berhenti kerja berhari-hari. Ladang terbengkalai.", "Ada yang berhenti kerja berhari-hari. Ladang terbengkalai."],
 "y-23": ["Tahun ketiga, persediaan makanan makin menipis.", "Tahun ketiga, persediaan makanan makin menipis."],
 "y-23s": ["Makanan menipis. Orang lapar mudah tersulut.", "Makanan menipis. Orang lapar mudah tersulut."],
 "y-24": ["Orang lapar mudah tersulut. Satu salah paham bisa jadi perkelahian.", "Orang lapar mudah tersulut. Satu salah paham bisa jadi perkelahian."],
 "y-30": ["Tahun keempat, hujan tidak turun selama lima bulan.", "Tahun keempat, hujan tidak turun selama lima bulan."],
 "y-31": ["Ladang retak. Panen gagal di dua pulau.", "Ladang retak. Panen gagal di dua pulau."],
 "y-32": ["Di pulau A, hasil panen sebelumnya sudah habis untuk self-reward.", "Di pulau A, hasil panen sebelumnya sudah habis untuk self-reward."],
 "y-35": ["Di pulau A, jatah makan dipotong setengah. Mulai saling curiga.", "Di pulau A, jatah makan dipotong setengah. Mulai saling curiga."],
 "y-37": ["Tahun kelima, sumber air ada, tapi jauh.", "Tahun kelima, sumber air ada, tapi jauh."],
 "y-37s": ["Memikul air puluhan kali sehari. Siapa yang menemukan jalan keluar?", "Memikul air puluhan kali sehari. Siapa yang menemukan jalan keluar?"],
 "y-38": ["Setiap hari, air dipikul dari sungai. Punggung mulai sakit.", "Setiap hari, air dipikul dari sungai. Punggung mulai sakit."],
 "y-39": ["Di pulau B, mereka tetap memikul. \"Sistem lama sudah aman.\"", "Di pulau Be, mereka tetap memikul. Sistem lama sudah aman."],
 "y-44": ["Tahun keenam, muncul masalah yang lebih sulit dari alam: manusia.", "Tahun keenam, muncul masalah yang lebih sulit dari alam: manusia."],
 "y-44s": ["Ada yang malas kerja, tapi tetap minta jatah makan. Bagaimana mengaturnya?", "Ada yang malas kerja, tapi tetap minta jatah makan. Bagaimana mengaturnya?"],
 "y-45": ["Ada yang malas kerja, tapi tetap minta jatah makan.", "Ada yang malas kerja, tapi tetap minta jatah makan."],
 "y-46": ["Pulau B menulis aturan dan jadwal piket di papan kayu.", "Pulau Be menulis aturan dan jadwal piket di papan kayu."],
 "y-47": ["Pulau A memutuskannya lewat rapat. Voting sampai tengah malam.", "Pulau A memutuskannya lewat rapat. Voting sampai tengah malam."],
 "y-48": ["Ladang pulau A telat ditanam, karena rapatnya belum selesai.", "Ladang pulau A telat ditanam, karena rapatnya belum selesai."],
 "y-49": ["Kadang, aturan sederhana lebih cepat daripada diskusi panjang.", "Kadang, aturan sederhana lebih cepat daripada diskusi panjang."],
 "y-50": ["Tahun ketujuh, tiap orang punya hasil kerja yang berbeda.", "Tahun ketujuh, tiap orang punya hasil kerja yang berbeda."],
 "y-50s": ["Tanpa uang di pulau, bagaimana mereka berdagang?", "Tanpa uang di pulau, bagaimana mereka berdagang?"],
 "y-51": ["Ada nelayan, ada petani, ada penganyam. Bagaimana menukarnya dengan adil?", "Ada nelayan, ada petani, ada penganyam. Bagaimana menukarnya dengan adil?"],
 "y-52": ["Pulau B barter sederhana. Tapi sering macet: yang punya ikan tidak butuh ubi.", "Pulau Be barter sederhana. Tapi sering macet: yang punya ikan tidak butuh ubi."],
 "y-53": ["Pulau A membuat pasar, dengan uang dari kerang.", "Pulau A membuat pasar, dengan uang dari kerang."],
 "y-54": ["Ada yang jual anyaman, ada yang buka jasa potong rambut.", "Ada yang jual anyaman, ada yang buka jasa potong rambut."],
 "y-55": ["Ide kecil-kecilan membuat semua orang punya peran.", "Ide kecil-kecilan membuat semua orang punya peran."],
 "y-56": ["Tahun kedelapan, langit gelap sejak pagi.", "Tahun kedelapan, langit gelap sejak pagi."],
 "y-56s": ["Badai besar datang. Pulau mana yang selamat?", "Badai besar datang. Pulau mana yang selamat?"],
 "y-57": ["Badai besar datang tanpa peringatan, semalaman penuh.", "Badai besar datang tanpa peringatan, semalaman penuh."],
 "y-58": ["Rumah pulau B dibangun dari batu karang. Lambat, tapi kokoh.", "Rumah pulau Be dibangun dari batu karang. Lambat, tapi kokoh."],
 "y-58b": ["Lumbung dan tempayannya tetap aman.", "Lumbung dan tempayannya tetap aman."],
 "y-33b": ["Air hujan pun disimpan di tempayan tanah liat buatan sendiri.", "Air hujan pun disimpan di tempayan tanah liat buatan sendiri."],
 "y-59": ["Di pulau A, atap beterbangan. Pasar kerang hancur dalam semalam.", "Di pulau A, atap beterbangan. Pasar kerang hancur dalam semalam."],
 "y-60": ["Bersiap untuk hari buruk ternyata investasi terbaik.", "Bersiap untuk hari buruk ternyata investasi terbaik."],
 "y-61": ["Tahun kesembilan, penyakit kulit mulai menyebar di dua pulau.", "Tahun kesembilan, penyakit kulit mulai menyebar di dua pulau."],
 "y-61s": ["Wabah kulit menyebar, obatnya tidak ada. Siapa yang menemukan jalan keluar?", "Wabah kulit menyebar, obatnya tidak ada. Siapa yang menemukan jalan keluar?"],
 "y-62": ["Obatnya tidak tumbuh di pulau mereka.", "Obatnya tidak tumbuh di pulau mereka."],
 "y-63": ["Di pulau B, mereka bertahan dengan ramuan lama. Sembuhnya lambat.", "Di pulau Be, mereka bertahan dengan ramuan lama. Sembuhnya lambat."],
 "y-64": ["Di pulau A, Rafi ingat: abu dan minyak kelapa bisa jadi sabun.", "Di pulau A, Rafi ingat: abu dan minyak kelapa bisa jadi sabun."],
 "y-65": ["Percobaan pertama bikin kulit perih. Resepnya diubah tiga kali.", "Percobaan pertama bikin kulit perih. Resepnya diubah tiga kali."],
 "y-66": ["Sabun sederhana membuat wabah reda lebih cepat.", "Sabun sederhana membuat wabah reda lebih cepat."],
 "y-69": ["Pulau A membuat perahu, lalu berlayar ke pulau B membawa sabun.", "Pulau A membuat perahu, lalu berlayar ke pulau Be membawa sabun."],
 "y-74": ["Pulau B menang tipis, berkat etos kerja dan mental tahan banting.", "Pulau Be menang tipis, berkat etos kerja dan mental tahan banting."],
 "y-75": ["Tapi tanpa ide dan keterbukaan pulau A, desa gabungan tak akan sekuat itu.", "Tapi tanpa ide dan keterbukaan pulau A, desa gabungan tak akan sekuat itu."]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const UNGU = '#7a3b8f', TEAL = '#257179', GREEN = '#38b764', RED = '#b13e53', GELAP = '#1a1c2c';

// ---------- DUA PULAU KEMBAR (tampak atas, besar): kiri PULAU A (Gen Z), kanan PULAU B (milenial versi umur 20) ----------
// Sumber daya terlihat: hutan (NW), bambu (NE), sungai + mata air (tengah-timur), kelapa (pantai), batu (SE), tanah liat (SW), ikan & karang (laut)
const PULAU = { island: [96, 56, 86, 44], bumps: [[30, 30, 22, 14], [168, 80, 18, 14]],
  river: [[126, 14], [132, 30], [140, 46], [146, 66], [152, 86], [156, 106]],
  roads: [[50, 62, 132, 62], [96, 30, 96, 92]],
  dirt: [[84, 52, 26, 20, '#c9b98a']],
  // jalur jalan kaki (tak tergambar) agar warga tersebar
  paths: [[30, 50, 90, 50], [40, 74, 130, 74], [60, 86, 140, 86], [70, 40, 120, 40], [110, 52, 132, 52], [50, 56, 50, 84], [76, 30, 76, 92], [116, 34, 116, 94], [20, 62, 50, 62]] };
const ORANG = 100;  // warga per pulau
const T = { kemah: [96, 62], ladang: [62, 48], sungai: [140, 46], pantai: [40, 92], hutan: [36, 38], tepi: [172, 60] };
const TENDA = [[84, 54], [108, 54], [84, 72], [108, 72]];
const SDA = {
  hutan: [[18, 30], [28, 24], [38, 30], [24, 40], [34, 44], [46, 36], [16, 48], [44, 24], [54, 30]],
  bambu: [[152, 24], [162, 30], [170, 38], [158, 40], [168, 22]],
  kelapa: [[14, 62], [20, 80], [34, 92], [64, 100], [124, 100], [176, 64], [180, 50], [70, 14], [100, 12]],
  batu: [[160, 84], [172, 92]],
  karang: [[186, 102], [8, 6], [186, 6]],
  ikan: [[100, 106], [4, 40], [188, 26], [60, 106]],
};
function pulau(dx, s, o = {}) {
  const sp = (id, sprite, x, y, ex = {}) => ({ id: s + id, sprite, x: x + dx, y, ...ex });
  return [
    sp('kpl', 'kapal_karam', 24, 104, { depth: 3 }),
    sp('api', 'api_top', 96, 64, { depth: 4.5, hidden: !o.api, smoke: o.api ? { dx: 0, dy: -8, every: 500 } : undefined }),
    ...TENDA.map(([x, y], i) => sp('td' + i, o.rumah ? `rumah_top_${i % 4}` : 'tenda_top', x, y, { hidden: !o.tenda })),
    ...[[62, 42], [62, 56]].map(([x, y], i) => sp('ld' + i, o.kering ? 'sawah_top_kurus' : 'sawah_top_subur', x, y, { center: true, depth: 3.5, hidden: !o.ladang })),
    sp('lb', 'gudang_top', 112, 82, { scale: 0.6, hidden: !(o.lumbung && s === 'B') }),
    sp('kc', 'kincir', 140, 46, { scale: 0.35, depth: 5, hidden: !(o.kincir && s === 'A') }),
    sp('prh', 'perahu_top', s === 'A' ? 166 : -20, 102, { depth: 5, hidden: !(o.perahu && s === 'A') }),
    sp('tl', 'tanah_liat', 40, 80, { center: true, depth: 3.4 }),
    ...SDA.hutan.map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
    ...SDA.bambu.map(([x, y]) => ({ sprite: 'bambu_top', x: x + dx, y })),
    ...SDA.kelapa.map(([x, y]) => ({ sprite: 'kelapa_top', x: x + dx, y })),
    ...SDA.batu.map(([x, y]) => ({ sprite: 'batu_top', x: x + dx, y })),
    ...SDA.karang.map(([x, y]) => ({ sprite: 'karang_top', x: x + dx, y, depth: 2.5 })),
    ...SDA.ikan.map(([x, y], i) => ({ sprite: 'ikan_top_' + (i % 2), x: x + dx, y, depth: 2.6 })),
  ];
}
// warga yang BEKERJA (memikul hasil alam ke kemah) & menggarap ladang — berubah sesuai tahun
function kerja(o, s) {
  const th = o.th ?? 0, K = [96, 64], jobs = [], stay = [];
  if (th >= 1) {
    jobs.push({ n: 7, from: [36, 40], to: [78, 66], carry: 'kayu' });
    jobs.push({ n: 5, from: [96, 96], to: [96, 70], carry: 'ikan' });
    jobs.push({ n: 4, from: [22, 72], to: [84, 50], carry: 'kelapa', carryScale: 0.6 });
    if (!(s === 'A' && o.kincir)) jobs.push({ n: s === 'B' && th >= 5 ? 9 : 6, from: [138, 50], to: [104, 62], carry: 'ember', carryScale: 0.6 });
    jobs.push({ n: 3, from: [160, 36], to: [106, 58], carry: 'bambu_batang' });
  }
  if (th >= 2 && o.ladang) stay.push({ n: s === 'A' && (th === 2 || th === 6) ? 2 : 6, x: 62, y: 50, spread: 10 });
  if (s === 'B' && th >= 4) stay.push({ n: 3, x: 40, y: 80, spread: 6 });                       // membuat gerabah
  if (s === 'B' && th >= 6) jobs.push({ n: 5, from: [162, 86], to: [110, 74], carry: 'batu_kecil' }); // rumah batu karang
  if (th >= 7) stay.push({ n: 3, x: 96, y: 98, spread: 10 });                                     // menjaring di pantai
  // warga berkumpul (istirahat, mengobrol) di sekitar tenda & pantai
  [[80, 60], [112, 60], [80, 78], [112, 78], [60, 92], [130, 92]].forEach(([x, y], i) => stay.push({ act: 'idle', n: th >= 1 ? 6 : 3, x, y, spread: 5 }));
  return { jobs, stay };
}
const tokoh = (dx, k) => k === 'A'
  ? [{ id: 'kaylaA', sprite: 'kayla', x: 88, y: 64, scale: 0.75, tag: 'KAYLA', tagColor: UNGU }, { id: 'rafiA', sprite: 'rafi', x: 136, y: 52, scale: 0.75, tag: 'RAFI', tagColor: UNGU }]
  : [{ id: 'bayuB', sprite: 'bayu', x: R(88), y: 64, scale: 0.75, tag: 'BAYU', tagColor: TEAL }, { id: 'sintaB', sprite: 'sinta', x: R(110), y: 66, scale: 0.75, tag: 'SINTA', tagColor: TEAL }];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy'];
const TAGS = ['PULAU A · GEN Z', 'PULAU B · MILENIAL'];
function peta(steps, { c = { x: 96, y: 58, zoom: 1.25 }, o = {}, transition = 'clouds' } = {}) {
  const kA = kerja(o, 'A'), kB = kerja(o, 'B');
  const sisa = k => Math.max(8, ORANG - k.jobs.reduce((a, j) => a + j.n, 0) - k.stay.reduce((a, j) => a + j.n, 0));
  return { transition, sky: 'map', map: PULAU, split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...pulau(0, 'A', o), ...pulau(192, 'B', o)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n: [sisa(kA), sisa(kB)], sprites: WALK, scale: 0.42, jobs: [kA.jobs, kB.jobs], stay: [kA.stay, kB.stay] }, steps };
}
// adegan dekat: propsFn(dx, s) & actorsFn(dx, s) untuk tiap pulau
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'zoom', sky: 'beach', split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const pantai = dx => [{ sprite: 'palm', x: 18 + dx, scale: 1.2 }, { sprite: 'palm', x: 182 + dx, scale: 1.1 }];
const kayla = (x = 90, ex = {}) => ({ id: 'kaylaA', sprite: 'kayla', x, y: 101, tag: 'KAYLA', tagColor: UNGU, ...ex });
const rafi = (x = 100, ex = {}) => ({ id: 'rafiA', sprite: 'rafi', x, y: 101, tag: 'RAFI', tagColor: UNGU, ...ex });
const bayu = (x = 90, ex = {}) => ({ id: 'bayuB', sprite: 'bayu', x: R(x), y: 101, tag: 'BAYU', tagColor: TEAL, ...ex });
const sinta = (x = 120, ex = {}) => ({ id: 'sintaB', sprite: 'sinta', x: R(x), y: 101, tag: 'SINTA', tagColor: TEAL, ...ex });
const warga = (id, sprite, x, ex = {}) => ({ id, sprite, x, y: 101, ...ex });
const masalah = (text, side) => ({ label: '🔥 ' + text, x: 96, y: 18, bg: '#ef7d57', size: 12, dur: 0 });
const MASALAH = text => ({ together: [{ label: 'MASALAH: ' + text, x: 96, y: 16, bg: '#ef7d57', size: 11, dur: 0 }, { label: 'MASALAH: ' + text, x: R(96), y: 16, bg: '#ef7d57', size: 11, dur: 0 }, { sfx: 'notif', vol: 0.6 }] });
const SKOR = [['Malam pertama', 'B'], ['Kerja tanpa hiburan', 'B'], ['Rukun saat lapar', 'A'], ['Kemarau', 'B'], ['Air', 'A'], ['Aturan', 'B'], ['Tukar adil', 'A'], ['Badai', 'B'], ['Wabah', 'A']];
const skor = n => ({ at: 0.35, score: SKOR.slice(0, n), corner: true, dur: 1900 });
// pembuka bab: kalimat jembatan (long) atau pembuka khusus short
const buka = (idL, idS, cuesL = [], cuesS = cuesL) => [C(idL, cuesL, { only: 'long' }), C(idS, cuesS, { only: 'short' })];

const STORY = {
  title: 'Andaikan Gen Z vs Milenial Terdampar',
  audioDir: 'audio/genz-milenial',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= HOOK =================
    {
      id: 'bab-1', title: 'Dua kapal karam',
      scenes: [
        { ...peta([
          { together: [{ camera: { x: 96, y: 58, zoom: 1 }, dur: 2400, ease: 'Cubic.easeOut' }, { sfx: 'ombak', vol: 0.9 },
            C('z-01', [{ at: 'karam', shake: 200 }, { at: 'kembar', kw: '2 PULAU *KEMBAR*' }, { at: 'kembar', crowd: 'goto', side: 'left', x: 60, y: 84, spread: 14, frac: 0.8 }, { at: 'kembar', crowd: 'goto', side: 'right', x: R(60), y: 84, spread: 14, frac: 0.8 }])] },
          C('z-02', [{ at: 0, focus: 'left' }, { at: 'seratus', label: '100 ORANG', x: 96, y: 26, bg: UNGU, size: 12, dur: 0 }, { at: 'gen', kw: 'A: *GEN Z* · 20 TAHUN' }, { at: 'gen', label: 'TAHUN 2026', x: 96, y: 14, bg: UNGU, size: 12, dur: 0 }]),
          C('z-03', [{ at: 0, focus: 'right' }, { at: 'seratus', label: '100 ORANG', x: R(96), y: 26, bg: TEAL, size: 12, dur: 0 }, { at: 'milenial', kw: 'B: *MILENIAL* · 20 TAHUN' }, { at: 'milenial', label: 'TAHUN 2010', x: R(96), y: 14, bg: TEAL, size: 12, dur: 0 }]),
          { together: [{ focus: 'both' }, C('y-04', [{ at: 'sinyal', kw: 'HP *MATI*' }, { at: 'sinyal', emote: 'kaylaA', icon: 'question', dur: 900 }, { at: 'habis', emote: 'bayuB', icon: 'sweat', dur: 900 }, { at: 'ketiga', clock: 'HARI 3' }])] },
          { together: [{ camera: { x: 96, y: 56, zoom: 1.05 }, dur: 900 }, { camera: { x: R(96), y: 56, zoom: 1.05 }, side: 'right', dur: 900 }, C('y-05', [{ at: 'tangan', kw: 'HANYA *TANGAN & KEPALA*' }, { at: 0.1, label: 'HUTAN', x: 36, y: 30, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.1, label: 'HUTAN', x: R(36), y: 30, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.21, label: 'BAMBU', x: 160, y: 24, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.21, label: 'BAMBU', x: R(160), y: 24, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.32, label: 'SUNGAI', x: 132, y: 22, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.32, label: 'SUNGAI', x: R(132), y: 22, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.43, label: 'KELAPA', x: 20, y: 72, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.43, label: 'KELAPA', x: R(20), y: 72, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.54, label: 'BATU', x: 166, y: 94, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.54, label: 'BATU', x: R(166), y: 94, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.65, label: 'TANAH LIAT', x: 40, y: 88, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.65, label: 'TANAH LIAT', x: R(40), y: 88, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.76, label: 'IKAN', x: 96, y: 104, bg: '#1a1c2c', size: 9, dur: 0 }, { at: 0.76, label: 'IKAN', x: R(96), y: 104, bg: '#1a1c2c', size: 9, dur: 0 }])] },
          { clear: true },
          C('z-05', [{ at: 'berhasil', kw: 'SIAPA *BERTAHAN*?' }, { at: 'sepuluh', clock: 'TAHUN', from: 0, to: 10, dur: 1200 }]),
          { clear: true },
          { together: [{ title: 'ANDAIKAN', sub: 'Gen Z vs milenial terdampar', dark: true, size: 30, dur: 2000 }, C('z-06')] },
        ], { transition: undefined, c: { x: 40, y: 92, zoom: 2.6 } }), clock: 'HARI 1' },
      ],
    },
    // ================= TAHUN 1 — MALAM PERTAMA =================
    {
      id: 'tahun-1', title: 'Tahun 1: malam pertama',
      scenes: [
        peta([...buka('y-08', 'y-08s', [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'berat', kw: 'MALAM *PALING BERAT*' }],
            [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'badai', kw: 'HUJAN *BADAI*' }]),
          { together: [MASALAH('HUJAN & DINGIN'), { rain: true }, { tint: 0.35, color: GELAP, dur: 700 }, C('y-09', [{ at: 'sakit', kw: 'TANPA API & ATAP: *BISA SAKIT*' }, { at: 'dingin', emote: 'kaylaA', icon: 'sweat', dur: 900 }, { at: 'dingin', emote: 'bayuB', icon: 'sweat', dur: 900 }])] }],
          { c: cam('pantai', 2) }),
        dekat((dx, s) => [...pantai(dx), { id: s + 'api', sprite: 'api_unggun', x: 130 + dx, y: 101, scale: 1.2, depth: 7, hidden: true }, { id: s + 'tnd', sprite: 'tenda', x: 60 + dx, y: 101, depth: 4, hidden: true },
          { id: s + 'bk', sprite: 'form', x: 80 + dx, y: 72, scale: 1.2, depth: 14, hidden: true }],
          (dx, s) => s === 'A' ? [kayla(100), warga('a1', 'boy', 150, { face: 'left' })] : [bayu(100), warga('b1', 'warga', R(150), { face: 'left' })], [
          { together: [{ rain: true }, { tint: 0.25, color: GELAP, dur: 300 }, { focus: 'left' }, C('y-10', [{ at: 'life-hack', label: 'LIFE-HACK SURVIVAL 0:15', x: 100, y: 40, bg: UNGU, size: 10, dur: 0 }, { at: 'lima belas', kw: 'LIFE-HACK *15 DETIK*' }])] },
          C('z-10', [{ at: 'lima video', label: 'X  X  X  X  V', x: 100, y: 54, bg: GELAP, size: 11, dur: 0 }, { at: 'satu', kw: '*1 DARI 5* BERHASIL' }]),
          { clear: true },
          C('y-12', [{ at: 'menyala', pop: 'Aapi' }, { at: 'tenda', pop: 'Atnd' }, { at: 'roboh', hide: 'Atnd' }, { at: 'roboh', shake: 150 }, { at: 'dua kali', pop: 'Atnd' }, { at: 'kali', hide: 'Atnd' },
            { at: 'lelah', emote: 'a1', icon: 'zzz', dur: 1000 }, { at: 'lelah', kw: 'TENDA ROBOH · *CEPAT LELAH*' }]),
          { together: [{ focus: 'right' }, C('z-12', [{ at: 'buku saku', pop: 'Bbk' }, { at: 'gosok', hide: 'Bbk' }, { at: 'gosok', work: 'bayuB', speed: 300 }, { at: 'buku', kw: 'BUKU SAKU · *COBA LAGI*' }])] },
          C('y-14', [{ at: 'tahan capek', kw: '*ETOS KERJA*: TAHAN CAPEK' }, { at: 'kemudahan', work: 'b1' }]),
          { together: [{ focus: 'both' }, C('y-15', [skor(1), { at: 'api', pop: 'Bapi' }, { at: 'atap', pop: 'Btnd' }, { at: 'kokoh', work: 'bayuB', stop: true }, { at: 'kokoh', work: 'b1', stop: true }, { at: 'kokoh', rain: false },
            { at: 'kokoh', kw: 'B: API & *ATAP KOKOH*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 1' }),
      ],
    },
    // ================= TAHUN 2 — KERJA TANPA HIBURAN =================
    {
      id: 'tahun-2', title: 'Tahun 2: kerja tanpa hiburan',
      scenes: [
        peta([...buka('y-16', 'y-16s', [...dua(0, cam('ladang', 2.4), 1300), { at: 'menanam', kw: 'MENANAM *SENDIRI*' }], [...dua(0, cam('ladang', 2.4), 1300), { at: 'tersiksa', kw: 'SIAPA *PALING TERSIKSA*?' }]),
          { together: [MASALAH('KERJA TIAP HARI'), C('y-17', [...dua(0.05, { x: 62, y: 52, zoom: 2.9 }, 1000), { at: 'digarap', kw: 'KERJA *TIAP HARI*' }, { at: 'hiburan', kw: 'TANPA *HIBURAN*' }])] }],
          { c: cam('kemah', 1.8), o: { th: 2, api: true, tenda: true, ladang: true } }),
        dekat((dx, s) => [...pantai(dx), ...[0, 1, 2].map(i => ({ id: `${s}pd${i}`, sprite: 'padi_subur', x: 110 + i * 18 + dx, y: 101, depth: 6 })),
          ...(s === 'B' ? [{ id: 'Bkite', sprite: 'kite', x: R(80), y: 40, scale: 1.4, depth: 12, hidden: true }] : [])],
          (dx, s) => s === 'A' ? [kayla(60), warga('a1', 'boy', 86), warga('a2', 'girl', 104, { face: 'left' })] : [sinta(60), warga('b1', 'boy', R(86)), warga('b2', 'girl', R(104), { face: 'left' })], [
          { together: [{ focus: 'left' }, C('z-16', [{ at: 'gelisah', emote: 'a1', icon: 'sweat', dur: 1000 }, { at: 'gelisah', emote: 'a2', icon: 'question', dur: 1000 }, { at: 'gelisah', kw: '*GELISAH*' }, { at: 'saku', emote: 'kaylaA', icon: 'question', dur: 1000 }])] },
          C('y-19', [{ at: 'berhenti', emote: 'a1', icon: 'zzz', dur: 1400 }, { at: 'berhenti', label: 'MOGOK KERJA', x: 86, y: 52, bg: RED, size: 11, dur: 0 }, { at: 'terbengkalai', swapAll: 'Apd', to: 'padi_kurus', stagger: 200 }, { at: 'terbengkalai', kw: 'LADANG *TERBENGKALAI*' }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('z-17', [{ at: 'permainan', jump: 'b1', times: 2 }, { at: 'permainan', jump: 'b2', times: 2 }, { at: 'permainan', pop: 'Bkite' }, { at: 'permainan', kw: 'GOBAK SODOR · *LAYANGAN*' }])] },
          C('z-18', [{ at: 'bosan', move: 'Bkite', to: R(130), speed: 12 }, { at: 'bosan', kw: 'AKRAB DENGAN *BOSAN*' }, { at: 'layar', emote: 'sintaB', icon: 'note', dur: 1000 }]),
          { together: [{ focus: 'both' }, C('z-20', [skor(2), { at: 'keahlian', kw: 'KEBAL BOSAN = *TETAP BEKERJA*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 2' }),
      ],
    },
    // ================= TAHUN 3 — LAPAR MEMBUAT RIBUT =================
    {
      id: 'tahun-3', title: 'Tahun 3: lapar membuat ribut',
      scenes: [
        peta([...buka('y-23', 'y-23s', [...dua(0, cam('kemah', 2.4), 1300), { at: 'menipis', kw: 'MAKANAN *MENIPIS*' }], [...dua(0, cam('kemah', 2.4), 1300), { at: 'tersulut', kw: 'MUDAH *TERSULUT*' }]),
          { together: [MASALAH('LAPAR'), C('y-24', [...dua(0.05, { x: 96, y: 80, zoom: 2.9 }, 1000), { at: 'tersulut', kw: 'LAPAR = *MUDAH MARAH*' }, { at: 'perkelahian', emote: 'bayuB', icon: 'exclaim', dur: 900 }, { at: 'perkelahian', emote: 'kaylaA', icon: 'exclaim', dur: 900 }])] }],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { th: 3, api: true, tenda: true, ladang: true } }),
        dekat((dx, s) => [...pantai(dx), { sprite: 'api_unggun', x: 100 + dx, y: 101, scale: 1.3, depth: 6 }, { id: s + 'kl', sprite: 'kelapa', x: 100 + dx, y: 76, scale: 1.6, depth: 14, hidden: true }],
          (dx, s) => s === 'A' ? [kayla(70), warga('a1', 'boy', 130, { face: 'left' }), warga('a2', 'girl', 150, { face: 'left' })] : [bayu(70), warga('b1', 'warga', R(130), { face: 'left' }), warga('b2', 'warga2', R(150), { face: 'left' })], [
          { tint: 0.3, color: GELAP, dur: 400 },
          { together: [{ focus: 'right' }, C('z-22', [{ at: 'dipendam', label: 'Nggak apa-apa', x: R(70), y: 62, bg: '#333c57', size: 12, dur: 0 }, { at: 'nggak', label: 'Nggak apa-apa...', x: R(130), y: 52, bg: '#333c57', size: 15, dur: 0 },
            { at: 'semua orang', label: 'NGGAK APA-APA!', x: R(110), y: 38, bg: RED, size: 20, dur: 0 }, { at: 'semua orang', kw: '*"NGGAK APA-APA"*' }])] },
          C('z-23', [{ at: 'kelapa', pop: 'Bkl' }, { at: 'kelapa', kw: 'REBUTAN *KELAPA*' }, { at: 'meledak', shake: 300 }, { at: 'meledak', sfx: 'buzz' }, { at: 'meledak', emote: 'b1', icon: 'exclaim', dur: 1000 }, { at: 'perkelahian', emote: 'bayuB', icon: 'sweat', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'left' }, C('z-24', [{ at: 'lingkaran', kw: 'LINGKARAN *CURHAT*' }, { at: 'curhat', emote: 'a1', icon: 'heart', dur: 1000 }, { at: 'malam', emote: 'kaylaA', icon: 'heart', dur: 1000 }])] },
          C('z-25', [{ at: 'kesehatan', card: 'I-NAMHS 2022', items: ['±1 dari 3 remaja pernah punya', 'masalah kesehatan mental', 'hanya 2,6% mengakses layanan'], x: 96, y: 22, stagger: 350, dur: 0 }, { at: 'terang', kw: 'BICARA *TERBUKA*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('z-26', [skor(3), { at: 'memadamkan', kw: 'MENGAKUI LELAH *MEMADAMKAN KONFLIK*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 3' }),
      ],
    },
    // ================= TAHUN 4 — KEMARAU =================
    {
      id: 'tahun-4', title: 'Tahun 4: kemarau',
      scenes: [
        peta([...buka('y-30', 'z-27s', [...dua(0, cam('ladang', 2.4), 1300), { at: 'lima bulan', kw: '5 BULAN *TANPA HUJAN*' }], [...dua(0, cam('ladang', 2.4), 1300), { at: 'kelaparan', kw: 'SIAPA *KELAPARAN*?' }]),
          { together: [MASALAH('PANEN GAGAL'), C('y-31', [...dua(0.05, { x: 52, y: 70, zoom: 2.9 }, 1000), { at: 'retak', swapAll: 'Ald', to: 'sawah_top_kurus', stagger: 200 }, { at: 'retak', swapAll: 'Bld', to: 'sawah_top_kurus', stagger: 200 }, { at: 'gagal', kw: 'PANEN *GAGAL*' }])] }],
          { c: cam('kemah', 1.8), o: { th: 4, api: true, tenda: true, ladang: true, lumbung: true } }),
        dekat((dx, s) => [...pantai(dx), { id: s + 'ks', sprite: s === 'A' ? 'basket_half' : 'basket_full', x: 110 + dx, y: 101, scale: 1.5, depth: 8 },
          ...(s === 'B' ? [{ id: 'Blbg', sprite: 'lumbung', x: R(150), y: 101, scale: 1.2, depth: 5 }, ...[0, 1].map(i => ({ id: 'Btmp' + i, sprite: 'tempayan', x: R(124 + i * 12), y: 101, scale: 1.3, depth: 7, hidden: true }))] : [])],
          (dx, s) => s === 'A' ? [kayla(92), warga('a1', 'boy', 60)] : [bayu(92), warga('b1', 'warga', R(60))], [
          { together: [{ focus: 'left' }, C('y-32', [{ at: 'habis', label: 'SELF-REWARD: HABIS', x: 100, y: 46, bg: UNGU, size: 12, dur: 0 }, { at: 'self-reward', kw: 'PANEN LALU: *SELF-REWARD*' }, { at: 'habis', emote: 'kaylaA', icon: 'sweat', dur: 1000 }])] },
          { together: [{ focus: 'right' }, C('z-29', [{ at: 'lumbung', glow: 'Blbg', times: 2 }, { at: 'darurat', label: 'DANA DARURAT (LUMBUNG)', x: R(150), y: 46, bg: TEAL, size: 10, dur: 0 }, { at: 'darurat', kw: '*DANA DARURAT* VERSI PULAU' }])] },
          C('z-30', [{ at: 'trauma', label: 'ORANG TUA: KRISIS 1998', x: R(96), y: 30, bg: '#333c57', size: 10, dur: 0 }, { at: 'krisis', kw: 'TRAUMA *KRISIS 1998*' }]),
          C('y-33b', [{ at: 'tempayan', pop: 'Btmp0' }, { at: 'tanah liat', pop: 'Btmp1' }, { at: 'tanah liat', kw: 'TEMPAYAN *GERABAH*' }]),
          { clear: true },
          { together: [{ focus: 'left' }, C('y-35', [{ at: 'setengah', label: 'JATAH 1/2', x: 110, y: 60, bg: RED, size: 14, dur: 0 }, { at: 'curiga', emote: 'a1', icon: 'question', dur: 1000 }, { at: 'curiga', emote: 'kaylaA', icon: 'exclaim', dur: 1000 }, { at: 'curiga', kw: 'SALING *CURIGA*' }])] },
          { together: [{ focus: 'both' }, C('z-33', [skor(4), { at: 'kemarau', kw: 'SELF-REWARD ENAK, *SAMPAI KEMARAU*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 4' }),
      ],
    },
    // ================= TAHUN 5 — MEMIKUL AIR =================
    {
      id: 'tahun-5', title: 'Tahun 5: memikul air',
      scenes: [
        peta([...buka('y-37', 'y-37s', [...dua(0, cam('sungai', 2.4), 1300), { at: 'jauh', kw: 'AIR ADA, *TAPI JAUH*' }], [...dua(0, cam('sungai', 2.4), 1300), { at: 'jalan keluar', kw: 'SIAPA *PUNYA SOLUSI*?' }]),
          { together: [MASALAH('MEMIKUL AIR'), C('y-38', [...dua(0.05, { x: 126, y: 56, zoom: 2.9 }, 1000), { at: 'dipikul', move: 'rafiA', to: 120, speed: 14 }, { at: 'dipikul', move: 'bayuB', to: R(140), speed: 14 }, { at: 'sakit', kw: 'PUNGGUNG *SAKIT*' }])] }],
          { c: cam('kemah', 1.8), o: { th: 5, api: true, tenda: true, ladang: true, kering: true, lumbung: true } }),
        dekat((dx, s) => [...pantai(dx), { sprite: 'petak_air', x: 152 + dx, y: 104, scale: 2.2, depth: 3 }, { id: s + 'emb', sprite: 'ember', x: 78 + dx, y: 92, scale: 1.4, depth: 12 },
          ...(s === 'A' ? [{ id: 'Akcr', sprite: 'kincir', x: 150, y: 100, scale: 0.85, depth: 6, hidden: true }] : [])],
          (dx, s) => s === 'A' ? [rafi(80), warga('a1', 'girl', 50)] : [bayu(80), warga('b1', 'warga', R(50))], [
          { together: [{ focus: 'right' }, C('y-39', [{ at: 'memikul', move: 'bayuB', to: R(130), speed: 20 }, { at: 'memikul', move: 'Bemb', to: R(128), speed: 20 }, { at: 'sistem lama', label: '"SISTEM LAMA SUDAH AMAN"', x: R(100), y: 46, bg: '#333c57', size: 10, dur: 0 },
            { at: 'aman', encok: 'bayuB' }, { at: 'aman', kw: '*"JANGAN DIUBAH"*' }])] },
          { together: [{ focus: 'left' }, C('z-35', [{ at: 'kincir', work: 'rafiA', speed: 380 }, { at: 'bambu', kw: 'KINCIR *BAMBU*' }])] },
          C('z-36', [{ at: 'gagal', label: 'GAGAL 1', x: 150, y: 54, bg: RED, size: 10, dur: 0 }, { at: 'gagal', sfx: 'buzz', vol: 0.6 }, { at: 'tiga', label: 'GAGAL 2', x: 150, y: 42, bg: RED, size: 10, dur: 0 },
            { at: 'kali', label: 'GAGAL 3', x: 150, y: 30, bg: RED, size: 10, dur: 0 }, { at: 'cara baru', emote: 'rafiA', icon: 'exclaim', dur: 900 }, { at: 'cara baru', kw: 'GAGAL *3×*, COBA LAGI' }]),
          { clear: true },
          C('z-39', [{ at: 'kincir', work: 'rafiA', stop: true }, { at: 'kincir', pop: 'Akcr' }, { at: 'berputar', spin: 'Akcr', dur: 1600 }, { at: 'berputar', sfx: 'success' }, { at: 'mengalir', kw: 'AIR *MENGALIR*' }, { at: 'ladang', sticker: 'party', at_: L }]),
          { together: [{ focus: 'both' }, C('z-40', [skor(5), { at: 'inovasi', kw: 'BERANI GAGAL = *MESIN INOVASI*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 5' }),
      ],
    },
    // ================= TAHUN 6 — ATURAN =================
    {
      id: 'tahun-6', title: 'Tahun 6: yang malas tapi minta jatah',
      scenes: [
        peta([...buka('y-44', 'y-44s', [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'manusia', kw: 'MASALAHNYA: *MANUSIA*' }],
            [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'mengaturnya', kw: 'BAGAIMANA *MENGATUR*?' }]),
          { together: [MASALAH('MALAS TAPI MINTA JATAH'), C('y-45', [...dua(0.05, { x: 62, y: 52, zoom: 2.9 }, 1000), { at: 'malas', emote: 'kaylaA', icon: 'zzz', dur: 900 }, { at: 'jatah', kw: 'MALAS TAPI *MINTA JATAH*' }])] }],
          { c: cam('kemah', 1.8), o: { th: 6, api: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), s === 'B' ? { id: 'Bpapan', sprite: 'papan_aturan', x: R(130), y: 101, scale: 1.2, depth: 5, hidden: true } : { sprite: 'table', x: 110, y: 101, depth: 5 },
          ...(s === 'A' ? [0, 1].map(i => ({ id: 'Apd' + i, sprite: 'padi_muda', x: 160 + i * 14, y: 101, depth: 6, hidden: true })) : [])],
          (dx, s) => s === 'A' ? [kayla(80), warga('a1', 'boy', 130, { face: 'left' }), warga('a2', 'girl', 146, { face: 'left' }), warga('a3', 'warga', 96)] : [bayu(100), warga('b1', 'warga', R(70)), warga('b2', 'girl', R(56))], [
          { together: [{ focus: 'right' }, C('y-46', [{ at: 'aturan', pop: 'Bpapan' }, { at: 'piket', label: 'PIKET: SENIN-MINGGU', x: R(130), y: 54, bg: TEAL, size: 10, dur: 0 }, { at: 'papan', kw: 'ATURAN *TERTULIS*' }, { at: 'papan', emote: 'b1', icon: 'note', dur: 900 }])] },
          { together: [{ focus: 'left' }, C('y-47', [{ at: 'rapat', emote: 'a1', icon: 'question', dur: 900 }, { at: 'voting', label: 'VOTING #47', x: 110, y: 52, bg: UNGU, size: 11, dur: 0 }, { at: 'tengah malam', clock: 'JAM 23.00' }, { at: 'tengah malam', tint: 0.3, color: GELAP, side: 'left', dur: 500 }, { at: 'malam', kw: 'RAPAT *SAMPAI MALAM*' }])] },
          C('y-48', [{ at: 'telat', tint: 0, side: 'left', dur: 300 }, { at: 'telat', pop: 'Apd0' }, { at: 'ditanam', pop: 'Apd1' }, { at: 'belum selesai', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'telat', kw: 'LADANG *TELAT DITANAM*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('y-49', [skor(6), { at: 'sederhana', kw: 'ATURAN SEDERHANA *LEBIH CEPAT*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 6' }),
      ],
    },
    // ================= TAHUN 7 — TUKAR YANG ADIL =================
    {
      id: 'tahun-7', title: 'Tahun 7: tukar yang adil',
      scenes: [
        peta([...buka('y-50', 'y-50s', [...dua(0, cam('kemah', 2.4), 1300), { at: 'berbeda', kw: 'HASIL KERJA *BERBEDA*' }], [...dua(0, cam('kemah', 2.4), 1300), { at: 'berdagang', kw: 'TANPA UANG, *DAGANG*?' }]),
          { together: [MASALAH('TUKAR YANG ADIL'), C('y-51', [...dua(0.05, { x: 96, y: 88, zoom: 2.9 }, 1000), { at: 'nelayan', kw: 'NELAYAN · PETANI · *PENGANYAM*' }, { at: 'adil', kw: 'BAGAIMANA *TUKAR ADIL*?' }])] }],
          { c: cam('pantai', 2), o: { th: 7, api: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), { sprite: 'table', x: 110 + dx, y: 101, depth: 5 },
          ...(s === 'B' ? [{ id: 'Byam', sprite: 'yam', x: R(100), y: 88, scale: 1.6, depth: 9 }] : [
            ...[0, 1, 2, 3].map(i => ({ id: 'Akr' + i, sprite: 'kerang', x: 96 + i * 8, y: 88, scale: 1.4, depth: 9, hidden: true })),
            { id: 'Aany', sprite: 'anyaman', x: 120, y: 86, scale: 1.4, depth: 9, hidden: true }, { id: 'Agt', sprite: 'gunting', x: 150, y: 70, scale: 1.4, depth: 12, hidden: true }])],
          (dx, s) => s === 'A' ? [kayla(80), warga('a1', 'boy', 140, { face: 'left' }), warga('a2', 'girl', 160, { face: 'left' })] : [bayu(80, { tag: 'BAYU · NELAYAN' }), sinta(140, { face: 'left', tag: 'SINTA · PETANI' })], [
          { together: [{ focus: 'right' }, C('y-52', [{ at: 'barter', kw: '*BARTER*' }, { at: 'macet', label: 'BARTER MACET', x: R(110), y: 50, bg: RED, size: 12, dur: 0 }, { at: 'tidak butuh', emote: 'sintaB', icon: 'question', dur: 1100 }, { at: 'ubi', kw: 'IKAN ≠ *BUTUH UBI*' }])] },
          { together: [{ focus: 'left' }, C('y-53', [...[0, 1, 2, 3].map(i => ({ at: 0.3 + i * 0.08, pop: 'Akr' + i })), { at: 'kerang', kw: 'PASAR *KERANG*' }])] },
          C('y-54', [{ at: 'anyaman', pop: 'Aany' }, { at: 'potong rambut', pop: 'Agt' }, { at: 'potong rambut', emote: 'a2', icon: 'heart', dur: 900 }, { at: 'rambut', kw: 'ANYAMAN · *POTONG RAMBUT*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('y-55', [skor(7), { at: 'peran', kw: 'SEMUA *PUNYA PERAN*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 7' }),
      ],
    },
    // ================= TAHUN 8 — BADAI =================
    {
      id: 'tahun-8', title: 'Tahun 8: badai',
      scenes: [
        peta([...buka('y-56', 'y-56s', [{ at: 0, tint: 0.4, color: GELAP, dur: 1500 }, { at: 'gelap', kw: 'LANGIT *GELAP*' }], [{ at: 0, tint: 0.4, color: GELAP, dur: 1500 }, { at: 'selamat', kw: 'PULAU MANA *SELAMAT*?' }]),
          { together: [MASALAH('BADAI'), { rain: true }, C('y-57', [...dua(0.05, { x: 96, y: 64, zoom: 2.9 }, 1000), { at: 'badai', shake: 400 }, { at: 'badai', kw: '*BADAI* SEMALAMAN' }, { at: 'semalaman', shake: 400 }])] }],
          { c: { x: 96, y: 60, zoom: 1.3 }, o: { th: 8, api: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), s === 'B' ? { id: 'Brb', sprite: 'rumah_batu', x: R(70), y: 101, scale: 1.2, depth: 4 } : { id: 'Atnd', sprite: 'tenda', x: 80, y: 101, depth: 4 },
          ...(s === 'B' ? [{ sprite: 'lumbung', x: R(150), y: 101, scale: 1.1, depth: 5 }, { sprite: 'tempayan', x: R(170), y: 101, scale: 1.2, depth: 6 }] : [0, 1, 2].map(i => ({ id: 'Akr' + i, sprite: 'kerang', x: 130 + i * 10, y: 96, scale: 1.4, depth: 9 })))],
          (dx, s) => s === 'A' ? [kayla(110), warga('a1', 'boy', 150, { face: 'left' })] : [bayu(110), sinta(130)], [
          { together: [{ rain: true }, { tint: 0.35, color: GELAP, dur: 300 }, { focus: 'right' }, C('y-58', [{ at: 'batu karang', glow: 'Brb', times: 2 }, { at: 'kokoh', kw: 'RUMAH *BATU KARANG*' }])] },
          C('y-58b', [{ at: 'aman', kw: 'LUMBUNG & TEMPAYAN *AMAN*' }, { at: 'aman', emote: 'bayuB', icon: 'note', dur: 900 }]),
          { together: [{ focus: 'left' }, C('y-59', [{ at: 'beterbangan', hide: 'Atnd' }, { at: 'beterbangan', shake: 350 }, { at: 'hancur', hide: 'Akr0' }, { at: 'hancur', hide: 'Akr1' }, { at: 'hancur', hide: 'Akr2' },
            { at: 'hancur', emote: 'kaylaA', icon: 'sweat', dur: 1200 }, { at: 'semalam', kw: 'ATAP & PASAR *HANCUR*' }])] },
          { clear: true },
          { together: [{ focus: 'both' }, C('y-60', [skor(8), { at: 'investasi', rain: false }, { at: 'investasi', kw: 'BERSIAP = *INVESTASI TERBAIK*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 8' }),
      ],
    },
    // ================= TAHUN 9 — WABAH =================
    {
      id: 'tahun-9', title: 'Tahun 9: wabah',
      scenes: [
        peta([...buka('y-61', 'y-61s', [...dua(0, cam('kemah', 2.4), 1300), { at: 'menyebar', kw: 'PENYAKIT *MENYEBAR*' }], [...dua(0, cam('kemah', 2.4), 1300), { at: 'jalan keluar', kw: 'SIAPA *PUNYA SOLUSI*?' }]),
          { together: [MASALAH('WABAH'), C('y-62', [...dua(0.05, { x: 96, y: 66, zoom: 2.9 }, 1000), { at: 'tidak tumbuh', kw: 'OBAT *TIDAK ADA*' }, { at: 'mereka', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'mereka', emote: 'bayuB', icon: 'sweat', dur: 1000 }])] }],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { th: 9, api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), { sprite: 'petak_air', x: 160 + dx, y: 104, scale: 2.4, depth: 3 },
          { sprite: 'table', x: 130 + dx, y: 101, depth: 5 },
          ...(s === 'A' ? [{ id: 'Aabu', sprite: 'puffdark', x: 124, y: 86, scale: 1, depth: 9, hidden: true }, { id: 'Akel', sprite: 'kelapa', x: 138, y: 86, scale: 1.4, depth: 9, hidden: true },
            ...[0, 1, 2].map(i => ({ id: 'Asb' + i, sprite: 'sabun', x: 120 + i * 10, y: 88, scale: 1.4, depth: 10, hidden: true }))]
            : [{ id: 'Bram', sprite: 'daun_obat', x: R(130), y: 86, scale: 1.4, depth: 9 }])],
          (dx, s) => s === 'A' ? [kayla(70, { tag: 'KAYLA · GATAL' }), rafi(104)] : [bayu(104), warga('b1', 'warga', R(70), { tag: 'GATAL' })], [
          { together: [{ focus: 'right' }, C('y-63', [{ at: 'ramuan', glow: 'Bram', times: 2 }, { at: 'lambat', emote: 'b1', icon: 'sweat', dur: 1200 }, { at: 'lambat', kw: 'RAMUAN LAMA: *SEMBUH LAMBAT*' }])] },
          { together: [{ focus: 'left' }, C('y-64', [{ at: 'abu', pop: 'Aabu' }, { at: 'minyak kelapa', pop: 'Akel' }, { at: 'sabun', pop: 'Asb0' }, { at: 'sabun', emote: 'rafiA', icon: 'exclaim', dur: 900 }, { at: 'sabun', kw: '*SABUN* ABU + KELAPA' }])] },
          C('y-65', [{ at: 'perih', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'perih', shake: 120 }, { at: 'tiga kali', label: 'RESEP #1 #2 #3', x: 130, y: 54, bg: UNGU, size: 10, dur: 0 }, { at: 'tiga kali', kw: 'RESEP *DIUBAH 3×*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('y-66', [skor(9), { at: 'sederhana', pop: 'Asb1' }, { at: 'sederhana', pop: 'Asb2' }, { at: 'reda', emote: 'kaylaA', icon: 'heart', dur: 1000 }, { at: 'reda', kw: 'SABUN: *WABAH REDA*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 9' }),
      ],
    },
    // ================= TAHUN 10 — BERTEMU =================
    {
      id: 'tahun-10', title: 'Tahun 10: dua pulau bertemu',
      scenes: [
        peta([
          ...buka('z-41', 'z-41s', [{ at: 'kesepuluh', clock: 'TAHUN 10' }, { at: 'tiga puluh', label: 'TAHUN 10 · UMUR 30', x: 96, y: 14, bg: UNGU, size: 11, dur: 0 }, { at: 'tiga puluh', label: 'TAHUN 10 · UMUR 30', x: R(96), y: 14, bg: TEAL, size: 11, dur: 0 }],
            [{ at: 'sepuluh', clock: 'TAHUN 10' }, { at: 'bertemu', label: 'TAHUN 10 · UMUR 30', x: 96, y: 14, bg: UNGU, size: 11, dur: 0 }, { at: 'bertemu', label: 'TAHUN 10 · UMUR 30', x: R(96), y: 14, bg: TEAL, size: 11, dur: 0 }]),
          C('z-42', [{ at: 0, camera: { x: 100, y: 60, zoom: 2.6 }, dur: 600 }, { at: 0, camera: { x: R(100), y: 62, zoom: 2.6 }, side: 'right', dur: 600 },
            { at: 'pinggang', encok: 'kaylaA' }, { at: 'pinggang', encok: 'bayuB' }, { at: 'bunyi', encok: 'sintaB' }, { at: 'bunyi', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'bunyi', kw: '*ENCOK* MULAI' }]),
          C('y-69', [{ at: 0, camera: { x: 150, y: 80, zoom: 1.5 }, dur: 800 }, { at: 0, camera: { x: R(42), y: 80, zoom: 1.5 }, side: 'right', dur: 800 }, { at: 'perahu', move: 'Aprh', to: 200, speed: 30 },
            { at: 'pantai', pop: 'Bprh' }, { at: 'pantai', move: 'Bprh', to: R(30), speed: 24 }, { at: 'pantai', crowd: 'goto', side: 'right', x: R(40), y: 84, spread: 10, frac: 0.6 }, { at: 'sabun', kw: 'DUA PULAU *BERTEMU*' }]),
          C('z-44', [{ at: 'terbuka', kw: 'A: KINCIR & *BICARA TERBUKA*' }]),
          C('z-45', [{ at: 'bosan', kw: 'B: LUMBUNG & *TAHAN BANTING*' }]),
          C('z-46', [{ at: 'gabungan', label: 'DESA GABUNGAN', x: 150, y: 40, bg: '#ef7d57', size: 12, dur: 0 }, { at: 'gabungan', label: 'DESA GABUNGAN', x: R(42), y: 40, bg: '#ef7d57', size: 12, dur: 0 },
            { at: 'kuat', kw: 'DESA *PALING KUAT*', keepKw: true }, { at: 'kuat', sticker: 'party', at_: [0.5, 0.3] }], { punch: true }),
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { th: 10, api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true, perahu: true } }),
      ],
    },
    // ================= PENUTUP =================
    {
      id: 'penutup', title: 'Siapa yang bertahan?',
      scenes: [
        { ...peta([
          ...buka('z-47', 'z-47s', [{ at: 0, kw: 'SIAPA *BERTAHAN*?' }], [{ at: 0, kw: 'GEN Z ATAU *MILENIAL*?' }]),
          { together: [{ clear: true }, { score: SKOR, head: 'SKOR AKHIR', dur: 1500 }] },
          C('y-74', [{ at: 'menang', kw: 'B MENANG: *TAHAN BANTING*' }, { at: 'banting', glow: 'bayuB', times: 2 }]),
          C('y-75', [{ at: 'ide', kw: 'IDE + *KERJA KERAS*', keepKw: true }, { at: 'sekuat', emote: 'kaylaA', icon: 'heart', dur: 1000 }, { at: 'sekuat', emote: 'bayuB', icon: 'heart', dur: 1000 }]),
          C('z-50', [{ at: 'tim', kw: 'TIM *A* / TIM *B*?' }, { at: 'komentar', label: 'KOMEN', x: 76, y: 24, bg: GREEN, dur: 0 }, { at: 'komentar', label: 'SUBSCRIBE', x: R(116), y: 24, bg: '#e43b44', dur: 0 }], { only: 'long' }),
          C('z-51', [{ at: 'tag', kw: '*TAG* TEMANMU!' }, { at: 'bayu', glow: 'bayuB', times: 2 }, { at: 'kayla', glow: 'kaylaA', times: 2 }], { only: 'short' }),
          { wait: 1200 },
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { th: 10, api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true } }), clock: 'TAHUN 10' },
      ],
    },
  ],
};
