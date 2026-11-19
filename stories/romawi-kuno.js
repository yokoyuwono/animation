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
function peta(steps, { c = { x: 96, y: 54, zoom: 1 }, transition = 'clouds', clock, dimas = false, extraProps = [] } = {}) {
  return {
    transition, sky: 'map', map: ROMA, noClouds: true, camera: c, clock,
    props: [{ sprite: 'roma_peta', x: 96, y: 54, scale: 0.5, center: true, depth: 1 },
      { id: 'kilat', sprite: 'kilat', x: SUBURA.x, y: SUBURA.y + 1, scale: 0.4, depth: 20, hidden: true },
      { id: 'pin', sprite: 'roma_penanda', x: SUBURA.x, y: SUBURA.y - 3, scale: 0.8, depth: 20, hidden: true }, ...extraProps],
    actors: dimas ? [{ id: 'dimasP', sprite: 'dimas', x: SUBURA.x, y: SUBURA.y + 1, scale: 0.26, tag: 'DIMAS', tagColor: UNGU }] : [],
    walkers: { n: 54, sprites: WARGA_PETA, scale: 0.22, stay: [[{ act: 'idle', n: 7, x: 112, y: 58, spread: 10 }, { act: 'idle', n: 4, x: 75, y: 23, spread: 4 }, { act: 'idle', n: 3, x: 92, y: 92, spread: 14 }]] },
    steps,
  };
}

// ---------- adegan dekat: jalan Roma tampak samping ----------
const JALAN = [{ sprite: 'jalan_batu', x: 96, y: 108, depth: 2.5 }];
const CAM_DEKAT = VERT ? { x: 96, y: 72, zoom: 1.3 } : { x: 96, y: 71, zoom: 1.4 };
const r = (id, sprite, x, ex = {}) => ({ id, sprite, x, y: 94, ...ex });

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
  ],
};
