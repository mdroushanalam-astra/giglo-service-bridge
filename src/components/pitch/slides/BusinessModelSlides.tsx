import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, fadeInLeft, fadeInRight, AnimatedCounter } from '../animations';
import { 
  Banknote, RefreshCw, Store, Briefcase, Zap, Star, 
  ArrowRight, Users, Home, Wrench, CheckCircle, XCircle,
  TrendingUp, Shield, Coins
} from 'lucide-react';
import ecosystemImage from '@/assets/business-ecosystem.png';
import localShopImage from '@/assets/local-shop.png';

// Slide 1: Business Model Overview - The Core Concept
export function BusinessModelOverviewSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Business Model
      </motion.p>
      <motion.h2
        className="text-xl md:text-3xl font-extrabold text-foreground mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        How Giglo Makes Money
      </motion.h2>
      <motion.p
        className="text-sm md:text-base text-muted-foreground text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A hyperlocal, two-sided marketplace that monetizes transactions without owning labour or inventory.
      </motion.p>

      {/* The Money Flow Diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-4xl w-full">
        {/* Consumer */}
        <motion.div
          className="flex flex-col items-center p-4 md:p-6 rounded-2xl bg-card border border-border shadow-md min-w-[140px]"
          variants={fadeInLeft}
          initial="hidden"
          animate="show"
        >
          <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
            <Home className="w-7 h-7 text-blue-500" />
          </div>
          <h4 className="font-bold text-foreground">Consumer</h4>
          <p className="text-xs text-muted-foreground text-center">Pays for service</p>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
          <motion.div 
            className="text-lg font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            ₹100
          </motion.div>
        </motion.div>

        {/* Giglo Platform */}
        <motion.div
          className="flex flex-col items-center p-4 md:p-6 rounded-2xl bg-primary/10 border-2 border-primary/30 shadow-lg min-w-[160px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
            <Banknote className="w-8 h-8 text-primary" />
          </div>
          <h4 className="font-bold text-foreground text-lg">Giglo</h4>
          <motion.div 
            className="text-2xl font-black text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
          >
            10-18%
          </motion.div>
          <p className="text-xs text-muted-foreground">Commission</p>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
          <motion.div 
            className="text-lg font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            ₹82-90
          </motion.div>
        </motion.div>

        {/* Worker */}
        <motion.div
          className="flex flex-col items-center p-4 md:p-6 rounded-2xl bg-card border border-border shadow-md min-w-[140px]"
          variants={fadeInRight}
          initial="hidden"
          animate="show"
        >
          <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
            <Wrench className="w-7 h-7 text-green-500" />
          </div>
          <h4 className="font-bold text-foreground">Worker</h4>
          <p className="text-xs text-muted-foreground text-center">Receives payment</p>
        </motion.div>
      </div>

      {/* Key Insight */}
      <motion.div
        className="mt-8 p-4 rounded-xl bg-muted/50 border border-border max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <p className="text-sm text-foreground text-center">
          <span className="font-bold text-primary">Key Insight:</span> We earn through <span className="font-semibold">volume, not high margins</span>. 
          Workers earn more than contractor systems, consumers pay less than premium platforms.
        </p>
      </motion.div>

      {/* Commission factors */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {['Service Category', 'Urgency Level', 'Location'].map((factor, i) => (
          <span key={factor} className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
            {factor}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Slide 2: All Revenue Streams
export function RevenueStreamsSlide() {
  const streams = [
    { 
      icon: Banknote, 
      label: 'Gig Commission', 
      pct: '10-18%',
      desc: 'Per completed service',
      primary: true
    },
    { 
      icon: RefreshCw, 
      label: 'Subscriptions', 
      pct: 'Monthly',
      desc: 'Household cleaning & maintenance plans'
    },
    { 
      icon: Star, 
      label: 'Worker Boosts', 
      pct: 'Optional',
      desc: 'Visibility in local searches, priority alerts'
    },
    { 
      icon: Briefcase, 
      label: 'B2B Contracts', 
      pct: 'High Vol',
      desc: 'Hostels, PGs, small offices, retail'
    },
    { 
      icon: Zap, 
      label: 'Emergency Premium', 
      pct: '+Fee',
      desc: 'Late-night, urgent, breakdown assistance'
    },
    { 
      icon: Store, 
      label: 'Partner Ecosystem', 
      pct: 'Referral',
      desc: 'Local hardware & tool shop network'
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Revenue Streams
      </motion.p>
      <motion.h2
        className="text-xl md:text-3xl font-extrabold text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        6 Ways We Monetize
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {streams.map(({ icon: Icon, label, pct, desc, primary }) => (
          <motion.div
            key={label}
            variants={scaleIn}
            className={`relative p-5 rounded-2xl text-center transition-all hover:scale-105 ${
              primary 
                ? 'bg-primary/15 border-2 border-primary/40 shadow-lg' 
                : 'bg-card border border-border hover:border-primary/30'
            }`}
          >
            {primary && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-background bg-primary px-2 py-0.5 rounded-full">
                PRIMARY
              </span>
            )}
            <div className={`w-12 h-12 rounded-full ${primary ? 'bg-primary/25' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-3`}>
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl md:text-2xl font-black text-primary block mb-1">{pct}</span>
            <h4 className="font-bold text-foreground text-sm">{label}</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-tight">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Revenue mix indicator */}
      <motion.div
        className="mt-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground">Revenue Mix:</span>
        <div className="flex h-3 rounded-full overflow-hidden w-48">
          <div className="bg-primary w-[60%]" title="Commission" />
          <div className="bg-primary/60 w-[20%]" title="Subscriptions" />
          <div className="bg-primary/30 w-[20%]" title="Other" />
        </div>
        <span className="text-xs text-muted-foreground">Commission-led</span>
      </motion.div>
    </div>
  );
}

// Slide 3: Local Ecosystem - The Differentiator
export function LocalEcosystemSlide() {
  const benefits = [
    { icon: Wrench, text: 'Workers get tools without upfront cost' },
    { icon: Coins, text: 'Short credit or discounted rates' },
    { icon: CheckCircle, text: 'Better job completion quality' },
    { icon: TrendingUp, text: 'Money circulates locally' },
  ];

  const revenue = [
    'Commission from partner shops',
    'Sponsored listings inside app',
    'Bulk demand leverage'
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      <motion.span
        className="inline-block text-[10px] font-bold text-background bg-primary px-3 py-1 rounded-full mb-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        KEY DIFFERENTIATOR
      </motion.span>
      <motion.h2
        className="text-xl md:text-3xl font-extrabold text-foreground mb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Local Hardware Partner Network
      </motion.h2>
      <motion.p
        className="text-sm text-muted-foreground text-center max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Giglo partners with 1-2 verified local shops per category per locality — creating a complete service ecosystem.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full">
        {/* Left: Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img 
            src={localShopImage} 
            alt="Local hardware shop" 
            className="w-full max-w-xs rounded-2xl shadow-lg border border-border"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 space-y-4">
          {/* How it works */}
          <motion.div
            className="p-4 rounded-xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Store className="w-5 h-5 text-primary" /> How It Works
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Workers can <span className="font-semibold text-foreground">pick up tools or consumables</span> for a task from partner shops, 
              get items on <span className="font-semibold text-foreground">short credit</span>, and avoid upfront equipment costs.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-2 gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {benefits.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={fadeInUp}
                className="flex items-center gap-2 p-2 rounded-lg bg-primary/5"
              >
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs text-foreground">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Revenue from this */}
          <motion.div
            className="p-4 rounded-xl bg-primary/10 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h4 className="font-bold text-foreground mb-2 text-sm">Revenue from Partners:</h4>
            <ul className="space-y-1">
              {revenue.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mt-6 text-sm text-center text-foreground/80 italic max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        "This turns Giglo into a <span className="font-bold text-primary">local service ecosystem</span>, not just an app."
      </motion.p>
    </div>
  );
}

// Slide 4: Asset-Light & Defensibility
export function AssetLightSlide() {
  const notDoing = [
    'Owning workers',
    'Inventory management', 
    'Centralized warehouses',
    'Forcing workers to buy tools',
    'Heavy logistics'
  ];

  const moats = [
    { icon: Users, label: 'Deep Local Partnerships', desc: 'On-ground relationships competitors can\'t replicate' },
    { icon: Shield, label: 'Worker Trust Lock-in', desc: 'Digital identity, ratings, and skill badges are portable' },
    { icon: TrendingUp, label: 'Network Effects', desc: 'More workers → better service → more consumers → more workers' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
      <motion.p
        className="text-sm font-semibold text-primary tracking-widest uppercase mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Why We Win
      </motion.p>
      <motion.h2
        className="text-xl md:text-3xl font-extrabold text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Asset-Light & Defensible
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        {/* What we're NOT doing */}
        <motion.div
          className="flex-1 p-6 rounded-2xl bg-card border border-border"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-muted-foreground" />
            What We're NOT Doing
          </h3>
          <ul className="space-y-3">
            {notDoing.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">✕</span>
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="mt-4 text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            → Giglo remains <span className="font-semibold">asset-light and scalable</span>
          </motion.p>
        </motion.div>

        {/* Our Moats */}
        <motion.div
          className="flex-1 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Our Competitive Moats
          </h3>
          {moats.map(({ icon: Icon, label, desc }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="p-4 rounded-xl bg-primary/10 border border-primary/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Final one-liner */}
      <motion.div
        className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/15 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm text-center text-foreground">
          <span className="font-bold text-primary">"</span>
          Giglo is not just a service marketplace — it's an <span className="font-bold">operating system for India's informal workforce</span>, 
          integrating demand, labour, and local supply chains.
          <span className="font-bold text-primary">"</span>
        </p>
      </motion.div>
    </div>
  );
}
