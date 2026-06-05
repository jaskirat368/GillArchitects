import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps, AnimatePresence } from 'motion/react';

interface InteractiveCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  tiltIntensity?: number;
  flowColor?: string;
  showFlow?: boolean;
  overflowVisible?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  tiltIntensity = 18, 
  flowColor = '#faf0ca', 
  showFlow = true,
  overflowVisible = false,
  className = '',
  ...props 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || !('ontouchstart' in window === false));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothing the motion
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transforms for rotation - increased intensity at the edges via damping/range or simple linear
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Relative positions (-0.5 to 0.5)
    const rawX = mouseX / width - 0.5;
    const rawY = mouseY / height - 0.5;
    
    // Add a slight power curve so corners dip more dramatically
    const xPct = Math.sign(rawX) * Math.pow(Math.abs(rawX) * 2, 1.25) / 2;
    const yPct = Math.sign(rawY) * Math.pow(Math.abs(rawY) * 2, 1.25) / 2;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      className={`relative rounded-[2rem] ${className}`}
      {...props}
    >
      {/* Flow Effect Border */}
      {showFlow && (
        <div 
          className="absolute -inset-[2px] rounded-[inherit] pointer-events-none"
          style={{
            filter: `drop-shadow(0 0 6px ${flowColor}80)`,
            zIndex: 1,
          }}
        >
          <div 
            className="absolute inset-0 rounded-[inherit]"
            style={{
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '2px', // The thickness of the flow border
              overflow: 'hidden',
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2"
              style={{
                background: `conic-gradient(from 0deg, transparent 75%, ${flowColor}90 95%, ${flowColor} 100%)`,
                animation: 'flowRotate 3s linear infinite',
              }}
            />
          </div>
        </div>
      )}

      {/* Glow highlight that follows cursor */}
      <AnimatePresence>
        {isHovered && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 pointer-events-none rounded-[inherit]"
            style={{
              background: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), ${flowColor}15, transparent)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div 
        className={`relative z-10 w-full h-full rounded-[inherit] ${overflowVisible ? 'overflow-visible' : 'overflow-hidden'}`}
        style={{ transform: isHovered && !isMobile ? 'translateZ(20px)' : 'translateZ(0px)', transition: 'transform 0.3s ease-out', transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group:hover {
          --mouse-x: ${x.get() * 100 + 50}%;
          --mouse-y: ${y.get() * 100 + 50}%;
        }
      `}} />
    </motion.div>
  );
};

export default InteractiveCard;
