import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Phone, CheckCircle2, ShieldCheck,
  Download, ChevronRight, Wrench, Zap, Layers, Sparkles,
  HelpCircle, ExternalLink, MessageCircle
} from 'lucide-react';
import IndustrialShapes from '../components/IndustrialShapes';
import AnimatedSection from '../components/AnimatedSection';
import { getCategoryBySlug, categories as allCategories } from '../data/products';
import NotFound from './NotFound';

export default function DedicatedProductPage({ forcedSlug }) {
  const params = useParams();
  const navigate = useNavigate();
  const slug = forcedSlug || params.categorySlug || params.slug;

  const category = getCategoryBySlug(slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!category) {
    return <NotFound />;
  }

  const galleryImages = category.images && category.images.length > 0
    ? category.images
    : [
        { url: category.image, title: category.fullName, caption: category.tagline },
        { url: category.fallback || category.image, title: `${category.fullName} Installation`, caption: 'Heavy-duty industrial deployment' },
        { url: category.image, title: `${category.fullName} Detail`, caption: 'Engineered for continuous operational demands' }
      ];

  const handleQuoteClick = (subModelName = null) => {
    const itemName = subModelName ? `${category.fullName} - ${subModelName}` : category.fullName;
    navigate(`/contact?productId=${category.id}&productName=${encodeURIComponent(itemName)}`);
  };

  const otherCategories = allCategories.filter(c => c.id !== category.id);

  return (
    <div className="space-y-0 py-8 sm:py-14 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-brand-orange transition-colors">Products</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-bold text-brand-navy">{category.fullName}</span>
        </nav>

        {/* Hero Section Banner */}
        <section className="bg-brand-deep rounded-2xl overflow-hidden border-b-4 border-brand-orange shadow-2xl relative text-white mb-10">
          <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />
          <IndustrialShapes />
          <div className="relative z-10 p-6 sm:p-12 lg:p-14 max-w-4xl space-y-5">
            {/* Top brand badge featuring actual logo */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white/95 px-3 py-1 rounded-md shadow inline-flex items-center">
                <img
                  src="/assets/logo/aryvon-logo.png"
                  alt="ARYVON"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/90 border border-brand-orange/40 text-brand-paleOrange text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                Dedicated Product Page
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading leading-tight tracking-tight text-white">
              {category.fullName}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-brand-paleOrange">
              &ldquo;{category.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {category.description}
            </p>

            {/* Quick action bar in hero */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => handleQuoteClick()}
                className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orangeHover active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-brand-orange/30 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/918329358214?text=Hello%20ARYVON,%20I%20am%20interested%20in%20learning%20more%20about%20your%20Vertical%20Reciprocating%20Conveyors%20and%20Scissor%20Lifts."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href="tel:8329358214"
                className="px-5 py-3.5 bg-brand-navy/80 hover:bg-brand-navy border border-white/20 hover:border-brand-orange text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>83293 58214</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2-Column Main Showcase: Left Image Gallery (At Least 3 Images) & Right Quick Specs & Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">

          {/* Left Column: Multi-Image Interactive Gallery (68%) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md">
              {/* Main Large Display Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 shadow-inner group">
                <img
                  src={galleryImages[activeImageIndex].url}
                  alt={`${galleryImages[activeImageIndex].title} — ARYVON Material Handling`}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = category.fallback || '/assets/images/hero/hero-vrc-warehouse.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <span className="inline-block bg-brand-orange px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-1">
                    Design Variation {activeImageIndex + 1} of {galleryImages.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading drop-shadow">
                    {galleryImages[activeImageIndex].title}
                  </h3>
                  <p className="text-xs text-slate-200 drop-shadow line-clamp-2">
                    {galleryImages[activeImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnails Row (At Least 3 Client-Approved Images) */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 aspect-[16/10] bg-slate-100 ${
                      activeImageIndex === idx
                        ? 'border-brand-orange ring-2 ring-brand-orange/30 shadow-md scale-[1.02]'
                        : 'border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = category.fallback || '/assets/images/hero/hero-vrc-warehouse.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent" />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      Type {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Engineering Features Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-brand-orange" />
                <h2 className="text-lg font-extrabold text-brand-navy font-heading uppercase tracking-wide">
                  Key Engineering &amp; Safety Features
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {category.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Pricing Guide, Fast Quote & Core Specs (32%) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Custom Engineering & Quotation Card */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-deep text-white p-6 sm:p-8 rounded-2xl shadow-xl border-t-4 border-brand-orange relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Wrench className="w-28 h-28" />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-paleOrange block">
                  Custom Engineering &amp; Quotation
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every ARYVON {category.fullName} is custom manufactured to your plant&apos;s specific payload capacity, lift height, and floor configuration. Standard lead time: <strong className="text-white">{category.leadTime}</strong>.
                </p>

                <div className="pt-2 border-t border-slate-700/80 space-y-2">
                  <p className="text-xs font-bold text-brand-paleOrange uppercase tracking-wide">Quotation Includes:</p>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Free Technical Site Evaluation &amp; Layout Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      Complete Manufacturing, Inspection &amp; Factory Load Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      On-site Erection, Commissioning &amp; Operator Training
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleQuoteClick()}
                  className="w-full mt-4 py-3.5 bg-brand-orange hover:bg-brand-orangeHover active:scale-95 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-brand-orange/30 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 className="text-base font-extrabold uppercase tracking-wide text-brand-navy flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-orange" />
                  Technical Specifications
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  IS Compliant
                </span>
              </div>

              <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
                {Object.entries(category.specifications).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-3 py-2.5 px-3 rounded ${
                      idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                    }`}
                  >
                    <dt className="font-bold text-slate-700">{key}</dt>
                    <dd className="text-slate-900 leading-snug">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-brand-lightBlue p-5 rounded-xl border border-brand-iceBlue space-y-3">
              <h3 className="text-sm font-bold text-brand-navy">Have specific dimensions or shaft requirements?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with an ARYVON application engineer to review your site drawings and calculate exact structural requirements.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="tel:8329358214"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy hover:bg-brand-blueAccent text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  Call 83293 58214
                </a>
                <button
                  onClick={() => handleQuoteClick()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-orange-700 uppercase tracking-wider"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Product Variations / Sub-Models Breakdown (Dedicated Cards with Images & Buttons) */}
        {category.subcategories && category.subcategories.length > 0 && (
          <section className="mb-14">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Product Variations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy font-heading">
                Available {category.name} Types &amp; Configurations
              </h2>
              <p className="text-sm text-slate-600">
                Choose the model configuration best suited to your load handling and floor layout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
              {category.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-orange/50 animate-3d-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={sub.image}
                        alt={`${sub.name} — ARYVON`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.src = category.fallback || '/assets/images/hero/hero-vrc-warehouse.jpg';
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                        {category.name}
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-extrabold text-brand-navy font-heading">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {sub.description}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-xs">
                        {sub.capacity && (
                          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold">
                            Capacity: {sub.capacity}
                          </span>
                        )}
                        {sub.height && (
                          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold">
                            Travel/Height: {sub.height}
                          </span>
                        )}
                        {sub.span && (
                          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold">
                            Span: {sub.span}
                          </span>
                        )}
                        {sub.speed && (
                          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold">
                            Speed: {sub.speed}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleQuoteClick(sub.name)}
                      className="px-4 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Inquire About {sub.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="tel:8329358214"
                      className="text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-orange" />
                      83293 58214
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Suitable Industrial Applications */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm mb-14">
          <div className="max-w-3xl mb-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Operational Suitability
            </span>
            <h2 className="text-2xl font-black text-brand-navy font-heading">
              Target Industries &amp; Facility Deployments
            </h2>
            <p className="text-sm text-slate-600">
              Where the ARYVON {category.fullName} delivers proven productivity gains and return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.applications.map((app, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-800 leading-relaxed">{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Other 3 Products Navigation */}
        <section className="bg-slate-100/80 p-6 sm:p-8 rounded-2xl border border-slate-200 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Complete Catalogue
              </span>
              <h2 className="text-xl font-bold text-brand-navy font-heading">
                Explore Other ARYVON Product Lines
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-brand-orange hover:text-orange-700 uppercase tracking-wider flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View All 4 Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCategories.map((other) => (
              <Link
                key={other.id}
                to={other.path}
                className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-orange hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = other.fallback || '/assets/images/hero/hero-vrc-warehouse.jpg';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors truncate">
                    {other.fullName}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {other.tagline}
                  </p>
                  <span className="text-[11px] font-bold text-brand-orange inline-flex items-center gap-1 mt-1">
                    Open Dedicated Page →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
