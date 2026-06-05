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
  
  // Make buttons sleeker
  content = content.replace(/hover:bg-pearl-100 transition-colors/g, 'hover:bg-pearl-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg')
                   .replace(/hover:bg-white\/10 transition-colors/g, 'hover:bg-white/10 transition-all duration-300 hover:-translate-y-1')
                   .replace(/hover:bg-charcoal-900 hover:text-white transition-all/g, 'hover:bg-charcoal-900 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl')
                   .replace(/hover:bg-charcoal-800 transition-all shadow-lg hover:shadow-xl/g, 'hover:bg-charcoal-800 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-charcoal-900/20')
                   .replace(/hover:bg-pearl-50 transition-all shadow-sm hover:shadow-md/g, 'hover:bg-pearl-50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:ring-4 hover:ring-charcoal-900/10')
                   .replace(/hover:bg-charcoal-800 transition-all/g, 'hover:bg-charcoal-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced successfully.');
