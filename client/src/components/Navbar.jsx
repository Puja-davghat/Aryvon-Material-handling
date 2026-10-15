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

  const productCategories = [
    { name: 'VRC', sub: 'Vertical Reciprocating Conveyor', href: '/products#vrc' },
    { name: 'Scissor Lift', sub: 'Self-Propelled & Floor-Mounted', href: '/products#scissor-lift' },
    { name: 'EOT Crane', sub: 'Single Girder & Double Girder', href: '/products#eot-crane' },
    { name: 'Conveyor', sub: 'Roller & Chain Conveyor', href: '/products#conveyor' }
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
        className={`bg-white/96 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-lg border-b border-slate-200/80' : 'border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo & Brand */}
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) =>
                link.name === 'Products' ? (
                  <div key={link.path} className="relative group">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md inline-flex items-center gap-1 ${
                          isActive
                            ? 'text-brand-navy bg-brand-lightBlue/60 border-b-2 border-brand-orange font-bold'
                            : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100/80'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-brand-orange group-hover:rotate-180 transition-transform duration-200" />
                    </NavLink>

                    {/* Products Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 space-y-1">
                        {productCategories.map(cat => (
                          <a
                            key={cat.name}
                            href={cat.href}
                            onClick={(e) => { e.preventDefault(); navigate(cat.href.split('#')[0]); setTimeout(() => { document.getElementById(cat.href.split('#')[1])?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-brand-lightBlue group/item transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                            <div>
                              <p className="text-sm font-bold text-brand-navy group-hover/item:text-brand-orange transition-colors">{cat.name}</p>
                              <p className="text-xs text-slate-500">{cat.sub}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 px-4 py-3 bg-slate-50">
                        <Link to="/products" className="text-xs font-bold text-brand-orange hover:text-brand-orangeHover uppercase tracking-wider">
                          View All Products →
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
                          ? 'text-brand-navy bg-brand-lightBlue/60 border-b-2 border-brand-orange font-bold'
                          : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100/80'
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
                className="ml-3 px-5 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center">
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
                      ? 'bg-brand-navy text-white font-bold'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-brand-navy'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile product quick links */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">Products</p>
              {productCategories.map(cat => (
                <a
                  key={cat.name}
                  href={cat.href}
                  onClick={(e) => { e.preventDefault(); navigate(cat.href.split('#')[0]); setIsOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:text-brand-orange"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {cat.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-orange text-white text-base font-bold uppercase tracking-wider shadow-md hover:bg-brand-orangeHover transition-all"
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
