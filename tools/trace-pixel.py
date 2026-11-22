"""Tracing PNG (Nano Banana) -> pixel art bersih ala mesin:
kecilkan ke grid, warna dipetakan ke palet terbatas, bintik dibuang (mode filter), garis tepi gelap 1 px untuk sprite.
Pakai: python3 tools/trace-pixel.py <masuk.png> <keluar.png> <lebar> <tinggi> [sprite|latar] [jumlah-warna]"""
import sys
from PIL import Image, ImageFilter
src, dst, w, h = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
kind = sys.argv[5] if len(sys.argv) > 5 else 'latar'
ncol = int(sys.argv[6]) if len(sys.argv) > 6 else (24 if kind == 'latar' else 14)
im = Image.open(src).convert('RGBA')
rgb = im.convert('RGB').filter(ImageFilter.MedianFilter(3))        # buang noise JPG sebelum dikecilkan
small = rgb.resize((w, h), Image.BOX)
q = small.quantize(ncol, method=Image.Quantize.MAXCOVERAGE, dither=Image.Dither.NONE)
q = q.filter(ImageFilter.ModeFilter(3)) if kind == 'latar' else q    # rapikan bidang warna latar
out = q.convert('RGBA')
if kind == 'sprite':
    a = im.split()[3].resize((w, h), Image.BOX).point(lambda v: 255 if v > 120 else 0)
    out.putalpha(a)
    px, A = out.load(), a.load()
    edge = [(x, y) for y in range(h) for x in range(w) if A[x, y] and any(
        not (0 <= x + dx < w and 0 <= y + dy < h) or not A[x + dx, y + dy] for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)))]
    for x, y in edge:                                                 # tepi luar digelapkan -> garis hitam khas mesin
        r, g, b, _ = px[x, y]; px[x, y] = (int(r * 0.35) + 10, int(g * 0.35) + 10, int(b * 0.4) + 18, 255)
out.save(dst)
