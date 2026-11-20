// ============================================================
//  "ANDAIKAN TERLEMPAR KE ROMA 50 M: BISA BERTAHAN HIDUP?" — seri Andaikan (gaya peta)
//  Naskah: stories/romawi-kuno.naskah.md (draf 3). Tokoh fiktif: Dimas, warga Roma.
//  Peta pusat: kota Roma ±50 M tampak atas (sprite di src/sprites-romawi.js) ⇄ adegan jalan tampak samping.
//  Semua kalimat r-* belum bersuara: tampil sebagai [draf] dengan tempo perkiraan; VO dibuat setelah review.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
  'r-01':  ['Roma, tahun 50 Masehi. Salah satu kota terbesar di dunia.', 'Roma, tahun lima puluh Masehi. Salah satu kota terbesar di dunia.'],
  'r-02':  ['Andaikan kamu terlempar ke sini. Bisa bertahan hidup?', 'Andaikan kamu terlempar ke sini. Bisa bertahan hidup?'],
  'r-01s': ['Bangun tidur, kamu sudah di Roma kuno. Apa yang terjadi?', 'Bangun tidur, kamu sudah di Roma kuno. Apa yang terjadi?'],
  'r-03':  ['Dimas terbangun di gang sempit. HP-nya mati, tanpa sinyal.', 'Dimas terbangun di gang sempit. Ha pe-nya mati, tanpa sinyal.'],
  'r-04':  ['Semua orang bicara Latin. Dia tak paham satu kata pun.', 'Semua orang bicara Latin. Dia tak paham satu kata pun.'],
  'r-05':  ['Dia mencoba bahasa Inggris. Orang-orang malah tertawa.', 'Dia mencoba bahasa Inggris. Orang-orang malah tertawa.'],
  'r-06':  ['Wajar. Bahasa Inggris baru lahir ±400 tahun lagi.', 'Wajar. Bahasa Inggris baru lahir sekitar empat ratus tahun lagi.'],
  'r-07':  ['Seminggu penuh, Dimas hanya bisa menunjuk dan mengangguk.', 'Seminggu penuh, Dimas hanya bisa menunjuk dan mengangguk.'],
  'r-08':  ['Dia ingin roti, tapi tak punya satu koin pun.', 'Dia ingin roti, tapi tak punya satu koin pun.'],
  'r-09':  ['Di kota hampir sejuta orang, dia sendirian.', 'Di kota hampir sejuta orang, dia sendirian.'],
  // Bab 2 — dunia serba manual
  'r-10':  ['Pelan-pelan, Dimas mulai memperhatikan kota ini.', 'Pelan-pelan, Dimas mulai memperhatikan kota ini.'],
  'r-10s': ['Roma kuno tanpa listrik dan mesin. Seperti apa hidupnya?', 'Roma kuno tanpa listrik dan mesin. Seperti apa hidupnya?'],
  'r-11':  ['Tak ada listrik, tak ada mesin. Semua digerakkan otot.', 'Tak ada listrik, tak ada mesin. Semua digerakkan otot.'],
  'r-12':  ['Budak memikul guci, menggiling gandum, menyalin buku.', 'Budak memikul guci, menggiling gandum, menyalin buku.'],
  'r-13':  ['Di Italia, kira-kira sepertiga penduduk adalah budak.', 'Di Italia, kira-kira sepertiga penduduk adalah budak.'],
  'r-14':  ['Paling atas, Kaisar Claudius. Paling bawah, para budak.', 'Paling atas, Kaisar Claudius. Paling bawah, para budak.'],
  'r-15':  ['Orang asing tanpa pelindung, seperti Dimas, mudah jatuh ke sana.', 'Orang asing tanpa pelindung, seperti Dimas, mudah jatuh ke sana.'],
  'r-16':  ['Dimas menukar kaos dan jinsnya dengan tunik kasar.', 'Dimas menukar kaos dan jinsnya dengan tunik kasar.'],
  'r-17':  ['Lalu dia melihat selokan terbuka, lalat, dan orang demam.', 'Lalu dia melihat selokan terbuka, lalat, dan orang demam.'],
  'r-18':  ['Tak ada antibiotik, tak ada rumah sakit umum. Dimas panik.', 'Tak ada antibiotik, tak ada rumah sakit umum. Dimas panik.'],
  'r-19':  ['Di sini, sakit perut saja bisa membunuh.', 'Di sini, sakit perut saja bisa membunuh.'],
  // Bab 3 — kelaparan
  'r-20':  ['Tapi yang paling cepat membunuhnya bukan penyakit.', 'Tapi yang paling cepat membunuhnya bukan penyakit.'],
  'r-20s': ['Tanpa uang di Roma kuno, bisakah kamu dapat makan?', 'Tanpa uang di Roma kuno, bisakah kamu dapat makan?'],
  'r-21':  ['Hari ke-10, perutnya benar-benar kosong.', 'Hari kesepuluh, perutnya benar-benar kosong.'],
  'r-22':  ['Dimas mengemis di depan toko roti. Tak ada yang memberi.', 'Dimas mengemis di depan toko roti. Tak ada yang memberi.'],
  'r-23':  ['Roma membagi gandum gratis, tapi khusus warga terdaftar.', 'Roma membagi gandum gratis, tapi khusus warga terdaftar.'],
  'r-24':  ['Orang asing seperti Dimas tidak termasuk.', 'Orang asing seperti Dimas tidak termasuk.'],
  'r-25':  ['Dia memungut sisa buah di pasar. Diusir pedagang.', 'Dia memungut sisa buah di pasar. Diusir pedagang.'],
  'r-26':  ['Hari ke-14, kakinya gemetar. Pandangannya kabur.', 'Hari keempat belas, kakinya gemetar. Pandangannya kabur.'],
  'r-27':  ['Dia butuh uang. Cepat. Tanpa syarat.', 'Dia butuh uang. Cepat. Tanpa syarat.'],
  // Bab 4 — arena
  'r-28':  ['Hari itu, seluruh kota berjalan ke satu arah.', 'Hari itu, seluruh kota berjalan ke satu arah.'],
  'r-28s': ['Kelaparan di Roma kuno? Ada satu jalan pintas yang mengerikan.', 'Kelaparan di Roma kuno? Ada satu jalan pintas yang mengerikan.'],
  'r-29':  ['Dimas ikut arus ke sebuah amfiteater batu.', 'Dimas ikut arus ke sebuah amfiteater batu.'],
  'r-30':  ['Colosseum? Belum ada. Baru dibangun ±20 tahun lagi.', 'Colosseum? Belum ada. Baru dibangun sekitar dua puluh tahun lagi.'],
  'r-31':  ['Di arena, gladiator bertarung. Kebanyakan budak dan tawanan.', 'Di arena, gladiator bertarung. Kebanyakan budak dan tawanan.'],
  'r-32':  ['Tapi seorang pria berteriak: siapa pun boleh mendaftar.', 'Tapi seorang pria berteriak: siapa pun boleh mendaftar.'],
  'r-33':  ['Relawan langsung dapat uang muka.', 'Relawan langsung dapat uang muka.'],
  'r-34':  ['Syaratnya cuma satu: sumpah.', 'Syaratnya cuma satu: sumpah.'],
  'r-35':  ['Rela dibakar, dirantai, dicambuk, dan dibunuh pedang.', 'Rela dibakar, dirantai, dicambuk, dan dibunuh pedang.'],
  'r-36':  ['Perut Dimas berbunyi. Dia mengangguk.', 'Perut Dimas berbunyi. Dia mengangguk.'],
  // Bab 5 — sekolah gladiator & ilmu pertama: fisika
  'r-37':  ['Malam itu, untuk pertama kalinya, Dimas makan kenyang.', 'Malam itu, untuk pertama kalinya, Dimas makan kenyang.'],
  'r-37s': ['Orang modern masuk sekolah gladiator. Pilih senjata apa?', 'Orang modern masuk sekolah gladiator. Pilih senjata apa?'],
  'r-38':  ['Menunya bubur jelai dan kacang. Julukannya: pemakan jelai.', 'Menunya bubur jelai dan kacang. Julukannya: pemakan jelai.'],
  'r-39':  ['Minumannya? Air campur abu tanaman, konon untuk tulang.', 'Minumannya? Air campur abu tanaman, konon untuk tulang.'],
  'r-40':  ['Lanista Varus, pemilik sekolah, bertanya: senjata apa?', 'Lanista Varus, pemilik sekolah, bertanya: senjata apa?'],
  'r-41':  ['Dimas kurus. Pedang dan perisai berat bukan untuknya.', 'Dimas kurus. Pedang dan perisai berat bukan untuknya.'],
  'r-42':  ['Dia memilih retiarius: jaring, trisula, tanpa helm.', 'Dia memilih retiarius: jaring, trisula, tanpa helm.'],
  'r-43':  ['Logika teknik: ringan = cepat, jangkauan jauh = aman.', 'Logika teknik: ringan berarti cepat. Jangkauan jauh berarti aman.'],
  'r-44':  ['Musuh abadi retiarius: secutor, berhelm bulat tertutup.', 'Musuh abadi retiarius: secutor, berhelm bulat tertutup.'],
  'r-45':  ['Lubang matanya kecil. Udaranya sedikit. Dia cepat sesak.', 'Lubang matanya kecil. Udaranya sedikit. Dia cepat sesak.'],
  'r-46':  ['Rencananya sederhana: jangan dilawan, bikin dia lelah.', 'Rencananya sederhana: jangan dilawan, bikin dia lelah.'],
  // Bab 6 — ilmu kedua: analisis data
  'r-47':  ['Tapi Dimas tahu, rencana tanpa data cuma tebakan.', 'Tapi Dimas tahu, rencana tanpa data cuma tebakan.'],
  'r-47s': ['Cara orang modern mengalahkan gladiator: pakai data.', 'Cara orang modern mengalahkan gladiator: pakai data.'],
  'r-48':  ['Tiap hari, dia menonton gladiator lain berlatih.', 'Tiap hari, dia menonton gladiator lain berlatih.'],
  'r-49':  ['Di papan lilin, dia mencatat seperti analis sepak bola.', 'Di papan lilin, dia mencatat seperti analis sepak bola.'],
  'r-50':  ['Lawannya diumumkan: Bruno, si Banteng, juara 7 kali.', 'Lawannya diumumkan: Bruno, si Banteng, juara tujuh kali.'],
  'r-51':  ['Catatan pertama: Bruno selalu menyerbu di awal.', 'Catatan pertama: Bruno selalu menyerbu di awal.'],
  'r-52':  ['Catatan kedua: setelah 100 hitungan, tangannya turun.', 'Catatan kedua: setelah seratus hitungan, tangannya turun.'],
  'r-53':  ['Catatan ketiga: dia selalu memutar ke kiri.', 'Catatan ketiga: dia selalu memutar ke kiri.'],
  'r-54':  ['Lawan yang kuat ternyata bisa ditebak.', 'Lawan yang kuat ternyata bisa ditebak.'],
  // Bab 7 — ilmu ketiga: penonton
  'r-55':  ['Satu masalah lagi tersisa: bagaimana kalau dia kalah?', 'Satu masalah lagi tersisa: bagaimana kalau dia kalah?'],
  'r-55s': ['Di arena Romawi, hidup-mati tidak ditentukan pemenang.', 'Di arena Romawi, hidup-mati tidak ditentukan pemenang.'],
  'r-56':  ['Yang kalah boleh minta ampun. Penonton ikut memutuskan.', 'Yang kalah boleh minta ampun. Penonton ikut memutuskan.'],
  'r-57':  ['Dan Claudius suka menyuruh retiarius yang jatuh dibunuh.', 'Dan Claudius suka menyuruh retiarius yang jatuh dibunuh.'],
  'r-58':  ['Alasannya: dia ingin melihat wajah mereka saat mati.', 'Alasannya: dia ingin melihat wajah mereka saat mati.'],
  'r-59':  ['Jadi Dimas butuh penonton di pihaknya. Seperti influencer.', 'Jadi Dimas butuh penonton di pihaknya. Seperti influencer.'],
  'r-60':  ['Dia memberi dirinya julukan: Fulmen, si Petir.', 'Dia memberi dirinya julukan: Fulmen, si Petir.'],
  'r-61':  ['Dia membuat salam khas, lalu mengajarkannya ke anak pasar.', 'Dia membuat salam khas, lalu mengajarkannya ke anak pasar.'],
  'r-62':  ['Seminggu kemudian, anak-anak meneriakkan namanya di jalan.', 'Seminggu kemudian, anak-anak meneriakkan namanya di jalan.'],
  'r-63':  ['Kalau kalah pun, penonton akan membelanya.', 'Kalau kalah pun, penonton akan membelanya.'],
  // Bab 8 — duel
  'r-64':  ['Hari pertandingan tiba.', 'Hari pertandingan tiba.'],
  'r-64s': ['Pemuda kurus melawan juara 7 kali. Siapa menang?', 'Pemuda kurus melawan juara tujuh kali. Siapa menang?'],
  'r-65':  ['Pintu arena terbuka. Ribuan orang bersorak.', 'Pintu arena terbuka. Ribuan orang bersorak.'],
  'r-66':  ['Dimas memberi salam khasnya. Sebagian penonton membalas.', 'Dimas memberi salam khasnya. Sebagian penonton membalas.'],
  'r-67':  ['Bruno menyerbu, persis seperti catatannya.', 'Bruno menyerbu, persis seperti catatannya.'],
  'r-68':  ['Dimas mundur, memutar ke kanan. Selalu ke kanan.', 'Dimas mundur, memutar ke kanan. Selalu ke kanan.'],
  'r-69':  ['Dia menghitung dalam hati. 50. 80.', 'Dia menghitung dalam hati. Lima puluh. Delapan puluh.'],
  'r-70':  ['Di balik helm, Bruno mulai terengah.', 'Di balik helm, Bruno mulai terengah.'],
  'r-71':  ['100. Tangan Bruno turun.', 'Seratus. Tangan Bruno turun.'],
  'r-72':  ['Jaring dilempar. Bruno terjerat, lalu jatuh.', 'Jaring dilempar. Bruno terjerat, lalu jatuh.'],
  'r-73':  ['Trisula Dimas di lehernya. Seluruh arena menunggu.', 'Trisula Dimas di lehernya. Seluruh arena menunggu.'],
  'r-74':  ['Dimas tidak menusuk. Dia menoleh ke penonton.', 'Dimas tidak menusuk. Dia menoleh ke penonton.'],
  'r-75':  ['Penonton berteriak: ampuni keduanya!', 'Penonton berteriak: ampuni keduanya!'],
  'r-76':  ['Dua gladiator keluar hidup-hidup. Penonton puas.', 'Dua gladiator keluar hidup-hidup. Penonton puas.'],
  'r-77':  ['Hadiah koin dilempar ke pasir. Malam itu, Dimas makan daging.', 'Hadiah koin dilempar ke pasir. Malam itu, Dimas makan daging.'],
  // Penutup
  'r-78':  ['Jadi, bisakah orang modern bertahan hidup di Roma kuno?', 'Jadi, bisakah orang modern bertahan hidup di Roma kuno?'],
  'r-78s': ['Orang modern di Roma kuno, bisa bertahan hidup?', 'Orang modern di Roma kuno, bisa bertahan hidup?'],
  'r-79':  ['Dimas bisa. Tapi bukan karena otot dari masa depan.', 'Dimas bisa. Tapi bukan karena otot dari masa depan.'],
  'r-80':  ['Melainkan cara berpikir: data, fisika, dan membaca penonton.', 'Melainkan cara berpikir: data, fisika, dan membaca penonton.'],
  'r-81':  ['Tapi sumpahnya masih mengikat. Duel berikutnya menunggu.', 'Tapi sumpahnya masih mengikat. Duel berikutnya menunggu.'],
  'r-82':  ['Kalau kamu terlempar, ilmu apa yang kamu pakai? Tulis di komentar.', 'Kalau kamu terlempar, ilmu apa yang kamu pakai? Tulis di komentar.'],
  'r-83':  ['Tag temanmu yang bakal langsung menyerah di arena!', 'Tag temanmu yang bakal langsung menyerah di arena!'],
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const FITW = VERT ? undefined : 'width';
const UNGU = '#7a3b8f', TEAL = '#257179', MERAH = '#b13e53', EMAS = '#c9a24a', GELAP = '#1a1c2c';

// ---------- PETA ROMA (tempat pusat tiap bab) ----------
// jalur jalan kaki warga (sama dengan jalan yang digambar di roma_peta)
const ROMA = {
  paths: [[48, 36, 96, 36], [96, 36, 96, 44], [100, 66, 150, 66], [124, 44, 124, 66], [124, 44, 178, 44], [150, 30, 150, 66],
    [40, 66, 100, 66], [40, 66, 40, 104], [134, 66, 134, 100], [60, 50, 84, 50], [60, 36, 60, 66], [168, 44, 168, 70], [150, 30, 178, 30], [48, 36, 48, 8],
    [102, 54, 122, 54], [102, 61, 122, 61], [102, 54, 102, 66], [122, 54, 122, 66], [112, 54, 112, 66]],
};
const SUBURA = { x: 150, y: 44 };            // gang tempat Dimas terbangun
const WARGA_PETA = ['rm_tukang', 'rm_pedagang', 'rm_warga', 'rm_ibu', 'rm_budak', 'rm_pemuda', 'rm_gadis', 'rm_tua'];
function peta(steps, { c = { x: 96, y: 54, zoom: 1 }, transition = 'clouds', clock, meter, dimas = false, dimasSprite = 'dimas', dimasAt = { x: SUBURA.x, y: SUBURA.y + 1 }, jobs = [], extraProps = [] } = {}) {
  return {
    transition, sky: 'map', map: ROMA, noClouds: true, camera: c, clock, meter,
    props: [{ sprite: 'roma_peta', x: 96, y: 54, scale: 0.5, center: true, depth: 1 },
      { id: 'kilat', sprite: 'kilat', x: SUBURA.x, y: SUBURA.y + 1, scale: 0.4, depth: 20, hidden: true },
      { id: 'pin', sprite: 'roma_penanda', x: SUBURA.x, y: SUBURA.y - 3, scale: 0.8, depth: 20, hidden: true }, ...extraProps],
    actors: dimas ? [{ id: 'dimasP', sprite: dimasSprite, x: dimasAt.x, y: dimasAt.y, scale: 0.26, tag: 'DIMAS', tagColor: UNGU }] : [],
    walkers: { n: 54 - jobs.reduce((t, j) => t + j.n, 0), sprites: WARGA_PETA, scale: 0.22, jobs: [jobs], stay: [[{ act: 'idle', n: 7, x: 112, y: 58, spread: 10 }, { act: 'idle', n: 4, x: 75, y: 23, spread: 4 }, { act: 'idle', n: 3, x: 92, y: 92, spread: 14 }]] },
    steps,
  };
}

// ---------- adegan dekat: jalan Roma tampak samping ----------
const JALAN = [{ sprite: 'jalan_batu', x: 96, y: 108, depth: 2.5 }];
const CAM_DEKAT = VERT ? { x: 96, y: 72, zoom: 1.3 } : { x: 96, y: 71, zoom: 1.4 };
const r = (id, sprite, x, ex = {}) => ({ id, sprite, x, y: 94, ...ex });
const LAPAR = (value, ex = {}) => ({ meter: 'LAPAR', value, color: MERAH, ...ex });
const PELUANG = (value, ex = {}) => ({ meter: 'PELUANG HIDUP', value, color: '#38b764', text: `${Math.round(value * 100)}%`, ...ex });


// ---------- adegan bersama: halaman ludus & dalam arena ----------
const HALAMAN = [{ sprite: 'serambi_ludus', x: 96, y: 90, depth: 2 }, { sprite: 'pasir_arena', x: 96, y: 108, depth: 2.5 }];
const ARENA = [
  { sprite: 'tribun_0', anim: 'tribun', x: 96, y: 88, depth: 2 },
  { id: 'kaisar', sprite: 'kaisar_siluet', x: 96, y: 62, scale: 0.9, depth: 2.05 },
  { sprite: 'velarium', x: 96, y: 26, depth: 2.1 },
  { sprite: 'pasir_arena', x: 96, y: 108, depth: 2.5 },
];
const LUDUS_MALAM = [...[{ sprite: 'jalan_batu', x: 96, y: 108, depth: 2.5 }],
  { sprite: 'dinding_ludus', x: 96, y: 94, depth: 2 },
  { sprite: 'gagang_obor', x: 56, y: 66, depth: 3 }, { sprite: 'api_obor_0', anim: 'api_obor', x: 56, y: 56, depth: 3.1 },
  { sprite: 'gagang_obor', x: 146, y: 66, depth: 3 }, { sprite: 'api_obor_0', anim: 'api_obor', x: 146, y: 56, depth: 3.1 }];
const LUDUS_PETA = { x: 97, y: 24 };
const X = v => VERT ? Math.round(96 + (v - 96) * 0.4) : v;   // 9:16: rapatkan posisi aksi ke tengah layar
const petaLudus = { sprite: 'ludus_peta', x: 98, y: 21, scale: 0.5, center: true, depth: 1.5 };

const STORY = {
  title: 'Andaikan Terlempar ke Roma 50 M',
  audioDir: 'audio/romawi-kuno',
  sfx: true,
  musics: ['arena'],                // music-arena.mp3 ("Arena of Iron") -> adegan arena diberi { music: 'arena' }
  musicVol: 0.36,                    // musik Roma lebih jelas (default mesin 0.22)
  sfxDir: 'audio/romawi-kuno/sfx',   // musik khusus Roma ("Sunset in AD", dari pemilik) + salinan efek bersama
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — MINGGU PERTAMA: BISU =================
    {
      id: 'bab-1', title: 'Minggu pertama: bisu',
      scenes: [
        // 1) Peta Roma dari ketinggian, fajar
        peta([
          { together: [{ tint: 0.3, color: '#29366f', dur: 10 }, { camera: { x: 100, y: 56, zoom: 1.12 }, dur: 5200, ease: 'Sine.easeInOut' },
            C('r-01', [{ at: 0, kw: 'ROMA · *50 MASEHI*' }, { at: 0.05, tint: 0, dur: 2600 },
              { at: 'kota', label: 'FORUM', x: 112, y: 48, bg: GELAP, size: 14, dur: 0 },
              { at: 'salah', label: 'AMFITEATER', x: 75, y: 13, bg: GELAP, size: 14, dur: 0 },
              { at: 'kota', label: 'SUNGAI TIBER', x: 30, y: 26, bg: '#2f6fbf', size: 14, dur: 0 },
              { at: 'terbesar', label: 'CIRCUS MAXIMUS', x: 92, y: 80, bg: GELAP, size: 14, dur: 0 },
              { at: 'terbesar', label: 'ISTANA KAISAR', x: 118, y: 66, bg: EMAS, size: 14, dur: 0 },
              { at: 'salah', kw: 'KOTA *TERBESAR* DUNIA' }], { only: 'long' }),
            C('r-01s', [{ at: 0, kw: 'BANGUN DI *ROMA KUNO*?' }, { at: 0.05, tint: 0, dur: 2000 },
              { at: 'roma', label: 'FORUM', x: 112, y: 46, bg: GELAP, size: 14, dur: 0 }, { at: 'terjadi', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' }),
          ] },
          { clearLabels: true },
          { together: [{ title: 'ANDAIKAN', sub: 'Kamu terlempar ke Roma tahun 50 M', dark: true, size: 30, dur: 2600 }, C('r-02', [], { only: 'long' })], only: 'long' },
          // kilat menyambar gang Subura
          { together: [{ camera: { x: SUBURA.x, y: SUBURA.y, zoom: 2.6 }, dur: 1300, ease: 'Cubic.easeInOut' }, { label: 'SUBURA · PERMUKIMAN PADAT', x: SUBURA.x, y: SUBURA.y - 13, bg: GELAP, size: 15, dur: 1400 }] },
          { together: [{ pop: 'kilat' }, { restoreColor: true }, { shake: 350 }, { sfx: 'buzz', vol: 0.7 }] },
          { hide: 'kilat', dur: 150 },
        ], { transition: undefined, c: { x: 96, y: 54, zoom: 1 }, clock: 'HARI 1' }),

        // 2) Gang sempit Subura, pagi: terbangun, HP mati, bahasa Latin
        {
          transition: 'zoom', sky: 'dawn', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 1',
          props: [...JALAN,
            { sprite: 'pinus_samping', x: 84, y: 62, depth: 2.2 }, { sprite: 'siprus_samping', x: 114, y: 60, depth: 2.2 },
            { sprite: 'kuil_jauh', x: 98, y: 87, scale: 0.8, depth: 2.3 },
            { sprite: 'insula_a', x: 42, y: 88, depth: 3 },
            { sprite: 'insula_b', x: 154, y: 88, depth: 3 },
            { sprite: 'amfora', x: 74, y: 89, depth: 4 }, { sprite: 'amfora', x: 79, y: 89, depth: 4, flip: true },
            { sprite: 'amfora', x: 127, y: 89, depth: 4 },
            { id: 'tidur', sprite: 'dimas_tidur', x: 96, y: 95, depth: 9 },
            { id: 'hp', sprite: 'hp_nyala', x: 103, y: 87, scale: 1.6, depth: 12, hidden: true },
          ],
          actors: [
            r('dimas', 'dimas', 96, { hidden: true, name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('rm1', 'rm_warga', 220, { face: 'left', name: 'Warga' }),
            r('rm2', 'rm_ibu', -30, { name: 'Ibu' }),
            r('rm3', 'rm_budak', -40),
          ],
          steps: [
            { together: [{ emote: 'tidur', icon: 'zzz', dur: 1300 }, { wait: 1400 }] },
            C('r-03', [
              { at: 0, kw: 'HARI 1' },
              { at: 'terbangun', hide: 'tidur', dur: 200 }, { at: 'terbangun', show: 'dimas', dur: 200 }, { at: 'terbangun', jump: 'dimas', times: 1, height: 4 },
              { at: 'gang', emote: 'dimas', icon: 'question', dur: 900 },
              { at: 'mati', pop: 'hp' }, { at: 'mati', label: 'SINYAL: 0', x: 112, y: 74, bg: MERAH, size: 18, dur: 0 },
              { at: 'tanpa', swap: 'hp', to: 'hp_mati' }, { at: 'tanpa', kw: 'HP *MATI*' }, { at: 'sinyal', emote: 'dimas', icon: 'sweat', dur: 1000 },
            ]),
            { together: [{ clearLabels: true }, { hide: 'hp', dur: 250 }] },
            C('r-04', [
              { at: 0, enter: 'rm1', from: 'right', to: 122 }, { at: 0, enter: 'rm2', from: 'left', to: 70 },
              { at: 'latin', say: 'rm1', text: 'Salve! Quis es?', dur: 1300 },
              { at: 'latin', kw: 'BAHASA *LATIN*' },
              { at: 'paham', label: '(Halo! Kamu siapa?)', x: 120, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'satu kata', emote: 'dimas', icon: 'question', dur: 1200 },
            ]),
            { clearLabels: true },
            C('r-05', [
              { at: 0, face: 'dimas', dir: 'right' }, { at: 0, say: 'dimas', text: 'Hello? Excuse me...', dur: 1200 },
              { at: 'inggris', kw: '"*HELLO*?"' },
              { at: 'tertawa', jump: 'rm1', times: 2, height: 3 }, { at: 'tertawa', jump: 'rm2', times: 2, height: 3 },
              { at: 'malah', say: 'rm2', text: 'Ha ha! Barbarus!', dur: 1000 },
              { at: 'malah', label: '(Orang asing!)', x: 72, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'malah', sticker: 'sweat', at_: [0.5, 0.3] },
            ]),
            { wait: 400 },
            { clearLabels: true },
            C('r-06', [
              { at: 0, exit: 'rm1', to: 'right' }, { at: 0, exit: 'rm2', to: 'left' },
              { at: 'inggris', kw: 'INGGRIS *BELUM ADA*' },
              { at: 'lahir', card: 'Bahasa Inggris', items: ['Bahasa Inggris Kuno muncul', 'abad ke-5 M, di Britania', 'Tahun 50 M: belum ada'], x: 96, y: 60, place: 'left' },
              { at: 'lagi', enter: 'rm3', from: 'left', to: 60 },
            ], { punch: true }),
            { wait: 1600 },   // beri waktu membaca kartu
            { clear: true },
          ],
        },

        // 3) Jalan pasar: seminggu menunjuk & mengangguk, tanpa koin
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 70 } : CAM_DEKAT, clock: 'HARI 2',
          props: [...JALAN,
            { sprite: 'siprus_samping', x: 92, y: 58, depth: 2.2 }, { sprite: 'siprus_samping', x: 104, y: 60, depth: 2.2, scale: 0.9 }, { sprite: 'kuil_jauh', x: 98, y: 87, scale: 0.6, depth: 2.3 },
            { sprite: 'insula_c', x: 44, y: 88, depth: 3 },
            { sprite: 'insula_a', x: 150, y: 88, depth: 3 },
            { sprite: 'air_mancur', x: 106, y: 90, depth: 4 },
            { id: 'meja', sprite: 'meja_roti', x: 52, y: 96, depth: 8 },
            { sprite: 'amfora', x: 160, y: 89, depth: 4 }, { sprite: 'amfora', x: 166, y: 89, depth: 4 },
          ],
          actors: [
            r('tukang', 'rm_pedagang', 52, { y: 90, depth: 7, face: 'right', name: 'Tukang roti', tag: 'TUKANG ROTI', tagColor: TEAL }),
            r('dimas', 'dimas', 80, { face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('lw1', 'rm_warga', 230, { face: 'left' }), r('lw2', 'rm_gadis', -30), r('lw3', 'rm_tukang', 240, { face: 'left' }),
          ],
          steps: [
            C('r-07', [
              { at: 0, clock: 'HARI', from: 2, to: 7, dur: 3200 },
              { at: 0, enter: 'lw1', from: 'right', to: -20, speed: 22 },
              { at: 'menunjuk', emote: 'dimas', icon: 'exclaim', dur: 900 },
              { at: 'menunjuk', say: 'dimas', text: '...?', dur: 1000 },
              { at: 'mengangguk', jump: 'dimas', times: 3, height: 2 },
              { at: 'seminggu', kw: '*BISU* 7 HARI' },
              { at: 'mengangguk', enter: 'lw2', from: 'left', to: 220, speed: 20 },
            ]),
            C('r-08', [
              { at: 'roti', label: 'ROTI', x: 50, y: 78, bg: '#c98a45', size: 18, dur: 0 }, { at: 'roti', emote: 'dimas', icon: 'heart', dur: 900 }, { at: 0, kw: 'INGIN *ROTI*' },
              { at: 'tapi', say: 'tukang', text: 'Pecunia?', dur: 1000 },
              { at: 'tapi', label: '(Uangnya?)', x: 52, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'koin', emote: 'dimas', icon: 'sweat', dur: 1300 }, { at: 'tak punya', kw: 'TANPA *SATU KOIN*' },
              { at: 'pun', enter: 'lw3', from: 'right', to: -20, speed: 24 },
            ]),
            { clear: true },
          ],
        },

        // 4) Kembali ke peta: zoom keluar dari Dimas — sendirian di kota besar
        peta([
          { together: [{ pop: 'pin' }, { camera: { x: 112, y: 54, zoom: 1 }, dur: 5200, ease: 'Sine.easeInOut' },
            C('r-09', [{ at: 'kota', kw: '± *1 JUTA* ORANG' }, { at: 'sejuta', label: 'perkiraan sejarawan', x: 150, y: 96, bg: GELAP, size: 13, dur: 0 },
              { at: 'sendirian', kw: 'DIA *SENDIRIAN*', keepKw: true }, { at: 'sendirian', emote: 'dimasP', icon: 'sweat', dur: 1400 }], { punch: true, keepKw: true })] },
          { wait: 700 },
        ], { transition: 'clouds', c: { x: SUBURA.x, y: SUBURA.y, zoom: 2.8 }, clock: 'HARI 7', dimas: true }),
      ],
    },

    // ================= BAB 2 — DUNIA SERBA MANUAL =================
    {
      id: 'bab-2', title: 'Dunia serba manual',
      scenes: [
        // 1) Peta: dari Subura, budak memikul guci dari pelabuhan Tiber ke Forum
        peta([
          { together: [{ pop: 'pin' }, { camera: { x: 104, y: 56, zoom: 1.5 }, dur: 4200, ease: 'Sine.easeInOut' },
            C('r-10', [{ at: 0, kw: 'DIMAS *MENGAMATI*' }, { at: 'kota', emote: 'dimasP', icon: 'question', dur: 1000 }], { only: 'long' }),
            C('r-10s', [{ at: 0, kw: 'TANPA *LISTRIK*?' }, { at: 'mesin', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          C('r-11', [{ at: 'listrik', kw: 'TANPA *LISTRIK* & *MESIN*' },
            { at: 'mesin', camera: { x: 66, y: 62, zoom: 2.1 }, dur: 1600 },
            { at: 'mesin', label: 'PELABUHAN TIBER', x: 58, y: 58, bg: '#2f6fbf', size: 14, dur: 0 },
            { at: 'digerakkan', kw: 'SEMUA *TENAGA OTOT*' }]),
          { clearLabels: true },
        ], { transition: 'clouds', c: { x: SUBURA.x, y: SUBURA.y, zoom: 2.6 }, clock: 'HARI 8', dimas: true,
          jobs: [{ n: 9, from: [42, 66], to: [104, 60], carry: 'amfora', carryScale: 0.5 }, { n: 5, from: [42, 70], to: [80, 98], carry: 'amfora', carryScale: 0.5 }] }),

        // 2) Jalan bengkel: budak memikul guci, menggiling gandum, menyalin buku
        {
          transition: 'clouds', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 8',
          props: [...JALAN,
            { sprite: 'pinus_samping', x: 98, y: 60, depth: 2.2 },
            { sprite: 'insula_c', x: 40, y: 88, depth: 3 }, { sprite: 'insula_b', x: 156, y: 88, depth: 3 },
            { sprite: 'kuil_jauh', x: 98, y: 87, scale: 0.7, depth: 2.3 },
            { id: 'giling', sprite: 'gilingan_0', anim: 'gilingan', x: 54, y: 96, depth: 8 },
            { id: 'tulis', sprite: 'meja_tulis', x: 142, y: 96, depth: 8 },
            { id: 'guci', sprite: 'amfora', x: 214, y: 82, depth: 12 },
          ],
          actors: [
            r('dimas', 'dimas', 98, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('penggiling', 'rm_budak', 41, { name: 'Budak', face: 'right' }),
            r('penulis', 'rm_pemuda', 134, { y: 89, depth: 7, name: 'Juru tulis', face: 'left' }),
            r('pemikul', 'rm_budak', 214, { face: 'left', name: 'Budak' }),
          ],
          steps: [
            C('r-12', [
              { at: 0, kw: 'TENAGA *BUDAK*' },
              { at: 'memikul', move: 'pemikul', to: 120, dur: 2600 }, { at: 'memikul', move: 'guci', to: 120, dur: 2600 },
              { at: 'memikul', label: 'MEMIKUL GUCI', x: 146, y: 70, bg: GELAP, size: 16, dur: 0 },
              { at: 'menggiling', label: 'MENGGILING GANDUM', x: 46, y: 64, bg: GELAP, size: 16, dur: 0 },
              { at: 'menggiling', emote: 'penggiling', icon: 'sweat', dur: 1200 },
              { at: 'gandum', label: 'MENYALIN BUKU', x: 142, y: 56, bg: GELAP, size: 16, dur: 0 },
              { at: 'buku', emote: 'penulis', icon: 'note', dur: 1000 },
            ]),
            { clearLabels: true },
            C('r-13', [
              { at: 0, move: 'pemikul', to: 60, dur: 3600 }, { at: 0, move: 'guci', to: 60, dur: 3600 },
              { at: 'sepertiga', kw: '± *1 DARI 3* ORANG = BUDAK' },
              { at: 'sepertiga', card: 'Budak di Italia', items: ['± sepertiga penduduk', '(perkiraan sejarawan)', 'Tanpa hak, bisa dijual'], x: 98, y: 60, place: 'left' },
              { at: 'budak', emote: 'dimas', icon: 'exclaim', dur: 1000 },
            ]),
            { wait: 1800 },   // beri waktu membaca kartu
            { clear: true },
            C('r-14', [
              { at: 0, card: 'Tangga sosial Roma', items: ['1. Kaisar', '2. Senator & bangsawan', '3. Warga Roma', '4. Mantan budak', '5. Budak'], x: 98, y: 60, place: 'left' },
              { at: 'claudius', kw: 'ATAS: *KAISAR*' }, { at: 'bawah', kw: 'BAWAH: *BUDAK*' },
            ]),
            C('r-15', [
              { at: 'asing', kw: 'ORANG ASING = *RENTAN*' }, { at: 'dimas', glow: 'dimas', times: 2 },
              { at: 'jatuh', emote: 'dimas', icon: 'sweat', dur: 1400 }, { at: 'jatuh', sticker: 'sweat', at_: [0.7, 0.3] },
            ], { punch: true }),
            { clear: true },
          ],
        },

        // 3) Lapak baju bekas: kaos & jins ditukar tunik
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 80 } : CAM_DEKAT, clock: 'HARI 9',
          props: [...JALAN,
            { sprite: 'siprus_samping', x: 102, y: 60, depth: 2.2 },
            { sprite: 'insula_a', x: 44, y: 88, depth: 3 }, { sprite: 'insula_c', x: 152, y: 88, depth: 3 },
            { sprite: 'lapak_baju', x: 64, y: 96, depth: 8 },
            { id: 'kaos', sprite: 'kaos_modern', x: 90, y: 88, depth: 12, hidden: true },
            { id: 'asap', sprite: 'puff', x: 98, y: 92, scale: 2.4, depth: 13, hidden: true },
          ],
          actors: [
            r('penjual', 'rm_gadis', 54, { y: 89, depth: 7, face: 'right', name: 'Penjual', tag: 'PENJUAL BAJU', tagColor: TEAL }),
            r('dimas', 'dimas', 98, { face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('dimasT', 'dimas_tunik', 98, { face: 'left', hidden: true, name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-16', [
              { at: 0, kw: 'KAOS + JINS → *TUNIK*' },
              { at: 'menukar', pop: 'kaos' }, { at: 'kaos', move: 'kaos', to: 74, dur: 900 },
              { at: 'jinsnya', say: 'penjual', text: 'Mirabile!', dur: 900 },
              { at: 'jinsnya', label: '(Ajaib!)', x: 54, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'tunik', pop: 'asap' }, { at: 'tunik', hide: 'dimas', dur: 150 }, { at: 'tunik', show: 'dimasT', dur: 250 },
              { at: 'kasar', hide: 'asap', dur: 300 }, { at: 'kasar', emote: 'dimasT', icon: 'sweat', dur: 1000 },
            ]),
            { clear: true },
          ],
        },

        // 4) Gang kotor: selokan terbuka, lalat, orang demam → panik
        {
          transition: 'cut', sky: 'sunset', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 9',
          props: [...JALAN,
            { id: 'selokan', sprite: 'selokan', x: 100, y: 104, depth: 2.6 },
            { sprite: 'insula_b', x: 42, y: 88, depth: 3 }, { sprite: 'insula_a', x: 154, y: 88, depth: 3 },
            { sprite: 'kuil_jauh', x: 98, y: 87, scale: 0.7, depth: 2.3 },
            { sprite: 'tikar', x: 60, y: 93, scale: 1.3, depth: 5 },
            { id: 'sakit', sprite: 'orang_sakit', x: 60, y: 92, scale: 1.3, depth: 6 },
            { id: 'lalat1', sprite: 'lalat_0', anim: 'lalat', x: 60, y: 84, depth: 14, float: true },
            { id: 'lalat2', sprite: 'lalat_0', anim: 'lalat', x: 104, y: 100, depth: 14, float: true },
            { sprite: 'amfora', x: 130, y: 89, depth: 4, flip: true },
          ],
          actors: [ r('dimas', 'dimas_tunik', 116, { face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-17', [
              { at: 'selokan', label: 'SELOKAN TERBUKA', x: 100, y: 96, bg: '#5d6a3a', size: 16, dur: 0 },
              { at: 'lalat', label: 'LALAT', x: 104, y: 86, bg: GELAP, size: 16, dur: 0 },
              { at: 'lalat,', label: 'DEMAM', x: 60, y: 78, bg: MERAH, size: 16, dur: 0 },
              { at: 'orang', emote: 'sakit', icon: 'sweat', dur: 1400 },
              { at: 'lalat,', kw: 'SELOKAN · LALAT · *DEMAM*' },
            ]),
            { clearLabels: true },
            C('r-18', [
              { at: 'antibiotik', kw: 'TANPA *ANTIBIOTIK*' },
              { at: 'antibiotik', label: 'ANTIBIOTIK: 1928', x: 140, y: 62, bg: GELAP, size: 16, dur: 0 },
              { at: 'rumah sakit', kw: 'TANPA *RUMAH SAKIT UMUM*' },
              { at: 'panik', emote: 'dimas', icon: 'exclaim', dur: 1200 }, { at: 'panik', shake: 300 }, { at: 'panik', jump: 'dimas', times: 2, height: 3 },
              { at: 'panik', camera: { x: 112, y: 80, zoom: 2.1 }, dur: 900 },
            ]),
            { clearLabels: true },
            { together: [{ mono: true }, C('r-19', [{ at: 'sakit perut', kw: 'SAKIT PERUT = *BISA MEMBUNUH*', keepKw: true }, { at: 'membunuh', sticker: 'dizzy', at_: [0.72, 0.3] }], { punch: true, keepKw: true })] },
            { mono: false },
          ],
        },
      ],
    },
    // ================= BAB 3 — KELAPARAN =================
    {
      id: 'bab-3', title: 'Kelaparan',
      scenes: [
        // 1) Peta: hari ke-10, meteran LAPAR muncul
        peta([
          { together: [{ pop: 'pin' }, { camera: { x: SUBURA.x - 6, y: SUBURA.y + 2, zoom: 2.1 }, dur: 4000, ease: 'Sine.easeInOut' },
            C('r-20', [{ at: 'bukan', kw: 'BUKAN *PENYAKIT*' }, { at: 'membunuhnya', emote: 'dimasP', icon: 'sweat', dur: 1000 }], { only: 'long' }),
            C('r-20s', [{ at: 0, kw: 'TANPA *UANG*?' }, { at: 'makan', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          C('r-21', [{ at: 'kesepuluh', ...LAPAR(0.6) }, { at: 'perutnya', emote: 'dimasP', icon: 'sweat', dur: 1200 },
            { at: 'perutnya', kw: 'PERUT *KOSONG*' }, { at: 'kosong', shake: 200 }]),
        ], { transition: 'clouds', c: { x: SUBURA.x, y: SUBURA.y, zoom: 2.8 }, clock: 'HARI 10', dimas: true, dimasSprite: 'dimas_tunik' }),

        // 2) Depan toko roti: mengemis, semua lewat begitu saja
        {
          transition: 'zoom', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 70 } : CAM_DEKAT, clock: 'HARI 10', meter: LAPAR(0.6),
          props: [...JALAN,
            { sprite: 'siprus_samping', x: 92, y: 58, depth: 2.2 }, { sprite: 'kuil_jauh', x: 102, y: 87, scale: 0.6, depth: 2.3 },
            { sprite: 'insula_c', x: 44, y: 88, depth: 3 }, { sprite: 'insula_a', x: 150, y: 88, depth: 3 },
            { id: 'meja', sprite: 'meja_roti', x: 52, y: 96, depth: 8 },
            { id: 'mangkuk', sprite: 'mangkuk', x: 88, y: 95, scale: 1.3, depth: 10 },
            { sprite: 'amfora', x: 160, y: 89, depth: 4 },
          ],
          actors: [
            r('tukang', 'rm_pedagang', 52, { y: 90, depth: 7, face: 'right', name: 'Tukang roti', tag: 'TUKANG ROTI', tagColor: TEAL }),
            r('dimas', 'dimas_duduk', 80, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('lw1', 'rm_warga', 230, { face: 'left' }), r('lw2', 'rm_ibu', -30), r('lw3', 'rm_tua', 240, { face: 'left' }),
          ],
          steps: [
            C('r-22', [
              { at: 0, kw: '*MENGEMIS*' }, { at: 0, enter: 'lw1', from: 'right', to: -20, speed: 24 },
              { at: 'mengemis', say: 'dimas', text: 'Panem... quaeso?', dur: 1200 },
              { at: 'mengemis', label: '(Roti... tolong?)', x: 84, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'roti', enter: 'lw2', from: 'left', to: 230, speed: 22 },
              { at: 'tak ada', kw: 'TAK ADA YANG *MEMBERI*' }, { at: 'tak ada', enter: 'lw3', from: 'right', to: -20, speed: 20 },
              { at: 'memberi', emote: 'dimas', icon: 'sweat', dur: 1400 },
            ]),
            { clearLabels: true },
          ],
        },

        // 3) Pembagian gandum gratis: hanya warga terdaftar
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 112 } : CAM_DEKAT, clock: 'HARI 12', meter: LAPAR(0.7),
          props: [...JALAN,
            { sprite: 'kuil_jauh', x: 112, y: 87, scale: 0.9, depth: 2.3 }, { sprite: 'pinus_samping', x: 72, y: 60, depth: 2.2 },
            { sprite: 'insula_b', x: 30, y: 88, depth: 3 }, { sprite: 'insula_c', x: 172, y: 88, depth: 3 },
            { sprite: 'meja_gandum', x: 132, y: 96, depth: 8 },
            { sprite: 'karung_gandum', x: 152, y: 95, depth: 9 }, { sprite: 'karung_gandum', x: 160, y: 95, depth: 9, flip: true },
          ],
          actors: [
            r('petugas', 'rm_warga', 136, { y: 89, depth: 7, face: 'left', name: 'Petugas' }),
            r('q1', 'rm_tua', 114), r('q2', 'rm_pemuda', 103), r('q3', 'rm_tukang', 92),
            r('dimas', 'dimas_tunik', 50, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-23', [
              { at: 0, kw: 'GANDUM *GRATIS*' },
              { at: 'gandum', label: 'GANDUM GRATIS', x: 132, y: 72, bg: '#c98a45', size: 16, dur: 0 },
              { at: 'gratis', jump: 'q1', times: 1, height: 3 },
              { at: 'tapi', move: 'dimas', to: 81, dur: 1100 },
              { at: 'khusus', kw: 'KHUSUS *WARGA TERDAFTAR*' },
              { at: 'gratis', card: 'Jatah gandum Roma', items: ['± 200.000 penerima', 'Hanya warga Roma terdaftar', 'Orang asing: tidak dapat'], x: 120, y: 60, place: 'left' },
            ]),
            { wait: 1600 },   // beri waktu membaca kartu
            { clear: true },
            C('r-24', [
              { at: 0, exit: 'q1', to: 'right' }, { at: 0, exit: 'q2', to: 'right' }, { at: 0, exit: 'q3', to: 'right' },
              { at: 0, move: 'dimas', to: 114, dur: 1000 },
              { at: 'dimas', say: 'petugas', text: 'Civis Romanus?', dur: 1000 },
              { at: 'dimas', label: '(Warga Roma?)', x: 134, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'tidak', kw: '*BUKAN* WARGA' }, { at: 'termasuk', stamp: 'DITOLAK', at_: [0.5, 0.36] },
            ]),
            { clearLabels: true },
            { together: [{ emote: 'dimas', icon: 'sweat', dur: 900 }, { move: 'dimas', to: 60, dur: 1000 }] },
          ],
        },

        // 4) Pasar buah: memungut sisa, diusir
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 118 } : CAM_DEKAT, clock: 'HARI 13', meter: LAPAR(0.8),
          props: [...JALAN,
            { sprite: 'siprus_samping', x: 96, y: 60, depth: 2.2 }, { sprite: 'kuil_jauh', x: 84, y: 87, scale: 0.6, depth: 2.3 },
            { sprite: 'insula_a', x: 36, y: 88, depth: 3 }, { sprite: 'insula_b', x: 168, y: 88, depth: 3 },
            { sprite: 'lapak_buah', x: 132, y: 96, depth: 8 },
            { id: 'buah', sprite: 'buah_jatuh', x: 108, y: 96, scale: 1.3, depth: 10 },
            { sprite: 'amfora', x: 72, y: 89, depth: 4 },
          ],
          actors: [
            r('pedagang', 'rm_pedagang', 134, { y: 89, depth: 7, face: 'left', name: 'Pedagang', tag: 'PEDAGANG BUAH', tagColor: TEAL }),
            r('dimas', 'dimas_tunik', 70, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-25', [
              { at: 0, move: 'dimas', to: 102, dur: 1300 },
              { at: 'sisa', kw: '*SISA* BUAH' }, { at: 'buah', hide: 'buah', dur: 200 }, { at: 'buah', emote: 'dimas', icon: 'heart', dur: 700 },
              { at: 'diusir', say: 'pedagang', text: 'Fur! Abi!', dur: 1000, shout: true },
              { at: 'diusir', label: '(Pencuri! Pergi!)', x: 126, y: 52, bg: MERAH, size: 17, dur: 0 },
              { at: 'diusir', jump: 'pedagang', times: 2, height: 3 }, { at: 'diusir', kw: '*DIUSIR*' },
              { at: 'pedagang', emote: 'dimas', icon: 'exclaim', dur: 700 },
            ]),
            { clearLabels: true },
            { together: [{ face: 'dimas', dir: 'left' }, { exit: 'dimas', to: 'left', speed: 60 }] },
          ],
        },

        // 5) Gang senja: hari ke-14, gemetar, pandangan kabur → butuh uang cepat
        {
          transition: 'cut', sky: 'sunset', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 13', meter: LAPAR(0.8),
          props: [...JALAN,
            { sprite: 'insula_b', x: 42, y: 88, depth: 3 }, { sprite: 'insula_c', x: 154, y: 88, depth: 3 },
            { sprite: 'pinus_samping', x: 100, y: 60, depth: 2.2 },
            { sprite: 'amfora', x: 76, y: 89, depth: 4 }, { sprite: 'amfora', x: 122, y: 89, depth: 4, flip: true },
          ],
          actors: [ r('dimas', 'dimas_tunik', 98, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-26', [
              { at: 0, clock: 'HARI', from: 13, to: 14, dur: 600 },
              { at: 'kakinya', kw: 'KAKI *GEMETAR*' }, { at: 'kakinya', encok: 'dimas', dur: 1400 }, { at: 'gemetar', ...LAPAR(0.92) },
              { at: 'pandangannya', camera: { x: 98, y: 80, zoom: 2.2 }, dur: 1400 }, { at: 'pandangannya', tint: 0.5, color: GELAP, dur: 1200 },
              { at: 'pandangannya', kw: 'PANDANGAN *KABUR*' }, { at: 'kabur', sticker: 'dizzy', at_: [0.72, 0.3] },
            ]),
            { together: [{ mono: true }, C('r-27', [
              { at: 'uang', kw: 'UANG *CEPAT*' }, { at: 'cepat', ...LAPAR(1, { text: 'KRITIS' }) }, { at: 'cepat', shake: 250 },
              { at: 'syarat', kw: 'UANG CEPAT · *TANPA SYARAT*', keepKw: true },
            ], { punch: true, keepKw: true })] },
            { mono: false },
          ],
        },
      ],
    },
    // ================= BAB 4 — ARENA =================
    {
      id: 'bab-4', title: 'Arena',
      scenes: [
        // 1) Peta: seluruh kota mengalir ke amfiteater; Dimas ikut arus
        peta([
          { together: [{ camera: { x: 112, y: 36, zoom: 1.6 }, dur: 4200, ease: 'Sine.easeInOut' }, { crowd: 'goto', x: 75, y: 24, spread: 9, frac: 0.8, rush: 1.5 },
            C('r-28', [{ at: 'kota', emote: 'dimasP', icon: 'question', dur: 1000 }, { at: 'seluruh', kw: 'SEMUA KE *SATU ARAH*' }], { only: 'long' }),
            C('r-28s', [{ at: 0, kw: 'JALAN PINTAS *MENGERIKAN*' }, { at: 'mengerikan', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          C('r-29', [
            { at: 0, move: 'dimasP', to: 82, dur: 3400 }, { at: 0, raise: 'dimasP', to: 29, dur: 3400 },
            { at: 0, camera: { x: 80, y: 26, zoom: 2.5 }, dur: 3200 },
            { at: 'ikut', label: 'AMFITEATER STATILIUS TAURUS', x: 75, y: 11, bg: GELAP, size: 14, dur: 0 },
            { at: 'amfiteater', kw: 'AMFITEATER *BATU*' },
          ]),
          { clearLabels: true },
        ], { transition: 'clouds', c: { x: SUBURA.x, y: SUBURA.y, zoom: 2.6 }, clock: 'HARI 15', meter: LAPAR(1, { text: 'KRITIS' }), dimas: true, dimasSprite: 'dimas_tunik' }),

        // 2) Fasad amfiteater: warga antre masuk; Colosseum belum ada
        {
          transition: 'zoom', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 15', meter: LAPAR(1, { text: 'KRITIS' }),
          props: [...JALAN,
            { sprite: 'pinus_samping', x: 6, y: 62, depth: 2.2 }, { sprite: 'siprus_samping', x: 186, y: 60, depth: 2.2 },
            { sprite: 'amfiteater_luar', x: 96, y: 92, scale: 0.72, depth: 3 },
            { sprite: 'amfora', x: 40, y: 89, depth: 4 }, { sprite: 'amfora', x: 150, y: 89, depth: 4, flip: true },
            { id: 'ikon', sprite: 'colosseum_ikon', x: VERT ? 110 : 140, y: 66, depth: 20, hidden: true },
            { id: 'silang', sprite: 'tanda_x', x: VERT ? 110 : 140, y: 67, scale: 0.85, depth: 21, hidden: true },
          ],
          actors: [
            r('w1', 'rm_warga', -20), r('w2', 'rm_tukang', 220, { face: 'left' }), r('w3', 'rm_ibu', -30), r('w4', 'rm_pemuda', 230, { face: 'left' }),
            r('w5', 'rm_tua', -40), r('w6', 'rm_gadis', 240, { face: 'left' }),
            r('dimas', 'dimas_tunik', -25, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            { together: [{ enter: 'w1', from: 'left', to: 96, speed: 34 }, { enter: 'w2', from: 'right', to: 96, speed: 30 }, { enter: 'dimas', from: 'left', to: 66, speed: 34 }, { wait: 900 }] },
            C('r-30', [
              { at: 0, hide: 'w1', dur: 300 }, { at: 0, enter: 'w3', from: 'left', to: 96, speed: 30 }, { at: 0, enter: 'w4', from: 'right', to: 96, speed: 32 },
              { at: 'colosseum', pop: 'ikon' }, { at: 'colosseum', label: 'COLOSSEUM', x: VERT ? 110 : 140, y: 34, bg: GELAP, size: 15, dur: 0 },
              { at: 'belum', pop: 'silang' }, { at: 'belum', sfx: 'buzz', vol: 0.6 }, { at: 'belum', kw: 'COLOSSEUM *BELUM ADA*' }, { at: 'belum', hide: 'w2', dur: 300 },
              { at: 'dibangun', card: 'Amfiteater di Roma', items: ['Ini: amfiteater batu pertama', '(Statilius Taurus, 29 SM)', 'Colosseum: dibangun ±70 M', 'Dibuka tahun 80 M'], x: 96, y: 66, place: 'left' },
              { at: 'dibangun', enter: 'w5', from: 'left', to: 96, speed: 26 }, { at: 'tahun', hide: 'w3', dur: 300 }, { at: 'tahun', enter: 'w6', from: 'right', to: 96, speed: 30 },
              { at: 'lagi', hide: 'w4', dur: 300 },
            ]),
            { wait: 2400 },   // beri waktu membaca kartu
            { clear: true },
            { together: [{ move: 'dimas', to: 96, dur: 1300 }, { hide: 'ikon', dur: 300 }, { hide: 'silang', dur: 300 }] },
          ],
        },

        // 3) Di dalam arena: tribun bersorak, duel murmillo vs thraex (musik arena)
        {
          transition: 'zoom', music: 'arena', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 15', meter: LAPAR(1, { text: 'KRITIS' }),
          props: [
            { sprite: 'tribun_0', anim: 'tribun', x: 96, y: 88, depth: 2 },
            { sprite: 'velarium', x: 96, y: 26, depth: 2.1 },
            { sprite: 'pasir_arena', x: 96, y: 108, depth: 2.5 },
            { id: 'g1', sprite: 'gl_murmillo', x: 62, y: 102, scale: 1.25, depth: 10 },
            { id: 'g2', sprite: 'gl_thraex', x: 132, y: 102, scale: 1.25, depth: 10, flip: true },
            { id: 'denting', sprite: 'denting', x: 97, y: 88, scale: 1.2, depth: 12, hidden: true },
          ],
          actors: [ r('dimas', 'dimas_tunik', 150, { y: 75, scale: 0.6, name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-31', [
              { at: 0, move: 'g1', to: 86, dur: 1000 }, { at: 0, move: 'g2', to: 108, dur: 1000 },
              { at: 'gladiator', swap: 'g1', to: 'gl_murmillo_serang' }, { at: 'gladiator', pop: 'denting' }, { at: 'gladiator', shake: 180 }, { at: 'gladiator', kw: 'GLADIATOR' },
              { at: 'bertarung', swap: 'g1', to: 'gl_murmillo' }, { at: 'bertarung', swap: 'g2', to: 'gl_thraex_serang' }, { at: 'bertarung', pop: 'denting' }, { at: 'bertarung', jump: 'g1', times: 1, height: 3 },
              { at: 'kebanyakan', swap: 'g2', to: 'gl_thraex' }, { at: 'kebanyakan', hide: 'denting', dur: 100 }, { at: 'kebanyakan', emote: 'dimas', icon: 'exclaim', dur: 900 },
              { at: 'budak', label: 'BUDAK', x: 84, y: 74, bg: GELAP, size: 15, dur: 0 }, { at: 'tawanan', label: 'TAWANAN PERANG', x: 112, y: 66, bg: MERAH, size: 15, dur: 0 },
              { at: 'kebanyakan', kw: 'KEBANYAKAN *BUDAK* & *TAWANAN*' },
            ]),
            { together: [{ swap: 'g2', to: 'gl_thraex_serang' }, { pop: 'denting' }, { shake: 200 }, { jump: 'g1', times: 1, height: 4 }] },
            { together: [{ swap: 'g2', to: 'gl_thraex' }, { swap: 'g1', to: 'gl_murmillo_serang' }, { pop: 'denting' }, { jump: 'g2', times: 1, height: 4 }, { wait: 500 }] },
            { clear: true },
          ],
        },

        // 4) Di gerbang: lanista merekrut relawan — uang muka, lalu sumpah
        {
          transition: 'cut', sky: 'sunset', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: 108 } : CAM_DEKAT, clock: 'HARI 15', meter: LAPAR(1, { text: 'KRITIS' }),
          props: [...JALAN,
            { sprite: 'amfiteater_luar', x: 96, y: 92, scale: 0.72, depth: 3 },
            { sprite: 'obor', x: 136, y: 90, depth: 4 }, { sprite: 'obor', x: 76, y: 90, depth: 4 },
            { sprite: 'meja_rekrut', x: 124, y: 96, depth: 8 },
            { id: 'k1', sprite: 'koin', x: 118, y: 86, scale: 1.4, depth: 13, hidden: true }, { id: 'k2', sprite: 'koin', x: 122, y: 85, scale: 1.4, depth: 13, hidden: true }, { id: 'k3', sprite: 'koin', x: 126, y: 86, scale: 1.4, depth: 13, hidden: true },
            { id: 'i1', sprite: 'ikon_api', x: 84, y: 76, scale: 0.7, depth: 20, hidden: true }, { id: 'i2', sprite: 'ikon_rantai', x: 95, y: 76, scale: 0.7, depth: 20, hidden: true },
            { id: 'i3', sprite: 'ikon_cambuk', x: 84, y: 88, scale: 0.7, depth: 20, hidden: true }, { id: 'i4', sprite: 'ikon_pedang', x: 95, y: 88, scale: 0.7, depth: 20, hidden: true },
          ],
          actors: [
            r('lanista', 'rm_lanista', 128, { y: 90, depth: 7, face: 'left', name: 'Varus', tag: 'LANISTA VARUS', tagColor: TEAL }),
            r('calon', 'rm_pemuda', 100, { face: 'right' }), r('calon2', 'rm_tukang', 88, { face: 'right' }),
            r('dimas', 'dimas_tunik', 62, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-32', [
              { at: 'pria', say: 'lanista', text: 'Quis pugnare vult?', dur: 1300, shout: true },
              { at: 'pria', label: '(Siapa mau bertarung?)', x: 124, y: 49, bg: GELAP, size: 17, dur: 0 },
              { at: 'siapa', jump: 'lanista', times: 1, height: 3 }, { at: 'siapa', exit: 'calon', to: 'left', speed: 45 }, { at: 'siapa', exit: 'calon2', to: 'left', speed: 40 },
              { at: 'siapa', kw: '*RELAWAN* BOLEH DAFTAR' }, { at: 'mendaftar', emote: 'dimas', icon: 'exclaim', dur: 900 },
            ]),
            { clearLabels: true },
            C('r-33', [
              { at: 0, move: 'dimas', to: 104, dur: 1100 },
              { at: 'langsung', say: 'lanista', text: 'Pecunia statim!', dur: 1000 }, { at: 'langsung', label: '(Uang langsung!)', x: 124, y: 49, bg: GELAP, size: 17, dur: 0 },
              { at: 'uang', pop: 'k1' }, { at: 0, kw: 'UANG *MUKA*' }, { at: 'muka', pop: 'k2' }, { at: 'muka', pop: 'k3' }, { at: 'muka', sfx: 'kaching' },
              { at: 'muka', emote: 'dimas', icon: 'heart', dur: 1000 },
              { at: 'langsung', card: 'Auctoratus', items: ['Orang merdeka yang', 'menjual diri jadi gladiator', 'Bayaran diterima saat bersumpah'], x: 120, y: 70, place: 'left' },
            ]),
            { wait: 2400 },   // beri waktu membaca kartu
            { together: [{ clear: true }, { move: 'k1', to: 106, dur: 500 }, { move: 'k2', to: 106, dur: 600 }, { move: 'k3', to: 106, dur: 700 }] },
            { together: [{ hide: 'k1', dur: 200 }, { hide: 'k2', dur: 200 }, { hide: 'k3', dur: 200 }, { sfx: 'coin', vol: 0.7 }] },
            // sumpah: layar menggelap, kamera mendekat
            C('r-34', [
              { at: 0, tint: 0.5, color: GELAP, dur: 900 }, { at: 0, camera: VERT ? { x: 100, y: 80, zoom: 2 } : { x: 108, y: 80, zoom: 2.3 }, dur: 1200 },
              { at: 'syaratnya', say: 'lanista', text: 'Iura!', dur: 900, shout: true }, { at: 'syaratnya', label: '(Bersumpahlah!)', x: 128, y: 64, bg: MERAH, size: 16, dur: 0 },
              { at: 'syaratnya', kw: 'SYARATNYA: *SUMPAH*' }, { at: 'sumpah', jump: 'dimas', times: 1, height: 2 },
            ]),
            { clearLabels: true },
            C('r-35', [
              { at: 'dibakar', pop: 'i1' }, { at: 0, kw: 'ISI *SUMPAH*' },
              { at: 'dirantai', pop: 'i2' },
              { at: 'dicambuk', pop: 'i3' }, { at: 'dicambuk', kw: 'SAMPAI *DIBUNUH*' },
              { at: 'dibunuh', pop: 'i4' }, { at: 'pedang', shake: 300 }, { at: 'pedang', emote: 'dimas', icon: 'sweat', dur: 1200 },
              { at: 'dibakar', label: 'Isi sumpah gladiator (Petronius, Satyricon)', x: 106, y: 100, bg: GELAP, size: 12, dur: 0 },
            ], { keepKw: true }),
            { clearLabels: true },
            C('r-36', [
              { at: 'perut', label: 'KRUUUK...', x: 104, y: 78, bg: MERAH, size: 16, dur: 0 }, { at: 'berbunyi', shake: 220 },
              { at: 'mengangguk', jump: 'dimas', times: 2, height: 2 }, { at: 'mengangguk', stamp: 'SETUJU', color: '#38b764', at_: [0.5, 0.34] },
              { at: 'mengangguk', kw: '*SETUJU*', keepKw: true },
            ], { punch: true, keepKw: true }),
            { together: [{ hide: 'i1', dur: 300 }, { hide: 'i2', dur: 300 }, { hide: 'i3', dur: 300 }, { hide: 'i4', dur: 300 }, { wait: 600 }] },
          ],
        },
      ],
    },
    // ================= BAB 5 — LUDUS & ILMU PERTAMA: FISIKA =================
    {
      id: 'bab-5', title: 'Ludus & ilmu fisika',
      scenes: [
        // 1) Peta malam: dari amfiteater ke ludus (sekolah gladiator)
        peta([
          { tint: 0.35, color: '#29366f', dur: 10 },
          { together: [{ camera: { x: 97, y: 22, zoom: 2.9 }, dur: 3600, ease: 'Sine.easeInOut' }, { move: 'dimasP', to: 97, dur: 3000 }, { raise: 'dimasP', to: 24, dur: 3000 },
            { label: 'LUDUS · SEKOLAH GLADIATOR', x: 98, y: 13, bg: GELAP, size: 14, dur: 0 },
            C('r-37', [{ at: 'pertama', emote: 'dimasP', icon: 'heart', dur: 1200 }, { at: 'pertama', kw: 'MAKAN *KENYANG*' }, { at: 'kenyang', ...LAPAR(0.15, { text: 'KENYANG' }) }], { only: 'long' }),
            C('r-37s', [{ at: 0, kw: 'PILIH *SENJATA* APA?' }, { at: 'senjata', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          { clearLabels: true },
        ], { transition: 'clouds', c: { x: 82, y: 28, zoom: 2.5 }, clock: 'HARI 15', meter: LAPAR(1, { text: 'KRITIS' }), dimas: true, dimasSprite: 'dimas_tunik', dimasAt: { x: 82, y: 29 },
          extraProps: [{ sprite: 'ludus_peta', x: 98, y: 21, scale: 0.5, center: true, depth: 1.5 }] }),

        // 2) Ruang makan ludus (malam): bubur jelai & minuman abu
        {
          transition: 'zoom', music: null, sky: 'night', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 15', meter: LAPAR(0.15, { text: 'KENYANG' }),
          props: [...JALAN,
            { sprite: 'dinding_ludus', x: 96, y: 94, depth: 2 },
            { sprite: 'gagang_obor', x: 56, y: 66, depth: 3 }, { sprite: 'api_obor_0', anim: 'api_obor', x: 56, y: 56, depth: 3.1 },
            { sprite: 'gagang_obor', x: 146, y: 66, depth: 3 }, { sprite: 'api_obor_0', anim: 'api_obor', x: 146, y: 56, depth: 3.1 },
            { sprite: 'meja_makan', x: 96, y: 101, depth: 9 },
            { id: 'b1', sprite: 'mangkuk_bubur', x: 72, y: 88, depth: 10 }, { id: 'b2', sprite: 'mangkuk_bubur', x: 86, y: 88, depth: 10 },
            { id: 'b3', sprite: 'mangkuk_bubur', x: 104, y: 88, depth: 10, hidden: true }, { id: 'b4', sprite: 'mangkuk_bubur', x: 120, y: 88, depth: 10 },
            { id: 'uap', sprite: 'uap_0', anim: 'uap', x: 104, y: 84, depth: 11, hidden: true },
            { id: 'cangkir', sprite: 'cangkir_abu', x: 112, y: 88, depth: 10, hidden: true },
          ],
          actors: [
            r('t1', 'rm_budak', 72, { depth: 7, face: 'right' }), r('t2', 'rm_tukang', 86, { depth: 7, face: 'right' }),
            r('dimas', 'dimas_tunik', 104, { depth: 7, face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }), r('t3', 'rm_pemuda', 120, { depth: 7, face: 'left' }),
          ],
          steps: [
            C('r-38', [
              { at: 0, pop: 'b3' }, { at: 0, show: 'uap', dur: 300 },
              { at: 'bubur', label: 'BUBUR JELAI + KACANG', x: 100, y: 68, bg: '#c98a45', size: 15, dur: 0 },
              { at: 'bubur', jump: 'dimas', times: 3, height: 2 }, { at: 'kacang', jump: 't2', times: 2, height: 2 }, { at: 'kacang', emote: 'dimas', icon: 'heart', dur: 900 },
              { at: 'julukannya', label: 'HORDEARII = PEMAKAN JELAI', x: 100, y: 56, bg: GELAP, size: 14, dur: 0 },
              { at: 'pemakan', kw: '*PEMAKAN JELAI*' }, { at: 'pemakan', jump: 't1', times: 2, height: 2 },
            ]),
            { clearLabels: true },
            C('r-39', [
              { at: 'minumannya', pop: 'cangkir' }, { at: 'minumannya', emote: 'dimas', icon: 'question', dur: 800 },
              { at: 'abu', label: 'AIR + ABU TANAMAN', x: 112, y: 70, bg: GELAP, size: 15, dur: 0 }, { at: 'abu', kw: 'MINUM *ABU*' },
              { at: 'tanaman', emote: 'dimas', icon: 'sweat', dur: 1000 }, { at: 'tanaman', shake: 150 },
              { at: 'air', card: 'Studi tulang gladiator', items: ['Efesus, Turki (2014):', 'banyak makan jelai & kacang', 'Kalsium tinggi, diduga', 'dari minuman abu tanaman'], x: 110, y: 64, place: 'left' },
            ]),
            { wait: 2400 },   // beri waktu membaca kartu
            { together: [{ clear: true }, { meter: false }] },
          ],
        },

        // 3) Halaman ludus: latihan, rak senjata, memilih retiarius
        {
          transition: 'cut', music: 'arena', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 16',
          props: [
            { sprite: 'serambi_ludus', x: 96, y: 90, depth: 2 },
            { sprite: 'pasir_arena', x: 96, y: 108, depth: 2.5 },
            { sprite: 'latih_0', anim: 'latih', x: 34, y: 98, depth: 6 }, { sprite: 'latih_0', anim: 'latih', x: 166, y: 98, depth: 6, flip: true },
            { id: 'rak', sprite: 'rak_senjata', x: 134, y: 96, depth: 5 },
            { id: 'scutum', sprite: 'scutum', x: 112, y: 90, depth: 12, hidden: true },
            { id: 'asap', sprite: 'puff', x: 104, y: 92, scale: 2.4, depth: 13, hidden: true },
            { id: 'dimasR', sprite: 'gl_dimas_ret', x: 104, y: 97, scale: 0.75, depth: 10, hidden: true },
          ],
          actors: [
            r('varus', 'rm_lanista', 76, { name: 'Varus', tag: 'LANISTA VARUS', tagColor: TEAL }),
            r('dimas', 'dimas_tunik', 104, { face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-40', [
              { at: 'pemilik', glow: 'varus', times: 1 },
              { at: 'bertanya', say: 'varus', text: 'Quae arma?', dur: 1000 }, { at: 'bertanya', label: '(Senjata apa?)', x: 78, y: 58, bg: GELAP, size: 17, dur: 0 },
              { at: 'bertanya', kw: 'PILIH *SENJATA*' }, { at: 'senjata', face: 'dimas', dir: 'right' }, { at: 'senjata', glow: 'rak', times: 2 },
            ]),
            { clearLabels: true },
            C('r-41', [
              { at: 'kurus', emote: 'dimas', icon: 'sweat', dur: 900 },
              { at: 'perisai', pop: 'scutum' }, { at: 'berat', encok: 'dimas', dur: 1200 }, { at: 'berat', raise: 'scutum', to: 98, dur: 400 }, { at: 'berat', shake: 200 },
              { at: 'berat', kw: 'TERLALU *BERAT*' }, { at: 'untuknya', hide: 'scutum', dur: 300 },
            ]),
            C('r-42', [
              { at: 'memilih', pop: 'asap' }, { at: 'memilih', hide: 'dimas', dur: 150 }, { at: 'memilih', show: 'dimasR', dur: 250 },
              { at: 'retiarius', hide: 'asap', dur: 300 }, { at: 'retiarius', kw: '*RETIARIUS*' },
              { at: 'retiarius', label: 'JARING', x: 92, y: 92, bg: GELAP, size: 14, dur: 0 },
              { at: 'jaring', label: 'TRISULA', x: 120, y: 72, bg: GELAP, size: 14, dur: 0 },
              { at: 'trisula', label: 'TANPA HELM', x: 104, y: 64, bg: MERAH, size: 14, dur: 0 },
            ]),
            { clearLabels: true },
            C('r-43', [
              { at: 'ringan', kw: 'RINGAN = *CEPAT*' }, { at: 'ringan', jump: 'dimasR', times: 2, height: 4 },
              { at: 'ringan', card: 'Logika teknik', items: ['Ringan → gerak cepat', 'Trisula panjang → jangkauan jauh', 'Jarak jauh → lebih aman'], x: 104, y: 70, place: 'left' },
              { at: 'jangkauan', kw: 'JAUH = *AMAN*' }, { at: 'aman', emote: 'varus', icon: 'question', dur: 1000 },
            ]),
            { wait: 1600 },   // beri waktu membaca kartu
            { clear: true },
          ],
        },

        // 4) Lawan abadi: secutor & helmnya yang menyesakkan → PELUANG HIDUP 10%
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'HARI 16',
          props: [
            { sprite: 'serambi_ludus', x: 96, y: 90, depth: 2 },
            { sprite: 'pasir_arena', x: 96, y: 108, depth: 2.5 },
            { sprite: 'latih_0', anim: 'latih', x: 34, y: 98, depth: 6 },
            { id: 'dimasR', sprite: 'gl_dimas_ret', x: VERT ? 84 : 76, y: 97, scale: 0.75, depth: 10 },
            { id: 'sec', sprite: 'gl_secutor', x: 214, y: 97, scale: 0.75, depth: 10 },
            { id: 'helmBesar', sprite: 'helm_secutor_besar', x: VERT ? 100 : 104, y: 92, scale: 0.9, depth: 25, hidden: true },
            { id: 'napas', sprite: 'napas_0', anim: 'napas', x: VERT ? 116 : 120, y: 76, scale: 1.2, depth: 26, hidden: true },
            { id: 'napas2', sprite: 'napas_0', anim: 'napas', x: 108, y: 84, depth: 26, hidden: true },
          ],
          actors: [],
          steps: [
            C('r-44', [
              { at: 0, move: 'sec', to: VERT ? 114 : 126, dur: 1500 },
              { at: 'secutor', label: 'SECUTOR', x: VERT ? 112 : 126, y: 70, bg: MERAH, size: 15, dur: 0 }, { at: 'secutor', kw: 'LAWAN: *SECUTOR*' },
              { at: 'berhelm', label: 'HELM BULAT TERTUTUP', x: VERT ? 104 : 126, y: 62, bg: GELAP, size: 13, dur: 0 },
            ]),
            { clearLabels: true },
            C('r-45', [
              { at: 0, tint: 0.45, color: GELAP, dur: 500 }, { at: 0, pop: 'helmBesar' },
              { at: 'lubang', label: 'LUBANG MATA KECIL', x: VERT ? 100 : 104, y: 44, bg: MERAH, size: 15, dur: 0 },
              { at: 'udaranya', show: 'napas', dur: 300 }, { at: 'udaranya', label: 'UDARA SEDIKIT', x: VERT ? 100 : 104, y: 98, bg: GELAP, size: 15, dur: 0 },
              { at: 'lubang', kw: 'HELM = *SESAK*' }, { at: 'sesak', shake: 200 },
            ]),
            { together: [{ clearLabels: true }, { hide: 'helmBesar', dur: 300 }, { hide: 'napas', dur: 300 }, { tint: 0, dur: 400 }] },
            C('r-46', [
              { at: 'sederhana', move: 'sec', to: VERT ? 104 : 96, dur: 1000 }, { at: 'sederhana', move: 'dimasR', to: VERT ? 78 : 54, dur: 900 },
              { at: 'dilawan', label: 'JANGAN DILAWAN', x: VERT ? 84 : 60, y: 66, bg: GELAP, size: 14, dur: 0 },
              { at: 'bikin', move: 'sec', to: VERT ? 92 : 76, dur: 900 }, { at: 'lelah', show: 'napas2', dur: 300 }, { at: 'bikin', move: 'napas2', to: VERT ? 84 : 68, dur: 10 },
              { at: 'lelah', label: 'BIKIN LELAH', x: VERT ? 96 : 78, y: 58, bg: MERAH, size: 14, dur: 0 },
              { at: 'lelah', ...PELUANG(0.1) }, { at: 'lelah', kw: 'PELUANG HIDUP *10%*', keepKw: true },
              { at: 'lelah', label: 'angka ilustrasi', x: VERT ? 110 : 160, y: 30, bg: GELAP, size: 11, dur: 0 },
            ], { punch: true, keepKw: true }),
            { wait: 600 },
          ],
        },
      ],
    },
    // ================= BAB 6 — ILMU KEDUA: ANALISIS DATA =================
    {
      id: 'bab-6', title: 'Ilmu kedua: data',
      scenes: [
        // 1) Peta: bulan ke-2 di ludus
        peta([
          { together: [{ clock: 'BULAN 2' }, { camera: { x: 97, y: 23, zoom: 3 }, dur: 3800, ease: 'Sine.easeInOut' }, { pop: 'pin' },
            C('r-47', [{ at: 'rencana', kw: 'TANPA DATA = *TEBAKAN*' }, { at: 'tahu', emote: 'dimasP', icon: 'question', dur: 1100 }], { only: 'long' }),
            C('r-47s', [{ at: 0, kw: 'MENANG PAKAI *DATA*' }, { at: 'data', sticker: 'cool', at_: [0.75, 0.3] }], { only: 'short' })] },
        ], { transition: 'clouds', c: { x: 97, y: 24, zoom: 2.2 }, clock: 'BULAN 1', meter: PELUANG(0.1), dimas: true, dimasSprite: 'dimas_tunik', dimasAt: LUDUS_PETA, extraProps: [petaLudus] }),

        // 2) Halaman ludus pagi: menonton latihan & mencatat di papan lilin
        {
          transition: 'zoom', music: 'arena', sky: 'dawn', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: X(104) } : CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.1),
          props: [...HALAMAN,
            { sprite: 'latih_0', anim: 'latih', x: X(34), y: 98, depth: 6 },
            { id: 'g1', sprite: 'gl_murmillo', x: X(112), y: 100, scale: 0.8, depth: 10 },
            { id: 'g2', sprite: 'gl_thraex', x: X(150), y: 100, scale: 0.8, depth: 10, flip: true },
            { id: 'denting', sprite: 'denting', x: X(131), y: 90, depth: 12, hidden: true },
            { id: 'papan', sprite: 'papan_lilin', x: X(82), y: 90, scale: 1.2, depth: 12, hidden: true },
          ],
          actors: [ r('dimas', 'dimas_duduk', 74, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-48', [
              { at: 0, move: 'g1', to: 124, dur: 900 }, { at: 0, move: 'g2', to: 140, dur: 900 },
              { at: 'menonton', kw: '*MENGAMATI*' }, { at: 'menonton', emote: 'dimas', icon: 'question', dur: 900 },
              { at: 'gladiator', swap: 'g1', to: 'gl_murmillo_serang' }, { at: 'gladiator', pop: 'denting' },
              { at: 'berlatih', swap: 'g1', to: 'gl_murmillo' }, { at: 'berlatih', swap: 'g2', to: 'gl_thraex_serang' }, { at: 'berlatih', pop: 'denting' },
            ]),
            C('r-49', [
              { at: 0, swap: 'g2', to: 'gl_thraex' }, { at: 0, hide: 'denting', dur: 100 },
              { at: 'papan', pop: 'papan' }, { at: 'papan', label: 'PAPAN LILIN', x: X(82), y: 72, bg: '#c98a45', size: 14, dur: 0 },
              { at: 'mencatat', kw: 'CATATAN *LAWAN*' }, { at: 'mencatat', emote: 'dimas', icon: 'note', dur: 1200 },
              { at: 'analis', label: 'GAYA ANALIS OLAHRAGA', x: X(82), y: 62, bg: GELAP, size: 13, dur: 0 },
              { at: 'analis', swap: 'g1', to: 'gl_murmillo_serang' }, { at: 'analis', pop: 'denting' }, { at: 'bola', jump: 'g2', times: 1, height: 3 },
            ]),
            { wait: 600 },
            { clear: true },
          ],
        },

        // 3) Pengumuman lawan: Bruno "si Banteng", 7 kemenangan
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: X(116) } : CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.1),
          props: [...HALAMAN,
            { id: 'dimasR', sprite: 'gl_dimas_ret', x: X(94), y: 97, scale: 0.75, depth: 10 },
            { id: 'bruno', sprite: 'gl_bruno', x: X(214), y: 98, scale: 0.95, depth: 10 },
            ...[0, 1, 2, 3, 4, 5, 6].map(i => ({ id: `p${i}`, sprite: 'palma', x: X(116) + i * 7, y: 68, depth: 14, hidden: true })),
          ],
          actors: [ r('varus', 'rm_lanista', 70, { name: 'Varus', tag: 'LANISTA VARUS', tagColor: TEAL }) ],
          steps: [
            C('r-50', [
              { at: 0, say: 'varus', text: 'Bruno, Taurus!', dur: 1300, shout: true },
              { at: 'bruno', move: 'bruno', to: 134, dur: 1300 }, { at: 'bruno', kw: 'BRUNO · *7× MENANG*' },
              { at: 'banteng', label: 'BRUNO "SI BANTENG"', x: X(134), y: 50, bg: MERAH, size: 15, dur: 0 }, { at: 'banteng', shake: 200 },
              ...[0, 1, 2, 3, 4, 5, 6].map(i => ({ at: i < 3 ? 'juara' : i < 5 ? 'tujuh' : 'kali', pop: `p${i}` })),
              { at: 'juara', emote: 'dimasR', icon: 'sweat', dur: 1200 },
            ]),
            { together: [{ label: '7 DAUN PALMA = 7 KEMENANGAN', x: X(136), y: 40, bg: GELAP, size: 12, dur: 0 }, { wait: 1500 }] },
            { clear: true },
          ],
        },

        // 4) Mengamati Bruno: 3 catatan di papan lilin
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.1),
          props: [...HALAMAN,
            { id: 'bruno', sprite: 'gl_bruno', x: X(112), y: 98, scale: 0.95, depth: 10 },
            { id: 'g1', sprite: 'gl_murmillo', x: X(160), y: 100, scale: 0.8, depth: 10, flip: true },
            { id: 'denting', sprite: 'denting', x: X(152), y: 90, depth: 12, hidden: true },
            { id: 'napas', sprite: 'napas_0', anim: 'napas', x: X(150), y: 80, depth: 13, hidden: true },
            { id: 'panah', sprite: 'panah_kiri', x: X(128), y: 84, depth: 13, hidden: true },
            { id: 'papanB', sprite: 'papan_lilin_besar', x: X(96), y: 70, scale: VERT ? 0.62 : 0.72, depth: 20, hidden: true },
          ],
          actors: [ r('dimas', 'dimas_duduk', 40, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-51', [
              { at: 0, kw: 'SELALU *MENYERBU*' },
              { at: 'bruno', swap: 'bruno', to: 'gl_bruno_serang' }, { at: 'bruno', move: 'bruno', to: 146, dur: 700 },
              { at: 'menyerbu', pop: 'denting' }, { at: 'menyerbu', shake: 220 }, { at: 'menyerbu', jump: 'g1', times: 1, height: 4 },
              { at: 'awal', pop: 'papanB' }, { at: 'pertama', emote: 'dimas', icon: 'note', dur: 900 },
            ]),
            { together: [{ label: '1. MENYERBU DI AWAL', x: X(96), y: 38, bg: '#4a3b28', size: 15, dur: 0 }, { hide: 'denting', dur: 100 }, { swap: 'bruno', to: 'gl_bruno' }, { wait: 900 }] },
            C('r-52', [
              { at: 0, kw: '± *100 HITUNGAN*' },
              { at: 'setelah', label: '2. ±100 HITUNGAN: LENGAN TURUN', x: X(96), y: 48, bg: '#4a3b28', size: 15, dur: 0 },
              { at: 'tangannya', show: 'napas', dur: 300 }, { at: 'tangannya', emote: 'bruno', icon: 'sweat', dur: 1100 },
            ]),
            C('r-53', [
              { at: 0, kw: 'PUTAR *KIRI*' }, { at: 0, hide: 'napas', dur: 200 },
              { at: 'ketiga', label: '3. SELALU PUTAR KE KIRI', x: X(96), y: 58, bg: '#4a3b28', size: 15, dur: 0 },
              { at: 'memutar', pop: 'panah' }, { at: 'memutar', move: 'bruno', to: 118, dur: 900 },
            ]),
            { wait: 900 },
            C('r-54', [
              { at: 0, kw: 'PELUANG HIDUP *35%*' }, { at: 'ternyata', ...PELUANG(0.35) },
              { at: 'ditebak', jump: 'dimas', times: 2, height: 2 }, { at: 'kuat', emote: 'dimas', icon: 'exclaim', dur: 900 },
            ], { punch: true, keepKw: true }),
            { wait: 500 },
          ],
        },
      ],
    },

    // ================= BAB 7 — ILMU KETIGA: PENONTON =================
    {
      id: 'bab-7', title: 'Ilmu ketiga: penonton',
      scenes: [
        // 1) Peta: amfiteater — siapa yang memutuskan hidup-mati?
        peta([
          { together: [{ camera: { x: 76, y: 22, zoom: 2.8 }, dur: 4000, ease: 'Sine.easeInOut' }, { move: 'dimasP', to: 84, dur: 3000 }, { raise: 'dimasP', to: 28, dur: 3000 },
            C('r-55', [{ at: 'satu', kw: 'KALAU *KALAH*?' }, { at: 'kalah', emote: 'dimasP', icon: 'sweat', dur: 1000 }], { only: 'long' }),
            C('r-55s', [{ at: 0, kw: 'BUKAN *PEMENANG* YANG MENENTUKAN' }, { at: 'pemenang', sticker: 'sus', at_: [0.75, 0.3] }], { only: 'short' })] },
        ], { transition: 'clouds', c: { x: 97, y: 24, zoom: 2.4 }, clock: 'BULAN 2', meter: PELUANG(0.35), dimas: true, dimasSprite: 'dimas_tunik', dimasAt: LUDUS_PETA, extraProps: [petaLudus] }),

        // 2) Arena: missio (minta ampun), kaisar Claudius & retiarius tanpa helm
        {
          transition: 'zoom', music: 'arena', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.35),
          props: [...ARENA,
            { id: 'sec', sprite: 'gl_secutor', x: X(112), y: 102, depth: 10, flip: true },
            { id: 'ret', sprite: 'ret_berlutut', x: X(86), y: 102, depth: 10 },
          ],
          actors: [],
          steps: [
            C('r-56', [
              { at: 0, kw: '*AMPUN*?' }, { at: 'kalah', emote: 'ret', icon: 'exclaim', dur: 900 },
              { at: 'ampun', label: 'JARI DIANGKAT = MINTA AMPUN', x: X(86), y: 74, bg: GELAP, size: 13, dur: 0 },
              { at: 'penonton', camera: { x: X(96), y: 62, zoom: 1.6 }, dur: 1000 },
            ]),
            { together: [{ card: 'Missio (ampunan)', items: ['Yang kalah boleh minta ampun', 'Penyelenggara memutuskan,', 'sering mengikuti teriakan penonton'], x: X(96), y: 44 }, { wait: 4000 }] },
            { clear: true },
            C('r-57', [
              { at: 0, camera: { x: X(96), y: 56, zoom: 3 }, dur: 1000 },
              { at: 'claudius', glow: 'kaisar', times: 2 }, { at: 'claudius', kw: 'KAISAR *KEJAM*' },
              { at: 'claudius', label: 'KAISAR CLAUDIUS', x: X(96), y: 44, bg: UNGU, size: 14, dur: 0 },
              { at: 'dibunuh', shake: 250 }, { at: 'menyuruh', label: 'Suetonius, Claudius 34', x: X(96), y: 68, bg: GELAP, size: 11, dur: 0 },
            ]),
            { clearLabels: true },
            C('r-58', [
              { at: 0, camera: { x: X(88), y: 88, zoom: 3 }, dur: 1000 }, { at: 0, kw: 'TANPA HELM = *WAJAH TERLIHAT*' },
              { at: 'wajah', label: 'TANPA HELM', x: X(86), y: 76, bg: MERAH, size: 14, dur: 0 }, { at: 'mati', emote: 'ret', icon: 'sweat', dur: 1000 },
            ]),
            { wait: 600 },
            { clear: true },
          ],
        },

        // 3) Malam di ludus: butuh penonton → julukan "Fulmen"
        {
          transition: 'cut', music: null, sky: 'night', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.35),
          props: [...LUDUS_MALAM, { id: 'kilat', sprite: 'kilat', x: X(116), y: 94, depth: 14, hidden: true }],
          actors: [ r('dimas', 'dimas_tunik', 96, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }) ],
          steps: [
            C('r-59', [
              { at: 0, emote: 'dimas', icon: 'question', dur: 1000 }, { at: 'butuh', kw: 'JADI *INFLUENCER*' },
              { at: 'penonton', label: 'BUTUH FANS', x: X(96), y: 66, bg: GELAP, size: 15, dur: 0 },
              { at: 'influencer', sticker: 'cool', at_: [0.72, 0.3] },
            ]),
            { clearLabels: true },
            C('r-60', [
              { at: 'julukan', kw: '*FULMEN* · SI PETIR' },
              { at: 'fulmen', pop: 'kilat' }, { at: 'fulmen', restoreColor: true }, { at: 'fulmen', shake: 300 },
              { at: 'fulmen', label: 'FULMEN = PETIR (LATIN)', x: X(96), y: 60, bg: EMAS, size: 15, dur: 0 },
              { at: 'petir', swap: 'dimas', to: 'dimas_salam_0' }, { at: 'petir', jump: 'dimas', times: 1, height: 3 },
            ]),
            { wait: 600 },
          ],
        },

        // 4) Pasar: salam khas diajarkan ke anak-anak
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: X(104) } : CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.35),
          props: [...JALAN,
            { sprite: 'insula_c', x: X(40), y: 88, depth: 3 }, { sprite: 'insula_a', x: X(156), y: 88, depth: 3 },
            { sprite: 'siprus_samping', x: X(98), y: 60, depth: 2.2 }, { sprite: 'kuil_jauh', x: X(98), y: 87, scale: 0.6, depth: 2.3 },
            { sprite: 'lapak_buah', x: X(150), y: 96, depth: 8 },
          ],
          actors: [
            r('dimas', 'dimas_tunik', 86, { name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
            r('a1', 'rm_anak', 108, { face: 'left', scale: 0.75 }), r('a2', 'rm_anak2', 118, { face: 'left', scale: 0.75 }),
          ],
          steps: [
            C('r-61', [
              { at: 'salam', kw: 'SALAM *KHAS*' }, { at: 'salam', swap: 'dimas', to: 'dimas_salam_0' }, { at: 'salam', jump: 'dimas', times: 1, height: 3 },
              { at: 'salam', label: 'SALAM "FULMEN"', x: X(86), y: 64, bg: EMAS, size: 14, dur: 0 },
              { at: 'mengajarkannya', swap: 'dimas', to: 'dimas_tunik_0' },
              { at: 'anak', swap: 'a1', to: 'rm_anak_salam_0' }, { at: 'anak', jump: 'a1', times: 2, height: 2 },
              { at: 'pasar', swap: 'a2', to: 'rm_anak2_salam_0' }, { at: 'pasar', jump: 'a2', times: 2, height: 2 },
            ]),
            { wait: 600 },
            { clearLabels: true },
          ],
        },

        // 5) Seminggu kemudian: anak-anak meneriakkan "FUL-MEN!", coretan di dinding
        {
          transition: 'cut', sky: 'day', noHills: true, fit: FITW, camera: VERT ? { ...CAM_DEKAT, x: X(100) } : CAM_DEKAT, clock: 'BULAN 2', meter: PELUANG(0.35),
          props: [...JALAN,
            { sprite: 'insula_b', x: X(36), y: 88, depth: 3 }, { sprite: 'insula_c', x: X(160), y: 88, depth: 3 },
            { id: 'grafiti', sprite: 'grafiti_fulmen', x: X(98), y: 86, depth: 3.5, hidden: true },
            { sprite: 'amfora', x: X(70), y: 89, depth: 4 },
          ],
          actors: [
            r('a1', 'rm_anak_salam', -20, { scale: 0.75 }), r('a2', 'rm_anak2_salam', -32, { scale: 0.75 }),
            r('a3', 'rm_anak', 220, { face: 'left', scale: 0.75 }), r('a4', 'rm_anak2', 232, { face: 'left', scale: 0.75 }),
            r('dimas', 'dimas_tunik', 130, { face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }),
          ],
          steps: [
            C('r-62', [
              { at: 0, label: 'SEMINGGU KEMUDIAN', x: X(96), y: 40, bg: GELAP, size: 14, dur: 0 },
              { at: 'anak-anak', kw: '"*FUL-MEN!*"' },
              { at: 'anak-anak', enter: 'a1', from: 'left', to: 220, speed: 40 }, { at: 'anak-anak', enter: 'a2', from: 'left', to: 230, speed: 36 },
              { at: 'meneriakkan', say: 'a1', text: 'FUL-MEN!', dur: 1200, shout: true },
              { at: 'namanya', enter: 'a3', from: 'right', to: -20, speed: 38 }, { at: 'namanya', say: 'a3', text: 'FUL-MEN!', dur: 1100 },
              { at: 'jalan', pop: 'grafiti' }, { at: 'jalan', emote: 'dimas', icon: 'heart', dur: 1100 },
            ]),
            { together: [{ label: 'CORETAN DINDING SEPERTI DI POMPEII', x: X(98), y: 56, bg: GELAP, size: 12, dur: 0 }, { enter: 'a4', from: 'right', to: -20, speed: 40 }, { wait: 1300 }] },
            { clearLabels: true },
            C('r-63', [
              { at: 0, kw: 'PELUANG HIDUP *55%*' }, { at: 'penonton', ...PELUANG(0.55) },
              { at: 'membelanya', swap: 'dimas', to: 'dimas_salam_0' }, { at: 'membelanya', jump: 'dimas', times: 1, height: 3 },
            ], { punch: true, keepKw: true }),
            { wait: 500 },
          ],
        },
      ],
    },

    // ================= BAB 8 — DUEL =================
    {
      id: 'bab-8', title: 'Duel',
      scenes: [
        // 1) Peta: bulan ke-3, kota kembali mengalir ke amfiteater
        peta([
          { together: [{ clock: 'BULAN 3' }, { crowd: 'goto', x: 75, y: 24, spread: 9, frac: 0.85, rush: 1.6 }, { camera: { x: 80, y: 24, zoom: 2.6 }, dur: 3600, ease: 'Sine.easeInOut' },
            { move: 'dimasP', to: 80, dur: 3000 }, { raise: 'dimasP', to: 28, dur: 3000 },
            C('r-64', [{ at: 0, kw: 'HARI *PERTANDINGAN*' }], { only: 'long' }),
            C('r-64s', [{ at: 0, kw: 'KURUS VS *JUARA 7×*' }, { at: 'menang', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          { wait: 700 },
        ], { transition: 'clouds', c: { x: 97, y: 24, zoom: 2.4 }, clock: 'BULAN 2', meter: PELUANG(0.55), dimas: true, dimasSprite: 'dimas_tunik', dimasAt: LUDUS_PETA, extraProps: [petaLudus] }),

        // 2) Duel di arena
        {
          transition: 'zoom', music: 'arena', sky: 'day', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 3', meter: PELUANG(0.55),
          props: [...ARENA,
            { sprite: 'gerbang_arena', x: X(14), y: 92, depth: 2.6 }, { sprite: 'gerbang_arena', x: X(178), y: 92, depth: 2.6 },
            { id: 'dimasR', sprite: 'gl_dimas_ret', x: X(14), y: 102, depth: 10, hidden: true },
            { id: 'bruno', sprite: 'gl_bruno', x: X(178), y: 102, scale: 1.1, depth: 10, flip: true, hidden: true },
            { id: 'brunoT', sprite: 'bruno_terjerat', x: X(100), y: 103, scale: 1.1, depth: 10, hidden: true },
            { id: 'jaring', sprite: 'jaring_terbang', x: X(80), y: 88, depth: 12, hidden: true },
            { id: 'napas', sprite: 'napas_0', anim: 'napas', x: X(100), y: 80, scale: 1.2, depth: 13, hidden: true },
            { id: 'panah', sprite: 'panah_kanan', x: X(70), y: 74, depth: 13, hidden: true },
            { id: 'denting', sprite: 'denting', x: X(92), y: 88, depth: 12, hidden: true },
            { id: 'k1', sprite: 'koin_serak', x: X(60), y: 104, depth: 9, hidden: true }, { id: 'k2', sprite: 'koin_serak', x: X(100), y: 106, depth: 9, hidden: true }, { id: 'k3', sprite: 'koin_serak', x: X(140), y: 104, depth: 9, hidden: true },
          ],
          actors: [],
          steps: [
            C('r-65', [
              { at: 0, kw: '*ARENA*' }, { at: 0, show: 'dimasR', dur: 300 }, { at: 0, move: 'dimasR', to: 60, dur: 1500 },
              { at: 0, show: 'bruno', dur: 300 }, { at: 0, move: 'bruno', to: 132, dur: 1500 },
              { at: 'ribuan', label: 'RIBUAN PENONTON', x: X(150), y: 44, bg: GELAP, size: 14, dur: 0 }, { at: 'bersorak', shake: 200 },
            ]),
            { clearLabels: true },
            C('r-66', [
              { at: 'salam', jump: 'dimasR', times: 2, height: 4 }, { at: 'salam', kw: '"*FUL-MEN!*"' },
              { at: 'sebagian', label: 'FUL-MEN!', x: X(40), y: 52, bg: EMAS, size: 14, dur: 0 },
              { at: 'penonton', label: 'FUL-MEN!', x: X(150), y: 46, bg: EMAS, size: 14, dur: 0 },
              { at: 'membalas', label: 'FUL-MEN!', x: X(70), y: 40, bg: EMAS, size: 14, dur: 0 },
            ]),
            { wait: 700 },
            { clearLabels: true },
            C('r-67', [
              { at: 0, kw: 'BRUNO *MENYERBU*' }, { at: 0, swap: 'bruno', to: 'gl_bruno_serang' }, { at: 0, move: 'bruno', to: 78, dur: 1100 },
              { at: 'menyerbu', raise: 'dimasR', to: 94, dur: 500 }, { at: 'menyerbu', move: 'dimasR', to: 96, dur: 700 },
              { at: 'persis', label: 'CATATAN 1: BENAR', x: X(96), y: 60, bg: '#38b764', size: 14, dur: 0 },
            ]),
            { together: [{ face: 'bruno', dir: 'right' }, { face: 'dimasR', dir: 'left' }, { raise: 'dimasR', to: 102, dur: 400 }, { swap: 'bruno', to: 'gl_bruno' }, { wait: 400 }] },
            { clearLabels: true },
            C('r-68', [
              { at: 0, kw: 'PUTAR *KANAN*' }, { at: 0, pop: 'panah' },
              { at: 'mundur', move: 'dimasR', to: 124, dur: 900 }, { at: 'mundur', move: 'bruno', to: 100, dur: 1100 },
              { at: 'selalu', raise: 'dimasR', to: 95, dur: 400 }, { at: 'selalu', move: 'dimasR', to: 150, dur: 900 },
              { at: 'kanan.', label: 'BRUNO SELALU KE KIRI', x: X(110), y: 60, bg: GELAP, size: 13, dur: 0 },
            ]),
            { together: [{ hide: 'panah', dur: 200 }, { raise: 'dimasR', to: 102, dur: 300 }, { face: 'dimasR', dir: 'left' }, { wait: 300 }] },
            { clearLabels: true },
            C('r-69', [
              { at: 'menghitung', kw: 'MENGHITUNG…' }, { at: 'menghitung', move: 'bruno', to: 128, dur: 1400 },
              { at: 'hati', kw: '*50*…' }, { at: 'lima', move: 'dimasR', to: 160, dur: 700 },
              { at: 'delapan', kw: '*50*… *80*…' }, { at: 'delapan', move: 'bruno', to: 140, dur: 900 },
            ], { keepKw: true }),
            { together: [{ face: 'dimasR', dir: 'left' }, { wait: 300 }] },
            C('r-70', [
              { at: 'helm', move: 'napas', to: 146, dur: 10 }, { at: 'helm', show: 'napas', dur: 300 },
              { at: 'bruno', kw: 'BRUNO *TERENGAH*' }, { at: 'terengah', emote: 'bruno', icon: 'sweat', dur: 1200 },
              { at: 0, camera: { x: X(146), y: 84, zoom: 2.2 }, dur: 900 },
            ]),
            C('r-71', [
              { at: 0, kw: '*100*!' }, { at: 0, shake: 250 }, { at: 0, sfx: 'tick' },
              { at: 'tangan', raise: 'bruno', to: 104, dur: 600 },
              { at: 'tangan', label: 'TANGAN TURUN', x: X(146), y: 72, bg: MERAH, size: 14, dur: 0 },
            ], { keepKw: true }),
            { wait: 500 },
            { together: [{ clearLabels: true }, { camera: CAM_DEKAT, dur: 700 }, { hide: 'napas', dur: 300 }] },
            C('r-72', [
              { at: 0, kw: '*TERJERAT*!' },
              { at: 0, move: 'jaring', to: 150, dur: 10 }, { at: 0, raise: 'jaring', to: 80, dur: 10 }, { at: 0, show: 'jaring', dur: 100 },
              { at: 'dilempar', move: 'jaring', to: 140, dur: 600 }, { at: 'dilempar', raise: 'jaring', to: 96, dur: 600 },
              { at: 'terjerat', hide: 'bruno', dur: 100 }, { at: 'terjerat', move: 'brunoT', to: 138, dur: 10 }, { at: 'terjerat', show: 'brunoT', dur: 200 },
              { at: 'terjerat', hide: 'jaring', dur: 200 }, { at: 'jatuh', shake: 350 },
            ], { keepKw: true }),
            C('r-73', [
              { at: 0, move: 'dimasR', to: 158, dur: 500 }, { at: 'trisula', swap: 'dimasR', to: 'gl_dimas_ret_serang' },
              { at: 'trisula', kw: 'TUNGGU…' },
              { at: 'seluruh', tint: 0.45, color: GELAP, dur: 700 }, { at: 'seluruh', camera: { x: X(146), y: 88, zoom: 2.4 }, dur: 1200 },
            ], { keepKw: true }),
            C('r-74', [
              { at: 'menusuk', swap: 'dimasR', to: 'gl_dimas_ret' }, { at: 0, kw: 'TIDAK *MENUSUK*' },
              { at: 'menoleh', camera: { x: X(96), y: 58, zoom: 1.6 }, dur: 1000 }, { at: 'menoleh', face: 'dimasR', dir: 'right' },
            ]),
            C('r-75', [
              { at: 0, tint: 0, dur: 400 }, { at: 0, kw: '*AMPUNI*!' },
              { at: 0, label: 'AMPUNI!', x: X(44), y: 52, bg: '#38b764', size: 15, dur: 0 },
              { at: 'berteriak', label: 'AMPUNI!', x: X(150), y: 44, bg: '#38b764', size: 15, dur: 0 },
              { at: 'ampuni', label: 'AMPUNI!', x: X(96), y: 40, bg: '#38b764', size: 15, dur: 0 }, { at: 'ampuni', shake: 200 },
            ]),
            { together: [{ wait: 700 }, { glow: 'kaisar', times: 2 }] },
            { together: [{ clearLabels: true }, { camera: CAM_DEKAT, dur: 700 }] },
            C('r-76', [
              { at: 0, hide: 'brunoT', dur: 200 }, { at: 0, swap: 'bruno', to: 'gl_bruno' }, { at: 0, move: 'bruno', to: 132, dur: 10 }, { at: 0, raise: 'bruno', to: 102, dur: 10 }, { at: 0, show: 'bruno', dur: 300 },
              { at: 'gladiator', kw: 'KEDUANYA *HIDUP*' },
              { at: 'keluar', move: 'dimasR', to: 14, dur: 1800 }, { at: 'keluar', move: 'bruno', to: 178, dur: 1800 },
              { at: 'hidup-hidup', stamp: 'MISSIO', color: '#38b764', at_: [0.5, 0.34] },
              { at: 'penonton', label: 'Banyak duel tidak berakhir mati', x: X(96), y: 60, bg: GELAP, size: 12, dur: 0 },
            ]),
            { wait: 500 },
          ],
        },

        // 3) Malam di ludus: koin hadiah & daging → PELUANG HIDUP 100%
        {
          transition: 'cut', music: null, sky: 'night', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 3', meter: PELUANG(0.55),
          props: [...LUDUS_MALAM,
            { sprite: 'meja_makan', x: X(96), y: 101, depth: 9 },
            { id: 'koin', sprite: 'koin_serak', x: X(82), y: 88, scale: 1.3, depth: 10, hidden: true },
            { id: 'daging', sprite: 'daging', x: X(106), y: 88, scale: 1.3, depth: 10, hidden: true },
            { id: 'uap', sprite: 'uap_0', anim: 'uap', x: X(106), y: 82, depth: 11, hidden: true },
          ],
          actors: [ r('t1', 'rm_budak', 74, { depth: 7, face: 'right' }), r('dimas', 'dimas_tunik', 104, { depth: 7, face: 'left', name: 'Dimas', tag: 'DIMAS', tagColor: UNGU }), r('t2', 'rm_pemuda', 122, { depth: 7, face: 'left' }) ],
          steps: [
            C('r-77', [
              { at: 0, kw: 'PELUANG HIDUP *100%*' },
              { at: 'koin', pop: 'koin' }, { at: 'koin', sfx: 'kaching' },
              { at: 'malam', pop: 'daging' }, { at: 'malam', show: 'uap', dur: 300 }, { at: 'daging', ...PELUANG(1) },
              { at: 'makan', jump: 'dimas', times: 3, height: 2 }, { at: 'makan', emote: 'dimas', icon: 'heart', dur: 1200 },
            ], { punch: true, keepKw: true }),
            { together: [{ label: 'angka ilustrasi', x: X(160), y: 30, bg: GELAP, size: 11, dur: 0 }, { jump: 't1', times: 2, height: 2 }, { wait: 1200 }] },
          ],
        },
      ],
    },

    // ================= PENUTUP =================
    {
      id: 'penutup', title: 'Penutup',
      scenes: [
        // 1) Peta senja: dari ludus, kamera menjauh ke seluruh Roma
        peta([
          { tint: 0.25, color: '#ef7d57', dur: 10 },
          { together: [{ camera: { x: 96, y: 54, zoom: 1.05 }, dur: 5200, ease: 'Sine.easeInOut' },
            C('r-78', [{ at: 0, kw: 'BISA *BERTAHAN HIDUP*?' }], { only: 'long' }),
            C('r-78s', [{ at: 0, kw: 'BISA *BERTAHAN HIDUP*?' }, { at: 'hidup', sticker: 'sus', at_: [0.75, 0.3] }], { only: 'short' })] },
          C('r-79', [{ at: 'tapi', kw: 'BUKAN *OTOT*' }, { at: 'dimas', emote: 'dimasP', icon: 'heart', dur: 1000 }]),
        ], { transition: 'clouds', c: { x: 97, y: 24, zoom: 3 }, clock: 'BULAN 3', meter: PELUANG(1), dimas: true, dimasSprite: 'dimas_tunik', dimasAt: LUDUS_PETA, extraProps: [petaLudus] }),

        // 2) Halaman ludus: tiga ilmu, kutipan, cliffhanger
        {
          transition: 'zoom', music: 'arena', sky: 'sunset', noHills: true, fit: FITW, camera: CAM_DEKAT, clock: 'BULAN 3', meter: PELUANG(1),
          props: [...HALAMAN,
            { id: 'dimasR', sprite: 'gl_dimas_ret', x: X(96), y: 100, depth: 10 },
            { id: 'i1', sprite: 'papan_lilin', x: VERT ? 80 : 60, y: 72, scale: 2.4, depth: 14, hidden: true },
            { id: 'i2', sprite: 'helm_secutor_besar', x: X(96), y: 74, scale: 0.42, depth: 14, hidden: true },
            { id: 'i3', sprite: 'palma', x: VERT ? 112 : 132, y: 74, scale: 1.4, depth: 14, hidden: true },
            { id: 'lawan', sprite: 'gl_siluet', x: X(150), y: 102, scale: 1.7, depth: 9, hidden: true },
          ],
          actors: [],
          steps: [
            C('r-80', [
              { at: 'melainkan', kw: 'DATA · FISIKA · *PENONTON*' },
              { at: 'data', pop: 'i1' }, { at: 'data', label: 'DATA', x: VERT ? 80 : 60, y: 46, bg: GELAP, size: 14, dur: 0 },
              { at: 'fisika', pop: 'i2' }, { at: 'fisika', label: 'FISIKA', x: X(96), y: 46, bg: GELAP, size: 14, dur: 0 },
              { at: 'membaca', pop: 'i3' }, { at: 'membaca', label: 'PENONTON', x: VERT ? 112 : 132, y: 46, bg: GELAP, size: 14, dur: 0 },
            ], { keepKw: true }),
            { wait: 900 },
            { together: [{ clear: true }, { hide: 'i1', dur: 200 }, { hide: 'i2', dur: 200 }, { hide: 'i3', dur: 200 }] },
            { quote: 'Bukan otot, tapi cara berpikir.', sub: 'PELUANG HIDUP: 100% (ilustrasi)', dur: 2400 },
            C('r-81', [
              { at: 0, tint: 0.5, color: GELAP, dur: 800 }, { at: 'sumpahnya', kw: 'SUMPAH *MASIH MENGIKAT*' },
              { at: 'duel', pop: 'lawan' }, { at: 'duel', shake: 300 }, { at: 'duel', kw: 'DUEL *BERIKUTNYA*…' },
              { at: 'menunggu', emote: 'dimasR', icon: 'exclaim', dur: 1100 },
            ], { keepKw: true }),
            { wait: 600 },
            C('r-82', [{ at: 0, kw: 'ILMU APA YANG *KAMU* PAKAI?' }, { at: 'komentar', sticker: 'smirk', at_: [0.75, 0.3] }], { only: 'long', keepKw: true }),
            C('r-83', [{ at: 0, kw: 'TAG *TEMANMU*!' }, { at: 'menyerah', sticker: 'party', at_: [0.75, 0.3] }], { only: 'short', keepKw: true }),
            { wait: 900 },
          ],
        },
      ],
    },
  ],
};
