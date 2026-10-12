import React, { useState, useEffect } from 'react';
import { Search, Filter, AlertCircle, RefreshCw, PackageX } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { fetchProducts, fetchCategories } from '../services/api';
import Button from './Button';

export default function ProductGrid({ initialCategory = 'all', limit = null }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Load categories
  useEffect(() => {
    fetchCategories()
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Load products whenever category or search changes
  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts({
        category: selectedCategory === 'all' ? '' : selectedCategory,
        search: searchTerm
      });
      setProducts(limit ? data.slice(0, limit) : data);
    } catch (err) {
      setError('Unable to load products from server. Please verify network connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts();
    }, 250);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by model, type, or capacity..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Product count */}
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider self-start md:self-center">
            {loading ? 'Searching equipment...' : `Showing ${products.length} Material Handling Solution${products.length === 1 ? '' : 's'}`}
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(String(cat.id))}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === String(cat.id)
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-white rounded-xl border border-slate-200 p-4 space-y-4 animate-pulse">
              <div className="bg-slate-200 aspect-[16/10] rounded-lg" />
              <div className="h-5 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="h-8 bg-slate-200 rounded" />
                <div className="h-8 bg-slate-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center space-y-4 max-w-lg mx-auto">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h3 className="text-lg font-bold text-red-800">Connection Error</h3>
          <p className="text-sm text-red-600">{error}</p>
          <Button onClick={loadProducts} variant="primary" size="sm" icon={RefreshCw}>
            Retry Loading
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && products.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <PackageX className="w-16 h-16 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy font-heading">No Products Found</h3>
          <p className="text-sm text-slate-600">
            No material handling equipment matched your current search criteria or category filter.
          </p>
          <Button
            onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            variant="outline"
            size="sm"
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(item) => setActiveModalProduct(item)}
            />
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  );
}
