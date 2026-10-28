import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Wrench, Clock } from 'lucide-react';

/**
 * WordFadeDown - Animates text word-by-word with a cascading fade-down transition.
 * Each word starts translated up (-16px) with opacity 0 and fades down into place.
 */
function WordFadeDown({
  children,
  text,
  baseDelay = 0,
  stagger = 0.04,
  duration = 0.6,
  inView = true,
  className = '',
  as: Component = 'span'
}) {
  const content = text !== undefined ? String(text) : (typeof children === 'string' ? children : '');

  if (!content) {
    return <Component className={className}>{children}</Component>;
  }

  const words = content.trim().split(/\s+/);

  return (
    <Component className={className}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`rv-word-fade-down ${inView ? 'is-active' : ''}`}
          style={{
            animationDelay: inView ? `${(baseDelay + idx * stagger).toFixed(3)}s` : '0s',
            animationDuration: `${duration}s`,
            marginRight: idx < words.length - 1 ? '0.28em' : undefined,
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}

export default function Footer() {
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

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
        threshold: 0.05,
        rootMargin: '0px 0px -2% 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const productCategories = [
    { name: 'VRC', sub: 'Vertical Reciprocating Conveyor', href: '/products/vrc' },
    { name: 'Scissor Lift', sub: 'Self-Propelled & Floor-Mounted', href: '/products/scissor-lift' },
    { name: 'EOT Crane', sub: 'Single Girder & Double Girder', href: '/products/eot-crane' },
    { name: 'Conveyor', sub: 'Roller & Chain Conveyor', href: '/products/conveyor' }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products Catalogue', href: '/products' },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer ref={footerRef} className="bg-brand-deep text-slate-300 pt-16 border-t-4 border-brand-orange relative overflow-hidden">
      {/* Subtle drifting technical grid */}
      <div className="absolute inset-0 rv-grid-drift opacity-5 pointer-events-none" />

      {/* Decorative gear */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/3 translate-y-1/3">
        <svg className="w-96 h-96 animate-spin-slow text-white" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="12 12" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Company Profile with exact Logo Image */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex flex-col gap-1.5 group">
              <div className={`bg-white/95 px-3 py-1.5 rounded-lg shadow-sm inline-block w-fit transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON Material Handling Solutions Logo"
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <WordFadeDown
                inView={inView}
                baseDelay={0.08}
                stagger={0.05}
                className="text-[10px] font-bold tracking-[0.25em] text-brand-paleOrange uppercase pl-0.5 block"
              >
                Material Handling Solutions
              </WordFadeDown>
            </Link>

            <WordFadeDown
              as="p"
              inView={inView}
              baseDelay={0.16}
              stagger={0.035}
              className="text-sm text-slate-400 leading-relaxed"
            >
              ARYVON provides engineered material handling solutions — Vertical Reciprocating Conveyors (VRC), Scissor Lifts, EOT Cranes, and Conveyors — tailored to industrial operational requirements.
            </WordFadeDown>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-brand-paleOrange">
              <ShieldCheck className={`w-4 h-4 text-brand-orange flex-shrink-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
              <WordFadeDown inView={inView} baseDelay={0.3} stagger={0.035}>
                Heavy-Duty Industrial Standards &amp; Reliable Engineering
              </WordFadeDown>
            </div>
          </div>

          {/* Column 2: 4 Dedicated Products */}
          <div className="space-y-4">
            <WordFadeDown
              as="h3"
              inView={inView}
              baseDelay={0.12}
              stagger={0.06}
              className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3 block"
            >
              Dedicated Products
            </WordFadeDown>

            <ul className="space-y-3 text-sm">
              {productCategories.map((cat, idx) => (
                <li key={cat.name}>
                  <Link
                    to={cat.href}
                    className="group flex flex-col hover:text-brand-orange transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold text-slate-200 group-hover:text-brand-orange transition-colors">
                      <ArrowRight className={`w-3.5 h-3.5 text-brand-orange flex-shrink-0 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
                      <WordFadeDown inView={inView} baseDelay={0.2 + idx * 0.08} stagger={0.04}>
                        {cat.name}
                      </WordFadeDown>
                    </span>
                    <span className="text-xs text-slate-500 pl-5 mt-0.5">
                      <WordFadeDown inView={inView} baseDelay={0.24 + idx * 0.08} stagger={0.03}>
                        {cat.sub}
                      </WordFadeDown>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <WordFadeDown
              as="h3"
              inView={inView}
              baseDelay={0.15}
              stagger={0.06}
              className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3 block"
            >
              Quick Links
            </WordFadeDown>

            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className={`w-3.5 h-3.5 text-brand-orange transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
                    <WordFadeDown inView={inView} baseDelay={0.22 + idx * 0.06} stagger={0.04}>
                      {link.name}
                    </WordFadeDown>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <WordFadeDown
              as="h3"
              inView={inView}
              baseDelay={0.18}
              stagger={0.06}
              className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3 block"
            >
              Contact Us
            </WordFadeDown>

            <div className="bg-brand-navy/60 p-4 rounded-xl border border-slate-700/60 space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-brand-orange rounded-full text-white flex-shrink-0 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <WordFadeDown
                    inView={inView}
                    baseDelay={0.24}
                    stagger={0.04}
                    className="block text-xs uppercase font-bold text-brand-paleOrange tracking-wider"
                  >
                    Enquiry Hotline
                  </WordFadeDown>
                  <a
                    href="tel:8329358214"
                    className="text-xl font-extrabold text-white hover:text-brand-orange transition-colors tracking-wide block"
                  >
                    <WordFadeDown inView={inView} baseDelay={0.3} stagger={0.05}>
                      83293 58214
                    </WordFadeDown>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700/50" />

              {/* Online enquiry */}
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-brand-blueAccent/50 rounded-full text-white flex-shrink-0 transition-all duration-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <WordFadeDown
                    inView={inView}
                    baseDelay={0.34}
                    stagger={0.04}
                    className="block text-xs uppercase font-bold text-brand-paleOrange tracking-wider"
                  >
                    Online Enquiries
                  </WordFadeDown>
                  <Link to="/contact" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors block">
                    <WordFadeDown inView={inView} baseDelay={0.4} stagger={0.04}>
                      Submit via Contact Form
                    </WordFadeDown>
                  </Link>
                </div>
              </div>

              <WordFadeDown
                as="p"
                inView={inView}
                baseDelay={0.46}
                stagger={0.03}
                className="text-xs text-slate-500 mt-1"
              >
                Direct enquiries routed to the ARYVON technical engineering team.
              </WordFadeDown>
            </div>
          </div>
        </div>

        {/* Assurance badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Wrench className={`w-6 h-6 text-brand-orange flex-shrink-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
            <div>
              <WordFadeDown as="p" inView={inView} baseDelay={0.38} stagger={0.04} className="font-bold text-white text-sm">
                Industrial Grade Durability
              </WordFadeDown>
              <WordFadeDown as="p" inView={inView} baseDelay={0.46} stagger={0.03} className="text-xs text-slate-400">
                Engineered for demanding continuous operations
              </WordFadeDown>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <ShieldCheck className={`w-6 h-6 text-brand-orange flex-shrink-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
            <div>
              <WordFadeDown as="p" inView={inView} baseDelay={0.42} stagger={0.04} className="font-bold text-white text-sm">
                Operator Safety Focused
              </WordFadeDown>
              <WordFadeDown as="p" inView={inView} baseDelay={0.5} stagger={0.03} className="text-xs text-slate-400">
                Compliant with standard industrial safety protocols
              </WordFadeDown>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Clock className={`w-6 h-6 text-brand-orange flex-shrink-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`} />
            <div>
              <WordFadeDown as="p" inView={inView} baseDelay={0.46} stagger={0.04} className="font-bold text-white text-sm">
                Prompt Technical Support
              </WordFadeDown>
              <WordFadeDown as="p" inView={inView} baseDelay={0.54} stagger={0.03} className="text-xs text-slate-400">
                Dedicated assistance for enquiries &amp; service
              </WordFadeDown>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <WordFadeDown
            as="p"
            inView={inView}
            baseDelay={0.56}
            stagger={0.03}
            text={`© ${new Date().getFullYear()} ARYVON — Material Handling Solutions. All rights reserved.`}
          />
          <WordFadeDown
            as="p"
            inView={inView}
            baseDelay={0.62}
            stagger={0.035}
            className="text-slate-400"
            text="VRC • Scissor Lifts • EOT Cranes • Conveyors"
          />
        </div>
      </div>

      {/* Industrial Safety Hazard Stripe */}
      <div className="hazard-stripe" />
    </footer>
  );
}
