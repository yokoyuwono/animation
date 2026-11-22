"""Rekonstruksi lembar kit Nano Banana (benda terpisah di latar magenta) menjadi KODE sprite piksel.
  python3 tools/kit-ke-kode.py <kit.png|jpg> <prefix> [lebar-grid=480] [warna=64] [nama1,nama2,...] [--box nama=x0,y0,x1,y1+x0,y0,x1,y1 ...]
  nama "-" = buang benda itu. --box = ambil benda dari kotak (koordinat grid) bila benda menempel satu sama lain.
Hasil: src/sprites-kit-<prefix>.js (palet huruf + baris teks per benda, seperti sprite lama) dan
       assets/kit/<prefix>-indeks.png (pratinjau bernomor untuk memberi nama).
Gambar diperkecil ke grid aslinya (tiap blok piksel -> 1 piksel), magenta -> transparan,
benda dipisah otomatis (komponen terhubung), warna disatukan ke satu palet."""
import sys, string
from PIL import Image, ImageDraw
import numpy as np
from collections import deque

args = [x for x in sys.argv[1:] if not x.startswith('--box')]
boxes = {}
for i, x in enumerate(sys.argv):
    if x == '--box':
        nm, spec = sys.argv[i + 1].split('=')
        boxes[nm] = [tuple(int(v) for v in r.split(',')) for r in spec.split('+')]
args = [x for x in args if '=' not in x or ',' in x and False]
src, prefix = args[0], args[1]
GW = int(args[2]) if len(args) > 2 else 480
NC = int(args[3]) if len(args) > 3 else 64
names = args[4].split(',') if len(args) > 4 else []

im = Image.open(src).convert('RGB')
gh = round(im.height * GW / im.width)
small = im.resize((GW, gh), Image.BOX)
a = np.asarray(small).astype(int)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
# magenta & rona ungu di tepinya = latar
mag = ((r > 140) & (b > 110) & (g < 120) & (r - g > 70) & (b - g > 40)) | ((r > 80) & (r - g > 45) & (b - g > 30) & (b > 0.55 * r))
solid = ~mag

# komponen terhubung (8 arah)
H, W = solid.shape
lab = np.zeros((H, W), int); comps = []
for y in range(H):
    for x in range(W):
        if solid[y, x] and not lab[y, x]:
            n = len(comps) + 1; q = deque([(y, x)]); lab[y, x] = n; pts = []
            while q:
                cy, cx = q.popleft(); pts.append((cy, cx))
                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        ny, nx = cy + dy, cx + dx
                        if 0 <= ny < H and 0 <= nx < W and solid[ny, nx] and not lab[ny, nx]:
                            lab[ny, nx] = n; q.append((ny, nx))
            comps.append(pts)
comps = [(i + 1, p) for i, p in enumerate(comps) if len(p) >= 40]
# urut: baris atas dulu (per 40 px), lalu kiri ke kanan
def key(c):
    ys = [p[0] for p in c[1]]; xs = [p[1] for p in c[1]]
    return (min(ys) // 60, min(xs))
comps.sort(key=key)

# palet bersama
opaque = small.copy(); arr = np.asarray(opaque).copy(); arr[mag] = 0
pal_img = Image.fromarray(arr.astype(np.uint8)).quantize(NC, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
idx = np.asarray(pal_img); pal = pal_img.getpalette()[:NC * 3]
chars = (string.ascii_uppercase + string.ascii_lowercase + string.digits + '#$%&*+-/:;<=>?@^_~!|').replace('K', '')
colmap = {i: '#%02x%02x%02x' % tuple(pal[i * 3:i * 3 + 3]) for i in range(NC)}

sprites = []
for k, (n, pts) in enumerate(comps):
    ys = [p[0] for p in pts]; xs = [p[1] for p in pts]
    y0, y1, x0, x1 = min(ys), max(ys), min(xs), max(xs)
    rows = []
    for y in range(y0, y1 + 1):
        rows.append(''.join(chars[idx[y, x]] if lab[y, x] == n else '.' for x in range(x0, x1 + 1)))
    nm = names[k] if k < len(names) and names[k] else ('-' if names else f'{k + 1}')
    if nm == '-': continue
    sprites.append((f'{prefix}_{nm}', rows, (x0, y0, x1, y1)))
for nm, rects in boxes.items():   # benda dari kotak manual
    inbox = np.zeros((H, W), bool)
    for (x0, y0, x1, y1) in rects: inbox[y0:y1 + 1, x0:x1 + 1] = True
    m = inbox & solid; ys, xs = np.where(m)
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    rows = [''.join(chars[idx[y, x]] if m[y, x] else '.' for x in range(x0, x1 + 1)) for y in range(y0, y1 + 1)]
    sprites.append((f'{prefix}_{nm}', rows, (x0, y0, x1, y1)))

# tulis kode
out = [f'// KIT "{prefix}" — direkonstruksi otomatis dari {src} oleh tools/kit-ke-kode.py',
       f'// Grid {GW}x{gh}: 1 huruf = 1 piksel. Pakai dengan skala 0.4 (192/480) agar sepadan dengan tokoh 65 px.',
       f'const KIT_{prefix.upper()}_PAL = {{']
out += [f"  '{chars[i]}': '{colmap[i]}'," for i in range(NC)]
out += ['};', f'const KIT_{prefix.upper()} = {{']
for nm, rows, _ in sprites:
    out.append(f'  {nm}: [')
    out += [f"    '{r}'," for r in rows]
    out.append('  ],')
out += ['};', f'function buildKit{prefix.capitalize()}Textures(scene) {{',
        f'  for (const [k, rows] of Object.entries(KIT_{prefix.upper()})) pxTexture(scene, k, rows, KIT_{prefix.upper()}_PAL);', '}', '']
open(f'src/sprites-kit-{prefix}.js', 'w').write('\n'.join(out))

# pratinjau bernomor
prev = Image.new('RGB', (GW * 3, gh * 3), (40, 40, 52)); d = ImageDraw.Draw(prev)
rgb = np.zeros((H, W, 3), np.uint8)
for i in range(NC): rgb[idx == i] = pal[i * 3:i * 3 + 3]
rgb[~solid] = (40, 40, 52)
prev.paste(Image.fromarray(rgb).resize((GW * 3, gh * 3), Image.NEAREST))
for k, (nm, rows, (x0, y0, x1, y1)) in enumerate(sprites):
    d.rectangle((x0 * 3, y0 * 3, x1 * 3 + 2, y1 * 3 + 2), outline=(255, 205, 117))
    d.text((x0 * 3 + 2, y0 * 3 + 2), f'{k + 1} {nm}', fill=(255, 255, 255))
prev.save(f'assets/kit/{prefix}-indeks.png')
for k, (nm, rows, bb) in enumerate(sprites): print(k + 1, nm, f'{len(rows[0])}x{len(rows)}', bb)
