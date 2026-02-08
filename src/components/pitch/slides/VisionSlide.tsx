import { motion } from 'framer-motion';
import { Shield, Users, MapPin, Heart, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';

export function GigloSocialSlide() {
  const features = [
    { icon: AlertTriangle, label: 'Emergency Alert', desc: 'One-tap distress signal' },
    { icon: Shield, label: 'Verified Response', desc: 'Team-reviewed before broadcast' },
    { icon: MapPin, label: 'Local Mobilisation', desc: 'Nearby verified workers notified' },
    { icon: Heart, label: 'Incentivised Help', desc: 'Gig-lo funds the response' },
  ];

  const guardrails = [
    'Geo-fenced response zones',
    'No anonymity for responders',
    'Recorded actions & audits',
    'Cooperation with authorities',
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-background via-background to-primary/5 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 overflow-hidden">
      {/* Future Vision Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 md:left-16"
      >
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          Future Vision Initiative
        </span>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-12">
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
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-4 md:p-6 mb-8 border border-primary/20"
        >
          <p className="text-center text-sm md:text-base text-foreground/80 leading-relaxed">
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
              <motion.div
                key={feature.label}
                variants={scaleIn}
                className="relative bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold text-foreground text-sm mb-1">{feature.label}</h4>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Why Giglo */}
          <motion.div 
            variants={fadeInUp}
            className="bg-card/30 rounded-xl p-4 md:p-5 border border-border/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Why Giglo Is Uniquely Positioned</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Location-aware verified users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Real-time availability tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Trust & identity verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Large on-ground workforce</span>
              </div>
            </div>
          </motion.div>

          {/* Guardrails */}
          <motion.div 
            variants={fadeInUp}
            className="bg-card/30 rounded-xl p-4 md:p-5 border border-border/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Ethical & Safety Guardrails</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {guardrails.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base font-medium text-foreground">
              From a service marketplace → <span className="text-primary">Community infrastructure for real-time help</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
