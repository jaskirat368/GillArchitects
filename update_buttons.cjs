const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    if (file.includes('node_modules')) return;
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find lines or blocks that look like buttons (contain px-, py- and rounded-sm and text-center or inline-block/flex or similar context)
  // To be safe, we can just do a pass and replace specific button classes
  content = content.replace(/px-8 py-4 rounded-sm/g, 'px-8 py-4 rounded-full')
                   .replace(/px-8 py-3 rounded-sm/g, 'px-8 py-3 rounded-full')
                   .replace(/px-6 py-3 rounded-sm/g, 'px-6 py-3 rounded-full')
                   .replace(/px-5 py-2\.5 text-sm font-medium rounded-sm/g, 'px-5 py-2.5 text-sm font-medium rounded-full')
                   .replace(/px-8 py-4 rounded-sm/g, 'px-8 py-4 rounded-full')
                   .replace(/py-3 rounded-sm/g, 'py-3 rounded-full') // mostly for full width buttons
                   .replace(/py-4 rounded-sm/g, 'py-4 rounded-full')
                   .replace(/px-4 py-3 rounded-sm/g, 'px-4 py-3 rounded-2xl'); // inputs
                   
  // Cards and images should be more modern too:
  content = content.replace(/rounded-sm/g, 'rounded-2xl');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced successfully.');
