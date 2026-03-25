import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const DealsPage = lazy(() => import('./pages/DealsPage'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center h-full text-xl">Laden...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/deals" element={<DealsPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
