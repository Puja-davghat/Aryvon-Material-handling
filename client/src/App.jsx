import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import DedicatedProductPage from './pages/DedicatedProductPage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="flex-grow animate-fade-in-smooth">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Main Products Catalogue Hub */}
          <Route path="/products" element={<Products />} />
          
          {/* 4 Dedicated Individual Product Pages */}
          <Route path="/products/vrc" element={<DedicatedProductPage forcedSlug="vrc" />} />
          <Route path="/products/scissor-lift" element={<DedicatedProductPage forcedSlug="scissor-lift" />} />
          <Route path="/products/eot-crane" element={<DedicatedProductPage forcedSlug="eot-crane" />} />
          <Route path="/products/conveyor" element={<DedicatedProductPage forcedSlug="conveyor" />} />

          {/* Subcategory / Individual Product Detail Route */}
          <Route path="/products/:slug" element={<ProductDetail />} />
          
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
