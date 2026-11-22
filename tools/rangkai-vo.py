"""Uji coba: merangkai VO kalimat baru dari potongan rekaman Fikri yang sudah ada (tanpa kredit).
Penyelarasan teks-ke-waktu sederhana: jeda (energi rendah) memisahkan frasa bertanda baca,
lalu di dalam frasa batas kata diperkirakan dari jumlah suku kata dan ditempelkan ke titik energi terendah terdekat.
Pakai: python3 rangkai.py corpus.json out_dir "id|kalimat ucapan" ...
"""
import json, re, subprocess, sys, os
import numpy as np

SR = 22050
HOP = int(SR * 0.01)  # 10 ms


def load(path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768


def env(x):
    n = len(x) // HOP
    return np.sqrt(np.mean(x[:n * HOP].reshape(n, HOP) ** 2, axis=1) + 1e-9)


def words_punct(text):
    """[(kata, tanda_baca_setelahnya)]"""
    out = []
    for m in re.finditer(r"([A-Za-z0-9\-']+)([^A-Za-z0-9\-']*)", text.replace('-', ' ')):
        out.append((m.group(1).lower(), m.group(2)))
    return out


def syl(w):
    n = len(re.findall(r'[aiueo]', w)) - len(re.findall(r'(ai|au|oi)$', w))
    return max(1, n)


def align(path, text):
    """-> (audio, [(kata, start_s, end_s)])"""
    x = load(path)
    e = env(x)
    db = 20 * np.log10(e)
    thr = max(db.max() - 32, np.percentile(db, 20) + 4)
    voiced = db > thr
    # segmen bicara, jeda >= 90 ms memisahkan
    segs, i, n = [], 0, len(voiced)
    while i < n:
        if voiced[i]:
            j = i
            while j < n and (voiced[j] or (j + 9 < n and voiced[j:j + 9].any())):
                j += 1
            segs.append([i, j]); i = j
        else:
            i += 1
    wp = words_punct(text)
    # frasa = kumpulan kata sampai tanda baca jeda
    phrases, cur = [], []
    for w, p in wp:
        cur.append(w)
        if re.search(r'[,.:;?!]', p): phrases.append(cur); cur = []
    if cur: phrases.append(cur)
    # cocokkan jumlah segmen dengan jumlah frasa: gabungkan jeda tersempit
    while len(segs) > len(phrases):
        gaps = [segs[k + 1][0] - segs[k][1] for k in range(len(segs) - 1)]
        k = int(np.argmin(gaps)); segs[k][1] = segs[k + 1][1]; del segs[k + 1]
    if len(segs) < len(phrases):  # tidak cukup jeda: perlakukan seluruh klip sebagai satu frasa
        phrases = [[w for ph in phrases for w in ph]]
        segs = [[segs[0][0], segs[-1][1]]]
    res = []
    for ph, (a, b) in zip(phrases, segs):
        weights = [len(w) + 1.5 * syl(w) for w in ph]
        tot = sum(weights); t = a; bounds = [a]
        for wgt in weights[:-1]:
            t += (b - a) * wgt / tot
            lo, hi = int(t - 9), int(t + 9)
            k = lo + int(np.argmin(e[lo:hi])) if hi > lo else int(t)
            bounds.append(k)
        bounds.append(b)
        for w, s, f in zip(ph, bounds[:-1], bounds[1:]):
            res.append((w, s * 0.01, f * 0.01))
    return x, res


def nuclei(seg):
    e = env(seg); k = 5; e = np.convolve(e, np.ones(k) / k, mode='same'); db = 20 * np.log10(e + 1e-9)
    top = db.max(); n, i, last_min = 0, 1, db[0]
    rising = False
    for i in range(1, len(db) - 1):
        if db[i] > db[i - 1] and db[i] >= db[i + 1] and db[i] > top - 18 and db[i] - last_min > 3:
            n += 1; last_min = db[i]
        last_min = min(last_min, db[i])
    return n


def tok(t):
    return re.findall(r"[a-z0-9]+", t.lower().replace('-', ' '))


CACHE = {}


def aligned(corpus, path):
    if path not in CACHE: CACHE[path] = align(path, corpus[path])
    return CACHE[path]


def cut(corpus, path, i, n):
    x, al = aligned(corpus, path)
    s = max(0, al[i][1] - 0.015); f = min(len(x) / SR, al[i + n - 1][2] + 0.03)
    return x[int(s * SR):int(f * SR)].copy(), s, f


def quality(corpus, path, i, ws, edge):
    """biaya potongan (kecil = baik): tepi jeda, durasi per suku kata wajar, jumlah inti suku kata cocok"""
    seg, s, f = cut(corpus, path, i, len(ws))
    exp = sum(syl(w) for w in ws); per = (f - s) / exp
    cost = 10 - 3 * edge
    cost += 20 * max(0, 0.11 - per) / 0.11 * 5 + 20 * max(0, per - 0.24) / 0.24 * 3
    cost += 4 * abs(nuclei(seg) - exp) / exp * 3
    return cost


def plan(corpus, words):
    C = {k: words_punct(v) for k, v in corpus.items()}
    idx = {}
    for k, wp in C.items():
        ws = [w for w, _ in wp]
        for i in range(len(ws)): idx.setdefault(ws[i], []).append((k, i))
    def hits(seq):
        out = []
        for k, i in idx.get(seq[0], []):
            wp = C[k]; ws = [w for w, _ in wp]
            if ws[i:i + len(seq)] == seq:
                edge = (i == 0 or bool(re.search(r'[,.:;?!]', wp[i - 1][1]))) + (i + len(seq) == len(ws) or bool(re.search(r'[,.:;?!]', wp[i + len(seq) - 1][1])))
                out.append((edge, k, i))
        out.sort(key=lambda h: -h[0])
        return out[:10]
    best_span = {}
    def span(a, b, prev=None):
        key = (a, b, prev)
        if key in best_span: return best_span[key]
        cands = [(quality(corpus, k, i, words[a:b], e), k, i) for e, k, i in hits(words[a:b]) if (k, i) != prev]
        best_span[key] = min(cands) if cands else None
        return best_span[key]
    # DP: biaya total minimum (tiap potongan = biaya kualitasnya)
    n = len(words); INF = 1e9
    dp = [(INF, None)] * (n + 1); dp[0] = (0, None)
    for b in range(1, n + 1):
        for a in range(max(0, b - 6), b):
            if dp[a][0] >= INF: continue
            prev = dp[a][1][2] if dp[a][1] else None
            r = span(a, b, prev)
            if r and dp[a][0] + r[0] < dp[b][0]: dp[b] = (dp[a][0] + r[0], (a, r, (r[1], r[2])))
    if dp[n][0] >= INF: raise SystemExit('ada kata yang tidak ada di gudang')
    pieces, b = [], n
    while b > 0:
        a, r, _ = dp[b][1]; pieces.append((words[a:b], r[1], r[2], r[0])); b = a
    return pieces[::-1]


def build(corpus, sent, out):
    words = tok(sent)
    pieces = plan(corpus, words)
    wp = words_punct(sent)
    cache, chunks, log, pos = {}, [], [], 0
    for ws, path, i, cost in pieces:
        seg, s, f = cut(corpus, path, i, len(ws))
        fade = int(0.012 * SR); seg[:fade] *= np.linspace(0, 1, fade); seg[-fade:] *= np.linspace(1, 0, fade)
        # samakan kerasnya potongan
        rms = np.sqrt(np.mean(seg ** 2)) + 1e-9; seg *= 0.08 / rms
        chunks.append(seg)
        pos += len(ws)
        p = wp[pos - 1][1] if pos <= len(wp) else ''
        gap = 0.28 if re.search(r'[.?!]', p) else 0.17 if re.search(r'[,:;]', p) else 0.025
        if pos < len(words): chunks.append(np.zeros(int(gap * SR), np.float32))
        exp = sum(syl(w) for w in ws); got = nuclei(seg)
        flag = '' if cost < 14 else '  <-- PERIKSA'
        log.append(f"  '{' '.join(ws)}'  <- {path} ({s:.2f}-{f:.2f}s) suku kata {exp}/{got} biaya {cost:.0f}{flag}")
    y = np.clip(np.concatenate(chunks), -1, 1)
    pcm = (y * 32767).astype(np.int16).tobytes()
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-', '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '44100', '-b:a', '128k', out], input=pcm, check=True)
    return log


if __name__ == '__main__':
    corpus = json.load(open(sys.argv[1]))
    os.makedirs(sys.argv[2], exist_ok=True)
    for arg in sys.argv[3:]:
        id_, sent = arg.split('|', 1)
        out = os.path.join(sys.argv[2], id_ + '.mp3')
        log = build(corpus, sent, out)
        print(id_, '->', out, f"({len(log)} potongan)")
        print('\n'.join(log))
