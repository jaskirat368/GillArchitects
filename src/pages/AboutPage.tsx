import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';
import SEO from '../components/SEO';

const AboutPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Gill Architects",
      "areaServed": ["Punjab", "Abohar", "Fazilka", "Muktsar", "Malout", "Bathinda", "Faridkot", "Moga", "Ferozepur", "Kotkapura", "Sri Ganganagar", "Chandigarh", "Mohali", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
      "description": "Leading architectural planning firm and interior designer in Abohar. We serve Fazilka, Sri Ganganagar, and all of Punjab."
    }
  };

  return (
    <>
      <SEO 
        title="About Gill Architects | Top Architecture Firm in Punjab & Abohar"
        description="Learn about Gill Architects, a premier architectural planning firm and interior designer based in Abohar. Expert team serving all major districts of Punjab."
        keywords="architecture firm in punjab, best architect in abohar, architect in fazilka, architect in sri ganganagar, architect in punjab, interior designer in abohar, Gill Architects Punjab, residential architect, commercial architect, top interior designer near me"
        canonical="https://gillarchitects.vercel.app/about"
        jsonLd={JSON.stringify(jsonLd)}
      />

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">DISCOVER OUR FIRM</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">About Gill Architects</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Building trust through structural integrity and modern house design excellence in Punjab.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
              <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">OUR PROFESSIONALS</span>
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">About The Team</h2>
            <p className="text-charcoal-600 text-lg leading-relaxed">
              Gill Architects is powered by a dedicated team of passionate visionaries based in Abohar, Punjab. We combine structural precision, advanced 3D house elevation expertise, and Vastu-friendly Indian home design principles to transform your ideas into reality. Meet the experienced professionals bringing architectural excellence to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-6xl mx-auto justify-items-center">
            {[
              {
                name: "Manjot Singh Gill",
                role: "Architect",
                qualification: "Bachelors of Architecture",
                image: "https://i.ibb.co/fYL0Jkck/1780752636022-6aulvm-2-1.jpg"
              },
              {
                name: "Sahil Gill",
                role: "Engineer",
                qualification: "Bachelor of Technology in Civil Engineering",
                image: "https://i.ibb.co/ZzjkXMqd/IMG-20260606-WA0042.jpg"
              },
              {
                name: "Rupanshi Garg",
                role: "Architect",
                qualification: "Bachelor of Architecture",
                image: "https://i.ibb.co/ccbThXPR/IMG-20260606-200004.jpg"
              },
              {
                name: "Sidhart Gaba",
                role: "Architect",
                qualification: "Bachelor of Architecture",
                image: "https://i.ibb.co/5xMqbftT/IMG-20260606-200025.jpg"
              },
              {
                name: "Puja Sharma",
                role: "Architect",
                qualification: "Bachelor of Architecture",
                image: "https://i.ibb.co/hF5N1Djg/IMG-20260606-202520.png"
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center w-full max-w-sm group"
              >
                <div className="w-64 h-64 md:w-72 md:h-72 mb-6 overflow-hidden rounded-full border-4 border-pearl-100 shadow-xl relative">
                  <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors duration-300 z-10 rounded-full" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    fetchPriority="high"
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-1">{member.name}</h3>
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold text-pearl-700 mb-2">{member.role}</span>
                <p className="text-charcoal-500 text-sm italic">{member.qualification}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-charcoal-900 to-transparent z-0 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-400"></span>
                <span className="text-pearl-300 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">ACHIEVEMENT & RECOGNITION</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-white">Indian Concrete Institute Award</h2>
              <p className="text-pearl-100 text-lg leading-relaxed mb-8">
                We are incredibly honored to receive the <strong className="text-white">Special Award in Dream Home Category 2025</strong> from the prestigious Indian Concrete Institute, Chandigarh Centre.
              </p>
              
              <div className="bg-charcoal-800/60 p-6 md:p-8 rounded-2xl border border-charcoal-700/50 shadow-xl backdrop-blur-sm">
                <div className="flex flex-col space-y-4">
                  <span className="text-pearl-400 font-sans tracking-widest text-xs uppercase font-semibold">Conferred To</span>
                  <div className="text-2xl font-display font-medium text-white">Ar. Manjot Singh Gill</div>
                  <div className="text-pearl-400 text-sm font-medium">(Gill Architect)</div>
                  <div className="mt-5 pt-5 border-t border-charcoal-700/50">
                    <span className="block text-pearl-200 text-sm italic mb-1.5">For the architectural design of:</span>
                    <strong className="text-white text-lg font-medium block">House of Harwinder Gabba at Abohar</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
            >
              <div className="relative w-full sm:w-1/2 aspect-[3/4] sm:aspect-auto sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-charcoal-800 transform sm:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/4RRFB4n5/file-0000000043bc7207a99532ea18f66c4d.png" 
                  alt="Special Award in Dream Home Category 2025" 
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full sm:w-1/2 aspect-[3/4] sm:aspect-auto sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-charcoal-800 transform sm:translate-y-12 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/0VZyzrGX/IMG-20260606-203644.jpg" 
                  alt="Ar Manjot Singh Gill receiving the award" 
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pearl-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
              <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">GUIDING PRINCIPLES</span>
              <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-charcoal-600">The principles that guide every line we draw.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Reliability",
                desc: "We prioritize safety and longevity. Our designs are engineered to stand the test of time."
              },
              {
                title: "Client-First Approach",
                desc: "We listen. Your needs, budget, and lifestyle drive our design process, not our ego."
              },
              {
                title: "Transparent Process",
                desc: "No hidden costs, no vague promises. We provide clear drawings and honest advice."
              }
            ].map((value, i) => (
              <InteractiveCard key={i} flowColor="#faf0ca" tiltIntensity={12} className="shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-8 rounded-[inherit] h-full group [transform-style:preserve-3d]">
                  <div className="w-12 h-12 bg-pearl-100 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:[transform:translateZ(20px)]">
                    <CheckCircle2 className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3 transition-all duration-500 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-xl inline-block">{value.title}</h3>
                  <p className="text-charcoal-600 transition-all duration-500 group-hover:[transform:translateZ(10px)]">{value.desc}</p>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
