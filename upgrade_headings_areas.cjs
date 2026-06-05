const fs = require('fs');

const replacements = [
  {
    file: 'src/pages/ServiceAreasPage.tsx',
    regex: /<h2 className="text-2xl font-bold text-charcoal-900">Abohar City<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-3">
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">HEADQUARTERS</span>
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">Abohar City</h2>`
  },
  {
    file: 'src/pages/ServiceAreasPage.tsx',
    regex: /<h2 className="text-2xl font-bold text-charcoal-900">Nearby Villages<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-3">
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">EXPANDED REACH</span>
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">Nearby Villages</h2>`
  },
  {
    file: 'src/pages/ServiceAreasPage.tsx',
    regex: /<h2 className="text-2xl font-bold text-charcoal-900">Nearby Towns<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-3">
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">REGIONAL PRESENCE</span>
                <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">Nearby Towns</h2>`
  }
];

replacements.forEach(({file, regex, replace}) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(regex, replace);
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log("Service Areas Headings upgraded.");
