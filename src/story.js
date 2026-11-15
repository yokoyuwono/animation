// ============================================================
//  STORY — naskah film. Ubah file ini untuk membuat cerita baru.
//  Lihat README.md untuk daftar lengkap aksi yang tersedia.
// ============================================================

const STORY = {
  title: 'Layang-Layang Sari',
  scenes: [
    // ---------- Adegan 1: Pembuka ----------
    {
      sky: 'dawn',
      sunX: 36,
      props: [
        { sprite: 'house', x: 36, scale: 2 },
        { sprite: 'tree', x: 90 },
        { sprite: 'bush', x: 114 },
        { sprite: 'tree', x: 168 },
      ],
      actors: [
        { id: 'budi', name: 'Budi', sprite: 'boy', x: 51, hidden: true },
      ],
      steps: [
        { title: 'Layang-Layang Sari', sub: 'sebuah animasi pixel', dur: 2500 },
        { caption: 'Di sebuah desa kecil, matahari baru saja terbit...' },
        { birds: 3, dur: 600 },
        { show: 'budi' },
        { move: 'budi', to: 72 },
        { emote: 'budi', icon: 'note' },
        { say: 'budi', text: 'Hari yang cerah! Aku mau ke rumah Sari.' },
        { exit: 'budi', to: 'right' },
      ],
    },

    // ---------- Adegan 2: Bertemu Sari ----------
    {
      sky: 'day',
      props: [
        { sprite: 'fence', x: 24 },
        { sprite: 'tree', x: 144 },
        { sprite: 'flower', x: 66 },
        { sprite: 'flower2', x: 75 },
        { sprite: 'flower', x: 123 },
        { sprite: 'bush', x: 174 },
      ],
      actors: [
        { id: 'sari', name: 'Sari', sprite: 'girl', x: 126, face: 'left' },
        { id: 'budi', name: 'Budi', sprite: 'boy', x: -12, hidden: true },
      ],
      steps: [
        { enter: 'budi', from: 'left', to: 90 },
        { say: 'budi', text: 'Sari! Ayo main!' },
        { emote: 'sari', icon: 'exclaim' },
        { say: 'sari', text: 'Budi! Aku baru selesai membuat layang-layang!' },
        { jump: 'sari', times: 2 },
        { say: 'budi', text: 'Wah keren! Ayo terbangkan di bukit!' },
        { together: [
          { exit: 'budi', to: 'right' },
          { exit: 'sari', to: 'right', speed: 34 },
        ] },
      ],
    },

    // ---------- Adegan 3: Kucing muncul ----------
    {
      sky: 'day',
      birds: 2,
      props: [
        { sprite: 'tree', x: 30 },
        { sprite: 'bush', x: 51 },
        { sprite: 'flower2', x: 156 },
      ],
      actors: [
        { id: 'budi', name: 'Budi', sprite: 'boy', x: -12, hidden: true },
        { id: 'sari', name: 'Sari', sprite: 'girl', x: -12, hidden: true },
        { id: 'meong', name: 'Meong', sprite: 'cat', x: 204, face: 'left', hidden: true },
      ],
      steps: [
        { together: [
          { enter: 'budi', from: 'left', to: 84 },
          { enter: 'sari', from: 'left', to: 66 },
        ] },
        { enter: 'meong', from: 'right', to: 120, speed: 45 },
        { emote: 'budi', icon: 'question' },
        { say: 'meong', text: 'Meong!' },
        { emote: 'sari', icon: 'heart' },
        { say: 'sari', text: 'Lucu sekali! Kamu mau ikut, Meong?' },
        { jump: 'meong', height: 6, times: 2 },
        { caption: 'Dan begitulah, mereka punya teman baru.' },
        { together: [
          { exit: 'meong', to: 'right', speed: 40 },
          { exit: 'budi', to: 'right' },
          { exit: 'sari', to: 'right' },
        ] },
      ],
    },

    // ---------- Adegan 4: Menerbangkan layang-layang ----------
    {
      sky: 'sunset',
      sunX: 120,
      props: [
        { sprite: 'tree', x: 18 },
        { sprite: 'kite', x: 138, y: 28, float: true },
      ],
      actors: [
        { id: 'sari', name: 'Sari', sprite: 'girl', x: 102 },
        { id: 'budi', name: 'Budi', sprite: 'boy', x: 78 },
        { id: 'meong', name: 'Meong', sprite: 'cat', x: 57 },
      ],
      steps: [
        { caption: 'Sore harinya, layang-layang Sari terbang tinggi.', top: true },
        { say: 'sari', text: 'Lihat! Tinggi sekali!', shout: true },
        { together: [
          { jump: 'budi', times: 2 },
          { jump: 'meong', height: 6, times: 3 },
        ] },
        { say: 'budi', text: 'Ini hari terbaik!' },
        { emote: 'meong', icon: 'heart' },
        { wait: 800 },
      ],
    },

    // ---------- Adegan 5: Malam / penutup ----------
    {
      sky: 'night',
      sunX: 156,
      props: [
        { sprite: 'house', x: 42, scale: 2 },
        { sprite: 'tree', x: 162 },
      ],
      actors: [
        { id: 'budi', name: 'Budi', sprite: 'boy', x: 90, face: 'left' },
        { id: 'meong', name: 'Meong', sprite: 'cat', x: 105, face: 'left' },
      ],
      steps: [
        { caption: 'Malam pun tiba...' },
        { say: 'budi', text: 'Besok kita main lagi ya, Meong.' },
        { emote: 'meong', icon: 'zzz', dur: 1500 },
        { together: [
          { move: 'budi', to: 51 },
          { move: 'meong', to: 58 },
        ] },
        { together: [{ hide: 'budi' }, { hide: 'meong' }] },
        { wait: 600 },
        { title: 'TAMAT', sub: 'terima kasih sudah menonton', dur: 3000, keep: true },
      ],
    },
  ],
};
