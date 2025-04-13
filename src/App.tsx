import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CustomerServicePage from './pages/CustomerServicePage';
import Navigation from './components/Navigation';
import { ProductProvider } from './components/Provider.tsx';

import './index.css';

// Lazy import 적용
const PosHome = lazy(() => import('./pages/Home'));
const Upload = lazy(() => import('./pages/Upload'));

export function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductProvider> {/* ProductProvider를 Routes 외부로 이동 */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/customer" element={<CustomerServicePage />} />
              <Route path="/pos" element={<PosHome />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </ProductProvider>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;