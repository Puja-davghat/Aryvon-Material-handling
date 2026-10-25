import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Wrench, Clock } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-brand-deep text-slate-300 pt-16 border-t-4 border-brand-orange relative overflow-hidden">
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
              <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm inline-block w-fit">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON Material Handling Solutions Logo"
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-paleOrange uppercase pl-0.5">
                Material Handling Solutions
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              ARYVON provides engineered material handling solutions — Vertical Reciprocating Conveyors (VRC), Scissor Lifts, EOT Cranes, and Conveyors — tailored to industrial operational requirements.
            </p>
            <div className="pt-2 flex items-center gap-2.5 text-xs text-brand-paleOrange">
              <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Heavy-Duty Industrial Standards &amp; Reliable Engineering</span>
            </div>
          </div>

          {/* Column 2: 4 Dedicated Products */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Dedicated Products
            </h3>
            <ul className="space-y-3 text-sm">
              {productCategories.map(cat => (
                <li key={cat.name}>
                  <Link
                    to={cat.href}
                    className="group flex flex-col hover:text-brand-orange transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold text-slate-200 group-hover:text-brand-orange transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      {cat.name}
                    </span>
                    <span className="text-xs text-slate-500 pl-5 mt-0.5">{cat.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Contact Us
            </h3>
            <div className="bg-brand-navy/60 p-4 rounded-xl border border-slate-700/60 space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-orange rounded-full text-white flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-brand-paleOrange tracking-wider">
                    Enquiry Hotline
                  </span>
                  <a
                    href="tel:8329358214"
                    className="text-xl font-extrabold text-white hover:text-brand-orange transition-colors tracking-wide"
                  >
                    83293 58214
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700/50" />

              {/* Online enquiry */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-blueAccent/50 rounded-full text-white flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-brand-paleOrange tracking-wider">
                    Online Enquiries
                  </span>
                  <Link to="/contact" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors">
                    Submit via Contact Form
                  </Link>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-1">
                Direct enquiries routed to the ARYVON technical engineering team.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Assurance badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Wrench className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Industrial Grade Durability</p>
              <p className="text-xs text-slate-400">Engineered for demanding continuous operations</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Operator Safety Focused</p>
              <p className="text-xs text-slate-400">Compliant with standard industrial safety protocols</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Clock className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Prompt Technical Support</p>
              <p className="text-xs text-slate-400">Dedicated assistance for enquiries &amp; service</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} ARYVON &mdash; Material Handling Solutions. All rights reserved.</p>
          <p className="text-slate-400">
            VRC &bull; Scissor Lifts &bull; EOT Cranes &bull; Conveyors
          </p>
        </div>
      </div>

      {/* Industrial Safety Hazard Stripe */}
      <div className="hazard-stripe" />
    </footer>
  );
}
