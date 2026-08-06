// Use puppeteer-core + system Chrome to debug the page
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

const consoleLogs = [];
const errors = [];
page.on('console', (msg) => {
  consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
});
page.on('pageerror', (e) => {
  errors.push('pageerror: ' + (e.stack || e.message));
});
page.on('requestfailed', (req) => {
  errors.push(`requestfailed: ${req.url()} - ${req.failure()?.errorText}`);
});

await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded', timeout: 10000 }).catch(e => errors.push('navigation: ' + e.message));

await new Promise((r) => setTimeout(r, 3000));

const rootHTML = await page.evaluate(() => {
  const root = document.getElementById('root');
  return {
    html: root?.innerHTML?.substring(0, 800) || '',
    length: root?.innerHTML?.length || 0,
    bodyText: document.body.innerText.substring(0, 400),
  };
});

console.log('--- Root content ---');
console.log('Length:', rootHTML.length);
console.log('HTML:', rootHTML.html);
console.log('Body text:', rootHTML.bodyText);

console.log('--- Console logs ---');
consoleLogs.forEach(l => console.log(l));
console.log('--- Errors ---');
errors.forEach(e => console.log(e));

await browser.close();
