import puppeteer from 'puppeteer-core';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE = 'http://localhost:5173';

const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox'] });
const errors = [];

async function open(path, wait = 4200) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => errors.push(`[${path}] PAGEERROR: ` + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${path}] CONSOLE: ` + m.text()); });
  await page.goto(BASE + path, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise((r) => setTimeout(r, wait));
  return page;
}

// 1) landing hero
let page = await open('/', 5200);
const home = await page.evaluate(() => ({
  hasAurora: !!document.querySelector('.aurora'),
  kickerGone: !document.querySelector('.hero-kicker'),
  h1: document.querySelector('h1')?.innerText,
  serviceCards: document.querySelectorAll('.service-card').length,
}));
await page.screenshot({ path: 'scripts/v-hero.png' });
// open a service modal
await page.evaluate(() => document.querySelectorAll('.service-card')[0].click());
await new Promise((r) => setTimeout(r, 700));
const modalOpen = await page.evaluate(() => ({
  modal: !!document.querySelector('.svc-modal'),
  items: document.querySelectorAll('.svc-item').length,
  title: document.querySelector('.svc-head h3')?.innerText,
}));
await page.screenshot({ path: 'scripts/v-modal.png' });
await page.close();

// 2) studio
page = await open('/studio', 3500);
const studio = await page.evaluate(() => ({
  hasStudio: !!document.querySelector('.studio'),
  prompts: document.querySelectorAll('.st-prompt').length,
  feedbackCards: document.querySelectorAll('.st-fb-card').length,
  caps: document.querySelectorAll('.st-cap').length,
}));
await page.screenshot({ path: 'scripts/v-studio.png' });
// send a chat message
await page.evaluate(() => {
  const ta = document.querySelector('.st-input');
  const set = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
  set.call(ta, 'I need a UGC ad video for my brand');
  ta.dispatchEvent(new Event('input', { bubbles: true }));
});
await new Promise((r) => setTimeout(r, 200));
await page.evaluate(() => document.querySelector('.st-send').click());
await new Promise((r) => setTimeout(r, 1400));
const chat = await page.evaluate(() => ({
  msgs: document.querySelectorAll('.st-msg').length,
  assistantReply: document.querySelector('.st-msg.assistant .st-bubble')?.innerText?.slice(0, 60),
}));
await page.screenshot({ path: 'scripts/v-studio-chat.png' });
await page.close();

console.log('HOME', JSON.stringify(home));
console.log('MODAL', JSON.stringify(modalOpen));
console.log('STUDIO', JSON.stringify(studio));
console.log('CHAT', JSON.stringify(chat));
console.log('ERRORS (' + errors.length + ')');
errors.slice(0, 10).forEach((e) => console.log(e));
await browser.close();
