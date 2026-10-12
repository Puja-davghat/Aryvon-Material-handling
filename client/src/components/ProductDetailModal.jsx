import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import Button from './Button';

export default function ProductDetailModal({ product, onClose }) {
  const navigate = useNavigate();

  if (!product) return null;

  const handleRequestQuote = () => {
    onClose();
    navigate(`/contact?productId=${product.id}&productName=${encodeURIComponent(product.name)}`);
  };

  const specs = typeof product.specifications === 'object' && product.specifications !== null
    ? product.specifications
    : {};

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-brand-navy px-6 py-4 flex items-center justify-between border-b-2 border-brand-orange text-white">
          <div className="flex items-center gap-2.5">
            <Tag className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-paleOrange">
              {product.category_name || 'Equipment Specification'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Main Visual & Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-lg overflow-hidden bg-slate-100 border border-slate-200 aspect-video md:aspect-square flex items-center justify-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/assets/images/hero/hero-warehouse.jpg';
                }}
              />
              <span className="absolute bottom-3 left-3 bg-brand-deep/90 text-brand-paleOrange text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                Verified MHE Specification
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-brand-navy font-heading leading-tight">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-md border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Heavy-Duty Industrial Build &bull; High Reliability</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          {Object.keys(specs).length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                Technical Specifications
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <tbody className="divide-y divide-slate-200">
                    {Object.entries(specs).map(([key, val], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                        <td className="px-4 py-2.5 font-semibold text-slate-700 w-2/5">
                          {key}
                        </td>
                        <td className="px-4 py-2.5 text-slate-900 font-medium">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="bg-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors order-2 sm:order-1"
          >
            &larr; Return to Catalogue
          </button>
          <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
            <Button
              onClick={handleRequestQuote}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              icon={ArrowRight}
              iconPosition="right"
            >
              Request a Quotation for this Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
