import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn, AnimatedCounter } from '../animations';
import { 
  Target, Layers, TrendingUp, Users, PieChart, 
  Wrench, Zap, CheckCircle, Calendar, Rocket, 
  MessageSquare, Building, Clock, Award, BarChart3, Linkedin,
  Smartphone, CreditCard, Home
} from 'lucide-react';
import roushanImage from '@/assets/team-roushan.png';
import aribaImage from '@/assets/team-ariba.jpg';
import gigloLogo from '@/assets/giglo-logo.png';
import abstract3D from '@/assets/abstract-3d-pattern.png';
import heroCityscape from '@/assets/hero-india-cityscape.jpg';
import workersImage from '@/assets/workers-empowered.jpg';

// Floating component
function Float3D({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MarketSlide() {
  const marketData = [
    { 
      size: 300, 
      label: 'TAM', 
      value: '₹4-5L Cr', 
      desc: 'Total Home Services',
      gradient: 'from-primary/10 to-primary/5',
      delay: 0.5 
    },
    { 
      size: 210, 
      label: 'SAM', 
      value: '₹1.5L Cr', 
      desc: 'Urban & Semi-Urban',
      gradient: 'from-primary/20 to-primary/10',
      delay: 0.8 
    },
    { 
      size: 120, 
      label: 'SOM', 
      value: '₹6K-18K Cr', 
      desc: '3-5 Year Target',
      gradient: 'from-primary/40 to-primary/20',
      delay: 1.1 
    },
  ];

  const whyNow = [
    { icon: Smartphone, label: '70%+ smartphone penetration' },
    { icon: CreditCard, label: 'UPI payments mainstream' },
    { icon: Users, label: '450M informal workers' },
    { icon: Home, label: '300M+ households' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCityscape} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>
      
      {/* Orb */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
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
        className="relative z-10 text-sm font-semibold text-primary tracking-widest uppercase mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Market Opportunity
      </motion.p>
      
      {/* Main Headline */}
      <motion.h2
        className="relative z-10 text-lg md:text-2xl font-extrabold text-foreground mb-1 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        From Metropolitan Cities to Rural India —{' '}
        <span className="text-primary">Everyone Is Our Customer</span>
      </motion.h2>
      <motion.p
        className="relative z-10 text-xs md:text-sm text-muted-foreground text-center max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        95% of India's home services market is still unorganized. A once-in-a-generation opportunity.
      </motion.p>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full">
        {/* Left: TAM SAM SOM circles */}
        <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
          {marketData.map(({ size, label, value, desc, gradient, delay }) => (
            <motion.div
              key={label}
              className={`absolute rounded-full border-2 border-primary/30 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center backdrop-blur-sm shadow-lg`}
              style={{ width: size, height: size }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay, duration: 0.6, type: 'spring' }}
            >
              <span className="text-xs font-bold text-muted-foreground">{label}</span>
              <span className="text-lg md:text-xl font-black text-primary">{value}</span>
              <span className="text-[10px] text-muted-foreground">{desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Right: Details */}
        <div className="flex-1 space-y-4">
          {/* Market segments */}
          <motion.div
            className="p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="font-bold text-foreground text-sm mb-2">Services We Cover</h4>
            <div className="flex flex-wrap gap-2">
              {['House Cleaning', 'Plumbing', 'Electrical', 'Painting', 'Repairs', 'Daily Helpers', 'Emergency Services'].map((service, i) => (
                <motion.span
                  key={service}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Revenue potential */}
          <motion.div
            className="relative p-4 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/10 blur-xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative">
              <h4 className="font-bold text-foreground text-sm mb-2">Revenue Potential (12-15% commission)</h4>
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-primary">₹700-2,500 Cr</span>
                <span className="text-xs text-muted-foreground">over 3-5 years</span>
              </div>
            </div>
          </motion.div>

          {/* Why Now */}
          <motion.div
            className="grid grid-cols-2 gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {whyNow.map(({ icon: Icon, label }, i) => (
              <motion.div key={label} variants={fadeInUp}>
                <Float3D delay={i * 0.1}>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-[10px] text-foreground">{label}</span>
                  </div>
                </Float3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom one-liner */}
      <motion.p
        className="relative z-10 mt-5 text-xs md:text-sm text-center text-foreground/80 italic max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        "Giglo is not creating demand — it's <span className="font-bold text-primary">unlocking trapped demand and supply</span>."
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
      <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
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
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-8">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Orb */}
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
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
        className="relative z-10 text-sm font-semibold text-primary tracking-widest uppercase mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Traction & Momentum
      </motion.p>
      <motion.h2
        className="relative z-10 text-lg md:text-2xl font-extrabold text-foreground mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        From Validation to Execution
      </motion.h2>

      {/* Key Metrics Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mb-5"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {keyMetrics.map(({ icon: Icon, value, suffix, label, desc }, i) => (
          <motion.div key={label} variants={scaleIn}>
            <Float3D delay={i * 0.15}>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 backdrop-blur-sm shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-1 shadow-inner">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xl md:text-2xl font-black text-primary">
                  <AnimatedCounter end={value} delay={300} />{suffix}
                </div>
                <span className="text-xs font-semibold text-foreground text-center">{label}</span>
                <span className="text-[10px] text-muted-foreground">{desc}</span>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>

      {/* Middle Row: Categories + Timeline */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 max-w-4xl w-full mb-4">
        {/* Service Categories */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
              <Wrench className="w-3 h-3 text-primary" />
            </div>
            Active Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
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
          className="flex-1 p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
              <Rocket className="w-3 h-3 text-primary" />
            </div>
            Launch Timeline
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
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${
                  status === 'done' ? 'bg-primary text-primary-foreground' :
                  status === 'current' ? 'bg-primary/30 text-primary border-2 border-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {status === 'done' ? '✓' : i + 1}
                </div>
                <span className="text-[10px] font-semibold text-foreground mt-1">{phase}</span>
                <span className="text-[9px] text-muted-foreground">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Progress + Validation */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 max-w-4xl w-full">
        {/* Product Progress */}
        <motion.div
          className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary" />
            </div>
            Product Readiness
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
          className="flex-1 p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h4 className="font-bold text-foreground text-sm mb-3 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-primary" />
            </div>
            Validation Signals
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
        className="relative z-10 mt-4 text-xs text-center text-foreground/70 max-w-xl"
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
    { 
      name: 'Md. Roushan Alam', 
      role: 'CEO & Co-Founder', 
      image: roushanImage,
      linkedin: 'https://www.linkedin.com/in/mdroushanalam'
    },
    { 
      name: 'Ariba Irfan', 
      role: 'Co-Founder & CSO', 
      image: aribaImage,
      linkedin: 'https://www.linkedin.com/in/ariba-irfan-483254374'
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={workersImage} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>
      
      {/* Orbs */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-primary/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
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
        The Team
      </motion.p>
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Built by People Who Care
      </motion.h2>

      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {team.map(({ name, role, image, linkedin }, i) => (
          <motion.div key={name} variants={scaleIn}>
            <Float3D delay={i * 0.3}>
              <div className="flex flex-col items-center p-8 rounded-2xl bg-card/80 border border-border shadow-2xl hover:shadow-3xl transition-shadow backdrop-blur-sm">
                <div className="relative mb-4">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <img 
                    src={image} 
                    alt={name}
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20 shadow-xl"
                  />
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label={`${name}'s LinkedIn`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
                <h4 className="font-bold text-foreground text-lg text-center">{name}</h4>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="relative z-10 mt-10 text-sm text-muted-foreground text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Passionate about empowering India's informal workforce through technology
      </motion.p>
    </div>
  );
}

export function AskSlide() {
  const useOfFunds = [
    { 
      label: 'Ground Ops & Worker Onboarding', 
      amount: '₹18L', 
      pct: 36,
      icon: Users,
      items: ['On-ground drives', 'Field team', 'KYC & verification', 'Worker training'],
      gradient: 'from-blue-500/15 to-blue-500/5'
    },
    { 
      label: 'Marketing & Demand Gen', 
      amount: '₹15L', 
      pct: 30,
      icon: TrendingUp,
      items: ['Influencer campaigns', 'Hyperlocal ads', 'Society activations', 'Referral incentives'],
      gradient: 'from-green-500/15 to-green-500/5'
    },
    { 
      label: 'Product & Tech', 
      amount: '₹10L', 
      pct: 20,
      icon: Layers,
      items: ['Final 20% dev', 'Performance & security', 'Cloud infra', 'QA & launch prep'],
      gradient: 'from-purple-500/15 to-purple-500/5'
    },
    { 
      label: 'Ops, Support & Buffer', 
      amount: '₹7L', 
      pct: 14,
      icon: Building,
      items: ['Customer support', 'Legal & compliance', 'Founder runway', 'Contingency'],
      gradient: 'from-orange-500/15 to-orange-500/5'
    },
  ];

  const milestones = [
    { value: '1,500-2,000', label: 'Workers Onboarded' },
    { value: '3,000-5,000', label: 'Consumers Acquired' },
    { value: '10,000+', label: 'Service Gigs' },
    { value: '6-8 mo', label: 'To Seed Round' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
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
        className="relative z-10 text-sm font-semibold text-primary tracking-widest uppercase mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Ask
      </motion.p>
      <motion.h2
        className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Raising <span className="text-primary">₹50 Lakhs</span> Pre-Seed
      </motion.h2>
      <motion.p
        className="relative z-10 text-sm text-muted-foreground text-center max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        From launch-ready to active market adoption
      </motion.p>

      {/* Use of Funds Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mb-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {useOfFunds.map(({ label, amount, pct, icon: Icon, items, gradient }, i) => (
          <motion.div key={label} variants={scaleIn}>
            <Float3D delay={i * 0.15}>
              <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} border border-border hover:border-primary/30 transition-all backdrop-blur-sm shadow-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center shadow-inner">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-black text-primary">{amount}</span>
                </div>
                <h4 className="font-bold text-foreground text-xs leading-tight mb-2">{label}</h4>
                {/* Progress bar */}
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-2 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                  />
                </div>
                <ul className="space-y-0.5">
                  {items.slice(0, 3).map((item) => (
                    <li key={item} className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Float3D>
          </motion.div>
        ))}
      </motion.div>

      {/* What This Enables */}
      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h4 className="text-xs font-bold text-foreground text-center mb-3">What This Funding Enables</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {milestones.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="relative p-3 rounded-lg bg-primary/10 border border-primary/20 text-center backdrop-blur-sm shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <motion.div 
                className="absolute inset-0 bg-primary/10 blur-lg"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
              <span className="relative text-lg md:text-xl font-black text-primary block">{value}</span>
              <span className="relative text-[10px] text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* One-liner */}
      <motion.div
        className="relative z-10 mt-6 p-4 rounded-xl bg-foreground/5 border border-border max-w-2xl backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <p className="text-xs md:text-sm text-center text-foreground">
          <span className="text-primary font-bold">"</span>
          We're raising ₹50 lakhs pre-seed to execute on-ground worker onboarding, activate demand, 
          complete our product, and launch Giglo as a functioning marketplace.
          <span className="text-primary font-bold">"</span>
        </p>
      </motion.div>
    </div>
  );
}
