import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import type { Category } from '../types';
import ProductCard from '../components/product/ProductCard';
import DealCard from '../components/product/DealCard';

const categories: Category[] = ['Laptops', 'Smartphones', 'TVs', 'Audio', 'Gaming', 'Fotografie'];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const topDeals = [...products]
    .sort((a, b) => b.aiAdvice.score - a.aiAdvice.score)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="text-white min-h-[50vh] flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Vind de beste prijs met AI</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 text-center">Vergelijk prijzen, krijg AI-koopadvies en bespaar geld</p>
        <div className="max-w-2xl w-full mx-auto">
          <input
            type="text"
            placeholder="Zoek naar producten..."
            className="w-full px-6 py-4 rounded-full text-black text-lg outline-none shadow-lg"
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/search?q=${encodeURIComponent(e.currentTarget.value)}`)}
          />
        </div>

        {/* Categories Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/search?category=${encodeURIComponent(category)}`)}
              className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Deals */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>🔥 Trending Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDeals.map((product) => (
            <DealCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>Alle Producten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
