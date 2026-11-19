# Andaikan Terlempar ke Roma 50 M: Bisa Bertahan Hidup? — skema visual (draf 2 · jalur gladiator)

**Format:** seri "Andaikan", gaya peta + simulasi, ±6–7 menit, hook + 8 bab + penutup (tiap bab = short, dual-VO). Naskah: `romawi-kuno.naskah.md`.
**Peta pusat (tampak atas, `sky: 'map'`):** satu distrik Roma — Sungai Tiber, gang tempat Dimas terbangun, pasar & toko roti,
**amfiteater batu (pusat peta, titik awal tiap bab)**, sekolah gladiator (*ludus*: halaman pasir berpagar), rumah-rumah beratap genteng.
`walkers`: warga bertunik/toga, budak memikul guci, anak-anak pasar. `crowd`: arus ke amfiteater (B4, B8), anak meneriakkan "FUL-MEN" (B7).
**Tokoh (fiktif, desain orisinal):** Dimas (kaos+jins → tunik kasar → perlengkapan retiarius: jaring, trisula, pelindung bahu),
Bruno "Si Banteng" (secutor, helm bulat tertutup), Lanista Varus (pemilik ludus, gemuk, cincin), Tita (penjual roti), anak-anak pasar.
Claudius: siluet di tribun kehormatan, tanpa wajah. **Hindari** kostum/adegan/dialog yang meniru film gladiator terkenal.
**Jam:** HARI 1 → HARI 7 → HARI 14 → HARI 15 → BULAN 2 → BULAN 3.
**Pengganti skor:** meteran **LAPAR** (bar perut, makin merah) B1–B4; meteran **PELUANG HIDUP** (10% → 35% → 55% → 100%, label *ilustrasi*) B5–B8.

| Bab | Peta (pembuka) | Adegan dekat (tampak samping) | Momen visual |
|---|---|---|---|
| Hook | Kamera turun ke amfiteater penuh (`crowd`) | Dimas + jaring vs Bruno; siluet kaisar | `scratch` hitam-putih → "3 BULAN SEBELUMNYA", judul |
| 1 Bisu | Kilat di gang → Dimas muncul | HP "SINYAL 0" → mati; balon kata Latin "???"; "HELLO?" → warga tertawa | jam HARI 1 → 7, stiker bingung |
| 2 Serba manual | Budak memikul, kincir gandum diputar tangan | Dimas tukar kaos jadi tunik (`swapAll` kostum); selokan, lalat, orang demam | kartu "± 1/3 PENDUDUK BUDAK", tangga KAISAR → ORANG ASING |
| 3 Lapar | Pasar & toko roti | mengemis (kepala menggeleng), diusir pedagang, kaki gemetar (`shake`) | meteran LAPAR naik; kartu "GANDUM GRATIS: WARGA SAJA" |
| 4 Arena | `crowd goto` arus ke amfiteater | gladiator bertarung; petugas berteriak; koin uang muka; Dimas bersumpah | kartu "COLOSSEUM BELUM ADA (dibuka 80 M)", kartu kutipan sumpah, stempel "SETUJU" |
| 5 Ludus + fisika | Ludus | mangkuk bubur jelai, cangkir abu; rak senjata; diagram berat vs kecepatan; helm secutor dengan lubang mata (zoom) | meteran PELUANG 10% |
| 6 Data | Ludus, pagi berulang | Dimas di pinggir pagar, papan lilin; papan statistik gaya analis olahraga: MENYERBU · ±100 · PUTAR KIRI | PELUANG 35% |
| 7 Penonton | Pasar, anak-anak | Dimas latihan salam khas; anak-anak menirukan; tulisan dinding "FULMEN" | kartu fakta Claudius & retiarius; PELUANG 55% |
| 8 Duel | Arena penuh | Bruno menyerbu → Dimas memutar ke kanan; hitungan 50…80…100 di layar; jaring dilempar; trisula di leher; Dimas menoleh ke penonton; dua gladiator keluar | slow-mo, SFX kerumunan, PELUANG 100%, koin di pasir |
| Penutup | Peta senja, Dimas makan di ludus | — | kutipan "Bukan otot, tapi cara berpikir"; cliffhanger "DUEL BERIKUTNYA…"; CTA |

**Sprite baru (`src/sprites-romawi.js`):** amfiteater batu (tampak atas & dalam), ludus, rumah Romawi, toko roti, pasar, selokan;
Dimas 3 kostum, Bruno/secutor, retiarius lain, lanista, penjual roti, anak pasar, warga bertunik/toga, budak, siluet kaisar;
benda: jaring, trisula, helm secutor (besar), papan lilin, mangkuk bubur, cangkir abu, koin, guci, HP mati.
Wajah besar baru: `face_dimas_lapar`, `face_dimas_fokus`, `face_bruno_marah` (thumbnail + `dialog`).
**Animasi baru (tanpa ubah engine bila bisa):** meteran bar (pakai `score`/label bila cukup), lempar jaring (prop bergerak + swap terjerat), hitungan besar di layar.
**SFX:** pustaka bersama; opsional baru: sorak kerumunan, denting besi, lempar jaring.
**Thumbnail:** "TIM *OTOT* / TIM *OTAK*", wajah besar Dimas fokus (tunik, jaring) vs Bruno berhelm; barisan: jaring · papan catatan · helm;
bawah: "BISA MENANG?!"; VS belah ketupat oranye, latar ungu/teal.
