#!/usr/bin/env bash
# Stamp the stylesheet link with the stylesheet's own fingerprint.
#
# Why this exists: she looked at the closed front door and saw a giant logo and
# an unstyled line, because her browser had yesterday's style.css and the address
# had not changed. A browser is right to cache a file whose name never changes -
# so the name changes here, every time the file does.
#
# Run before committing anything that touches style.css.
set -euo pipefail
cd "$(dirname "$0")"
HASH=$(shasum -a 256 style.css | cut -c1-8)
for f in *.html; do
  perl -pi -e "s{href=\"/style\.css(\?v=[a-f0-9]+)?\"}{href=\"/style.css?v=$HASH\"}" "$f"
done
echo "style.css stamped $HASH"
