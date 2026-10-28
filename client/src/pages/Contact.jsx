import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  return (
    <div className="space-y-12 sm:space-y-16 py-10 sm:py-16">
      {/* Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block rv-hero-text-fade">
              Direct Inquiries
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight text-white rv-hero-text-fade">
                Contact
              </h1>
              <div className="bg-white/95 px-3 py-1 rounded-lg shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed rv-hero-text-fade-delayed">
              Have a material handling requirement or need technical assistance? Contact our team directly through our verified phone line or submit your equipment requirements through the enquiry form below.  </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Cards (Left) and Enquiry Form (Right) */}
      <AnimatedSection animation="fade-up" stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-brand-navy font-heading border-b border-slate-100 pb-3">
                Equipment Desk Information
              </h3>

              {/* Verified Phone Number */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Verified Contact Phone
                  </span>
                  <a
                    href="tel:8329358214"
                    className="text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors tracking-wide block mt-1"
                    title="Click to dial 83293 58214"
                  >
                    83293 58214
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Available for equipment inquiries, technical advice, and project evaluations.
                  </p>
                </div>
              </div>

              {/* Business Email Info */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-brand-navy/10 text-brand-navy rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Online Inquiries
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    Submissions are routed directly to the confirmed ARYVON business desk.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Please use the enquiry form for prompt technical proposals with full specifications.
                  </p>
                </div>
              </div>

              {/* Operational Response Commitment */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-brand-lightBlue text-brand-navy rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Response Timeline
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    Prompt Review by Application Engineers
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Technical proposals and datasheet recommendations typically furnished within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-brand-paleOrange">
                <ShieldCheck className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <h4 className="font-bold text-base text-white">Proposal Transparency</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All ARYVON technical proposals clearly delineate equipment capacities, mast configurations, electrical battery requirements, warranty terms, and estimated dispatch schedules.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Equipment Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
