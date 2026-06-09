import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../../data/business';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-charcoal-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="flex flex-col">
                <div className="font-display text-[22px] leading-none tracking-[0.15em] flex items-center gap-1.5 text-white">
                  <span className="font-extrabold">GILL</span>
                  <span className="w-px h-5 bg-pearl-500"></span>
                  <span className="font-light text-pearl-100">ARCHITECTS</span>
                </div>
                <span className="text-[9px] font-sans uppercase tracking-[0.4em] text-charcoal-400 mt-1.5 ml-0.5">Abohar</span>
              </div>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Modern architectural authority in Abohar. We design spaces that blend structural intelligence with aesthetic elegance.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-charcoal-700 hover:text-[#faf0ca] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Gill%20Architects%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-charcoal-700 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Architecture Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/services" className="text-charcoal-500 hover:text-white transition-colors flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-charcoal-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-charcoal-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.timings}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-charcoal-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-charcoal-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal-500">
          <p>&copy; {currentYear} Gill Architects. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
