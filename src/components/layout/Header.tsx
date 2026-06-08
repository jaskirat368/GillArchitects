import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:pt-6 md:px-6 transition-all duration-300"
    >
      <div className={cn(
        "max-w-[1400px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between transition-all duration-300 rounded-full",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md ring-1 ring-charcoal-900/5" 
          : "bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-white/50"
      )}>
        <Link to="/" className="flex items-center group">
          <div className="flex flex-col">
            <div className="font-display text-base xl:text-[18px] 2xl:text-[22px] leading-none tracking-[0.12em] xl:tracking-[0.15em] flex items-center gap-1 xl:gap-1.5 text-charcoal-900">
              <span className="font-extrabold">GILL</span>
              <span className="w-px h-4 xl:h-5 bg-pearl-300"></span>
              <span className="font-light">ARCHITECTS</span>
            </div>
            <span className="text-[8px] xl:text-[9px] font-sans uppercase tracking-[0.35em] xl:tracking-[0.4em] mt-1 xl:mt-1.5 ml-0.5 text-charcoal-500">Abohar</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-3 xl:gap-4 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs xl:text-[13px] 2xl:text-sm font-medium transition-colors hover:text-charcoal-900 relative whitespace-nowrap after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-charcoal-900 after:transition-all hover:after:w-full",
                location.pathname === link.path ? "text-charcoal-900 after:w-full" : "text-charcoal-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 xl:gap-4 2xl:gap-5 shrink-0">
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 xl:gap-2 text-charcoal-600 hover:text-charcoal-900 font-medium text-xs xl:text-[13px] 2xl:text-sm transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span className="whitespace-nowrap">{BUSINESS_INFO.phone}</span>
          </a>
          <Link
            to="/contact#contact-form"
            className="bg-charcoal-900 text-white px-4 py-2 xl:px-6 xl:py-2.5 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-full hover:bg-charcoal-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-1.5 xl:gap-2 whitespace-nowrap"
          >
            Get Quote <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-charcoal-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="xl:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-charcoal-900/5 overflow-visible"
          >
            <nav className="flex flex-col p-6 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-pearl-50",
                    location.pathname === link.path ? "text-charcoal-900" : "text-charcoal-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-pearl-200 rounded-2xl text-charcoal-700 font-medium"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
                <Link
                  to="/contact#contact-form"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-charcoal-900 text-white rounded-full font-medium"
                >
                  Request Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
