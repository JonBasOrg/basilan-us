const { chromium } = require("playwright");
const routes = ["/","/projects","/projects/trading-platform","/projects/classic-games","/about","/experience","/contact","/nope"];
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  let totalErr = 0;
  for (const r of routes) {
    const errs = [];
    page.on("console", m => { if (m.type()==="error") errs.push(m.text()); });
    await page.goto("http://localhost:8088"+r, { waitUntil:"load", timeout:20000 }).catch(()=>{});
    await page.waitForTimeout(400);
    const ow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth+2).catch(()=>null);
    console.log(r.padEnd(32), "overflow:"+(ow?"YES":"no"), "consoleErr:"+errs.length);
    totalErr += errs.length;
  }
  await b.close();
  console.log("TOTAL="+totalErr);
  process.exit(0);
})();
