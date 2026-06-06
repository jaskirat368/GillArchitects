import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('sketching'); // sketching -> printing -> optimizing -> complete

  useEffect(() => {
    // Dynamic organic loading percent to simulate high-precision processing
    const intervalTime = 40;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setPhase('complete');
            setTimeout(() => {
              onComplete();
            }, 800); // smooth exit transition
          }, 500);
          return 100;
        }

        // Simulating realistic calculation steps for architects
        // Slow initial baseline structure, steady mid speed, brief precision finishing
        let step = 1;
        const diff = 100 - prev;
        
        if (prev < 35) {
          // Foundations and vector lines
          step = Math.random() < 0.65 ? 1 : 2;
        } else if (prev < 75) {
          // Columns and story beam projections
          step = Math.random() < 0.5 ? 1 : 2;
        } else {
          // Detail calculations and rendering adjustment curves
          step = Math.random() < 0.4 ? 1 : (Math.random() < 0.15 ? 2 : 0);
        }
        
        const nextProgress = prev + Math.max(1, Math.min(step, diff));

        // Dynamic, contextual phase transitions based directly on render completion
        if (nextProgress < 40) {
          setPhase('sketching');
        } else if (nextProgress < 80) {
          setPhase('printing');
        } else {
          setPhase('optimizing');
        }

        return nextProgress;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  // Path animations variants for the drafting blueprint tracing
  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (customDelay: number) => ({
      pathLength: 1,
      opacity: [0, 0.4, 0.8, 1],
      transition: {
        pathLength: { delay: customDelay, duration: 1.8, ease: "easeInOut" },
        opacity: { delay: customDelay, duration: 0.5 }
      }
    })
  };

  const subtleGuideVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.35,
      transition: { duration: 1.4, ease: "easeOut" }
    }
  };

  return (
    <div className="fixed inset-0 bg-charcoal-950 text-white z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-hidden font-mono select-none">
      
      {/* 1. Fine Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #ffffff 1px, transparent 1.5px),
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px, 64px 64px, 64px 64px',
        }}
      />

      {/* 2. Full-Screen Architectural Coordinate Guides */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal Laser Guide Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-1/2 h-[0.75px] bg-[#faf0ca]/15 origin-left"
        />
        {/* Vertical Laser Guide Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-1/2 w-[0.75px] bg-[#faf0ca]/15 origin-top"
        />

        {/* Dynamic Sweeping Matrix Line */}
        <motion.div
          initial={{ y: '-10%' }}
          animate={{ y: '110%' }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#faf0ca]/25 to-transparent blur-[0.5px]"
        />
        <motion.div
          initial={{ x: '-10%' }}
          animate={{ x: '110%' }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.15 }}
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-pearl-300/15 to-transparent blur-[0.5px]"
        />
        
        {/* Radial Compass Ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.015] rounded-full hidden md:block" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#faf0ca]/[0.025] rounded-full hidden md:block" />
      </div>

      {/* 3. Header Specification Telemetry (Top Bar) */}
      <div className="relative flex justify-between items-start text-[9px] text-charcoal-400 font-semibold tracking-widest uppercase">
        <div className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-white/90">
            <span className="inline-block w-1.5 h-1.5 bg-[#faf0ca] rounded-full animate-pulse" />
            ENGINEERING SECURE CONSOLE
          </span>
          <span>LOC: 30° 07' 11" N / 74° 11' 29" E • PUNJAB</span>
        </div>
        <div className="text-right flex flex-col gap-1.5">
          <span>SCALE • 1:50</span>
          <span>STABILITY MODULE ACTIVE</span>
        </div>
      </div>

      {/* 4. Center Tracing Canvas & Monogram */}
      <div className="relative flex flex-col items-center justify-center my-auto z-10">
        
        {/* Blueprint Framing Container */}
        <div className="relative p-10 sm:p-14 md:p-16 flex flex-col items-center max-w-md w-full">
          
          {/* Framed Bracket Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#faf0ca]/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#faf0ca]/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#faf0ca]/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#faf0ca]/40" />

          {/* Plus Crosshairs in corners */}
          <div className="absolute -top-1 -left-1 w-3 h-3 flex items-center justify-center opacity-65">
            <div className="w-[1px] h-3 bg-[#faf0ca]" />
            <div className="absolute w-3 h-[1px] bg-[#faf0ca]" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center opacity-65">
            <div className="w-[1px] h-3 bg-[#faf0ca]" />
            <div className="absolute w-3 h-[1px] bg-[#faf0ca]" />
          </div>

          {/* Core Architectural Vector Layout */}
          <div className="w-48 h-48 mb-6 relative">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 200 200" 
              fill="none" 
              className="text-[#faf0ca] drop-shadow-[0_0_15px_rgba(250,240,202,0.1)]"
            >
              {/* Symmetrical Outer Guide Lines */}
              <motion.circle 
                cx="100" cy="100" r="85" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                strokeDasharray="2 6"
                variants={subtleGuideVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.circle 
                cx="100" cy="100" r="55" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                strokeDasharray="4 4"
                variants={subtleGuideVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Center Axis Guideline Ticks */}
              <motion.line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" variants={subtleGuideVariants} initial="hidden" animate="visible" />

              {/* The "Elevation / Building" Frame Tracing */}
              {/* Foundation/Ground level */}
              <motion.line x1="40" y1="150" x2="160" y2="150" stroke="currentColor" strokeWidth="1.2" custom={0.1} variants={strokeVariants} initial="hidden" animate="visible" />
              
              {/* Main Structural Columns */}
              <motion.path d="M65,150 L65,75" stroke="currentColor" strokeWidth="1.5" custom={0.3} variants={strokeVariants} initial="hidden" animate="visible" />
              <motion.path d="M100,150 L100,50" stroke="currentColor" strokeWidth="1.0" custom={0.4} variants={strokeVariants} initial="hidden" animate="visible" />
              <motion.path d="M135,150 L135,75" stroke="currentColor" strokeWidth="1.5" custom={0.5} variants={strokeVariants} initial="hidden" animate="visible" />

              {/* First Story Floor Beam */}
              <motion.path d="M50,110 L150,110" stroke="#ffffff" strokeWidth="1" custom={0.6} variants={strokeVariants} initial="hidden" animate="visible" />
              
              {/* Cantilever Flat Roof / Parapet Design */}
              <motion.path d="M45,75 L155,75" stroke="currentColor" strokeWidth="1.8" custom={0.7} variants={strokeVariants} initial="hidden" animate="visible" />
              
              {/* Penthouse High Slab */}
              <motion.path d="M80,50 L120,50" stroke="currentColor" strokeWidth="1.5" custom={0.8} variants={strokeVariants} initial="hidden" animate="visible" />

              {/* Modern Angled Elevation Line Accent (Cantilever Slant) */}
              <motion.path d="M45,75 L100,50 L155,75" stroke="currentColor" strokeWidth="0.75" custom={0.9} variants={strokeVariants} initial="hidden" animate="visible" />

              {/* Precise AutoCAD-style Dimension Guideline & Arrowheads */}
              <motion.path d="M30,75 L30,150" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.path d="M26,75 L34,75" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.path d="M26,150 L34,150" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.path d="M170,50 L170,150" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.path d="M166,50 L174,50" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
              <motion.path d="M166,150 L174,150" stroke="currentColor" strokeWidth="0.5" variants={subtleGuideVariants} initial="hidden" animate="visible" />
            </svg>
          </div>

          {/* Monogram Brand text layout */}
          <div className="text-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-2xl md:text-3xl font-black tracking-[0.25em] text-white flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span>GILL</span>
              <span className="w-px h-6 bg-[#faf0ca]/45 inline-block" />
              <span className="font-light text-pearl-100 tracking-[0.2em]">ARCHITECTS</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-[9px] uppercase tracking-[0.45em] text-charcoal-400 mt-2.5 font-bold"
            >
              12+ Years of Excellence • Est. 2014
            </motion.div>
          </div>

        </div>
      </div>

      {/* 5. Progress Tracking, Ruler Mockup, and Loading Execution (Footer Bar) */}
      <div className="relative mt-auto flex flex-col gap-4">
        
        {/* AutoCAD Scale Ruler Tick Marks simulation */}
        <div className="w-full relative">
          <div className="h-[2px] bg-charcoal-800 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#faf0ca] to-white"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Architectural tick coordinates resembling ruler scaling */}
          <div className="flex justify-between text-charcoal-500 text-[6px] mt-1 px-1 tracking-wider">
            <span>0.00m</span>
            <span>2.50m (STRUCT)</span>
            <span>5.00m (AXIS)</span>
            <span>7.50m (MEP)</span>
            <span>10.00m MAX</span>
          </div>
        </div>

        {/* Dynamic percentage outputs & state */}
        <div className="flex justify-between items-end text-[9px] text-charcoal-400 font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#faf0ca] font-bold text-base transition-all duration-300">
              {Math.min(100, Math.floor(progress))}%
            </span>
            <span className="text-charcoal-500">
              // {phase === 'sketching' 
                ? 'TRACING WIREFRAME MODEL...' 
                : phase === 'printing' 
                ? 'PROJECTING 3D ELEVATION...' 
                : 'OPTIMIZING RENDER PERSPECTIVE...'}
            </span>
          </div>
          <div className="text-right text-charcoal-400">
            REV.2026 // SYSTEM ONLINE
          </div>
        </div>
      </div>

    </div>
  );
};
