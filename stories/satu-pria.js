// ============================================================
//  "ANDAIKAN AKU SATU-SATUNYA PRIA DI DUNIA" — seri Andaikan, gaya peta
//  Naskah: stories/satu-pria.naskah.md · Skema: stories/satu-pria.plan.md · Riset: stories/satu-pria.riset.md
//  Satu dunia (tidak terbelah): Dimas di Negeri Sekar. Meteran HUD "SENANG" + label DITOLAK/DIKEJAR.
//  Ramah keluarga: warga mengejar karena heboh/penasaran (seperti fans), tanpa romansa fisik.
//  only: "long" = kalimat jembatan kompilasi; "short" = pembuka versi per bab.
// ============================================================
// id → [teks layar, teks ucapan VO]
const SP = {
 // Bab 1 — hook
 "s-01": ["Ini Dimas. Hari ketujuh di dunia lain. Ia lari sekuat tenaga.", "Ini Dimas. Hari ketujuh di dunia lain. Ia lari sekuat tenaga."],
 "s-02": ["Di belakangnya, seribu orang mengejar. Bawa kamera dan bunga.", "Di belakangnya, seribu orang mengejar. Bawa kamera dan bunga."],
 "s-03": ["\"Seminggu lalu aku berdoa ingin dikelilingi cewek.\"", "Seminggu lalu aku berdoa ingin dikelilingi cewek."],
 "s-04": ["\"Sekarang... aku menyesal.\"", "Sekarang... aku menyesal."],
 "s-05": ["Andaikan kamu satu-satunya pria di dunia.", "Andaikan kamu satu-satunya pria di dunia."],
 // Bab 2 — ditolak 10 kali
 "s-06": ["Mundur seminggu. Dimas masih di dunia kita.", "Mundur seminggu. Dimas masih di dunia kita."],
 "s-06s": ["Cowok ini ditolak sepuluh kali dalam setahun.", "Cowok ini ditolak sepuluh kali dalam setahun."],
 "s-07": ["Dimas pegawai gudang. Baik, rajin, tapi jomblo menahun.", "Dimas pegawai gudang. Baik, rajin, tapi jomblo menahun."],
 "s-08": ["Tahun ini ia sudah nembak cewek sepuluh kali.", "Tahun ini ia sudah nembak cewek sepuluh kali."],
 "s-09": ["\"Kamu kayak abangku sendiri.\" Tolakan pertama.", "Kamu kayak abangku sendiri. Tolakan pertama."],
 "s-10": ["\"Aku lagi fokus skripsi.\" Padahal sudah wisuda.", "Aku lagi fokus skripsi. Padahal sudah wisuda."],
 "s-11": ["\"Aku nyari yang tinggi.\" Dimas jinjit pun tetap kalah.", "Aku nyari yang tinggi. Dimas jinjit pun tetap kalah."],
 "s-12": ["Sisanya? Ada yang cuma balas: \"Wkwk.\"", "Sisanya? Ada yang cuma balas: wekawekawek."],
 "s-13": ["Padahal, di Indonesia, pria dan wanita hampir seimbang.", "Padahal, di Indonesia, pria dan wanita hampir seimbang."],
 "s-14": ["Secara statistik, jodoh Dimas itu ada.", "Secara statistik, jodoh Dimas itu ada."],
 "s-15": ["Malam itu Dimas galau. Ia berdoa sebelum tidur.", "Malam itu Dimas galau. Ia berdoa sebelum tidur."],
 "s-16": ["\"Aku cuma pengin dikelilingi cewek...\"", "Aku cuma pengin dikelilingi cewek..."],
 "s-17": ["Doanya dikabulkan. Terlalu harfiah.", "Doanya dikabulkan. Terlalu harfiah."],
};
const C = (id, cues = [], extra = {}) => ({ caption: SP[id][0], vo: id, speak: SP[id][1], cues, ...extra });

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const L = [0.24, 0.3], Rt = [0.76, 0.3];
const UNGU = '#7a3b8f', TEAL = '#257179', GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f', PINK = '#ff77a8', ORANGE = '#ef7d57';
const WARGA = ['montir', 'pilot', 'polwan', 'kuli', 'sk1', 'sk2', 'sk3', 'sk4', 'sk5', 'sk6'];

// meteran SENANG Dimas (HUD pojok kanan atas)
const senang = (v, dur) => ({ meter: 'SENANG', value: v, color: v >= 0.6 ? GREEN : v >= 0.3 ? '#ffcd75' : RED, text: Math.round(v * 100) + '%', dur });
const senangSc = v => senang(v);

// ---------- ALUN-ALUN tampak samping (lebar 400): ruko, pohon, menara jam di x 330 ----------
function alunSamping(o = {}) {
  return [
    ...[20, 150, 236].map((x, i) => ({ sprite: 'normal_ruko', x, y: 91, scale: 0.3, depth: 2 + i * 0.01 })),
    { sprite: 'house', x: 80, y: 91, depth: 2 }, { sprite: 'house', x: 196, y: 91, depth: 2 },
    { sprite: 'normal_pohon', x: 112, y: 92, scale: 0.36, depth: 3 }, { sprite: 'normal_pohon_b', x: 262, y: 92, scale: 0.36, depth: 3 },
    { sprite: 'normal_lampu_jalan', x: 58, y: 92, scale: 0.36, depth: 3 }, { sprite: 'normal_lampu_jalan', x: 176, y: 92, scale: 0.36, depth: 3 },
    { id: 'menara', sprite: 'menara_jam', x: 300, y: 93, scale: 0.75, depth: 4 },
    { sprite: 'normal_pohon', x: 350, y: 92, scale: 0.36, depth: 3 }, { sprite: 'normal_ruko', x: 380, y: 91, scale: 0.3, depth: 2 },
    { sprite: 'flower', x: 130, y: 96, depth: 5 }, { sprite: 'flower2', x: 214, y: 96, depth: 5 }, { sprite: 'flower', x: 330, y: 96, depth: 5 },
    ...(o.extra || []),
  ];
}
// kamera tampak samping: 16:9 lebih dekat, 9:16 lebih lebar agar kerumunan & kaki terlihat
const camS = (x, z = 1.6, y = 74, vx = x) => ({ x: VERT ? vx : x, y: VERT ? Math.min(y, 70) : y, zoom: VERT ? Math.max(1.05, z * 0.5) : z });
const DTOP = VERT ? undefined : 84;   // kotak dialog di bawah meteran (16:9)

const STORY = {
  title: 'Andaikan Aku Satu-satunya Pria di Dunia',
  audioDir: 'audio/satu-pria',
  sfx: true,
  captionStyle: 'keyword',
  chapters: [
    // ================= BAB 1 — HOOK (kilas maju) =================
    {
      id: 'bab-1', title: 'Dikejar satu kota',
      scenes: [
        {
          sky: 'day', width: 400, clock: 'HARI 7', meter: senangSc(0.05),
          camera: camS(70),
          props: alunSamping(),
          actors: [
            { id: 'dimas', sprite: 'dms', x: 56, y: 101, depth: 10.5 },
            ...['sk1', 'wulan', 'montir', 'sk2', 'pilot', 'sk3', 'polwan', 'sk4', 'kuli', 'sk6', 'sk5', 'darmi'].map((s, i) => ({ id: 'w' + i, sprite: s, x: -20, y: 100 + (i % 3), hidden: true, depth: 9 + (i % 3) * 0.1 })),
          ],
          steps: [
            C('s-01', [
              { at: 0, move: 'dimas', to: 284, dur: 7600 },
              { at: 0, camera: camS(256), dur: 7600, ease: 'Sine.easeInOut' },
              ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => ({ at: 0.02 + i * 0.015, enter: 'w' + i, from: 'left', to: 262 - i * 5, dur: 7400 + i * 60 })),
              { at: 'dimas', kw: '*DIMAS* · HARI 7 DI DUNIA LAIN' }, { at: 'lari', kw: 'LARI *SEKUAT TENAGA*' }, { at: 'lari', emote: 'dimas', icon: 'sweat', dur: 900 }]),
            C('s-02', [{ at: 'seribu', kw: 'DIKEJAR *1.000 ORANG*' }, { at: 'seribu', label: '1.000 PENGEJAR (ilustrasi)', x: 256, y: VERT ? 30 : 46, bg: RED, size: 11, dur: 0 },
              { at: 'kamera', emote: 'w1', icon: 'exclaim', dur: 900 }, { at: 'bunga', emote: 'w3', icon: 'note', dur: 900 }, { at: 'bunga', sticker: 'shock', at_: Rt }]),
            { together: [{ clearLabels: true }, { face: 'dimas', dir: 'left' }, { camera: camS(270, 2.2, 80), dur: 700 }] },
            C('s-03', [{ at: 0, dialog: 'dimas', text: 'Seminggu lalu aku berdoa ingin dikelilingi cewek...', top: DTOP, dur: 300 }]),
            C('s-04', [{ at: 0, dialog: 'dimas', text: 'Sekarang... aku menyesal.', top: DTOP, dur: 400 }, { at: 0.2, kw: 'AKU *MENYESAL*' }, { at: 'menyesal', meter: 'SENANG', value: 0, color: RED, text: '0%' }]),
            { together: [{ camera: camS(256, 1.4, 70), dur: 1200 }, { title: 'ANDAIKAN', sub: 'Aku satu-satunya pria di dunia', dark: true, size: 30, dur: 2200 }, C('s-05')] },
          ],
        },
      ],
    },
    // ================= BAB 2 — DITOLAK 10 KALI =================
    {
      id: 'bab-2', title: 'Ditolak 10 kali',
      scenes: [
        {
          transition: 'clouds', sky: 'day', clock: 'DUNIA KITA', meter: senangSc(0.3),
          camera: camS(96, 2.2, 80, 86),
          props: [
            { sprite: 'normal_ruko', x: 24, y: 91, scale: 0.3, depth: 2 }, { sprite: 'normal_halte', x: 150, y: 92, scale: 0.36, depth: 3 },
            { sprite: 'normal_pohon', x: 70, y: 92, scale: 0.36, depth: 3 }, { sprite: 'normal_lampu_jalan', x: 118, y: 92, scale: 0.36, depth: 3 },
            { sprite: 'flower', x: 100, y: 96, depth: 5 },
            { id: 'hp', sprite: 'hp_notif', x: 92, y: 90, scale: 0.9, depth: 14, hidden: true },
          ],
          actors: [
            { id: 'dimas', sprite: 'dms', x: 76, y: 101, tag: 'DITOLAK 0', tagColor: RED, depth: 10.5 },
            ...['sk3', 'sk6', 'sk1'].map((s, i) => ({ id: 'c' + i, sprite: s, x: 220, y: 101, face: 'left', hidden: true, depth: 10 })),
          ],
          steps: [
            C('s-06', [{ at: 'mundur', kw: 'MUNDUR *SEMINGGU*' }, { at: 'mundur', clock: 'HARI', from: 7, to: 0, dur: 1200 }, { at: 'dunia kita', clock: 'DUNIA KITA' }], { only: 'long' }),
            C('s-06s', [{ at: 'ditolak', kw: 'DITOLAK *10 KALI*' }, { at: 'sepuluh', stamp: 'DITOLAK' }], { only: 'short' }),
            C('s-07', [{ at: 'gudang', label: 'PEGAWAI GUDANG', x: 100, y: 70, bg: NAVY, size: 11, dur: 0 }, { at: 'rajin', emote: 'dimas', icon: 'note', dur: 900 },
              { at: 'jomblo', kw: 'JOMBLO *25 TAHUN*' }, { at: 'jomblo', sticker: 'sweat', at_: Rt }]),
            { clearLabels: true },
            C('s-08', [{ at: 'nembak', kw: 'NEMBAK CEWEK *10 KALI*' }, { at: 'sepuluh', emote: 'dimas', icon: 'exclaim', dur: 900 }]),
            C('s-09', [{ at: 0, enter: 'c0', from: 'right', to: 104, dur: 700 }, { at: 0.12, dialog: 'c0', name: 'CEWEK 1', text: 'Kamu kayak abangku sendiri.', top: DTOP, dur: 200 },
              { at: 'tolakan', stamp: 'DITOLAK' }, { at: 'tolakan', tag: 'dimas', text: 'DITOLAK 1', color: RED }, { at: 0.92, exit: 'c0', to: 'right', speed: 80 }]),
            C('s-10', [{ at: 0, enter: 'c1', from: 'right', to: 104, dur: 700 }, { at: 0.12, dialog: 'c1', name: 'CEWEK 2', text: 'Aku lagi fokus skripsi.', top: DTOP, dur: 200 },
              { at: 'skripsi', label: 'SUDAH WISUDA', x: 104, y: 62, bg: GREEN, size: 10, dur: 0 }, { at: 'padahal', stamp: 'DITOLAK' }, { at: 'padahal', tag: 'dimas', text: 'DITOLAK 2', color: RED },
              { at: 0.92, exit: 'c1', to: 'right', speed: 80 }]),
            { clearLabels: true },
            C('s-11', [{ at: 0, enter: 'c2', from: 'right', to: 104, dur: 700 }, { at: 0.1, dialog: 'c2', name: 'CEWEK 3', text: 'Aku nyari yang tinggi.', top: DTOP, dur: 200 },
              { at: 'jinjit', jump: 'dimas', times: 2, height: 4 }, { at: 'kalah', stamp: 'DITOLAK' }, { at: 'kalah', tag: 'dimas', text: 'DITOLAK 3', color: RED },
              { at: 0.94, exit: 'c2', to: 'right', speed: 80 }]),
            C('s-12', [{ at: 0, pop: 'hp' }, { at: 'sisanya', kw: 'SISANYA?' }, ...[4, 5, 6, 7, 8, 9, 10].map((n, i) => ({ at: 0.1 + i * 0.08, tag: 'dimas', text: 'DITOLAK ' + n, color: RED })),
              { at: 'balas', label: '"Wkwk."', x: 108, y: 66, bg: '#3b5dc9', size: 13, dur: 0 }, { at: 'balas', kw: 'CUMA BALAS *"WKWK"*' }, { at: 'wekawekawek', sticker: 'dizzy', at_: L }]),
            { together: [{ hide: 'hp' }, { clearLabels: true }] },
            C('s-13', [{ at: 'padahal', card: 'BPS · 2024', items: ['Rasio jenis kelamin Indonesia', '±101 pria : 100 wanita'], x: 70, y: 62, stagger: 300, dur: 0 },
              { at: 'indonesia', kw: 'HAMPIR *SEIMBANG*' }]),
            C('s-14', [{ at: 'statistik', kw: 'JODOHNYA *ADA*' }, { at: 'ada', emote: 'dimas', icon: 'question', dur: 1000 }]),
            { clear: true },
          ],
        },
        {
          transition: 'fade', sky: 'rumah', clock: 'MALAM', meter: senangSc(0.1),
          camera: camS(96, 1.9, 80, 82),
          props: [
            { sprite: 'jendela_malam', x: 46, y: 64, depth: 2 }, { sprite: 'jam_dinding', x: 140, y: 44, depth: 2 },
            { id: 'kasur', sprite: 'kasur', x: 110, y: 101, scale: 1.2, depth: 6 },
            { id: 'cahaya', sprite: 'cahaya_lampu', x: 96, y: 98, scale: 1.2, depth: 30 }, { sprite: 'lampu_gantung', x: 96, y: 46, depth: 31 },
          ],
          actors: [{ id: 'dimas', sprite: 'dms_rmh', x: 70, y: 101, depth: 10, tag: 'DITOLAK 10', tagColor: RED }],
          steps: [
            C('s-15', [{ at: 'galau', kw: 'MALAM ITU *GALAU*' }, { at: 'galau', emote: 'dimas', icon: 'sweat', dur: 1000 }, { at: 'berdoa', move: 'dimas', to: 84, dur: 800 }]),
            C('s-16', [{ at: 0, dialog: 'dimas', name: 'DIMAS', text: 'Aku cuma pengin dikelilingi cewek...', top: DTOP, dur: 300 }, { at: 0.45, kw: 'DOA *TERKIRIM*' }]),
            { together: [{ hide: 'dimas', dur: 300 }, { swap: 'kasur', to: 'kasur_dimas' }, { tint: 0.35, color: '#1a1c2c', dur: 600 }, { alpha: 'cahaya', to: 0.2, dur: 600 }] },
            C('s-17', [{ at: 0, label: 'zzz', x: 106, y: 76, bg: NAVY, size: 10, dur: 0 }, { at: 'dikabulkan', shake: 300 }, { at: 0, kw: 'DOANYA *DIKABULKAN*' },
              { at: 'terlalu', kw: '...TERLALU *HARFIAH*' }, { at: 'harfiah', sticker: 'smirk', at_: Rt }], { punch: true }),
            { quote: 'Doanya dikabulkan. Terlalu harfiah.', sub: 'DITOLAK 10 · DIKEJAR 0', dur: 1600 },
          ],
        },
      ],
    },
  ],
};
