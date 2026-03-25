import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../types/index';
import AiBadge from './AiBadge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculate lowest price
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const lowestStore = product.prices.find(p => p.price === lowestPrice)?.storeId || '';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
    >
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-lg text-[var(--color-primary)]">€{lowestPrice}</span>
            <span className="text-sm text-gray-500">{lowestStore}</span>
          </div>
          
          <AiBadge score={product.aiAdvice.score} verdict={product.aiAdvice.verdict} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
