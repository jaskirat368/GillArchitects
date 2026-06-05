import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2, MapPin, Ruler, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/business';
import { Helmet } from 'react-helmet-async';
import { PhoneMenu } from '../components/PhoneMenu';
import InteractiveCard from '../components/InteractiveCard';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I hire a professional architect in Abohar?",
      answer: "Hiring a professional architect in Abohar ensures that your residential building design or commercial space is optimized for both aesthetics and structural integrity. At Gill Architects, our architectural planning services save you money by preventing costly construction errors, maximizing plot space, and ensuring compliance with local building regulations."
    },
    {
      question: "What is included in your 3D elevation design services?",
      answer: "Our 3D elevation design includes highly detailed 3D architectural rendering, modern front elevation design, and material suggestions. Whether you want a luxury home architect to design a modern villa or need commercial elevation design, we provide photorealistic 3D exterior design so you can visualize your project before construction starts."
    },
    {
      question: "Do you provide interior design services as well?",
      answer: "Yes, Gill Architects is also a leading interior designer in Abohar. We offer complete interior planning services, including living room interior design, modular kitchen design, and contemporary interior design for both homes and commercial buildings. We merge luxury interior design with modern functionality."
    },
    {
      question: "Which areas do you serve in Punjab?",
      answer: "While we are recognized as the best architect in Abohar, our architectural consultancy extends to neighboring regions. We regularly serve clients looking for an architect in Fazilka, an architect in Sri Ganganagar, Malout, Muktsar, and across Punjab. Our construction design consultant will travel to your site to ensure flawless execution."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gill Architects | Best Architect in Abohar | Modern House Planning & 3D Elevation</title>
        <meta name="description" content="Looking for the best architect in Abohar? Gill Architects offers premium architectural planning services, modern house design, 3D elevation, and luxury interior design in Punjab and surrounding areas." />
        <meta name="keywords" content="architect in abohar, best architect in abohar, architectural designer, residential architect, commercial architect, modern house design, 3d elevation design, interior designer in abohar, 2d floor plan, house planner in abohar" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ArchitecturalService",
              "name": "Gill Architects",
              "image": "https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png",
              "url": "https://gillarchitects.vercel.app",
              "telephone": "+91 98886 11970",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abohar",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "description": "Premium architectural planning services, modern house design, 3D elevation, and luxury interior design in Punjab."
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-charcoal-950">
          <img 
            src="https://i.ibb.co/PvXqjDFB/file-000000005b04720ba7779e11279cee51.png" 
            alt="Urban Architecture Pattern Mobile" 
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          <img 
            src="https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png" 
            alt="Modern Luxury House Elevation Desktop" 
            className="absolute inset-0 w-full h-full object-cover hidden lg:block animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10 pointer-events-none"></div>
          {/* Architectural Grid Overlay */}
          <div 
            className="absolute inset-0 z-20 opacity-15 mix-blend-overlay pointer-events-none hidden sm:block"
            style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '6rem 6rem' }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-5 md:px-8 relative z-30 flex flex-col items-start text-left pt-32 pb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full flex flex-col items-start"
          >
            {/* Super Heading */}
            <div className="inline-flex items-center justify-center gap-4 mb-6 w-full">
              <span className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-[#faf0ca] to-transparent"></span>
              <span className="text-[#faf0ca] text-xs md:text-sm lg:text-base font-sans uppercase tracking-[0.4em] font-bold">GILL ARCHITECTS</span>
              <span className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-[#faf0ca] to-transparent"></span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-8 text-left">
              <span className="block drop-shadow-2xl">MODERN</span>
              <span className="block drop-shadow-2xl">DESIGN</span>
              <span className="block text-[#faf0ca]/60 font-light drop-shadow-xl text-3xl sm:text-5xl my-2 sm:my-3">&amp;</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-pearl-100 drop-shadow-2xl">PROFESSIONAL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#faf0ca] to-[#faf0ca] drop-shadow-lg pr-0">ARCHITECTURE</span>
            </h1>

            {/* Glassmorphism description card */}
            <InteractiveCard 
              flowColor="#faf0ca"
              tiltIntensity={8}
              className="max-w-xl mb-10 overflow-hidden" 
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-l-2 border-l-[#faf0ca] p-5 md:p-6 w-full h-full group [transform-style:preserve-3d]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-sm md:text-base text-pearl-50 leading-relaxed font-light relative z-10 text-left transition-all duration-500 group-hover:[transform:translateZ(30px)] group-hover:drop-shadow-lg">
                  Commanding a new standard in Abohar. From striking 3D elevations to intelligent floor planning&mdash;we shape spaces that exude modern luxury and endure for generations.
                </p>
              </div>
            </InteractiveCard>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full sm:w-auto mt-4">
              <PhoneMenu className="w-full sm:w-48">
                <div 
                  className="group relative overflow-hidden w-full bg-white text-charcoal-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#faf0ca] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  <Phone className="w-4 h-4 relative z-10" /> 
                  <span className="relative z-10 whitespace-nowrap">Call Now</span>
                </div>
              </PhoneMenu>
              <Link 
                to="/contact"
                className="group w-full sm:w-48 bg-charcoal-900/40 border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span className="whitespace-nowrap">Consultation</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-30 hidden md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-pearl-300 animate-[bounce_2s_infinite]"></div>
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
                  "Structural Precision & Safety First",
                  "Modern 3D Visualization before Construction",
                  "Space Optimization for Small & Large Plots",
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
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Architectural Planning" 
                  className="w-full h-auto rounded-[inherit] grayscale hover:grayscale-0 transition-all duration-500 block"
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
            <div className="lg:w-5/12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 md:w-12 h-[1px] bg-charcoal-200"></span>
                <span className="text-charcoal-500 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-bold">Trusted Locally & Beyond</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-charcoal-900 mb-6 tracking-tight leading-tight">
                Your Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal-900 to-charcoal-500">Architects in Punjab</span>
              </h2>
              <div className="prose prose-lg text-charcoal-600 mb-8 font-light">
                <p>
                  Finding an <strong>architect near me</strong> who understands both high-end luxury and structural integrity can be challenging. <strong>Gill Architects</strong> bridges this gap, operating as a top-tier <strong>residential architect</strong> and <strong>commercial architect</strong> right here in Abohar.
                </p>
                <p className="mt-4">
                  Whether you are seeking custom <strong>house floor planning</strong>, breathtaking <strong>3D house rendering</strong>, or comprehensive <strong>interior planning services</strong>, our building consultants bring decades of collective design intelligence to your doorstep. We are proud to be the building designer of choice for clients in Abohar, Fazilka, Muktsar, Malout, Sri Ganganagar, and across Punjab.
                </p>
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
            <PhoneMenu direction="up">
              <div 
                className="bg-charcoal-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-charcoal-900/20 cursor-pointer text-center"
              >
                Call Us
              </div>
            </PhoneMenu>
            <Link 
              to="/contact"
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
