import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AnimatedSection - Replayable scroll-triggered section wrapper.
 * Elements fade IN when entering viewport and fade OUT when leaving.
 * Replays in both scroll directions without page refresh.
 *
 * Supports: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' |
 *           'fade-in' | 'scale-up' | 'blur-up'
 *
 * stagger: if true, direct children get staggered delays (0.25s each, 0.15s on mobile).
 */
export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
  className = '',
  stagger = false,
  as: Component = 'div',
  ...rest
}) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);
  const location = useLocation();

  const setupObserver = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '-5% 0px -5% 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Setup observer on mount and re-setup on route changes
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver, location.pathname]);

  // Map animation type to CSS class
  const animClass = `rv-anim rv-${animation}`;
  const viewClass = inView ? 'rv-in-view' : '';
  const staggerClass = stagger ? 'rv-stagger' : '';

  return (
    <Component
      ref={elementRef}
      className={`${animClass} ${viewClass} ${staggerClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Component>
  );
}
