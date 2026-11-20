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
              { at: 'dunia', kw: 'KOTA *TERBESAR* DUNIA' }], { only: 'long' }),
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
              { at: 0, face: 'dimas', dir: 'right' }, { at: 0, say: 'dimas', text: 'Hello? Excuse me...', dur: 900 },
              { at: 'inggris', kw: '"*HELLO*?"' },
              { at: 'tertawa', jump: 'rm1', times: 2, height: 3 }, { at: 'tertawa', jump: 'rm2', times: 2, height: 3 },
              { at: 'tawa', say: 'rm2', text: 'Ha ha! Barbarus!', dur: 1000 },
              { at: 'tertawa', label: '(Orang asing!)', x: 72, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'malah', sticker: 'sweat', at_: [0.5, 0.3] },
            ]),
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
              { at: 'menunjuk', say: 'dimas', text: '...?', dur: 800 },
              { at: 'mengangguk', jump: 'dimas', times: 3, height: 2 },
              { at: 'seminggu', kw: '*BISU* 7 HARI' },
              { at: 'mengangguk', enter: 'lw2', from: 'left', to: 220, speed: 20 },
            ]),
            C('r-08', [
              { at: 'roti', label: 'ROTI', x: 50, y: 78, bg: '#c98a45', size: 18, dur: 0 }, { at: 'roti', emote: 'dimas', icon: 'heart', dur: 900 }, { at: 'roti', kw: 'INGIN *ROTI*' },
              { at: 'tapi', say: 'tukang', text: 'Pecunia?', dur: 1000 },
              { at: 'tapi', label: '(Uangnya?)', x: 52, y: 62, bg: GELAP, size: 17, dur: 0 },
              { at: 'koin', emote: 'dimas', icon: 'sweat', dur: 1300 }, { at: 'koin', kw: 'TANPA *SATU KOIN*' },
              { at: 'pun', enter: 'lw3', from: 'right', to: -20, speed: 24 },
            ]),
            { clear: true },
          ],
        },

        // 4) Kembali ke peta: zoom keluar dari Dimas — sendirian di kota besar
        peta([
          { together: [{ pop: 'pin' }, { camera: { x: 112, y: 54, zoom: 1 }, dur: 5200, ease: 'Sine.easeInOut' },
            C('r-09', [{ at: 'kota', kw: '± *1 JUTA* ORANG' }, { at: 'sejuta', label: 'perkiraan sejarawan', x: 150, y: 96, bg: GELAP, size: 13, dur: 0 },
              { at: 'sendirian', kw: 'DIA *SENDIRIAN*', keepKw: true }, { at: 'sendirian', emote: 'dimasP', icon: 'sweat', dur: 1400 }], { punch: true })] },
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
            { at: 'otot', camera: { x: 66, y: 62, zoom: 2.1 }, dur: 1600 },
            { at: 'otot', label: 'PELABUHAN TIBER', x: 58, y: 58, bg: '#2f6fbf', size: 14, dur: 0 },
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
              { at: 'menyalin', label: 'MENYALIN BUKU', x: 142, y: 56, bg: GELAP, size: 16, dur: 0 },
              { at: 'buku', emote: 'penulis', icon: 'note', dur: 1000 },
            ]),
            { clearLabels: true },
            C('r-13', [
              { at: 0, move: 'pemikul', to: 60, dur: 3600 }, { at: 0, move: 'guci', to: 60, dur: 3600 },
              { at: 'sepertiga', kw: '± *1 DARI 3* ORANG = BUDAK' },
              { at: 'sepertiga', card: 'Budak di Italia', items: ['± sepertiga penduduk', '(perkiraan sejarawan)', 'Tanpa hak, bisa dijual'], x: 98, y: 60, place: 'left' },
              { at: 'budak', emote: 'dimas', icon: 'exclaim', dur: 1000 },
            ]),
            { wait: 1000 },   // beri waktu membaca kartu
            { clear: true },
            C('r-14', [
              { at: 0, card: 'Tangga sosial Roma', items: ['1. Kaisar', '2. Senator & bangsawan', '3. Warga Roma', '4. Mantan budak', '5. Budak'], x: 98, y: 60, place: 'left' },
              { at: 'claudius', kw: 'ATAS: *KAISAR*' }, { at: 'budak', kw: 'BAWAH: *BUDAK*' },
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
              { at: 'orang', label: 'DEMAM', x: 60, y: 78, bg: MERAH, size: 16, dur: 0 },
              { at: 'orang', emote: 'sakit', icon: 'sweat', dur: 1400 },
              { at: 'demam', kw: 'SELOKAN · LALAT · *DEMAM*' },
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
            { together: [{ mono: true }, C('r-19', [{ at: 'sakit perut', kw: 'SAKIT PERUT = *BISA MEMBUNUH*', keepKw: true }, { at: 'membunuh', sticker: 'dizzy', at_: [0.72, 0.3] }], { punch: true })] },
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
            { at: 'kosong', kw: 'PERUT *KOSONG*' }, { at: 'kosong', shake: 200 }]),
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
              { at: 'kabur', kw: 'PANDANGAN *KABUR*' }, { at: 'kabur', sticker: 'dizzy', at_: [0.72, 0.3] },
            ]),
            { together: [{ mono: true }, C('r-27', [
              { at: 'uang', kw: 'UANG *CEPAT*' }, { at: 'cepat', ...LAPAR(1, { text: 'KRITIS' }) }, { at: 'cepat', shake: 250 },
              { at: 'syarat', kw: 'UANG CEPAT · *TANPA SYARAT*', keepKw: true },
            ], { punch: true })] },
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
            C('r-28', [{ at: 'kota', emote: 'dimasP', icon: 'question', dur: 1000 }, { at: 'satu', kw: 'SEMUA KE *SATU ARAH*' }], { only: 'long' }),
            C('r-28s', [{ at: 0, kw: 'JALAN PINTAS *MENGERIKAN*' }, { at: 'mengerikan', sticker: 'shock', at_: [0.75, 0.3] }], { only: 'short' })] },
          C('r-29', [
            { at: 0, move: 'dimasP', to: 82, dur: 3400 }, { at: 0, raise: 'dimasP', to: 29, dur: 3400 },
            { at: 0, camera: { x: 80, y: 26, zoom: 2.5 }, dur: 3200 },
            { at: 'amfiteater', label: 'AMFITEATER STATILIUS TAURUS', x: 75, y: 11, bg: GELAP, size: 14, dur: 0 },
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
            { wait: 1600 },   // beri waktu membaca kartu
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
              { at: 'mendaftar', kw: '*RELAWAN* BOLEH DAFTAR' }, { at: 'mendaftar', emote: 'dimas', icon: 'exclaim', dur: 900 },
            ]),
            { clearLabels: true },
            C('r-33', [
              { at: 0, move: 'dimas', to: 104, dur: 1100 },
              { at: 'langsung', say: 'lanista', text: 'Pecunia statim!', dur: 1000 }, { at: 'langsung', label: '(Uang langsung!)', x: 124, y: 49, bg: GELAP, size: 17, dur: 0 },
              { at: 'uang', pop: 'k1' }, { at: 'uang', kw: 'UANG *MUKA*' }, { at: 'muka', pop: 'k2' }, { at: 'muka', pop: 'k3' }, { at: 'muka', sfx: 'kaching' },
              { at: 'muka', emote: 'dimas', icon: 'heart', dur: 1000 },
              { at: 'langsung', card: 'Auctoratus', items: ['Orang merdeka yang', 'menjual diri jadi gladiator', 'Bayaran diterima saat bersumpah'], x: 120, y: 70, place: 'left' },
            ]),
            { wait: 1600 },   // beri waktu membaca kartu
            { together: [{ clear: true }, { move: 'k1', to: 106, dur: 500 }, { move: 'k2', to: 106, dur: 600 }, { move: 'k3', to: 106, dur: 700 }] },
            { together: [{ hide: 'k1', dur: 200 }, { hide: 'k2', dur: 200 }, { hide: 'k3', dur: 200 }, { sfx: 'coin', vol: 0.7 }] },
            // sumpah: layar menggelap, kamera mendekat
            C('r-34', [
              { at: 0, tint: 0.5, color: GELAP, dur: 900 }, { at: 0, camera: VERT ? { x: 100, y: 80, zoom: 2 } : { x: 108, y: 80, zoom: 2.3 }, dur: 1200 },
              { at: 'syaratnya', say: 'lanista', text: 'Iura!', dur: 900, shout: true }, { at: 'syaratnya', label: '(Bersumpahlah!)', x: 128, y: 64, bg: MERAH, size: 16, dur: 0 },
              { at: 'sumpah', kw: 'SYARATNYA: *SUMPAH*' }, { at: 'sumpah', jump: 'dimas', times: 1, height: 2 },
            ]),
            { clearLabels: true },
            C('r-35', [
              { at: 'dibakar', pop: 'i1' }, { at: 'dibakar', kw: '*DIBAKAR*' },
              { at: 'dirantai', pop: 'i2' }, { at: 'dirantai', kw: 'DIBAKAR · *DIRANTAI*' },
              { at: 'dicambuk', pop: 'i3' }, { at: 'dicambuk', kw: 'DIRANTAI · *DICAMBUK*' },
              { at: 'dibunuh', pop: 'i4' }, { at: 'pedang', kw: 'DIBUNUH *PEDANG*' }, { at: 'pedang', shake: 300 }, { at: 'pedang', emote: 'dimas', icon: 'sweat', dur: 1200 },
              { at: 'dibakar', label: 'Isi sumpah gladiator (Petronius, Satyricon)', x: 106, y: 100, bg: GELAP, size: 12, dur: 0 },
            ]),
            { clearLabels: true },
            C('r-36', [
              { at: 'perut', label: 'KRUUUK...', x: 104, y: 78, bg: MERAH, size: 16, dur: 0 }, { at: 'berbunyi', shake: 220 },
              { at: 'mengangguk', jump: 'dimas', times: 2, height: 2 }, { at: 'mengangguk', stamp: 'SETUJU', color: '#38b764', at_: [0.5, 0.34] },
              { at: 'mengangguk', kw: '*SETUJU*', keepKw: true },
            ], { punch: true }),
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
            C('r-37', [{ at: 'pertama', emote: 'dimasP', icon: 'heart', dur: 1200 }, { at: 'kenyang', kw: 'MAKAN *KENYANG*' }, { at: 'kenyang', ...LAPAR(0.15, { text: 'KENYANG' }) }], { only: 'long' }),
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
              { at: 'abu', card: 'Studi tulang gladiator', items: ['Efesus, Turki (2014):', 'banyak makan jelai & kacang', 'Kalsium tinggi, diduga', 'dari minuman abu tanaman'], x: 110, y: 64, place: 'left' },
            ]),
            { wait: 1600 },   // beri waktu membaca kartu
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
              { at: 'senjata', kw: 'PILIH *SENJATA*' }, { at: 'senjata', face: 'dimas', dir: 'right' }, { at: 'senjata', glow: 'rak', times: 2 },
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
              { at: 'jaring', label: 'JARING', x: 92, y: 92, bg: GELAP, size: 14, dur: 0 },
              { at: 'trisula', label: 'TRISULA', x: 120, y: 72, bg: GELAP, size: 14, dur: 0 },
              { at: 'helm', label: 'TANPA HELM', x: 104, y: 64, bg: MERAH, size: 14, dur: 0 },
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
              { at: 'sesak', kw: 'HELM = *SESAK*' }, { at: 'sesak', shake: 200 },
            ]),
            { together: [{ clearLabels: true }, { hide: 'helmBesar', dur: 300 }, { hide: 'napas', dur: 300 }, { tint: 0, dur: 400 }] },
            C('r-46', [
              { at: 'sederhana', move: 'sec', to: VERT ? 104 : 96, dur: 1000 }, { at: 'sederhana', move: 'dimasR', to: VERT ? 78 : 54, dur: 900 },
              { at: 'dilawan', label: 'JANGAN DILAWAN', x: VERT ? 84 : 60, y: 66, bg: GELAP, size: 14, dur: 0 },
              { at: 'bikin', move: 'sec', to: VERT ? 92 : 76, dur: 900 }, { at: 'lelah', show: 'napas2', dur: 300 }, { at: 'bikin', move: 'napas2', to: VERT ? 84 : 68, dur: 10 },
              { at: 'lelah', label: 'BIKIN LELAH', x: VERT ? 96 : 78, y: 58, bg: MERAH, size: 14, dur: 0 },
              { at: 'lelah', ...PELUANG(0.1) }, { at: 'lelah', kw: 'PELUANG HIDUP *10%*', keepKw: true },
              { at: 'lelah', label: 'angka ilustrasi', x: VERT ? 110 : 160, y: 30, bg: GELAP, size: 11, dur: 0 },
            ], { punch: true }),
            { wait: 600 },
          ],
        },
      ],
    },
  ],
};
