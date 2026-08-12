const { chromium } = require("playwright");

const routes = [
  "http://localhost:3000/",
  "http://localhost:3000/projects",
  "http://localhost:3000/projects/trading-platform",
  "http://localhost:3000/projects/classic-games",
  "http://localhost:3000/about",
  "http://localhost:3000/experience",
  "http://localhost:3000/contact",
  "http://localhost:3000/nope",
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  let totalErrors = 0;
  for (const url of routes) {
    const errors = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
    await page.goto(url, { waitUntil: "load", timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(500);
    const into = await page.evaluate(() => {
      const d = document.documentElement;
      return { docWidth: d.scrollWidth, winWidth: window.innerWidth };
    }).catch(() => ({ docWidth: 0, winWidth: 0 }));
    const overflow = into.docWidth > into.winWidth + 2;
    const filtered = errors.filter((e) => !/favicon|apple-touch/i.test(e));
    console.log(
      `${url.replace("http://localhost:3000","") || "/"}`.padEnd(32) +
      ` overflow:${overflow ? "YES" : "no"} consoleErr:${filtered.length}`
    );
    totalErrors += filtered.length;
  }
  await browser.close();
  console.log("TOTAL_CONSOLE_ERRORS=" + totalErrors);
  process.exit(0);
})();