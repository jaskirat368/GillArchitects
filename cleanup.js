const fs = require('fs');
const files = [
  'src/pages/ProjectsPage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/ServiceAreasPage.tsx',
  'src/pages/BlogPage.tsx',
  'src/pages/PrivacyPolicyPage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/ServiceDetailPage.tsx',
  'src/pages/TermsOfServicePage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/HomePage.tsx',
  'src/App.tsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/import \{ Helmet \} from 'react-helmet-async';\n/g, '');
    c = c.replace(/import \{ HelmetProvider \} from 'react-helmet-async';\n/g, '');
    c = c.replace(/<Helmet>/g, '<>');
    c = c.replace(/<\/Helmet>/g, '</>');
    c = c.replace(/<HelmetProvider>/g, '<>');
    c = c.replace(/<\/HelmetProvider>/g, '</>');
    fs.writeFileSync(f, c);
  }
});
