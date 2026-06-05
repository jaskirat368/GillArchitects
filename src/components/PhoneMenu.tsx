import React, { useState, useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface PhoneMenuProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down';
  align?: 'left' | 'center' | 'right';
}

export const PhoneMenu: React.FC<PhoneMenuProps> = ({ children, className, direction = 'down', align = 'center' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${className || ''}`} ref={menuRef}>
      <div 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="cursor-pointer block w-full"
      >
        {children || (
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </span>
        )}
      </div>
      
      {isOpen && (
        <div className={`absolute ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'} ${align === 'center' ? 'left-1/2 -translate-x-1/2' : align === 'left' ? 'left-0' : 'right-0'} bg-white border border-pearl-200 rounded-xl shadow-xl overflow-hidden py-2 z-[9999] min-w-[200px]`}>
          <div className="px-4 py-2 text-xs font-semibold text-charcoal-500 uppercase tracking-widest border-b border-pearl-100">
            Choose a number
          </div>
          {BUSINESS_INFO.phones.map((phone, i) => (
            <a 
              key={i} 
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-3 hover:bg-pearl-50 text-charcoal-900 font-medium flex items-center gap-3 transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4 text-charcoal-500" />
              {phone}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
