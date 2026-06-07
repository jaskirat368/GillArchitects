import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="FAQ - Gill Architects | Architecture & Design Questions Answered"
        description="Frequently asked questions about hiring an architect, house planning costs, 3D elevation designs, and our services across Abohar and Punjab."
        keywords="architect FAQ, architecture questions, house planning cost punjab, 3d elevation design timeline, cost of architect in abohar, architectural services FAQ"
        canonical="https://gillarchitects.vercel.app/faq"
        jsonLd={JSON.stringify(jsonLd)}
      />

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">YOUR QUESTIONS</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">Frequently Asked Questions</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Everything you need to know about our architectural services, pricing, and process.
          </p>
        </div>
      </div>

      <section className="py-20 bg-pearl-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white border-[#faf0ca] shadow-[0_4px_20px_-4px_rgba(250,240,202,0.3)]' : 'bg-white border-pearl-200 hover:border-pearl-300'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4"
                >
                  <span className={`font-semibold text-base md:text-lg transition-colors ${openFaq === index ? 'text-charcoal-900' : 'text-charcoal-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-[#faf0ca] text-charcoal-900 rotate-180' : 'bg-pearl-100 text-charcoal-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-charcoal-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Still have questions?</h3>
            <p className="text-charcoal-600 mb-8 max-w-2xl mx-auto">
              If you couldn't find the answer to what you're looking for, please don't hesitate to contact us. Our team is always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-charcoal-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-charcoal-800 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link 
                to="/contact#contact-form"
                className="bg-white text-charcoal-900 border border-pearl-200 px-8 py-4 rounded-full font-semibold hover:bg-pearl-50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:ring-4 hover:ring-charcoal-900/10 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
