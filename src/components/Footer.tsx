import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-6">
          <div className="text-lg font-semibold text-white mb-2">EzPharm AI</div>
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>서울특별시 강남구 테헤란로 123 AI 빌딩 14층</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>전화: 02-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>이메일: contact@ezpharm.ai</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-white font-medium mb-2">솔루션</h3>
            <ul className="text-sm space-y-1">
              <li>AI 약국 관리</li>
              <li>재고 자동화</li>
              <li>처방전 관리</li>
              <li>매출 분석</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">회사</h3>
            <ul className="text-sm space-y-1">
              <li>회사소개</li>
              <li>블로그</li>
              <li>채용정보</li>
              <li>파트너십</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">리소스</h3>
            <ul className="text-sm space-y-1">
              <li>도움말</li>
              <li>고객센터</li>
              <li>API 문서</li>
              <li>개발자 지원</li>
            </ul>
          </div>
        </div>
        
        <div className="text-xs border-t border-gray-700 pt-4 mt-4">
          <p>© 2024 EzPharm AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
