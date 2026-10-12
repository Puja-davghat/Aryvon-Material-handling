import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Wrench, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-slate-300 pt-16 border-t-4 border-brand-orange relative overflow-hidden">
      {/* Background gear accent decoration */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/3 translate-y-1/3">
        <svg className="w-96 h-96 animate-spin-slow text-white" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="12 12" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/assets/logo/aryvon-logo.png"
                alt="ARYVON Logo"
                className="h-10 w-auto bg-white/10 p-1 rounded"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-widest font-heading text-white">
                  ARY<span className="text-brand-orange">VON</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-brand-paleOrange uppercase">
                  Material Handling Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineered material handling equipment and custom systems for manufacturing facilities, modern warehousing operations, and logistics hubs.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-brand-paleOrange">
              <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Heavy-Duty Industrial Standards & Reliable Engineering</span>
            </div>
          </div>

          {/* Column 2: Industries We Serve */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Industries We Serve
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/industries#manufacturing"
                  className="hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  Manufacturing Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/industries#warehousing"
                  className="hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  Warehousing & Distribution
                </Link>
              </li>
              <li>
                <Link
                  to="/industries#logistics"
                  className="hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  Logistics & Cargo Transit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">
                  About ARYVON
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-orange transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-brand-orange transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">
                  Contact Us & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Phone Support */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-l-4 border-brand-orange pl-3">
              Direct Contact
            </h3>
            <div className="bg-brand-navy/60 p-4 rounded-lg border border-slate-700/60 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-orange rounded-full text-white flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-brand-paleOrange tracking-wider">
                    Customer Hotline
                  </span>
                  <a
                    href="tel:8329358214"
                    className="text-lg font-extrabold text-white hover:text-brand-orange transition-colors tracking-wide"
                  >
                    83293 58214
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Call us directly for equipment quotations, technical inquiries, and custom project consultations.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Assurance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Wrench className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Industrial Grade Durability</p>
              <p className="text-xs text-slate-400">Tested for demanding continuous operations</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Operator Safety Focused</p>
              <p className="text-xs text-slate-400">Compliant with standard industrial protocols</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Clock className="w-6 h-6 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-sm">Prompt Technical Support</p>
              <p className="text-xs text-slate-400">Dedicated assistance for quotations & servicing</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} ARYVON &mdash; Material Handling Solutions. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered for Manufacturing &bull; Warehousing &bull; Logistics
          </p>
        </div>
      </div>

      {/* Industrial Safety Hazard Stripe */}
      <div className="hazard-stripe" />
    </footer>
  );
}
