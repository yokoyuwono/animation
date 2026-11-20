# Rencana Sistem "Pixel Movie Studio"

Status: **draf hasil diskusi 20 Nov 2026**, belum dibangun. Harga = perkiraan (cek ulang sebelum berlangganan).

## Tujuan
Satu web pribadi (nyaman di HP) untuk seluruh produksi animasi:
ide → naskah → animasi → suara → musik → render → jadwal posting,
dengan komentar di tiap tahap yang langsung diperbaiki Claude, dan aturan gaya yang terus bertambah ("engine belajar").

## Keputusan yang sudah disepakati
- **Pengguna:** hanya pemilik (pribadi).
- **Pekerjaan berat (naskah, animasi, suara, render) dikerjakan Claude** di sesi cloud seperti sekarang → **tanpa VPS**.
- **Putar di web:**
  - *Animasi langsung* (mesin jalan di browser) untuk review — komentar bisa ditempel ke bab/adegan.
  - *MP4 jadi* diputar dari penyimpanan video untuk hasil akhir.
- **Google Drive** = arsip/cadangan (bukan pemutar utama).
- **"Engine belajar"** = setiap komentar dicatat jadi aturan gaya (seperti `CLAUDE.md`), bukan melatih AI.
- **Aman untuk 100+ cerita:** daftar hanya memuat judul + thumbnail; naskah & suara dimuat saat diputar.
  Tiap cerita **dikunci ke versi mesin** saat dibuat, agar perubahan mesin tidak merusak cerita lama.

## Susunan (jalur hemat)
| Bagian | Layanan | Biaya/bulan |
|---|---|---|
| Web | Cloudflare Pages | gratis |
| Video, audio, thumbnail | Cloudflare R2 | gratis s.d. 10 GB, lalu ±$0,015/GB, tanpa biaya streaming |
| Komentar, status, jadwal | Supabase (Free) | gratis |
| Produksi | Claude (sesi cloud) | langganan Claude yang sudah ada |
| Suara & musik | ElevenLabs | langganan yang sudah ada |

Perkiraan: 100 cerita ≈ 400 MB audio + video MP4 → masih di sekitar kuota gratis/murah.
Bila nanti produksi makin sering: tambah VPS render (±€11–19/bln) atau naik ke Vercel Pro + Supabase Pro (±Rp1 jt/bln).

## Tahapan
1. **Studio (lihat + komentar):** daftar video + status, thumbnail, putar animasi/MP4, link unduh, naskah, caption bisa disalin, daftar "menunggu keputusan", riwayat.
2. **Tombol produksi dari web:** ide/komentar → Claude bekerja → hasil tampil lagi dengan label "Diperbaiki".
   *Perlu diuji dulu:* cara tombol web membangunkan Claude (kemungkinan lewat GitHub).
3. **Suara & musik dari web** (pilih kalimat yang dibuat ulang, hemat kredit).
4. **Jadwal posting** ke YouTube / TikTok / Instagram (TikTok & Instagram perlu pengajuan izin API).

## Yang masih perlu diputuskan pemilik
- Mulai tahap 1 sekarang?
- Pakai akun Cloudflare (Pages + R2) — perlu dibuat/disambungkan oleh pemilik.
- Sementara web sendiri belum jadi: tahap 1 dibuat dulu sebagai halaman artifact privat?
