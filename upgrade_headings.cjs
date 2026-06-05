const fs = require('fs');

const replacements = [
  {
    file: 'src/pages/AboutPage.tsx',
    regex: /<h2 className="text-3xl font-bold text-charcoal-900 mb-6">Our Firm<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">THE STORY</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Our Firm</h2>`
  },
  {
    file: 'src/pages/AboutPage.tsx',
    regex: /<h2 className="text-3xl font-bold text-charcoal-900 mb-4">Our Core Values<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
              <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">GUIDING PRINCIPLES</span>
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-4 tracking-tight">Our Core Values</h2>`
  },
  {
    file: 'src/pages/ContactPage.tsx',
    regex: /<h2 className="text-3xl font-bold text-charcoal-900 mb-8">Get In Touch<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">REACH OUT</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-8 tracking-tight">Get In Touch</h2>`
  },
  {
    file: 'src/pages/ContactPage.tsx',
    regex: /<h2 className="text-2xl font-bold text-charcoal-900 mb-6">Send us a Message<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">DROP A LINE</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Send us a Message</h2>`
  },
  {
    file: 'src/pages/ServiceDetailPage.tsx',
    regex: /<h2 className="text-3xl font-bold text-charcoal-900 mb-6">Service Overview<\/h2>/g,
    replace: `<div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">THE DETAILS</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Service Overview</h2>`
  },
  {
    file: 'src/pages/ServicesPage.tsx',
    regex: /<h2 className="text-3xl font-bold text-charcoal-900 mb-4">{service.title}<\/h2>/g,
    replace: `<h2 className="font-display text-3xl md:text-4xl font-extrabold text-charcoal-900 mb-4 tracking-tight">{service.title}</h2>`
  }
];

replacements.forEach(({file, regex, replace}) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(regex, replace);
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log("Headings upgraded.");
