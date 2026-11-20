// Buka satu bab, ketuk "Putar", tekan Rekam, simpan video hasil unduhan.
const { chromium } = require('playwright');
(async () => {
  const [hash, out, w, h] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
  const ctx = await b.newContext({ viewport: { width: +w || 1100, height: +h || 700 }, acceptDownloads: true });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(`http://localhost:${process.env.PORT || 8123}/#${hash}`);
  if (await p.isVisible('#btn-start')) await p.click('#btn-start');   // cerita tanpa suara tidak punya tombol ini
  await p.waitForFunction(() => window.game && game.scene.getScene('movie') && game.scene.getScene('movie').run >= 1);
  await p.waitForTimeout(1500);
  const info = await p.evaluate(() => { const s = game.scene.getScene('movie'); return { vo: Object.keys(s.voDur || {}).length, loaded: Object.keys(s.voDur || {}).filter(k => s.cache.audio.exists('vo-' + k)).length, ctx: game.sound.context && game.sound.context.state }; });
  console.log('audio:', JSON.stringify(info));
  const t0 = Date.now();
  const dl = p.waitForEvent('download', { timeout: 900000 });
  await p.click('#btn-rec');
  const d = await dl;
  await d.saveAs(out);
  console.log('rekaman selesai dalam', Math.round((Date.now() - t0) / 1000), 'detik ->', out);
  console.log('errors:', errs);
  await b.close();
})();
