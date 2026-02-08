import { motion } from 'framer-motion';
import { TypewriterText, AnimatedCounter, staggerContainer, fadeInUp } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import { Frown, UserX } from 'lucide-react';

export function HeroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden slide-gradient">
      {[600, 450, 300].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-primary/10"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.15, 1], rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src={gigloLogo}
          alt="Giglo"
          className="w-36 md:w-52 drop-shadow-xl"
          variants={fadeInUp}
        />
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center leading-tight max-w-4xl"
        >
          <TypewriterText text="India's Hyperlocal Gig Marketplace" delay={400} />
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-2xl text-primary font-semibold tracking-wide"
        >
          Formalizing 450M informal workers
        </motion.p>
      </motion.div>
    </div>
  );
}

export function HookSlide() {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row">
      <motion.div
        className="flex-1 flex flex-col items-center justify-center bg-destructive/5 p-8 gap-4"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-destructive/10 flex items-center justify-center">
          <Frown className="w-12 h-12 md:w-16 md:h-16 text-destructive" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-foreground">Frustrated Consumer</h3>
        <p className="text-muted-foreground text-center max-w-xs">
          Can't find reliable, affordable help for everyday tasks
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center justify-center bg-primary/5 p-8 gap-4"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
          <UserX className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-foreground">Idle Skilled Worker</h3>
        <p className="text-muted-foreground text-center max-w-xs">
          Has skills but zero access to demand or digital identity
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-4 md:px-10 md:py-5 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-xl md:text-3xl font-bold text-center whitespace-nowrap">
          <AnimatedCounter end={450} suffix="M" delay={1000} /> workers.{' '}
          <span className="text-primary">Zero</span> digital identity.
        </p>
      </motion.div>
    </div>
  );
}
