const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5174');
  await page.setViewport({ width: 1440, height: 900 });
  await page.pdf({
    path: 'preview.pdf',
    format: 'A4',
    printBackground: true
  });
  await browser.close();
  console.log('✅ preview.pdf saved!');
})();