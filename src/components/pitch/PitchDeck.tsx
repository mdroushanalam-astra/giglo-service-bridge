import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { HeroSlide, HookSlide } from './slides/HeroSlides';
import { ConsumerProblemSlide, WorkerProblemSlide, CoreGapSlide } from './slides/ProblemSlides';
import { SolutionSlide, ConsumerFlowSlide, WorkerFlowSlide } from './slides/SolutionSlides';
import { CompetitionSlide, DifferentiatorsSlide } from './slides/CompetitiveSlides';
import { MarketSlide, BusinessModelSlide, TractionSlide, TeamSlide, AskSlide } from './slides/PlaceholderSlides';
import { ClosingSlide } from './slides/ClosingSlide';
import { type ComponentType } from 'react';

const slides: ComponentType[] = [
  HeroSlide,
  HookSlide,
  ConsumerProblemSlide,
  WorkerProblemSlide,
  CoreGapSlide,
  SolutionSlide,
  ConsumerFlowSlide,
  WorkerFlowSlide,
  CompetitionSlide,
  DifferentiatorsSlide,
  MarketSlide,
  BusinessModelSlide,
  TractionSlide,
  TeamSlide,
  AskSlide,
  ClosingSlide,
];

export function PitchDeck() {
  const { currentSlide, goToSlide, next, prev } = useSlideNavigation(slides.length);
  const Slide = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      )}

      {/* Slide dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === i
                ? 'w-8 bg-primary shadow-md'
                : 'w-2 bg-foreground/15 hover:bg-foreground/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 text-xs text-muted-foreground font-mono z-50">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
