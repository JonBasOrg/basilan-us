const { chromium } = require("playwright");
const fs = require("fs");

const OUT = "C:/Hermes-Profiles/projects/basilan-us/screenshots";
fs.mkdirSync(OUT, { recursive: true });

const pages = [
  { name: "home", url: "http://localhost:3000/" },
  { name: "projects", url: "http://localhost:3000/projects" },
  { name: "trading", url: "http://localhost:3000/projects/trading-platform" },
  { name: "games", url: "http://localhost:3000/projects/classic-games" },
  { name: "about", url: "http://localhost:3000/about" },
  { name: "experience", url: "http://localhost:3000/experience" },
  { name: "contact", url: "http://localhost:3000/contact" },
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844, isMobile: true },
};

(async () => {
  const browser = await chromium.launch();
  for (const [vpName, vp] of Object.entries(viewports)) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: !!vp.isMobile,
    });
    const page = await context.newPage();
    for (const p of pages) {
      try {
        await page.goto(p.url, { waitUntil: "networkidle", timeout: 30000 });
        await page.waitForTimeout(900);
        const out = `${OUT}/${vpName}-${p.name}.png`;
        await page.screenshot({ path: out, fullPage: false });
        console.log("ok", vpName, p.name);
      } catch (e) {
        console.log("ERR", vpName, p.name, e.message);
      }
    }
    await context.close();
  }
  await browser.close();
  console.log("DONE");
})();
