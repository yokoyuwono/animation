# Andaikan Terlempar ke Roma 50 M — skema visual (draf 1)

**Format:** seri "Andaikan", gaya peta + simulasi, ±4,5 menit, hook + 7 bab + penutup (tiap bab = short, dual-VO). Naskah: `romawi-kuno.naskah.md`.
**Peta pusat (tampak atas, `sky: 'map'`):** satu distrik kota Roma — Sungai Tiber (kiri), Forum (tengah), pasar budak,
**rumah Tuan Sextus** (domus beratap genteng merah + halaman/atrium = titik awal tiap bab), pemandian umum, air mancur,
dan akuaduk berlengkung (sebagian masih perancah → `swapAll` jadi utuh di penutup, Aqua Claudia 52 M).
`walkers`: warga bertoga, budak memikul amfora, prajurit. `crowd`: kerumunan pasar budak (B1), sidang (B6/B7), peresmian (penutup).
**Tokoh (fiktif, desain orisinal):** Dimas (kaos & celana jins → tunik kasar → tunik + topi pileus), Tuan Sextus (pedagang minyak, toga bergaris),
Marcus (putranya, ±8 th), Kleon (budak tua Yunani, janggut putih, guru), Felix (juru tulis, papan hitung), Rufus (tetangga penuduh), hakim.
Claudius hanya siluet jauh di podium (tanpa wajah meniru patung/aktor).
**Jam simulasi:** pojok kiri atas "HARI 1 · 50 M" → MINGGU 2 → BULAN 1 → BULAN 2 → BULAN 3 → "AGUSTUS 52 M".
**Papan skor berjalan:** "ROMA ASLI vs ROMA + DIMAS" (`score`, `corner: true` di tengah bab, papan besar di akhir bab).
**Transisi:** peta ⇄ adegan dekat lewat `transition: 'clouds'` (otomatis 'zoom' bila < 10 dtk).

| Bab | Peta (pembuka) | Adegan dekat (tampak samping) | Momen visual / kata kunci |
|---|---|---|---|
| Hook | Kerumunan di Forum (`crowd goto`) | Dimas di depan hakim, Rufus menunjuk; zoom ke sebatang sabun | stempel "PENYIHIR?", `scratch` hitam-putih → "2 BULAN SEBELUMNYA", judul |
| 1 Dikira budak | Kilat → Dimas muncul di gang | Dimas angkat HP "SINYAL 0" → mati; balon kata Latin "???"; pasar budak, papan di leher; Sextus menunjuk | kartu "± 1/3 PENDUDUK ITALIA BUDAK *(perkiraan)*"; skor 1:0 |
| 2 Sabun | Air mengalir di akuaduk → air mancur | Pemandian: minyak + strigil; spons toilet (stiker jijik); dapur: Dimas aduk abu + lemak, busa; koki tertawa "KRIM RAMBUT GALIA"; cuci tangan | `swapAll` dapur: tokoh sakit perut → sehat; skor 1:1 |
| 3 Angka nol | Gudang amfora di rumah Sextus | Felix & papan hitung kerikil vs Dimas menulis kolom angka; layar `CCCXLVIII × XXIV` vs `348 × 24 = 8.352`; Felix curiga | stopwatch balapan; kartu "NOL: INDIA 628 M"; skor 2:1 |
| 4 Cetak buku | Toko buku/penyalin di Forum | Penyalin menulis gulungan; Dimas mengukir huruf kayu → tinta luber; cap kayu di guci minyak laku | kartu "± 1440 MESIN CETAK"; skor 3:1 |
| 5 Obat | Rumah Sextus malam (lampu minyak) | Marcus terluka; tabib berdoa; gelembung ingatan cawan Petri "PENISILIN?" → tanda silang "BUTUH LAB"; air direbus, kain, madu | `swapAll` Marcus berbaring → berlari; skor 3:2 |
| 6 Penyihir | Rufus berbisik ke warga (balon menyebar dari rumah ke rumah) | Ruang sidang: Dimas gagap, balon kata patah-patah; hakim mengerutkan dahi | kartu "LEX CORNELIA 81 SM"; skor 4:2 |
| 7 Twist | Malam, rumah Sextus | Kleon mengajar di papan lilin (*tabula*); kalender BULAN 2; sidang kedua: Dimas lancar (`dialog`), Sextus membela; topi pileus dipasang | stiker "MERDEKA", SFX success; skor 4:3 |
| Penutup | Peta penuh; akuaduk selesai (`swapAll`), kerumunan peresmian | Siluet Claudius di podium; Dimas memegang gulungan juru hitung | kartu "PALLAS & NARCISSUS: MANTAN BUDAK"; SKOR AKHIR 4:3; kutipan "Pengetahuan saja tidak cukup"; CTA |

**Sprite baru (`src/sprites-romawi.js`):**
- Peta: blok rumah Romawi (atap genteng, atrium), Forum + kuil berpilar, akuaduk berlengkung (utuh & berperancah), air mancur, pemandian, pasar budak (panggung kayu), Sungai Tiber + jembatan batu, pohon pinus payung & siprus.
- Tokoh peta & samping: Dimas (3 kostum), Sextus, Marcus, Kleon, Felix, Rufus, hakim, warga bertoga, budak memikul amfora, prajurit (helm generik, tanpa meniru film).
- Benda: papan jual leher, HP mati, amfora/guci, strigil, spons bertongkat, kuali sabun + busa, papan hitung + kerikil, gulungan papirus, huruf kayu, cap kayu, papan lilin, lampu minyak, kain & madu, topi pileus, siluet podium kaisar.
- Wajah besar (`sprites-faces` gaya, tapi di file baru): `face_dimas_shock`, `face_dimas_happy`, `face_sextus_angry` (untuk thumbnail & dialog).
**Animasi baru (tanpa ubah engine bila bisa):** busa sabun (partikel/prop pop), kerikil bergeser di papan hitung (`swapAll`), tinta luber (swap), balon bisikan menyebar (prop beruntun).
**SFX:** pakai pustaka bersama; opsional baru: palu sidang, kerumunan bergumam.
**Thumbnail:** "TIM *ROMA* / TIM *DIMAS*", wajah besar Dimas kaget (kaos modern di tengah orang bertoga) vs Sextus; barisan sabun · angka 0 · gulungan · jamur;
bawah: "JADI KAISAR?!" atau "DIKIRA PENYIHIR?!" (skor TIDAK dibocorkan); VS belah ketupat oranye, latar ungu/teal.
**Etika:** tanpa logo/merek; Claudius tanpa wajah; angka skor & kejadian Dimas = ilustrasi; fakta di tabel sumber naskah dicek ulang sebelum publikasi.
