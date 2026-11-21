# Prompt Nano Banana — Asset Pack "Perkotaan" (siap jadi kode)

## Cara pakai (penting supaya ukuran & potongan pas)
1. Tiap lembar: **lampirkan gambar acuan** `assets/kota/acuan-<lembar>.png` (grid magenta + siluet abu-abu = ukuran & posisi).
   Rasio **16:9**, resolusi setinggi mungkin, unduh **PNG**.
2. Buat **Lembar A dulu**. Untuk lembar B–G lampirkan juga **hasil Lembar A** sebagai acuan gaya (gambar ke-1), acuan grid jadi gambar ke-2.
3. Simpan hasil ke `assets/kota/<lembar>.png` (atau kirim ke chat), lalu saya jalankan:
   `python3 tools/kit-grid.py potong kota <lembar> assets/kota/<lembar>.png` → `src/sprites-kit-kota-<lembar>.js` + `assets/kota/<lembar>-cek.png`.
4. Jika ada sel meleset/terpotong, generate ulang **lembar itu saja**.

**Ukuran (sudah dikunci di acuan):** kanvas logis 480×270 piksel seni (1 piksel seni = blok 4×4 pada 1920×1080).
Tokoh 64 px tinggi (NPC 60), sel tokoh 60×90, kaki di garis dasar sel. Di video dipakai skala 0.4 → 480 = selebar layar.
Nama sprite: `<tokoh>_0` diam, `_1`/`_2` jalan (animasi `<tokoh>_walk` otomatis), pose lain `<tokoh>_<pose>`.

---

## AWALAN (tempel di depan SETIAP prompt)
> Pixel art game asset sheet. Use the attached grid image as an exact layout template: same canvas, same cells,
> same cell borders. Replace every grey placeholder silhouette with the requested art at the SAME size and SAME
> position — feet/bottom exactly on the placeholder's bottom edge, never crossing the cell border.
> Style: crisp 16-bit pixel art on a 480×270 logical pixel grid (every art pixel is one uniform square block,
> 4×4 on a 1920×1080 canvas), hard edges, NO anti-aliasing, NO blur, NO gradients, NO dithering noise,
> 1-pixel dark outline around every sprite, limited palette (~32 colors), soft light from top-left,
> side view facing right unless stated. Background of every cell: flat pure magenta #FF00FF, no texture,
> no shadow on the background. Never use magenta, pink or purple inside the art. No text, letters, numbers,
> logos or brand names anywhere. Modern Indonesian city, present day. Keep the thin dark cell borders.

(Jika ada lampiran gaya dari Lembar A, tambahkan: *"Match exactly the art style, outline, palette and pixel size of the first image."*)

---

## Lembar A — Tokoh utama (`a-utama`, 8×3 sel)
> Main character **Dimas**, 25, Indonesian young man, short messy black hair, warm tan skin, teal hoodie (open, over a
> white t-shirt), dark navy trousers, white sneakers, small brown crossbody bag. Same character, same clothes and same
> height in all 24 cells. Expressive face readable at small size.
> Row 1 (left→right): standing idle · walking step A (left leg forward) · walking step B (right leg forward) · running A ·
> running B · talking with one open palm · waving hand · pointing forward horizontally.
> Row 2: shocked (jaw drop, hands up) · happy small jump · sad slumped · angry fists · confused scratching head ·
> thinking hand on chin · relieved exhale · scared shaking.
> Row 3: looking at smartphone · sitting on a low plastic stool · crouching · carrying a cardboard box ·
> eating from a rice packet · tired hunched · facing the viewer (front view) · back view.

## Lembar B — Tokoh pendukung (`b-tokoh`, 3 baris × 8 sel)
> 3 supporting characters, one per row, same character across its row. Each row left→right: standing idle · walking A ·
> walking B · talking · happy · shocked · sad · signature action.
> Row 1: **Sari**, 24, Dimas's friend, shoulder-length black hair, mustard yellow cardigan, light blue jeans, tote bag;
> action: typing on a laptop held on one arm.
> Row 2: **Bu Ratna**, 50s, kind food-stall owner, neat dark green hijab, batik blouse, long brown skirt, apron;
> action: holding a ladle.
> Row 3: **Pak Hendra**, 45, office boss, slightly chubby, neat side-parted hair, glasses, batik shirt, black trousers;
> action: looking at wristwatch, impatient.

## Lembar C — NPC (`c-npc`, tiap baris 2 NPC × 4 sel)
> 6 generic background city people, slightly simpler detail than the main characters, height like the placeholders.
> Per NPC, 4 cells left→right: standing idle · walking A · walking B · action.
> Row 1: motorbike-taxi rider in plain green jacket and plain helmet (no logo), action: holding helmet ·
> street food vendor in white shirt and black cap, action: stirring a pot.
> Row 2: office worker woman in white blouse, grey skirt, lanyard (blank card), action: drinking coffee ·
> high-school student in white shirt and grey trousers with backpack, action: reading a book.
> Row 3: security guard in plain navy uniform and cap (no insignia), action: blowing a whistle ·
> elderly man in sarong, peci and plain shirt, with a cane, action: sitting-ready slow wave.

## Lembar D — Wajah dialog (`d-wajah`, 4×2 sel)
> 8 large portrait busts (chest up, facing viewer, slight 3/4 turn), centered, same pixel size as before but larger
> portrait framing like the placeholders.
> Row 1: Dimas neutral · Dimas grinning happy · Dimas shocked wide eyes · Dimas panicked sweating.
> Row 2: Dimas relieved soft smile · Sari friendly smile · Bu Ratna warm smile · Pak Hendra stern frown.

## Lembar E — Bangunan tampak samping (`e-bangunan`, 6 sel tinggi)
> 6 standalone building facades, side/front view, each standing on its cell bottom, same width and height as its
> grey placeholder, no ground, no sky.
> Left→right: small one-storey house with tiled roof and small porch · tiny food stall (warung) with tarp awning and
> bench · 3-storey shophouse (ruko) with rolling shutters · convenience store with glass front and blank sign board ·
> tall glass office tower · 6-storey apartment block with balconies and laundry.

## Lembar F — Kendaraan & benda (`f-benda`)
> Row 1 (5 cells): small hatchback car · Indonesian minibus angkot (plain teal, no text) · scooter motorbike (no rider) ·
> food pushcart with glass display box · bus stop shelter with bench.
> Row 2 (8 cells): street lamp pole · traffic light pole (red light on) · city shade tree · potted plant ·
> trash bin · park bench · traffic cone · striped road barrier.
> Row 3 (8 cells, the placeholder is empty: draw each as a big centered ICON filling about 70% of the cell):
> cardboard parcel box · smartphone (blank screen) · takeaway coffee cup · rice wrapped in brown paper ·
> backpack · wallet · blank wooden signboard · bicycle.

## Lembar G — Latar jalan kota (`g-latar`, 1 gambar penuh, opsional)
> (Ganti kalimat magenta di awalan dengan: "Full scene, no magenta.")
> Side-view 2D game background of a lively Indonesian city street, daytime, no people, no vehicles. Sky and distant
> buildings in the light-blue area; a sidewalk and road as one flat walkable ground strip exactly in the grey bottom band.
> Low detail in the middle so characters stay readable.
> Versi malam: sama persis, tambahkan "at night, street lamps on, warm window lights" → simpan `g-latar-malam.png`.
