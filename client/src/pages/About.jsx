import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Wrench, ShieldCheck, Factory, Warehouse, Truck,
  ArrowRight, Phone, CheckCircle2, FileText, Info
} from 'lucide-react';
import Button from '../components/Button';
import aboutImage from "../assets/Modern Warehouse Logistics in Motion1.png";
import IndustrialShapes from "../components/IndustrialShapes";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
              About ARYVON
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Engineering Practical Material Handling Solutions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ARYVON is dedicated to providing high-reliability material handling equipment and custom systems engineered for manufacturing plants, high-bay warehousing, and continuous logistics operations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Business Focus */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange border-b-2 border-brand-orange pb-1 inline-block">
              Company Overview & Focus
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Focused Exclusively on Material Handling Equipment
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Material handling is the operational backbone of any productive industrial facility. Equipment failures, inefficient routing, or ill-suited tools directly impact throughput, worker safety, and operational costs.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              At <strong>ARYVON</strong>, our single business focus is matching industrial operations with the most practical, durable, and safe material handling equipment. Whether your operation requires a dependable manual pallet truck for dock staging or an automated conveyor and EOT crane system for heavy fabrication, we deliver equipment engineered to perform under demanding conditions.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src={aboutImage}
                alt="ARYVON Material Handling Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="p-5 bg-brand-navy text-white text-center">
                <span className="text-brand-paleOrange font-bold text-xs uppercase tracking-widest block">
                  Tagline
                </span>
                <p className="text-xl font-black font-heading mt-1">
                  MATERIAL HANDLING SOLUTIONS
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Service & Practical Solutions Approach */}
      <AnimatedSection animation="fade-up" className="bg-slate-100/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Service Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Our Customer-Centric Service Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We approach each enquiry from an engineering and operational standpoint rather than generic sales pitches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-brand-lightBlue text-brand-navy rounded-lg w-fit">
                <Building2 className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-heading">
                1. Requirement Analysis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We assess your load dimensions, pallet weights, lift heights, aisle clearances, and duty cycle requirements before recommending equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-brand-lightBlue text-brand-navy rounded-lg w-fit">
                <Wrench className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-heading">
                2. Practical Equipment Matching
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We specify machines built with standard, easily serviceable components to ensure straightforward maintenance and high availability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-brand-lightBlue text-brand-navy rounded-lg w-fit">
                <ShieldCheck className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy font-heading">
                3. Safety & Ergonomics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every unit emphasizes operator protection, ergonomic control handles, emergency stops, and fail-safe hydraulic relief valves.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Industries Supported Overview */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Sectors Covered
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy font-heading">
            Target Industries We Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
            <Factory className="w-8 h-8 text-brand-orange flex-shrink-0" />
            <div>
              <h4 className="font-bold text-brand-navy text-base">Manufacturing</h4>
              <p className="text-xs text-slate-600 mt-1">Raw material intake, inter-departmental transport, and finished goods assembly lines.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
            <Warehouse className="w-8 h-8 text-brand-orange flex-shrink-0" />
            <div>
              <h4 className="font-bold text-brand-navy text-base">Warehousing</h4>
              <p className="text-xs text-slate-600 mt-1">Pallet racking access, order picking, narrow-aisle stacking, and bulk storage.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 flex items-start gap-4">
            <Truck className="w-8 h-8 text-brand-orange flex-shrink-0" />
            <div>
              <h4 className="font-bold text-brand-navy text-base">Logistics</h4>
              <p className="text-xs text-slate-600 mt-1">Trailer docking, cargo consolidation, cross-dock loading, and rapid distribution.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-brand-orange relative overflow-hidden">
          <IndustrialShapes />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Ready to Upgrade Your Material Handling Efficiency?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Get in touch with ARYVON to request quotations or discuss customized solutions for your facility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 whitespace-nowrap">
            <Button to="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              Request a Quotation
            </Button>
            <a
              href="tel:8329358214"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white hover:text-brand-navy text-white text-sm font-bold tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              83293 58214
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
