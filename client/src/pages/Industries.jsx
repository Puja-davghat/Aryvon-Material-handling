import React from 'react';
import {
  Factory, Warehouse, Truck, CheckCircle2, ArrowRight,
  Package, Car, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import manufacturingImg from '../assets/aryvon-image-assets/industries/manufacturing.jpg';
import warehousingImg from '../assets/aryvon-image-assets/industries/warehousing.jpg';
import logisticsImg from '../assets/aryvon-image-assets/industries/logistics.jpg';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';

const industries = [
  {
    id: 'warehousing',
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    subtitle: 'Storage & Goods Movement',
    image: warehousingImg,
    description:
      'Modern high-bay warehouses demand reliable vertical movement of goods between floors, precise pallet positioning, and efficient horizontal transport across storage aisles. ARYVON\'s VRCs, scissor lifts, and conveyor systems are engineered to optimize these flows.',
    equipment: [
      'VRC — for multi-level goods transfer between mezzanine and ground floors',
      'Floor-Mounted Scissor Lift — for ergonomic pallet work height adjustment',
      'Roller Conveyor — for efficient horizontal goods flow within dispatch and receiving'
    ]
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing Facilities',
    subtitle: 'Production Line Handling',
    image: manufacturingImg,
    description:
      'Production facilities require uninterrupted, synchronized movement of raw materials, sub-assemblies, and finished goods between workstations. Overhead EOT cranes, conveyors, and scissor lifts reduce manual handling, protect components, and maintain throughput.',
    equipment: [
      'Single Girder EOT Crane — for component movement between fabrication cells',
      'Double Girder EOT Crane — for heavy tooling and large component handling',
      'Chain Conveyor — for reliable movement of pallets and heavy assemblies',
      'Self-Propelled Scissor Lift — for overhead installation and maintenance access'
    ]
  },
  {
    id: 'ecommerce',
    icon: Package,
    title: 'E-Commerce Fulfilment',
    subtitle: 'High-Speed Order Processing',
    image: warehousingImg,
    description:
      'E-commerce fulfilment centres operate at high velocity with constant goods movement across multiple floor levels. VRCs provide efficient vertical goods transfers without elevator downtime, while roller conveyors automate horizontal sorting and dispatch.',
    equipment: [
      'VRC — for continuous pallet transfer between picking floors and dispatch level',
      'Roller Conveyor — for automated carton and tote flow across sortation lines',
      'Floor-Mounted Scissor Lift — for ergonomic pick station height adjustment'
    ]
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Plants',
    subtitle: 'Heavy Component Handling',
    image: manufacturingImg,
    description:
      'Automotive assembly and fabrication plants handle heavy body panels, engine components, and large sub-assemblies. Double girder EOT cranes and chain conveyors are critical for safe, controlled movement of high-value components through production stages.',
    equipment: [
      'Double Girder EOT Crane — for heavy engine and body panel lifting',
      'Chain Conveyor — for pallet and component movement on assembly lines',
      'Single Girder EOT Crane — for lighter component handling in sub-assembly cells'
    ]
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Freight',
    subtitle: 'Dock & Transit Operations',
    image: logisticsImg,
    description:
      'Logistics hubs and freight terminals require efficient loading, unloading, and cross-docking. Scissor lifts, VRCs, and conveyors facilitate rapid material movement between vehicle and warehouse — improving turnaround times and operational safety.',
    equipment: [
      'VRC — for goods transfer between loading dock level and elevated warehouse floors',
      'Floor-Mounted Scissor Lift — for trailer height bridging at loading bays',
      'Roller Conveyor — for continuous cargo movement from inbound to outbound'
    ]
  }
];

export default function Industries() {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
              Sector Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Industries We Serve
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ARYVON's material handling solutions are deployed across diverse industrial sectors. Wherever reliable movement, lifting, and positioning of goods is operationally critical, our equipment performs.
            </p>

            {/* Quick anchor nav */}
            <div className="flex flex-wrap gap-2 pt-2">
              {industries.map(ind => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="px-3 py-1.5 text-xs font-bold bg-brand-navy/80 hover:bg-brand-orange text-white rounded-lg border border-white/10 hover:border-brand-orange transition-all uppercase tracking-wider"
                >
                  {ind.title.split(' ')[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industries.map((ind, index) => (
          <AnimatedSection
            key={ind.id}
            id={ind.id}
            animation="fade-up"
            className="scroll-mt-28"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg ${
              index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
            }`}>
              {/* Image */}
              <div className="lg:col-span-5 relative overflow-hidden">
                <img
                  src={ind.image}
                  alt={`ARYVON material handling for ${ind.title}`}
                  className="w-full h-full object-cover min-h-64 lg:min-h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/60 via-transparent to-transparent lg:block hidden" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  <ind.icon className="w-3.5 h-3.5" />
                  {ind.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                    {ind.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    {ind.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Equipment list */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-brand-navy uppercase tracking-wider">
                    Applicable ARYVON Equipment:
                  </h4>
                  <ul className="space-y-2.5">
                    {ind.equipment.map((eq, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    View Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Banner */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border-t-4 border-brand-orange">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Ready to Optimize Your Operations?
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Tell us about your industry and operational requirements. Our team will recommend the most suitable ARYVON equipment for your specific facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-colors group"
              >
                Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
