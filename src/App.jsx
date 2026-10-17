import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductModal from './components/ProductModal';
import LightboxModal from './components/LightboxModal';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function MainLayout() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div id="ld" className={!loading ? 'off' : ''}>
        <svg width="90" viewBox="0 0 100 130">
          <path
            d="M50 8a34 34 0 0 0-20 61v14h40V69A34 34 0 0 0 50 8z"
            fill="#FFC20E"
          >
            <animate
              attributeName="opacity"
              values=".2;1;.2"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>
          <rect x="32" y="90" width="36" height="8" rx="4" fill="#fff" />
          <rect x="38" y="104" width="24" height="8" rx="4" fill="#fff" />
        </svg>
      </div>

      <Header />

      <div id="app-root">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home onSelectProduct={setSelectedProduct} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products onSelectProduct={setSelectedProduct} />} />
          <Route path="/gallery" element={<Gallery onSelectGalleryItem={setSelectedGalleryItem} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onSelectProduct={setSelectedProduct} />} />
        </Routes>
      </div>

      <Footer />
      <WhatsAppButton />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
