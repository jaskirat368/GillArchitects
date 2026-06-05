const fs = require('fs');

const pages = [
  { file: 'src/pages/AboutPage.tsx', subtitle: 'DISCOVER OUR FIRM' },
  { file: 'src/pages/BlogPage.tsx', subtitle: 'LATEST INSIGHTS' },
  { file: 'src/pages/ContactPage.tsx', subtitle: 'GET IN TOUCH' },
  { file: 'src/pages/ProjectsPage.tsx', subtitle: 'OUR PORTFOLIO' },
  { file: 'src/pages/ServiceAreasPage.tsx', subtitle: 'WHERE WE WORK' },
  { file: 'src/pages/ServicesPage.tsx', subtitle: 'OUR EXPERTISE' }
];

pages.forEach(({file, subtitle}) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    const regex = /<div className="bg-charcoal-900 text-white py-20">\s*<div className="container mx-auto px-4 md:px-6">\s*<h1 className="text-4xl md:text-5xl font-bold mb-4">([^<]+)<\/h1>\s*<p className="text-charcoal-400 text-lg max-w-2xl">\s*(.*?)\s*<\/p>\s*<\/div>\s*<\/div>/s;

    content = content.replace(regex, (match, pageTitle, pageDescription) => {
      return `<div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">${subtitle}</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">${pageTitle}</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            ${pageDescription.trim()}
          </p>
        </div>
      </div>`;
    });

    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log("Pages upgraded.");
