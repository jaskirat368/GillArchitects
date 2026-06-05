const urls = [
  'https://ibb.co/SXfPMhSj',
  'https://ibb.co/d0G27fBW',
  'https://ibb.co/MySGHgvZ',
  'https://ibb.co/v489pLLW',
  'https://ibb.co/wryLpH38'
];

async function getUrls() {
  for (const url of urls) {
    const r = await fetch(url);
    const t = await r.text();
    const match = t.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log(url, '->', match ? match[0] : 'Not found');
  }
}
getUrls();
