import React from 'react';
import type { Product } from '../../types/index';

interface CompareTableProps {
  products: Product[];
}

const CompareTable: React.FC<CompareTableProps> = ({ products }) => {
  // Limit to max 4 products
  const limitedProducts = products.slice(0, 4);

  // Extract all unique specs keys across all products
  const allSpecsKeys = new Set<string>();
  limitedProducts.forEach(product => {
    Object.keys(product.specs).forEach(key => allSpecsKeys.add(key));
  });
  
  const sortedSpecsKeys = Array.from(allSpecsKeys).sort();

  // Calculate lowest price for each product
  const getLowestPrice = (product: Product) => {
    return Math.min(...product.prices.map(p => p.price));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-[var(--color-primary)] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-right">Laagste Prijs</th>
            <th className="py-3 px-4 text-right">AI Score</th>
            {sortedSpecsKeys.map(key => (
              <th key={key} className="py-3 px-4 text-center">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {limitedProducts.map(product => (
            <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">{product.name}</td>
              <td className="py-3 px-4 text-right font-bold text-[var(--color-primary)]">€{getLowestPrice(product)}</td>
              <td className="py-3 px-4 text-right">
                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-[var(--color-success)] text-white">
                  {product.aiAdvice.score.toFixed(1)}
                </span>
              </td>
              {sortedSpecsKeys.map(key => (
                <td key={key} className="py-3 px-4 text-center">
                  {product.specs[key] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
