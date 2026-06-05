import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import InteractiveCard from '../components/InteractiveCard';
import { motion } from 'motion/react';

const SERVICES_OPTIONS = [
  "General Inquiry",
  "Architectural Design",
  "2D Floor Planning",
  "3D Elevation",
  "Interior Design",
  "Construction",
  "Other"
];

const ContactPage = () => {
  const [selectedService, setSelectedService] = useState("General Inquiry");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Gill Architects | Best Architect in Abohar</title>
        <meta name="description" content="Contact Gill Architects today. As the best architect in Abohar, we offer 2D floor plans, 3D elevation, and interior design across Fazilka, Sri Ganganagar, and Punjab." />
        <meta name="keywords" content="contact architect in abohar, architect near me, house planner in abohar, 3d designer in abohar, building consultant in abohar, Gill Architects Abohar" />
      </Helmet>

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">GET IN TOUCH</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">Contact Gill Architects</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Start your journey towards a better space today. We're the preferred architectural consultancy in Abohar & Punjab.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">REACH OUT</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-8 tracking-tight">Get In Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InteractiveCard overflowVisible flowColor="#faf0ca" className="border border-pearl-100">
                  <div className="p-6 bg-white shrink flex flex-col h-full rounded-[inherit]">
                    <div className="w-12 h-12 bg-pearl-100 rounded-2xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-charcoal-900" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1">Phone</h3>
                    <p className="text-sm text-charcoal-500 mb-2">Mon-Sat (9am-7pm)</p>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-charcoal-900 hover:text-charcoal-600 transition-colors cursor-pointer"
                    >
                      Call Now
                    </a>
                  </div>
                </InteractiveCard>

                <InteractiveCard overflowVisible flowColor="#25D366" className="border border-pearl-100">
                  <div className="p-6 bg-white shrink flex flex-col h-full rounded-[inherit]">
                    <div className="w-12 h-12 bg-pearl-100 rounded-2xl flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1">WhatsApp</h3>
                    <p className="text-sm text-charcoal-500 mb-2">24/7 Support</p>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-charcoal-900 hover:text-charcoal-600 transition-colors cursor-pointer"
                    >
                      Quick Chat
                    </a>
                  </div>
                </InteractiveCard>

                <InteractiveCard overflowVisible flowColor="#E1306C" className="border border-pearl-100">
                  <div className="p-6 bg-white shrink flex flex-col h-full rounded-[inherit]">
                    <div className="w-12 h-12 bg-pearl-100 rounded-2xl flex items-center justify-center mb-4">
                      <Instagram className="w-6 h-6 text-[#E1306C]" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-900 mb-1">Instagram</h3>
                    <p className="text-sm text-charcoal-500 mb-2">Daily Updates</p>
                    <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="font-bold text-charcoal-900 hover:text-charcoal-600 transition-colors inline-block mt-auto">
                      View Profile
                    </a>
                  </div>
                </InteractiveCard>

                <InteractiveCard flowColor="#faf0ca" className="border border-pearl-100 md:col-span-3 lg:-mt-0">
                  <div className="p-6 flex items-start gap-4 bg-white rounded-[inherit]">
                    <div className="w-12 h-12 bg-pearl-100 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal-900 mb-1">Office Location</h3>
                      <p className="text-charcoal-600">
                        {BUSINESS_INFO.location}
                      </p>
                    </div>
                  </div>
                </InteractiveCard>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="border border-pearl-100 shadow-2xl rounded-[2rem] overflow-hidden"
            >
              <div className="p-8 h-full bg-pearl-50">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                  <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">DROP A LINE</span>
                  <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Send a Message</h2>
                <form 
                  action="https://formsubmit.co/jaskiratforbusiness@gmail.com" 
                  method="POST"
                  className="space-y-6"
                >
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact?success=true`} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full px-4 py-3 rounded-full border border-charcoal-300 focus:border-charcoal-900 focus:ring-1 focus:ring-charcoal-900 outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        className="w-full px-4 py-3 rounded-full border border-charcoal-300 focus:border-charcoal-900 focus:ring-1 focus:ring-charcoal-900 outline-none transition-all"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Service Interested In</label>
                    <div className="relative" ref={dropdownRef}>
                      <input type="hidden" name="service" value={selectedService} />
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 rounded-full border border-charcoal-300 focus:border-charcoal-900 focus:ring-1 focus:ring-charcoal-900 outline-none bg-white flex justify-between items-center transition-all text-left"
                      >
                        <span className={selectedService ? "text-charcoal-900" : "text-charcoal-500"}>
                          {selectedService || "Select a service..."}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-charcoal-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-60 w-full mt-2 bg-white border border-pearl-200 rounded-2xl shadow-xl overflow-hidden py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                          {SERVICES_OPTIONS.map((option) => (
                            <button
                              key={option}
                              type="button"
                              className={`w-full text-left px-4 py-3 transition-colors ${selectedService === option ? 'bg-pearl-100 font-semibold text-charcoal-900' : 'text-charcoal-700 hover:bg-pearl-50 hover:text-charcoal-900'}`}
                              onClick={() => {
                                setSelectedService(option);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-full border border-charcoal-300 focus:border-charcoal-900 focus:ring-1 focus:ring-charcoal-900 outline-none transition-all"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-charcoal-900 text-white font-bold py-4 rounded-full hover:bg-charcoal-800 transition-colors shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
