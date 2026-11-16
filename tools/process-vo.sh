#!/usr/bin/env bash
# Memproses voice over mentah dari ElevenLabs:
#   1. potong hening di awal & akhir
#   2. percepat (default 1.2x) tanpa mengubah nada
#   3. samakan kerasnya suara (loudnorm, -16 LUFS)
#   4. tulis manifest.json berisi durasi tiap file (dipakai mesin animasi)
#
# Pakai: tools/process-vo.sh audio/perang-dunia [kecepatan]
set -euo pipefail
dir="${1:?folder audio, mis. audio/perang-dunia}"
speed="${2:-1.2}"

for raw in "$dir"/raw/*.mp3; do
  id="$(basename "$raw" .mp3)"
  ffmpeg -v error -y -i "$raw" -af "\
silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,\
areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,\
atempo=${speed},loudnorm=I=-16:TP=-1.5:LRA=11" -ar 44100 -ac 1 -b:a 128k "$dir/$id.mp3"
done

# manifest: { "b4-01": 3.12, ... }
{
  echo "{"
  first=1
  for f in "$dir"/*.mp3; do
    id="$(basename "$f" .mp3)"
    d="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")"
    [ $first -eq 1 ] || echo ","
    printf '  "%s": %.3f' "$id" "$d"
    first=0
  done
  echo
  echo "}"
} > "$dir/manifest.json"
cat "$dir/manifest.json"
