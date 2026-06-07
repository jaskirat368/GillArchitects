import React from 'react';
import { SERVICE_AREAS } from '../data/business';
import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceAreasPage = () => {
  return (
    <>
      <SEO 
        title="Service Areas | Best Architects in Punjab, Abohar & Beyond"
        description="Gill Architects provides master architectural and interior design services across Punjab, including Abohar, Fazilka, Muktsar, Chandigarh, Mohali, Ludhiana, and Bathinda."
        keywords="architect inside punjab, service areas punjab, gill architects locations, architects in Chandigarh, architect in Abohar, architect in Fazilka, architect in Muktsar, interior designer Punjab"
        canonical="https://gillarchitects.vercel.app/areas"
      />

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">WHERE WE WORK</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">Service Areas</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Providing architectural excellence across the region.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Abohar */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pearl-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-charcoal-900" />
                  </div>
                  <div className="inline-flex items-center gap-4">
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                    <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">HEADQUARTERS</span>
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
                  </div>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight break-words">Abohar City</h2>
              </div>
              <ul className="space-y-4 pl-4 border-l-2 border-pearl-100">
                {SERVICE_AREAS.abohar.map((area, i) => (
                  <li key={i} className="text-charcoal-600 hover:text-charcoal-900 transition-colors">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Villages */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pearl-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-charcoal-900" />
                  </div>
                  <div className="inline-flex items-center gap-4">
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                    <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">EXPANDED REACH</span>
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
                  </div>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight break-words">Nearby Villages</h2>
              </div>
              <ul className="space-y-4 pl-4 border-l-2 border-pearl-100 max-h-[400px] overflow-y-auto custom-scrollbar">
                {SERVICE_AREAS.villages.map((area, i) => (
                  <li key={i} className="text-charcoal-600 hover:text-charcoal-900 transition-colors">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Towns */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pearl-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-charcoal-900" />
                  </div>
                  <div className="inline-flex items-center gap-4">
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                    <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">REGIONAL PRESENCE</span>
                    <span className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
                  </div>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight break-words">Nearby Towns</h2>
              </div>
              <ul className="space-y-4 pl-4 border-l-2 border-pearl-100">
                {SERVICE_AREAS.towns.map((area, i) => (
                  <li key={i} className="text-charcoal-600 hover:text-charcoal-900 transition-colors">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;
