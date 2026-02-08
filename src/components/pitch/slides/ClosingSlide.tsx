import { motion } from 'framer-motion';
import { TypewriterText } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import heroCityscape from '@/assets/hero-india-cityscape.jpg';
import { Mail, Globe, ArrowRight } from 'lucide-react';

export function ClosingSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCityscape} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Background rings with 3D effect */}
      {[500, 400, 300].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-primary/10"
          style={{ 
            width: size, 
            height: size,
            boxShadow: `0 0 ${30 + i * 10}px hsl(var(--primary)/0.1)`,
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{ 
            scale: { duration: 6 + i * 2, repeat: Infinity },
            rotate: { duration: 40 + i * 10, repeat: Infinity, ease: 'linear' }
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Main logo with enhanced glow */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 150 }}
      >
        {/* Multi-layer glow */}
        <motion.div 
          className="absolute inset-0 bg-primary/50 blur-3xl rounded-full scale-[2]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.img
          src={gigloLogo}
          alt="Giglo"
          className="relative w-36 md:w-48 drop-shadow-2xl"
          animate={{ 
            filter: [
              'drop-shadow(0 0 30px hsl(var(--primary)/0.4))', 
              'drop-shadow(0 0 50px hsl(var(--primary)/0.6))', 
              'drop-shadow(0 0 30px hsl(var(--primary)/0.4))'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Main headline with typewriter */}
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <TypewriterText text="Let's formalize India's workforce — together." delay={600} />
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 text-lg text-muted-foreground text-center max-w-xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        Join us in building the infrastructure that empowers 450M informal workers
      </motion.p>

      {/* Contact cards */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 }}
      >
        <motion.a
          href="https://www.giglo.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-5 h-5" />
          www.giglo.in
          <ArrowRight className="w-4 h-4" />
        </motion.a>
        
        <motion.a
          href="mailto:hello@giglo.in"
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground font-semibold hover:bg-foreground/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
          hello@giglo.in
        </motion.a>
      </motion.div>

      {/* Bottom flourish */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <motion.img 
          src={gigloLogo} 
          alt="" 
          className="w-8 opacity-50"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </motion.div>
    </div>
  );
}
