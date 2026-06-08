import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2, MapPin, Ruler, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/business';
import InteractiveCard from '../components/InteractiveCard';
import SEO from '../components/SEO';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does an architect cost in Punjab?",
      answer: "Architectural fees in Punjab vary based on the scope, plot size, and design complexity. Some charge a percentage of the project cost, while others charge per square foot for services like residential architecture, 3D elevation design, and house planning. Contact Gill Architects for a competitive and transparent quote tailored to your specific needs."
    },
    {
      question: "Why should I hire an architect before construction?",
      answer: "Hiring a professional architect ensures that your building design is optimized for space, natural light, aesthetics, and structural integrity. An architectural consultant prevents costly construction errors, maximizes your plot space, and ensures compliance with local building regulations."
    },
    {
      question: "What is included in house planning?",
      answer: "Comprehensive house planning includes 2D floor plans, space allocation, structural layout, Vastu compliance (if requested), electrical and plumbing layouts, and modern front elevation design. We provide end-to-end architectural planning services to ensure your dream home is practical and beautiful."
    },
    {
      question: "How long does architectural design take?",
      answer: "A standard residential house plan and 3D elevation design typically takes 1 to 3 weeks, depending on client revisions and project scale. Commercial architecture and large villa designs may take slightly longer for detailed 3D architectural rendering and structural drawings."
    },
    {
      question: "Do you provide 3D elevation designs?",
      answer: "Yes, our 3D elevation design services include highly detailed 3D architectural rendering, modern front exterior design, luxury villa elevation, and material suggestions. We provide photorealistic 3D rendering so you can visualize your project perfectly before construction starts."
    },
    {
      question: "Do you design commercial projects?",
      answer: "Absolutely. We are an experienced commercial architect firm designing offices, retail showrooms, shopping complexes, and hospitality spaces. We focus on modern commercial architecture that enhances business presence and operational efficiency."
    },
    {
      question: "Which areas do you serve in Punjab?",
      answer: "While we are recognized as the best architect in Abohar, our architectural consultancy extends across Punjab. We frequently serve clients looking for an architect in Fazilka, Sri Ganganagar, Bathinda, Moga, Faridkot, Muktsar, Malout, Chandigarh, Mohali, and Ludhiana."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Architect",
        "@id": "https://gillarchitects.vercel.app/#organization",
        "name": "Gill Architects",
        "image": "https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png",
        "url": "https://gillarchitects.vercel.app",
        "telephone": "+91 98886 17761",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abohar",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "description": "Premium architectural planning services, modern house design, 3D elevation, and luxury interior design in Punjab."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Gill Architects | Best Architect in Punjab | House Planning & 3D Elevation"
        description="Looking for the best architect in Punjab? Gill Architects offers premium architectural planning, residential/commercial architecture, 3D elevation, and luxury interior design in Abohar, Fazilka, Chandigarh & beyond."
        keywords="architect in punjab, best architect in punjab, top architect in punjab, architect near me, residential architect, commercial architect, house architect, villa architect, modern house architect, interior designer, building planner, house planner, 3d elevation designer, modern elevation design, architecture firm, abohar, fazilka, chandigarh"
        canonical="https://gillarchitects.vercel.app/"
        jsonLd={JSON.stringify(jsonLd)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-charcoal-950">
          <img 
            src="https://i.ibb.co/5hGMGxYk/IMG-20260607-120142.png" 
            alt="Urban Architecture Pattern Mobile" 
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          <img 
            src="https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png" 
            alt="Modern Luxury House Elevation Desktop" 
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10 pointer-events-none"></div>
          {/* Architectural Grid Overlay */}
          <div 
            className="absolute inset-0 z-20 opacity-15 mix-blend-overlay pointer-events-none hidden sm:block"
            style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '6rem 6rem' }}
          ></div>
        </div>

        {/* Dynamic Glowing Orbs / Effects */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#faf0ca]/20 rounded-full blur-[120px] pointer-events-none z-20 hidden md:block"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pearl-200/20 rounded-full blur-[100px] pointer-events-none z-20 hidden md:block"
        />

        {/* Content Container */}
        <div className="container mx-auto px-5 md:px-8 relative z-30 flex flex-col items-start text-left pt-24 pb-16 md:pt-28 md:pb-20 xl:pt-32 xl:pb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full flex flex-col items-start"
          >
            {/* Super Heading */}
            <div className="inline-flex items-center justify-start gap-4 mb-4 lg:mb-6 w-full lg:w-auto">
              <span className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-[#faf0ca] to-transparent relative overflow-hidden">
                <motion.span animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-white/50 w-full h-full" />
              </span>
              <span className="text-[#faf0ca] text-xs md:text-sm lg:text-base font-sans uppercase tracking-[0.4em] font-bold">GILL ARCHITECTS</span>
              <span className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-[#faf0ca] to-transparent relative overflow-hidden">
                <motion.span animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute inset-0 bg-white/50 w-full h-full" />
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-4 lg:mb-6 text-left relative z-10 max-w-5xl">
              <div className="flex flex-wrap items-center gap-x-2 md:gap-x-4 lg:gap-x-5 leading-none">
                <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="drop-shadow-2xl inline-block">MODERN</motion.span>
                <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="drop-shadow-2xl inline-block">DESIGN</motion.span>
                <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="text-[#faf0ca]/80 font-light drop-shadow-xl text-2xl sm:text-4xl lg:text-5xl mx-1 select-none leading-none">&amp;</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pearl-100 drop-shadow-2xl inline-block">PROFESSIONAL</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#faf0ca] to-[#faf0ca] drop-shadow-lg inline-block">
                  ARCHITECTURE
                </motion.span>
              </div>
            </h1>

            {/* Glassmorphism description card */}
            <InteractiveCard 
              flowColor="#faf0ca"
              tiltIntensity={8}
              className="max-w-xl mb-6 overflow-hidden" 
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-l-2 border-l-[#faf0ca] p-5 md:p-6 w-full h-full group [transform-style:preserve-3d]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-sm md:text-base text-pearl-50 leading-relaxed font-light relative z-10 text-left transition-all duration-500 group-hover:[transform:translateZ(30px)] group-hover:drop-shadow-lg">
                  Commanding a new standard in Abohar. From striking 3D elevations to intelligent floor planning&mdash;we shape spaces that exude modern luxury and endure for generations.
                </p>
              </div>
            </InteractiveCard>

            {/* Trust Signal */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 mb-10 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-charcoal-900 bg-charcoal-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Client" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[#faf0ca] text-xs font-bold tracking-wider">12+ YEARS OF EXCELLENCE</span>
                <span className="text-pearl-200 text-[10px]">Trusted by 500+ Happy Clients</span>
              </div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full sm:w-auto mt-4"
            >
              <motion.a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full sm:w-48 group relative overflow-hidden bg-white text-charcoal-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 w-full h-full bg-[#faf0ca] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                <Phone className="w-4 h-4 relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12" /> 
                <span className="relative z-10 whitespace-nowrap">Call Now</span>
              </motion.a>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                className="w-full sm:w-48"
              >
                <Link 
                  to="/contact#contact-form"
                  className="group w-full block bg-charcoal-900/40 border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white shadow-lg backdrop-blur-sm flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="whitespace-nowrap relative z-10">Consultation</span> 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-30 pointer-events-none"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 16, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} 
              className="w-1 h-2 bg-[#faf0ca] rounded-full drop-shadow-[0_0_8px_rgba(250,240,202,0.8)]" 
            />
          </div>
        </motion.div>
      </section>

      {/* Modern Trust Bar - Light Premium Section */}
      <section className="relative z-40 bg-[#f8f9fa] px-5 md:px-8 py-24 md:py-32 overflow-hidden border-b border-pearl-100">
        {/* Background typographic accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-[15vw] font-display font-extrabold text-charcoal-900 whitespace-nowrap text-center">
          GILL ARCHITECTS
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-charcoal-500 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-charcoal-200"></span>
              The Gill Standard
              <span className="w-8 md:w-12 h-[1px] bg-charcoal-200"></span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mt-6 tracking-tight">Pillars of Excellence.</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-stretch"
          >
            {/* Unique Card 1 */}
            <InteractiveCard 
              flowColor="#faf0ca" 
              className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col items-start p-10 xl:p-12 relative h-full group bg-white [transform-style:preserve-3d]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pearl-50 rounded-bl-[100%] z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-pearl-100 flex items-center justify-center shrink-0 mb-10 group-hover:bg-charcoal-900 transition-colors duration-500 relative z-10">
                  <MapPin className="w-7 h-7 text-charcoal-800 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-display font-bold text-charcoal-900 text-2xl tracking-tight mb-4 relative z-10 transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-2xl">Abohar Presence</h4>
                <p className="text-base text-charcoal-600 font-light leading-relaxed relative z-10">
                  As a local authority in Abohar, we possess a deep understanding of the regional aesthetic and structural requirements, ensuring every project thrives in its environment.
                </p>
                <div className="mt-8 w-12 h-1 bg-pearl-200 group-hover:bg-charcoal-900 group-hover:w-full transition-all duration-500 relative z-10"></div>
              </div>
            </InteractiveCard>
            
            {/* Unique Card 2 */}
            <InteractiveCard 
              flowColor="#faf0ca" 
              className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] md:translate-y-12"
            >
              <div className="flex flex-col items-start p-10 xl:p-12 relative h-full group bg-white [transform-style:preserve-3d]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pearl-50 rounded-bl-[100%] z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-pearl-100 flex items-center justify-center shrink-0 mb-10 group-hover:bg-charcoal-900 transition-colors duration-500 relative z-10">
                  <Home className="w-7 h-7 text-charcoal-800 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-display font-bold text-charcoal-900 text-2xl tracking-tight mb-4 relative z-10 transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-2xl">Premium Spaces</h4>
                <p className="text-base text-charcoal-600 font-light leading-relaxed relative z-10">
                  We specialize in crafting bespoke residential and commercial environments. Our designs seamlessly blend modern luxury with functional elegance.
                </p>
                <div className="mt-8 w-12 h-1 bg-pearl-200 group-hover:bg-charcoal-900 group-hover:w-full transition-all duration-500 relative z-10"></div>
              </div>
            </InteractiveCard>
            
            {/* Unique Card 3 */}
            <InteractiveCard 
              flowColor="#faf0ca" 
              className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col items-start p-10 xl:p-12 relative h-full group bg-white [transform-style:preserve-3d]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pearl-50 rounded-bl-[100%] z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-pearl-100 flex items-center justify-center shrink-0 mb-10 group-hover:bg-charcoal-900 transition-colors duration-500 relative z-10">
                  <Ruler className="w-7 h-7 text-charcoal-800 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-display font-bold text-charcoal-900 text-2xl tracking-tight mb-4 relative z-10 transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-2xl">Precision Planning</h4>
                <p className="text-base text-charcoal-600 font-light leading-relaxed relative z-10">
                  Utilizing industry-leading 2D and 3D architectural visualization, we map every inch meticulously to eliminate guesswork and guarantee perfection.
                </p>
                <div className="mt-8 w-12 h-1 bg-pearl-200 group-hover:bg-charcoal-900 group-hover:w-full transition-all duration-500 relative z-10"></div>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
              <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">Core Services</span>
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-4 tracking-tight">Our Expertise</h2>
            <p className="text-charcoal-600">
              We deliver comprehensive architectural solutions, from the first sketch to the final brick.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <InteractiveCard
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                flowColor="#faf0ca"
                className="border border-pearl-100"
              >
                <div className="group h-full flex flex-col bg-white rounded-[inherit] [transform-style:preserve-3d]">
                  <div className="w-full h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm text-charcoal-900 rounded-full flex items-center justify-center shadow-lg group-hover:bg-charcoal-900 group-hover:text-white transition-colors duration-300">
                      <Ruler className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow border-t border-pearl-100/50 [transform-style:preserve-3d]">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-3 transition-all duration-500 group-hover:[transform:translateZ(30px)] group-hover:drop-shadow-xl">{service.title}</h3>
                    <p className="text-charcoal-600 mb-6 leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-sm font-semibold text-charcoal-900 group-hover:text-charcoal-600 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-block border border-charcoal-900 text-charcoal-900 px-8 py-3 rounded-full font-medium hover:bg-charcoal-900 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Design Approach / Why Us */}
      <section className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
                <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">The Gill Standard</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Choose Gill Architects in Abohar?</h2>
              <p className="text-charcoal-400 text-lg mb-8 leading-relaxed">
                As the leading architectural designer and building planner in Punjab, we don't just draw maps; we design lifestyles. Our custom house design approach combines structural safety with modern aesthetics, ensuring your premium home is beautiful, durable, and highly functional.
              </p>
              
              <div className="space-y-6">
                {[
                  "Vastu-Compliant Space Optimization for Indian Homes",
                  "Trusted Local Experts with 500+ Satisfied Clients",
                  "Structural Precision & Safety First",
                  "Modern 3D Visualization before Construction",
                  "Transparent Communication & Timely Delivery"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-charcoal-800 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-charcoal-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link 
                  to="/about"
                  className="bg-white text-charcoal-900 px-8 py-3 rounded-full font-semibold hover:bg-pearl-200 transition-colors inline-block"
                >
                  Read Our Philosophy
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <InteractiveCard 
                flowColor="#ffffff" 
                tiltIntensity={5}
                className="shadow-2xl"
              >
                <img 
                  src="https://i.ibb.co/mCX7Mx5d/IMG-20260606-203644.jpg" 
                  alt="Manjot Singh Gill - Architectural Planning" 
                  className="w-full h-auto rounded-[inherit] transition-all duration-500 block"
                />
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ & Local SEO Section */}
      <section className="py-24 bg-white border-t border-pearl-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pearl-50/50 -skew-x-12 transform origin-top pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Local SEO Content */}
            <div className="lg:w-5/12 relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="w-8 md:w-12 h-[1px] bg-charcoal-300"></span>
                  <span className="text-charcoal-500 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-bold">Trusted Locally & Beyond</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-8 tracking-tight leading-tight [text-wrap:balance]">
                  Your Premier <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-charcoal-900 via-charcoal-700 to-charcoal-500">Architects in Punjab</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#faf0ca]/60 -z-0" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </span>
                </h2>

                <InteractiveCard 
                  flowColor="#faf0ca" 
                  tiltIntensity={5}
                  className="mb-8"
                >
                  <div className="p-8 bg-white border border-pearl-100 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] [transform-style:preserve-3d]">
                    <div className="prose prose-base text-charcoal-600 font-light [transform:translateZ(20px)]">
                      <p className="leading-relaxed">
                        Finding an <strong>architect near me</strong> who understands both high-end luxury and structural integrity can be challenging. <strong>Gill Architects</strong> bridges this gap, operating as a top-tier <strong>residential</strong> and <strong>commercial architect</strong> in Abohar.
                      </p>
                      <p className="mt-4 leading-relaxed">
                        From <strong>house floor planning</strong> to breathtaking <strong>3D rendering</strong>, our building consultants bring decades of collective design intelligence to your doorstep in <strong>Abohar, Fazilka, Muktsar, Malout</strong>, and <strong>Sri Ganganagar</strong>.
                      </p>
                    </div>
                  </div>
                </InteractiveCard>

                <div className="flex gap-6 mt-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-charcoal-900">500+</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold">Projects Completed</span>
                  </div>
                  <div className="w-[1px] h-10 bg-pearl-200"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-bold text-charcoal-900">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold">Client Satisfaction</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Architectural Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-pearl-100 -z-0 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pearl-50 rounded-full -z-0 opacity-30 blur-3xl"></div>
              
              {/* Measurement Lines Mockup */}
              <div className="absolute right-0 top-1/4 hidden lg:block pointer-events-none opacity-20">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10V110H110" stroke="#1a1a1a" strokeWidth="0.5" />
                  <path d="M10 30H30M10 50H50M10 70H30M10 90H50" stroke="#1a1a1a" strokeWidth="0.5" />
                  <circle cx="110" cy="110" r="2" fill="#1a1a1a" />
                  <text x="60" y="105" fontSize="6" fill="#1a1a1a" fontFamily="monospace">AREA MAP v1.0</text>
                </svg>
              </div>
            </div>

            {/* Right Column: FAQs */}
            <div className="lg:w-7/12">
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-8 border-b border-pearl-200 pb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-pearl-200 rounded-xl overflow-hidden bg-white hover:border-pearl-300 transition-colors">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                      <span className="font-bold text-charcoal-900 pr-8">{faq.question}</span>
                      <div className="w-8 h-8 rounded-full bg-pearl-50 flex items-center justify-center shrink-0">
                        {openFaq === index ? <ChevronUp className="w-4 h-4 text-charcoal-600" /> : <ChevronDown className="w-4 h-4 text-charcoal-600" />}
                      </div>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-charcoal-600 font-light border-t border-pearl-50 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-pearl-50 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Decorative subtle gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pearl-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pearl-300/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
            <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">Take The Next Step</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal-900 mb-6 tracking-tight">
            Start Your Project with Confidence.
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Don't risk your dream home with poor planning. Book a professional consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-charcoal-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-charcoal-900/20 cursor-pointer text-center min-w-[200px]"
            >
              Call Us
            </a>
            <Link 
              to="/contact#contact-form"
              className="bg-white text-charcoal-900 border border-pearl-200 px-8 py-4 rounded-full font-semibold hover:bg-pearl-50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:ring-4 hover:ring-charcoal-900/10"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
