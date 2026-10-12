import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedSection - Scroll-triggered section wrapper
 * Supports:
 * - 'fade-up' (default)
 * - 'fade-down'
 * - 'fade-in'
 * - 'slide-left'
 * - 'slide-right'
 * - 'scale-up'
 */
export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.12,
  className = '',
  as: Component = 'section',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Keep visible once scrolled into view for natural feel
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-down':
        return isVisible ? 'animate-slide-down-in opacity-100' : 'opacity-0 -translate-y-8';
      case 'fade-in':
        return isVisible ? 'animate-fade-in-smooth opacity-100' : 'opacity-0';
      case 'slide-left':
        return isVisible ? 'animate-slide-left-in opacity-100' : 'opacity-0 translate-x-8';
      case 'slide-right':
        return isVisible ? 'animate-slide-right-in opacity-100' : 'opacity-0 -translate-x-8';
      case 'scale-up':
        return isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95';
      case 'fade-up':
      default:
        return isVisible ? 'animate-slide-up-in opacity-100' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
