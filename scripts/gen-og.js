const { chromium } = require("playwright");
const fs = require("fs");

const OUT = "C:/Hermes-Profiles/projects/basilan-us/public/og";
fs.mkdirSync(OUT, { recursive: true });

const imgs = [
  { file: "home.png", query: "" },
  { file: "trading.png", query: "?title=AI%20Personal%20Trading%20Platform&subtitle=Paper%20trading%20%26%20research&kind=project" },
  { file: "games.png", query: "?title=Classic%20Games%20Collection&subtitle=The%20games%20you%20remember&kind=project" },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const img of imgs) {
    await page.goto("http://localhost:3000/og" + img.query, { waitUntil: "load" });
    await page.screenshot({ path: `${OUT}/${img.file}` });
    console.log("saved", img.file);
  }
  await browser.close();
  console.log("DONE");
  process.exit(0);
})();