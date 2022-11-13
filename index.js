const puppeteer = require('puppeteer');

const loadFirstPage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.betrybe.com/');
  await page.screenshot({ path: 'print.png' });
  await browser.close();
};
loadFirstPage();
