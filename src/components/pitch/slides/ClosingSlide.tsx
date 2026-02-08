import { motion } from 'framer-motion';
import { TypewriterText } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';

export function ClosingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 slide-gradient relative overflow-hidden">
      {/* Background rings */}
      {[500, 400, 300].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-primary/5"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity }}
        />
      ))}

      <motion.img
        src={gigloLogo}
        alt="Giglo"
        className="w-32 md:w-44 mb-8 drop-shadow-xl relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 150 }}
      />

      <motion.h2
        className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center relative z-10 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <TypewriterText text="Let's formalize India's workforce — together." delay={600} />
      </motion.h2>

      <motion.div
        className="mt-8 flex flex-col items-center gap-2 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <p className="text-lg text-primary font-semibold">www.giglo.in</p>
        <p className="text-muted-foreground">hello@giglo.in</p>
      </motion.div>
    </div>
  );
}
