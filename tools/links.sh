#!/usr/bin/env bash
# Tulis DOWNLOADS.md: daftar link unduhan semua hasil render (per topik) dari GitHub.
#   tools/links.sh            (dipanggil otomatis oleh produce.sh)
set -euo pipefail
cd "$(dirname "$0")/.."
BASE="https://github.com/yokoyuwono/animation/raw/ccr-0cfe3368-giuo4e"
FILES=$(git ls-files renders; ls renders/*.mp4 renders/*.png renders/*.md renders/shorts/*.mp4 2>/dev/null) 
FILES=$(echo "$FILES" | grep -v '_paket.zip' | sort -u)
TOPICS=$(echo "$FILES" | sed -E 's#^renders/(shorts/)?(thumbnail_)?##; s#_(long|short|caption|varian|9x16|16x9|bab|uji).*##' | sort -u)
{
  echo "# Link unduhan hasil render"
  echo
  echo "Tekan link → file langsung terunduh. (Perlu login GitHub jika repo privat.)"
  echo "Folder semua file: https://github.com/yokoyuwono/animation/tree/ccr-0cfe3368-giuo4e/renders"
  for t in $TOPICS; do
    echo; echo "## $t"
    for kind in "Video panjang:_long_" "Short:_short_" "Bab/uji:_bab[0-9]|_uji" "Thumbnail:thumbnail_" "Caption & hashtag:_caption"; do
      label="${kind%%:*}"; pat="${kind#*:}"
      list=$(echo "$FILES" | grep -E "/(thumbnail_)?${t}[_.]" | grep -E -- "$pat" || true)
      [ -z "$list" ] && continue
      echo; echo "**$label**"
      for f in $list; do echo "- [$(basename "$f")]($BASE/$f)"; done
    done
  done
} > DOWNLOADS.md
echo "-> DOWNLOADS.md"
