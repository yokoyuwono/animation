#!/usr/bin/env bash
# Produksi lengkap SATU topik ke file siap unggah:
#   tools/produce.sh <topik>
# Hasil: renders/<topik>_long_16x9.mp4, _long_9x16.mp4, renders/shorts/<topik>_short_<bab>.mp4,
#        dan thumbnail (jika ada tools/thumbnail-<topik>.html: varian #a dan #b).
set -euo pipefail
cd "$(dirname "$0")/.."
t="${1:?nama topik, mis. paylater}"
[ -f "stories/$t.js" ] || { echo "Topik tidak ditemukan: stories/$t.js"; exit 1; }
tools/render.sh "$t" long
tools/render.sh "$t" shorts
if [ -f "tools/thumbnail-$t.html" ]; then
  PORT="${PORT:-8123}"
  python3 -m http.server "$PORT" >/dev/null 2>&1 & S=$!; trap 'kill $S 2>/dev/null || true' EXIT; sleep 1
  for v in a b; do node tools/thumbnail.js "tools/thumbnail-$t.html" "$v" "renders/thumbnail_${t}_varian-$v.png"; done
fi
echo "SELESAI: $t"
