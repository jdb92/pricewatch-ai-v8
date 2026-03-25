import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../types/index';

interface DealCardProps {
  product: Product;
}

const DealCard: React.FC<DealCardProps> = ({ product }) => {
  // Calculate lowest price
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  
  // Calculate average price
  const avgPrice = product.prices.reduce((sum, p) => sum + p.price, 0) / product.prices.length;
  
  // Calculate savings percentage
  const savingsPercent = Math.round(((avgPrice - lowestPrice) / avgPrice) * 100);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
    >
      {/* Deal Badge */}
      <div className="absolute top-2 left-2">
        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-bold bg-red-500 text-white">
          🔥 Deal
        </span>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
          
          {/* Price Display */}
          <div className="flex items-center mb-3">
            <span className="text-gray-500 line-through mr-2">€{avgPrice.toFixed(0)}</span>
            <span className="text-2xl font-bold text-[var(--color-primary)]">€{lowestPrice}</span>
          </div>
          
          {/* Savings Badge */}
          {savingsPercent > 0 && (
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[var(--color-success)] text-white mb-3">
              {savingsPercent}% bespaard
            </span>
          )}
          
          {/* AI Advice */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-600">AI Score: {product.aiAdvice.score.toFixed(1)}/10</span>
            <span className="text-sm text-gray-500">{product.prices.length} winkels</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DealCard;
