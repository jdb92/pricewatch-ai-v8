import React from 'react';
import { products } from '../data/products';
import type { Category } from '../types';
import DealCard from '../components/product/DealCard';

const categories: Category[] = ['Laptops', 'Smartphones', 'TVs', 'Audio', 'Gaming', 'Fotografie'];

const DealsPage: React.FC = () => {
  // Sort all products by AI score (highest = best deal recommendation)
  const sortedProducts = [...products].sort((a, b) => b.aiAdvice.score - a.aiAdvice.score);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>🔥 Beste Deals</h1>
        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          Gesorteerd op AI-aanbeveling en besparing
        </p>

        {categories.map(category => {
          const categoryProducts = sortedProducts.filter(p => p.category === category);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map(product => (
                  <DealCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsPage;
