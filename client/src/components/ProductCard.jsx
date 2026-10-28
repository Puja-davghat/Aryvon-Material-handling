import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, FileText, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ProductCard({ product, index = 0 }) {
  const navigate = useNavigate();

  const handleInquire = () => {
    navigate(`/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}`);
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.slug}`);
  };

  return (
    <div
      style={{ animationDelay: `${index * 0.3}s` }}
      className="rv-card-stagger-item rv-card-hover group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image Box */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <Link to={`/products/${product.slug}`} className="absolute inset-0 cursor-pointer">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out"
            onError={(e) => {
              if (product.fallback_image && !e.target.dataset.triedFallback) {
                e.target.dataset.triedFallback = 'true';
                e.target.src = product.fallback_image;
              } else {
                e.target.src = '/assets/images/hero/hero-vrc-warehouse.jpg';
              }
            }}
          />
          {/* Category Pill Badge with Pulse Beacon */}
          <div className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-sm border border-white/20 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
            <span>{product.category_name || 'Equipment'}</span>
          </div>

          {/* Quick View Overlay Icon */}
          <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/90 text-brand-navy font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Eye className="w-3.5 h-3.5 text-brand-orange" />
              View Details
            </span>
          </div>
        </Link>

        {product.badge && (
          <div className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            {product.badge}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors font-heading line-clamp-1" title={product.name}>
            <Link to={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Button
            onClick={handleViewDetails}
            variant="navy"
            size="sm"
            className="w-full text-[11px] px-2.5 py-2 tracking-normal"
            icon={Eye}
          >
            View Details
          </Button>

          <Button
            onClick={handleInquire}
            variant="primary"
            size="sm"
            className="w-full text-[11px] px-2.5 py-2 tracking-normal"
            icon={FileText}
          >
            Inquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}
