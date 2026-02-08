import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Heart, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';
import gigloLogo from '@/assets/giglo-logo.png';
import abstract3D from '@/assets/abstract-3d-pattern.png';

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

export function GigloSocialSlide() {
  const features = [
    { icon: AlertTriangle, label: 'Emergency Alert', desc: 'One-tap distress signal', gradient: 'from-red-500/20 to-red-500/5' },
    { icon: Shield, label: 'Verified Response', desc: 'Team-reviewed before broadcast', gradient: 'from-blue-500/20 to-blue-500/5' },
    { icon: MapPin, label: 'Local Mobilisation', desc: 'Nearby verified workers notified', gradient: 'from-green-500/20 to-green-500/5' },
    { icon: Heart, label: 'Incentivised Help', desc: 'Gig-lo funds the response', gradient: 'from-pink-500/20 to-pink-500/5' },
  ];

  const guardrails = [
    'Geo-fenced response zones',
    'No anonymity for responders',
    'Recorded actions & audits',
    'Cooperation with authorities',
  ];

  return (
    <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img src={abstract3D} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-primary/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{ left: `${15 + i * 15}%`, top: `${25 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Future Vision Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 md:left-16"
      >
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/20">
          Future Vision Initiative
        </span>
      </motion.div>

      {/* Logo */}
      <motion.img
        src={gigloLogo}
        alt=""
        className="absolute top-6 right-6 w-14 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            Gig-lo <span className="text-primary">Social</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            People for People. Technology for Immediate Human Response.
          </p>
        </motion.div>

        {/* Core Message */}
        <motion.div 
          variants={fadeInUp}
          className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-4 md:p-6 mb-8 border border-primary/20 backdrop-blur-sm"
        >
          <motion.div 
            className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <p className="relative text-center text-sm md:text-base text-foreground/80 leading-relaxed">
            A <span className="text-primary font-semibold">verified, coordinated community-response system</span> for non-medical emergencies — 
            where time, presence, and collective help can save lives.
          </p>
        </motion.div>

        {/* How It Works - 4 Step Flow */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, i) => (
              <motion.div key={feature.label} variants={scaleIn}>
                <Float3D delay={i * 0.2}>
                  <div className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-xl p-4 border border-border/50 text-center group hover:border-primary/30 transition-all hover:-translate-y-1 shadow-lg`}>
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-2 shadow-inner">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{feature.label}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </Float3D>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Why Giglo */}
          <motion.div 
            variants={fadeInUp}
            className="bg-card/50 rounded-xl p-4 md:p-5 border border-border/30 backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Why Giglo Is Uniquely Positioned</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              {[
                'Location-aware verified users',
                'Real-time availability tracking',
                'Trust & identity verification',
                'Large on-ground workforce'
              ].map((item, i) => (
                <motion.div 
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guardrails */}
          <motion.div 
            variants={fadeInUp}
            className="bg-card/50 rounded-xl p-4 md:p-5 border border-border/30 backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Ethical & Safety Guardrails</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {guardrails.map((item, i) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 shadow-lg">
            <motion.div 
              className="absolute inset-0 bg-primary/10 blur-xl rounded-full"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Users className="relative w-5 h-5 text-primary" />
            <span className="relative text-sm md:text-base font-medium text-foreground">
              From a service marketplace → <span className="text-primary">Community infrastructure for real-time help</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
