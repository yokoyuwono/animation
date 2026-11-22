# Andaikan Semua Orang Kaya Raya — skema visual (draf 1)

**Format:** seri "Andaikan", gaya peta, ±4 menit, 8 bab (tiap bab = short, dual-VO). Riset: `semua-kaya.riset.md`.
**Premis:** suatu pagi, saldo setiap warga jadi **Rp 10 miliar** *(ilustrasi)*. Kaya semua… lalu apa?
**Peta pusat (tampak atas):** Kampung Sukamakmur — pasar, warung gorengan Bu Imah (papan harga besar), TPS + gerobak sampah,
toko roti, sawah, kantor bank kecil, lapangan. Layar terbelah: **kiri DUNIA BIASA · kanan DUNIA KAYA RAYA** (kampung sama).
**Tokoh (fiktif):** **Pak Darto** (tukang sampah, tokoh utama/jembatan tiap bab), **Bu Imah** (penjual gorengan),
**Dika** (remaja, mimpi beli HP baru), **Bu Ratna** (pegawai bank, penjelas singkat).
**Jam:** HARI 1 → MINGGU 1 → BULAN 1 → BULAN 3 → BULAN 6 → TAHUN 1.
**Penanda berjalan:** papan harga gorengan kiri vs kanan (Rp 1.000 vs naik terus) + **skor DUNIA BIASA vs DUNIA KAYA**
(siapa lebih sejahtera) di akhir tiap bab, mini di pojok (`corner`).

| Bab | Peta (pembuka + jembatan Pak Darto) | Adegan dekat (tampak samping) | Momen visual / skor |
|---|---|---|---|
| 1 Hook | **Kilas maju ±10 dtk:** papan "GORENGAN Rp 1.000.000", Pak Darto dorong gerobak penuh uang tapi tak bisa beli apa-apa → "kok bisa?" → mundur ke HARI 1 | — | judul, stiker kaget |
| 2 Hari 1 | Notif HP semua warga "SALDO Rp 10.000.000.000" (ilustrasi), warga lompat, `crowd goto` ke pasar | Dika borong HP, warga borong apa saja | rak pasar kosong (`swapAll`) · skor 0–1 (kanan senang) |
| 3 Minggu 1 | Gerobak sampah diparkir, TPS meluap | Pak Darto: "Buat apa kerja? Aku kan miliarder." Petani & tukang roti ikut libur | sampah menumpuk bertahap, lalat · 1–1 |
| 4 Bulan 1 | Antrean panjang di warung Bu Imah | Bu Imah sendirian, minyak langka → papan harga Rp1.000 → 10rb → 100rb → **1 juta** | struk Dika *(ilustrasi)*: uang banyak, barang sedikit · 2–1 |
| 5 Bulan 3 | Pasar sepi, warga barter | Bu Ratna: "Uang cuma tiket. Tiketnya kebanyakan, kursinya sedikit." Dika tukar HP dengan 3 telur; uang jadi bungkus gorengan | kartu MV = PQ versi sederhana · 3–1 |
| 6 Bulan 6 | TV di warung | Kilas sejarah (kartu, uang generik): **Jerman 1923** roti 163 → ±233 miliar mark · **Zimbabwe 2008** uang 100 triliun ≈ US$30 · **Indonesia 1965** Rp1.000 jadi Rp1 | label sumber, cap "NYATA" · 4–1 |
| 7 Tahun 1 | Pak Darto kembali menarik gerobak, warga ikut kerja bakti, sawah hijau lagi | Bu Imah goreng bersama tetangga; harga turun pelan | kartu: inflasi Indonesia Okt 2026 3,23%, target BI 2,5±1% · 5–1 |
| 8 Penutup | Peta dua sisi menyatu jadi satu kampung bersih | — | SKOR AKHIR **DUNIA BIASA 5 : 1 DUNIA KAYA** · kutipan "Kaya itu bukan banyak uang, tapi banyak yang bisa dikerjakan bersama." · CTA "Kalau dapat 10 miliar, kamu beli apa dulu?" |

**Twist:** dunia yang "kaya raya" justru kalah — kekayaan sejati = barang & jasa (termasuk kerja Pak Darto), bukan angka di saldo.
**Sprite baru (`src/sprites-semua-kaya.js`):** tumpukan/gerobak uang generik, papan harga warung (angka bisa ganti),
notif saldo HP, gerobak & tumpukan sampah (3 tingkat), rak pasar penuh/kosong, TV warung, kartu sejarah (roti, uang generik), telur/sabun barter.
Wajah thumbnail: `face_darto_*`, `face_imah_*`.
**Thumbnail:** "TIM *BIASA* / TIM *KAYA RAYA*", wajah Pak Darto vs Bu Imah, barisan gorengan, bawah "GORENGAN Rp 1 JUTA?!" (skor tidak dibocorkan).
**Pertanyaan untuk pemilik:** setuju premis Rp 10 miliar & layar terbelah biasa vs kaya? Ganti/tambah contoh sejarah?
