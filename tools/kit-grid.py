"""Asset pack Nano Banana berbasis GRID TETAP -> sprite kode (tanpa tebak-tebakan potongan).
  python3 tools/kit-grid.py acuan [pack]               -> assets/<pack>/acuan-<lembar>.png (1920x1080, dilampirkan ke Nano Banana)
  python3 tools/kit-grid.py potong <pack> <lembar> <gambar.png|jpg> [warna=48]
      -> src/sprites-kit-<pack>-<lembar>.js  (+ assets/<pack>/<lembar>-cek.png untuk dicek)
Lembar 'latar' tidak jadi kode: disimpan sebagai PNG 480x270 di assets/<pack>/ (pakai lewat bgImage).

Aturan ukuran (sama untuk semua lembar): kanvas logis 480x270, 1 piksel seni = blok 4x4 di gambar 1920x1080.
Di video: skala 0.4 (192/480) -> 480 piksel grid = selebar layar. Tokoh berdiri tinggi 64, kaki di garis dasar sel.
Potong = koordinat sel (proporsional, ukuran keluaran Nano Banana bebas asal 16:9), magenta -> transparan.
Semua frame satu tokoh dipotong dengan kotak yang SAMA (kaki sejajar, tidak goyang saat animasi)."""
import sys, os, string
from collections import deque
from PIL import Image, ImageDraw
import numpy as np

GW, GH, UP = 480, 270, 4          # grid logis & skala acuan
INSET = 3                          # buang tepi sel (garis pemisah + geser kecil)
MAG, GUT, PH = (255, 0, 255), (32, 32, 42), (150, 150, 150)

def grid(cols, h, names, y=0):     # satu baris sel sama lebar
    w = GW // cols
    return [(n, (i * w, y, (i + 1) * w, y + h)) for i, n in enumerate(names)]

def frames(who, sfx):
    return [f'{who}_{s}' for s in sfx]

TOKOH8 = ['0', '1', '2', 'bicara', 'senang', 'kaget', 'sedih', 'aksi']
NPC4 = ['0', '1', '2', 'aksi']

PACKS = {'kota': {
    # mode: tokoh (kotak sama per tokoh, kaki di dasar) | benda (dipangkas per benda) | sel (ukuran sel utuh) | latar
    'a-utama': dict(mode='tokoh', base=84, h=64, cells=
        grid(8, 90, frames('dimas', ['0', '1', '2', 'lari_0', 'lari_1', 'bicara', 'lambai', 'tunjuk'])) +
        grid(8, 90, frames('dimas', ['kaget', 'senang', 'sedih', 'marah', 'bingung', 'pikir', 'lega', 'takut']), 90) +
        grid(8, 90, frames('dimas', ['hp', 'duduk', 'jongkok', 'bawa', 'makan', 'lelah', 'depan', 'belakang']), 180)),
    'b-tokoh': dict(mode='tokoh', base=84, h=64, cells=
        grid(8, 90, frames('sari', TOKOH8)) + grid(8, 90, frames('ratna', TOKOH8), 90) +
        grid(8, 90, frames('hendra', TOKOH8), 180)),
    'c-npc': dict(mode='tokoh', base=84, h=60, cells=
        grid(8, 90, frames('ojek', NPC4) + frames('pedagang', NPC4)) +
        grid(8, 90, frames('karyawati', NPC4) + frames('pelajar', NPC4), 90) +
        grid(8, 90, frames('satpam', NPC4) + frames('kakek', NPC4), 180)),
    'd-wajah': dict(mode='sel', cells=
        grid(4, 135, ['wajah_dimas_netral', 'wajah_dimas_senang', 'wajah_dimas_kaget', 'wajah_dimas_panik']) +
        grid(4, 135, ['wajah_dimas_lega', 'wajah_sari', 'wajah_ratna', 'wajah_hendra'], 135)),
    'e-bangunan': dict(mode='benda', base=266, cells=
        grid(6, 270, ['gedung_rumah', 'gedung_warung', 'gedung_ruko', 'gedung_minimarket', 'gedung_kantor', 'gedung_apartemen'])),
    'f-benda': dict(mode='benda', base=84, cells=
        grid(5, 90, ['mobil', 'angkot', 'motor', 'gerobak', 'halte']) +
        grid(8, 90, ['lampu_jalan', 'lampu_merah', 'pohon', 'pot', 'tong_sampah', 'bangku', 'kerucut', 'palang'], 90) +
        grid(8, 90, ['ikon_kardus', 'ikon_hp', 'ikon_kopi', 'ikon_nasi', 'ikon_tas', 'ikon_dompet', 'ikon_papan', 'ikon_sepeda'], 180)),
    'g-latar': dict(mode='latar', ground=225, cells=[('latar_kota_siang', (0, 0, GW, GH))]),
}}

# ukuran patokan (lebar, tinggi) untuk siluet abu-abu di acuan
GUIDE = {'gedung_rumah': (70, 92), 'gedung_warung': (72, 80), 'gedung_ruko': (74, 150), 'gedung_minimarket': (74, 104),
         'gedung_kantor': (70, 250), 'gedung_apartemen': (74, 200), 'mobil': (78, 36), 'angkot': (80, 44), 'motor': (54, 38),
         'gerobak': (64, 54), 'halte': (80, 64), 'lampu_jalan': (22, 76), 'lampu_merah': (22, 72), 'pohon': (48, 74), 'pot': (22, 26),
         'tong_sampah': (18, 26), 'bangku': (44, 22), 'kerucut': (14, 20), 'palang': (46, 30)}

def acuan(pack):
    os.makedirs(f'assets/{pack}', exist_ok=True)
    for sheet, cfg in PACKS[pack].items():
        im = Image.new('RGB', (GW, GH), GUT); d = ImageDraw.Draw(im)
        for name, (x0, y0, x1, y1) in cfg['cells']:
            if cfg['mode'] == 'latar':
                d.rectangle((0, 0, GW - 1, cfg['ground'] - 1), fill=(170, 200, 230))
                d.rectangle((0, cfg['ground'], GW - 1, GH - 1), fill=PH); continue
            d.rectangle((x0 + 1, y0 + 1, x1 - 2, y1 - 2), fill=MAG)
            cx = (x0 + x1) // 2
            if cfg['mode'] == 'tokoh':           # siluet orang berdiri: tinggi h, kaki di garis dasar
                b, h = y0 + cfg['base'], cfg['h']; hd = h // 4
                d.ellipse((cx - hd // 2, b - h, cx + hd // 2, b - h + hd), fill=PH)
                d.rectangle((cx - h // 7, b - h + hd, cx + h // 7, b - h * 2 // 5), fill=PH)
                d.rectangle((cx - h // 9, b - h * 2 // 5, cx + h // 9, b), fill=PH)
            elif cfg['mode'] == 'sel':           # siluet potret dada ke atas
                w, h = x1 - x0, y1 - y0
                d.ellipse((cx - w // 5, y0 + h // 6, cx + w // 5, y0 + h * 3 // 5), fill=PH)
                d.rounded_rectangle((cx - w * 2 // 5, y0 + h * 3 // 5, cx + w * 2 // 5, y1 - 4), 10, fill=PH)
            elif name in GUIDE:                  # kotak patokan ukuran benda, menapak di dasar sel
                w, h = GUIDE[name]; b = y0 + cfg['base']
                d.rectangle((cx - w // 2, b - h, cx + w // 2, b), fill=PH)
        out = f'assets/{pack}/acuan-{sheet}.png'
        im.resize((GW * UP, GH * UP), Image.NEAREST).save(out); print(out)

def potong(pack, sheet, src, NC=48):
    cfg = PACKS[pack][sheet]
    im = Image.open(src).convert('RGB')
    small = im.resize((GW, GH), Image.BOX)
    if cfg['mode'] == 'latar':
        q = small.quantize(NC, method=Image.Quantize.MAXCOVERAGE, dither=Image.Dither.NONE).convert('RGB')
        for name, _ in cfg['cells']:
            name = name.replace('siang', 'malam') if 'malam' in os.path.basename(src) else name
            out = f'assets/{pack}/{name}.png'; q.save(out); print(out, f'{GW}x{GH}')
        return
    a = np.asarray(small).astype(int); r, g, b = a[..., 0], a[..., 1], a[..., 2]
    bg = ((r > 140) & (b > 110) & (g < 120) & (r - g > 70) & (b - g > 40)) | ((r > 80) & (r - g > 45) & (b - g > 30) & (b > 0.55 * r))
    keep = np.zeros((GH, GW), bool); boxes = {}
    for name, (x0, y0, x1, y1) in cfg['cells']:
        m = np.zeros((GH, GW), bool); m[y0 + INSET:y1 - INSET, x0 + INSET:x1 - INSET] = True
        m &= ~bg
        m &= ~((abs(r - PH[0]) < 14) & (abs(g - PH[1]) < 14) & (abs(b - PH[2]) < 14) & (abs(r - b) < 8))  # sisa siluet acuan
        lab, comps = label(m)
        big = max((len(c) for c in comps), default=0)
        for i, c in enumerate(comps):              # buang bintik; simpan bagian yang cukup besar
            if len(c) < max(6, big * 0.02):
                for y, x in c: m[y, x] = False
        if not m.any(): print('KOSONG:', name); continue
        ys, xs = np.where(m)
        if xs.min() <= x0 + INSET or xs.max() >= x1 - INSET - 1 or ys.min() <= y0 + INSET:
            print('PERINGATAN terpotong tepi sel:', name)
        keep |= m; boxes[name] = (xs.min(), ys.min(), xs.max(), ys.max(), (x0, y0, x1, y1))
    # kotak potong
    crop = {}
    if cfg['mode'] == 'tokoh':                     # satu kotak per tokoh: lebar & tinggi gabungan, kaki = garis dasar
        group = {}
        for n, (bx0, by0, bx1, by1, (x0, y0, x1, y1)) in boxes.items():
            who = n.split('_')[0]; cx = (x0 + x1) // 2
            gw, top, bot = group.get(who, (0, 999, cfg['base']))
            group[who] = (max(gw, bx1 - cx + 1, cx - bx0), min(top, by0 - y0), max(bot, by1 - y0))
        for n, (*_, (x0, y0, x1, y1)) in boxes.items():   # kaki semua frame di garis dasar yang sama
            who = n.split('_')[0]; hw, top, bot = group[who]; cx = (x0 + x1) // 2
            crop[n] = (cx - hw, y0 + top, cx + hw - 1, y0 + bot)
    elif cfg['mode'] == 'sel':
        crop = {n: (x0 + INSET, y0 + INSET, x1 - INSET - 1, y1 - INSET - 1) for n, (*_, (x0, y0, x1, y1)) in boxes.items()}
    else:
        crop = {n: (bx0, by0, bx1, by1) for n, (bx0, by0, bx1, by1, _) in boxes.items()}
    # palet bersama untuk lembar ini
    arr = np.asarray(small).copy(); arr[~keep] = 0
    pal_img = Image.fromarray(arr.astype(np.uint8)).quantize(NC + 1, method=Image.Quantize.MAXCOVERAGE, dither=Image.Dither.NONE)
    idx = np.asarray(pal_img); pal = pal_img.getpalette()[:(NC + 1) * 3]
    chars = (string.ascii_uppercase + string.ascii_lowercase + string.digits + '#$%&*+-/:;<=>?@^_~!|').replace('K', '')
    used = sorted(set(idx[keep].tolist()))
    ch = {u: chars[i] for i, u in enumerate(used)}
    var = 'KIT_' + (pack + '_' + sheet).upper().replace('-', '_')
    out = [f'// KIT {pack}/{sheet} — dari {src} oleh tools/kit-grid.py (grid {GW}x{GH}, 1 huruf = 1 piksel).',
           f'// Pakai skala 0.4 (192/480). Tokoh: <pack>_<nama>_0 diam, _1/_2 jalan (animasi <nama>_walk otomatis).',
           f'const {var}_PAL = {{'] + ["  '" + ch[u] + "': '#%02x%02x%02x'," % tuple(pal[u * 3:u * 3 + 3]) for u in used] + ['};', f'const {var} = {{']
    sprites = {n: ["".join(ch[idx[y, x]] if 0 <= y < GH and 0 <= x < GW and keep[y, x] else '.' for x in range(cx0, cx1 + 1))
                   for y in range(cy0, cy1 + 1)] for n, (cx0, cy0, cx1, cy1) in crop.items()}
    if cfg['mode'] == 'tokoh':
        sprites, extra = gerak(sprites, {ch[u]: tuple(pal[u * 3:u * 3 + 3]) for u in used})
        used_x = {c for rows in sprites.values() for r in rows for c in r}
        i = out.index(f'const {var} = {{') - 1
        out[i:i] = ["  '" + c + "': '#%02x%02x%02x'," % v for c, v in extra.items() if c in used_x]
    sprites = {f'{pack}_{n}': rows for n, rows in sprites.items()}   # awalan pack: hindari bentrok nama lama (mis. dimas di paylater)
    for n, rows in sprites.items():
        out.append(f'  {n}: [')
        out += [f"    '{r}'," for r in rows]
        out.append('  ],')
    out += ['};', '(window.KIT_BUILDERS = window.KIT_BUILDERS || []).push(scene => {',
            f'  for (const [k, rows] of Object.entries({var})) pxTexture(scene, k, rows, {var}_PAL);',
            '  const anim = (key, ks, fps) => { ks = ks.filter(k => scene.textures.exists(k)); if (ks.length > 1 && !scene.anims.exists(key)) scene.anims.create({ key, frames: ks.map(key => ({ key })), frameRate: fps, repeat: -1 }); };',
            f"  for (const k of Object.keys({var})) if (k.endsWith('_0') && !k.includes('_lari')) {{",
            "    const n = k.slice(0, -2), t = i => `${n}_${i}`;",
            "    anim(`${n}_walk`, scene.textures.exists(t(3)) ? [t(1), t(3), t(2), t(3)] : [t(1), t(0), t(2), t(0)], 8);",
            "    anim(`${n}_lari`, [t('lari_0'), t('lari_1')], 10);",
            '  }', '});', '']
    js = f'src/sprites-kit-{pack}-{sheet}.js'; open(js, 'w').write('\n'.join(out))
    # pratinjau cek: hasil potong (x3) dengan kotak & nama
    prev = Image.new('RGB', (GW * 3, GH * 3), (40, 40, 52)); dr = ImageDraw.Draw(prev)
    rgb = np.zeros((GH, GW, 3), np.uint8)
    for u in used: rgb[idx == u] = pal[u * 3:u * 3 + 3]
    rgb[~keep] = (40, 40, 52)
    prev.paste(Image.fromarray(rgb).resize((GW * 3, GH * 3), Image.NEAREST))
    for n, (cx0, cy0, cx1, cy1) in crop.items():
        n = f'{pack}_{n}'
        dr.rectangle((cx0 * 3, cy0 * 3, cx1 * 3 + 2, cy1 * 3 + 2), outline=(255, 205, 117)); dr.text((cx0 * 3 + 2, cy0 * 3 + 2), n, fill=(255, 255, 255))
    prev.save(f'assets/{pack}/{sheet}-cek.png')
    print(js, f'{len(crop)} sprite, {len(used)} warna')

def gerak(sp, pal):
    """Animasi dibuat sendiri dari 1 pose: kaki jauh digelapkan bergantian (A/B) + badan naik-turun 1 px.
    _1/_2 = langkah (dari _1 asli), _3 = melintas (dari _0, badan naik 1 px); lari_0/lari_1 dari lari_0 asli."""
    free = [c for c in (string.ascii_uppercase + string.ascii_lowercase + string.digits + '#$%&*+-/:;<=>?@^_~!|') if c not in pal and c != 'K']
    extra, memo = {}, {}
    def dkc(c):                       # warna "kaki jauh": lebih gelap & sedikit kebiruan (huruf palet baru, hanya yang dipakai)
        if c not in memo:
            v = pal[c]; t = (int(v[0] * 0.62), int(v[1] * 0.62), min(255, int(v[2] * 0.7) + 6))
            same = [k for k, w in extra.items() if sum(abs(a - b) for a, b in zip(w, t)) < 18]
            if same: memo[c] = same[0]
            elif free: memo[c] = free.pop(0); extra[memo[c]] = t
            else: memo[c] = min(pal, key=lambda k: sum((a - b) ** 2 for a, b in zip(pal[k], t)))
        return memo[c]
    def runs(r):
        out, s0 = [], None
        for i, c in enumerate(r + '.'):
            if c != '.' and s0 is None: s0 = i
            if c == '.' and s0 is not None: out.append((s0, i - 1)); s0 = None
        return out
    def split(rows):                  # garis pemisah kaki kiri/kanan per baris (bawah -> atas)
        g, lo = {}, int(len(rows) * 0.62)
        for y in range(len(rows) - 1, lo, -1):
            rs = runs(rows[y])
            if len(rs) >= 2:
                gaps = [(rs[i + 1][0] - rs[i][1], (rs[i][1] + rs[i + 1][0]) / 2) for i in range(len(rs) - 1)]
                g[y] = max(gaps)[1]
        if not g: return {}
        top = min(g); last = g[max(g)]
        for y in range(len(rows) - 1, max(0, top - 2) - 1, -1):   # isi baris tanpa celah dari tetangga
            if y in g: last = g[y]
            else: g[y] = last
        return g
    def shade(rows, side):            # side 0 = kaki belakang (kiri), 1 = kaki depan (kanan)
        g = split(rows); out = list(rows)
        for y, gx in g.items():
            out[y] = ''.join(dkc(c) if c != '.' and ((x < gx) == (side == 0)) else c for x, c in enumerate(rows[y]))
        return out
    def bob(rows, up):                # badan naik (up) / turun 1 px, kaki tetap menapak
        g = split(rows); hip = min(g) if g else len(rows) - 6
        if up: return rows[1:hip + 1] + [rows[hip]] + rows[hip + 1:]
        return ['.' * len(rows[0])] + rows[:hip - 1] + rows[hip:]
    who = {n.rsplit('_', 1)[0] for n in sp if n.endswith('_1') and not n.endswith('lari_1')}
    for w in who:
        a = sp[f'{w}_1']
        sp[f'{w}_1'], sp[f'{w}_2'] = shade(bob(a, False), 0), shade(bob(a, False), 1)
        if f'{w}_0' in sp: sp[f'{w}_3'] = bob(sp[f'{w}_0'], True)
        if f'{w}_lari_0' in sp:
            r = sp[f'{w}_lari_0']
            sp[f'{w}_lari_0'], sp[f'{w}_lari_1'] = shade(bob(r, False), 0), shade(bob(r, True), 1)
    return sp, extra

def label(m):
    H, W = m.shape; lab = np.zeros((H, W), int); comps = []
    for y, x in zip(*np.where(m)):
        if lab[y, x]: continue
        n = len(comps) + 1; q = deque([(y, x)]); lab[y, x] = n; pts = []
        while q:
            cy, cx = q.popleft(); pts.append((cy, cx))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    ny, nx = cy + dy, cx + dx
                    if 0 <= ny < H and 0 <= nx < W and m[ny, nx] and not lab[ny, nx]: lab[ny, nx] = n; q.append((ny, nx))
        comps.append(pts)
    return lab, comps

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'acuan': acuan(sys.argv[2] if len(sys.argv) > 2 else 'kota')
    elif cmd == 'potong': potong(sys.argv[2], sys.argv[3], sys.argv[4], int(sys.argv[5]) if len(sys.argv) > 5 else 48)
