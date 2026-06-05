import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { PhoneMenu } from '../PhoneMenu';
import { WhatsappMenu } from '../WhatsappMenu';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <WhatsappMenu direction="up" align="right">
        <div
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </div>
      </WhatsappMenu>
      <PhoneMenu direction="up" align="right">
        <div
          className="w-14 h-14 bg-charcoal-900 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </div>
      </PhoneMenu>
    </div>
  );
};

export default StickyCTA;
