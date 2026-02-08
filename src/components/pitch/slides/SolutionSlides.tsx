import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import { MapPin, Shield, Zap, UserCheck, ClipboardList, Radar, BadgeCheck, Star, Award, BellRing, Banknote, IdCard } from 'lucide-react';

const pillars = [
  { icon: MapPin, label: 'Hyperlocal Discovery', desc: '2-5km radius matching' },
  { icon: Shield, label: 'AI Trust Badges', desc: 'Verified skill levels' },
  { icon: Zap, label: 'Instant Matching', desc: 'Real-time worker alerts' },
  { icon: UserCheck, label: 'Zero Middlemen', desc: 'Direct connection' },
];

export function SolutionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 slide-gradient">
      <motion.p
        className="text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Solution
      </motion.p>

      <div className="relative flex items-center justify-center mb-12">
        {/* Expanding rings */}
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/20"
            style={{ width: 100 + i * 80, height: 100 + i * 80 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          />
        ))}
        <motion.img
          src={gigloLogo}
          alt="Giglo"
          className="w-24 md:w-32 relative z-10 drop-shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        />
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {pillars.map(({ icon: Icon, label, desc }) => (
          <motion.div
            key={label}
            variants={scaleIn}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-primary/20 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-bold text-foreground text-sm md:text-base">{label}</h4>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const consumerSteps = [
  { icon: ClipboardList, label: 'Post Task', desc: 'Describe what you need' },
  { icon: Radar, label: 'Get Matched', desc: 'Workers within 2-5km' },
  { icon: BadgeCheck, label: 'Verified Arrives', desc: 'Skill-verified worker' },
  { icon: Star, label: 'Pay & Rate', desc: 'Transparent pricing' },
];

export function ConsumerFlowSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        How It Works
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Consumer Flow
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 max-w-4xl w-full">
        {consumerSteps.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center w-36">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-3">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-foreground text-sm">{label}</span>
              <span className="text-xs text-muted-foreground mt-1">{desc}</span>
            </div>
            {i < consumerSteps.length - 1 && (
              <motion.div
                className="hidden md:block w-12 h-0.5 bg-primary/30 mx-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + i * 0.3, duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const workerSteps = [
  { icon: IdCard, label: 'Sign Up', desc: 'Quick inclusive onboarding' },
  { icon: Award, label: 'Get Skill Badge', desc: 'AI-powered verification' },
  { icon: BellRing, label: 'Receive Alerts', desc: 'Real-time job notifications' },
  { icon: Banknote, label: 'Accept & Earn', desc: 'Direct payment, no middlemen' },
  { icon: Shield, label: 'Build Identity', desc: 'Portable digital reputation' },
];

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export function WorkerFlowSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        How It Works
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Worker Journey
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl w-full mb-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {workerSteps.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="flex flex-col items-center text-center w-28 md:w-32"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <span className="font-bold text-foreground text-sm mt-3">{label}</span>
            <span className="text-xs text-muted-foreground mt-1">{desc}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill progression bar */}
      <motion.div
        className="w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm font-semibold text-foreground mb-3 text-center">Skill Growth Path</p>
        <div className="relative h-8 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/60 via-primary to-primary rounded-full"
            initial={{ width: '5%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.8, duration: 2, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {skillLevels.map(level => (
              <span key={level} className="text-xs font-bold text-primary-foreground relative z-10">{level}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
