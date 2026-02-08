import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, AnimatedCounter } from '../animations';
import { Target, Layers, TrendingUp, Users, Banknote, PieChart } from 'lucide-react';

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

export function BusinessModelSlide() {
  const streams = [
    { icon: Layers, label: 'Service Commission', desc: 'Small fee per completed task' },
    { icon: Target, label: 'Premium Listings', desc: 'Worker visibility boost' },
    { icon: Banknote, label: 'Financial Services', desc: 'Worker credit & insurance' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Business Model
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Revenue Streams
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {streams.map(({ icon: Icon, label, desc }) => (
          <motion.div
            key={label}
            variants={scaleIn}
            className="p-8 rounded-2xl bg-card border border-primary/15 shadow-lg text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-foreground text-lg">{label}</h4>
            <p className="text-sm text-muted-foreground mt-2">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Detailed financials to be added
      </motion.p>
    </div>
  );
}

export function TractionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Traction
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Growth Metrics
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {[
          { label: 'Users', value: 'XX K', icon: Users },
          { label: 'Tasks Completed', value: 'XX K', icon: TrendingUp },
          { label: 'Workers Onboarded', value: 'XX K', icon: Users },
          { label: 'MoM Growth', value: 'XX%', icon: TrendingUp },
        ].map(({ label, value, icon: Icon }) => (
          <motion.div
            key={label}
            variants={fadeInUp}
            className="flex flex-col items-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <Icon className="w-8 h-8 text-primary mb-3" />
            <span className="text-2xl md:text-3xl font-black text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground mt-1">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Metrics to be updated with live data
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
