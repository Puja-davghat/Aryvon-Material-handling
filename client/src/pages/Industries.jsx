import React from 'react';
import { 
  Factory, Warehouse, Truck, CheckCircle2, ArrowRight, 
  Layers, ShieldAlert, Cpu, Cog 
} from 'lucide-react';
import Button from '../components/Button';

export default function Industries() {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
              Sector Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Industries We Serve
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Material handling equipment tailored for three vital operational pillars &mdash; Manufacturing, Warehousing, and Logistics. Learn how proper equipment choices prevent bottlenecks and protect workforce safety.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav Anchors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <a
            href="#manufacturing"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors"
          >
            <Factory className="w-4 h-4 text-brand-orange" />
            1. Manufacturing Facilities
          </a>
          <span className="text-slate-300 hidden sm:inline">&bull;</span>
          <a
            href="#warehousing"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors"
          >
            <Warehouse className="w-4 h-4 text-brand-orange" />
            2. Warehousing & Storage
          </a>
          <span className="text-slate-300 hidden sm:inline">&bull;</span>
          <a
            href="#logistics"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors"
          >
            <Truck className="w-4 h-4 text-brand-orange" />
            3. Logistics & Cargo Transit
          </a>
        </div>
      </section>

      {/* SECTION 1: MANUFACTURING */}
      <section id="manufacturing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lightBlue text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-brand-orange" />
              Production & Shop-Floor Handling
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Manufacturing Environments
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In manufacturing facilities, continuous production depends on uninterrupted, synchronized transit of raw raw stocks, sub-assemblies, work-in-progress (WIP), and finished products between workstations.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Suitable equipment &mdash; such as overhead electric cranes, motorized roller conveyors, and hydraulic stackers &mdash; reduces manual strain on assembly operators, avoids staging clutter, and prevents transit damage to high-precision components.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider">
                Operational Benefits:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Streamlined component transfer between fabrication cells and paint booths.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Overhead crane utilization frees up valuable shop-floor corridor space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Controlled ergonomic lifting heights minimize operator fatigue and musculoskeletal risks.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to="/contact?subject=Manufacturing+Solutions+Enquiry" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                Request a Quote for Manufacturing
              </Button>
              <Button to="/products" variant="secondary" size="md">
                View Related Equipment
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-100 h-full min-h-[350px] relative overflow-hidden">
            <img
              src="/assets/images/industries/manufacturing.jpg"
              alt="Manufacturing Facility Material Handling Systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WAREHOUSING */}
      <section id="warehousing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 bg-slate-100 h-full min-h-[350px] relative overflow-hidden">
            <img
              src="/assets/images/industries/warehousing.jpg"
              alt="Warehousing High-Density Pallet Racking and Reach Trucks"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lightBlue text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider">
              <Warehouse className="w-3.5 h-3.5 text-brand-orange" />
              Storage Optimization & Inventory Stacking
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Warehousing & Storage Operations
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Modern warehousing demands optimal vertical cubic space utilization while preserving rapid access to individual stock-keeping units (SKUs). 
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Equipping facilities with heavy-duty selective pallet racking, narrow-aisle electric reach trucks, and walkie stackers enables facilities to store higher density pallet volumes while keeping aisle passageways organized and compliant with fire safety clearances.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider">
                Operational Benefits:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Maximizes warehouse vertical storage up to 8.5+ meters with high-mast reach trucks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Enables rapid 100% selective pallet accessibility for high-SKU inventory turns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Electric battery-powered units eliminate harmful diesel fumes in enclosed storage.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to="/contact?subject=Warehousing+Equipment+Enquiry" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                Request a Quote for Warehousing
              </Button>
              <Button to="/products" variant="secondary" size="md">
                View Related Equipment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LOGISTICS */}
      <section id="logistics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lightBlue text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-brand-orange" />
              Dock Transfer & High-Throughput Dispatch
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy font-heading">
              Logistics & Distribution Operations
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Logistics distribution centers, freight forwarding hubs, and third-party logistics (3PL) providers handle high-velocity goods transfer where turnaround minutes directly dictate fleet profitability.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Electro-hydraulic dock levelers bridge the physical gap between facility loading bays and varied transport container bed heights, allowing forklifts and pallet jacks to load and unload trailers safely, swiftly, and without ramp jolting.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider">
                Operational Benefits:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Fast, safe forklift transitions into container truck beds via hydraulic dock levelers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Counterbalance electric forklifts provide high torque for fast cross-dock movements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>Reduced loading dock turnaround times protect schedule reliability and cargo integrity.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to="/contact?subject=Logistics+Solutions+Enquiry" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                Request a Quote for Logistics
              </Button>
              <Button to="/products" variant="secondary" size="md">
                View Related Equipment
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-100 h-full min-h-[350px] relative overflow-hidden">
            <img
              src="/assets/images/industries/logistics.jpg"
              alt="Logistics Distribution Loading Dock Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Common CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-2xl p-8 sm:p-12 text-white text-center space-y-4 border-b-4 border-brand-orange">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Expert Advice for Your Specific Industrial Setup?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our material handling team can help you identify equipment configurations that best fit your floorplan, load profiles, and budget.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Contact Us for a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
