import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, AnimatedCounter } from '../animations';
import { Clock, DollarSign, HelpCircle, AlertTriangle, Fingerprint, Award, Radio, Wallet } from 'lucide-react';

const consumerPains = [
  { icon: Clock, label: '24-48hr Wait', desc: 'Simple services take days to arrange' },
  { icon: DollarSign, label: 'Overpaying', desc: 'Premium platforms too costly for small tasks' },
  { icon: HelpCircle, label: 'Uncertainty', desc: 'Discovery relies on word-of-mouth' },
  { icon: AlertTriangle, label: 'No Emergency Help', desc: 'No structured solution for urgent needs' },
];

export function ConsumerProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Problem — Consumer Side
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Access Is <span className="text-destructive">Broken</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {consumerPains.map(({ icon: Icon, label, desc }) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-destructive/5 border border-destructive/10"
          >
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-destructive" />
            </div>
            <h4 className="font-bold text-foreground mb-1">{label}</h4>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 bg-foreground text-background px-8 py-4 rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-lg md:text-xl font-bold">
          Simple services take <span className="text-primary">24-48 hours</span> to arrange
        </p>
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
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Problem — Worker Side
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Opportunity Is <span className="text-destructive">Invisible</span>
      </motion.h2>

      {/* Earnings flow */}
      <motion.div
        className="w-full max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-muted-foreground">Worker's Earnings</span>
        </div>
        <div className="relative h-12 rounded-full overflow-hidden bg-muted">
          <motion.div
            className="absolute inset-y-0 left-0 bg-destructive/70 flex items-center justify-center"
            initial={{ width: 0 }}
            animate={{ width: '45%' }}
            transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          >
            <span className="text-xs font-bold text-destructive-foreground">Middleman takes 40-50%</span>
          </motion.div>
          <motion.div
            className="absolute inset-y-0 right-0 bg-primary flex items-center justify-center"
            initial={{ width: 0 }}
            animate={{ width: '55%' }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          >
            <span className="text-xs font-bold text-primary-foreground">Worker keeps 50-60%</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {workerPains.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
          >
            <Icon className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-3xl md:text-5xl font-black text-destructive"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <AnimatedCounter end={40} delay={1500} />–<AnimatedCounter end={50} delay={1600} suffix="%" /> lost to middlemen
      </motion.div>
    </div>
  );
}

export function CoreGapSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 slide-gradient">
      <motion.p
        className="text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Core Gap
      </motion.p>

      <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
        {/* Demand bubble */}
        <motion.div
          className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-primary/10 border-2 border-primary/30 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-3xl md:text-4xl font-black text-primary">Demand</span>
          <span className="text-xs text-muted-foreground mt-1">Consumers</span>
        </motion.div>

        {/* Broken bridge */}
        <div className="flex-1 relative flex items-center justify-center">
          <motion.div
            className="absolute w-full h-1 bg-destructive/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute w-8 h-8 bg-destructive rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-destructive-foreground text-lg font-bold">✕</span>
          </motion.div>

          {/* Giglo bridges the gap */}
          <motion.div
            className="absolute w-full h-2 bg-gradient-to-r from-primary via-primary to-primary rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
          />
          <motion.div
            className="absolute bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, type: 'spring' }}
          >
            GIGLO
          </motion.div>
        </div>

        {/* Supply bubble */}
        <motion.div
          className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-accent border-2 border-primary/20 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-3xl md:text-4xl font-black text-foreground">Supply</span>
          <span className="text-xs text-muted-foreground mt-1">Workers</span>
        </motion.div>
      </div>

      <motion.p
        className="mt-16 text-xl md:text-2xl text-foreground font-semibold text-center max-w-2xl italic"
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
