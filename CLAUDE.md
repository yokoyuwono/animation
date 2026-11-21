# Pixel Movie — memori proyek

Video explainer pixel art (Phaser 3) berbahasa Indonesia, dengan voice over ElevenLabs,
long form + short dari naskah yang sama. Pemilik berkomunikasi dalam bahasa Indonesia.

## Gaya menjawab (WAJIB)
- Jawab singkat dan langsung ke inti: maksimal ±5–8 baris atau beberapa poin pendek.
- Jangan menjelaskan detail teknis, proses, atau alasan kecuali diminta.
- Laporan hasil kerja: cukup apa yang jadi + link/file + 1 pertanyaan lanjutan bila perlu.
- Tabel/daftar panjang hanya jika pemilik meminta rincian.

## Struktur
- `index.html` — pemutar (pilih cerita / format 16:9–9:16 / bab lewat `#cerita--h|v--bab-id`).
- `src/engine.js` — mesin (kamera A/B + UI, split screen, cues, VO, dll). Dokumentasi aksi ada di `README.md`.
- `src/sprites*.js` — semua gambar pixel dari teks. Urutan muat: sprites, city, war, money, faces.
- `stories/*.js` — naskah. Contoh terbaik gaya terbaru: `stories/paylater.js` (gaya simulasi).
- `audio/<cerita>/raw/` — VO mentah ElevenLabs; `audio/<cerita>/*.mp3` + `manifest.json` — hasil proses.
- `renders/` — MP4 & thumbnail PNG. `tools/` — skrip produksi (lihat di bawah).

## Preferensi yang sudah disepakati
- **Suara:** ElevenLabs "Fikri - Warm & Steady Storyteller" (`voice_id: uzkxbhFCx9Ni2LANf1zB`), model `eleven_v4`,
  `generations_count: 1` (hemat kredit), lalu dipercepat **1,2×** dengan `tools/process-vo.sh`.
- **Teks ucapan ≠ subtitle:** angka & singkatan ditulis seperti diucapkan di `speak`
  (mis. "ha pe", "ka pe er", "o je ka", "be be em", "dua ribu dua puluh enam").
- **Gaya video (dari analisis video referensi "simulasi"):** satu dunia tampak atas yang terus berubah,
  jam simulasi (BULAN/TAHUN), tokoh bernama, hook kilas maju ±10 detik, teks **kata kunci** sinkron kata
  (`captionStyle: 'keyword'` + `cues`), stiker reaksi pixel buatan sendiri, struk tagihan/papan skor,
  tanpa ruang hening. Tiap bab berdiri sendiri (hook → perbandingan → punchline) agar bisa jadi short.
- **Gaya peta (dari video referensi "kota tanpa hukum"):** peta desa/kota tampak atas (`sky: 'map', map: {...}`,
  `walkers` warga jalan sendiri, `crowd` goto/leave/roam) ⇄ zoom/awan (`transition: 'clouds'`) ke adegan dekat tampak samping
  dengan tokoh besar, `work` (mencangkul), `swapAll` (kondisi berubah bertahap), `dialog` (kotak dialog berfoto).
  Sprite peta di `src/sprites-map.js`. Contoh: `stories/tanpa-gunung-api.js`. "Gerak hidup" (napas, menoleh, melangkah) otomatis.
- **Alur antar-bab (WAJIB):** satu tempat pusat (peta yang sama) jadi titik awal tiap bab; tiap bab dibuka kalimat
  jembatan pendek yang menyambung lewat tokoh utama; papan skor A vs B berjalan (`score`) di akhir bab.
- **Tempo:** kalimat pendek (≤ ±60 huruf), ada perubahan visual tiap 2–4 detik (cek dengan `tools/pace.js`).
- **Thumbnail (formula trending, `tools/thumbnail-<topik>.html`):** 2 label sejajar di atas ("TIM X / TIM Y",
  satu kata berwarna), wajah besar ekspresif (`src/sprites-faces.js`), barisan benda, label hasil di bawah
  (sebaiknya ada twist), penanda VS. Identitas sendiri: latar ungu/teal, VS belah ketupat oranye,
  font Pixelify Sans, angka pakai Press Start 2P (angka 5 di Pixelify mirip S).
- **Etika/konten:** jangan pakai merek/logo asli atau meme orang lain; tiru teknik, bukan tampilan channel lain;
  angka cerita diberi label ilustrasi; fakta harus dicek ke sumber resmi sebelum publikasi.

## Alur membuat video baru
1. Riset fakta terbaru (web search) → tulis narasi & skema per bab → minta persetujuan pemilik.
2. Tulis `stories/<nama>.js` (salin pola `paylater.js`), daftarkan di `index.html` (STORIES + `<option>`).
3. **Animasi dulu, suara belakangan (hemat kredit):** kalimat tanpa VO otomatis memakai tempo perkiraan Fikri (±60 ms/huruf `speak`)
   dan tampil sebagai teks `[draf]` di layar → pemilik review animasi → baru buat suara untuk kalimat final. Uji naskah dulu TANPA suara (durasi perkiraan). Setelah final: `node tools/vo-lines.js stories/<nama>.js --changed`
   → hanya kalimat baru/berubah yang perlu dibuat (hemat kredit).
4. Buat suara via connector ElevenLabs (`creative_create_flow`, lalu `creative_generate_speech` per kalimat,
   maksimal ±17 sekaligus karena batas konkurensi; cek dengan `creative_get_flow_run_status`).
   Unduh `content_url` ke `audio/<nama>/raw/<id>.mp3` (host `elevenlabsusercontent.com` diizinkan
   di environment cloud "animation").
5. `tools/process-vo.sh audio/<nama> 1.2` → audio jadi + `manifest.json`; lalu `node tools/vo-lines.js stories/<nama>.js --save`.
   Catatan: lewat connector ElevenLabs, `eleven_flash_v2_5` ternyata dihitung SAMA dengan `eleven_v4` (±1 kredit/huruf) → selalu pakai `eleven_v4`.
6. Cek: `node tools/pace.js stories/<nama>.js` (jeda visual) dan `node tools/preview-frames.js <out-dir> <hash> 1000 600 2000`.
7. Render semua untuk satu topik: `tools/produce.sh <nama>` (long 16:9+9:16, semua short, thumbnail jika ada
   `tools/thumbnail-<nama>.html`). Per bagian: `tools/render.sh <nama> long|shorts|<bab-id>`.
8. Caption & hashtag: tulis `stories/<nama>.publish.md` (judul, deskripsi + bab, tag, caption per short,
   hashtag YouTube/TikTok/Reels). `produce.sh` menyalinnya dan membuat `renders/<nama>_paket.zip` siap unggah.
9. Thumbnail: sesuaikan `tools/thumbnail-<topik>.html`, lalu `node tools/thumbnail.js tools/thumbnail-<topik>.html a renders/thumbnail_<nama>.png`.
10. Link unduhan: `tools/links.sh` (otomatis di `produce.sh`) menulis `DOWNLOADS.md` — daftar link GitHub semua
   hasil render per topik. Commit & push hasil render. Jika pemilik minta "list link", jawab dari `DOWNLOADS.md`.
   (Upload ke Google Drive dari sesi cloud dibatasi ±3 MB per file → video panjang tidak bisa.)
11. Publikasikan ulang halaman HP (artifact "Pixel Movie", https://claude.ai/artifact/8rpomo7GzqcbnZqkKaTstX)
   dengan file yang berubah (index.html, src/, stories/, audio/).

## Musik & efek suara
- `STORY.sfx = true` → memuat pustaka bersama `audio/_shared/sfx/` (pakai ulang di semua video; ganti lewat `STORY.sfxDir`):
  `music.mp3` (loop, otomatis mengecil saat narasi) dan
  efek: pop, tick, notif, kaching, stamp, coin, buzz, scratch, success.
- Efek otomatis: pop (prop muncul), tick (jam fast-forward), stamp+buzz/success (stempel), kaching (struk),
  coin (celengan), notif (label berisi "!"), scratch (hitam-putih). Manual: `{ sfx: 'notif' }`.
- Dibuat lewat ElevenLabs: musik `node_type: music, eleven_music_v2_5` (±900 kredit/120 detik),
  efek `node_type: sfx, eleven_text_to_sound_v2` (±17 kredit). Paylater memakai musik chiptune ceria.

## Catatan teknis
- Tiap akhir adegan ada jeda 500 ms (`STORY.endPause` / adegan `endPause`) agar kata terakhir tidak terpotong.
- Browser memblokir suara otomatis → pemutar menampilkan tombol "▶ Putar dengan suara" untuk cerita ber-`audioDir`.
- Tombol Rekam tidak tersedia di halaman claude.ai (unduhan diblokir); rekam lewat `tools/render.sh`.
- Video yang sudah ada: `motor-listrik`, `perang-dunia` (Bab 4 bersuara), `paylater` (lengkap + 6 short + thumbnail + paket unggah),
  `wapres-kosong`, `mbg-berhenti`, `tanpa-gunung-api` (seri "Andaikan", lengkap + short + thumbnail + paket; sprite di `src/sprites-politik.js` & `src/sprites-map.js`),
  `ojol-libur` (Andaikan: lengkap + 8 short + thumbnail + paket; wajah `face_udin_*`/`face_joko_happy`),
  `internet-mati` (Andaikan: lengkap + 8 short + thumbnail + paket; wajah `face_rara_*`/`face_nenek_happy`),
  `tanpa-nasi`, `tanpa-koruptor` (Andaikan; VO + animasi jadi, menunggu review → render/thumbnail/caption),
  `rupiah-7000` (Andaikan Rupiah Menjadi Rp7.000 Lagi: 9 bab animasi jadi, tanpa VO, menunggu review; keluarga Pak Harun,
  layar terbelah Rp 7.000 vs Rp 30.000, tanpa skor; sprite ruang makan/SPBU/pabrik/kebun di akhir `src/sprites-map.js`, latar `sky: 'rumah'`),
  `romawi-kuno` (dikerjakan di sesi kedua, cabang `romawi-kuno`). Prompt thumbnail gaya ilustrasi (Nano Banana): `tools/thumbnail-prompts.md`.
- **Thumbnail gaya ilustrasi (disukai pemilik, varian A):** `tools/thumbnail-<topik>-ilustrasi.html` — karakter setengah badan bergestur
  (`makeBust` + `BUSTS` di `src/sprites-faces.js`: pola hoodie/plaid/jacket, wajah grin/panic/happy/cry, gestur thumb/phone),
  latar peta dari video (`node tools/thumb-bg.js <hash> tools/thumb-bg/<topik>.png <ms>`), judul besar Press Start 2P bergaris tepi.
  JANGAN pakai gestur telunjuk ke atas ('point') — terkesan jari tengah. Hasil: `renders/thumbnail_<topik>_ilustrasi-a|b.png`.
- **Thumbnail utama dibuat lewat Google Nano Banana** (pemilik di aplikasi Gemini, atau otomatis via ElevenLabs `creative_generate_image` model `gemini-nano-banana-2.1`, ±200 kredit/gambar, `generations_count: 1`, hanya bila diminta) dengan prompt di `tools/thumbnail-prompts.md` (hasilnya disukai).
  Untuk video baru: tulis prompt per video di file itu; simpan hasil kiriman pemilik sebagai `renders/thumbnail_<topik>_nanobanana.png` (1280×720).
  `genz-milenial` (Andaikan, draf 6: lengkap + 12 short + thumbnail + paket; wajah `face_rafi_*`/`face_bayu_*`).
- Fitur mesin baru: `only: 'long'|'short'` (dual-VO: jembatan untuk kompilasi, pembuka/CTA khusus short per bab),
  `{ score, corner: true }` (papan skor mini di pojok), `{ quote, sub }` (kartu kutipan untuk screenshot),
  awan < 10 dtk dari awan sebelumnya otomatis jadi transisi 'zoom' (cek: `node tools/clouds.js stories/<nama>.js`).
  SFX tambahan: gunting, tetes, jangkrik, ombak. Peta pulau: `map: { island: [cx,cy,rx,ry], bumps }`; `{ spin: id }` (kincir), `{ encok: id }`.
- **Asset pack Nano Banana → kode (grid tetap):** prompt `tools/prompt-asset-kota.md`, acuan grid `assets/kota/acuan-*.png`
  (`python3 tools/kit-grid.py acuan`), potong `python3 tools/kit-grid.py potong kota <lembar> <gambar>` → `src/sprites-kit-kota-<lembar>.js`
  (daftarkan di index.html; dimuat otomatis lewat `KIT_BUILDERS`). Grid 480×270, tokoh 64 px, skala 0.4.
- Halaman HP (artifact) dibatasi 512 file: audio Paylater sudah dilepas dari sana (videonya sudah dirender).
  Untuk cerita baru berikutnya, lepas audio cerita lama yang sudah dirender (`remove` di publish_files).
  Ide fantasi berikutnya: Borobudur dibangun hari ini · kampung Indonesia pindah ke Mars. Semua video sudah memakai gaya peta + alur antar-bab (paylater, wapres-kosong, mbg-berhenti, tanpa-gunung-api).
