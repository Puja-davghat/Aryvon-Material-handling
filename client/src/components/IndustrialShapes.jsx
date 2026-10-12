import React from 'react';

/**
 * IndustrialShapes - Premium floating geometric shapes (gears, hexagons, angle brackets, frames)
 * using ARYVON industrial theme colors: navy blue, vibrant orange, slate grey.
 * Pure SVG, lightweight, non-blocking with pointer-events-none.
 */
export default function IndustrialShapes({ density = 'default' }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      {/* Shape 1: Floating Orange Hexagon Top-Right */}
      <div 
        className="absolute top-12 right-[8%] w-16 h-16 sm:w-20 sm:h-20 opacity-20 sm:opacity-25 animate-float-slow"
        style={{ animationDuration: '14s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-brand-orange animate-spin-slow" style={{ animationDuration: '45s' }}>
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray="8 6"
          />
          <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Shape 2: Rotating Navy Blueprint Gear Top-Left */}
      <div 
        className="absolute top-28 left-[4%] w-24 h-24 sm:w-32 sm:h-32 opacity-10 sm:opacity-15 animate-float-medium"
        style={{ animationDuration: '18s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-brand-navy animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="6" strokeDasharray="14 10" />
          <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="3" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Shape 3: Precision Industrial Diamond / Cross in Slate Grey */}
      <div 
        className="absolute top-[45%] right-[3%] w-14 h-14 sm:w-16 sm:h-16 opacity-15 sm:opacity-20 animate-float-reverse"
        style={{ animationDuration: '16s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-slate-500 animate-spin-slow" style={{ animationDuration: '50s' }}>
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="5" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Shape 4: Material Handling Angle Brackets Mid-Left (Orange & Navy) */}
      <div 
        className="absolute top-[60%] left-[6%] w-12 h-12 sm:w-16 sm:h-16 opacity-20 sm:opacity-25 animate-float-slow"
        style={{ animationDuration: '20s' }}
      >
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full text-brand-orange animate-spin-slow" style={{ animationDuration: '55s' }}>
          <path d="M10 25 L10 10 L25 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M70 25 L70 10 L55 10" stroke="#042c5c" strokeWidth="6" strokeLinecap="round" />
          <path d="M10 55 L10 70 L25 70" stroke="#042c5c" strokeWidth="6" strokeLinecap="round" />
          <path d="M70 55 L70 70 L55 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>

      {/* Shape 5: Heavy Industry Concentric Rings Bottom-Right */}
      <div 
        className="absolute bottom-16 right-[12%] w-20 h-20 sm:w-28 sm:h-28 opacity-15 sm:opacity-20 animate-float-medium"
        style={{ animationDuration: '15s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-brand-blueAccent animate-spin-reverse-slow" style={{ animationDuration: '40s' }}>
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3" strokeDasharray="12 12" />
          <circle cx="50" cy="50" r="30" stroke="#fc6c04" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      {/* Shape 6: Slate Grey Technical Grid Crosshair Bottom-Left */}
      <div 
        className="absolute bottom-20 left-[10%] w-16 h-16 opacity-15 sm:opacity-20 animate-float-reverse"
        style={{ animationDuration: '22s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-slate-400">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" />
        </svg>
      </div>
    </div>
  );
}
