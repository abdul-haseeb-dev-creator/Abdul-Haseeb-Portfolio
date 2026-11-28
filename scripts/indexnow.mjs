// Tells Bing and other IndexNow search engines (Bing results also feed several AI search tools)
// site changed, so it is re-crawled within hours instead of weeks.
// Run after a deploy:  npm run indexnow
// The key file public/5e918a1a7b15562d8448896888bd189b.txt must be live on the site for this to work.
const SITE = 'https://abdul-haseeb-portfolio-eta.vercel.app';
const KEY = '5e918a1a7b15562d8448896888bd189b';

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: [`${SITE}/`, `${SITE}/llms.txt`, `${SITE}/sitemap.xml`],
  }),
});
console.log(`IndexNow: ${res.status} ${res.statusText}`);
