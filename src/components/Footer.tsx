import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 px-4">
      <div className="container mx-auto">
        <div className="mb-4">
          <div className="text-lg font-semibold ezpharm-text-blue mb-2">이지팜 주식회사</div>
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>서울특별시 강남구 테헤란로 123</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>전화: 02-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>이메일: info@ezpharm.co.kr</span>
            </div>
          </div>
        </div>
        
        <div className="text-xs border-t border-gray-300 pt-4 mt-4">
          <p>© 2024 이지팜 주식회사. All rights reserved.</p>
          <p className="mt-1">본 앱은 https://www.ezpharm.co.kr 웹사이트의 내용을 기반으로 합니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
