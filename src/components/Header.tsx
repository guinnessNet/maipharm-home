import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold ezpharm-text-blue">
            이지팜
          </div>
        </Link>
        
        <div className="flex items-center space-x-3">
          <button className="p-1 rounded-full">
            <Search size={20} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
              홈
            </Link>
            <Link to="/about" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
              회사소개
            </Link>
            <Link to="/products" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
              제품소개
            </Link>
            <Link to="/customer" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>
              고객센터
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
