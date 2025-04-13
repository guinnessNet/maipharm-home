import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { CircleHelp, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: '이지팜 제품은 어디서 구매할 수 있나요?',
    answer: '이지팜 제품은 전국 주요 약국 및 공식 온라인 스토어에서 구매하실 수 있습니다. 자세한 구매처는 고객센터로 문의해 주세요.'
  },
  {
    id: 2,
    question: '제품 부작용이 있을 경우 어떻게 해야 하나요?',
    answer: '제품 사용 중 이상 증상이 발생할 경우, 즉시 사용을 중단하고 의사와 상담하신 후 고객센터로 연락해 주시기 바랍니다.'
  },
  {
    id: 3,
    question: '건강기능식품 복용 방법은 어떻게 되나요?',
    answer: '각 제품별로 권장 복용량이 다르므로 제품 패키지에 표기된 복용법을 확인해 주세요. 일반적으로 하루 1-2회, 식후 물과 함께 복용하시는 것이 좋습니다.'
  },
  {
    id: 4,
    question: '제품 반품 및 교환은 어떻게 진행되나요?',
    answer: '구매일로부터 14일 이내에 고객센터로 연락주시면 반품 및 교환 절차를 안내해 드립니다. 단, 개봉 후에는 품질 문제가 아닌 경우 교환 및 반품이 어려울 수 있습니다.'
  },
  {
    id: 5,
    question: '임산부도 복용 가능한 제품이 있나요?',
    answer: '임신 중이거나 수유 중인 경우, 제품 복용 전 반드시 의사와 상담하시는 것이 좋습니다. 일부 제품은 임산부를 위해 특별히 개발된 제품도 있으니 고객센터로 문의해 주세요.'
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
    <div className="container mx-auto px-4 py-8">
      <SectionTitle 
        title="고객센터" 
        subtitle="이지팜은 고객님의 건강과 만족을 최우선으로 생각합니다"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 ezpharm-text-blue flex items-center">
            <MessageSquare className="mr-2" size={20} />
            문의 안내
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              이지팜 제품 및 서비스에 관한 문의사항이 있으시면 아래 연락처로 문의해 주세요.
              평일 09:00~18:00 사이에 상담이 가능합니다. (점심시간 12:00~13:00)
            </p>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>고객센터: 02-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>이메일: customer@ezpharm.co.kr</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>주소: 서울특별시 강남구 테헤란로 123</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 ezpharm-text-blue">문의하기</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">문의내용</label>
              <textarea 
                className="w-full px-3 py-2 border rounded-md h-24"
                placeholder="문의내용을 입력하세요"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-6 ezpharm-text-blue flex items-center">
          <CircleHelp className="mr-2" size={20} />
          자주 묻는 질문
        </h3>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{expandedFaq === faq.id ? '−' : '+'}</span>
              </button>
              
              {expandedFaq === faq.id && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
