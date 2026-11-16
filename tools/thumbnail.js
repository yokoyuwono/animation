// Render halaman thumbnail ke PNG.
//   node tools/thumbnail.js tools/thumbnail2.html a renders/thumbnail_x.png [1280 720]
// (server lokal harus jalan: python3 -m http.server 8123)
const { chromium } = require('playwright');
(async () => {
  const [page, hash, out, w = 1280, h = 720] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(`http://localhost:${process.env.PORT || 8123}/${page}#${hash}`);
  await p.waitForFunction(() => window.READY === true, null, { timeout: 15000 });
  await p.locator('canvas').screenshot({ path: out });
  console.log(out, errs.length ? errs : 'ok');
  await b.close();
})();
