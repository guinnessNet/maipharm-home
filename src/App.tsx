import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Seo from './components/Seo';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CustomerServicePage from './pages/CustomerServicePage';
import ProductDetail from './pages/ProductDetail';
import NdsdPage from './pages/NdsdPage';
import { ProductProvider } from './components/Provider';
import './index.css';
export function App() {
  const {pathname,hash}=useLocation();
  useEffect(()=>{
    if(hash) requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo({top:0,behavior:'instant'});
  },[pathname,hash]);
  return <div className={`site-shell ${pathname==='/'?'intro-shell':''}`}><Seo/><Header/><main id="main-content"><ProductProvider><Routes><Route path="/" element={<HomePage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/products" element={<ProductsPage/>}/><Route path="/products/ndsd" element={<NdsdPage/>}/><Route path="/products/:id" element={<ProductDetail/>}/><Route path="/customer" element={<CustomerServicePage/>}/></Routes></ProductProvider></main>{pathname!=='/'&&<Footer/>}</div>;
}
export default App;
