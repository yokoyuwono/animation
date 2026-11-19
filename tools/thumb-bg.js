// Latar thumbnail ilustrasi: tangkapan peta video tanpa teks/label.  node tools/thumb-bg.js <hash> tools/thumb-bg/<topik>.png <ms>
// latar thumbnail: tangkapan peta dari video tanpa teks/label UI
const { chromium } = require('playwright');
(async () => {
  const [hash, out, ms] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
  await p.goto('http://localhost:8123/#' + hash); if (await p.isVisible('#btn-start')) await p.click('#btn-start');
  await p.waitForTimeout(+ms);
  await p.evaluate(() => { const hide = o => { if (o.type === 'Text' || o.depth >= 100) { o.setVisible(false); o.setAlpha(0); } if (o.list) o.list.forEach(hide); }; game.scene.scenes.forEach(sc => sc.children.list.forEach(hide)); });
  await p.waitForTimeout(80);
  await p.evaluate(() => game.loop.sleep());
  await (await p.$('canvas')).screenshot({ path: out });
  await b.close();
})();
