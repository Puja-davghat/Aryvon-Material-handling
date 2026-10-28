import React, { useState, useEffect, useRef } from 'react';

/**
 * CountUp - Jump-increment count-up animation for stats.
 *
 * Requirements:
 * - Counts in fast, visible jumps of 10, 25, 30 style increments (e.g. 10, 25, 50, 75, 100).
 * - Steps every 40ms, total under 1.2s.
 * - Always lands exactly on the real final value (e.g. "100%", "83293 58214").
 * - Replays every time on scroll in and out via IntersectionObserver.
 * - Shows final text immediately if reduced-motion is active or if JS fails.
 */
export default function CountUp({ value = '', className = '' }) {
  // Always initialize with final value so if JS fails / SSR, the text is visible
  const [display, setDisplay] = useState(value);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const strValue = String(value).trim();

    // Check if this is a supported numeric stat
    const isPercent = strValue.endsWith('%');
    const isPhone = strValue === '83293 58214';
    const isPureNumber = !isNaN(Number(strValue)) && strValue !== '';

    if (!isPercent && !isPhone && !isPureNumber) {
      // Non-numeric (like "Yes")
      setDisplay(value);
      return;
    }

    // Define percentage jump stages (steps of 15-25 each, every 40ms)
    // 0ms -> 40ms -> 80ms -> 120ms -> 160ms -> 200ms (total ~200ms < 1.2s)
    const jumps = [10, 25, 50, 75, 90, 100];

    const formatValue = (pct) => {
      if (pct >= 100) return strValue;

      if (isPercent) {
        return `${pct}%`;
      }

      if (isPhone) {
        // Target: 83293 58214 (total raw = 8329358214)
        const targetNum = 8329358214;
        const current = Math.floor((targetNum * pct) / 100);
        const s = String(current).padStart(10, '0');
        return `${s.slice(0, 5)} ${s.slice(5)}`;
      }

      if (isPureNumber) {
        const targetNum = Number(strValue);
        return String(Math.floor((targetNum * pct) / 100));
      }

      return strValue;
    };

    let intervalId = null;
    let stepIndex = 0;

    const startAnimation = () => {
      if (intervalId) clearInterval(intervalId);
      stepIndex = 0;
      setDisplay(formatValue(jumps[0]));

      intervalId = setInterval(() => {
        stepIndex += 1;
        if (stepIndex >= jumps.length) {
          clearInterval(intervalId);
          intervalId = null;
          setDisplay(strValue); // Always land exactly on real final value
        } else {
          setDisplay(formatValue(jumps[stepIndex]));
        }
      }, 40); // 40ms per tick
    };

    const resetAnimation = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      setDisplay(formatValue(jumps[0]));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          resetAnimation();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-5% 0px -5% 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (intervalId) clearInterval(intervalId);
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={elementRef} className={className}>
      {display}
    </span>
  );
}
