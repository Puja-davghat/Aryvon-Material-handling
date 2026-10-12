import React from 'react';
import { Package, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import Button from '../components/Button';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';

export default function Products() {
  return (
    <div className="space-y-12 sm:space-y-16 py-10 sm:py-16">
      {/* Catalogue Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy rounded-full text-brand-paleOrange text-xs font-bold uppercase tracking-wider border border-brand-orange/30">
              <Package className="w-3.5 h-3.5 text-brand-orange" />
              Online Equipment Catalogue
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Material Handling Equipment & Systems
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our industrial product line designed for rigorous material movement across manufacturing plants, warehouse racking, and logistics hubs. Request custom specifications and formal quotations directly from any product card.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Product Grid & Search Section */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid />
      </AnimatedSection>

      {/* Equipment Assurance Callout Banner */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h3 className="text-xl font-bold text-brand-navy font-heading">
              Need a Custom Capacity, Span, or Non-Standard Dimension?
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              We engineer custom overhead cranes, extended pallet racking bays, and automated conveyors tailored to specific shop-floor dimensions. Contact our technical desk with your drawings or specifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 whitespace-nowrap relative z-10">
            <Button to="/contact" variant="primary" size="md">
              Submit Custom Specs
            </Button>
            <a
              href="tel:8329358214"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:text-brand-orange hover:border-brand-orange text-xs font-bold uppercase tracking-wider transition-colors"
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
