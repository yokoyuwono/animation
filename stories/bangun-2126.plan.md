# Andaikan Kamu Terbangun 100 Tahun Lagi (2126) — skema visual (draf 2 — tokoh utama ANDI)

**Format:** seri "Andaikan", gaya peta, ±4 menit, 8 bab (tiap bab = short, dual-VO). Cerita fiktif penuh, semua angka ilustrasi.
**Premis:** "Andaikan… ayo kita lihat!" — **Andi** (tokoh tetap channel, sprite `andi`) menurunkan kacamata selamnya di gardu ronda malam 2026… dan muncul di tahun **2126**.
**Peta pusat (tampak atas):** Kampung Sukajaya — gardu ronda (titik pusat tiap bab), pasar, sawah, pantai, rumah Tejo, lapangan.
Layar terbelah: **kiri KAMPUNG 2026 · kanan KAMPUNG 2126** (peta sama, isinya berubah lewat `swapAll`).
**Tokoh:** **Andi** (tokoh utama, penjelajah Andaikan); lokal (fiktif): **Mas Tejo** (tukang servis HP 2026, teman ronda Andi),
**Kirana** (cicit Mas Tejo, remaja 2126, pemandu Andi), **Bu Tini** (penjual kopi 2026), **Robo-kasir** (robot warung 2126).
**Jam:** TAHUN 2026 → (berputar cepat) → TAHUN 2126 · lalu HARI 1 → HARI 7 → HARI 30.
**Tanpa papan skor** (arahan pemilik): satu alur bersambung — malam 2026 → satu hari di 2126 (pagi → malam) → pulang. Naskah: `bangun-2126.naskah.md`.

| Bab | Peta (pembuka + jembatan lewat Tejo) | Adegan dekat (tampak samping) | Momen visual / skor |
|---|---|---|---|
| 1 Hook | **Kilas maju ±10 dtk:** Andi menyodorkan uang kertas Rp50.000 ke Robo-kasir → "BENDA APA INI?" → mundur ke malam 2026, Andi ronda bersama Mas Tejo lalu menurunkan kacamata selam | "Andaikan… ayo kita lihat!" · jam TAHUN 2026→2126 berputar, peta berubah bertahap (rumah → menara hijau, jalan → jalur terbang) | judul, stiker kaget |
| 2 Bangun | Gardu ronda masih ada, kini dipagari kaca + label MUSEUM | Warga berkacamata layar lewat tanpa menyapa; Andi melambai, tak ada yang menoleh | **+1 2126:** serba canggih |
| 3 Jajan | Pasar → toko tanpa penjual | Bayar pakai wajah; Andi ditolak (stempel "TIDAK TERDAFTAR"), uang kertasnya jadi barang antik | struk: kopi 2026 Rp5.000 vs 2126 "3 KREDIT" · **+1 2026:** bisa jajan |
| 4 Kerja | Ruko servis HP Mas Tejo → jadi taman | HP sudah tidak ada (chip di telinga). Pekerjaan baru: perawat robot, petani gedung, pemandu "zaman dulu" | papan lowongan 2126 · **+1 2126:** pekerjaan baru |
| 5 Makan | Sawah → kebun bertingkat di gedung | Nasi keluar dari printer makanan; Andi mencari sambal, tak ada yang tahu | piring 2026 vs 2126 · **+1 2026:** rasa makanan |
| 6 Alam | Pantai → tanggul tinggi, laut lebih dekat | Udara bersih, mobil listrik melayang, burung kembali; Andi menarik napas lega | **+1 2126:** udara bersih |
| 7 Keluarga | Rumah Mas Tejo → rumah baru + plakat kecil | Kirana (cicit Mas Tejo) muncul membawa foto lama ronda Andi & Tejo; Andi mengajari anak-anak main layangan, semua kacamata layar dilepas | **+1 2026:** tetangga akrab |
| 8 Penutup | Dua peta bersebelahan, gardu ronda di tengah | — | SKOR AKHIR **2026 3 : 3 2126 — SERI?!** · kutipan "Teknologi berubah, tapi manusia tetap butuh ditegur sapa." · CTA "Kamu pilih hidup di tahun berapa?" |

**Twist:** masa depan unggul di teknologi & alam, masa kini unggul di rasa & kebersamaan → seri; penonton yang memutuskan (komentar).
**Sprite baru (`src/sprites-2126.js`):** menara hijau & jalur terbang (peta), gardu ronda + kaca museum, Robo-kasir, kacamata layar,
printer makanan, kebun bertingkat, mobil melayang, tanggul, papan lowongan hologram; wajah thumbnail: Andi dari referensi Nano Banana (`renders/andi_ref_sheet.png`), `face_kirana_*`.
**Thumbnail:** "TAHUN *2026* / TAHUN *2126*", Andi kaget (gambar Nano Banana) vs Kirana tersenyum, barisan HP–uang kertas vs robot–mobil melayang, bawah "BANGUN 100 TAHUN LAGI?!".
