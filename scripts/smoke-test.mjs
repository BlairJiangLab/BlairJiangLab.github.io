// Comprehensive smoke test for all routes
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const routes = [
  '/',
  '/work',
  '/work/atlas',
  '/work/currents',
  '/work/field-notes',
  '/blog',
  '/blog/building-tools-that-disappear',
  '/blog/on-reading-long-form',
  '/blog/why-i-started-writing-again',
  '/about',
  '/tags/design',
  '/this-does-not-exist',
];

const allErrors = [];
const allLogs = [];

for (const route of routes) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('requestfailed', (req) => {
    const url = req.url();
    // Ignore failed font requests from Google (network may block them in tests)
    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) return;
    errors.push(`requestfailed: ${url} - ${req.failure()?.errorText}`);
  });

  await page.goto(`http://localhost:4173${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 }).catch(e => errors.push('navigation: ' + e.message));
  await new Promise((r) => setTimeout(r, 1500));

  const info = await page.evaluate(() => {
    const root = document.getElementById('root');
    return {
      length: root?.innerHTML?.length || 0,
      hasH1: !!document.querySelector('h1'),
      h1Text: document.querySelector('h1')?.textContent || '',
      bodyText: document.body.innerText.substring(0, 150),
    };
  });

  const status = info.length > 100 ? '✓' : '✗';
  console.log(`${status} ${route.padEnd(50)} len=${info.length}, h1="${info.h1Text.substring(0, 40)}"`);

  if (errors.length > 0) {
    console.log(`  errors:`);
    errors.forEach(e => console.log(`    - ${e}`));
    allErrors.push({ route, errors });
  }
  allLogs.push({ route, info });

  await page.close();
}

console.log(`\n--- Summary ---`);
console.log(`Routes tested: ${routes.length}`);
console.log(`Routes with errors: ${allErrors.length}`);
if (allErrors.length === 0) {
  console.log('All routes render without errors! 🎉');
}

await browser.close();
