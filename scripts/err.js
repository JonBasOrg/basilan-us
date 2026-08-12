const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext()).newPage();
  const errs = [];
  p.on("console", (m) => { if (m.type()==="error") errs.push(m.text()); });
  p.on("pageerror", (e) => errs.push("PAGEERR: "+e.message));
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" }).catch(()=>{});
  await p.waitForTimeout(800);
  console.log(JSON.stringify([...new Set(errs)], null, 2));
  await b.close();
})();
