import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import solutionImage from '@/assets/solution-connection.jpg';
import workersImage from '@/assets/workers-empowered.jpg';
import { MapPin, Shield, Zap, UserCheck, ClipboardList, Radar, BadgeCheck, Star, Award, BellRing, Banknote, IdCard } from 'lucide-react';

// Floating animation component
function Float3D({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0], rotateZ: [-1, 1, -1] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  { icon: MapPin, label: 'Hyperlocal Discovery', desc: '2-5km radius matching', gradient: 'from-blue-500/20 to-blue-500/5' },
  { icon: Shield, label: 'AI Trust Badges', desc: 'Verified skill levels', gradient: 'from-green-500/20 to-green-500/5' },
  { icon: Zap, label: 'Instant Matching', desc: 'Real-time worker alerts', gradient: 'from-yellow-500/20 to-yellow-500/5' },
  { icon: UserCheck, label: 'Zero Middlemen', desc: 'Direct connection', gradient: 'from-purple-500/20 to-purple-500/5' },
];

export function SolutionSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={solutionImage} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>
      
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-60 h-60 bg-primary/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
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
        className="relative z-10 text-sm md:text-base font-semibold text-primary tracking-widest uppercase mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Solution
      </motion.p>

      {/* Logo with expanding rings - 3D enhanced */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Glowing rings */}
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/30"
            style={{ 
              width: 100 + i * 80, 
              height: 100 + i * 80,
              boxShadow: `0 0 ${20 + i * 10}px hsl(var(--primary)/0.2)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{ 
              scale: { delay: 0.3 + i * 0.2, duration: 0.6 },
              rotate: { duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }
            }}
          />
        ))}
        
        {/* Main logo with glow */}
        <motion.div className="relative">
          <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-150" />
          <motion.img
            src={gigloLogo}
            alt="Giglo"
            className="relative w-28 md:w-36 z-10 drop-shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          />
        </motion.div>
      </div>

      {/* Pillars - 3D cards */}
      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {pillars.map(({ icon: Icon, label, desc, gradient }, i) => (
          <motion.div key={label} variants={scaleIn}>
            <Float3D delay={i * 0.3}>
              <div className={`flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-primary/20 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 backdrop-blur-sm`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-3 shadow-inner">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm md:text-base">{label}</h4>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom tagline */}
      <motion.div
        className="relative z-10 mt-10 px-6 py-3 rounded-full bg-primary/10 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm font-medium text-foreground">
          Connecting <span className="text-primary font-bold">demand</span> to <span className="text-primary font-bold">supply</span> in real-time
        </p>
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
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      {/* Floating shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary/20 rounded-full"
          style={{ left: `${15 + i * 20}%`, top: `${20 + (i % 2) * 60}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
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
        className="relative z-10 text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        How It Works
      </motion.p>
      
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Consumer Flow
      </motion.h2>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-0 max-w-4xl w-full">
        {consumerSteps.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
          >
            <Float3D delay={i * 0.2}>
              <div className="flex flex-col items-center text-center w-36">
                {/* Step number badge */}
                <motion.div
                  className="absolute -top-3 -right-3 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold shadow-lg z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.3, type: 'spring' }}
                >
                  {i + 1}
                </motion.div>
                
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-3 shadow-lg">
                  <Icon className="w-9 h-9 text-primary" />
                </div>
                <span className="font-bold text-foreground text-sm">{label}</span>
                <span className="text-xs text-muted-foreground mt-1">{desc}</span>
              </div>
            </Float3D>
            
            {i < consumerSteps.length - 1 && (
              <motion.div
                className="hidden md:flex items-center mx-3"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.3, duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/30" />
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.div>
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
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={workersImage} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>
      
      {/* Gradient orb */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
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
        className="relative z-10 text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        How It Works
      </motion.p>
      
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Worker Journey
      </motion.h2>

      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl w-full mb-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {workerSteps.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            variants={fadeInUp}
          >
            <Float3D delay={i * 0.15}>
              <div className="flex flex-col items-center text-center w-28 md:w-32">
                <div className="relative">
                  {/* Glowing ring */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/30 rounded-full blur-md scale-110"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-foreground text-background rounded-full text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <span className="font-bold text-foreground text-sm mt-3">{label}</span>
                <span className="text-xs text-muted-foreground mt-1">{desc}</span>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill progression bar - enhanced */}
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm font-semibold text-foreground mb-3 text-center">Skill Growth Path</p>
        <div className="relative h-10 rounded-full bg-muted overflow-hidden shadow-inner border border-border">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/60 via-primary to-primary/80 rounded-full"
            initial={{ width: '5%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.8, duration: 2, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {skillLevels.map((level, i) => (
              <motion.span 
                key={level} 
                className="text-xs font-bold text-primary-foreground relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + i * 0.3 }}
              >
                {level}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
