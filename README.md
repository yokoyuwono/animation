# Pixel Movie (Phaser 3)

Animasi pixel art yang berjalan seperti video, dari judul sampai **TAMAT**.
Semua gambar dibuat dari teks (tanpa file gambar), dan ceritanya ditulis sebagai naskah di `src/story.js`.

## Cara menjalankan

Browser tidak mengizinkan file dibuka langsung dari disk, jadi jalankan server kecil:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Kontrol:
- **↺ Ulang** / tombol `R` — putar dari awal
- **❚❚ Jeda** / `Spasi` — jeda / lanjut
- **● Rekam Video** — memutar dari awal dan otomatis mengunduh file `.webm` saat TAMAT
  (bisa diubah ke MP4 dengan `ffmpeg -i film.webm film.mp4`)

## Struktur

| File | Isi |
|---|---|
| `src/story.js` | **Naskah film** — adegan, tokoh, dan aksi. Ini yang paling sering diubah. |
| `src/sprites.js` | Gambar pixel art (karakter, pohon, rumah, ikon emosi) dalam bentuk teks |
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
| **Bersamaan** | `{ together: [ {...}, {...} ] }` — semua aksi di dalamnya berjalan serentak |

### Sprite yang tersedia

- Tokoh: `boy`, `girl`, `grandpa`, `kid`, `cat`
- Benda: `tree`, `house`, `bush`, `fence`, `flower`, `flower2`, `kite`, `cloud`

Tokoh baru cukup ditambah di `CHARACTERS` pada `src/sprites.js` (pilih bentuk + warna rambut/baju/celana).

## Template prompt

Kalau ingin minta Claude membuat cerita baru, contoh prompt:

> Buat cerita baru di `src/story.js` berjudul **"..."**, sekitar **5 adegan**, durasi ±1–2 menit.
> Tokoh: **Andi** (anak laki-laki, baju biru), **Nenek** (rambut putih), **kucing oranye**.
> Alur:
> 1. Pagi hari di depan rumah, Andi bangun dan pamit ke Nenek.
> 2. Andi berjalan ke taman dan menemukan kucing yang tersesat.
> 3. ...
> 5. Malam hari, semua pulang. Tutup dengan TAMAT.
> Kalau butuh sprite baru (misalnya sepeda, sungai, pohon kelapa), buatkan juga di `sprites.js`.
