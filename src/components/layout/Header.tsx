import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('q') as string;
    if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-[var(--color-primary)] text-white py-1 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span>🏷️</span>
            <span className="font-bold text-lg">PriceWatch AI</span>
          </Link>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <input
              type="text"
              name="q"
              placeholder="Zoek naar product..."
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            />
            <button
              type="submit"
              className="bg-[var(--color-secondary)] text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
            >
              🔍
            </button>
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-[var(--color-secondary)] transition-colors">Home</Link>
            <Link to="/search" className="hover:text-[var(--color-secondary)] transition-colors">Zoeken</Link>
            <Link to="/deals" className="hover:text-[var(--color-secondary)] transition-colors">Deals</Link>
            <Link to="/compare" className="hover:text-[var(--color-secondary)] transition-colors">Vergelijk</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="text"
                name="q"
                placeholder="Zoek naar product..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
            </form>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-[var(--color-secondary)] transition-colors">Home</Link>
              <Link to="/search" className="py-2 hover:text-[var(--color-secondary)] transition-colors">Zoeken</Link>
              <Link to="/deals" className="py-2 hover:text-[var(--color-secondary)] transition-colors">Deals</Link>
              <Link to="/compare" className="py-2 hover:text-[var(--color-secondary)] transition-colors">Vergelijk</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
