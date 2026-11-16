const { chromium } = require('playwright');
(async () => {
  const [out, hash, vw, vh, every] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +vw, height: +vh } });
  const errs = [];
  p.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto(`http://localhost:${process.env.PORT || 8123}/#${hash}`);
  if (await p.isVisible('#btn-start')) await p.click('#btn-start');
  const t0 = Date.now(); let i = 0, last = '';
  while (Date.now() - t0 < 720000) {
    await p.waitForTimeout(+every);
    const st = await p.textContent('#status');
    await p.screenshot({ path: `${out}/f${String(i++).padStart(3,'0')}.png` });
    if (st !== last) { console.log(Math.round((Date.now()-t0)/1000)+'s', st); last = st; }
    if (st.includes('Selesai')) break;
  }
  console.log('errors:', errs.filter(e => !e.includes('GL Driver')));
  await b.close();
})();
