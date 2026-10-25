import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // 4 Dedicated Product Pages
  const productCategories = [
    { name: 'VRC', sub: 'Vertical Reciprocating Conveyor', href: '/products/vrc' },
    { name: 'Scissor Lift', sub: 'Self-Propelled & Floor-Mounted', href: '/products/scissor-lift' },
    { name: 'EOT Crane', sub: 'Single Girder & Double Girder', href: '/products/eot-crane' },
    { name: 'Conveyor', sub: 'Roller & Chain Conveyor', href: '/products/conveyor' }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Industrial Bar */}
      <div className="bg-brand-deep text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-orange mr-2 animate-ping" />
              Advanced Material Handling Solutions — VRC · Scissor Lifts · EOT Cranes · Conveyors
            </span>
          </div>
          <a href="tel:8329358214" className="hidden sm:flex items-center gap-1.5 text-brand-paleOrange hover:text-white transition-colors font-semibold">
            <Phone className="w-3 h-3" />
            83293 58214
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo & Brand — using exact logo image, no plain text ARYVON */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="ARYVON Material Handling Solutions">
              <div className="flex flex-col justify-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-[#0B2545]/80 uppercase mt-0.5 pl-0.5">
                  Material Handling Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) =>
                link.name === 'Products' ? (
                  <div key={link.path} className="relative group">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md inline-flex items-center gap-1 ${
                          isActive || location.pathname.startsWith('/products')
                            ? 'text-[#F97316] font-bold border-b-2 border-[#F97316] bg-orange-50/60'
                            : 'text-[#0B2545] hover:text-[#F97316] hover:bg-orange-50/50'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-[#F97316] group-hover:rotate-180 transition-transform duration-200" />
                    </NavLink>

                    {/* Products Dropdown pointing to 4 dedicated pages */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 space-y-1">
                        {productCategories.map(cat => (
                          <Link
                            key={cat.name}
                            to={cat.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 group/item transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                            <div>
                              <p className="text-sm font-bold text-[#0B2545] group-hover/item:text-[#F97316] transition-colors">
                                {cat.name}
                              </p>
                              <p className="text-xs text-slate-500">{cat.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 px-4 py-3 bg-slate-50 flex items-center justify-between">
                        <Link to="/products" className="text-xs font-bold text-[#F97316] hover:text-orange-700 uppercase tracking-wider">
                          View Complete Catalogue →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md ${
                        isActive
                          ? 'text-[#F97316] font-bold border-b-2 border-[#F97316] bg-orange-50/60'
                          : 'text-[#0B2545] hover:text-[#F97316] hover:bg-orange-50/50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}

              {/* Request a Quote CTA */}
              <button
                onClick={() => navigate('/contact')}
                className="ml-3 px-5 py-2.5 bg-[#F97316] hover:bg-orange-600 active:scale-95 text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-orange-500/25"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-[#0B2545] hover:text-[#F97316] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Hazard stripe accent */}
        <div className="hazard-stripe" />

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-[#F97316] bg-orange-50 font-bold border-l-4 border-[#F97316]'
                      : 'text-[#0B2545] hover:bg-orange-50 hover:text-[#F97316]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile 4 Dedicated Product Pages */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-[#0B2545]/60 uppercase tracking-widest px-4 mb-2">Dedicated Product Pages</p>
              {productCategories.map(cat => (
                <Link
                  key={cat.name}
                  to={cat.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[#0B2545] hover:text-[#F97316] hover:bg-orange-50/50 rounded-md transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                    <span className="font-semibold">{cat.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">{cat.sub.split('&')[0]}</span>
                </Link>
              ))}
            </div>

            <button
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-[#F97316] text-white text-base font-bold uppercase tracking-wider shadow-md hover:bg-orange-600 transition-all"
            >
              <Phone className="w-5 h-5" />
              Request a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
