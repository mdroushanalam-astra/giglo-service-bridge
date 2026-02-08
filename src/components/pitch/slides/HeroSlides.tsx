import { motion } from 'framer-motion';
import { TypewriterText, AnimatedCounter, staggerContainer, fadeInUp } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import heroCityscape from '@/assets/hero-india-cityscape.jpg';
import problemSplit from '@/assets/problem-split-scene.jpg';
import { Frown, UserX } from 'lucide-react';

// Floating 3D element component
function Float3DElement({ 
  children, 
  delay = 0, 
  duration = 6,
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -15, 0],
        rotateZ: [-2, 2, -2],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: 'easeInOut',
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated gradient orb
function GradientOrb({ size, color, position, delay = 0 }: { 
  size: number; 
  color: string; 
  position: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} rounded-full blur-3xl opacity-30 ${color}`}
      style={{ width: size, height: size }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 8, repeat: Infinity, delay }}
    />
  );
}

export function HeroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCityscape} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated gradient orbs */}
      <GradientOrb size={400} color="bg-primary" position="top-0 -left-40" delay={0} />
      <GradientOrb size={300} color="bg-primary" position="bottom-20 -right-20" delay={2} />
      
      {/* Animated rings with 3D perspective */}
      {[600, 450, 300].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-primary/20"
          style={{ 
            width: size, 
            height: size,
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: i % 2 === 0 ? 360 : -360,
            rotateX: [0, 10, 0],
          }}
          transition={{ duration: 25 + i * 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Floating 3D shapes */}
      <Float3DElement delay={0}>
        <div className="absolute top-20 left-[15%] w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30" />
      </Float3DElement>
      <Float3DElement delay={1} duration={5}>
        <div className="absolute top-32 right-[20%] w-6 h-6 rounded-full bg-primary/30" />
      </Float3DElement>
      <Float3DElement delay={2} duration={7}>
        <div className="absolute bottom-32 left-[25%] w-10 h-10 rounded-xl bg-primary/15 border border-primary/20" />
      </Float3DElement>
      <Float3DElement delay={0.5} duration={4}>
        <div className="absolute bottom-40 right-[15%] w-5 h-5 rounded-full bg-primary/25" />
      </Float3DElement>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Logo with glow effect */}
        <motion.div
          className="relative"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 blur-2xl bg-primary/30 scale-150" />
          <motion.img
            src={gigloLogo}
            alt="Giglo"
            className="relative w-40 md:w-56 drop-shadow-2xl"
            animate={{ 
              filter: ['drop-shadow(0 0 20px hsl(var(--primary)/0.3))', 'drop-shadow(0 0 40px hsl(var(--primary)/0.5))', 'drop-shadow(0 0 20px hsl(var(--primary)/0.3))']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center leading-tight max-w-4xl drop-shadow-lg"
        >
          <TypewriterText text="India's Hyperlocal Gig Marketplace" delay={400} />
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-lg md:text-2xl text-primary font-semibold tracking-wide">
            Formalizing 450M informal workers
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HookSlide() {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={problemSplit} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating Giglo logo watermark */}
      <motion.img
        src={gigloLogo}
        alt=""
        className="absolute top-6 left-6 w-16 opacity-50 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
      />

      {/* Left side - Consumer */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center p-8 gap-4"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 to-transparent" />
        
        <Float3DElement delay={0} className="relative z-10">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center border border-destructive/30 shadow-2xl backdrop-blur-sm">
            <Frown className="w-14 h-14 md:w-18 md:h-18 text-destructive" />
          </div>
        </Float3DElement>
        
        <h3 className="text-xl md:text-3xl font-bold text-foreground relative z-10">Frustrated Consumer</h3>
        <p className="text-muted-foreground text-center max-w-xs relative z-10">
          Can't find reliable, affordable help for everyday tasks
        </p>

        {/* Pain points */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mt-2 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {['Long waits', 'High prices', 'No trust'].map((pain, i) => (
            <motion.span 
              key={pain}
              className="text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              {pain}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Divider with animation */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-px h-48 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
      </motion.div>

      {/* Right side - Worker */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center p-8 gap-4"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
        
        <Float3DElement delay={0.5} className="relative z-10">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 shadow-2xl backdrop-blur-sm">
            <UserX className="w-14 h-14 md:w-18 md:h-18 text-primary" />
          </div>
        </Float3DElement>
        
        <h3 className="text-xl md:text-3xl font-bold text-foreground relative z-10">Idle Skilled Worker</h3>
        <p className="text-muted-foreground text-center max-w-xs relative z-10">
          Has skills but zero access to demand or digital identity
        </p>

        {/* Pain points */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mt-2 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {['No jobs', 'No identity', 'No growth'].map((pain, i) => (
            <motion.span 
              key={pain}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              {pain}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom stat card */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl" />
          <div className="relative bg-foreground text-background px-6 py-4 md:px-10 md:py-5 rounded-2xl shadow-2xl border border-foreground/20">
            <p className="text-xl md:text-3xl font-bold text-center whitespace-nowrap">
              <AnimatedCounter end={450} suffix="M" delay={1000} /> workers.{' '}
              <span className="text-primary">Zero</span> digital identity.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
