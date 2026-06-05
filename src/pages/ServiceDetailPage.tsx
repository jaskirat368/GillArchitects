import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICES, BUSINESS_INFO } from '../data/business';
import { Phone, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${service.title} in Abohar | Gill Architects`}</title>
        <meta name="description" content={`Professional ${service.title} services in Abohar by Gill Architects. ${service.shortDesc}`} />
      </Helmet>

      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/60 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-charcoal-200 max-w-2xl">{service.shortDesc}</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">THE DETAILS</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Service Overview</h2>
              <p className="text-charcoal-600 text-lg mb-8 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="bg-pearl-50 p-8 rounded-2xl border border-pearl-100 mb-12">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-amber-500" /> Why Professional Design Matters
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Many homeowners in Abohar make the mistake of starting construction without proper planning. This leads to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Poor ventilation and natural light",
                    "Wasted space and awkward corners",
                    "Structural weaknesses",
                    "Cost overruns due to changes during construction"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal-700">
                      <span className="text-red-500 font-bold">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Our Process</h3>
              <div className="space-y-8">
                {[
                  { title: "1. Consultation", desc: "We discuss your requirements, budget, and site conditions." },
                  { title: "2. Concept Design", desc: "We create initial layouts and sketches for your approval." },
                  { title: "3. Refinement", desc: "We tweak the design based on your feedback." },
                  { title: "4. Final Drawings", desc: "We deliver detailed drawings ready for construction." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal-900 text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal-900">{step.title}</h4>
                      <p className="text-charcoal-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-charcoal-900 text-white p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-charcoal-300 mb-8">
                  Get a professional consultation for your {service.title.toLowerCase()} project today.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="block w-full bg-white text-charcoal-900 text-center py-3 rounded-full font-bold hover:bg-pearl-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    Call Us
                  </a>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                    className="block w-full bg-[#25D366] text-white text-center py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp Us
                  </a>
                  <Link 
                    to="/contact"
                    className="block w-full border border-charcoal-600 text-charcoal-300 text-center py-3 rounded-full font-medium hover:bg-charcoal-800 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
