import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProducts = [
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
  }
];

const HomePage = () => {
  return (
    <div>
      <Banner />
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <SectionTitle 
            title="이지팜 소개" 
            subtitle="건강한 내일을 약속하는 글로벌 헬스케어 기업"
          />
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="mb-4 text-gray-700">
              이지팜은 인류의 건강과 행복을 위한 혁신적인 의약품 개발에 앞장서고 있습니다. 
              끊임없는 연구개발과 철저한 품질관리를 통해 신뢰할 수 있는 제품을 제공합니다.
            </p>
            
            <Link to="/about" className="inline-flex items-center text-blue-600 font-medium">
              더 알아보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </section>
        
        <section className="mb-12">
          <SectionTitle 
            title="제품 소개" 
            subtitle="이지팜의 대표 제품들을 만나보세요"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              모든 제품 보기 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </section>
        
        <section>
          <SectionTitle 
            title="최신 소식" 
            subtitle="이지팜의 새로운 소식을 확인하세요"
          />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="divide-y">
              <div className="py-4">
                <div className="text-sm text-gray-500 mb-1">2024.06.01</div>
                <h3 className="font-medium">이지팜, 신규 건강기능식품 라인업 출시</h3>
              </div>
              <div className="py-4">
                <div className="text-sm text-gray-500 mb-1">2024.05.15</div>
                <h3 className="font-medium">이지팜, 글로벌 제약회사와 기술협력 MOU 체결</h3>
              </div>
              <div className="py-4">
                <div className="text-sm text-gray-500 mb-1">2024.05.01</div>
                <h3 className="font-medium">이지팜, 친환경 패키징으로 전환 완료</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
