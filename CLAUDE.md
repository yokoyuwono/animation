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
3. Uji naskah dulu TANPA suara (durasi perkiraan). Setelah final: `node tools/vo-lines.js stories/<nama>.js --changed`
   → hanya kalimat baru/berubah yang perlu dibuat (hemat kredit).
4. Buat suara via connector ElevenLabs (`creative_create_flow`, lalu `creative_generate_speech` per kalimat,
   maksimal ±17 sekaligus karena batas konkurensi; cek dengan `creative_get_flow_run_status`).
   Unduh `content_url` ke `audio/<nama>/raw/<id>.mp3` (host `elevenlabsusercontent.com` diizinkan
   di environment cloud "animation").
5. `tools/process-vo.sh audio/<nama> 1.2` → audio jadi + `manifest.json`; lalu `node tools/vo-lines.js stories/<nama>.js --save`.
   Opsional: draf pakai `eleven_flash_v2_5` (±½ biaya) untuk uji tempo; final tetap `eleven_v4`. Jika draf kurang bagus, abaikan.
6. Cek: `node tools/pace.js stories/<nama>.js` (jeda visual) dan `node tools/preview-frames.js <out-dir> <hash> 1000 600 2000`.
7. Render semua untuk satu topik: `tools/produce.sh <nama>` (long 16:9+9:16, semua short, thumbnail jika ada
   `tools/thumbnail-<nama>.html`). Per bagian: `tools/render.sh <nama> long|shorts|<bab-id>`.
8. Thumbnail: sesuaikan `tools/thumbnail-<topik>.html`, lalu `node tools/thumbnail.js tools/thumbnail-<topik>.html a renders/thumbnail_<nama>.png`.
9. Publikasikan ulang halaman HP (artifact "Pixel Movie", https://claude.ai/artifact/8rpomo7GzqcbnZqkKaTstX)
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
- Video yang sudah ada: `motor-listrik`, `perang-dunia` (Bab 4 bersuara), `paylater` (lengkap + 6 short + thumbnail).
