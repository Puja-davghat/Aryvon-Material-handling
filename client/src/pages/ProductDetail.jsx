import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Phone } from 'lucide-react';
import IndustrialShapes from '../components/IndustrialShapes';
import { getProductBySlug, getCategoryBySlug, products as allProducts } from '../data/products';
import DedicatedProductPage from './DedicatedProductPage';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams();

  // If the slug matches a main product category, show the dedicated category page
  const categoryMatch = getCategoryBySlug(slug);
  if (categoryMatch && ['vrc', 'scissor-lift', 'eot-crane', 'conveyor', 'vertical-reciprocating-conveyor'].includes(slug)) {
    return <DedicatedProductPage forcedSlug={categoryMatch.slug} />;
  }

  const product = getProductBySlug(slug);

  if (!product || !product.is_active) {
    return <NotFound />;
  }

  const category = getCategoryBySlug(product.category_slug || product.category_name);
  const specifications = Object.entries(product.specifications ?? {});
  const productVariations = allProducts.filter(
    (variation) => variation.is_active && variation.category_id === product.category_id
  );

  return (
    <div className="space-y-0 py-10 sm:py-16 bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-brand-orange">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-brand-orange">Products</Link>
          {category && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link to={category.path} className="hover:text-brand-orange font-semibold">
                {category.fullName}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-bold text-brand-navy">{product.name}</span>
        </nav>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          {/* Header Banner */}
          <div className="relative overflow-hidden border-b-4 border-brand-orange bg-brand-deep px-6 py-8 text-white sm:px-10 sm:py-10">
            <IndustrialShapes />
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-white/95 px-2.5 py-1 rounded shadow inline-flex items-center">
                  <img
                    src="/assets/logo/aryvon-logo.png"
                    alt="ARYVON"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-paleOrange">
                  {product.category_name}
                </span>
              </div>
              <h1 className="text-3xl font-black leading-tight font-heading sm:text-5xl">{product.name}</h1>
              <p className="text-base font-semibold text-brand-paleOrange">&ldquo;{product.tagline}&rdquo;</p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{product.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                  src={product.image_url}
                  alt={`${product.name} — ARYVON Material Handling`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    if (product.fallback_image && !event.currentTarget.dataset.triedFallback) {
                      event.currentTarget.dataset.triedFallback = 'true';
                      event.currentTarget.src = product.fallback_image;
                    }
                  }}
                />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-orange-200 bg-orange-50/80 p-4">
                <div>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Custom Built To Specifications</p>
                  <p className="text-sm font-semibold text-brand-orange">Engineered to payload &amp; layout requirements</p>
                </div>
                <Link
                  to={`/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}`}
                  className="px-4 py-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Get Exact Quote
                </Link>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-relaxed text-emerald-900">
                  Heavy-duty industrial standard build, configured specifically for your facility load requirements and operating conditions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-3">
                  <ShieldCheck className="h-5 w-5 text-brand-orange" />
                  <h2 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                    Technical Specifications
                  </h2>
                </div>
                {specifications.length > 0 ? (
                  <dl className="divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200">
                    {specifications.map(([label, value], index) => (
                      <div
                        key={label}
                        className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 px-4 py-3 text-sm ${
                          index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                        }`}
                      >
                        <dt className="font-semibold text-slate-700">{label}</dt>
                        <dd className="text-slate-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    Contact our team for product specifications.
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-brand-iceBlue bg-brand-lightBlue p-5 space-y-3">
                <h2 className="text-lg font-bold text-brand-navy">Need this equipment for your facility?</h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Tell us about your application and our technical engineering team will assist with load calculations and a competitive quotation.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={`/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orangeHover shadow-md"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:8329358214"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-navy px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4 text-brand-orange" /> Call 83293 58214
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Variations in same category */}
        {productVariations.length > 1 && (
          <section className="mt-10" aria-labelledby="product-variations-heading">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Explore Options
                </span>
                <h2 id="product-variations-heading" className="mt-1 text-2xl font-black text-brand-navy font-heading">
                  Other {product.category_name} Types
                </h2>
              </div>
              {category && (
                <Link
                  to={category.path}
                  className="text-xs font-bold text-brand-orange hover:text-orange-700 uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Open Dedicated {category.name} Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productVariations.map((variation) => {
                const isCurrentProduct = variation.slug === product.slug;

                return (
                  <Link
                    key={variation.id}
                    to={`/products/${variation.slug}`}
                    aria-current={isCurrentProduct ? 'page' : undefined}
                    className={`group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                      isCurrentProduct
                        ? 'border-brand-orange ring-1 ring-brand-orange/30'
                        : 'border-slate-200 hover:border-brand-orange/50'
                    }`}
                  >
                    <div className="aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={variation.image_url}
                        alt={`${variation.name} — ARYVON Material Handling`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(event) => {
                          if (variation.fallback_image && !event.currentTarget.dataset.triedFallback) {
                            event.currentTarget.dataset.triedFallback = 'true';
                            event.currentTarget.src = variation.fallback_image;
                          }
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <h3 className="font-bold text-brand-navy group-hover:text-brand-orange">
                        {variation.name}
                      </h3>
                      {isCurrentProduct ? (
                        <span className="shrink-0 rounded-full bg-brand-lightBlue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                          Current
                        </span>
                      ) : (
                        <ArrowRight className="h-4 w-4 shrink-0 text-brand-orange transition-transform group-hover:translate-x-1" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="mt-8 flex items-center gap-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange">
            <ArrowLeft className="h-4 w-4" /> Back to All Products
          </Link>
          {category && (
            <Link to={category.path} className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-orange-700">
              Go to Dedicated {category.name} Page <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
