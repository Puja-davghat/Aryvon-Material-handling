import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, Shield, Cpu, Factory, Warehouse, Truck, 
  CheckCircle2, Wrench, Layers, ChevronRight 
} from 'lucide-react';
import Button from '../components/Button';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* =========================================================================
          HERO SECTION: Industrial Theme, Gears, Moving Conveyor & Direct CTA
         ========================================================================= */}
      <section className="relative bg-brand-deep text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle Industrial Grid and Radial Mask */}
        <div className="absolute inset-0 industrial-grid opacity-25 pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blueAccent/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Gears from Original Aryvon Site */}
        <div className="absolute top-10 left-6 opacity-10 pointer-events-none hidden lg:block">
          <svg className="w-48 h-48 animate-spin-slow text-white" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="12 12" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-navy border border-brand-orange/40 text-brand-paleOrange text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                Heavy-Duty Material Handling Equipment
              </div>

              {/* Exact Required Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight text-white">
                Material Handling Solutions Built for <span className="text-brand-orange">Your Business</span>
              </h1>

              {/* Exact Required Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Discover material handling solutions for manufacturing, warehousing, and logistics operations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to="/products" variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                  Explore Our Products
                </Button>
              </div>
            </div>

            {/* Right Showcase Box: Industrial Visual & Animated Equipment Scene */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-brand-navy to-slate-900 border-2 border-brand-orange/50 shadow-2xl p-6">
                {/* Visual Equipment Graphic */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                  <img
                    src="/assets/images/hero/hero-warehouse.jpg"
                    alt="Material Handling Operations in Modern Industrial Facility"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent" />
                  
                  {/* Floating Specs Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-deep/90 backdrop-blur-md p-3.5 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-extrabold text-white text-sm">Industrial Fleet & Racking</p>
                      <p className="text-brand-paleOrange font-semibold">Engineered For Zero Downtime</p>
                    </div>
                    <div className="p-2 bg-brand-orange text-white rounded-md font-bold">
                      24/7 MHE
                    </div>
                  </div>
                </div>

                {/* Animated Conveyor / Logistics SVG Track from Aryvon branding */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <svg className="w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#0a4a94" strokeWidth="4" />
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#fc6c04" strokeWidth="2" strokeDasharray="10 15">
                      <animate attributeName="stroke-dashoffset" values="0;-100" dur="3s" repeatCount="indefinite" />
                    </line>
                    <circle cx="30" cy="20" r="5" fill="#fc6c04" />
                    <circle cx="120" cy="20" r="5" fill="#cfe0fa" />
                    <circle cx="210" cy="20" r="5" fill="#fc6c04" />
                    <circle cx="300" cy="20" r="5" fill="#cfe0fa" />
                    <circle cx="380" cy="20" r="5" fill="#fc6c04" />
                  </svg>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">
                    <span>In-Plant Transit</span>
                    <span>High-Bay Storage</span>
                    <span>Dispatch Dock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hazard Safety Stripe Accent */}
        <div className="hazard-stripe absolute bottom-0 left-0 right-0" />
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION: Operational focus & reliability without fluff
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest border-b-2 border-brand-orange pb-1">
              About ARYVON
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading leading-tight">
              Dedicated to Practical, Reliable Material Movement
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              At <strong>ARYVON</strong>, we specialize exclusively in material handling equipment and custom systems designed to optimize the movement, lifting, and storage of goods across production facilities, warehouse racks, and logistics distribution centers.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We work closely with plant managers, warehouse supervisors, and operations teams to recommend equipment that solves actual operational bottlenecks &mdash; prioritizing operator safety, build durability, ergonomic ease, and day-to-day functional reliability without unnecessary complexity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-navy">Customer-Focused Solutions</h4>
                  <p className="text-xs text-slate-500 mt-1">Configured to match exact aisle widths, load capacities, and dock heights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Wrench className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-navy">Practical Operational Value</h4>
                  <p className="text-xs text-slate-500 mt-1">Robust build materials engineered to withstand rigorous factory shifts.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="navy" size="md" icon={ArrowRight} iconPosition="right">
                Learn More About Our Approach
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/assets/images/about/about-facility.jpg"
                alt="ARYVON Equipment Facility & Storage Solutions"
                className="w-full h-full object-cover"
              />
              <div className="p-6 bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-brand-paleOrange uppercase tracking-wider">Direct Consultation</p>
                  <p className="text-lg font-bold">Have an equipment specification requirement?</p>
                </div>
                <Button to="/contact" variant="primary" size="sm" className="whitespace-nowrap">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCTS: Live Catalogue Grid with API Fetch & Filter
         ========================================================================= */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">
                Online Equipment Catalogue
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
                Featured Material Handling Equipment
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2">
                Browse our verified offerings spanning manual and electric pallet handling, forklifts, overhead cranes, conveyor lines, and heavy-duty storage racking.
              </p>
            </div>
            <Button to="/products" variant="navy" size="md" icon={ArrowRight} iconPosition="right" className="whitespace-nowrap">
              View All Catalogue Items
            </Button>
          </div>

          {/* Product Grid Component */}
          <ProductGrid limit={8} />
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES WE SERVE: 3 Visual Cards (Manufacturing, Warehousing, Logistics)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Sector Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy font-heading">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored material handling solutions engineered to overcome sector-specific operational demands and safety guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Manufacturing */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src="/assets/images/industries/manufacturing.jpg"
                  alt="Manufacturing Material Movement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2.5 bg-brand-navy/90 text-brand-paleOrange rounded-lg backdrop-blur-sm">
                  <Factory className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors">
                  Manufacturing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Support smooth material and component movement within production lines, machining bays, and final assembly cells with cranes, stackers, and conveyors.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to="/industries#manufacturing"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors"
              >
                Explore Manufacturing Solutions <ChevronRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>
          </div>

          {/* Card 2: Warehousing */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src="/assets/images/industries/warehousing.jpg"
                  alt="Warehousing and Storage Operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2.5 bg-brand-navy/90 text-brand-paleOrange rounded-lg backdrop-blur-sm">
                  <Warehouse className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors">
                  Warehousing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Maximize vertical cubic space and speed up pallet retrieval with narrow-aisle reach trucks, heavy selective racking, and walkie stackers.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to="/industries#warehousing"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors"
              >
                Explore Warehousing Solutions <ChevronRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>
          </div>

          {/* Card 3: Logistics */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src="/assets/images/industries/logistics.jpg"
                  alt="Logistics & Distribution Dock Operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2.5 bg-brand-navy/90 text-brand-paleOrange rounded-lg backdrop-blur-sm">
                  <Truck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors">
                  Logistics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Accelerate trailer loading, unloading, and cross-docking operations with stationary hydraulic dock levelers, counterbalance forklifts, and container ramps.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to="/industries#logistics"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors"
              >
                Explore Logistics Solutions <ChevronRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CALL TO ACTION: Exact Required Headline & Request a Quote button
         ========================================================================= */}
      <section className="bg-brand-navy text-white relative overflow-hidden py-16 sm:py-20 border-t-4 border-brand-orange">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white">
            Looking for the Right Material Handling Solution?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact ARYVON to discuss your equipment requirements, request official quotations, or consult with our engineering team on customized configurations.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Request a Quote
            </Button>
            <a
              href="tel:8329358214"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy font-bold text-sm tracking-widest uppercase transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              Call 83293 58214
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
