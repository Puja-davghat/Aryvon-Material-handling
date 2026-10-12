import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries We Serve', path: '/industries' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Industrial Bar with Contact & Safety Alert */}
      <div className="bg-brand-deep text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-orange mr-2 animate-ping" />
              Heavy-Duty Material Handling Equipment & Custom Systems
            </span>
          </div>

          <div className="flex items-center space-x-6 ml-auto">
            <a
              href="tel:8329358214"
              className="flex items-center gap-1.5 font-bold text-brand-paleOrange hover:text-white transition-colors"
              title="Click to call ARYVON"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-slate-400 font-normal hidden md:inline">Contact:</span>
              <span className="tracking-wider">83293 58214</span>
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-block text-xs font-semibold text-slate-300 hover:text-brand-orange transition-colors"
            >
              Request a Quotation &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-lg border-b border-slate-200/80' : 'border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Wordmark */}
            <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
              <img
                src="/assets/logo/aryvon-logo.png"
                alt="ARYVON Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-black tracking-widest font-heading leading-none">
                  <span className="text-brand-navy">ARY</span>
                  <span className="text-brand-orange">VON</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-1">
                  Material Handling Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md ${
                      isActive
                        ? 'text-brand-navy bg-brand-lightBlue/60 border-b-2 border-brand-orange font-bold'
                        : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:8329358214"
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors border border-slate-300 rounded-md hover:border-brand-orange"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>83293 58214</span>
              </a>
              <Button to="/contact" variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:8329358214"
                className="p-2 text-brand-orange bg-orange-50 rounded-md focus:outline-none"
                aria-label="Call ARYVON"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Hazard stripe accent beneath navbar */}
        <div className="hazard-stripe" />

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-navy text-white font-bold'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-brand-navy'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="tel:8329358214"
                className="flex items-center justify-center gap-2 py-3 bg-brand-deep text-white font-bold rounded-md tracking-wider"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                Call 83293 58214
              </a>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
