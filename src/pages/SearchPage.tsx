import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { stores } from '../data/stores';
import type { Category } from '../types';
import ProductCard from '../components/product/ProductCard';

const categories: Category[] = ['Laptops', 'Smartphones', 'TVs', 'Audio', 'Gaming', 'Fotografie'];

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('price-asc');
  const [searchText, setSearchText] = useState(query);

  const filteredProducts = products.filter(product => {
    const matchesQuery = !searchText || 
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesStore = selectedStores.length === 0 || 
      product.prices.some(p => selectedStores.includes(p.storeId));
    const lowestPrice = Math.min(...product.prices.map(p => p.price));
    const matchesPrice = 
      (!minPrice || lowestPrice >= parseFloat(minPrice)) &&
      (!maxPrice || lowestPrice <= parseFloat(maxPrice));
    return matchesQuery && matchesCategory && matchesStore && matchesPrice;
  }).sort((a, b) => {
    const aMin = Math.min(...a.prices.map(p => p.price));
    const bMin = Math.min(...b.prices.map(p => p.price));
    switch (sort) {
      case 'price-asc': return aMin - bMin;
      case 'price-desc': return bMin - aMin;
      case 'ai-score': return b.aiAdvice.score - a.aiAdvice.score;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Zoek naar producten..."
            className="w-full px-6 py-4 rounded-full text-lg outline-none shadow-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setSearchParams({ q: searchText });
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-6">Filters</h3>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Categorie</h4>
              {categories.map(cat => (
                <label key={cat} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={(e) => {
                      setSelectedCategories(prev =>
                        e.target.checked ? [...prev, cat] : prev.filter(c => c !== cat)
                      );
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Winkel</h4>
              {stores.map(store => (
                <label key={store.id} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStores.includes(store.id)}
                    onChange={(e) => {
                      setSelectedStores(prev =>
                        e.target.checked ? [...prev, store.id] : prev.filter(s => s !== store.id)
                      );
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{store.logo} {store.name}</span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Prijs</h4>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded text-sm" />
                <span className="self-center">—</span>
                <input type="number" placeholder="Max" value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded text-sm" />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Sorteren</h4>
              <select value={sort} onChange={(e) => setSort(e.target.value)}
                className="w-full px-3 py-2 border rounded text-sm">
                <option value="price-asc">Prijs laag → hoog</option>
                <option value="price-desc">Prijs hoog → laag</option>
                <option value="ai-score">AI score</option>
                <option value="name">Naam</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 'en' : ''} gevonden
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
