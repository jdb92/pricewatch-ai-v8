import React, { useState } from 'react';
import { products } from '../data/products';
import CompareTable from '../components/product/CompareTable';

const ComparePage: React.FC = () => {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  const handleProductSelect = (productId: string) => {
    if (selectedProductIds.includes(productId)) {
      setSelectedProductIds(selectedProductIds.filter(id => id !== productId));
    } else if (selectedProductIds.length < 4) {
      setSelectedProductIds([...selectedProductIds, productId]);
    }
  };

  const selectedProducts = products.filter(p => selectedProductIds.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Selecteer producten om te vergelijken</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map(product => (
            <div
              key={product.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedProductIds.includes(product.id)
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-gray-300 hover:border-[var(--color-primary)]'
              }`}
              onClick={() => handleProductSelect(product.id)}
            >
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="font-bold mt-2">€{product.prices.reduce((min, p) => Math.min(min, p.price), Infinity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Vergelijking ({selectedProducts.length} producten)</h2>
            <CompareTable products={selectedProducts} />
          </div>
        )}

        {selectedProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">Selecteer minimaal 2 producten om te vergelijken.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
