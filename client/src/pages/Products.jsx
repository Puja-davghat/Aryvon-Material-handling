import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, ChevronRight, Eye } from 'lucide-react';
import Button from '../components/Button';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';
import { categories } from '../data/products';

// Individual product card (subcategory or main)
function ProductCard({ item, categoryName }) {
  const navigate = useNavigate();
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={item.image || item.image_url}
          alt={`${item.name} — ARYVON`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            if (!e.target.dataset.tried) {
              e.target.dataset.tried = 'true';
              e.target.src = '/assets/images/hero/hero-vrc-warehouse.jpg';
            }
          }}
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-navy/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          {categoryName}
        </div>
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-brand-orange" /> View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors group/btn"
        >
          Request a Quote <ChevronRight className="w-4 h-4 text-brand-orange group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// Category section with subcategories
function CategorySection({ category }) {
  return (
    <section id={category.slug} className="scroll-mt-32">
      {/* Category header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="bg-brand-deep text-white p-6 sm:p-8 relative overflow-hidden border-b-4 border-brand-orange">
          <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
          <IndustrialShapes />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy rounded-full text-brand-paleOrange text-xs font-bold uppercase tracking-widest border border-brand-orange/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                Product Category
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading">{category.fullName}</h2>
              <p className="text-brand-paleOrange text-sm font-semibold italic">&ldquo;{category.tagline}&rdquo;</p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Subcategory grid or main product */}
        <div className="p-6 sm:p-8">
          {category.subcategories ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subcategories.map(sub => (
                <ProductCard key={sub.id} item={sub} categoryName={category.name} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.fullName} — ARYVON Material Handling`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      if (category.fallback && !e.target.dataset.tried) {
                        e.target.dataset.tried = 'true';
                        e.target.src = category.fallback;
                      }
                    }}
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-brand-navy font-heading">{category.fullName}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{category.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors group/btn"
                  >
                    Request a Quote <ChevronRight className="w-4 h-4 text-brand-orange group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 bg-brand-lightBlue rounded-xl border border-brand-iceBlue space-y-4">
                <h4 className="text-base font-bold text-brand-navy">Interested in this solution?</h4>
                <p className="text-sm text-slate-600">Contact our team for a customized quotation and technical proposal tailored to your facility requirements.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-brand-orange text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-brand-orangeHover transition-colors w-fit group">
                  Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="space-y-0 py-10 sm:py-16">
      {/* Page Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
              Product Catalogue
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Material Handling Equipment &amp; Systems
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Browse ARYVON's complete product range — four precision-selected categories of industrial material handling equipment, each with approved subcategory offerings and a direct enquiry path.
            </p>

            {/* Category quick nav */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map(cat => (
                <a
                  key={cat.id}
                  href={`#${cat.slug}`}
                  className="px-3 py-1.5 text-xs font-bold bg-brand-navy/80 hover:bg-brand-orange text-white rounded-lg border border-white/10 hover:border-brand-orange transition-all uppercase tracking-wider"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        {categories.map(cat => (
          <AnimatedSection key={cat.id} animation="fade-up">
            <CategorySection category={cat} />
          </AnimatedSection>
        ))}
      </div>

      {/* Bottom CTA */}
      <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border-t-4 border-brand-orange">
          <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
          <IndustrialShapes />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Need a Custom Configuration?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Contact our technical team with your facility specifications, load requirements, and operational brief — we'll provide a customized solution proposal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 whitespace-nowrap flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group"
              >
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8329358214"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                83293 58214
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
