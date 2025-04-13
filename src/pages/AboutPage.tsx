import SectionTitle from '../components/SectionTitle';
import { Award, Briefcase, Target, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle 
        title="회사소개" 
        subtitle="건강한 내일을 약속하는 이지팜입니다"
      />
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 ezpharm-text-blue">이지팜 소개</h3>
        <p className="mb-4 text-gray-700">
          이지팜은 2000년 설립된 제약회사로, 건강기능식품 및 의약품을 연구, 개발, 제조하는 글로벌 헬스케어 기업입니다.
          우리는 인류의 건강과 행복을 위한 혁신적인 솔루션을 제공하기 위해 노력하고 있습니다.
        </p>
        <p className="text-gray-700">
          최첨단 연구시설과 생산설비를 갖추고, 엄격한 품질관리 시스템을 통해 세계적 수준의 제품을 만들고 있습니다.
          이지팜은 지속적인 연구개발과 혁신을 통해 글로벌 시장에서 선도적인 역할을 하고 있습니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full ezpharm-blue text-white mr-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-lg font-semibold">기업 이념</h3>
          </div>
          <p className="text-gray-700">
            인류의 건강과 복지 증진을 위한 혁신적인 제품을 개발하고, 높은 품질과 안전성을 보장하는 제품으로 고객 만족을 실현합니다.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full ezpharm-blue text-white mr-4">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-semibold">비전</h3>
          </div>
          <p className="text-gray-700">
            2030년까지 아시아 TOP 10 헬스케어 기업으로 성장하여 글로벌 시장을 선도하는 기업이 되는 것을 목표로 합니다.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full ezpharm-blue text-white mr-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-semibold">핵심 가치</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>고객 중심</li>
            <li>품질 우선</li>
            <li>혁신 추구</li>
            <li>윤리 경영</li>
            <li>사회적 책임</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full ezpharm-blue text-white mr-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-semibold">연혁</h3>
          </div>
          <div className="space-y-3">
            <div className="flex">
              <div className="w-20 font-semibold">2023</div>
              <div>글로벌 제약회사와 기술협력 MOU 체결</div>
            </div>
            <div className="flex">
              <div className="w-20 font-semibold">2020</div>
              <div>건강기능식품 수출 100만불 달성</div>
            </div>
            <div className="flex">
              <div className="w-20 font-semibold">2015</div>
              <div>이지팜 연구소 설립</div>
            </div>
            <div className="flex">
              <div className="w-20 font-semibold">2000</div>
              <div>이지팜 주식회사 설립</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 ezpharm-text-blue">사업 영역</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <h4 className="font-medium mb-2">건강기능식품</h4>
            <p className="text-sm text-gray-600">프리미엄 건강기능식품 연구개발 및 생산</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <h4 className="font-medium mb-2">의약품</h4>
            <p className="text-sm text-gray-600">고품질 제네릭 의약품 및 신약 개발</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <h4 className="font-medium mb-2">바이오헬스</h4>
            <p className="text-sm text-gray-600">바이오 신소재 연구 및 차세대 헬스케어 솔루션</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
