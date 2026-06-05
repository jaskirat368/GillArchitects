import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Gill Architects | The Best Architect in Abohar & Punjab</title>
        <meta name="description" content="Learn about Gill Architects, the leading architectural planning firm and interior designer in Abohar. We serve Fazilka, Sri Ganganagar, and all of Punjab." />
        <meta name="keywords" content="architect in abohar, best architect in abohar, architect in fazilka, architect in sri ganganagar, architect in punjab, interior designer in abohar, Gill Architects Punjab" />
      </Helmet>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-600"></span>
                <span className="text-pearl-700 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">THE STORY</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-600"></span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-6 tracking-tight">Your Local Architectural Designer</h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Gill Architects is a premier architectural design studio based in Abohar, Punjab. Recognized as the best architect in Abohar, we specialize in transforming visions into concrete reality. From custom home design to large-scale commercial building design, our practice is built on the belief that good architecture should be accessible, sustainable, and structurally sound.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                With years of local expertise serving Abohar, Fazilka, Sri Ganganagar, and surrounding areas, our building planning consultants understand local regulations and soil conditions perfectly. Whether you need a home interior designer, advanced 3D house elevation, or professional architectural consultancy, we ensure every detail is tailored for success.
              </p>
              
              <div className="bg-pearl-50 p-6 border-l-4 border-charcoal-900 my-8">
                <p className="text-charcoal-800 italic font-medium">
                  "Architecture is not just about how a building looks, but how it functions for the people living inside it."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office Studio" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
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
