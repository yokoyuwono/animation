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
 "y-58": ["Rumah pulau B kokoh. Lumbungnya tetap kering.", "Rumah pulau Be kokoh. Lumbungnya tetap kering."],
 "y-59": ["Di pulau A, atap beterbangan. Pasar kerang hancur dalam semalam.", "Di pulau A, atap beterbangan. Pasar kerang hancur dalam semalam."],
 "y-60": ["Bersiap untuk hari buruk ternyata investasi terbaik.", "Bersiap untuk hari buruk ternyata investasi terbaik."],
 "y-61": ["Tahun kesembilan, penyakit kulit mulai menyebar di dua pulau.", "Tahun kesembilan, penyakit kulit mulai menyebar di dua pulau."],
 "y-61s": ["Wabah menyebar, obatnya tidak ada di pulau. Siapa yang berani mencari?", "Wabah menyebar, obatnya tidak ada di pulau. Siapa yang berani mencari?"],
 "y-62": ["Obatnya tidak tumbuh di pulau mereka.", "Obatnya tidak tumbuh di pulau mereka."],
 "y-63": ["Di pulau B, Bayu menolak menyeberang: \"Laut terlalu berbahaya.\"", "Di pulau Be, Bayu menolak menyeberang: laut terlalu berbahaya."],
 "y-64": ["Pulau A membangun perahu bersama, dengan layar dari anyaman daun.", "Pulau A membangun perahu bersama, dengan layar dari anyaman daun."],
 "y-65": ["Dua kali perahu terbalik. Mereka tetap mencoba lagi.", "Dua kali perahu terbalik. Mereka tetap mencoba lagi."],
 "y-66": ["Berani mencoba membawa pulau A ke pulau tetangga, tempat daun obat tumbuh.", "Berani mencoba membawa pulau A ke pulau tetangga, tempat daun obat tumbuh."],
 "y-69": ["Perahu pulau A merapat di pantai pulau B, membawa daun obat.", "Perahu pulau A merapat di pantai pulau Be, membawa daun obat."],
 "y-74": ["Pulau B menang tipis, berkat etos kerja dan mental tahan banting.", "Pulau Be menang tipis, berkat etos kerja dan mental tahan banting."],
 "y-75": ["Tapi tanpa ide dan keterbukaan pulau A, desa gabungan tak akan sekuat itu.", "Tapi tanpa ide dan keterbukaan pulau A, desa gabungan tak akan sekuat itu."]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const UNGU = '#7a3b8f', TEAL = '#257179', GREEN = '#38b764', RED = '#b13e53', GELAP = '#1a1c2c';

// ---------- DUA PULAU KEMBAR (tampak atas): kiri PULAU A (Gen Z), kanan PULAU B (milenial versi umur 20) ----------
const PULAU = { island: [96, 56, 72, 36], bumps: [[58, 36, 30, 16], [136, 78, 30, 16]], roads: [[52, 60, 146, 60], [96, 34, 96, 86]], river: [[150, 22], [148, 40], [154, 60], [160, 80]] };
const T = { kemah: [96, 60], ladang: [52, 40], sungai: [150, 46], pantai: [40, 92], tepi: [172, 60] };
const TENDA = [[80, 52], [112, 52], [80, 72], [112, 72]];
function pulau(dx, s, o = {}) {
  const sp = (id, sprite, x, y, ex = {}) => ({ id: s + id, sprite, x: x + dx, y, ...ex });
  return [
    sp('kpl', 'kapal_karam', 30, 100, { depth: 3 }),
    sp('api', 'api_top', 96, 62, { depth: 4.5, hidden: !o.api, smoke: o.api ? { dx: 0, dy: -8, every: 500 } : undefined }),
    ...TENDA.map(([x, y], i) => sp('td' + i, o.rumah ? `rumah_top_${i % 4}` : 'tenda_top', x, y, { hidden: !o.tenda })),
    ...[[50, 34], [50, 46]].map(([x, y], i) => sp('ld' + i, o.kering ? 'sawah_top_kurus' : 'sawah_top_subur', x, y, { center: true, depth: 3.5, hidden: !o.ladang })),
    sp('lb', 'gudang_top', 66, 76, { scale: 0.6, hidden: !(o.lumbung && s === 'B') }),
    sp('kc', 'kincir', 150, 44, { scale: 0.35, depth: 5, hidden: !(o.kincir && s === 'A') }),
    sp('prh', 'perahu_top', s === 'A' ? 160 : -20, 98, { depth: 5, hidden: !(o.perahu && s === 'A') }),
    ...[[40, 50], [70, 30], [124, 40], [130, 70], [62, 82], [118, 88], [140, 30], [74, 64]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => k === 'A'
  ? [{ id: 'kaylaA', sprite: 'kayla', x: 88, y: 64, scale: 0.75, tag: 'KAYLA', tagColor: UNGU }, { id: 'rafiA', sprite: 'rafi', x: 136, y: 52, scale: 0.75, tag: 'RAFI', tagColor: UNGU }]
  : [{ id: 'bayuB', sprite: 'bayu', x: R(88), y: 64, scale: 0.75, tag: 'BAYU', tagColor: TEAL }, { id: 'sintaB', sprite: 'sinta', x: R(110), y: 66, scale: 0.75, tag: 'SINTA', tagColor: TEAL }];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy'];
const TAGS = ['PULAU A · GEN Z', 'PULAU B · MILENIAL'];
function peta(steps, { c = { x: 96, y: 58, zoom: 1.1 }, o = {}, transition = 'clouds', n = [8, 8] } = {}) {
  return { transition, sky: 'map', map: PULAU, split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...pulau(0, 'A', o), ...pulau(192, 'B', o)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK }, steps };
}
// adegan dekat: propsFn(dx, s) & actorsFn(dx, s) untuk tiap pulau
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'zoom', sky: 'day', split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
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
          C('z-02', [{ at: 0, focus: 'left' }, { at: 'gen', kw: 'A: *GEN Z* · 20 TAHUN' }, { at: 'gen', label: 'TAHUN 2026', x: 96, y: 14, bg: UNGU, size: 12, dur: 0 }]),
          C('z-03', [{ at: 0, focus: 'right' }, { at: 'milenial', kw: 'B: *MILENIAL* · 20 TAHUN' }, { at: 'milenial', label: 'TAHUN 2010', x: R(96), y: 14, bg: TEAL, size: 12, dur: 0 }]),
          { together: [{ focus: 'both' }, C('y-04', [{ at: 'sinyal', kw: 'HP *MATI*' }, { at: 'sinyal', emote: 'kaylaA', icon: 'question', dur: 900 }, { at: 'habis', emote: 'bayuB', icon: 'sweat', dur: 900 }, { at: 'ketiga', clock: 'HARI 3' }])] },
          C('y-05', [{ at: 'tangan', kw: 'HANYA *TANGAN & KEPALA*' }]),
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
          { together: [MASALAH('KERJA TIAP HARI'), C('y-17', [{ at: 'digarap', kw: 'KERJA *TIAP HARI*' }, { at: 'hiburan', kw: 'TANPA *HIBURAN*' }])] }],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true } }),
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
          { together: [MASALAH('LAPAR'), C('y-24', [{ at: 'tersulut', kw: 'LAPAR = *MUDAH MARAH*' }, { at: 'perkelahian', emote: 'bayuB', icon: 'exclaim', dur: 900 }, { at: 'perkelahian', emote: 'kaylaA', icon: 'exclaim', dur: 900 }])] }],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { api: true, tenda: true, ladang: true } }),
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
          { together: [MASALAH('PANEN GAGAL'), C('y-31', [{ at: 'retak', swapAll: 'Ald', to: 'sawah_top_kurus', stagger: 200 }, { at: 'retak', swapAll: 'Bld', to: 'sawah_top_kurus', stagger: 200 }, { at: 'gagal', kw: 'PANEN *GAGAL*' }])] }],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true, lumbung: true } }),
        dekat((dx, s) => [...pantai(dx), { id: s + 'ks', sprite: s === 'A' ? 'basket_half' : 'basket_full', x: 110 + dx, y: 101, scale: 1.5, depth: 8 },
          ...(s === 'B' ? [{ id: 'Blbg', sprite: 'lumbung', x: R(150), y: 101, scale: 1.2, depth: 5 }] : [])],
          (dx, s) => s === 'A' ? [kayla(92), warga('a1', 'boy', 60)] : [bayu(92), warga('b1', 'warga', R(60))], [
          { together: [{ focus: 'left' }, C('y-32', [{ at: 'habis', label: 'SELF-REWARD: HABIS', x: 100, y: 46, bg: UNGU, size: 12, dur: 0 }, { at: 'self-reward', kw: 'PANEN LALU: *SELF-REWARD*' }, { at: 'habis', emote: 'kaylaA', icon: 'sweat', dur: 1000 }])] },
          { together: [{ focus: 'right' }, C('z-29', [{ at: 'lumbung', glow: 'Blbg', times: 2 }, { at: 'darurat', label: 'DANA DARURAT (LUMBUNG)', x: R(150), y: 46, bg: TEAL, size: 10, dur: 0 }, { at: 'darurat', kw: '*DANA DARURAT* VERSI PULAU' }])] },
          C('z-30', [{ at: 'trauma', label: 'ORANG TUA: KRISIS 1998', x: R(96), y: 30, bg: '#333c57', size: 10, dur: 0 }, { at: 'krisis', kw: 'TRAUMA *KRISIS 1998*' }]),
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
          { together: [MASALAH('MEMIKUL AIR'), C('y-38', [{ at: 'dipikul', move: 'rafiA', to: 120, speed: 14 }, { at: 'dipikul', move: 'bayuB', to: R(140), speed: 14 }, { at: 'sakit', kw: 'PUNGGUNG *SAKIT*' }])] }],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true, kering: true, lumbung: true } }),
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
          { together: [MASALAH('MALAS TAPI MINTA JATAH'), C('y-45', [{ at: 'malas', emote: 'kaylaA', icon: 'zzz', dur: 900 }, { at: 'jatah', kw: 'MALAS TAPI *MINTA JATAH*' }])] }],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true, lumbung: true, kincir: true }, n: [10, 10] }),
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
          { together: [MASALAH('TUKAR YANG ADIL'), C('y-51', [{ at: 'nelayan', kw: 'NELAYAN · PETANI · *PENGANYAM*' }, { at: 'adil', kw: 'BAGAIMANA *TUKAR ADIL*?' }])] }],
          { c: cam('pantai', 2), o: { api: true, tenda: true, ladang: true, lumbung: true, kincir: true }, n: [12, 10] }),
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
          { together: [MASALAH('BADAI'), { rain: true }, C('y-57', [{ at: 'badai', shake: 400 }, { at: 'badai', kw: '*BADAI* SEMALAMAN' }, { at: 'semalaman', shake: 400 }])] }],
          { c: { x: 96, y: 60, zoom: 1.3 }, o: { api: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), s === 'B' ? { sprite: 'house', x: R(80), scale: 1.2 } : { id: 'Atnd', sprite: 'tenda', x: 80, y: 101, depth: 4 },
          ...(s === 'B' ? [{ sprite: 'lumbung', x: R(150), y: 101, scale: 1.1, depth: 5 }] : [0, 1, 2].map(i => ({ id: 'Akr' + i, sprite: 'kerang', x: 130 + i * 10, y: 96, scale: 1.4, depth: 9 })))],
          (dx, s) => s === 'A' ? [kayla(110), warga('a1', 'boy', 150, { face: 'left' })] : [bayu(110), sinta(130)], [
          { together: [{ rain: true }, { tint: 0.35, color: GELAP, dur: 300 }, { focus: 'right' }, C('y-58', [{ at: 'kokoh', kw: 'RUMAH *KOKOH*' }, { at: 'kering', kw: 'LUMBUNG *KERING*' }, { at: 'kering', emote: 'bayuB', icon: 'note', dur: 900 }])] },
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
        peta([...buka('y-61', 'y-61s', [...dua(0, cam('kemah', 2.4), 1300), { at: 'menyebar', kw: 'PENYAKIT *MENYEBAR*' }], [...dua(0, cam('kemah', 2.4), 1300), { at: 'berani', kw: 'SIAPA *BERANI MENCARI*?' }]),
          { together: [MASALAH('WABAH'), C('y-62', [{ at: 'tidak tumbuh', kw: 'OBAT *TIDAK ADA*' }, { at: 'mereka', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'mereka', emote: 'bayuB', icon: 'sweat', dur: 1000 }])] }],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
        dekat((dx, s) => [...pantai(dx), { sprite: 'petak_air', x: 160 + dx, y: 104, scale: 2.4, depth: 3 },
          ...(s === 'A' ? [{ id: 'Aprh', sprite: 'perahu', x: 150, y: 102, scale: 1.2, depth: 6, hidden: true }, { id: 'Aobat', sprite: 'daun_obat', x: 150, y: 50, scale: 2, depth: 12, hidden: true }] : [])],
          (dx, s) => s === 'A' ? [kayla(80), rafi(104)] : [bayu(110), warga('b1', 'warga', R(80))], [
          { together: [{ focus: 'right' }, C('y-63', [{ at: 'menolak', emote: 'bayuB', icon: 'exclaim', dur: 900 }, { at: 'berbahaya', label: '"LAUT TERLALU BERBAHAYA"', x: R(110), y: 50, bg: '#333c57', size: 10, dur: 0 }, { at: 'berbahaya', kw: 'B *MENOLAK MENYEBERANG*' }])] },
          { together: [{ focus: 'left' }, C('y-64', [{ at: 'perahu', work: 'rafiA', speed: 380 }, { at: 'bersama', pop: 'Aprh' }, { at: 'layar', kw: '*PERAHU* LAYAR DAUN' }])] },
          C('y-65', [{ at: 'terbalik', hide: 'Aprh' }, { at: 'terbalik', sfx: 'buzz', vol: 0.6 }, { at: 'terbalik', shake: 150 }, { at: 'tetap', pop: 'Aprh' }, { at: 'mencoba', work: 'rafiA', stop: true }, { at: 'lagi', kw: 'TERBALIK *2×*, COBA LAGI' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('y-66', [skor(9), { at: 'pulau tetangga', move: 'Aprh', to: 230, speed: 40 }, { at: 'daun obat', pop: 'Aobat' }, { at: 'daun obat', kw: 'BERANI MENCOBA = *OBAT DITEMUKAN*', keepKw: true }], { punch: true })] },
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
            { at: 'pantai', pop: 'Bprh' }, { at: 'pantai', move: 'Bprh', to: R(30), speed: 24 }, { at: 'pantai', crowd: 'goto', side: 'right', x: R(40), y: 84, spread: 10, frac: 0.6 }, { at: 'obat', kw: 'DUA PULAU *BERTEMU*' }]),
          C('z-44', [{ at: 'terbuka', kw: 'A: KINCIR & *BICARA TERBUKA*' }]),
          C('z-45', [{ at: 'bosan', kw: 'B: LUMBUNG & *TAHAN BANTING*' }]),
          C('z-46', [{ at: 'gabungan', label: 'DESA GABUNGAN', x: 150, y: 40, bg: '#ef7d57', size: 12, dur: 0 }, { at: 'gabungan', label: 'DESA GABUNGAN', x: R(42), y: 40, bg: '#ef7d57', size: 12, dur: 0 },
            { at: 'kuat', kw: 'DESA *PALING KUAT*', keepKw: true }, { at: 'kuat', sticker: 'party', at_: [0.5, 0.3] }], { punch: true }),
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true, perahu: true } }),
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
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { api: true, rumah: true, tenda: true, ladang: true, lumbung: true, kincir: true } }), clock: 'TAHUN 10' },
      ],
    },
  ],
};
