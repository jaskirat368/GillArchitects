import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import SEO from '../components/SEO';

const PROJECT_IMAGES = [
  "https://i.ibb.co/j91XxtDN/IMG-20260606-WA0003.jpg",
  "https://i.ibb.co/TDm6qtv9/IMG-20260606-WA0004.jpg",
  "https://i.ibb.co/t9XJHjy/IMG-20260606-WA0005.jpg",
  "https://i.ibb.co/GgR7SHw/IMG-20260606-WA0006.jpg",
  "https://i.ibb.co/zHQpcFLJ/IMG-20260606-WA0007.jpg",
  "https://i.ibb.co/NgpHwsJw/IMG-20260606-WA0008.jpg",
  "https://i.ibb.co/VY0BhjX0/IMG-20260606-WA0010.jpg",
  "https://i.ibb.co/QvhLHYPR/IMG-20260606-WA0009.jpg",
  "https://i.ibb.co/rR0FKXVk/IMG-20260606-WA0011.jpg",
  "https://i.ibb.co/SDY01wDx/IMG-20260606-WA0012.jpg",
  "https://i.ibb.co/N6Tv8Zjv/IMG-20260606-WA0016.jpg",
  "https://i.ibb.co/CpV0yVzn/IMG-20260606-WA0015.jpg",
  "https://i.ibb.co/qv0cT46/IMG-20260606-WA0013.jpg",
  "https://i.ibb.co/j91NZwPw/IMG-20260606-WA0014.jpg",
  "https://i.ibb.co/QvccCNvh/IMG-20260606-WA0017.jpg",
  "https://i.ibb.co/B2nkR3fF/IMG-20260606-WA0018.jpg",
  "https://i.ibb.co/84QcM3Mf/IMG-20260606-WA0021.jpg",
  "https://i.ibb.co/zWBXykhf/IMG-20260606-WA0023.jpg",
  "https://i.ibb.co/Rpgw94Lr/IMG-20260606-WA0022.jpg",
  "https://i.ibb.co/cSYWXtsB/IMG-20260606-WA0019.jpg",
  "https://i.ibb.co/MDhkkpnM/IMG-20260606-WA0020.jpg",
  "https://i.ibb.co/Y4t9HpJX/IMG-20260606-WA0025.jpg",
  "https://i.ibb.co/xqB5crYX/IMG-20260606-WA0024.jpg",
  "https://i.ibb.co/cK58W6Sm/IMG-20260606-WA0026.jpg",
  "https://i.ibb.co/1J2k4MGV/IMG-20260606-WA0032.jpg",
  "https://i.ibb.co/8ndkx6dD/IMG-20260606-WA0028.jpg",
  "https://i.ibb.co/6RrBLjJY/IMG-20260606-WA0029.jpg",
  "https://i.ibb.co/gLWvHfPG/IMG-20260606-WA0027.jpg",
  "https://i.ibb.co/Pzz15Dmq/IMG-20260606-WA0030.jpg",
  "https://i.ibb.co/DFzFVDX/IMG-20260606-WA0031.jpg",
  "https://i.ibb.co/WpRcdzLt/IMG-20260606-WA0033.jpg",
  "https://i.ibb.co/YTNd3GtC/IMG-20260606-WA0034.jpg",
  "https://i.ibb.co/Q7S7T9wq/IMG-20260606-WA0035.jpg",
  "https://i.ibb.co/GvT8Jpdy/IMG-20260606-WA0036.jpg",
  "https://i.ibb.co/CFf5Hb6/IMG-20260606-WA0037.jpg",
  "https://i.ibb.co/rRKF4dgB/IMG-20260606-WA0039.jpg",
  "https://i.ibb.co/RpGsCDQp/IMG-20260606-WA0040.jpg",
  "https://i.ibb.co/fztB9q42/IMG-20260606-WA0038.jpg"
];

// Return slightly varied heights and widths, ensuring none are too small
const getBentoClass = (index: number) => {
  const pattern = index % 7;
  // We want minimal differences: mostly 1x1, standard large cards, some spanning row 2
  // grid auto-rows-[300px] md:auto-rows-[400px]
  switch (pattern) {
    case 0: return "md:col-span-2 md:row-span-1";
    case 1: return "md:col-span-1 md:row-span-1";
    case 2: return "md:col-span-1 md:row-span-2";
    case 3: return "md:col-span-1 md:row-span-1";
    case 4: return "md:col-span-1 md:row-span-1";
    case 5: return "md:col-span-2 md:row-span-1";
    case 6: return "md:col-span-1 md:row-span-1";
    default: return "md:col-span-1 md:row-span-1";
  }
};

const ProjectImage = ({ image, idx, onClick }: { image: string, idx: number, onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-pearl-100 cursor-pointer ${getBentoClass(idx)}`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-pearl-50 z-10">
          <div className="w-10 h-10 border-4 border-charcoal-200 border-t-charcoal-800 rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={image} 
        alt={`Gill Architects Project ${idx + 1}`} 
        fetchPriority={idx < 6 ? "high" : "auto"}
        loading={idx < 6 ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-center justify-center">
        <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % PROJECT_IMAGES.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length : null));
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImageIndex]);

  return (
    <>
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/80 backdrop-blur-md"
            onClick={() => setSelectedImageIndex(null)}
          >
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={5}
              centerOnInit
              wheel={{ step: 0.1 }}
            >
              {({ zoomIn, zoomOut, resetTransform, state }) => (
                <React.Fragment>
                  <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                    <div 
                      className="bg-charcoal-900/50 backdrop-blur-sm text-pearl-100 px-4 py-2 rounded-full font-mono text-sm tracking-widest border border-white/10 shadow-lg select-none" 
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Math.round(state.scale * 100)}%
                    </div>

                    <button 
                      className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors shadow-lg"
                      onClick={(e) => { e.stopPropagation(); state.scale > 1 ? resetTransform() : zoomIn(); }}
                      title="Zoom In/Out"
                    >
                      {state.scale > 1 ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
                    </button>

                    <button 
                      className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors shadow-lg"
                      onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
                      title="Close"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {state.scale === 1 && (
                    <button 
                      className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/20 transition-colors shadow-lg"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length : null));
                      }}
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                  )}

                  {state.scale === 1 && (
                    <button 
                      className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/20 transition-colors shadow-lg"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % PROJECT_IMAGES.length : null));
                      }}
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  )}
                  
                  <div 
                    className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center pointer-events-none"
                  >
                    <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center pointer-events-auto">
                      <motion.img 
                        key={selectedImageIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                        src={PROJECT_IMAGES[selectedImageIndex]} 
                        alt={`Project ${selectedImageIndex + 1}`} 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                        drag={state.scale === 1 ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.8}
                        onDragEnd={(e, { offset }) => {
                          if (state.scale > 1) return;
                          const swipe = offset.x;

                          if (swipe < -50) {
                            setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % PROJECT_IMAGES.length : null));
                          } else if (swipe > 50) {
                            setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length : null));
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TransformComponent>
                  </div>
                </React.Fragment>
              )}
            </TransformWrapper>
          </motion.div>
        )}
      </AnimatePresence>

      <SEO 
        title="Architecture Portfolio | Top Gill Architects Projects in Punjab"
        description="View the prestigious portfolio of Gill Architects, featuring luxury residential designs, modern commercial architecture, and stunning 3D elevations across Punjab."
        keywords="architecture portfolio, residential projects punjab, commercial architecture portfolio, 3d elevation designs, top architect projects, gill architects portfolio"
        canonical="https://gillarchitects.vercel.app/projects"
      />

      <div className="bg-charcoal-900 text-white pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-pearl-300"></span>
            <span className="text-pearl-200 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] font-medium">OUR PORTFOLIO</span>
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-pearl-300"></span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl drop-shadow-2xl">Our Projects</h1>
          <p className="text-pearl-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            A showcase of our recent work in Abohar and nearby regions.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px] grid-flow-row-dense">
            {PROJECT_IMAGES.map((image, idx) => (
              <ProjectImage key={idx} image={image} idx={idx} onClick={() => setSelectedImageIndex(idx)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
