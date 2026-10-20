import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import IndustrialShapes from '../components/IndustrialShapes';
import { getProductBySlug, products as allProducts } from '../data/products';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product || !product.is_active) {
    return <NotFound />;
  }

  const specifications = Object.entries(product.specifications ?? {});
  const productVariations = allProducts.filter(
    (variation) => variation.is_active && variation.category_id === product.category_id
  );

  return (
    <div className="space-y-0 py-10 sm:py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-brand-orange">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-brand-orange">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-brand-navy">{product.name}</span>
        </nav>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="relative overflow-hidden border-b-4 border-brand-orange bg-brand-deep px-6 py-8 text-white sm:px-10 sm:py-10">
            <IndustrialShapes />
            <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-3">
              <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-paleOrange">
                {product.category_name}
              </span>
              <h1 className="text-3xl font-black leading-tight font-heading sm:text-5xl">{product.name}</h1>
              <p className="text-base font-semibold text-brand-paleOrange">{product.tagline}</p>
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
              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-relaxed text-emerald-900">
                  Configured for dependable performance in demanding industrial environments.
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

              <div className="rounded-xl border border-brand-iceBlue bg-brand-lightBlue p-5">
                <h2 className="text-lg font-bold text-brand-navy">Need this equipment for your facility?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Tell us about your application and our team can help with configuration and a quotation.
                </p>
                <Link
                  to={`/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orangeHover"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {productVariations.length > 1 && (
          <section className="mt-10" aria-labelledby="product-variations-heading">
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Explore Options
              </span>
              <h2 id="product-variations-heading" className="mt-1 text-2xl font-black text-brand-navy font-heading">
                {product.category_name} Types
              </h2>
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

        <div className="mt-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>
      </section>
    </div>
  );
}
