import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';
import { Users, UserPlus, Zap, Brain, TrendingDown, Heart, Check, X, Minus } from 'lucide-react';
import gigloLogo from '@/assets/giglo-logo.png';
import abstract3D from '@/assets/abstract-3d-pattern.png';

const features = [
  { feature: 'Mass Market Access', premium: false, listing: false, giglo: true },
  { feature: 'Inclusive Onboarding', premium: false, listing: 'partial', giglo: true },
  { feature: 'Real-Time Matching', premium: 'partial', listing: false, giglo: true },
  { feature: 'AI Skill Badges', premium: false, listing: false, giglo: true },
  { feature: 'Low Commissions', premium: false, listing: 'partial', giglo: true },
  { feature: 'Worker Empowerment', premium: false, listing: false, giglo: true },
  { feature: 'Emergency Support', premium: false, listing: false, giglo: true },
  { feature: 'Digital Identity', premium: false, listing: false, giglo: true },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-primary" />;
  if (value === 'partial') return <Minus className="w-5 h-5 text-muted-foreground" />;
  return <X className="w-5 h-5 text-destructive/50" />;
}

export function CompetitionSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
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
        Competitive Landscape
      </motion.p>
      <motion.h2
        className="relative z-10 text-2xl md:text-3xl font-extrabold text-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        How Giglo Stands Out
      </motion.h2>

      <motion.div
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-border shadow-2xl backdrop-blur-sm"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-4 bg-foreground text-background text-sm font-bold"
        >
          <div className="p-3 md:p-4">Feature</div>
          <div className="p-3 md:p-4 text-center">Premium</div>
          <div className="p-3 md:p-4 text-center">Listings</div>
          <div className="p-3 md:p-4 text-center bg-primary text-primary-foreground flex items-center justify-center gap-2">
            <img src={gigloLogo} alt="" className="w-5 h-5" />
            Giglo
          </div>
        </motion.div>

        {features.map(({ feature, premium, listing, giglo }, i) => (
          <motion.div
            key={feature}
            variants={fadeInUp}
            className="grid grid-cols-4 border-t border-border text-sm hover:bg-muted/30 transition-colors"
          >
            <div className="p-3 md:p-4 font-medium text-foreground">{feature}</div>
            <div className="p-3 md:p-4 flex justify-center"><CellIcon value={premium} /></div>
            <div className="p-3 md:p-4 flex justify-center"><CellIcon value={listing} /></div>
            <div className="p-3 md:p-4 flex justify-center bg-primary/5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
              >
                <CellIcon value={giglo} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30">
          <p className="text-lg md:text-xl font-bold text-foreground">
            Built for <span className="text-primary">95%</span>, not the top 5%
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const differentiators = [
  { icon: Users, title: 'Mass Market', desc: 'Serves 95% of India — households, students, small businesses', gradient: 'from-blue-500/20 to-blue-500/5' },
  { icon: UserPlus, title: 'Inclusive Onboarding', desc: 'Workers start at Beginner, grow via AI badges', gradient: 'from-green-500/20 to-green-500/5' },
  { icon: Zap, title: 'Real-Time Matching', desc: 'Instant hyperlocal alerts within 2-5km radius', gradient: 'from-yellow-500/20 to-yellow-500/5' },
  { icon: Brain, title: 'AI Skill Badges', desc: 'Measurable capability, not guesswork', gradient: 'from-purple-500/20 to-purple-500/5' },
  { icon: TrendingDown, title: 'Lean Cost Structure', desc: 'Tech-first, no physical teams — structurally cheaper', gradient: 'from-red-500/20 to-red-500/5' },
  { icon: Heart, title: 'Worker Empowerment', desc: 'Digital identity, portable reputation, future credit access', gradient: 'from-pink-500/20 to-pink-500/5' },
];

// Floating animation
function Float3D({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotateZ: [-1, 1, -1] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
}

export function DifferentiatorsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-8">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
        Why Giglo Wins
      </motion.p>
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        6 Key Differentiators
      </motion.h2>

      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {differentiators.map(({ icon: Icon, title, desc, gradient }, i) => (
          <motion.div key={title} variants={scaleIn}>
            <Float3D delay={i * 0.2}>
              <div className={`relative p-5 md:p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-primary/15 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all cursor-default backdrop-blur-sm`}>
                {/* Glow effect */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-3 shadow-inner">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
