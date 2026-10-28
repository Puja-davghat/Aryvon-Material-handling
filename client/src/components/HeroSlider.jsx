import React from 'react';
import { categories } from '../data/products';

// Select first four category images for hero slider
const heroImages = categories.slice(0, 4).map(cat => cat.image);

export default function HeroSlider() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="flex w-[400%] h-full animate-hero-slide">
        {heroImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="ARYVON product"
            className="w-1/4 h-full object-cover opacity-30"
          />
        ))}
      </div>
    </div>
  );
}
