import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronRight, Eye, ShieldCheck, Layers, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';
import { categories } from '../data/products';

// Individual product card (subcategory or main)
function ProductCard({ item, categoryName, categorySlug }) {
  const detailLink = `/products/${item.slug}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between">
      {/* Image */}
      <div>
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
          <Link
            to={detailLink}
            aria-label={`View details for ${item.name}`}
            className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <span className="bg-white/90 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              <Eye className="w-3.5 h-3.5 text-brand-orange" /> View Details
            </span>
          </Link>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {item.description}
          </p>
          {(item.capacity || item.height || item.span || item.speed) && (
            <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-600">
              {item.capacity && <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">Capacity: {item.capacity}</span>}
              {item.height && <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">Height: {item.height}</span>}
              {item.span && <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">Span: {item.span}</span>}
              {item.speed && <span className="bg-slate-100 px-2 py-0.5 rounded font-medium">Speed: {item.speed}</span>}
            </div>
          )}
        </div>
      </div>

      <div className="p-5 pt-0 border-t border-slate-100 mt-3 flex flex-wrap items-center justify-between gap-3">
        <Link
          to={detailLink}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-orange uppercase tracking-wider transition-colors group/btn"
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 text-brand-orange group-hover/btn:translate-x-1 transition-transform" />
        </Link>
        <Link
          to={`/contact?productName=${encodeURIComponent(item.name)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-orange-700 uppercase tracking-wider transition-colors"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

// Category section showcasing one of the 4 dedicated products
function CategorySection({ category }) {
  return (
    <section id={category.slug} className="scroll-mt-32">
      {/* Category header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden mb-8">
        <div className="bg-brand-deep text-white p-6 sm:p-8 relative overflow-hidden border-b-4 border-brand-orange">
          <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
          <IndustrialShapes />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3 flex-1 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy rounded-full text-brand-paleOrange text-xs font-bold uppercase tracking-widest border border-brand-orange/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                  Product Category #{category.id}
                </span>
                <span className="text-xs text-slate-300 font-semibold">
                  {category.priceRange}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">{category.fullName}</h2>
              <p className="text-brand-paleOrange text-sm font-semibold italic">&ldquo;{category.tagline}&rdquo;</p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{category.description}</p>
            </div>

            {/* Direct Link to Dedicated Product Page */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <Link
                to={category.path}
                className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orangeHover active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-brand-orange/30 transition-all duration-200 inline-flex items-center gap-2 group"
              >
                <span>Open Dedicated {category.name} Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                Includes 3+ designs, specs &amp; pricing
              </span>
            </div>
          </div>
        </div>

        {/* Subcategory grid or single item view */}
        <div className="p-6 sm:p-8 bg-slate-50/50">
          {category.subcategories ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subcategories.map(sub => (
                <ProductCard
                  key={sub.id}
                  item={sub}
                  categoryName={category.name}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
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
                  <div className="absolute top-3 left-3 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {category.name}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-brand-navy font-heading">{category.fullName}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{category.description}</p>
                  <div className="pt-2">
                    <Link
                      to={category.path}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-navy hover:bg-brand-blueAccent text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors group/btn"
                    >
                      <span>Open Dedicated Page</span>
                      <ChevronRight className="w-4 h-4 text-brand-orange group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-brand-lightBlue to-white rounded-xl border border-brand-iceBlue space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    Custom Engineered System
                  </span>
                  <h4 className="text-xl font-black text-brand-navy font-heading">
                    Engineered to Your Shaft &amp; Floor Levels
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ARYVON {category.fullName} systems are customized to your factory floor dimensions, load requirements (up to 5,000 kg), and travel height (up to 18m).
                  </p>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Starting price guide: <strong className="text-brand-navy">{category.priceRange}</strong>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Lead time: <strong className="text-brand-navy">{category.leadTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to={category.path}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors group"
                  >
                    <span>View Dedicated Page &amp; Gallery</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    <span>Request Quote</span>
                  </Link>
                </div>
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
    <div className="space-y-0 py-10 sm:py-16 bg-slate-50">
      {/* Page Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep rounded-2xl p-8 sm:p-14 text-white relative overflow-hidden border-b-4 border-brand-orange shadow-xl">
          <IndustrialShapes />
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-2.5 py-1 rounded shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
                Product Catalogue
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Four Core Product Lines
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Browse ARYVON's four precision-engineered industrial material handling categories. Each product line features its own dedicated page with multiple designs, detailed specifications, pricing guidance, and customized quotations.
            </p>

            {/* Direct links to all 4 dedicated pages */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className="px-3.5 py-2 text-xs font-bold bg-brand-navy/90 hover:bg-brand-orange text-white rounded-lg border border-white/20 hover:border-brand-orange transition-all uppercase tracking-wider inline-flex items-center gap-1.5 shadow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>{cat.fullName}</span>
                  <ArrowRight className="w-3 h-3 opacity-70" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Products Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
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
                Need a Custom Facility Engineering Proposal?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Contact our technical engineering team with your facility drawings, load requirements, and floor elevations — we provide turnkey proposal and quotation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 whitespace-nowrap flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors group shadow-lg shadow-brand-orange/30"
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
