import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Phone, Shield, Wrench, Zap, Settings,
  ChevronRight, CheckCircle2, Star, Award, Users, Truck,
  Factory, Warehouse, Package, ClipboardCheck, DraftingCompass,
  HardHat, ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import EngineeringProcessSection from '../components/EngineeringProcessSection';
import { categories } from '../data/products';

// Product category card used in the main products section
function ProductCategoryCard({ category, index }) {
  const navigate = useNavigate();
  const targetPath = category.path || `/products/${category.slug}`;

  return (
    <div
      onClick={() => navigate(targetPath)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(targetPath);
        }
      }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-brand-orange/50 animate-3d-card transition-all duration-500 flex flex-col cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={category.image}
          alt={`${category.fullName} — ARYVON Material Handling`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          onError={(e) => {
            if (category.fallback && !e.target.dataset.triedFallback) {
              e.target.dataset.triedFallback = 'true';
              e.target.src = category.fallback;
            }
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent" />

        {/* Category label pill */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-widest shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          {category.name}
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-brand-paleOrange text-xs font-semibold uppercase tracking-widest mb-1">
            {category.tagline}
          </p>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-brand-navy font-heading group-hover:text-brand-orange transition-colors duration-300">
            {category.fullName}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Subcategories if present */}
        {category.subcategories && (
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map(sub => (
              <span
                key={sub.id}
                className="text-xs font-semibold text-brand-navy bg-brand-lightBlue px-2.5 py-1 rounded-md border border-brand-iceBlue group-hover:border-brand-orange/30 transition-colors"
              >
                {sub.name}
              </span>
            ))}
          </div>
        )}

        <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors pt-2 border-t border-slate-100">
          <span>Open Dedicated Page</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-brand-orange" />
        </div>
      </div>
    </div>
  );
}

// Why Choose section data
const whyChoose = [
  {
    icon: Shield,
    title: 'Safe & Reliable',
    desc: 'Every system is engineered to meet industrial safety standards with robust structural design and operator protection.'
  },
  {
    icon: Award,
    title: 'High Load Capacity',
    desc: 'Built to handle demanding industrial loads across continuous operational shifts without compromise.'
  },
  {
    icon: Settings,
    title: 'Customizable Solutions',
    desc: 'Tailored configurations to match your exact facility dimensions, load types, and process requirements.'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Modern drive systems and smart controls reduce energy consumption and operational running costs.'
  }
];



// Industries data
const industries = [
  {
    icon: Warehouse,
    name: 'Warehousing',
    desc: 'Optimize vertical storage and material flow across high-bay warehousing and distribution operations.',
    image: '/assets/images/industries/warehousing.jpg'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    desc: 'Keep production lines moving with reliable lifting, conveying, and material handling systems.',
    image: '/assets/images/industries/manufacturing.jpg'
  },
  {
    icon: Package,
    name: 'E-Commerce',
    desc: 'High-speed fulfilment operations demand fast, efficient conveyor and lift systems — we deliver.',
    image: '/assets/images/industries/ecommerce.jpg'
  },
  {
    icon: Truck,
    name: 'Logistics',
    desc: 'Loading bays, freight handling, and dock operations need robust, dependable material handling.',
    image: '/assets/images/industries/logistics.jpg'
  },
  {
    icon: Wrench,
    name: 'Automotive',
    desc: 'Heavy component transfer, assembly line conveyors, and overhead cranes for automotive plants.',
    image: '/assets/images/products/project-work.jpg'
  }
];

/**
 * CharFadeUp - Animates text character-by-character with a staggered fade-up transition.
 * Keeps words in whitespace-nowrap wrappers so responsive line wrapping happens only
 * between words, preventing broken words across lines on both mobile and desktop.
 */
function CharFadeUp({ segments, baseDelay = 0.08, stagger = 0.032, duration = 0.65 }) {
  let globalCharIndex = 0;

  return (
    <>
      {segments.map((segment, segIdx) => {
        const words = segment.text.trim().split(/\s+/);
        return (
          <React.Fragment key={segIdx}>
            {words.map((word, wordIdx) => {
              const chars = word.split('');
              const element = (
                <span
                  key={wordIdx}
                  className={`inline-block whitespace-nowrap ${segment.className || ''}`}
                  style={{ marginRight: '0.28em' }}
                >
                  {chars.map((char) => {
                    const delay = (baseDelay + globalCharIndex * stagger).toFixed(3);
                    globalCharIndex += 1;
                    return (
                      <span
                        key={globalCharIndex}
                        className="rv-char-fade-up"
                        style={{
                          animationDelay: `${delay}s`,
                          animationDuration: `${duration}s`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
              // increment for the inter-word space
              globalCharIndex += 1;
              return element;
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

/**
 * WordFadeLoop — continuously fades each word in/out with a staggered looping animation.
 * Each word cycles independently so the text always appears to be "breathing" word by word.
 */
function WordFadeLoop({ text, className = '', baseDuration = 3.2, stagger = 0.22 }) {
  const words = String(text).trim().split(/\s+/);
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="rv-word-loop"
          style={{
            '--wl-dur': `${baseDuration}s`,
            '--wl-delay': `${(i * stagger).toFixed(2)}s`,
            marginRight: i < words.length - 1 ? '0.3em' : 0,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="space-y-0">

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-deep text-white overflow-hidden">
        {/* Hero background sliding product images */}
        <HeroSlider />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent z-[1]" />

        {/* Industrial grid overlay */}
        <div className="absolute inset-0 rv-grid-drift opacity-10 pointer-events-none" />

        {/* Top Centered Tagline: perfectly centered on desktop and in mobile structure */}
        <div className="absolute top-6 sm:top-10 md:top-12 inset-x-0 z-10 flex justify-center items-center px-4 pointer-events-none">
          <p className="text-center text-sm sm:text-base md:text-xl text-slate-300 font-bold tracking-wider uppercase sm:tracking-wide rv-hero-text-fade">
            Smart Solutions That Move
          </p>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none rv-glow-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blueAccent/20 rounded-full blur-[100px] pointer-events-none rv-glow-pulse" style={{ animationDelay: '4s' }} />

        {/* Decorative gear */}
        <div className="absolute top-10 right-12 opacity-5 pointer-events-none hidden xl:block">
          <svg className="w-64 h-64 animate-spin-slow text-white" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="12 12" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl space-y-8">
            {/* Badge featuring ARYVON Logo with character-by-character fade up */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 rounded-full bg-brand-navy/90 border border-brand-orange/50 text-brand-paleOrange text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              <div className="bg-white/95 px-2 py-0.5 rounded shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-4 sm:h-5 w-auto object-contain"
                />
              </div>
              <span className="inline text-[11px] sm:text-xs">
                <CharFadeUp
                  segments={[{ text: 'Material Handling Solutions', className: 'text-brand-paleOrange' }]}
                  baseDelay={0.05}
                  stagger={0.025}
                  duration={0.5}
                />
              </span>
            </div>

            {/* Main headline with character-by-character cascading fade up */}
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] text-white"
              aria-label="Advanced Material Handling for a Stronger Tomorrow"
            >
              <span aria-hidden="true">
                <CharFadeUp
                  segments={[
                    { text: 'Advanced Material Handling', className: 'text-white' },
                    { text: 'for a Stronger', className: 'text-brand-orange' },
                    { text: 'Tomorrow', className: 'text-white' },
                  ]}
                  baseDelay={0.1}
                  stagger={0.032}
                  duration={0.65}
                />
              </span>
            </h1>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick stats bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 rv-hero-text-fade-delayed">
              {[
                { label: 'Material Handling Focus', value: '100%' },
                { label: 'Custom Configurations', value: 'Yes' },
                { label: 'Direct Enquiry Line', value: '83293 58214' }
              ].map(stat => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-brand-orange text-xl sm:text-2xl font-black">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hazard stripe bottom */}
        <div className="hazard-stripe absolute bottom-0 left-0 right-0 z-10" />
      </section>

      {/* =========================================================================
          PRODUCTS SECTION — 4 Categories
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="blur-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Our Product Range
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-navy font-heading">
                Four Core Product Categories
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Every solution we offer is purpose-built for industrial material handling — nothing more, nothing less.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 perspective-container">
              {categories.map((cat, i) => (
                <ProductCategoryCard key={cat.id} category={cat} index={i} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy hover:bg-brand-blueAccent text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 hover:shadow-lg group"
              >
                View All Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE ARYVON
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="blur-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Our Strengths
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                  Why Choose
                </h2>
                <div className="bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm inline-flex items-center">
                  <img
                    src="/assets/logo/aryvon-logo.png"
                    alt="ARYVON"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">?</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                We match your operation with practical, proven material handling equipment designed for demanding industrial environments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, i) => (
                <div
                  key={item.title}
                  className="group text-center p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300 rv-card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-lightBlue text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mb-3 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING PROCESS (Exact 3D Design from Mockup)
         ========================================================================= */}
      <EngineeringProcessSection />

      {/* =========================================================================
          COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 rv-grid-drift opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none rv-glow-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    About
                  </span>
                  <div className="bg-white/95 px-2.5 py-1 rounded shadow inline-flex items-center">
                    <img
                      src="/assets/logo/aryvon-logo.png"
                      alt="ARYVON"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  Dedicated Material Handling Solutions for Every Industrial Need
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  ARYVON provides material handling solutions tailored to industrial operational requirements. From vertical goods lifts to overhead cranes and conveyor systems, every product we supply is selected and configured to match the actual demands of your facility.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  We work directly with operations teams, plant managers, and warehouse supervisors to recommend and deliver equipment that resolves real operational challenges — prioritizing safety, durability, and practical reliability.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Equipment configured to your exact facility requirements',
                    'Direct support from our technical team',
                    'Focus on safety, reliability, and operational efficiency'
                  ].map(point => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group rv-btn-hover"
                  >
                    <span>About Us</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:8329358214"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors rv-btn-hover"
                  >
                    <Phone className="w-4 h-4" />
                    83293 58214
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-brand-orange/30 shadow-2xl">
                  <img
                    src="/assets/images/hero/hero-vrc-warehouse.jpg"
                    alt="ARYVON industrial material handling facility"
                    className="w-full object-cover aspect-[4/3]"
                    onError={(e) => {
                      e.target.src = '/assets/images/industries/manufacturing.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent rounded-2xl" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-brand-orange text-white p-5 rounded-2xl shadow-xl shadow-brand-orange/30 font-bold text-center">
                  <p className="text-3xl font-black">4</p>
                  <p className="text-xs uppercase tracking-widest mt-1">Product<br />Categories</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES WE SERVE
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="blur-up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Sector Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                Industries We Serve
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our material handling solutions are deployed across a wide range of industrial sectors — wherever reliable movement, lifting, and positioning of goods is critical.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((ind, i) => (
                <Link
                  to="/industries"
                  key={ind.name}
                  className={`group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-72 bg-brand-navy border border-slate-700/60 hover:border-brand-orange/60 hover:shadow-2xl transition-all duration-500 rv-card-hover ${
                    i % 2 === 0 ? 'rv-float-slow' : 'rv-float-slow-delayed'
                  }`}
                >
                  {/* Card background image: normally blurred, unblurs and scales gently on hover */}
                  {ind.image && (
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105 opacity-40 group-hover:blur-0 group-hover:scale-110 group-hover:opacity-75 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                  )}

                  {/* Dark gradient overlays to ensure text contrast and brand aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/80 to-brand-navy/60 group-hover:via-brand-deep/55 transition-all duration-500" />
                  <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="p-2.5 bg-brand-navy/80 backdrop-blur-md rounded-lg w-fit mb-3 border border-brand-orange/40 shadow group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 group-hover:scale-110">
                      <ind.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-white font-bold text-base group-hover:text-brand-orange transition-colors duration-300">
                      <WordFadeLoop
                        text={ind.name}
                        baseDuration={3.0}
                        stagger={0.28}
                      />
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1 drop-shadow-sm">
                      <WordFadeLoop
                        text={ind.desc}
                        baseDuration={3.4}
                        stagger={0.18}
                      />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="text-center mt-10">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-orange font-bold text-sm uppercase tracking-widest transition-colors group"
              >
                Explore All Industries
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-orange" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden border-t-4 border-brand-orange">
        <div className="absolute inset-0 rv-grid-drift opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none rv-glow-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <AnimatedSection animation="blur-up">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white leading-tight">
                Let's Build Your Solution
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our team for customized material handling solutions tailored to your needs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-brand-orange/30 transition-all duration-300 hover:scale-[1.02] group rv-btn-hover"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8329358214"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-white/10 group rv-btn-hover"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                Call 83293 58214
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="hazard-stripe absolute bottom-0 left-0 right-0" />
      </section>
    </div>
  );
}
