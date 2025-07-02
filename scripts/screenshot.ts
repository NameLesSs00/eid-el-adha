import puppeteer from 'puppeteer';
import fetch from 'node-fetch'; 

const URL = 'https://eid-el-adha.vercel.app/';

async function waitForSite(url: string, timeout = 90000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise(r => setTimeout(r, 3000)); 
  }
  throw new Error('Site did not become available in time');
}

async function takeScreenshot() {
  console.log(`Waiting for site to be available: ${URL}`);
  await waitForSite(URL);
  console.log('Site is available, starting Puppeteer...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 0 });

  await page.setViewport({ width: 1280, height: 1240 });

  await page.screenshot({ path: 'public/eid-screenshot.png', fullPage: true });

  console.log(`✅ Screenshot saved for ${URL}`);

  await browser.close();
}

takeScreenshot().catch((err) => {
  console.error('❌ Failed to take screenshot:', err);
  process.exit(1);
});
