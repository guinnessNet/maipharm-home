import SectionTitle from '../components/SectionTitle';
import { Award, ChartBar, Briefcase, Cpu, Globe, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="회사소개" 
        subtitle="AI 기술로 약국 운영을 혁신하는 EzPharm AI를 소개합니다"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4 ezpharm-text-blue">마이팜 소개</h3>
          <p className="mb-4 text-gray-700">
            마이팜(주)는 2024년 설립된 테크 스타트업으로, 인공지능과 자동화 기술을 활용하여 약국 운영을 혁신하는 통합 플랫폼을 제공합니다.
            우리는 약사들이 약국 경영에 필요한 복잡한 업무를 효율적으로 관리할 수 있도록 도와 궁극적으로 환자 케어에 더 집중할 수 있게 합니다.
          </p>
          <p className="text-gray-700">
            최첨단 AI 기술과 클라우드 기반 솔루션을 통해 처방전 관리, 재고 자동화, 매출 분석 등 약국 운영의 모든 측면을 최적화하고 있습니다.
            마이팜(주)는 지속적인 연구개발과 혁신을 통해 약국 경영의 새로운 패러다임을 제시합니다.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://via.placeholder.com/1000x600?text=EzPharm+Team" 
            alt="EzPharm 팀" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-semibold">기업 미션</h3>
          </div>
          <p className="text-gray-700 mb-4">
            AI와 자동화 기술을 통해 약국 운영을 최적화하여 약사들이 환자 케어에 더 집중할 수 있는 환경을 만듭니다. 
            우리는 기술로 약국 경영의 모든 측면을 혁신하여 효율성과 정확성을 높이고, 궁극적으로 의료 서비스의 질을 향상시키는 것을 목표로 합니다.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold">비전</h3>
          </div>
          <p className="text-gray-700 mb-4">
            2030년까지 글로벌 약국 경영 솔루션 시장을 선도하는 기업으로 성장하여, 전 세계 약국들이 첨단 기술을 통해 더 나은 의료 서비스를 제공할 수 있도록 지원합니다.
            AI와 데이터 분석을 통한 혁신으로 보건의료 산업의 디지털 전환을 이끄는 선두주자가 되고자 합니다.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold">핵심 가치</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-1">혁신</h4>
              <p className="text-gray-600 text-sm">끊임없는 기술 혁신으로 약국 운영의 미래를 만듭니다</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-1">고객 중심</h4>
              <p className="text-gray-600 text-sm">약사와 환자의 필요를 최우선으로 생각합니다</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-1">데이터 기반</h4>
              <p className="text-gray-600 text-sm">과학적 데이터 분석을 통한 의사결정을 지원합니다</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-1">신뢰성</h4>
              <p className="text-gray-600 text-sm">안정적이고 신뢰할 수 있는 서비스를 제공합니다</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold">연혁</h3>
          </div>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-24 font-semibold ezpharm-text-blue">2025</div>
              <div>
                <p className="font-medium">창업성공패키지 선정</p>
                <p className="text-gray-600 text-sm">팜스퀘어 고도화 및 하드웨어 추가 개발 시작</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 font-semibold ezpharm-text-blue">2024</div>
              <div>
                <p className="font-medium">약국 관리 플랫폼-팜스퀘어 베타서비스 출시</p>
                <p className="text-gray-600 text-sm">국내 4개 약국 서비스 도입</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 font-semibold ezpharm-text-blue">2024</div>
              <div>
                <p className="font-medium">예비창업패키지 선정</p>
                <p className="text-gray-600 text-sm">사업초기 비용을 위한 마중물</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 font-semibold ezpharm-text-blue">2024</div>
              <div>
                <p className="font-medium">마이팜주식회사 설립</p>
                <p className="text-gray-600 text-sm">약국 경영 혁신을 위한 스타트업 출범</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <h3 className="text-xl font-bold mb-6 ezpharm-text-blue flex items-center">
          <Cpu className="mr-2" size={24} />
          핵심 기술
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold mb-2">AI 처방전 분석</h4>
            <p className="text-gray-600">딥러닝 기반 처방전 분석으로 약품 상호작용 검사 및 조제 업무 효율화</p>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold mb-2">예측형 재고 관리</h4>
            <p className="text-gray-600">머신러닝을 활용한 약품 수요 예측 및 자동 발주 시스템</p>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-semibold mb-2">빅데이터 분석</h4>
            <p className="text-gray-600">약국 운영 데이터 분석을 통한 경영 인사이트 제공 및 의사결정 지원</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-xl font-bold mb-6 ezpharm-text-blue flex items-center">
          <ChartBar className="mr-2" size={24} />
          성과
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold ezpharm-text-blue mb-2">4+</div>
            <p className="text-gray-700">서비스 도입 약국</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold ezpharm-text-blue mb-2">40%</div>
            <p className="text-gray-700">업무 효율성 향상</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold ezpharm-text-blue mb-2">25%</div>
            <p className="text-gray-700">재고 관리 비용 절감</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold ezpharm-text-blue mb-2">100K+</div>
            <p className="text-gray-700">처리된 처방전 데이터</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
