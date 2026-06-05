import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/business';
import { ArrowRight, Ruler } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Premium Architectural Services in Abohar & Punjab | Gill Architects</title>
        <meta name="description" content="Explore our premium architectural services: 2D Floor Planning, 3D Elevation Design, Interior Design, and Custom House Design. We are the top building planners in Abohar." />
        <meta name="keywords" content="architectural services, house design services, building design services, 3d elevation design, interior designer, floor plan designer, architect in punjab" />
      </Helmet>

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">OUR ARCHITECTURAL SERVICES</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">Expert Architecture & Planning</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Comprehensive building design solutions, from modern house planning to premium interior design, tailored to your lifestyle.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <InteractiveCard flowColor="#516b8d" tiltIntensity={5} className="shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover rounded-[inherit] block"
                    />
                  </InteractiveCard>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-12 h-12 bg-pearl-100 rounded-2xl flex items-center justify-center mb-6 text-charcoal-900">
                    <Ruler className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-charcoal-900 mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-charcoal-600 text-lg mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-charcoal-900 rounded-full"></div>
                      <span>Professional & Practical Planning</span>
                    </li>
                    <li className="flex items-center gap-2 text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-charcoal-900 rounded-full"></div>
                      <span>Modern Aesthetic Integration</span>
                    </li>
                    <li className="flex items-center gap-2 text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-charcoal-900 rounded-full"></div>
                      <span>Cost-Effective Solutions</span>
                    </li>
                  </ul>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center bg-charcoal-900 text-white px-6 py-3 rounded-full font-medium hover:bg-charcoal-800 transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
