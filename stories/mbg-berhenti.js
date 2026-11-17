// ============================================================
//  "ANDAIKAN MBG BERHENTI BESOK" — seri Andaikan, gaya simulasi
//  Naskah lengkap: stories/mbg-berhenti.naskah.md (dibuat per bab).
//  Perbandingan (split): kiri DESA A (dapur jalan), kanan DESA B (dapur berhenti).
//  Angka bertanda ilustrasi. Fakta per 17 Nov 2026.
// ============================================================

const VERT = typeof location !== 'undefined' && location.hash.split('--')[1] === 'v';
const R = x => x + 192;
const L = [0.28, 0.3], Rt = [0.74, 0.3];
const GREEN = '#38b764', RED = '#b13e53', NAVY = '#29366f';

// ---------- dunia: aula makan sekolah ----------
function aulaMakan(plate = 'piring_isi') {
  const props = [];
  [44, 96, 148].forEach((x, t) => {
    props.push({ sprite: 'table', x, y: 96, depth: 12 });
    [-7, 7].forEach((dx, j) => props.push({ id: `p${t}${j}`, sprite: plate, x: x + dx, y: 91, scale: 1.3, depth: 13 }));
  });
  return props;
}
const ANAK = [
  { id: 'k1', sprite: 'kid', x: 40, y: 92 }, { id: 'k2', sprite: 'girl', x: 53, y: 92, face: 'left' },
  { id: 'sari', sprite: 'girl', x: 92, y: 92 }, { id: 'k4', sprite: 'boy', x: 103, y: 92, face: 'left' },
  { id: 'k5', sprite: 'kid', x: 144, y: 92 }, { id: 'k6', sprite: 'girl', x: 155, y: 92, face: 'left' },
];
const PIRING_IDS = ['p00', 'p01', 'p10', 'p11', 'p20', 'p21'];

// ---------- dunia: desa (satu sisi) ----------
function sisiDesa(dx, s, open) {
  return [
    { sprite: 'tree', x: 20 + dx }, { sprite: 'house', x: 160 + dx, scale: 0.9 },
    { id: s + 'dapur', sprite: open ? 'dapur' : 'dapur_tutup', x: 96 + dx, y: 92, scale: 1.4, depth: 4,
      smoke: open ? { dx: 0, dy: -36, every: 260 } : undefined },
  ];
}

const STORY = {
  title: 'Andaikan MBG Berhenti Besok',
  audioDir: 'audio/mbg-berhenti',
  sfx: true,
  captionStyle: 'keyword',

  chapters: [
    // ======================================================
    // BAB 1 — HOOK: 58 juta piring kosong
    // ======================================================
    {
      id: 'bab-1',
      title: '58 juta piring kosong',
      scenes: [
        // aula makan: piring penuh → kosong
        {
          sky: 'indoor', fit: 'width',
          camera: { x: 96, y: 82, zoom: 3.2 },
          clock: 'HARI 1',
          props: aulaMakan(),
          actors: ANAK,
          steps: [
            { together: [
              { camera: { x: 96, y: 80, zoom: 1.7 }, dur: 2600, ease: 'Cubic.easeOut' },
              { caption: 'Bayangkan. Besok pagi, MBG berhenti.', vo: 'm-01',
                speak: 'Bayangkan. Besok pagi, em be ge berhenti.',
                cues: [{ at: 'besok', kw: 'BESOK PAGI...' }, { at: 'berhenti', kw: 'MBG *BERHENTI*' }, { at: 'berhenti', stamp: 'BERHENTI', at_: [0.5, 0.4] }] },
            ] },
            { caption: '58 juta piring tiba-tiba kosong.', vo: 'm-02',
              speak: 'Lima puluh delapan juta piring tiba-tiba kosong.',
              cues: [
                { at: 'lima puluh', kw: '*58 JUTA* PIRING' },
                ...PIRING_IDS.map((id, i) => ({ at: 0.3 + i * 0.09, swap: id, to: 'piring_kosong' })),
                { at: 'kosong', kw: '*58 JUTA* PIRING *KOSONG*' }, { at: 'kosong', sticker: 'shock', at_: Rt },
                { at: 'kosong', emote: 'sari', icon: 'question', dur: 1200 },
              ] },
          ],
        },
        // pasar (kiri) & kandang (kanan)
        {
          transition: 'cut',
          sky: 'day', fit: VERT ? undefined : 'width',
          camera: { x: VERT ? 62 : 52, y: 70, zoom: 2.2 },
          props: [
            { sprite: 'warung', x: 46, y: 92, scale: 1.3, depth: 4 },
            { id: 'a1', sprite: 'ayam', x: 36, y: 72, scale: 1.4, depth: 8 }, { id: 'a2', sprite: 'ayam', x: 48, y: 72, scale: 1.4, depth: 8 },
            { id: 'a3', sprite: 'ayam', x: 60, y: 72, scale: 1.4, depth: 8 },
            { sprite: 'kandang', x: 144, y: 92, depth: 4 },
            ...[124, 132, 140, 148, 156, 164].map((x, i) => ({ id: 'c' + i, sprite: 'ayam', x, y: 90 - (i % 2) * 2, depth: 5 })),
            ...[128, 136, 144, 152, 160].map((x, i) => ({ id: 'd' + i, sprite: 'ayam', x, y: 84, depth: 5, hidden: true })),
          ],
          actors: [
            { id: 'rina', sprite: 'warga2', x: 76, y: 96, face: 'left', tag: 'BU RINA', tagColor: '#b13e53' },
            { id: 'darto', sprite: 'darto', x: 176, y: 96, face: 'left', tag: 'PAK DARTO', tagColor: '#7d8a4a' },
          ],
          steps: [
            { caption: 'Harga ayam di pasar turun. Ibu-ibu senang.', vo: 'm-03',
              cues: [
                { at: 'harga ayam', kw: 'HARGA *AYAM*' },
                { at: 'turun', label: 'TURUN ↓', x: 48, y: 52, bg: GREEN, size: 18, dur: 0 }, { at: 'turun', kw: 'AYAM *MURAH*' },
                { at: 'senang', emote: 'rina', icon: 'heart', dur: 1200 }, { at: 'senang', sticker: 'party', at_: L },
              ] },
            { clear: true },
            { caption: 'Tapi di kandang, peternak justru menangis.', vo: 'm-04',
              cues: [
                { at: 0, camera: { x: 150, y: 74, zoom: 2.2 }, dur: 800 },
                { at: 'kandang', pop: 'd0' }, { at: 'kandang', pop: 'd1' }, { at: 'peternak', pop: 'd2' }, { at: 'peternak', pop: 'd3' }, { at: 'justru', pop: 'd4' },
                { at: 'peternak', label: 'MENUMPUK!', x: 144, y: 60, bg: RED, size: 16, dur: 0 },
                { at: 'menangis', kw: 'PETERNAK *MENANGIS*' }, { at: 'menangis', emote: 'darto', icon: 'sweat', dur: 1500 },
                { at: 'menangis', sticker: 'sweat', at_: Rt },
              ] },
            { clear: true },
            { together: [
              { camera: { x: 96, y: 66, zoom: 1 }, dur: 700 },
              { mono: true },
              { caption: 'Kok bisa? Kita simulasikan.', vo: 'm-05', cues: [{ at: 0, kw: 'KOK *BISA?*' }, { at: 0.2, sticker: 'sus', at_: [0.5, 0.34] }] },
            ] },
            { mono: false },
            { together: [
              { title: 'ANDAIKAN', sub: 'MBG berhenti besok', dark: true, size: 30, dur: 2200 },
              { caption: 'Andaikan MBG berhenti besok.', vo: 'm-06', speak: 'Andaikan em be ge berhenti besok.' },
            ] },
          ],
        },
        // desa A vs desa B
        {
          transition: 'cut',
          sky: 'day', split: true, focus: 'both',
          tags: ['DESA A', 'DESA B'], tagColors: [GREEN, RED],
          camera: { x: 96, y: 66, zoom: 1 }, cameraB: { x: R(96), y: 66, zoom: 1 },
          clock: 'HARI 1',
          props: [...sisiDesa(0, 'A', true), ...sisiDesa(192, 'B', true)],
          actors: [
            { id: 'tA', sprite: 'siti', x: 120, y: 98, tag: 'DAPUR JALAN', tagColor: GREEN },
            { id: 'tB', sprite: 'siti', x: R(120), y: 98 },
          ],
          steps: [
            { caption: 'Kita bandingkan dua desa. Desa A, dapur MBG tetap jalan. Desa B, dapurnya berhenti besok.', vo: 'm-07',
              speak: 'Kita bandingkan dua desa. Desa A, dapur em be ge tetap jalan. Desa Be, dapurnya berhenti besok.',
              cues: [
                { at: 'dua desa', kw: '*2* DESA' },
                { at: 'desa a', focus: 'left' }, { at: 'desa a', kw: 'A: DAPUR *JALAN*' },
                { at: 'desa be', focus: 'right' }, { at: 'desa be', kw: 'B: DAPUR *BERHENTI*' },
                { at: 'berhenti besok', swap: 'Bdapur', to: 'dapur_tutup' }, { at: 'berhenti besok', smoke: 'Bdapur', on: false },
                { at: 'berhenti besok', stamp: 'TUTUP', at_: VERT ? [0.5, 0.45] : [0.5, 0.42] },
                { at: 'besok.', tag: 'tB', text: 'DAPUR TUTUP', color: RED },
              ] },
            { together: [{ focus: 'both' }, { wait: 900 }] },
          ],
        },
      ],
    },
  ],
};

// 9:16 — adegan ber-fit lebar (bukan split) dibuat lebih dekat
if (VERT) {
  const zz = c => { if (c && typeof c === 'object' && c.zoom) c.zoom = Math.max(c.zoom, 1.7); };
  const walk = st => { if (st.together) st.together.forEach(walk); zz(st.camera); (st.cues || []).forEach(walk); };
  STORY.chapters.forEach(ch => ch.scenes.forEach(sc => {
    if (sc.fit !== 'width' || sc.split) return;
    zz(sc.camera); sc.steps.forEach(walk);
  }));
}
