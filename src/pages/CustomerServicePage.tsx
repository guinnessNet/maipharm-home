import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { CircleHelp, Mail, MapPin, MessageSquare, Phone, Server } from 'lucide-react';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'EzPharm AI 솔루션은 어떤 약국에 적합한가요?',
    answer: '모든 규모의 약국에 맞춤형으로 제공됩니다. 소형 개인 약국부터 대형 체인 약국까지 규모와 필요에 맞게 확장 가능한 솔루션을 제공합니다.'
  },
  {
    id: 2,
    question: '기존 약국 시스템과 통합이 가능한가요?',
    answer: '네, 가능합니다. EzPharm AI는 개방형 API를 통해 기존 약국 시스템과 쉽게 통합할 수 있습니다. 저희 기술팀이 원활한 마이그레이션을 도와드립니다.'
  },
  {
    id: 3,
    question: '데이터 보안은 어떻게 보장되나요?',
    answer: 'EzPharm AI는 의료 데이터 관련 법규를 준수하는 엄격한 보안 프로토콜을 적용하고 있습니다. 256비트 암호화, 다중 인증 시스템, 그리고 정기적인 보안 감사를 통해 고객 데이터를 안전하게 보호합니다.'
  },
  {
    id: 4,
    question: '서비스 구독 비용은 어떻게 되나요?',
    answer: '다양한 구독 플랜을 제공하고 있으며, 약국 규모와 필요한 기능에 따라 비용이 달라집니다. 기본 플랜은 월 10만원부터 시작하며, 상세한 가격 정보는 영업팀에 문의해 주세요.'
  },
  {
    id: 5,
    question: '시스템 사용법 교육은 제공되나요?',
    answer: '모든 구독 플랜에는 초기 시스템 설정 및 기본 사용법 교육이 포함되어 있습니다. 추가적인 심화 교육이나 맞춤형 트레이닝도 제공하고 있으며, 언제든지 온라인 교육 자료를 통해 학습하실 수 있습니다.'
  }
];

const CustomerServicePage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="고객센터" 
        subtitle="EzPharm AI는 고객의 성공을 위해 항상 함께합니다"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6 ezpharm-text-blue flex items-center">
            <MessageSquare className="mr-3" size={22} />
            고객 지원 안내
          </h3>
          <div className="space-y-5">
            <p className="text-gray-700">
              EzPharm AI 솔루션과 서비스에 관한 문의사항이 있으시면 아래 연락처로 문의해 주세요.
              평일 09:00~18:00 사이에 전문 기술 지원팀이 신속하게 응대해 드립니다.
            </p>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone size={20} className="text-indigo-500" />
              <div>
                <div className="font-medium">기술 지원 핫라인</div>
                <span className="text-gray-600">02-123-4567</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail size={20} className="text-indigo-500" />
              <div>
                <div className="font-medium">이메일 지원</div>
                <span className="text-gray-600">support@ezpharm.ai</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Server size={20} className="text-indigo-500" />
              <div>
                <div className="font-medium">온라인 지원 포털</div>
                <span className="text-gray-600">help.ezpharm.ai</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6 ezpharm-text-blue">문의하기</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                <option value="">문의 유형을 선택하세요</option>
                <option value="technical">기술 지원</option>
                <option value="sales">도입 문의</option>
                <option value="partnership">파트너십</option>
                <option value="others">기타</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">문의내용</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all h-32"
                placeholder="문의내용을 입력하세요"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 rounded-lg text-white font-medium ezpharm-gradient hover:opacity-90 transition-all"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
        <h3 className="text-xl font-semibold mb-8 ezpharm-text-blue flex items-center">
          <CircleHelp className="mr-3" size={22} />
          자주 묻는 질문
        </h3>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className={`text-indigo-500 transition-transform transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                  {expandedFaq === faq.id ? '−' : '+'}
                </span>
              </button>
              
              {expandedFaq === faq.id && (
                <div className="p-5 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">방문 상담</h3>
          <p className="text-gray-600 mb-3">서울특별시 강남구 테헤란로 123 AI 빌딩 14층</p>
          <p className="text-sm text-gray-500">평일 09:00 - 18:00 (예약제)</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <Server size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">기술 자료실</h3>
          <p className="text-gray-600 mb-3">사용 가이드, API 문서, 동영상 튜토리얼 제공</p>
          <p className="text-sm text-gray-500">help.ezpharm.ai에서 확인하세요</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">온라인 채팅 지원</h3>
          <p className="text-gray-600 mb-3">실시간 채팅 상담으로 빠른 문제 해결</p>
          <p className="text-sm text-gray-500">평일 09:00 - 22:00 운영</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
