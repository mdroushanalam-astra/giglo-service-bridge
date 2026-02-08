import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, AnimatedCounter } from '../animations';
import { 
  Target, Layers, TrendingUp, Users, PieChart, 
  Wrench, Zap, CheckCircle, Calendar, Rocket, 
  MessageSquare, Building, Clock, Award, BarChart3
} from 'lucide-react';

export function MarketSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 slide-gradient">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Market Opportunity
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A Massive Untapped Market
      </motion.h2>

      {/* TAM SAM SOM concentric circles */}
      <div className="relative flex items-center justify-center">
        {[
          { size: 280, label: 'TAM', value: '$XX B', color: 'bg-primary/10 border-primary/20', delay: 0.5 },
          { size: 200, label: 'SAM', value: '$XX B', color: 'bg-primary/20 border-primary/30', delay: 0.8 },
          { size: 120, label: 'SOM', value: '$XX B', color: 'bg-primary/40 border-primary/50', delay: 1.1 },
        ].map(({ size, label, value, color, delay }) => (
          <motion.div
            key={label}
            className={`absolute rounded-full border-2 ${color} flex flex-col items-center justify-center`}
            style={{ width: size, height: size }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, duration: 0.6, type: 'spring' }}
          >
            <span className="text-lg font-black text-foreground">{label}</span>
            <span className="text-sm text-primary font-semibold">{value}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-20 text-muted-foreground italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Market data to be updated
      </motion.p>
    </div>
  );
}

// Animated Progress Bar Component
function AnimatedProgress({ value, delay = 0, label }: { value: number; delay?: number; label: string }) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-bold text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function TractionSlide() {
  const keyMetrics = [
    { icon: Users, value: 200, suffix: '+', label: 'Workers Onboarded', desc: 'Across 5+ categories' },
    { icon: BarChart3, value: 80, suffix: '%', label: 'App Complete', desc: 'Weeks from launch' },
    { icon: Calendar, value: 30, suffix: ' Days', label: 'To Launch', desc: 'Delhi-NCR pilot' },
    { icon: Award, value: 95, suffix: '%', label: 'Worker Intent', desc: 'From 500+ survey' },
  ];

  const categories = ['Cleaning', 'Plumbing', 'Electrical', 'Painting', 'General Labor'];

  const timeline = [
    { phase: 'Validation', status: 'done', label: '500+ worker survey' },
    { phase: 'Onboarding', status: 'done', label: '200+ workers active' },
    { phase: 'Development', status: 'current', label: '80% complete' },
    { phase: 'Pilot Launch', status: 'upcoming', label: 'Delhi-NCR in 30 days' },
  ];

  const validationSignals = [
    'On-ground worker drives successful',
    'Discussions with gig worker unions',
    'Early workers show repeat intent',
    'Landing page capturing demand',
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Traction & Momentum
      </motion.p>
      <motion.h2
        className="text-lg md:text-2xl font-extrabold text-foreground mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        From Validation to Execution
      </motion.h2>

      {/* Key Metrics Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mb-5"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {keyMetrics.map(({ icon: Icon, value, suffix, label, desc }) => (
          <motion.div
            key={label}
            variants={scaleIn}
            className="flex flex-col items-center p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/15"
          >
            <Icon className="w-6 h-6 text-primary mb-1" />
            <div className="text-xl md:text-2xl font-black text-primary">
              <AnimatedCounter end={value} delay={300} />{suffix}
            </div>
            <span className="text-xs font-semibold text-foreground text-center">{label}</span>
            <span className="text-[10px] text-muted-foreground">{desc}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Middle Row: Categories + Timeline */}
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl w-full mb-4">
        {/* Service Categories */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-card border border-border"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-primary" /> Active Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Launch Timeline */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-card border border-border"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <Rocket className="w-4 h-4 text-primary" /> Launch Timeline
          </h4>
          <div className="flex items-center justify-between">
            {timeline.map(({ phase, status, label }, i) => (
              <motion.div
                key={phase}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15 }}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  status === 'done' ? 'bg-primary text-primary-foreground' :
                  status === 'current' ? 'bg-primary/30 text-primary border-2 border-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {status === 'done' ? '✓' : i + 1}
                </div>
                <span className="text-[10px] font-semibold text-foreground mt-1">{phase}</span>
                <span className="text-[9px] text-muted-foreground">{label}</span>
                {i < timeline.length - 1 && (
                  <div className={`absolute top-3 left-full w-full h-0.5 ${
                    status === 'done' ? 'bg-primary' : 'bg-muted'
                  }`} style={{ width: '100%', transform: 'translateX(-50%)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Progress + Validation */}
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl w-full">
        {/* Product Progress */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> Product Readiness
          </h4>
          <div className="space-y-2">
            <AnimatedProgress value={100} delay={1} label="Backend Infrastructure" />
            <AnimatedProgress value={100} delay={1.1} label="Worker Onboarding Flow" />
            <AnimatedProgress value={90} delay={1.2} label="Gig Matching Logic" />
            <AnimatedProgress value={70} delay={1.3} label="UI Polish & Launch Prep" />
          </div>
        </motion.div>

        {/* Validation Signals */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-card border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" /> Validation Signals
          </h4>
          <ul className="space-y-2">
            {validationSignals.map((signal, i) => (
              <motion.li
                key={signal}
                className="flex items-start gap-2 text-xs text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <span className="text-primary mt-0.5">✓</span>
                {signal}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom insight */}
      <motion.p
        className="mt-4 text-xs text-center text-foreground/70 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-bold text-primary">Key Signal:</span> Real supply-side momentum with clear path from pilot to scale
      </motion.p>
    </div>
  );
}

export function TeamSlide() {
  const team = [
    { name: 'Founder Name', role: 'CEO & Co-Founder', bg: 'bg-primary/20' },
    { name: 'Founder Name', role: 'CTO & Co-Founder', bg: 'bg-primary/15' },
    { name: 'Founder Name', role: 'COO & Co-Founder', bg: 'bg-primary/10' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Team
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Built by People Who Care
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {team.map(({ name, role, bg }) => (
          <motion.div
            key={role}
            variants={scaleIn}
            className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border shadow-md"
          >
            <div className={`w-24 h-24 rounded-full ${bg} flex items-center justify-center mb-4`}>
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold text-foreground text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function AskSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 slide-gradient">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Ask
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Raising $X.XM Seed Round
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {[
          { label: 'Product & Tech', pct: '40%', icon: Layers },
          { label: 'Growth & Marketing', pct: '35%', icon: TrendingUp },
          { label: 'Operations', pct: '25%', icon: PieChart },
        ].map(({ label, pct, icon: Icon }) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border border-primary/15 shadow-md"
          >
            <Icon className="w-10 h-10 text-primary mb-3" />
            <span className="text-3xl font-black text-primary">{pct}</span>
            <span className="text-sm font-semibold text-foreground mt-2">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Use of funds to be finalized
      </motion.p>
    </div>
  );
}
