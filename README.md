# Pixel Movie (Phaser 3)

Animasi pixel art yang berjalan seperti video, dari judul sampai **TAMAT**.
Semua gambar dibuat dari teks (tanpa file gambar), dan ceritanya ditulis sebagai naskah di `src/story.js`.

## Cara menjalankan

Browser tidak mengizinkan file dibuka langsung dari disk, jadi jalankan server kecil:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Pilih cerita, format, dan bab dari menu di bawah video, atau lewat URL `#cerita--format--bab`:
- `http://localhost:8000` → Motor Listrik, 16:9, semua bab (long form)
- `http://localhost:8000/#motor-listrik--v--bab-2` → 9:16, hanya Bab 2 (short)
- `http://localhost:8000/#layang-layang` → cerita layang-layang

**Long form → short:** setiap bab berdiri sendiri (hook → perbandingan → punchline).
Pilih format 9:16 + satu bab, lalu tekan **Rekam** untuk mengekspor satu short.
Gambar dirender ulang untuk 9:16 (bukan di-crop): layar terbelah kiri|kanan otomatis menjadi atas/bawah.

Kontrol:
- **↺ Ulang** / tombol `R` — putar dari awal
- **❚❚ Jeda** / `Spasi` — jeda / lanjut
- **⛶ Penuh** / `F`: layar penuh (di HP juga mencoba mengunci posisi landscape; ketuk video untuk keluar)
- **● Rekam Video** — memutar dari awal dan otomatis mengunduh file `.webm` saat TAMAT
  (bisa diubah ke MP4 dengan `ffmpeg -i film.webm film.mp4`)

## Struktur

| File | Isi |
|---|---|
| `stories/*.js` | **Naskah film**: adegan, tokoh, dan aksi. Ini yang paling sering diubah. |
| `src/sprites.js` | Gambar pixel art (karakter, pohon, rumah, ikon emosi) dalam bentuk teks |
| `src/sprites-city.js` | Motor bensin/listrik, gedung, PLTU, menara listrik, baterai, tambang, panel surya, turbin, bumi |
| `src/engine.js` | Mesin pemutar (tidak perlu diubah) |
| `lib/phaser.min.js` | Phaser 3.90 |

## Format naskah

Layar = **192 × 108 piksel dunia**. Kiri = `x: 0`, kanan = `x: 192`. Tanah di `y: 90`.

```js
{
  sky: 'day',               // 'day' | 'dawn' | 'sunset' | 'night'
  sunX: 150,                // posisi matahari/bulan
  birds: 2,                 // burung terbang (opsional)
  props: [                  // benda latar
    { sprite: 'tree', x: 30 },
    { sprite: 'house', x: 40, scale: 2 },
    { sprite: 'kite', x: 140, y: 28, float: true },
  ],
  actors: [                 // tokoh
    { id: 'budi', name: 'Budi', sprite: 'boy', x: 60 },
    { id: 'meong', name: 'Meong', sprite: 'cat', x: 210, hidden: true },
  ],
  steps: [ /* aksi, dijalankan berurutan */ ],
}
```

Naskah berbentuk bab:

```js
const STORY = {
  intro: [ /* adegan, hanya diputar di long form */ ],
  chapters: [
    { id: 'bab-1', title: 'Judul pendek', scenes: [ /* adegan */ ] },
  ],
};
```

Opsi adegan lainnya:

| Opsi | Arti |
|---|---|
| `width: 400` | Adegan lebih lebar dari layar, lalu kamera bisa digeser |
| `camera: { x, y, zoom }` | Posisi kamera awal |
| `transition: 'zoom'` | Transisi masuk: zoom ke dalam, lalu adegan baru mulai dari dekat dan zoom keluar. `'cut'` = potong cepat |
| `road: true` | Tanah diganti jalan aspal (lajur di y 100 dan 107) |
| `traffic: { kind: 'gas', count: 10, speed: 40 }` | Lalu lintas motor (`gas` berasap, `ev` listrik) |
| `haze: 0.4` | Kabut polusi awal (0–1) |
| `wires: [[x,y], ...]` | Kabel listrik melengkung antar titik |
| `captionTop: true` | Narasi tampil di atas, supaya jalan tidak tertutup |
| `sky: 'space'` | Luar angkasa tanpa tanah |
| `split: true` | Layar terbelah: sisi kiri x 0..192 (kamera A), sisi kanan x 192..384 (kamera B) |
| `focus: 'left'` | Adegan terbelah dimulai dengan satu sisi penuh (`'left'`, `'right'`, `'both'`) |
| `tags: ['BENSIN', 'LISTRIK']` | Label tiap sisi (warna lewat `tagColors`) |
| `cameraB: { x, y, zoom }` | Posisi awal kamera sisi kanan |

Antar adegan otomatis ada transisi fade hitam.

### Daftar aksi

| Aksi | Contoh |
|---|---|
| Bicara (balon kata) | `{ say: 'budi', text: 'Halo!' }` — tambah `shout: true` untuk layar bergetar |
| Narasi | `{ caption: 'Suatu pagi...' }` — `top: true` untuk di atas |
| Judul besar | `{ title: 'Judul', sub: 'subjudul', dur: 2500 }` — `keep: true` agar tetap tampil, `dark: false` agar latar transparan |
| Jalan | `{ move: 'budi', to: 120 }` — `speed` (default 30) atau `dur` (ms) |
| Masuk layar | `{ enter: 'budi', from: 'left', to: 80 }` |
| Keluar layar | `{ exit: 'budi', to: 'right' }` |
| Muncul / hilang | `{ show: 'budi' }` / `{ hide: 'budi' }` |
| Lompat | `{ jump: 'sari', times: 2, height: 10 }` |
| Emosi | `{ emote: 'sari', icon: 'heart' }` — `heart`, `exclaim`, `question`, `note`, `sweat`, `zzz` |
| Hadap | `{ face: 'budi', dir: 'left' }` |
| Tunggu | `{ wait: 1000 }` |
| Layar bergetar | `{ shake: 400 }` |
| Burung lewat | `{ birds: 3 }` |
| **Hook** (pembuka bab) | `{ hook: 'Apa yang keluar dari knalpotmu?' }`: teks besar di atas |
| Narasi | `{ caption: '...' }`: tampil langsung, lamanya mengikuti tempo voice over (±16 huruf/detik). `punch: true` = kalimat penutup kuning |
| **Fokus sisi** | `{ focus: 'left' }` / `'right'` / `'both'`: satu sisi melebar penuh atau kembali terbelah |
| **Kartu keterangan** | `{ card: 'Gas buang', items: ['CO2: ...', 'CO: ...'], x, y, place: 'left' }`: satu topik satu kartu, dengan garis penunjuk |
| Badge perbandingan | `{ badge: 'Asap: nol', side: 'right' }` |
| Hapus kartu/badge/label | `{ clear: true }` |
| Transparansi prop | `{ alpha: 'id', to: 0.8, dur: 2000 }` |
| **Kamera zoom/geser** | `{ camera: { x: 88, y: 94, zoom: 4 }, dur: 2000 }`, tambah `side: 'right'` untuk kamera B, atau `{ camera: 'reset' }`. Kamera selalu "bernapas" pelan supaya layar tidak pernah diam |
| Label penunjuk | `{ label: 'CO2', x: 74, y: 86, bg: '#566c86' }`, ikut membesar/mengecil bersama zoom |
| Hapus label | `{ clearLabels: true }` |
| Kabut polusi | `{ haze: 0, dur: 4000 }` |
| Ubah semua motor | `{ convert: 'ev' }` (kilat putih, asap berhenti) |
| Lalu lintas berhenti/jalan | `{ traffic: 'stop' }` / `{ traffic: 'go' }` |
| Sorot kedip | `{ glow: 'motor' }`, untuk prop/aktor yang punya `id` |
| **Bersamaan** | `{ together: [ {...}, {...} ] }` — semua aksi di dalamnya berjalan serentak |

### Sprite yang tersedia

- Tokoh: `boy`, `girl`, `grandpa`, `kid`, `cat`
- Benda: `tree`, `house`, `bush`, `fence`, `flower`, `flower2`, `kite`, `cloud`
- Kota & energi: `building1`–`building4`, `lamp`, `trafficlight`, `charger`, `plant` (PLTU), `pylon`, `solar`, `turbine` (baling-baling berputar), `battery`, `excavator`, `rocks`, `stump`, `earth`, `earth_smog`
- Motor sebagai prop: `motor_gas_0..2`, `motor_ev_0..2`. Tambahkan `smoke: { dx, dy }` agar mengeluarkan asap

Prop bisa diberi `id` agar bisa dipakai oleh `glow`, `hide`, `show`, atau `move`.

Tokoh baru cukup ditambah di `CHARACTERS` pada `src/sprites.js` (pilih bentuk + warna rambut/baju/celana).

## Template prompt

Kalau ingin minta Claude membuat cerita baru, contoh prompt:

> Buat cerita baru di `stories/nama-cerita.js` berjudul **"..."**, sekitar **5 adegan**, durasi ±1–2 menit.
> Tokoh: **Andi** (anak laki-laki, baju biru), **Nenek** (rambut putih), **kucing oranye**.
> Alur:
> 1. Pagi hari di depan rumah, Andi bangun dan pamit ke Nenek.
> 2. Andi berjalan ke taman dan menemukan kucing yang tersesat.
> 3. ...
> 5. Malam hari, semua pulang. Tutup dengan TAMAT.
> Kalau butuh sprite baru (misalnya sepeda, sungai, pohon kelapa), buatkan juga di `sprites.js`.
