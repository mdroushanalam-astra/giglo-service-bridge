import { useState, useEffect } from 'react';

export function useSlideNavigation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide(s => Math.min(s + 1, totalSlides - 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide(s => Math.max(s - 1, 0));
      }
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [totalSlides]);

  return {
    currentSlide,
    goToSlide: (i: number) => setCurrentSlide(Math.max(0, Math.min(i, totalSlides - 1))),
    next: () => setCurrentSlide(s => Math.min(s + 1, totalSlides - 1)),
    prev: () => setCurrentSlide(s => Math.max(s - 1, 0)),
    totalSlides,
  };
}
