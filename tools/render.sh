#!/usr/bin/env bash
# Render video (dengan suara) ke MP4 lewat browser headless.
#
#   tools/render.sh <cerita> long            -> renders/<cerita>_long_16x9.mp4 + _9x16.mp4
#   tools/render.sh <cerita> shorts          -> renders/shorts/<cerita>_short_<bab>.mp4 (9:16, semua bab)
#   tools/render.sh <cerita> <bab-id> [h|v]  -> satu bab saja
#
# Contoh: tools/render.sh paylater long
# Rekaman berjalan real-time (video 4 menit = ±4 menit render).
set -euo pipefail
cd "$(dirname "$0")/.."
story="${1:?nama cerita, mis. paylater}"
what="${2:-long}"
PORT="${PORT:-8123}"; export PORT
TMP="$(mktemp -d)"

# server lokal (dimatikan otomatis di akhir)
if ! curl -s -o /dev/null "http://localhost:$PORT/index.html"; then
  python3 -m http.server "$PORT" >/dev/null 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null || true; rm -rf "$TMP"' EXIT
  sleep 1
else
  trap 'rm -rf "$TMP"' EXIT
fi

mp4() { ffmpeg -v error -y -i "$1" -vf "scale=iw*2:ih*2:flags=neighbor" -c:v libx264 -preset medium -crf 18 -tune animation -pix_fmt yuv420p -r 30 -c:a aac -b:a 160k -movflags +faststart "$2"; echo "-> $2 ($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$2") detik)"; }
rec() { # hash out.mp4 w h
  node tools/record.js "$1" "$TMP/rec.webm" "$3" "$4" | grep -v '^audio'
  mp4 "$TMP/rec.webm" "$2"
}

mkdir -p renders/shorts
case "$what" in
  long)
    rec "$story--h" "renders/${story}_long_16x9.mp4" 1100 700
    rec "$story--v" "renders/${story}_long_9x16.mp4" 600 1100 ;;
  shorts)
    for ch in $(node -e "
      const fs=require('fs');const files=['sprites.js','sprites-city.js','sprites-war.js','sprites-money.js','sprites-politik.js','sprites-map.js','sprites-aturan.js','sprites-kit-kota.js','sprites-faces.js'];
      const src=files.map(f=>fs.readFileSync('src/'+f,'utf8')).join(';\n')+';\n'+fs.readFileSync('stories/$story.js','utf8')+';module.exports=STORY;';
      const m={exports:{}};new Function('module',src)(m);(m.exports.chapters||[]).forEach(c=>console.log(c.id));"); do
      rec "$story--v--$ch" "renders/shorts/${story}_short_${ch}.mp4" 600 1100
    done ;;
  *)
    fmt="${3:-v}"; [ "$fmt" = h ] && size="1100 700" || size="600 1100"
    rec "$story--$fmt--$what" "renders/${story}_${what}_${fmt}.mp4" $size ;;
esac
