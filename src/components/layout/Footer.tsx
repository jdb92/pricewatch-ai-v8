import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-surface)] py-6 px-4 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mb-2">© 2026 PriceWatch AI</p>
        <p className="text-sm text-gray-500 mb-4">
          Prijzen zijn indicatief. PriceWatch AI is een demo-applicatie.
        </p>
        
        <div className="flex justify-center space-x-6 text-sm">
          <Link to="/" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <Link to="/search" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">Zoeken</Link>
          <Link to="/deals" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">Deals</Link>
          <Link to="/compare" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors">Vergelijk</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
