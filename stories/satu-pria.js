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
 // Bab 3 — bangun di Negeri Sekar
 "s-18": ["Dimas membuka mata. Kamarnya hilang.", "Dimas membuka mata. Kamarnya hilang."],
 "s-18s": ["Bayangkan kamu bangun, dan hanya kamu pria di dunia.", "Bayangkan kamu bangun, dan hanya kamu pria di dunia."],
 "s-19": ["Ia terbaring di alun-alun kota yang asing.", "Ia terbaring di alun-alun kota yang asing."],
 "s-20": ["Montir, pilot, polisi, kuli bangunan. Semuanya perempuan.", "Montir, pilot, polisi, kuli bangunan. Semuanya perempuan."],
 "s-21": ["Nenek penjual sayur pun menatapnya, heran.", "Nenek penjual sayur pun menatapnya, heran."],
 "s-22": ["Dimas tersenyum lebar. \"Doaku terkabul!\"", "Dimas tersenyum lebar. Doaku terkabul!"],
 "s-23": ["Lalu, hening. Semua mata menoleh ke arahnya.", "Lalu, hening. Semua mata menoleh ke arahnya."],
 "s-24": ["Sirene kota berbunyi.", "Sirene kota berbunyi."],
 "s-25": ["Negeri ini sudah tiga ratus tahun tanpa pria.", "Negeri ini sudah tiga ratus tahun tanpa pria."],
 "s-26": ["Dan Dimas, baru saja jadi berita utama.", "Dan Dimas, baru saja jadi berita utama."],
 // Bab 4 — mendadak selebriti
 "s-27": ["Dari alun-alun, kabar menyebar dalam lima menit.", "Dari alun-alun, kabar menyebar dalam lima menit."],
 "s-27s": ["Satu-satunya pria di dunia. Hari pertama, jadi artis.", "Satu-satunya pria di dunia. Hari pertama, jadi artis."],
 "s-28": ["Mbak Wulan dari TV kota langsung siaran.", "Mbak Wulan dari TV kota langsung siaran."],
 "s-29": ["Antrean selfie mengular sampai balai kota.", "Antrean selfie mengular sampai balai kota."],
 "s-30": ["Dimas melambai seperti artis.", "Dimas melambai seperti artis."],
 "s-31": ["Hari pertama: dua ribu tanda tangan.", "Hari pertama: dua ribu tanda tangan."],
 "s-32": ["Malamnya, tangan Dimas kram.", "Malamnya, tangan Dimas kram."],
 "s-33": ["Ternyata jadi artis itu kerja keras.", "Ternyata jadi artis itu kerja keras."],
 // Bab 5 — diperebutkan
 "s-34": ["Hari ketiga, pintu kamar hotel Dimas diketuk. Berkali-kali.", "Hari ketiga, pintu kamar hotel Dimas diketuk. Berkali-kali."],
 "s-34s": ["Satu-satunya pria di dunia. Semua lembaga berebut dia.", "Satu-satunya pria di dunia. Semua lembaga berebut dia."],
 "s-35": ["Dr. Sinta dari lab: \"Kami ingin meneliti kromosom Y-mu!\"", "Dokter Sinta dari lab: Kami ingin meneliti kromosom ye-mu!"],
 "s-36": ["Kapten Rani dari stadion: \"Main untuk tim kami!\"", "Kapten Rani dari stadion: Main untuk tim kami!"],
 "s-37": ["Museum kota: \"Bisa jadi pameran sehari?\"", "Museum kota: Bisa jadi pameran sehari?"],
 "s-38": ["Bu Darmi, biro jodoh: \"Antrean kenalanmu tiga ribu orang.\"", "Bu Darmi, biro jodoh: Antrean kenalanmu tiga ribu orang."],
 "s-39": ["Wali kota, Bu Ratna, sampai harus membuat undian jadwal.", "Wali kota, Bu Ratna, sampai harus membuat undian jadwal."],
 "s-40": ["Dr. Sinta tidak heran negerinya bertahan tanpa pria.", "Dokter Sinta tidak heran negerinya bertahan tanpa pria."],
 "s-41": ["Di alam, komodo betina bisa menetaskan telur tanpa jantan.", "Di alam, komodo betina bisa menetaskan telur tanpa jantan."],
 "s-42": ["Lucunya, anak komodo itu jantan semua.", "Lucunya, anak komodo itu jantan semua."],
 "s-43": ["Rotifer, hewan mikro, semuanya betina. Puluhan juta tahun.", "Rotifer, hewan mikro, semuanya betina. Puluhan juta tahun."],
 "s-44": ["Jadi Dimas dicari bukan karena ganteng. Tapi karena langka.", "Jadi Dimas dicari bukan karena ganteng. Tapi karena langka."],
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

// ---------- PETA NEGERI SEKAR (tampak atas): menara jam di tengah alun-alun ----------
const KOTA = { roads: [[0, 62, 192, 62], [96, 0, 96, 108], [20, 34, 176, 34], [20, 90, 176, 90]], plaza: [80, 44, 32, 26],
  paths: [[82, 48, 110, 48], [82, 68, 110, 68], [40, 62, 40, 90], [150, 34, 150, 62]] };
const T = { menara: [96, 56], balai: [96, 20], lab: [40, 22], stadion: [150, 18], biro: [40, 80], studio: [150, 80], hotel: [62, 50], pasar: [132, 52] };
function kota() {
  return [
    { id: 'menaraTop', sprite: 'menara_jam_top', x: 96, y: 62, depth: 4.8 },
    { sprite: 'balai_top', x: 96, y: 30 },
    { id: 'lab', sprite: 'lab_top', x: 40, y: 30 },
    { id: 'stadion', sprite: 'stadion_top', x: 150, y: 18, center: true, depth: 3.2 },
    { id: 'biro', sprite: 'biro_top', x: 40, y: 86 },
    { id: 'studio', sprite: 'studio_top', x: 150, y: 86 },
    { id: 'hotel', sprite: 'hotel_top', x: 62, y: 58 },
    { sprite: 'pasar_top', x: 132, y: 58 },
    ...[[8, 104], [24, 104], [64, 104], [80, 104], [112, 104], [128, 104], [172, 104], [186, 104]].map(([x, y], i) => ({ sprite: `rumah_top_${i % 4}`, x, y })),
    ...[[8, 10], [70, 10], [122, 10], [186, 30], [8, 48], [186, 60], [8, 72], [118, 82], [74, 82], [182, 82]].map(([x, y]) => ({ sprite: 'pohon_top', x, y })),
  ];
}
const camP = (t, z) => ({ x: T[t][0], y: T[t][1], zoom: VERT ? z * 0.8 : z });
function peta(steps, { c = { x: 96, y: 54, zoom: 1.2 }, n = 30, dimas = true, extra = {} } = {}) {
  return { transition: 'clouds', sky: 'map', map: KOTA, camera: c, props: kota(),
    actors: dimas ? [{ id: 'dimasP', sprite: 'dms', x: 96, y: 74, scale: 0.75, tag: 'DIMAS', tagColor: NAVY, depth: 6 }] : [],
    walkers: { n, sprites: WARGA, scale: 0.45 }, steps, ...extra };
}

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
    // ================= BAB 3 — BANGUN DI NEGERI SEKAR =================
    {
      id: 'bab-3', title: 'Bangun di Negeri Sekar',
      scenes: [
        peta([
          C('s-18', [{ at: 0, camera: camP('menara', 2.6), dur: 0 }, { at: 'membuka', emote: 'dimasP', icon: 'question', dur: 1000 }, { at: 'membuka', kw: 'KAMARNYA *HILANG*' }], { only: 'long' }),
          C('s-18s', [{ at: 0, camera: camP('menara', 2.6), dur: 0 }, { at: 'bangun', emote: 'dimasP', icon: 'question', dur: 1000 }, { at: 'hanya kamu', kw: 'HANYA KAMU *PRIA*' }], { only: 'short' }),
          C('s-19', [{ at: 0, camera: { x: 96, y: 54, zoom: VERT ? 1 : 1.15 }, dur: 2600, ease: 'Cubic.easeOut' }, { at: 'alun', kw: 'KOTA *ASING*' },
            { at: 'terbaring', label: 'NEGERI SEKAR', x: 96, y: 8, bg: UNGU, size: 14, dur: 0 }]),
          { wait: 500 },
        ], { extra: { clock: 'HARI 1', meter: senangSc(0.3) } }),
        {
          transition: 'zoom', sky: 'day', clock: 'HARI 1', meter: senangSc(0.3), width: 260,
          camera: camS(102, 1.7, 76, 70),
          props: [
            { sprite: 'normal_ruko', x: 18, y: 91, scale: 0.3, depth: 2 }, { sprite: 'house', x: 160, y: 91, depth: 2 },
            { sprite: 'normal_pohon', x: 66, y: 92, scale: 0.36, depth: 3 }, { sprite: 'normal_lampu_jalan', x: 130, y: 92, scale: 0.36, depth: 3 },
            { sprite: 'normal_gerobak', x: 196, y: 101, scale: 0.36, depth: 8 }, { sprite: 'normal_ruko', x: 236, y: 91, scale: 0.3, depth: 2 },
            { id: 'menaraS', sprite: 'menara_jam', x: 110, y: 92, scale: 0.75, depth: 2.5 },
          ],
          actors: [
            { id: 'montir', sprite: 'montir', x: 58, y: 101 }, { id: 'pilot', sprite: 'pilot', x: 78, y: 101 },
            { id: 'polwan', sprite: 'polwan', x: 126, y: 101, face: 'left' }, { id: 'kuli', sprite: 'kuli', x: 146, y: 101, face: 'left' },
            { id: 'nenek', sprite: 'sk5', x: 214, y: 101, face: 'left' },
            { id: 'dimas', sprite: 'dms', x: 100, y: 101, depth: 10.5, hidden: true },
          ],
          steps: [
            C('s-20', [...(VERT ? [{ at: 0, camera: camS(0, 1, 74, 70), dur: 0 }, { at: 'polisi', camera: camS(0, 1, 74, 136), dur: 900 }] : []), { at: 'montir', tag: 'montir', text: 'MONTIR', color: '#3b5dc9' }, { at: 'pilot', tag: 'pilot', text: 'PILOT', color: NAVY },
              { at: 'polisi', tag: 'polwan', text: 'POLISI', color: '#8b5a2b' }, { at: 'kuli', tag: 'kuli', text: 'KULI', color: ORANGE },
              { at: 'semuanya', kw: '100% *PEREMPUAN*' }]),
            C('s-21', [{ at: 0, camera: camS(200, 2.2, 80, 206), dur: 900 }, { at: 'nenek', tag: 'nenek', text: 'NENEK SAYUR', color: GREEN }, { at: 'heran', emote: 'nenek', icon: 'question', dur: 1100 },
              { at: 'nenek', kw: 'MENATAP *HERAN*' }]),
            C('s-22', [{ at: 0, camera: camS(110, 2, 80), dur: 900 }, { at: 0.05, show: 'dimas' }, { at: 'tersenyum', jump: 'dimas', times: 2, height: 6 },
              { at: 'doaku', dialog: 'dimas', name: 'DIMAS', text: 'Doaku terkabul!', top: DTOP, dur: 200 }, { at: 'doaku', meter: 'SENANG', value: 0.6, color: GREEN, text: '60%' }]),
            C('s-23', [{ at: 0, camera: camS(110, 1.5, 74, 104), dur: 900 }, { at: 'hening', sfx: 'jangkrik', vol: 0.8 }, { at: 'hening', kw: '...*HENING*' },
              ...['montir', 'pilot', 'polwan', 'kuli', 'nenek'].map((id, i) => ({ at: 0.45 + i * 0.07, emote: id, icon: 'exclaim', dur: 900 })),
              { at: 'menoleh', face: 'polwan', dir: 'left' }, { at: 'menoleh', face: 'montir', dir: 'right' }, { at: 'arahnya', emote: 'dimas', icon: 'sweat', dur: 900 }]),
            C('s-24', [{ at: 'sirene', sfx: 'buzz' }, { at: 'sirene', shake: 600 }, { at: 'sirene', tint: 0.3, color: '#e43b44', dur: 200 },
              { at: 'berbunyi', stamp: VERT ? 'PRIA\nTERDETEKSI!' : 'PRIA TERDETEKSI!', color: '#e43b44' }, { at: 0.9, tint: 0, dur: 300 }]),
          ],
        },
        peta([
          C('s-25', [{ at: 0, crowd: 'goto', x: 96, y: 74, spread: 18, rush: 2.2 }, { at: 0.05, card: 'NEGERI SEKAR', items: ['Tanpa pria: 300 tahun', '(angka cerita / ilustrasi)'], x: VERT ? 96 : 50, y: 22, stagger: 300, dur: 0 },
            { at: 'sudah', kw: '*300 TAHUN* TANPA PRIA' }, { at: 'pria', emote: 'dimasP', icon: 'sweat', dur: 1000 }]),
          { wait: 700 },
          { clear: true },
          C('s-26', [{ at: 0, camera: camP('studio', 2.6), dur: 900 }, { at: 'berita', glow: 'studio', times: 2 }, { at: 'berita', label: 'BREAKING NEWS: PRIA DITEMUKAN!', x: 150, y: 66, bg: RED, size: 10, dur: 0 },
            { at: 'dimas', kw: 'JADI *BERITA UTAMA*' }, { at: 'utama', sticker: 'shock', at_: L }], { punch: true }),
          { quote: 'Dan Dimas, baru saja jadi berita utama.', sub: 'DITOLAK 10 · DIKEJAR 1', dur: 1600 },
        ], { c: { x: 96, y: 54, zoom: VERT ? 1 : 1.15 }, extra: { clock: 'HARI 1', meter: senangSc(0.6) } }),
      ],
    },
    // ================= BAB 4 — MENDADAK SELEBRITI =================
    {
      id: 'bab-4', title: 'Mendadak selebriti',
      scenes: [
        peta([
          C('s-27', [{ at: 0, camera: { x: 96, y: 54, zoom: VERT ? 1 : 1.15 }, dur: 1800 }, { at: 'kabar', crowd: 'goto', x: 96, y: 76, spread: 16, rush: 2 },
            { at: 'menyebar', kw: 'MENYEBAR *5 MENIT*' }, { at: 'lima', clock: 'MENIT', from: 1, to: 5, dur: 1000 }], { only: 'long' }),
          C('s-27s', [{ at: 0, camera: { x: 96, y: 54, zoom: VERT ? 1 : 1.15 }, dur: 1800 }, { at: 'satu', crowd: 'goto', x: 96, y: 76, spread: 16, rush: 2 },
            { at: 'hari', kw: 'HARI PERTAMA, *JADI ARTIS*' }], { only: 'short' }),
          { wait: 400 },
        ], { c: camP('menara', 2.4), extra: { clock: 'HARI 1', meter: senangSc(0.6) } }),
        {
          transition: 'zoom', sky: 'day', width: 400, clock: 'HARI 1', meter: senangSc(0.6),
          camera: camS(240, 2, 78, 236),
          props: [...alunSamping(), { id: 'kam', sprite: 'kamera_tv', x: 292, y: 101, depth: 11, hidden: true }],
          actors: [
            { id: 'dimas', sprite: 'dms', x: 236, y: 101, depth: 10.5, tag: 'TTD 0', tagColor: NAVY },
            { id: 'wulan', sprite: 'wulan', x: 420, y: 101, face: 'left', depth: 10 },
            ...WARGA.concat(['sk1', 'sk3', 'sk6', 'sk2']).map((sp, i) => ({ id: 'q' + i, sprite: sp, x: -20, y: 100 + (i % 2), hidden: true, depth: 9 + (i % 2) * 0.1 })),
          ],
          steps: [
            C('s-28', [{ at: 0, camera: camS(258, 2, 78, 270), dur: 1200 }, { at: 0, enter: 'wulan', from: 'right', to: 280, dur: 1400 }, { at: 'wulan', tag: 'wulan', text: 'MBAK WULAN · TV', color: '#c9a85a' }, { at: 'siaran', pop: 'kam' }, { at: 'siaran', label: '● LIVE', x: 292, y: 72, bg: RED, size: 11, dur: 0 },
              { at: 'tv', kw: 'SIARAN *LANGSUNG*' }]),
            C('s-29', [...Array.from({ length: 14 }, (_, i) => ({ at: i * 0.03, enter: 'q' + i, from: 'left', to: 222 - i * 11, dur: 2400 + i * 90 })),
              { at: 0.1, camera: camS(150, 1.4, 72, 120), dur: 2200 }, { at: 'mengular', kw: 'ANTRE *SELFIE*' }, { at: 'selfie', label: 'ANTREAN SAMPAI BALAI KOTA →', x: VERT ? 120 : 130, y: 56, bg: UNGU, size: 13, dur: 0 }]),
            { clearLabels: true },
            C('s-30', [{ at: 0, camera: camS(236, 2.2, 80, 250), dur: 800 }, { at: 'melambai', jump: 'dimas', times: 3, height: 5 }, { at: 'artis', meter: 'SENANG', value: 1, color: GREEN, text: '100%' },
              { at: 0, kw: 'SENANG *100%*' }, { at: 'artis', sticker: 'cool', at_: Rt }]),
            C('s-31', [...[10, 120, 480, 900, 1300, 1700, '2.000'].map((n, i) => ({ at: 0.05 + i * 0.12, tag: 'dimas', text: 'TTD ' + n, color: NAVY })),
              { at: 'dua ribu', kw: '*2.000* TANDA TANGAN' }, { at: 'dua ribu', label: '(ilustrasi)', x: 236, y: 58, bg: '#566c86', size: 9, dur: 0 }]),
            { clearLabels: true },
          ],
        },
        {
          transition: 'fade', sky: 'rumah', clock: 'MALAM 1', meter: senangSc(1),
          camera: camS(96, 2, 80, 84),
          props: [{ sprite: 'jendela_malam', x: 46, y: 64, depth: 2 }, { sprite: 'jam_dinding', x: 140, y: 44, depth: 2 },
            { sprite: 'kasur', x: 112, y: 101, scale: 1.2, depth: 6 }, { sprite: 'lampu_gantung', x: 96, y: 46, depth: 31 }],
          actors: [{ id: 'dimas', sprite: 'dms', x: 80, y: 101, depth: 10, tag: 'TTD 2.000', tagColor: NAVY }],
          steps: [
            C('s-32', [{ at: 'tangan', encok: 'dimas', dur: 1400 }, { at: 'kram', label: 'KRAM!', x: 92, y: 74, bg: RED, size: 12, dur: 0 }, { at: 0, kw: 'TANGAN *KRAM*' },
              { at: 'kram', emote: 'dimas', icon: 'sweat', dur: 1000 }, { at: 'kram', meter: 'SENANG', value: 0.85, color: GREEN, text: '85%' }]),
            C('s-33', [{ at: 'artis', kw: 'JADI ARTIS = *KERJA KERAS*' }, { at: 'keras', sticker: 'dizzy', at_: Rt }], { punch: true }),
            { quote: 'Ternyata jadi artis itu kerja keras.', sub: 'DITOLAK 10 · DIKEJAR 200', dur: 1600 },
          ],
        },
      ],
    },
    // ================= BAB 5 — DIPEREBUTKAN =================
    {
      id: 'bab-5', title: 'Diperebutkan',
      scenes: [
        peta([
          C('s-34', [{ at: 0, camera: camP('hotel', 2.2), dur: 1400 }, { at: 'hari', clock: 'HARI', from: 2, to: 3, dur: 600 }, { at: 'diketuk', kw: 'PINTU *DIKETUK*' },
            { at: 'diketuk', crowd: 'goto', x: 62, y: 62, spread: 12, rush: 1.6 }, { at: 'berkali', label: 'TOK! TOK! TOK!', x: 62, y: 36, bg: ORANGE, size: 12, dur: 0 }, { at: 'berkali', shake: 250 }], { only: 'long' }),
          C('s-34s', [{ at: 0, clock: 'HARI 3' }, { at: 0, camera: camP('hotel', 2.2), dur: 1400 }, { at: 'semua', crowd: 'goto', x: 62, y: 62, spread: 12, rush: 1.6 }, { at: 'semua', kw: 'SEMUA *BEREBUT DIA*' },
            { at: 'berebut', label: 'TOK! TOK! TOK!', x: 62, y: 36, bg: ORANGE, size: 12, dur: 0 }], { only: 'short' }),
          { wait: 500 },
        ], { c: camP('menara', 1.6), dimas: false, extra: { clock: 'HARI 2', meter: senangSc(0.85) } }),
        {
          transition: 'zoom', sky: 'indoor', clock: 'HARI 3', meter: senangSc(0.85),
          camera: camS(112, 1.5, 76, 96),
          props: [{ sprite: 'pintu_kamar', x: 62, y: 101, depth: 3 }, { sprite: 'jam_dinding', x: 140, y: 50, depth: 2 }],
          actors: [
            { id: 'dimas', sprite: 'dms', x: 62, y: 101, depth: 10.5, tag: 'DIMAS', tagColor: NAVY },
            { id: 'sinta', sprite: 'drsinta', x: 220, y: 101, face: 'left', hidden: true, depth: 10 },
            { id: 'rani', sprite: 'rani', x: 220, y: 101, face: 'left', hidden: true, depth: 10.1 },
            { id: 'kurator', sprite: 'sk2', x: 220, y: 101, face: 'left', hidden: true, depth: 10.2 },
            { id: 'darmi', sprite: 'darmi', x: 220, y: 101, face: 'left', hidden: true, depth: 10.3 },
            { id: 'ratna', sprite: 'ratna', x: 220, y: 101, face: 'left', hidden: true, depth: 10.4 },
          ],
          steps: [
            C('s-35', [...(VERT ? [{ at: 0, camera: camS(0, 1, 74, 76), dur: 700 }] : []), { at: 0, enter: 'sinta', from: 'right', to: 86, dur: 900 }, { at: 'sinta', tag: 'sinta', text: 'LAB', color: '#41a6f6' },
              { at: 'kami', dialog: 'sinta', name: 'DR. SINTA', text: 'Kami ingin meneliti kromosom Y-mu!', top: DTOP, dur: 200 }, { at: 'kromosom', emote: 'dimas', icon: 'question', dur: 900 }]),
            C('s-36', [...(VERT ? [{ at: 0, camera: camS(0, 1, 74, 98), dur: 700 }] : []), { at: 0, enter: 'rani', from: 'right', to: 108, dur: 900 }, { at: 'rani', tag: 'rani', text: 'BOLA', color: '#e43b44' },
              { at: 'main', dialog: 'rani', name: 'KAPTEN RANI', text: 'Main untuk tim kami!', top: DTOP, dur: 200 }, { at: 'stadion', kw: 'TIM *BOLA*' }]),
            C('s-37', [...(VERT ? [{ at: 0, camera: camS(0, 1, 74, 120), dur: 700 }] : []), { at: 0, enter: 'kurator', from: 'right', to: 130, dur: 900 }, { at: 'museum', tag: 'kurator', text: 'MUSEUM', color: '#c9a85a' },
              { at: 'bisa', dialog: 'kurator', name: 'MUSEUM KOTA', text: 'Bisa jadi pameran sehari?', top: DTOP, dur: 200 }, { at: 'pameran', sticker: 'sus', at_: Rt }]),
            C('s-38', [...(VERT ? [{ at: 0, camera: camS(0, 1, 74, 142), dur: 700 }] : []), { at: 0, enter: 'darmi', from: 'right', to: 152, dur: 900 }, { at: 'darmi', tag: 'darmi', text: 'JODOH', color: PINK },
              { at: 'antrean', dialog: 'darmi', name: 'BU DARMI', text: 'Antrean kenalanmu tiga ribu orang.', top: DTOP, dur: 200 }, { at: 'tiga ribu', kw: '*3.000* ANTRE' }]),
            C('s-39', [{ at: 0, camera: camS(118, 1.35, 74, 166), dur: 800 }, { at: 0, enter: 'ratna', from: 'right', to: 176, dur: 900 }, { at: 'ratna', tag: 'ratna', text: 'WALI KOTA', color: NAVY },
              { at: 'undian', kw: 'UNDIAN *JADWAL*' }]),
            { receipt: 'JADWAL DIMAS · HASIL UNDIAN', stagger: 300, lines: [['07.00', 'LAB'], ['10.00', 'STADION'], ['13.00', 'MUSEUM'], ['16.00', 'BIRO JODOH']], total: ['ISTIRAHAT', '—'], note: 'ilustrasi' },
            { clear: true },
          ],
        },
        {
          transition: 'zoom', sky: 'indoor', clock: 'HARI 3', meter: senangSc(0.7),
          camera: camS(102, 1.6, 86, 100),
          props: [
            { sprite: 'meja_lab', x: 144, y: 101, depth: 4 }, { id: 'mik', sprite: 'mikroskop', x: 154, y: 86, depth: 5 },
            { id: 'komodo', sprite: 'komodo', x: 76, y: 101, depth: 6, hidden: true }, { id: 'telur', sprite: 'telur', x: 102, y: 101, scale: 1.2, depth: 6, hidden: true },
            { id: 'rot', sprite: 'rotifer', x: 142, y: 80, scale: 1.1, depth: 8, hidden: true },
          ],
          actors: [{ id: 'sinta', sprite: 'drsinta', x: 124, y: 101, depth: 10, face: 'left', tag: 'DR. SINTA', tagColor: '#41a6f6' }, { id: 'dimas', sprite: 'dms', x: 50, y: 101, depth: 10, face: 'right' }],
          steps: [
            C('s-40', [...(VERT ? [{ at: 0, camera: camS(0, 1, 86, 110), dur: 700 }] : []), { at: 'tidak heran', emote: 'sinta', icon: 'note', dur: 1000 }, { at: 'bertahan', kw: 'BERTAHAN *TANPA PRIA*' }]),
            C('s-41', [...(VERT ? [{ at: 0, camera: camS(0, 1, 86, 88), dur: 700 }] : []), { at: 'komodo', pop: 'komodo' }, { at: 'telur', pop: 'telur' }, { at: 'komodo', kw: 'KOMODO *TANPA JANTAN*' },
              { at: 'komodo', card: 'Nature · 2006', items: ['Komodo betina di kebun binatang Inggris', 'menetaskan telur tanpa jantan'], x: VERT ? 96 : 70, y: 30, stagger: 300, dur: 0 }]),
            C('s-42', [{ at: 'lucunya', sticker: 'shock', at_: Rt }, { at: 'anak', label: 'ANAKNYA: JANTAN SEMUA', x: 80, y: 80, bg: NAVY, size: 13, dur: 0 }, { at: 'anak', kw: 'ANAKNYA *JANTAN*' },
              { at: 'jantan', emote: 'dimas', icon: 'exclaim', dur: 900 }]),
            { clear: true },
            C('s-43', [...(VERT ? [{ at: 0, camera: camS(0, 1, 86, 134), dur: 700 }] : []), { at: 'rotifer', pop: 'rot' }, { at: 'rotifer', glow: 'mik', times: 2 }, { at: 'betina', kw: 'ROTIFER *100% BETINA*' },
              { at: 'rotifer', card: 'Rotifer bdelloid', items: ['Tak pernah ditemukan jantan', 'Bertahan puluhan juta tahun'], x: VERT ? 96 : 60, y: 30, stagger: 300, dur: 0 }]),
            { wait: 600 },
            { clear: true },
            C('s-44', [...(VERT ? [{ at: 0, camera: camS(0, 1, 86, 64), dur: 700 }] : []), { at: 'dicari', kw: 'BUKAN KARENA *GANTENG*' }, { at: 'tapi', stamp: 'LANGKA', color: UNGU }, { at: 'tapi', kw: 'TAPI KARENA *LANGKA*' },
              { at: 'langka', tag: 'dimas', text: 'SPESIES LANGKA', color: UNGU }], { punch: true }),
            { wait: 700 },
            { quote: 'Dimas dicari bukan karena ganteng. Tapi karena langka.', sub: 'DITOLAK 10 · DIKEJAR 500', dur: 1600 },
          ],
        },
      ],
    },
  ],
};
