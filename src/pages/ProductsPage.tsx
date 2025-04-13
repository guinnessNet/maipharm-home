import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: '이지헬스 비타민C',
    category: '건강기능식품',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '이지헬스 프로바이오틱스',
    category: '건강기능식품',
    image: 'https://images.unsplash.com/photo-1626285861696-9f131406e305?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: '이지헬스 오메가3',
    category: '건강기능식품',
    image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    name: '이지헬스 종합비타민',
    category: '건강기능식품',
    image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    name: '이지케어 항생제',
    category: '전문의약품',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 6,
    name: '이지케어 소화제',
    category: '일반의약품',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55004?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 7,
    name: '이지케어 해열제',
    category: '일반의약품',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 8,
    name: '이지헬스 철분제',
    category: '건강기능식품',
    image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=500&auto=format&fit=crop'
  }
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilter, setShowFilter] = useState(false);
  
  const categories = ['all', '건강기능식품', '전문의약품', '일반의약품'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle 
        title="제품 소개" 
        subtitle="이지팜의 다양한 제품을 소개합니다"
      />
      
      <div className="mb-6">
        <button 
          className="md:hidden flex items-center bg-white border rounded-md px-4 py-2 mb-4"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={16} className="mr-2" />
          제품 카테고리
        </button>
        
        <div className={`md:block ${showFilter ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedCategory === category 
                    ? 'ezpharm-blue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? '전체' : category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          해당 카테고리에 제품이 없습니다.
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
