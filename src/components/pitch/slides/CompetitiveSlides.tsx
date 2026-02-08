import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';
import { Users, UserPlus, Zap, Brain, TrendingDown, Heart, Check, X, Minus } from 'lucide-react';

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
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Competitive Landscape
      </motion.p>
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        How Giglo Stands Out
      </motion.h2>

      <motion.div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-border shadow-lg"
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
          <div className="p-3 md:p-4 text-center bg-primary text-primary-foreground">Giglo</div>
        </motion.div>

        {features.map(({ feature, premium, listing, giglo }, i) => (
          <motion.div
            key={feature}
            variants={fadeInUp}
            className="grid grid-cols-4 border-t border-border text-sm"
          >
            <div className="p-3 md:p-4 font-medium text-foreground">{feature}</div>
            <div className="p-3 md:p-4 flex justify-center"><CellIcon value={premium} /></div>
            <div className="p-3 md:p-4 flex justify-center"><CellIcon value={listing} /></div>
            <div className="p-3 md:p-4 flex justify-center bg-primary/5"><CellIcon value={giglo} /></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-8 text-lg md:text-xl font-bold text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Built for <span className="text-primary">95%</span>, not the top 5%
      </motion.p>
    </div>
  );
}

const differentiators = [
  { icon: Users, title: 'Mass Market', desc: 'Serves 95% of India — households, students, small businesses' },
  { icon: UserPlus, title: 'Inclusive Onboarding', desc: 'Workers start at Beginner, grow via AI badges' },
  { icon: Zap, title: 'Real-Time Matching', desc: 'Instant hyperlocal alerts within 2-5km radius' },
  { icon: Brain, title: 'AI Skill Badges', desc: 'Measurable capability, not guesswork' },
  { icon: TrendingDown, title: 'Lean Cost Structure', desc: 'Tech-first, no physical teams — structurally cheaper' },
  { icon: Heart, title: 'Worker Empowerment', desc: 'Digital identity, portable reputation, future credit access' },
];

export function DifferentiatorsSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Why Giglo Wins
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        6 Key Differentiators
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {differentiators.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={scaleIn}
            className="p-5 md:p-6 rounded-2xl bg-card border border-primary/15 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
