# Sprite set — "Andaikan Kamu Terlempar ke Dunia Tanpa Aturan" (eksperimen Nano Banana)

## Cara pakai
1. Isi **[GAYA]** di bawah dengan gaya yang mau dicoba (mis. "16-bit SNES pixel art", "chunky 32x32 pixel art, limited 24-color palette",
   "cozy hand-painted pixel art"). Pakai teks gaya yang **sama persis** di semua prompt agar konsisten.
2. Generate **satu gambar per aset**. Buat **Raka dulu** (C1), lalu lampirkan gambar Raka sebagai referensi untuk pose/aset lain yang memuat Raka.
3. Simpan dengan nama file di kolom **File** ke `assets/tanpa-aturan/` (atau kirim ke chat, nanti saya simpan & pasang).
4. Latar **magenta polos #FF00FF** → nanti saya buang otomatis jadi transparan. Jangan pakai warna magenta/pink terang di objeknya.
5. Jangan ada teks/tulisan di gambar (teks ditambahkan mesin). Tanpa logo/merek asli.

**Ukuran tampil di video** (layar 960×540): tokoh ±60–110 px tinggi, benda ±30–80 px, latar penuh 960×540. Generate besar saja,
nanti saya kecilkan (nearest-neighbor agar piksel tetap tajam).

**Awalan prompt (tempel di depan setiap prompt):**
> [GAYA]. Single game asset, centered, full object visible, crisp clean edges, no text, no letters, no logo, no watermark,
> flat solid pure magenta #FF00FF background, no shadow on background. Indonesian city setting, present day.

**Awalan untuk LATAR (ganti awalan di atas):**
> [GAYA]. Side-view 2D game background scene, wide 16:9, no people, no characters, no text, no logo, no watermark.
> Indonesian city, present day. Leave the bottom fifth as open walkable ground.

---

## A. Tokoh (tampak samping, menghadap kanan) — 1 lembar = 3 pose sejajar
Prompt tokoh: *"Character sprite sheet, side view facing right, full body, 3 poses in one row evenly spaced: standing, walking step A, walking step B. Same character in every pose. [deskripsi]"*

| # | File | Deskripsi tokoh |
|---|---|---|
| C1 | `raka_jalan.png` | Raka, 25, Indonesian young man, short black hair, light blue work shirt untucked, dark grey trousers, sneakers, small crossbody bag |
| C2 | `raka_pose.png` | Raka (pakai referensi C1), 4 poses in one row: shocked jaw-drop, running, limping holding ankle, crouching hiding |
| C3 | `raka_akhir.png` | Raka (referensi C1), 2 poses: holding phone up taking photo, standing patiently waiting with hands in pockets |
| C4 | `ibu_normal.png` | Raka's mother, 50s, kind face, neat beige hijab, batik blouse, long skirt, healthy and tidy |
| C5 | `ibu_paralel.png` | the same mother but harder life: thinner, worn faded grey hijab, patched clothes, sandals, alert tired eyes |
| C6 | `sinta.png` | Sinta, 25, Raka's friend, shoulder-length hair, mustard cardigan, jeans, holding phone |
| C7 | `polisi.png` | generic traffic police officer, plain brown-grey uniform, white helmet, holding a ticket book (no real insignia) |
| C8 | `preman_bos.png` | street gang boss, burly, sleeveless black vest, bandana, gold chain, arms crossed, smirking |
| C9 | `preman_anak.png` | 2 gang members in one row: skinny guy with wooden stick, guy in torn denim jacket |
| C10 | `pedagang_curang.png` | market vendor, middle-aged man, apron, sly grin, one hand hiding behind back |
| C11 | `anak_kerja.png` | 2 kids ~9 years old in one row carrying heavy sacks on shoulders, dusty clothes |
| C12 | `anak_sekolah.png` | 2 kids in Indonesian elementary school uniform (white shirt, red shorts/skirt) with backpacks |
| C13 | `kakek.png` | elderly man in sarong and old shirt, using a cane, sitting-ready pose + standing pose |
| C14 | `petugas_lelang.png` | hospital auction host in white coat holding a wooden gavel, raised arm |
| C15 | `warga.png` | 4 varied ordinary residents in one row (man in t-shirt, woman in hijab, old woman, teen boy) |
| C16 | `warga_marah.png` | 4 angry residents chasing, running poses, fists raised, one holding sandal |

## B. Wajah besar (dialog & thumbnail) — potret dada ke atas, menghadap depan
Prompt: *"Portrait bust, chest up, facing viewer, expressive face, [ekspresi]."* Satu gambar per ekspresi, rasio 1:1.

| # | File | Ekspresi |
|---|---|---|
| F1 | `wajah_raka_heran.png` | Raka puzzled, one eyebrow raised, mouth open "huh?" |
| F2 | `wajah_raka_kaget.png` | Raka shocked, wide eyes, hands on cheeks |
| F3 | `wajah_raka_takut.png` | Raka scared, sweating |
| F4 | `wajah_raka_lega.png` | Raka relieved, warm small smile |
| F5 | `wajah_ibu_waspada.png` | parallel mother, wary serious look |
| F6 | `wajah_ibu_haru.png` | parallel mother, teary but smiling |
| F7 | `wajah_sinta_kesal.png` | Sinta annoyed, looking at phone |
| F8 | `wajah_preman.png` | gang boss menacing smirk |

## C. Latar adegan dekat (tampak samping, 16:9) — tiap tempat 2 versi bila ada "normal vs tanpa aturan"

| # | File | Deskripsi |
|---|---|---|
| L1 | `bg_jalan_malam.png` | quiet city street at night, roadworks hole in the asphalt with NO warning sign, streetlight |
| L2a | `bg_perempatan_normal.png` | orderly intersection, working traffic light, zebra crossing, daytime |
| L2b | `bg_perempatan_kacau.png` | same intersection: empty traffic-light pole (lights removed), cars and motorbikes tangled from all directions |
| L3 | `bg_tugu.png` | city monument roundabout with a large blank banner stretched across (banner empty, no text) |
| L4a | `bg_kelas_normal.png` | elementary classroom with desks, blackboard, bright |
| L4b | `bg_kelas_kosong.png` | same classroom abandoned: dusty, empty desks, cobwebs, broken window |
| L5a | `bg_pasar_normal.png` | traditional market stalls, tidy, scales on counters |
| L5b | `bg_pasar_kacau.png` | same market chaotic: trash, crammed stalls, crooked hand-written price boards (blank) |
| L6 | `bg_rusun_miring.png` | cheap apartment block visibly tilted, cracked walls, laundry on balconies, makeshift stairs |
| L7a | `bg_rs_normal.png` | hospital lobby with queue chairs and number display (blank) |
| L7b | `bg_rs_lelang.png` | same lobby turned into auction: small podium, rope barrier, chairs pushed aside |
| L8 | `bg_jalan_preman.png` | narrow road blocked by a bamboo barrier gate, a blank hand-painted signboard, gang hangout shack |
| L9 | `bg_gang.png` | narrow kampung alley, laundry lines, potted plants, doors, good for chase and hiding |
| L10 | `bg_rumah_ibu.png` | simple modest house interior, small table, old cupboard, dim warm light |
| L11 | `bg_pos_ronda.png` | neighborhood guard post (pos ronda) with kentongan, residents' meeting area, evening |
| L12 | `bg_pagi_rambu.png` | same street as L1 in morning light, the hole now surrounded by orange cones and warning barrier |

## D. Peta pusat (tampak atas, 16:9) — tata letak SAMA di ketiga versi
Prompt: *"Top-down bird's-eye view game map of a small Indonesian city district, no people, no text. Layout: central
intersection in the middle, monument roundabout top-left, elementary school top-right, traditional market bottom-left,
apartment block and hospital bottom-right, kampung alleys and a small river along the bottom, a roadworks hole on the left road."*

| # | File | Versi |
|---|---|---|
| M1 | `peta_normal.png` | orderly: clean roads, traffic lights, trees, green park |
| M2 | `peta_kacau.png` | same layout lawless: vehicles tangled at intersection, trash piles, river full of garbage, gate blocking a road, tilted building |
| M3 | `peta_pulih.png` | same layout recovering: some order, guard post lit, trash cleaned near kampung, barrier removed |

## E. Benda / props (satu benda per gambar)

| # | File | Benda |
|---|---|---|
| P1 | `surat_tilang.png` | crumpled traffic ticket paper slip (blank lines, no readable text) |
| P2 | `motor.png` | generic scooter motorbike, side view |
| P3 | `mobil.png` | generic small hatchback car, side view |
| P4 | `ambulans.png` | generic ambulance van, side view, red stripe (no real logo) |
| P5 | `motor_atas.png` + `mobil_atas.png` | same vehicles, top-down view (for map) |
| P6 | `lampu_merah.png` | traffic light pole with lights on (red) |
| P7 | `tiang_kosong.png` | same traffic light pole with the light box removed, wires hanging |
| P8 | `cone.png` | orange traffic cone and a striped roadworks barrier |
| P9 | `nasi_bungkus.png` | rice wrapped in banana leaf and brown paper |
| P10 | `timbangan.png` | old market balance scale with a small hidden pebble under one side |
| P11 | `uang_palsu.png` | generic fictional banknote, plain pattern (NOT a real rupiah design) |
| P12 | `karung.png` | burlap sack |
| P13 | `palu_lelang.png` | wooden auction gavel |
| P14 | `kursi_roda.png` | wheelchair |
| P15 | `ayam.png` | village chicken |
| P16 | `kentongan.png` | bamboo kentongan alarm drum |
| P17 | `papan_kosong.png` | blank hand-painted wooden signboard on posts (text added later) |
| P18 | `spanduk_kosong.png` | blank long cloth banner (text added later) |
| P19 | `hp_raka.png` | smartphone, screen blank |
| P20 | `tas_sekolah.png` | child's school backpack |

## F. (Opsional) Stiker reaksi
`stiker_heran.png` (big "?!" bubble), `stiker_keringat.png` (sweat drops), `stiker_marah.png` (anger mark), `stiker_hati.png` — boleh dilewati, mesin sudah punya stiker sendiri.

---
**Prioritas kalau mau coba sedikit dulu:** C1, F1, L2a, L2b, M1, M2, P2 → cukup untuk menguji 1 bab (perempatan) dengan gaya baru.

---

## Prompt per bagian (versi 2 — pakai gambar gaya hasil Nano Banana sebelumnya)
Lampirkan **2 gambar**: (1) gambar gaya hasil Nano Banana sebelumnya, (2) acuan isi bagian itu `assets/tanpa-aturan/acuan-<bagian>.png`.
Rasio 16:9, resolusi setinggi mungkin, unduh **PNG**. Simpan hasil: `assets/tanpa-aturan/bagian-<n>.png`.

Awalan semua prompt:
> Redraw the second image in exactly the art style of the first image (same pixel art style, shading and palette).
> Keep the same layout, grid positions, number of items and content as the second image. Large crisp pixels, high resolution.
> Background behind every item must be flat pure magenta #FF00FF with no texture or gradient. No text, no labels, no letters anywhere.

1. **Tokoh** (`acuan-1-tokoh.png`): "17 Indonesian characters, each shown in 3 poses side by side (standing, walking A, walking B), facing right, plus 6 extra poses of the light-blue-shirt young man. Keep every character's clothing colors as in the second image. The two older women wear a hijab."
2. **Wajah** (`acuan-2-wajah.png`): "8 large expressive face portraits, chest up. 1–4: same young man with short black hair and light blue shirt (puzzled, shocked, scared, relieved). 5–6: the same older woman in a grey hijab (wary, crying while smiling). 7: young woman, mustard top, annoyed. 8: gang boss with red bandana, smirk."
3. **Latar** (`acuan-3-latar.png`): "16 side-view background scenes in a 4x4 grid, no people. Keep each scene's content. Row 3: scene 1 is a tilted cracked apartment block on an empty city lot (no jungle), scene 3 is a hospital lobby turned into an auction with a wooden podium, gavel and rope barrier."
4. **Peta** (`acuan-4-peta.png`): "3 top-down city maps with identical layout: orderly, lawless (traffic jam at the crossroad, trash piles, dirty river, road blocked by a gate), recovering."
5. **Benda** (`acuan-5-benda.png`): "21 separate objects, each on its own magenta tile, same order and shapes as the second image. The banknote must be fictional, not a real currency."
