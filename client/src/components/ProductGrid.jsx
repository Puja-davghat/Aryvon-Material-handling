import React, { useState, useMemo } from 'react';
import { Search, PackageX } from 'lucide-react';
import ProductCard from './ProductCard';
import { products as allProducts, categories as allCategories, getCategories, getProducts } from '../data/products';
import Button from './Button';

export default function ProductGrid({ initialCategory = 'all', limit = null }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamically compute category counts from frontend data
  const categoriesWithCounts = useMemo(() => {
    return getCategories();
  }, []);

  const totalCount = allProducts.filter(p => p.is_active).length;

  // Filter products synchronously and reliably
  const filteredProducts = useMemo(() => {
    const list = getProducts({
      category: selectedCategory,
      search: searchTerm,
      limit: limit
    });
    return list;
  }, [selectedCategory, searchTerm, limit]);

  const activeCategoryObj = allCategories.find(c => String(c.id) === String(selectedCategory));

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
              placeholder="Search equipment by model, capacity, or specs..."
              className="w-full pl-10 pr-16 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-brand-orange transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Accurate Product Count Indicator */}
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider self-start md:self-center flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>
              Showing {filteredProducts.length} of {totalCount} Solution{totalCount === 1 ? '' : 's'}
              {activeCategoryObj ? ` in ${activeCategoryObj.name}` : ''}
            </span>
          </div>
        </div>

        {/* Category Pills Navigation with live counts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>All Categories</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedCategory === 'all' ? 'bg-brand-orange text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {totalCount}
            </span>
          </button>

          {categoriesWithCounts.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(String(cat.id))}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === String(cat.id)
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === String(cat.id) ? 'bg-white text-brand-orange' : 'bg-slate-200 text-slate-700'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <PackageX className="w-16 h-16 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-brand-navy font-heading">No Products Found</h3>
          <p className="text-sm text-slate-600">
            No material handling equipment matched your current search &ldquo;{searchTerm}&rdquo; or selected category.
          </p>
          <Button
            onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            variant="outline"
            size="sm"
          >
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}
