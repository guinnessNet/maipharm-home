import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ChartBar, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
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
  }
];

const HomePage = () => {
  return (
    <div>
      <Banner />
      
      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <SectionTitle 
            title="약국 경영의 미래를 만듭니다" 
            subtitle="EzPharm AI는 인공지능과 자동화 기술을 활용해 약국 운영을 혁신하는 통합 플랫폼을 제공합니다"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 ezpharm-text-blue">AI로 약국 
                <Link to="/pos">운영 최적화</Link>
              </h3>
              <p className="text-gray-600 mb-6">
                EzPharm AI는 약국 운영의 모든 측면을 자동화하고 최적화하여 약사님들이 본연의 업무에 집중할 수 있도록 도와드립니다. 
                처방전 관리부터 재고 자동화, 매출 분석까지 약국 경영에 필요한 모든 것을 한 곳에서 관리하세요.
              </p>
              
              <Link to="/about" className="inline-flex items-center px-6 py-3 rounded-md ezpharm-gradient text-white font-medium">
                자세히 알아보기 <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="AI 데이터 분석" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-20">
          <SectionTitle 
            title="주요 기능" 
            subtitle="EzPharm AI가 제공하는 핵심 기능들을 소개합니다"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI 운영 자동화</h3>
              <p className="text-gray-600 text-sm">
                인공지능으로 일상적인 약국 업무를 자동화하여 시간을 절약합니다
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">통합 데이터 관리</h3>
              <p className="text-gray-600 text-sm">
                약품, 고객, 처방전 정보를 하나의 시스템에서 효율적으로 관리합니다
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBar size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">비즈니스 인사이트</h3>
              <p className="text-gray-600 text-sm">
                실시간 데이터 분석으로 약국 경영에 필요한 통찰력을 제공합니다
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">보안 및 규정 준수</h3>
              <p className="text-gray-600 text-sm">
                의료 데이터 보안과 규정 준수를 위한 강력한 보안 시스템을 제공합니다
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-20">
          <SectionTitle 
            title="솔루션" 
            subtitle="약국 운영의 효율성을 높이는 EzPharm AI의 솔루션"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {solutions.map(solution => (
              <ProductCard 
                key={solution.id}
                id={solution.id}
                name={solution.name}
                category={solution.category}
                image={solution.image}
                description={solution.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 rounded-md ezpharm-gradient text-white font-medium"
            >
              모든 솔루션 보기 <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
        
        <section>
          <SectionTitle 
            title="최신 소식" 
            subtitle="EzPharm AI의 새로운 소식을 확인하세요"
          />
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="divide-y">
              <div className="py-5">
                <div className="text-sm text-indigo-500 font-medium mb-1">2025.03.29</div>
                <h3 className="font-semibold text-lg">마이팜(주),중소벤처진흥공단 창업성공패키지 선정</h3>
                <p className="text-gray-600 mt-1">인공지능 약국 관리 시스템 고도화 및
                국내외 시장 확장을 위한 자본 마련</p>
              </div>
              <div className="py-5">
                <div className="text-sm text-indigo-500 font-medium mb-1">2024.09.15</div>
                <h3 className="font-semibold text-lg">팜스퀘어, 베타서비스 출시</h3>
                <p className="text-gray-600 mt-1">처방데이터 관리 및 조제 및 복약 간편 서비스 제공</p>
              </div>
              <div className="py-5">
                <div className="text-sm text-indigo-500 font-medium mb-1">2024.04.29</div>
                <h3 className="font-semibold text-lg">창업진흥원 예비창업패키지 선정</h3>
                <p className="text-gray-600 mt-1">정부지원금으로 창업 자본의 마중물을 마련</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
