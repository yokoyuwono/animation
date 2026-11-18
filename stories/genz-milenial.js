// ============================================================
//  "ANDAIKAN GEN Z vs MILENIAL TERDAMPAR" — seri Andaikan, gaya peta (dua pulau)
//  Naskah: stories/genz-milenial.naskah.md · Skema: stories/genz-milenial.plan.md
//  Semua terdampar umur 20. Kiri PULAU A (Gen Z, 2026), kanan PULAU B (milenial versi umur 20, 2010). Tokoh fiktif.
//  only: "long" = jembatan kompilasi; "short" = pembuka/CTA versi per bab.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 "z-01": ["Bayangkan. Dua kapal karam di dua pulau kembar.", "Bayangkan. Dua kapal karam di dua pulau kembar."],
 "z-02": ["Pulau A: seratus Gen Z, umur dua puluh.", "Pulau A: seratus Gen Zi, umur dua puluh."],
 "z-03": ["Pulau B: seratus milenial, saat mereka juga umur dua puluh.", "Pulau Be: seratus milenial, saat mereka juga umur dua puluh."],
 "z-04": ["Satu dari zaman ponsel pintar. Satu dari zaman ponsel jadul dan warnet.", "Satu dari zaman ponsel pintar. Satu dari zaman ponsel jadul dan warnet."],
 "z-05": ["Sepuluh tahun kemudian, pulau mana yang lebih berhasil?", "Sepuluh tahun kemudian, pulau mana yang lebih berhasil?"],
 "z-06": ["Andaikan Gen Z dan milenial terdampar.", "Andaikan Gen Zi dan milenial terdampar."],
 "z-07": ["Hari pertama di pantai. Kayla dari pulau A langsung mengangkat ponselnya.", "Hari pertama di pantai. Kayla dari pulau A langsung mengangkat ponselnya."],
 "z-07s": ["Gen Z terdampar di pulau. Siapa yang bisa bikin api duluan?", "Gen Zi terdampar di pulau. Siapa yang bisa bikin api duluan?"],
 "z-08": ["Tidak ada sinyal. Kayla panik lima menit.", "Tidak ada sinyal. Kayla panik lima menit."],
 "z-09": ["Lalu dia ingat video life-hack survival 15 detik di berandanya.", "Lalu dia ingat video life-hack survival lima belas detik di berandanya."],
 "z-10": ["Dari lima video yang dia ingat, cuma satu yang berhasil.", "Dari lima video yang dia ingat, cuma satu yang berhasil."],
 "z-11": ["Batu, serat kelapa, tiup pelan. Dalam satu jam, api menyala.", "Batu, serat kelapa, tiup pelan. Dalam satu jam, api menyala."],
 "z-12": ["Di pulau B, Bayu mengandalkan ingatan buku saku. Gosok kayu, gagal, ulang.", "Di pulau Be, Bayu mengandalkan ingatan buku saku. Gosok kayu, gagal, ulang."],
 "z-13": ["Apinya baru menyala sore hari, tangannya lecet.", "Apinya baru menyala sore hari, tangannya lecet."],
 "z-14": ["Malam pertama, pulau A sudah punya api dan tenda daun.", "Malam pertama, pulau A sudah punya api dan tenda daun."],
 "z-15": ["Api sudah ada. Tapi masalah berikutnya justru datang dari kepala.", "Api sudah ada. Tapi masalah berikutnya justru datang dari kepala."],
 "z-15s": ["Sebulan tanpa internet. Siapa yang paling tersiksa?", "Sebulan tanpa internet. Siapa yang paling tersiksa?"],
 "z-16": ["Di pulau A, banyak yang gelisah. Tangan masih refleks meraba saku.", "Di pulau A, banyak yang gelisah. Tangan masih refleks meraba saku."],
 "z-17": ["Di pulau B, Sinta dan kawan-kawan malah bikin permainan sendiri.", "Di pulau Be, Sinta dan kawan-kawan malah bikin permainan sendiri."],
 "z-18": ["Masa kecil mereka memang akrab dengan bosan, tanpa layar di tangan.", "Masa kecil mereka memang akrab dengan bosan, tanpa layar di tangan."],
 "z-19": ["Lucunya, hari ini justru milenial yang paling banyak online.", "Lucunya, hari ini justru milenial yang paling banyak online."],
 "z-20": ["Di pulau, kebal bosan ternyata keahlian bertahan hidup.", "Di pulau, kebal bosan ternyata keahlian bertahan hidup."],
 "z-21": ["Enam bulan berlalu. Di kedua pulau, mulai ada yang bertengkar.", "Enam bulan berlalu. Di kedua pulau, mulai ada yang bertengkar."],
 "z-21s": ["Enam bulan terdampar. Mulai ada yang ribut.", "Enam bulan terdampar. Mulai ada yang ribut."],
 "z-22": ["Di pulau B, masalah dipendam. \"Nggak apa-apa,\" kata semua orang.", "Di pulau Be, masalah dipendam. Nggak apa-apa, kata semua orang."],
 "z-23": ["Sampai suatu sore, rebutan satu buah kelapa meledak jadi perkelahian.", "Sampai suatu sore, rebutan satu buah kelapa meledak jadi perkelahian."],
 "z-24": ["Di pulau A, Kayla membuat lingkaran curhat tiap malam di dekat api.", "Di pulau A, Kayla membuat lingkaran curhat tiap malam di dekat api."],
 "z-25": ["Generasi ini terbiasa membicarakan kesehatan mental terang-terangan.", "Generasi ini terbiasa membicarakan kesehatan mental terang-terangan."],
 "z-26": ["Mengakui lelah ternyata lebih cepat memadamkan api konflik.", "Mengakui lelah ternyata lebih cepat memadamkan api konflik."],
 "z-27": ["Tahun kedua. Musim kemarau datang ke dua pulau sekaligus.", "Tahun kedua. Musim kemarau datang ke dua pulau sekaligus."],
 "z-27s": ["Musim kemarau di pulau. Siapa yang kelaparan?", "Musim kemarau di pulau. Siapa yang kelaparan?"],
 "z-28": ["Di pulau A, panen pertama dirayakan. Self-reward, habis capek bercocok tanam.", "Di pulau A, panen pertama dirayakan. Self-reward, habis capek bercocok tanam."],
 "z-29": ["Di pulau B, Bayu menyisihkan sebagian ke lumbung. Dana darurat versi pulau.", "Di pulau Be, Bayu menyisihkan sebagian ke lumbung. Dana darurat versi pulau."],
 "z-30": ["Mereka dibesarkan orang tua yang trauma krisis 1998.", "Mereka dibesarkan orang tua yang trauma krisis sembilan puluh delapan."],
 "z-31": ["Kebiasaan menyimpan itu terbawa sampai ke pulau.", "Kebiasaan menyimpan itu terbawa sampai ke pulau."],
 "z-32": ["Saat kemarau, pulau B tetap makan. Pulau A mulai mengencangkan ikat pinggang.", "Saat kemarau, pulau Be tetap makan. Pulau A mulai mengencangkan ikat pinggang."],
 "z-33": ["Self-reward itu enak, sampai kemarau datang.", "Self-reward itu enak, sampai kemarau datang."],
 "z-34": ["Tahun kelima. Pulau B rapi dan aman. Tapi pulau A mulai membangun hal aneh.", "Tahun kelima. Pulau Be rapi dan aman. Tapi pulau A mulai membangun hal aneh."],
 "z-34s": ["Lima tahun di pulau. Gen Z membangun sesuatu yang aneh.", "Lima tahun di pulau. Gen Zi membangun sesuatu yang aneh."],
 "z-35": ["Rafi, si anak teknik dari pulau A, membuat kincir air dari bambu.", "Rafi, si anak teknik dari pulau A, membuat kincir air dari bambu."],
 "z-36": ["Gagal tiga kali. Tiap gagal, dia mencoba cara baru.", "Gagal tiga kali. Tiap gagal, dia mencoba cara baru."],
 "z-37": ["Di pulau A, ide siapa pun boleh dicoba, walau sering gagal.", "Di pulau A, ide siapa pun boleh dicoba, walau sering gagal."],
 "z-38": ["Di pulau B, usul baru sering kalah oleh satu kalimat: \"Sistem lama sudah aman.\"", "Di pulau Be, usul baru sering kalah oleh satu kalimat: sistem lama sudah aman."],
 "z-39": ["Saat kincir Rafi berputar, pulau A punya air mengalir ke ladang.", "Saat kincir Rafi berputar, pulau A punya air mengalir ke ladang."],
 "z-40": ["Berani gagal ternyata mesin inovasi paling murah.", "Berani gagal ternyata mesin inovasi paling murah."],
 "z-41": ["Tahun kesepuluh. Semuanya kini berumur tiga puluh.", "Tahun kesepuluh. Semuanya kini berumur tiga puluh."],
 "z-41s": ["Sepuluh tahun kemudian, dua pulau akhirnya bertemu.", "Sepuluh tahun kemudian, dua pulau akhirnya bertemu."],
 "z-42": ["Dan pinggang mulai sering bunyi.", "Dan pinggang mulai sering bunyi."],
 "z-43": ["Air laut surut, dan muncul jalur pasir di antara kedua pulau.", "Air laut surut, dan muncul jalur pasir di antara kedua pulau."],
 "z-44": ["Pulau A membawa kincir dan cara berbicara yang terbuka.", "Pulau A membawa kincir dan cara berbicara yang terbuka."],
 "z-45": ["Pulau B membawa lumbung dan ketahanan menghadapi bosan.", "Pulau Be membawa lumbung dan ketahanan menghadapi bosan."],
 "z-46": ["Gabungan keduanya jadi desa paling kuat di kepulauan itu.", "Gabungan keduanya jadi desa paling kuat di kepulauan itu."],
 "z-47": ["Jadi, siapa yang bertahan?", "Jadi, siapa yang bertahan?"],
 "z-47s": ["Gen Z atau milenial, siapa yang bertahan?", "Gen Zi atau milenial, siapa yang bertahan?"],
 "z-48": ["Skornya tipis. Tapi pemenang sebenarnya bukan generasi.", "Skornya tipis. Tapi pemenang sebenarnya bukan generasi."],
 "z-49": ["Yang menang adalah kebiasaan: menyimpan, mencoba, dan saling bicara.", "Yang menang adalah kebiasaan: menyimpan, mencoba, dan saling bicara."],
 "z-50": ["Kamu tim pulau A atau pulau B? Tulis di kolom komentar.", "Kamu tim pulau A atau pulau Be? Tulis di kolom komentar."],
 "z-51": ["Tag temanmu yang bakal jadi Bayu, atau Kayla, di pulau itu!", "Tag temanmu yang bakal jadi Bayu, atau Kayla, di pulau itu!"]
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const UNGU = '#7a3b8f', TEAL = '#257179', GREEN = '#38b764', RED = '#b13e53';

// ---------- DUA PULAU KEMBAR (tampak atas): kiri PULAU A (Gen Z), kanan PULAU B (milenial versi umur 20) ----------
const PULAU = { island: [96, 56, 72, 36], bumps: [[58, 36, 30, 16], [136, 78, 30, 16]], roads: [[52, 60, 146, 60], [96, 34, 96, 86]], river: [[150, 22], [148, 40], [154, 60], [160, 80]] };
const T = { kemah: [96, 60], ladang: [58, 40], sungai: [150, 46], pantai: [40, 92], tepi: [172, 56] };
const TENDA = [[80, 52], [112, 52], [80, 72], [112, 72]];
function pulau(dx, s, o = {}) {
  const sp = (id, sprite, x, y, ex = {}) => ({ id: s + id, sprite, x: x + dx, y, ...ex });
  return [
    sp('kpl', 'kapal_karam', 30, 100, { depth: 3, hidden: o.kapal === false }),
    sp('api', 'api_top', 96, 62, { depth: 4.5, hidden: !o.api, smoke: o.api ? { dx: 0, dy: -8, every: 500 } : undefined }),
    ...TENDA.map(([x, y], i) => sp('td' + i, o.rumah ? `rumah_top_${i % 4}` : 'tenda_top', x, y, { hidden: !o.tenda })),
    ...[[50, 34], [50, 46]].map(([x, y], i) => sp('ld' + i, o.kering ? 'sawah_top_kurus' : 'sawah_top_subur', x, y, { center: true, depth: 3.5, hidden: !o.ladang })),
    sp('lb', 'gudang_top', 66, 76, { scale: 0.6, hidden: !(o.lumbung && s === 'B') }),
    sp('kc', 'kincir', 150, 44, { scale: 0.35, depth: 5, hidden: !(o.kincir && s === 'A') }),
    sp('jp', 'jalur_pasir', s === 'A' ? 184 : 8, 56, { depth: 2.5, hidden: !o.pasir }),
    ...[[40, 50], [70, 30], [124, 40], [130, 70], [62, 82], [118, 88], [140, 30], [74, 64]].map(([x, y]) => ({ sprite: 'pohon_top', x: x + dx, y })),
  ];
}
const tokoh = (dx, k) => k === 'A'
  ? [{ id: 'kaylaA', sprite: 'kayla', x: 88 + dx, y: 64, scale: 0.75, tag: 'KAYLA', tagColor: UNGU }, { id: 'rafiA', sprite: 'rafi', x: 136 + dx, y: 52, scale: 0.75, tag: 'RAFI', tagColor: UNGU }]
  : [{ id: 'bayuB', sprite: 'bayu', x: 88 + dx, y: 64, scale: 0.75, tag: 'BAYU', tagColor: TEAL }, { id: 'sintaB', sprite: 'sinta', x: 110 + dx, y: 66, scale: 0.75, tag: 'SINTA', tagColor: TEAL }];
const cam = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: z });
const dua = (at, c, dur = 1200) => [{ at, camera: c, dur }, { at, camera: { ...c, x: R(c.x) }, side: 'right', dur }];
const WALK = ['warga', 'warga2', 'girl', 'boy'];
const TAGS = ['PULAU A · GEN Z', 'PULAU B · MILENIAL'];
function peta(steps, { c = { x: 96, y: 58, zoom: 1.1 }, o = {}, transition = 'clouds', n = [8, 8] } = {}) {
  return { transition, sky: 'map', map: PULAU, split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
    camera: c, cameraB: { ...c, x: R(c.x) }, props: [...pulau(0, 'A', o), ...pulau(192, 'B', o)], actors: [...tokoh(0, 'A'), ...tokoh(192, 'B')],
    walkers: { n, sprites: WALK }, steps };
}
function dekat(propsFn, actorsFn, steps, { c = { x: 100, y: 80, zoom: VERT ? 1.3 : 1.7 }, clock } = {}) {
  return { transition: 'clouds', sky: 'day', split: true, focus: 'both', tags: TAGS, tagColors: [UNGU, TEAL],
    camera: c, cameraB: { ...c, x: R(c.x) }, clock, props: [...propsFn(0, 'A'), ...propsFn(192, 'B')], actors: [...actorsFn(0, 'A'), ...actorsFn(192, 'B')], steps };
}
const pantai = dx => [{ sprite: 'palm', x: 18 + dx, scale: 1.2 }, { sprite: 'palm', x: 182 + dx, scale: 1.1 }];
const SKOR = [['Minggu pertama', 'A'], ['Tahan bosan', 'B'], ['Rukun', 'A'], ['Pangan', 'B'], ['Inovasi', 'A']];
const skor = n => ({ at: 0.35, score: SKOR.slice(0, n), corner: true, dur: 1900 });
const kutip = (quote, sub) => ({ quote, sub, dur: 1500 });

const STORY = {
  title: 'Andaikan Gen Z vs Milenial Terdampar',
  audioDir: 'audio/genz-milenial',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK =================
    {
      id: 'bab-1', title: 'Dua kapal karam',
      scenes: [
        { ...peta([
          { together: [{ camera: { x: 96, y: 58, zoom: 1 }, dur: 2400, ease: 'Cubic.easeOut' }, { sfx: 'ombak', vol: 0.9 },
            C('z-01', [{ at: 'karam', shake: 200 }, { at: 'kembar', kw: '2 PULAU *KEMBAR*' }, { at: 'kembar', crowd: 'goto', side: 'left', x: 60, y: 84, spread: 14, frac: 0.8 }, { at: 'kembar', crowd: 'goto', side: 'right', x: R(60), y: 84, spread: 14, frac: 0.8 }])] },
          C('z-02', [{ at: 0, focus: 'left' }, { at: 'gen', kw: 'A: *GEN Z* · 20 TAHUN' }, { at: 'gen', label: 'TAHUN 2026', x: 96, y: 14, bg: UNGU, size: 12, dur: 0 }]),
          C('z-03', [{ at: 0, focus: 'right' }, { at: 'milenial', kw: 'B: *MILENIAL* · 20 TAHUN' }, { at: 'milenial', label: 'TAHUN 2010', x: R(96), y: 14, bg: TEAL, size: 12, dur: 0 }]),
          { together: [{ focus: 'both' }, C('z-04', [{ at: 'pintar', kw: 'HP PINTAR vs *HP JADUL*' }, { at: 'pintar', emote: 'kaylaA', icon: 'exclaim', dur: 900 }, { at: 'jadul', emote: 'bayuB', icon: 'note', dur: 900 }])] },
          C('z-05', [{ at: 'berhasil', kw: 'SIAPA *BERTAHAN*?' }, { at: 'sepuluh', clock: 'TAHUN', from: 0, to: 10, dur: 1200 }]),
          { clear: true },
          { together: [{ title: 'ANDAIKAN', sub: 'Gen Z vs milenial terdampar', dark: true, size: 30, dur: 2000 }, C('z-06')] },
        ], { transition: undefined, c: { x: 40, y: 92, zoom: 2.6 }, o: {} }), clock: 'HARI 1' },
      ],
    },
    // ================= BAB 2 — MINGGU PERTAMA: API =================
    {
      id: 'bab-2', title: 'Minggu pertama: api',
      scenes: [
        peta([C('z-07', [...dua(0, cam('kemah', 2.6), 1300), { at: 'ponselnya', emote: 'kaylaA', icon: 'question', dur: 1000 }, { at: 'pantai', kw: 'HARI *PERTAMA*' }], { only: 'long' }),
          C('z-07s', [...dua(0, cam('kemah', 2.6), 1300), { at: 'api', kw: 'SIAPA BIKIN *API* DULUAN?' }], { only: 'short' })], { c: cam('pantai', 2), o: {} }),
        dekat(dx => [...pantai(dx), { id: (dx ? 'B' : 'A') + 'api', sprite: 'api_unggun', x: 120 + dx, y: 101, scale: 1.3, depth: 7, hidden: true },
          { id: (dx ? 'B' : 'A') + 'hp', sprite: dx ? 'hp_jadul' : 'phone', x: 86 + dx, y: 70, scale: dx ? 1.6 : 1.2, depth: 14, hidden: true },
          { id: (dx ? 'B' : 'A') + 'bk', sprite: 'form', x: 76 + dx, y: 72, scale: 1.2, depth: 14, hidden: true }],
          (dx, k) => [k === 'A' ? { id: 'kaylaA', sprite: 'kayla', x: 96, y: 101, tag: 'KAYLA', tagColor: UNGU } : { id: 'bayuB', sprite: 'bayu', x: R(96), y: 101, tag: 'BAYU', tagColor: TEAL }], [
          { together: [{ focus: 'left' }, C('z-08', [{ at: 0, pop: 'Ahp' }, { at: 'sinyal', label: 'SINYAL: 0', x: 86, y: 52, bg: RED, size: 12, dur: 0 }, { at: 'panik', emote: 'kaylaA', icon: 'sweat', dur: 1100 }, { at: 'panik', kw: 'PANIK *5 MENIT*' }])] },
          { clear: true },
          C('z-09', [{ at: 'life-hack', label: 'LIFE-HACK SURVIVAL 0:15', x: 96, y: 40, bg: UNGU, size: 10, dur: 0 }, { at: 'lima belas', kw: 'LIFE-HACK *15 DETIK*' }]),
          C('z-10', [{ at: 'lima video', label: 'X  X  X  X  V', x: 96, y: 54, bg: '#1a1c2c', size: 11, dur: 0 }, { at: 'satu', kw: '*1 DARI 5* BERHASIL' }]),
          { clear: true },
          C('z-11', [{ at: 'batu', hide: 'Ahp' }, { at: 'tiup', emote: 'kaylaA', icon: 'note', dur: 800 }, { at: 'satu jam', clock: 'JAM 10.00' }, { at: 'menyala', pop: 'Aapi' }, { at: 'menyala', kw: 'API *1 JAM*' }]),
          { together: [{ focus: 'right' }, C('z-12', [{ at: 'buku saku', pop: 'Bbk' }, { at: 'gosok', hide: 'Bbk' }, { at: 'gosok', work: 'bayuB', speed: 300 }, { at: 'buku', kw: 'BUKU SAKU · *COBA-COBA*' }])] },
          C('z-13', [{ at: 'sore', clock: 'JAM 16.00' }, { at: 'sore', pop: 'Bapi' }, { at: 'sore', work: 'bayuB', stop: true }, { at: 'lecet', emote: 'bayuB', icon: 'sweat', dur: 1100 }, { at: 'sore', kw: 'BARU MENYALA *SORE*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('z-14', [skor(1), { at: 'tenda', kw: 'MALAM PERTAMA: *A SUDAH SIAP*', keepKw: true }], { punch: true })] },
        ], { clock: 'HARI 1' }),
      ],
    },
    // ================= BAB 3 — BULAN 1: SEPI TANPA LAYAR =================
    {
      id: 'bab-3', title: 'Sebulan tanpa layar',
      scenes: [
        peta([C('z-15', [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'kepala', kw: 'MASALAH DARI *KEPALA*' }], { only: 'long' }),
          C('z-15s', [{ at: 0, camera: { x: 96, y: 60, zoom: 1.6 }, dur: 1200 }, { at: 0, camera: { x: R(96), y: 60, zoom: 1.6 }, side: 'right', dur: 1200 }, { at: 'tersiksa', kw: 'SIAPA *PALING TERSIKSA*?' }], { only: 'short' })],
          { c: cam('kemah', 2.4), o: { api: true, tenda: true } }),
        dekat(dx => [...pantai(dx), { sprite: 'api_unggun', x: 160 + dx, y: 101, scale: 1, depth: 6 },
          ...(dx ? [{ id: 'Bkite', sprite: 'kite', x: R(130), y: 40, scale: 1.4, depth: 12, hidden: true }] : [])],
          (dx, k) => k === 'A'
            ? [{ id: 'kaylaA', sprite: 'kayla', x: 70, y: 101, tag: 'KAYLA', tagColor: UNGU }, { id: 'a1', sprite: 'boy', x: 96, y: 101 }, { id: 'a2', sprite: 'girl', x: 120, y: 101, face: 'left' }]
            : [{ id: 'sintaB', sprite: 'sinta', x: R(70), y: 101, tag: 'SINTA', tagColor: TEAL }, { id: 'b1', sprite: 'boy', x: R(96), y: 101 }, { id: 'b2', sprite: 'girl', x: R(120), y: 101, face: 'left' }], [
          { together: [{ focus: 'left' }, C('z-16', [{ at: 'gelisah', emote: 'a1', icon: 'sweat', dur: 1000 }, { at: 'gelisah', emote: 'a2', icon: 'question', dur: 1000 }, { at: 'gelisah', kw: '*GELISAH*' }, { at: 'saku', emote: 'kaylaA', icon: 'question', dur: 1000 }])] },
          { together: [{ focus: 'right' }, C('z-17', [{ at: 'permainan', jump: 'b1', times: 2 }, { at: 'permainan', jump: 'b2', times: 2 }, { at: 'permainan', pop: 'Bkite' }, { at: 'permainan', kw: 'GOBAK SODOR · *LAYANGAN*' }])] },
          C('z-18', [{ at: 'bosan', move: 'Bkite', to: R(150), speed: 12 }, { at: 'bosan', kw: 'AKRAB DENGAN *BOSAN*' }, { at: 'layar', emote: 'sintaB', icon: 'note', dur: 1000 }]),
          { together: [{ focus: 'both' }, C('z-19', [{ at: 'lucunya', chart: 'ONLINE HARI INI (APJII 2026)', bars: [['Milenial', 90.34, TEAL], ['Gen Z', 89.02, UNGU]], max: 100, suffix: '%', place: 'right', y: 0.1, dur: 0 }, { at: 'milenial', kw: 'MILENIAL *PALING BANYAK ONLINE*' }, { at: 'online', sticker: 'shock', at_: Rt }])] },
          { clear: true },
          C('z-20', [skor(2), { at: 'keahlian', kw: 'KEBAL BOSAN = *KEAHLIAN BERTAHAN*', keepKw: true }], { punch: true }),
        ], { clock: 'BULAN 1' }),
      ],
    },
    // ================= BAB 4 — BULAN 6: KONFLIK & ISI KEPALA =================
    {
      id: 'bab-4', title: 'Bulan keenam: konflik',
      scenes: [
        peta([{ together: [{ tint: 0.35, color: '#1a1c2c', dur: 800 }, C('z-21', [...dua(0, cam('kemah', 2.4), 1300), { at: 'bertengkar', kw: 'MULAI *BERTENGKAR*' }, { at: 'bertengkar', emote: 'bayuB', icon: 'exclaim', dur: 900 }], { only: 'long' })] },
          { together: [{ tint: 0.35, color: '#1a1c2c', dur: 800, only: 'short' }, C('z-21s', [...dua(0, cam('kemah', 2.4), 1300), { at: 'ribut', kw: 'MULAI *RIBUT*' }], { only: 'short' })] }],
          { c: { x: 96, y: 60, zoom: 1.4 }, o: { api: true, tenda: true } }),
        dekat(dx => [...pantai(dx), { sprite: 'api_unggun', x: 100 + dx, y: 101, scale: 1.3, depth: 6 }, { id: (dx ? 'B' : 'A') + 'kl', sprite: 'kelapa', x: 100 + dx, y: 76, scale: 1.6, depth: 14, hidden: true }],
          (dx, k) => k === 'A'
            ? [{ id: 'kaylaA', sprite: 'kayla', x: 70, y: 101, tag: 'KAYLA', tagColor: UNGU }, { id: 'a1', sprite: 'boy', x: 130, y: 101, face: 'left' }, { id: 'a2', sprite: 'girl', x: 150, y: 101, face: 'left' }]
            : [{ id: 'bayuB', sprite: 'bayu', x: R(70), y: 101, tag: 'BAYU', tagColor: TEAL }, { id: 'b1', sprite: 'warga', x: R(130), y: 101, face: 'left' }, { id: 'b2', sprite: 'warga2', x: R(150), y: 101, face: 'left' }], [
          { tint: 0.3, color: '#1a1c2c', dur: 400 },
          { together: [{ focus: 'right' }, C('z-22', [{ at: 'dipendam', label: 'Nggak apa-apa', x: R(70), y: 62, bg: '#333c57', size: 12, dur: 0 }, { at: 'nggak', label: 'Nggak apa-apa...', x: R(130), y: 52, bg: '#333c57', size: 15, dur: 0 },
            { at: 'semua orang', label: 'NGGAK APA-APA!', x: R(110), y: 38, bg: '#b13e53', size: 20, dur: 0 }, { at: 'semua orang', kw: '*"NGGAK APA-APA"*' }])] },
          C('z-23', [{ at: 'kelapa', pop: 'Bkl' }, { at: 'kelapa', kw: 'REBUTAN *KELAPA*' }, { at: 'meledak', shake: 300 }, { at: 'meledak', sfx: 'buzz' }, { at: 'meledak', emote: 'b1', icon: 'exclaim', dur: 1000 }, { at: 'perkelahian', emote: 'bayuB', icon: 'sweat', dur: 1000 }]),
          { clear: true },
          { together: [{ focus: 'left' }, C('z-24', [{ at: 'lingkaran', kw: 'LINGKARAN *CURHAT*' }, { at: 'curhat', emote: 'a1', icon: 'heart', dur: 1000 }, { at: 'malam', emote: 'kaylaA', icon: 'heart', dur: 1000 }])] },
          C('z-25', [{ at: 'kesehatan', card: 'I-NAMHS 2022', items: ['±1 dari 3 remaja pernah punya', 'masalah kesehatan mental', 'hanya 2,6% mengakses layanan'], x: 96, y: 22, stagger: 350, dur: 0 }, { at: 'terang', kw: 'BICARA *TERBUKA*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('z-26', [skor(3), { at: 'memadamkan', kw: 'MENGAKUI LELAH *MEMADAMKAN KONFLIK*', keepKw: true }], { punch: true })] },
        ], { clock: 'BULAN 6' }),
      ],
    },
    // ================= BAB 5 — TAHUN 2: PANGAN =================
    {
      id: 'bab-5', title: 'Tahun kedua: kemarau',
      scenes: [
        peta([C('z-27', [...dua(0, cam('ladang', 2.4), 1300), { at: 'kemarau', swapAll: 'Ald', to: 'sawah_top_kurus', stagger: 200 }, { at: 'kemarau', swapAll: 'Bld', to: 'sawah_top_kurus', stagger: 200 }, { at: 'kemarau', kw: 'MUSIM *KEMARAU*' }], { only: 'long' }),
          C('z-27s', [...dua(0, cam('ladang', 2.4), 1300), { at: 'kemarau', swapAll: 'Ald', to: 'sawah_top_kurus', stagger: 200 }, { at: 'kemarau', swapAll: 'Bld', to: 'sawah_top_kurus', stagger: 200 }, { at: 'kelaparan', kw: 'SIAPA *KELAPARAN*?' }], { only: 'short' })],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true, lumbung: true } }),
        dekat(dx => [...pantai(dx), { id: (dx ? 'B' : 'A') + 'ks', sprite: 'basket_full', x: 110 + dx, y: 101, scale: 1.5, depth: 8 },
          ...(dx ? [{ id: 'Blbg', sprite: 'lumbung', x: R(150), y: 101, scale: 1.2, depth: 5, hidden: true }] : [0, 1, 2].map(i => ({ id: 'Af' + i, sprite: 'food', x: 74 + i * 12, y: 84, scale: 1.2, depth: 12, hidden: true })))],
          (dx, k) => k === 'A'
            ? [{ id: 'kaylaA', sprite: 'kayla', x: 92, y: 101, tag: 'KAYLA', tagColor: UNGU }, { id: 'a1', sprite: 'boy', x: 60, y: 101 }]
            : [{ id: 'bayuB', sprite: 'bayu', x: R(92), y: 101, tag: 'BAYU', tagColor: TEAL }, { id: 'b1', sprite: 'warga', x: R(60), y: 101 }], [
          { together: [{ focus: 'left' }, C('z-28', [{ at: 'dirayakan', pop: 'Af0' }, { at: 'dirayakan', pop: 'Af1' }, { at: 'self-reward', pop: 'Af2' }, { at: 'self-reward', label: 'SELF-REWARD PANEN', x: 96, y: 46, bg: UNGU, size: 12, dur: 0 },
            { at: 'self-reward', sticker: 'party', at_: L }, { at: 'capek', jump: 'a1', times: 2 }, { at: 'self-reward', kw: '*SELF-REWARD* PANEN' }])] },
          { together: [{ focus: 'right' }, C('z-29', [{ at: 'lumbung', pop: 'Blbg' }, { at: 'lumbung', move: 'Bks', to: R(140), speed: 30 }, { at: 'darurat', label: 'DANA DARURAT (LUMBUNG)', x: R(150), y: 46, bg: TEAL, size: 10, dur: 0 }, { at: 'darurat', kw: '*DANA DARURAT* VERSI PULAU' }])] },
          C('z-30', [{ at: 'trauma', label: 'ORANG TUA: KRISIS 1998', x: R(96), y: 30, bg: '#333c57', size: 10, dur: 0 }, { at: 'krisis', kw: 'TRAUMA *KRISIS 1998*' }]),
          C('z-31', [{ at: 'menyimpan', emote: 'bayuB', icon: 'note', dur: 1000 }, { at: 'pulau', kw: 'KEBIASAAN *MENYIMPAN*' }]),
          { clear: true },
          { together: [{ focus: 'both' }, C('z-32', [{ at: 'tetap makan', emote: 'b1', icon: 'heart', dur: 900 }, { at: 'mengencangkan', hide: 'Af0' }, { at: 'mengencangkan', hide: 'Af1' }, { at: 'mengencangkan', hide: 'Af2' },
            { at: 'mengencangkan', swap: 'Aks', to: 'basket_half' }, { at: 'ikat', emote: 'kaylaA', icon: 'sweat', dur: 1100 }, { at: 'ikat', kw: 'A *KENCANGKAN IKAT PINGGANG*' }])] },
          { clear: true },
          C('z-33', [skor(4), { at: 'kemarau', kw: 'SELF-REWARD ENAK, *SAMPAI KEMARAU*', keepKw: true }], { punch: true }),
        ], { clock: 'TAHUN 2' }),
      ],
    },
    // ================= BAB 6 — TAHUN 5: INOVASI =================
    {
      id: 'bab-6', title: 'Tahun kelima: inovasi',
      scenes: [
        peta([C('z-34', [...dua(0, cam('sungai', 2.4), 1300), { at: 'rapi', kw: 'B *RAPI & AMAN*' }, { at: 'aneh', glow: 'rafiA', times: 2 }, { at: 'aneh', kw: 'A MEMBANGUN *HAL ANEH*' }], { only: 'long' }),
          C('z-34s', [...dua(0, cam('sungai', 2.4), 1300), { at: 'aneh', glow: 'rafiA', times: 2 }, { at: 'aneh', kw: 'MEMBANGUN *HAL ANEH*' }], { only: 'short' })],
          { c: cam('kemah', 1.8), o: { api: true, tenda: true, ladang: true, kering: true, lumbung: true } }),
        dekat(dx => [...pantai(dx), { id: (dx ? 'B' : 'A') + 'kcr', sprite: 'kincir', x: 150 + dx, y: 100, scale: 0.85, depth: 6, hidden: true },
          ...(dx ? [{ sprite: 'table', x: R(110), y: 101, depth: 5 }] : [{ sprite: 'petak_air', x: 152, y: 104, scale: 2.2, depth: 3 }])],
          (dx, k) => k === 'A'
            ? [{ id: 'rafiA', sprite: 'rafi', x: 100, y: 101, tag: 'RAFI', tagColor: UNGU }, { id: 'a1', sprite: 'girl', x: 70, y: 101 }]
            : [{ id: 'bayuB', sprite: 'bayu', x: R(90), y: 101, tag: 'BAYU', tagColor: TEAL }, { id: 'b1', sprite: 'warga', x: R(128), y: 101, face: 'left' }, { id: 'b2', sprite: 'sinta', x: R(146), y: 101, face: 'left' }], [
          { together: [{ focus: 'left' }, C('z-35', [{ at: 'kincir', work: 'rafiA', speed: 380 }, { at: 'bambu', kw: 'KINCIR *BAMBU*' }])] },
          C('z-36', [{ at: 'gagal', label: 'GAGAL 1', x: 150, y: 54, bg: RED, size: 10, dur: 0 }, { at: 'gagal', sfx: 'buzz', vol: 0.6 }, { at: 'tiga', label: 'GAGAL 2', x: 150, y: 42, bg: RED, size: 10, dur: 0 },
            { at: 'kali', label: 'GAGAL 3', x: 150, y: 30, bg: RED, size: 10, dur: 0 }, { at: 'cara baru', emote: 'rafiA', icon: 'exclaim', dur: 900 }, { at: 'cara baru', kw: 'GAGAL *3×*, COBA LAGI' }]),
          C('z-37', [{ at: 'siapa pun', emote: 'a1', icon: 'note', dur: 900 }, { at: 'dicoba', kw: '*SEMUA* BOLEH COBA' }]),
          { clear: true },
          { together: [{ focus: 'right' }, C('z-38', [{ at: 'usul', emote: 'b2', icon: 'exclaim', dur: 900 }, { at: 'sistem lama', label: '"SISTEM LAMA SUDAH AMAN"', x: R(110), y: 52, bg: '#333c57', size: 10, dur: 0 },
            { at: 'sistem lama', kw: '*"JANGAN DIUBAH-UBAH"*' }, { at: 'aman', emote: 'bayuB', icon: 'zzz', dur: 1000 }])] },
          { clear: true },
          { together: [{ focus: 'left' }, C('z-39', [{ at: 'kincir', work: 'rafiA', stop: true }, { at: 'kincir', pop: 'Akcr' }, { at: 'berputar', spin: 'Akcr', dur: 1600 }, { at: 'berputar', sfx: 'success' }, { at: 'mengalir', kw: 'AIR *MENGALIR*' }, { at: 'ladang', sticker: 'party', at_: L }])] },
          { clear: true },
          { together: [{ focus: 'both' }, C('z-40', [skor(5), { at: 'inovasi', kw: 'BERANI GAGAL = *MESIN INOVASI*', keepKw: true }], { punch: true })] },
        ], { clock: 'TAHUN 5' }),
      ],
    },
    // ================= BAB 7 — TAHUN 10: DUA PULAU BERTEMU =================
    {
      id: 'bab-7', title: 'Tahun kesepuluh',
      scenes: [
        peta([
          C('z-41', [{ at: 'kesepuluh', clock: 'TAHUN', from: 5, to: 10, dur: 1000 }, { at: 'tiga puluh', label: 'TAHUN 10 · UMUR 30', x: 96, y: 14, bg: UNGU, size: 11, dur: 0 },
            { at: 'tiga puluh', label: 'TAHUN 10 · UMUR 30', x: R(96), y: 14, bg: TEAL, size: 11, dur: 0 }, { at: 'tiga puluh', swapAll: 'Atd', to: 'rumah_top_1', stagger: 150 }, { at: 'tiga puluh', swapAll: 'Btd', to: 'rumah_top_2', stagger: 150 }], { only: 'long' }),
          C('z-41s', [{ at: 'sepuluh', clock: 'TAHUN', from: 5, to: 10, dur: 1000 }, { at: 'tahun', swapAll: 'Atd', to: 'rumah_top_1', stagger: 150 }, { at: 'tahun', swapAll: 'Btd', to: 'rumah_top_2', stagger: 150 },
            { at: 'bertemu', label: 'TAHUN 10 · UMUR 30', x: 96, y: 14, bg: UNGU, size: 11, dur: 0 }, { at: 'bertemu', label: 'TAHUN 10 · UMUR 30', x: R(96), y: 14, bg: TEAL, size: 11, dur: 0 }], { only: 'short' }),
          C('z-42', [{ at: 0, camera: { x: 100, y: 60, zoom: 2.6 }, dur: 600 }, { at: 0, camera: { x: R(100), y: 62, zoom: 2.6 }, side: 'right', dur: 600 },
            { at: 'pinggang', encok: 'kaylaA' }, { at: 'pinggang', encok: 'bayuB' }, { at: 'bunyi', encok: 'sintaB' }, { at: 'bunyi', emote: 'kaylaA', icon: 'sweat', dur: 1000 }, { at: 'bunyi', kw: '*ENCOK* MULAI' }]),
          C('z-43', [{ at: 0, camera: { x: 150, y: 58, zoom: 1.5 }, dur: 900 }, { at: 0, camera: { x: R(42), y: 58, zoom: 1.5 }, side: 'right', dur: 900 }, { at: 'surut', sfx: 'ombak' },
            { at: 'jalur', pop: 'Ajp' }, { at: 'jalur', pop: 'Bjp' }, { at: 'jalur', kw: 'JALUR *PASIR*' }]),
          C('z-44', [{ at: 'kincir', crowd: 'goto', side: 'left', x: 176, y: 58, spread: 8, frac: 0.6 }, { at: 'terbuka', kw: 'A: KINCIR & *BICARA TERBUKA*' }]),
          C('z-45', [{ at: 'lumbung', crowd: 'goto', side: 'right', x: R(16), y: 58, spread: 8, frac: 0.6 }, { at: 'bosan', kw: 'B: LUMBUNG & *TAHAN BOSAN*' }]),
          C('z-46', [{ at: 'gabungan', label: 'DESA GABUNGAN', x: 176, y: 40, bg: '#ef7d57', size: 12, dur: 0 }, { at: 'gabungan', label: 'DESA GABUNGAN', x: R(16), y: 40, bg: '#ef7d57', size: 12, dur: 0 },
            { at: 'kuat', kw: 'DESA *PALING KUAT*', keepKw: true }, { at: 'kuat', sticker: 'party', at_: [0.5, 0.3] }], { punch: true }),
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { api: true, tenda: true, ladang: true, lumbung: true, kincir: true } }),
      ],
    },
    // ================= BAB 8 — PENUTUP =================
    {
      id: 'bab-8', title: 'Siapa yang bertahan?',
      scenes: [
        { ...peta([
          C('z-47', [{ at: 0, kw: 'SIAPA *BERTAHAN*?' }], { only: 'long' }),
          C('z-47s', [{ at: 0, kw: 'GEN Z ATAU *MILENIAL*?' }], { only: 'short' }),
          { together: [{ clear: true }, { score: SKOR, head: 'SKOR AKHIR', dur: 1400 }] },
          C('z-48', [{ at: 'tipis', kw: 'SKOR *TIPIS*' }, { at: 'bukan generasi', kw: '*BUKAN* SOAL GENERASI' }]),
          C('z-49', [{ at: 'menyimpan', kw: 'SIMPAN · COBA · *BICARA*', keepKw: true }, { at: 'bicara', emote: 'kaylaA', icon: 'heart', dur: 1000 }, { at: 'bicara', emote: 'bayuB', icon: 'heart', dur: 1000 }]),
          C('z-50', [{ at: 'tim', kw: 'TIM *A* / TIM *B*?' }, { at: 'komentar', label: 'KOMEN', x: 76, y: 24, bg: GREEN, dur: 0 }, { at: 'komentar', label: 'SUBSCRIBE', x: R(116), y: 24, bg: '#e43b44', dur: 0 }], { only: 'long' }),
          C('z-51', [{ at: 'tag', kw: '*TAG* TEMANMU!' }, { at: 'bayu', glow: 'bayuB', times: 2 }, { at: 'kayla', glow: 'kaylaA', times: 2 }], { only: 'short' }),
          { wait: 1200 },
        ], { c: { x: 96, y: 58, zoom: 1.1 }, o: { api: true, tenda: true, rumah: true, ladang: true, lumbung: true, kincir: true, pasir: true } }), clock: 'TAHUN 10' },
      ],
    },
  ],
};
