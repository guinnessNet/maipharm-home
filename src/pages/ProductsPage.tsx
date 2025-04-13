import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: 'AI 약국 관리 시스템',
    category: '핵심 솔루션',
    description: '인공지능으로 약국 운영 전반을 최적화하는 올인원 플랫폼',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '스마트 재고 관리',
    category: '자동화 솔루션',
    description: '약품 재고를 실시간으로 모니터링하고 자동 발주하는 시스템',
    image: 'https://images.unsplash.com/photo-1642933946304-67b441b595d1?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: '처방전 데이터 분석',
    category: '데이터 솔루션',
    description: '처방 패턴을 분석하여 약국 운영 최적화에 도움을 주는 도구',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    name: '경영 대시보드',
    category: '데이터 솔루션',
    description: '약국 매출, 재고, 처방 데이터를 한눈에 볼 수 있는 대시보드',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    name: '자동 청구 시스템',
    category: '자동화 솔루션',
    description: '보험 청구 업무를 자동화하여 시간과 오류를 줄이는 솔루션',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 6,
    name: '고객 관계 관리',
    category: '마케팅 솔루션',
    description: '환자 데이터를 관리하고 맞춤형 서비스를 제공하는 CRM 솔루션',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 7,
    name: '디지털 마케팅 도구',
    category: '마케팅 솔루션',
    description: '약국 마케팅을 위한 디지털 툴과 자동화 캠페인 관리',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'EzPharm API',
    category: '개발자 솔루션',
    description: '외부 시스템과 통합할 수 있는 API 및 개발자 도구',
    image: 'https://images.unsplash.com/photo-1581092921461-39b788119531?q=80&w=500&auto=format&fit=crop'
  }
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilter, setShowFilter] = useState(false);
  
  const categories = ['all', '핵심 솔루션', '자동화 솔루션', '데이터 솔루션', '마케팅 솔루션', '개발자 솔루션'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="솔루션" 
        subtitle="약국 운영을 최적화하는 EzPharm AI의 혁신적인 솔루션"
      />
      
      <div className="mb-10">
        <button 
          className="md:hidden flex items-center bg-white border rounded-md px-4 py-2 mb-4 shadow-sm"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={16} className="mr-2" />
          솔루션 카테고리
        </button>
        
        <div className={`md:block ${showFilter ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'ezpharm-gradient text-white shadow-md' 
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          해당 카테고리에 솔루션이 없습니다.
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
