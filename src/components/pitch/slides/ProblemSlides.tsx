import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, AnimatedCounter } from '../animations';
import { Clock, DollarSign, HelpCircle, AlertTriangle, Fingerprint, Award, Radio, Wallet } from 'lucide-react';
import gigloLogo from '@/assets/giglo-logo.png';
import abstract3D from '@/assets/abstract-3d-pattern.png';

// Floating element component for 3D effect
function FloatingIcon({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -8, 0],
        rotateY: [0, 10, 0],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: 'easeInOut',
        delay 
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

const consumerPains = [
  { icon: Clock, label: '24-48hr Wait', desc: 'Simple services take days to arrange', color: 'from-red-500/20 to-red-500/5' },
  { icon: DollarSign, label: 'Overpaying', desc: 'Premium platforms too costly for small tasks', color: 'from-orange-500/20 to-orange-500/5' },
  { icon: HelpCircle, label: 'Uncertainty', desc: 'Discovery relies on word-of-mouth', color: 'from-yellow-500/20 to-yellow-500/5' },
  { icon: AlertTriangle, label: 'No Emergency Help', desc: 'No structured solution for urgent needs', color: 'from-red-600/20 to-red-600/5' },
];

export function ConsumerProblemSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-destructive/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Logo watermark */}
      <motion.img
        src={gigloLogo}
        alt=""
        className="absolute top-6 left-6 w-14 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      />

      <motion.p
        className="relative z-10 text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Problem — Consumer Side
      </motion.p>
      
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Access Is <span className="text-destructive">Broken</span>
      </motion.h2>

      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {consumerPains.map(({ icon: Icon, label, desc, color }, i) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="group relative"
          >
            <FloatingIcon delay={i * 0.2}>
              <div className={`flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${color} border border-destructive/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4 shadow-inner">
                  <Icon className="w-8 h-8 text-destructive" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{label}</h4>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </FloatingIcon>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="absolute inset-0 bg-foreground/20 blur-xl rounded-xl" />
        <div className="relative bg-foreground text-background px-8 py-4 rounded-xl shadow-2xl">
          <p className="text-lg md:text-xl font-bold">
            Simple services take <span className="text-primary">24-48 hours</span> to arrange
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const workerPains = [
  { icon: Fingerprint, label: 'No Digital ID' },
  { icon: Award, label: 'No Skill Recognition' },
  { icon: Radio, label: 'No Demand Access' },
  { icon: Wallet, label: 'No Stable Income' },
];

export function WorkerProblemSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Gradient orb */}
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.img
        src={gigloLogo}
        alt=""
        className="absolute top-6 left-6 w-14 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      />

      <motion.p
        className="relative z-10 text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Problem — Worker Side
      </motion.p>
      
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Opportunity Is <span className="text-destructive">Invisible</span>
      </motion.h2>

      {/* Earnings flow - enhanced */}
      <motion.div
        className="relative z-10 w-full max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-muted-foreground">Worker's Earnings</span>
        </div>
        <div className="relative h-14 rounded-2xl overflow-hidden bg-muted shadow-inner">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-destructive to-destructive/70 flex items-center justify-center"
            initial={{ width: 0 }}
            animate={{ width: '45%' }}
            transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          >
            <span className="text-xs md:text-sm font-bold text-destructive-foreground px-2">Middleman takes 40-50%</span>
          </motion.div>
          <motion.div
            className="absolute inset-y-0 right-0 bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center"
            initial={{ width: 0 }}
            animate={{ width: '55%' }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          >
            <span className="text-xs md:text-sm font-bold text-primary-foreground px-2">Worker keeps 50-60%</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {workerPains.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            variants={fadeInUp}
          >
            <FloatingIcon delay={i * 0.15}>
              <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            </FloatingIcon>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <div className="text-3xl md:text-5xl font-black text-destructive drop-shadow-lg">
          <AnimatedCounter end={40} delay={1500} />–<AnimatedCounter end={50} delay={1600} suffix="%" /> lost to middlemen
        </div>
      </motion.div>
    </div>
  );
}

export function CoreGapSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-10">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Animated background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Logo */}
      <motion.img
        src={gigloLogo}
        alt=""
        className="absolute top-6 left-6 w-14 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      />

      <motion.p
        className="relative z-10 text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Core Gap
      </motion.p>

      <div className="relative z-10 flex items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
        {/* Demand bubble - 3D enhanced */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm">
            <span className="text-3xl md:text-4xl font-black text-primary">Demand</span>
            <span className="text-xs text-muted-foreground mt-1">Consumers</span>
          </div>
        </motion.div>

        {/* Broken bridge - enhanced */}
        <div className="flex-1 relative flex items-center justify-center h-24">
          {/* Broken line */}
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-destructive/50 via-destructive/30 to-destructive/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          
          {/* Break indicator */}
          <motion.div
            className="absolute w-10 h-10 bg-gradient-to-br from-destructive to-destructive/80 rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-destructive-foreground text-xl font-bold">✕</span>
          </motion.div>

          {/* Giglo bridges the gap - animated */}
          <motion.div
            className="absolute w-full h-2 bg-gradient-to-r from-primary via-primary to-primary rounded-full shadow-lg"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
          
          {/* Giglo badge */}
          <motion.div
            className="absolute flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-2xl z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, type: 'spring' }}
          >
            <img src={gigloLogo} alt="" className="w-5 h-5" />
            GIGLO
          </motion.div>
        </div>

        {/* Supply bubble - 3D enhanced */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-accent/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-accent to-accent/50 border-2 border-primary/20 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm">
            <span className="text-3xl md:text-4xl font-black text-foreground">Supply</span>
            <span className="text-xs text-muted-foreground mt-1">Workers</span>
          </div>
        </motion.div>
      </div>

      <motion.p
        className="relative z-10 mt-16 text-xl md:text-2xl text-foreground font-semibold text-center max-w-2xl italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        "Demand and supply exist side by side.{' '}
        <span className="text-primary">There is no bridge.</span>"
      </motion.p>
    </div>
  );
}
