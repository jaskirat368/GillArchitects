import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Gill%20Architects%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
        className="w-14 h-14 bg-charcoal-900 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyCTA;
