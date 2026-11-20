"""Potong lembar sprite Nano Banana (latar magenta) jadi PNG transparan per frame.
Pakai: python3 tools/potong-sprite.py <gambar> <folder-keluar> <nama baris1,..> [<nama baris2,..> ...]
Tiap baris lembar = deretan kotak magenta; tiap kotak = satu tokoh/benda; frame dipisah oleh kolom kosong."""
import sys
from PIL import Image
import numpy as np

def runs(v, minlen):
    out, s = [], None
    for i, x in enumerate(list(v) + [False]):
        if x and s is None: s = i
        if not x and s is not None:
            if i - s >= minlen: out.append((s, i))
            s = None
    return out

def merge(rs, gap):
    m = []
    for r in rs:
        if m and r[0] - m[-1][1] < gap: m[-1] = (m[-1][0], r[1])
        else: m.append(r)
    return m

src, outdir, rows = sys.argv[1], sys.argv[2], [r.split(',') for r in sys.argv[3:]]
a = np.asarray(Image.open(src).convert('RGB')).astype(int)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
mag = (r > 150) & (b > 150) & (g < 130) & (abs(r - b) < 90)
bands = runs(mag.mean(1) > 0.05, 40)
for bi, (y0, y1) in enumerate(bands):
    names = rows[bi] if bi < len(rows) else []
    edge = mag[y0 + 2:y0 + 7].any(0) | mag[y1 - 7:y1 - 2].any(0)   # tepi atas/bawah kotak
    tiles = [t for t in merge(runs(edge, 1), 18) if t[1] - t[0] > 100]
    for ti, (x0, x1) in enumerate(tiles):
        nm = names[ti] if ti < len(names) else f'x{bi}_{ti}'
        if nm == '-': continue
        ty = np.where(mag[y0:y1, x0:x1].mean(1) > 0.05)[0]   # tinggi kotak sendiri (kotak bisa beda tinggi)
        T, M = a[y0 + ty[0]:y0 + ty[-1] + 1, x0:x1], mag[y0 + ty[0]:y0 + ty[-1] + 1, x0:x1]
        frames = merge(runs((~M).mean(0) > 0.01, 4), max(4, (x1 - x0) // 40))
        frames = [f for f in frames if f[1] - f[0] > (x1 - x0) // 12]
        for fi, (c0, c1) in enumerate(frames):
            sub, m = T[:, c0:c1], M[:, c0:c1]
            ys = np.where((~m).mean(1) > 0.01)[0]
            sub, m = sub[ys[0]:ys[-1] + 1], m[ys[0]:ys[-1] + 1]
            Image.fromarray(np.dstack([sub, np.where(m, 0, 255)]).astype(np.uint8), 'RGBA').save(f'{outdir}/{nm}_{fi}.png')
        print(nm, len(frames), 'frame')
