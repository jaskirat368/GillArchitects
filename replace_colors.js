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
  content = content.replace(/bg-stone-50/g, 'bg-pearl-50')
                   .replace(/bg-stone-100/g, 'bg-pearl-100')
                   .replace(/bg-stone-200/g, 'bg-pearl-200')
                   .replace(/border-stone-50/g, 'border-pearl-50')
                   .replace(/border-stone-100/g, 'border-pearl-100')
                   .replace(/border-stone-200/g, 'border-pearl-200')
                   .replace(/hover:bg-stone-50/g, 'hover:bg-pearl-50')
                   .replace(/hover:bg-stone-100/g, 'hover:bg-pearl-100')
                   .replace(/hover:bg-stone-200/g, 'hover:bg-pearl-200')
                   .replace(/selection:bg-stone-200/g, 'selection:bg-pearl-200')
                   .replace(/stone-/g, 'charcoal-');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced successfully.');
