import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translation: {
          // 공통
          'site.name': '마이팜',
          'site.description': 'AI 기반 스마트 약국 관리 시스템',
          'site.keywords': '약국 관리, AI 약국, 스마트 약국, 처방전 관리, 약국 자동화, 약국 POS, 약국 재고관리, 약국 매출관리, 약국 데이터분석, 약국 운영시스템',
          
          // 네비게이션
          'nav.home': '홈',
          'nav.products': '제품',
          'nav.about': '회사소개',
          'nav.contact': '문의하기',
          'nav.blog': '블로그',
          
          // 홈페이지
          'home.title': '약국 경영의 미래를 만듭니다',
          'home.subtitle': '마이팜는 인공지능과 자동화 기술을 활용해 약국 운영을 혁신하는 통합 플랫폼을 제공합니다',
          'home.ai.title': 'AI로 약국 운영 최적화',
          'home.ai.description': '마이팜는 약국 운영의 모든 측면을 자동화하고 최적화하여 약사님들이 본연의 업무에 집중할 수 있도록 도와드립니다. 처방전 관리부터 재고 자동화, 매출 분석까지 약국 경영에 필요한 모든 것을 한 곳에서 관리하세요.',
          'home.ai.button': '자세히 알아보기',
          
          'home.features.title': '주요 기능',
          'home.features.subtitle': '다양한 기능으로 약국 운영을 지원합니다',
          'home.features.ai.title': 'AI 운영 자동화',
          'home.features.ai.description': '인공지능으로 일상적인 약국 업무를 자동화하여 시간을 절약합니다',
          'home.features.data.title': '통합 데이터 관리',
          'home.features.data.description': '약품, 고객, 처방전 정보를 하나의 시스템에서 효율적으로 관리합니다',
          'home.features.insight.title': '비즈니스 인사이트',
          'home.features.insight.description': '실시간 데이터 분석으로 약국 경영에 필요한 통찰력을 제공합니다',
          'home.features.security.title': '보안 및 규정 준수',
          'home.features.security.description': '의료 데이터 보안과 규정 준수를 위한 강력한 보안 시스템을 제공합니다',
          
          'home.solutions.title': '솔루션',
          'home.solutions.subtitle': '약국 운영을 최적화하는 마이팜의 혁신적인 솔루션',
          'home.solutions.button': '모든 솔루션 보기',
          
          'home.news.title': '최신 소식',
          'home.news.subtitle': '마이팜의 새로운 소식을 확인하세요',
          
          // 제품 설명
          'product.crm.name': '고객 관리 시스템 - 마이팜 CRM',
          'product.crm.category': '고객 관리',
          'product.crm.description': '고객 데이터를 분석하고 맞춤형 서비스를 제공하는 스마트 CRM 시스템',
          'product.crm.longDescription': `마이팜 CRM은 약국의 고객 관리 업무를 혁신하는 AI 기반 시스템입니다.
          고객의 구매 이력, 복약 정보, 건강 상태를 종합적으로 분석하여
          맞춤형 서비스와 마케팅 전략을 제안합니다.
          
          실시간으로 고객의 피드백을 수집하고 분석하여
          서비스 품질을 지속적으로 개선하며,
          고객 만족도를 높이는 다양한 기능을 제공합니다.
          
          직관적인 인터페이스로 고객 정보를 쉽게 관리할 수 있으며,
          데이터 기반의 의사결정을 지원합니다.`,
          'product.crm.features': [
            '고객 데이터 통합 관리',
            'AI 기반 고객 분석',
            '맞춤형 마케팅 자동화',
            '실시간 피드백 분석',
            '고객 이력 관리',
            '보고서 자동 생성'
          ],
          'product.crm.benefits': [
            {
              title: '고객 만족도 향상',
              description: '고객 만족도 40% 증가'
            },
            {
              title: '매출 증대',
              description: '재방문율 50% 증가'
            },
            {
              title: '업무 효율성',
              description: '고객 관리 시간 60% 단축'
            }
          ],
          
          // 버튼
          'button.learnMore': '자세히 보기',
          'button.contact': '문의하기',
          'button.tryNow': '무료 체험하기',
          'button.back': '제품 목록으로 돌아가기',

          // 고객센터
          'customer.title': '고객센터',
          'customer.subtitle': '문의사항을 남겨주시면 빠르게 답변 드리겠습니다',
          'customer.support.title': '고객 지원 안내',
          'customer.support.description': '마이팜 솔루션과 서비스에 관한 문의사항이 있으시면 아래 연락처로 문의해 주세요. 평일 09:00~18:00 사이에 전문 기술 지원팀이 신속하게 응대해 드립니다.',
          'customer.support.phone': '기술 지원 핫라인',
          'customer.support.email': '이메일 지원',
          'customer.support.portal': '온라인 지원 포털(준비중)',
          
          'customer.inquiry.title': '문의하기',
          'customer.inquiry.name': '이름',
          'customer.inquiry.email': '이메일',
          'customer.inquiry.type': '문의 유형',
          'customer.inquiry.type.general': '일반문의',
          'customer.inquiry.type.technical': '기술지원',
          'customer.inquiry.type.partnership': '제휴문의',
          'customer.inquiry.type.other': '기타',
          'customer.inquiry.message': '문의 내용',
          'customer.inquiry.submit': '문의하기',
          'customer.inquiry.sending': '전송 중...',
          'customer.inquiry.success': '문의가 성공적으로 전송되었습니다.',
          'customer.inquiry.error': '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          
          'customer.faq.title': '자주 묻는 질문',
          'customer.faq.q1': '팜스퀘어 솔루션은 어떤 약국에 적합한가요?',
          'customer.faq.a1': '모든 규모의 약국에 맞춤형으로 제공됩니다. 소형 개인 약국부터 대형 체인 약국까지 규모와 필요에 맞게 확장 가능한 솔루션을 제공합니다.',
          'customer.faq.q2': '기존 약국 시스템과 통합이 가능한가요?',
          'customer.faq.a2': '네, 가능합니다. 팜스퀘어는 개방형 API를 통해 기존 약국 시스템과 쉽게 통합할 수 있습니다. 저희 기술팀이 원활한 마이그레이션을 도와드립니다.',
          'customer.faq.q3': '데이터 보안은 어떻게 보장되나요?',
          'customer.faq.a3': '팜스퀘어는 개인정보보호법을 준수하는 엄격한 보안 프로토콜을 적용하고 있습니다. 256비트 암호화, 다중 인증 시스템, 그리고 정기적인 보안 감사를 통해 고객 데이터를 안전하게 보호합니다.',
          'customer.faq.q4': '서비스 구독 비용은 어떻게 되나요?',
          'customer.faq.a4': '다양한 구독 플랜을 제공하고 있으며, 약국 규모와 필요한 기능에 따라 비용이 달라집니다. 기본 플랜은 월 33,000원부터 시작하며, 상세한 가격 정보는 영업팀에 문의해 주세요.',
          'customer.faq.q5': '시스템 사용법 교육은 제공되나요?',
          'customer.faq.a5': '모든 구독 플랜에는 초기 시스템 설정 및 기본 사용법 교육이 포함되어 있습니다. 추가적인 심화 교육이나 맞춤형 트레이닝도 제공하고 있으며, 언제든지 온라인 교육 자료를 통해 학습하실 수 있습니다.',
          
          'customer.visit.title': '방문 상담',
          'customer.visit.address': '경기 시흥시 공단1대로 204, 32동 306호',
          'customer.visit.hours': '평일 09:00 - 18:00 (예약제)',
          
          'customer.docs.title': '기술 자료실',
          'customer.docs.description': '사용 가이드, API 문서, 동영상 튜토리얼 제공',
          'customer.docs.status': '준비 중입니다',
          
          'customer.chat.title': '온라인 채팅 지원',
          'customer.chat.description': '실시간 채팅 상담으로 빠른 문제 해결',
          'customer.chat.status': '준비 중입니다',

          // 제품 페이지
          'products.title': '솔루션',
          'products.subtitle': '약국 운영을 최적화하는 마이팜의 혁신적인 솔루션',
          'products.filter.title': '솔루션 카테고리',
          'products.filter.all': '전체',
          'products.filter.core': '핵심 솔루션',
          'products.filter.automation': '자동화 솔루션',
          'products.filter.data': '데이터 솔루션',
          'products.filter.marketing': '마케팅 솔루션',
          'products.filter.developer': '개발자 솔루션',
          'products.empty': '해당 카테고리에 솔루션이 없습니다.',

          // 카테고리 번역
          'category.core': '핵심 솔루션',
          'category.automation': '자동화 솔루션',
          'category.data': '데이터 솔루션',
          'category.marketing': '마케팅 솔루션',
          'category.developer': '개발자 솔루션',

          // 제품 목록
          'products.list.core.1.name': 'AI 약국 관리 시스템 - 팜스퀘어',
          'products.list.core.1.description': '인공지능으로 약국 운영 전반을 최적화하는 올인원 플랫폼',
          
          'products.list.automation.1.name': '가루약 자동 토출기 - 메디믹스',
          'products.list.automation.1.description': '일일히 계량하는 가루약을 자동으로 토출하는 기기',
          
          'products.list.core.2.name': '인공지능 복약 에이전트',
          'products.list.core.2.description': '처방 내용과 병원 정보를 분석하여 최적의 복약안내를 제안하는 인공지능 에이전트',
          
          'products.list.data.1.name': '경영 대시보드',
          'products.list.data.1.description': '약국 매출, 재고, 처방 데이터를 한눈에 볼 수 있는 대시보드',
          
          'products.list.automation.2.name': '자동 청구 시스템',
          'products.list.automation.2.description': '보험 청구 업무를 자동화하여 시간과 오류를 줄이는 솔루션',
          
          'products.list.marketing.1.name': '고객 관계 관리',
          'products.list.marketing.1.description': '환자 데이터를 관리하고 맞춤형 서비스를 제공하는 CRM 솔루션',
          
          'products.list.marketing.2.name': '디지털 마케팅 도구',
          'products.list.marketing.2.description': '약국 마케팅을 위한 디지털 툴과 자동화 캠페인 관리',
          
          'products.list.developer.1.name': 'PharmSquare API',
          'products.list.developer.1.description': '외부 시스템과 통합할 수 있는 API 및 개발자 도구',

          // 회사 소개 페이지
          'about.title': '회사 소개',
          'about.subtitle': '마이팜는 약국 운영의 혁신을 이끄는 AI 기반 스마트 약국 관리 시스템을 제공합니다',
          'about.intro.title': '마이팜 소개',
          'about.intro.description1': '마이팜은 약국 현장의 데이터를 중심으로, 약사와 환자 모두를 위한 AI 기반 헬스케어 솔루션을 개발하는 디지털 헬스케어 기업입니다.',
          'about.intro.description2': '우리는 약국 업무 자동화 하드웨어인 \'메디믹스\', 그리고 복약지도 작성과 투약 관리 지원을 위한 소프트웨어 \'팜스퀘어\'를 통해 약사의 업무 부담을 줄이고, 환자에게는 더 정확하고 개인화된 복약 정보를 제공합니다.',
          'about.intro.description3': '마이팜은 단순한 기술 제공을 넘어, 약국 데이터를 기반으로 한 헬스케어 플랫폼으로 확장하고 있습니다. AI 기술과 정밀 분석을 바탕으로 처방 이력, 환자 상태, 복약 이탈 가능성 등을 종합적으로 판단하여, 맞춤형 건강 관리를 실현합니다.',
          'about.intro.description4': '우리는 기술이 약사의 전문성을 더욱 빛나게 하고, 환자에게는 더 따뜻한 복약 경험을 제공할 수 있다고 믿습니다.',
          'about.intro.description5': '2030년까지 글로벌 약국 경영 솔루션 시장을 선도하며, 약국 중심의 디지털 헬스케어 혁신을 이끄는 기업으로 성장하겠습니다.',

          'about.mission.title': '기업 미션',
          'about.mission.description': '약국 현장의 데이터를 연결하고 분석하여, 약사에게는 더 정확하고 효율적인 업무 환경을, 환자에게는 더 안전하고 따뜻한 복약 경험을 제공합니다. 기술을 넘어, 모두의 건강한 일상을 함께 만들어가는 헬스케어 파트너가 되겠습니다.',

          'about.vision.title': '비전',
          'about.vision.description': '우리는 2030년까지 약국 데이터를 기반으로 한 통합 헬스케어 플랫폼을 구축하여, 글로벌 약국 경영 솔루션 시장을 선도하고자 합니다. AI와 데이터 분석 역량을 바탕으로 약국을 환자 중심 의료의 핵심 거점으로 전환시키며, 보건의료 산업의 디지털 혁신을 이끄는 선두주자가 되겠습니다.',

          'about.values.title': '핵심 가치',
          'about.values.innovation.title': '혁신',
          'about.values.innovation.description': '끊임없는 기술 혁신으로 약국 운영의 미래를 만듭니다',
          'about.values.customer.title': '고객 중심',
          'about.values.customer.description': '약사와 환자의 필요를 최우선으로 생각합니다',
          'about.values.data.title': '데이터 기반',
          'about.values.data.description': '과학적 데이터 분석을 통한 의사결정을 지원합니다',
          'about.values.trust.title': '신뢰성',
          'about.values.trust.description': '안정적이고 신뢰할 수 있는 서비스를 제공합니다',

          'about.history.title': '연혁',
          'about.history.2025.title': '마이팜(주),중소벤처진흥공단 창업성공패키지 선정',
          'about.history.2025.description': '인공지능 약국 관리 시스템 고도화 및 국내외 시장 확장을 위한 자본 마련',
          'about.history.2024_1.title': '팜스퀘어, 베타서비스 출시',
          'about.history.2024_1.description': '처방데이터 관리 및 조제 및 복약 간편 서비스 제공',
          'about.history.2024_2.title': '창업진흥원 예비창업패키지 선정',
          'about.history.2024_2.description': '정부지원금으로 창업 자본의 마중물을 마련',
          'about.history.2024_3.title': '마이팜 주식회사 설립',
          'about.history.2024_3.description': '약국 경영 혁신을 위한 스타트업 출범',


          'about.tech.title': '핵심 기술',
          'about.tech.ai.title': 'AI 처방전 분석',
          'about.tech.ai.description': '딥러닝 기반 처방전 분석으로 약품 상호작용 검사 및 조제 업무 효율화',
          'about.tech.inventory.title': '예측형 재고 관리',
          'about.tech.inventory.description': '머신러닝을 활용한 약품 수요 예측 및 자동 발주 시스템',
          'about.tech.data.title': '빅데이터 분석',
          'about.tech.data.description': '약국 운영 데이터 분석을 통한 경영 인사이트 제공 및 의사결정 지원',

          'about.achievements.title': '성과',
          'about.achievements.pharmacies': '서비스 도입 약국',
          'about.achievements.efficiency': '업무 효율성 향상',
          'about.achievements.cost': '재고 관리 비용 절감',
          'about.achievements.prescriptions': '처리된 처방전 데이터',

          // 현재 페이지 번역
          'current.title': '현재 페이지',
          'current.subtitle': '현재 페이지에 대한 설명',
          'current.content': '현재 페이지의 내용입니다.',
          'current.button': '자세히 보기',

          //footer
          'footer.address': '경기 시흥시 공단1대로 204, 32동 306호',
          'footer.phone': '010-8588-8999',
          'footer.email': 'kjh@maipharm.com',
          'footer.copyright': 'Copyright 2025 MaiPharm. All rights reserved.',

          // 제품 상세 페이지 번역
          'product.pharmsquare.name': 'AI 약국 관리 시스템 - 팜스퀘어',
          'product.pharmsquare.category': '핵심 솔루션',
          'product.pharmsquare.description': '인공지능으로 약국 운영 전반을 최적화하는 올인원 플랫폼',
          'product.pharmsquare.longDescription': `팜스퀘어는 약국 운영의 모든 측면을 인공지능으로 최적화하는 올인원 플랫폼입니다. 
          처방전 분석, 재고 관리, 매출 분석, 고객 관리 등 약국 운영에 필요한 모든 기능을 하나의 시스템에서 제공합니다.
          
          AI 기반의 지능형 처방전 분석 시스템은 처방전을 자동으로 분석하여 약사가 빠르고 정확하게 처방을 확인할 수 있도록 도와줍니다.
          또한 재고 관리 시스템은 실시간으로 재고를 모니터링하고, 부족한 약품을 자동으로 발주할 수 있도록 지원합니다.
          
          매출 분석 시스템은 약국의 매출 데이터를 분석하여 수익성 개선을 위한 인사이트를 제공하고,
          고객 관리 시스템은 고객의 구매 이력과 복약 정보를 관리하여 맞춤형 서비스를 제공할 수 있도록 합니다.`,
          'product.pharmsquare.features': [
            'AI 기반 처방전 분석',
            '실시간 재고 관리',
            '매출 분석 및 예측',
            '고객 관리 시스템',
            '복약 알림 서비스',
            '모바일 앱 지원'
          ],
          'product.pharmsquare.benefits': [
            {
              title: '업무 효율성 향상',
              description: 'AI 기반 자동화로 약사 업무 시간 30% 단축'
            },
            {
              title: '정확도 향상',
              description: '처방 오류 99.9% 감소'
            },
            {
              title: '고객 만족도 증가',
              description: '맞춤형 서비스로 고객 만족도 40% 향상'
            }
          ],
          'product.medimix.name': '가루약 자동토출기 - 메디믹스',
          'product.medimix.category': '자동화 장비',
          'product.medimix.description': '정확하고 효율적인 가루약 분배를 위한 자동화 시스템',
          'product.medimix.longDescription': `메디믹스는 약국에서 가루약 처방을 자동화하는 최첨단 시스템입니다.
          정밀한 계량과 분배를 통해 약사들의 업무 효율성을 높이고, 처방 오류를 최소화합니다.
          
          고급 센서와 AI 기술을 활용하여 각 약품의 특성에 맞는 최적의 분배 방식을 자동으로 선택합니다.
          또한 실시간 모니터링 시스템을 통해 분배 과정을 추적하고, 이상 징후를 즉시 감지합니다.
          
          사용자 친화적인 인터페이스로 쉽게 조작할 수 있으며,
          다양한 용량의 처방에 대응할 수 있는 유연한 시스템을 제공합니다.`,
          'product.medimix.features': [
            '정밀 계량 시스템',
            'AI 기반 최적 분배',
            '실시간 모니터링',
            '다양한 용량 대응',
            '자동 세척 기능',
            '데이터 백업 시스템'
          ],
          'product.medimix.benefits': [
            {
              title: '처방 정확도 향상',
              description: '가루약 분배 정확도 99.99% 달성'
            },
            {
              title: '업무 시간 단축',
              description: '가루약 처방 시간 70% 단축'
            },
            {
              title: '안전성 강화',
              description: '처방 오류 95% 감소'
            }
          ],
          'product.psinsight.name': 'AI 복약지도 생성기 - 팜스퀘어 인사이트',
          'product.psinsight.category': '핵심 솔루션',
          'product.psinsight.description': '인공지능으로 맞춤형 복약지도를 자동 생성하는 스마트 솔루션',
          'product.psinsight.longDescription': `팜스퀘어 인사이트는 환자의 처방약 정보를 분석하여 맞춤형 복약지도를 자동으로 생성하는 AI 기반 솔루션입니다.
          약사의 전문 지식과 AI 기술을 결합하여 환자 개개인에게 최적화된 복약 가이드를 제공합니다.
          
          처방약의 상호작용, 부작용, 복용 시간 등을 자동으로 분석하여
          환자가 이해하기 쉬운 형태의 복약지도를 생성합니다.
          
          또한 환자의 연령, 성별, 기저질환 등을 고려한 맞춤형 주의사항을 포함하여
          안전하고 효과적인 약물 복용을 지원합니다.`,
          'product.psinsight.features': [
            'AI 기반 복약지도 자동 생성',
            '약물 상호작용 분석',
            '맞춤형 주의사항 제공',
            '다국어 지원',
            '모바일 앱 연동',
            '복약 이력 관리'
          ],
          'product.psinsight.benefits': [
            {
              title: '업무 효율성 향상',
              description: '복약지도 작성 시간 80% 단축'
            },
            {
              title: '정확도 향상',
              description: '복약 오류 90% 감소'
            },
            {
              title: '환자 만족도 증가',
              description: '환자 이해도 60% 향상'
            }
          ],
          'product.dashboard.name': 'AI 경영 대시보드 - 마이팜 대시보드',
          'product.dashboard.category': '경영 분석',
          'product.dashboard.description': '약국 경영 데이터를 실시간으로 분석하고 인사이트를 제공하는 스마트 대시보드',
          'product.dashboard.longDescription': `마이팜 대시보드는 약국의 모든 경영 데이터를 실시간으로 분석하고 시각화하는 AI 기반 경영 분석 시스템입니다.
          매출, 재고, 고객 데이터를 통합 관리하여 약국 운영에 필요한 핵심 지표를 한눈에 파악할 수 있습니다.
          
          AI 알고리즘을 통해 매출 트렌드를 예측하고, 재고 최적화 방안을 제시합니다.
          또한 고객 구매 패턴을 분석하여 맞춤형 마케팅 전략을 수립할 수 있도록 지원합니다.
          
          직관적인 인터페이스로 누구나 쉽게 데이터를 분석할 수 있으며,
          모바일에서도 실시간으로 경영 현황을 확인할 수 있습니다.`,
          'product.dashboard.features': [
            '실시간 매출 분석',
            'AI 기반 예측 분석',
            '재고 최적화 추천',
            '고객 행동 분석',
            '맞춤형 리포트 생성',
            '모바일 대시보드'
          ],
          'product.dashboard.benefits': [
            {
              title: '수익성 향상',
              description: 'AI 기반 최적화로 매출 25% 증가'
            },
            {
              title: '의사결정 개선',
              description: '데이터 기반 의사결정으로 운영 효율 40% 향상'
            },
            {
              title: '고객 만족도 증가',
              description: '맞춤형 서비스로 고객 재방문율 35% 증가'
            }
          ],
          'product.autocg.name': '자동 청구 시스템 - 오토CG',
          'product.autocg.category': '청구 관리',
          'product.autocg.description': '건강보험 청구를 자동화하고 효율적으로 관리하는 스마트 시스템',
          'product.autocg.longDescription': `오토CG는 약국의 건강보험 청구 업무를 완전 자동화하는 최첨단 시스템입니다.
          처방전 데이터를 실시간으로 분석하여 정확한 청구 정보를 자동으로 생성하고, 
          보험 심사 기준에 맞춰 최적의 청구 방식을 제안합니다.
          
          AI 기술을 활용하여 청구 오류를 사전에 감지하고, 
          실시간으로 청구 현황을 모니터링하여 효율적인 청구 관리를 지원합니다.
          
          직관적인 대시보드로 청구 현황을 한눈에 파악할 수 있으며,
          다양한 보험 심사 기준에 맞춰 유연하게 대응할 수 있습니다.`,
          'product.autocg.features': [
            '실시간 청구 데이터 분석',
            'AI 기반 오류 감지',
            '자동 청구서 생성',
            '보험 심사 기준 최적화',
            '실시간 모니터링',
            '맞춤형 리포트 생성'
          ],
          'product.autocg.benefits': [
            {
              title: '청구 정확도 향상',
              description: '청구 오류 90% 감소'
            },
            {
              title: '업무 효율성 증가',
              description: '청구 업무 시간 80% 단축'
            },
            {
              title: '수익성 개선',
              description: '청구 수익 30% 증가'
            }
          ],
          'product.marketing.name': '마케팅 자동화 시스템 - 마이팜 마케팅',
          'product.marketing.category': '마케팅',
          'product.marketing.description': '데이터 기반의 맞춤형 마케팅을 자동화하는 스마트 시스템',
          'product.marketing.longDescription': `마이팜 마케팅은 약국의 마케팅 활동을 혁신하는 AI 기반 시스템입니다.
          고객 데이터와 시장 트렌드를 분석하여 최적의 마케팅 전략을 수립하고,
          자동화된 캠페인을 실행합니다.
          
          실시간으로 마케팅 성과를 분석하고 최적화하여
          효율적인 마케팅 예산 사용을 지원하며,
          고객 세그먼트별 맞춤형 프로모션을 제공합니다.
          
          다양한 채널을 통합 관리하여 일관된 브랜드 메시지를 전달하고,
          마케팅 ROI를 극대화합니다.`,
          'product.marketing.features': [
            'AI 기반 마케팅 전략',
            '자동화된 캠페인 관리',
            '실시간 성과 분석',
            '고객 세그먼트 관리',
            '멀티 채널 통합',
            '맞춤형 프로모션'
          ],
          'product.marketing.benefits': [
            {
              title: '마케팅 효율성',
              description: '마케팅 비용 35% 절감'
            },
            {
              title: '고객 참여도',
              description: '고객 참여율 45% 증가'
            },
            {
              title: '매출 증대',
              description: '프로모션 매출 55% 증가'
            }
          ],
          'product.api.name': '개발자 API - 마이팜 API',
          'product.api.category': '개발자 도구',
          'product.api.description': '약국 시스템을 위한 안전하고 강력한 API 서비스',
          'product.api.longDescription': `마이팜 API는 약국 시스템 개발을 위한 강력한 API 서비스입니다.
          RESTful API를 통해 약국 데이터에 안전하게 접근하고,
          다양한 기능을 활용할 수 있습니다.
          
          실시간 데이터 동기화와 웹훅을 지원하여
          효율적인 시스템 통합이 가능하며,
          상세한 문서와 SDK를 제공합니다.
          
          높은 보안성과 안정성을 갖추어
          기업용 애플리케이션 개발에 최적화되어 있습니다.`,
          'product.api.features': [
            'RESTful API 제공',
            '실시간 데이터 동기화',
            '웹훅 지원',
            '상세 API 문서',
            '다국어 SDK',
            '보안 인증'
          ],
          'product.api.benefits': [
            {
              title: '개발 효율성',
              description: '개발 시간 70% 단축'
            },
            {
              title: '시스템 안정성',
              description: '99.9% 가동률 보장'
            },
            {
              title: '확장성',
              description: '무제한 API 호출'
            }
          ],
          product: {
            features: {
              title: '주요 기능',
              description: '다양한 기능으로 약국 운영을 지원합니다'
            },
            benefits: {
              quick: {
                title: '빠른 설치',
                description: '최소한의 설정으로 바로 사용 가능'
              },
              stable: {
                title: '안정적인 운영',
                description: '24시간 안정적인 서비스 제공'
              },
              support: {
                title: '전문가 지원',
                description: '전문 기술팀의 24시간 지원'
              }
            }
          },
          // 배너
          'banner.ai.alt': 'AI 기술',
          'banner.ai.title': '약국 운영을 혁신하는 AI 솔루션',
          'banner.data.alt': '데이터 분석',
          'banner.data.title': '데이터 기반 약국 관리의 새로운 패러다임',
          'banner.automation.alt': '자동화 기술',
          'banner.automation.title': '약국 업무 자동화로 시간과 비용 절약',
          'banner.prev': '이전 슬라이드',
          'banner.next': '다음 슬라이드',
          'banner.slide': '슬라이드 {{number}}',
          // Solutions
          'solutions.title': '솔루션',
          'solutions.subtitle': '약국 운영을 최적화하는 마이팜의 혁신적인 솔루션',
          'solutions.description': '마이팜는 약국 운영의 모든 측면을 혁신하는 다양한 솔루션을 제공합니다. AI 기술과 자동화를 통해 약사님들의 업무 효율성을 높이고, 환자들에게 더 나은 서비스를 제공할 수 있도록 지원합니다.',
          
          'solutions.core.title': '핵심 솔루션',
          'solutions.core.description': '약국 운영의 기본이 되는 핵심 솔루션',
          'solutions.core.items': [
            {
              title: 'AI 처방전 분석',
              description: '인공지능으로 처방전을 분석하여 약사 업무 효율성 향상'
            },
            {
              title: '재고 관리 시스템',
              description: '실시간 재고 모니터링과 자동 발주 시스템'
            },
            {
              title: '매출 분석 대시보드',
              description: '데이터 기반의 경영 의사결정 지원'
            }
          ],
          
          'solutions.automation.title': '자동화 솔루션',
          'solutions.automation.description': '반복적인 업무를 자동화하여 효율성 극대화',
          'solutions.automation.items': [
            {
              title: '가루약 자동 분배기',
              description: '정확하고 효율적인 가루약 처방 자동화'
            },
            {
              title: '자동 청구 시스템',
              description: '보험 청구 업무 자동화로 시간 절약'
            },
            {
              title: '복약 알림 서비스',
              description: '환자 맞춤형 복약 관리 시스템'
            }
          ],
          
          'solutions.data.title': '데이터 솔루션',
          'solutions.data.description': '데이터 기반의 스마트한 약국 운영',
          'solutions.data.items': [
            {
              title: '고객 데이터 분석',
              description: '고객 행동 패턴 분석으로 맞춤형 서비스 제공'
            },
            {
              title: '매출 예측 시스템',
              description: 'AI 기반 매출 트렌드 예측'
            },
            {
              title: '경영 인사이트',
              description: '데이터 기반의 경영 의사결정 지원'
            }
          ],
          
          'solutions.marketing.title': '마케팅 솔루션',
          'solutions.marketing.description': '효과적인 약국 마케팅을 위한 도구',
          'solutions.marketing.items': [
            {
              title: '고객 관리 시스템',
              description: '고객 데이터 기반의 맞춤형 마케팅'
            },
            {
              title: '프로모션 관리',
              description: '효과적인 프로모션 캠페인 운영'
            },
            {
              title: '온라인 마케팅',
              description: '디지털 채널을 통한 마케팅 자동화'
            }
          ],
          
          'solutions.developer.title': '개발자 솔루션',
          'solutions.developer.description': '약국 시스템 개발을 위한 도구',
          'solutions.developer.items': [
            {
              title: 'API 서비스',
              description: '안전하고 강력한 API 제공'
            },
            {
              title: '개발자 포털',
              description: '개발자를 위한 종합 지원 시스템'
            },
            {
              title: '통합 개발 도구',
              description: '효율적인 시스템 개발을 위한 도구'
            }
          ],
        }
      },
      en: {
        translation: {
          // Common
          'site.name': 'MaiPharm',
          'site.description': 'AI-based Smart Pharmacy Management System',
          'site.keywords': 'pharmacy management, AI pharmacy, smart pharmacy, prescription management, pharmacy automation, pharmacy POS, inventory management, sales management, data analysis, pharmacy operation system',
          
          // Navigation
          'nav.home': 'Home',
          'nav.products': 'Products',
          'nav.about': 'About',
          'nav.contact': 'Contact',
          'nav.blog': 'Blog',
          
          // Homepage
          'home.title': 'Creating the Future of Pharmacy Management',
          'home.subtitle': 'MaiPharm provides an integrated platform that revolutionizes pharmacy operations using AI and automation technology',
          'home.ai.title': 'Optimize Pharmacy Operations with AI',
          'home.ai.description': 'MaiPharm automates and optimizes all aspects of pharmacy operations, allowing pharmacists to focus on their core duties. Manage everything from prescription management to inventory automation and sales analysis in one place.',
          'home.ai.button': 'Learn More',
          
          'home.features.title': 'Key Features',
          'home.features.subtitle': 'Supporting pharmacy operations with various features',
          'home.features.ai.title': 'AI Operation Automation',
          'home.features.ai.description': 'Save time by automating routine pharmacy tasks with artificial intelligence',
          'home.features.data.title': 'Integrated Data Management',
          'home.features.data.description': 'Efficiently manage medications, customers, and prescription information in one system',
          'home.features.insight.title': 'Business Insights',
          'home.features.insight.description': 'Provide insights needed for pharmacy management through real-time data analysis',
          'home.features.security.title': 'Security & Compliance',
          'home.features.security.description': 'Provide a robust security system for medical data security and regulatory compliance',
          
          'home.solutions.title': 'Solutions',
          'home.solutions.subtitle': 'MaiPharm\'s innovative solutions for optimizing pharmacy operations',
          'home.solutions.button': 'View All Solutions',
          
          'home.news.title': 'Latest News',
          'home.news.subtitle': 'Check out the latest news from MaiPharm',
          
          // Product Description
          'product.crm.name': 'Customer Management System - MaiPharm CRM',
          'product.crm.category': 'Customer Management',
          'product.crm.description': 'Smart CRM system that analyzes customer data and provides personalized services',
          'product.crm.longDescription': `MaiPharm CRM is an AI-based system that revolutionizes customer management in pharmacies.
          It analyzes customer purchase history, medication information, and health status comprehensively
          to suggest personalized services and marketing strategies.
          
          It collects and analyzes customer feedback in real-time
          to continuously improve service quality
          and provides various features to enhance customer satisfaction.
          
          The intuitive interface makes it easy to manage customer information
          and supports data-driven decision making.`,
          'product.crm.features': [
            'Integrated Customer Data Management',
            'AI-based Customer Analysis',
            'Personalized Marketing Automation',
            'Real-time Feedback Analysis',
            'Customer History Management',
            'Automatic Report Generation'
          ],
          'product.crm.benefits': [
            {
              title: 'Enhanced Customer Satisfaction',
              description: '40% increase in customer satisfaction'
            },
            {
              title: 'Increased Revenue',
              description: '50% increase in return rate'
            },
            {
              title: 'Work Efficiency',
              description: '60% reduction in customer management time'
            }
          ],
          
          // Buttons
          'button.learnMore': 'Learn More',
          'button.contact': 'Contact Us',
          'button.tryNow': 'Try Free',
          'button.back': 'Back',

          // Customer Service
          'customer.title': 'Customer Service',
          'customer.subtitle': 'Leave your inquiries and we will respond quickly',
          'customer.support.title': 'Customer Support Guide',
          'customer.support.description': 'If you have any questions about MaiPharm solutions and services, please contact us using the information below. Our technical support team will respond promptly during business hours (09:00-18:00 on weekdays).',
          'customer.support.phone': 'Technical Support Hotline',
          'customer.support.email': 'Email Support',
          'customer.support.portal': 'Online Support Portal (Coming Soon)',
          
          'customer.inquiry.title': 'Contact Us',
          'customer.inquiry.name': 'Name',
          'customer.inquiry.email': 'Email',
          'customer.inquiry.type': 'Inquiry Type',
          'customer.inquiry.type.general': 'General Inquiry',
          'customer.inquiry.type.technical': 'Technical Support',
          'customer.inquiry.type.partnership': 'Partnership',
          'customer.inquiry.type.other': 'Other',
          'customer.inquiry.message': 'Message',
          'customer.inquiry.submit': 'Submit',
          'customer.inquiry.sending': 'Sending...',
          'customer.inquiry.success': 'Your inquiry has been sent successfully.',
          'customer.inquiry.error': 'An error occurred while sending your inquiry. Please try again later.',
          
          'customer.faq.title': 'Frequently Asked Questions',
          'customer.faq.q1': 'Which pharmacies are suitable for PharmSquare solutions?',
          'customer.faq.a1': 'We provide customized solutions for pharmacies of all sizes. From small independent pharmacies to large chain pharmacies, our solutions are scalable to meet your specific needs.',
          'customer.faq.q2': 'Can it be integrated with existing pharmacy systems?',
          'customer.faq.a2': 'Yes, it can. PharmSquare can be easily integrated with existing pharmacy systems through our open API. Our technical team will assist you with a smooth migration process.',
          'customer.faq.q3': 'How is data security ensured?',
          'customer.faq.a3': 'PharmSquare implements strict security protocols compliant with privacy laws. We protect customer data through 256-bit encryption, multi-factor authentication, and regular security audits.',
          'customer.faq.q4': 'What are the subscription costs?',
          'customer.faq.a4': 'We offer various subscription plans, with costs varying based on pharmacy size and required features. Basic plans start at 33,000 KRW per month. Please contact our sales team for detailed pricing information.',
          'customer.faq.q5': 'Is system usage training provided?',
          'customer.faq.a5': 'All subscription plans include initial system setup and basic usage training. We also offer advanced training and customized training sessions, and you can learn through online training materials at any time.',
          
          'customer.visit.title': 'Visit Consultation',
          'customer.visit.address': '204 Gongdan 1-daero, 32-dong 306-ho, Siheung-si, Gyeonggi-do',
          'customer.visit.hours': 'Weekdays 09:00 - 18:00 (By appointment)',
          
          'customer.docs.title': 'Technical Documentation',
          'customer.docs.description': 'User guides, API documentation, and video tutorials',
          'customer.docs.status': 'Coming Soon',
          
          'customer.chat.title': 'Online Chat Support',
          'customer.chat.description': 'Real-time chat consultation for quick problem resolution',
          'customer.chat.status': 'Coming Soon',

          // Products Page
          'products.title': 'Solutions',
          'products.subtitle': 'MaiPharm\'s innovative solutions for optimizing pharmacy operations',
          'products.filter.title': 'Solution Categories',
          'products.filter.all': 'All',
          'products.filter.core': 'Core Solutions',
          'products.filter.automation': 'Automation Solutions',
          'products.filter.data': 'Data Solutions',
          'products.filter.marketing': 'Marketing Solutions',
          'products.filter.developer': 'Developer Solutions',
          'products.empty': 'No solutions found in this category.',

          // Category translations
          'category.core': 'Core Solutions',
          'category.automation': 'Automation Solutions',
          'category.data': 'Data Solutions',
          'category.marketing': 'Marketing Solutions',
          'category.developer': 'Developer Solutions',

          // Product List
          'products.list.core.1.name': 'AI Pharmacy Management System - PharmSquare',
          'products.list.core.1.description': 'An all-in-one platform that optimizes pharmacy operations with artificial intelligence',
          
          'products.list.automation.1.name': 'Powder Medicine Dispenser - MediMix',
          'products.list.automation.1.description': 'Automated device for dispensing powdered medicines',
          
          'products.list.core.2.name': 'AI Medication Agent',
          'products.list.core.2.description': 'AI agent that analyzes prescription content and hospital information to suggest optimal medication guidance',
          
          'products.list.data.1.name': 'Management Dashboard',
          'products.list.data.1.description': 'Dashboard for viewing pharmacy sales, inventory, and prescription data at a glance',
          
          'products.list.automation.2.name': 'Automated Billing System',
          'products.list.automation.2.description': 'Solution that reduces time and errors by automating insurance billing tasks',
          
          'products.list.marketing.1.name': 'Customer Relationship Management',
          'products.list.marketing.1.description': 'CRM solution for managing patient data and providing personalized services',
          
          'products.list.marketing.2.name': 'Digital Marketing Tools',
          'products.list.marketing.2.description': 'Digital tools and automated campaign management for pharmacy marketing',
          
          'products.list.developer.1.name': 'PharmSquare API',
          'products.list.developer.1.description': 'API and developer tools for integration with external systems',

          // About Page
          'about.title': 'About Us',
          'about.subtitle': 'MaiPharm provides an AI-based smart pharmacy management system that leads innovation in pharmacy operations',
          'about.intro.title': 'About MaiPharm',
          'about.intro.description1': 'MaiPharm is a digital healthcare company developing AI-based healthcare solutions for both pharmacists and patients, centered around pharmacy field data.',
          'about.intro.description2': 'Through our pharmacy automation hardware \'MediMix\' and software \'PharmSquare\' for medication guidance and management support, we reduce pharmacists\' workload and provide more accurate and personalized medication information to patients.',
          'about.intro.description3': 'Beyond simple technology provision, MaiPharm is expanding into a healthcare platform based on pharmacy data. Through AI technology and precise analysis, we comprehensively evaluate prescription history, patient status, and medication adherence possibilities to realize personalized healthcare.',
          'about.intro.description4': 'We believe that technology can enhance pharmacists\' expertise and provide patients with a warmer medication experience.',
          'about.intro.description5': 'By 2030, we aim to lead the global pharmacy management solution market and grow into a company that drives digital healthcare innovation centered around pharmacies.',

          'about.mission.title': 'Corporate Mission',
          'about.mission.description': 'We connect and analyze pharmacy field data to provide pharmacists with more accurate and efficient work environments, and patients with safer and warmer medication experiences. Beyond technology, we will become a healthcare partner that creates healthy daily lives together.',

          'about.vision.title': 'Vision',
          'about.vision.description': 'By 2030, we aim to build an integrated healthcare platform based on pharmacy data and lead the global pharmacy management solution market. By transforming pharmacies into key hubs for patient-centered care through our AI and data analysis capabilities, we will become a leader in digital innovation in the healthcare industry.',

          'about.values.title': 'Core Values',
          'about.values.innovation.title': 'Innovation',
          'about.values.innovation.description': 'Creating the future of pharmacy operations through continuous technological innovation',
          'about.values.customer.title': 'Customer-Centric',
          'about.values.customer.description': 'Prioritizing the needs of pharmacists and patients',
          'about.values.data.title': 'Data-Driven',
          'about.values.data.description': 'Supporting decision-making through scientific data analysis',
          'about.values.trust.title': 'Reliability',
          'about.values.trust.description': 'Providing stable and trustworthy services',

          'about.history.title': 'History',
          'about.history.2025.title': 'Selected for Startup Success Package by the Korea SMEs and Startups Agency',
          'about.history.2025.description': 'Started PharmSquare enhancement and additional hardware development',
          'about.history.2024_1.title': 'PharmSquare Beta Service Launch',
          'about.history.2024_1.description': 'Service introduced to 4 domestic pharmacies',
          'about.history.2024_2.title': 'Selected for the Pre-Startup Package by the Korea Institute of Startup and Entrepreneurship Development',
          'about.history.2024_2.description': 'Initial funding for business startup',
          'about.history.2024_3.title': 'MaiPharm Corporation Established',
          'about.history.2024_3.description': 'Startup launch for pharmacy management innovation',

          'about.tech.title': 'Core Technologies',
          'about.tech.ai.title': 'AI Prescription Analysis',
          'about.tech.ai.description': 'Deep learning-based prescription analysis for drug interaction testing and dispensing efficiency',
          'about.tech.inventory.title': 'Predictive Inventory Management',
          'about.tech.inventory.description': 'Machine learning-based drug demand prediction and automatic ordering system',
          'about.tech.data.title': 'Big Data Analysis',
          'about.tech.data.description': 'Providing business insights and decision support through pharmacy operation data analysis',

          'about.achievements.title': 'Achievements',
          'about.achievements.pharmacies': 'Pharmacies Using Our Service',
          'about.achievements.efficiency': 'Work Efficiency Improvement',
          'about.achievements.cost': 'Inventory Management Cost Reduction',
          'about.achievements.prescriptions': 'Processed Prescription Data',

          // Current page translations
          'current.title': 'Current Page',
          'current.subtitle': 'Description of the current page',
          'current.content': 'This is the content of the current page.',
          'current.button': 'Learn More',

          //footer
          'footer.address': '204 Gongdan 1-daero, 32-dong 306-ho, Siheung-si, Gyeonggi-do',
          'footer.phone': '(82) 10-8588-8999',
          'footer.email': 'kjh@maipharm.com',
          'footer.copyright': 'Copyright 2025 MaiPharm. All rights reserved.',

          // Product Detail Page Translations
          'product.pharmsquare.name': 'AI Pharmacy Management System - PharmSquare',
          'product.pharmsquare.category': 'Core Solution',
          'product.pharmsquare.description': 'An all-in-one platform that optimizes pharmacy operations with artificial intelligence',
          'product.pharmsquare.longDescription': `PharmSquare is an all-in-one platform that optimizes all aspects of pharmacy operations with artificial intelligence.
          It provides all the necessary functions for pharmacy operations in one system, including prescription analysis, inventory management, sales analysis, and customer management.
          
          The AI-based intelligent prescription analysis system automatically analyzes prescriptions to help pharmacists quickly and accurately verify prescriptions.
          The inventory management system monitors inventory in real-time and supports automatic ordering of medications when needed.
          
          The sales analysis system analyzes pharmacy sales data to provide insights for profitability improvement,
          and the customer management system manages customer purchase history and medication information to provide personalized services.`,
          'product.pharmsquare.features': [
            'AI-based Prescription Analysis',
            'Real-time Inventory Management',
            'Sales Analysis and Prediction',
            'Customer Management System',
            'Medication Reminder Service',
            'Mobile App Support'
          ],
          'product.pharmsquare.benefits': [
            {
              title: 'Improved Work Efficiency',
              description: '30% reduction in pharmacist work time through AI-based automation'
            },
            {
              title: 'Enhanced Accuracy',
              description: '99.9% reduction in prescription errors'
            },
            {
              title: 'Increased Customer Satisfaction',
              description: '40% improvement in customer satisfaction through personalized services'
            }
          ],
          'product.medimix.name': 'Powder Medicine Dispenser - MediMix',
          'product.medimix.category': 'Automation Equipment',
          'product.medimix.description': 'Automated system for accurate and efficient powder medicine dispensing',
          'product.medimix.longDescription': `MediMix is a cutting-edge system that automates powder medicine prescriptions in pharmacies.
          It increases pharmacists' work efficiency and minimizes prescription errors through precise measurement and dispensing.
          
          Using advanced sensors and AI technology, it automatically selects the optimal dispensing method for each medication's characteristics.
          The real-time monitoring system tracks the dispensing process and immediately detects any anomalies.
          
          With a user-friendly interface, it's easy to operate,
          and provides a flexible system that can handle prescriptions of various volumes.`,
          'product.medimix.features': [
            'Precision Measurement System',
            'AI-based Optimal Dispensing',
            'Real-time Monitoring',
            'Multi-volume Support',
            'Automatic Cleaning Function',
            'Data Backup System'
          ],
          'product.medimix.benefits': [
            {
              title: 'Enhanced Prescription Accuracy',
              description: '99.99% accuracy in powder medicine dispensing'
            },
            {
              title: 'Reduced Work Time',
              description: '70% reduction in powder medicine prescription time'
            },
            {
              title: 'Improved Safety',
              description: '95% reduction in prescription errors'
            }
          ],
          'product.psinsight.name': 'AI Medication Guide Generator - PharmSquare Insight',
          'product.psinsight.category': 'Core Solution',
          'product.psinsight.description': 'Smart solution that automatically generates personalized medication guides using artificial intelligence',
          'product.psinsight.longDescription': `PharmSquare Insight is an AI-based solution that automatically generates personalized medication guides by analyzing patient prescription information.
          It provides optimized medication guidance for individual patients by combining pharmacists' expertise with AI technology.
          
          It automatically analyzes drug interactions, side effects, and administration times
          to generate medication guides in an easy-to-understand format for patients.
          
          It includes personalized precautions considering the patient's age, gender, and underlying conditions
          to support safe and effective medication use.`,
          'product.psinsight.features': [
            'AI-based Automatic Guide Generation',
            'Drug Interaction Analysis',
            'Personalized Precautions',
            'Multi-language Support',
            'Mobile App Integration',
            'Medication History Management'
          ],
          'product.psinsight.benefits': [
            {
              title: 'Improved Work Efficiency',
              description: '80% reduction in medication guide creation time'
            },
            {
              title: 'Enhanced Accuracy',
              description: '90% reduction in medication errors'
            },
            {
              title: 'Increased Patient Satisfaction',
              description: '60% improvement in patient understanding'
            }
          ],
          'product.dashboard.name': 'AI Management Dashboard - MaiPharm Dashboard',
          'product.dashboard.category': 'Business Analytics',
          'product.dashboard.description': 'Smart dashboard that analyzes pharmacy management data in real-time and provides insights',
          'product.dashboard.longDescription': `MaiPharm Dashboard is an AI-based business analytics system that analyzes and visualizes all pharmacy management data in real-time.
          It provides a comprehensive view of key performance indicators needed for pharmacy operations by integrating sales, inventory, and customer data.
          
          The AI algorithm predicts sales trends and suggests inventory optimization strategies.
          It also analyzes customer purchase patterns to help develop personalized marketing strategies.
          
          With an intuitive interface, anyone can easily analyze data,
          and business status can be checked in real-time on mobile devices.`,
          'product.dashboard.features': [
            'Real-time Sales Analysis',
            'AI-based Predictive Analysis',
            'Inventory Optimization Recommendations',
            'Customer Behavior Analysis',
            'Custom Report Generation',
            'Mobile Dashboard'
          ],
          'product.dashboard.benefits': [
            {
              title: 'Improved Profitability',
              description: '25% increase in sales through AI-based optimization'
            },
            {
              title: 'Better Decision Making',
              description: '40% improvement in operational efficiency through data-driven decisions'
            },
            {
              title: 'Increased Customer Satisfaction',
              description: '35% increase in customer return rate through personalized services'
            }
          ],
          'product.autocg.name': 'Automated Billing System - AutoCG',
          'product.autocg.category': 'Billing Management',
          'product.autocg.description': 'Smart system that automates and efficiently manages health insurance billing',
          'product.autocg.longDescription': `AutoCG is a cutting-edge system that fully automates health insurance billing operations in pharmacies.
          It automatically generates accurate billing information by analyzing prescription data in real-time
          and suggests optimal billing methods according to insurance review criteria.
          
          Using AI technology, it detects billing errors in advance
          and supports efficient billing management through real-time monitoring of billing status.
          
          The intuitive dashboard provides a clear view of billing status,
          and the system can flexibly respond to various insurance review criteria.`,
          'product.autocg.features': [
            'Real-time Billing Data Analysis',
            'AI-based Error Detection',
            'Automatic Bill Generation',
            'Insurance Review Criteria Optimization',
            'Real-time Monitoring',
            'Custom Report Generation'
          ],
          'product.autocg.benefits': [
            {
              title: 'Enhanced Billing Accuracy',
              description: '90% reduction in billing errors'
            },
            {
              title: 'Increased Work Efficiency',
              description: '80% reduction in billing work time'
            },
            {
              title: 'Improved Profitability',
              description: '30% increase in billing revenue'
            }
          ],
          'product.marketing.name': 'Marketing Automation System - MaiPharm Marketing',
          'product.marketing.category': 'Marketing',
          'product.marketing.description': 'Smart system that automates data-driven personalized marketing',
          'product.marketing.longDescription': `MaiPharm Marketing is an AI-based system that revolutionizes pharmacy marketing activities.
          It analyzes customer data and market trends to establish optimal marketing strategies
          and executes automated campaigns.
          
          It analyzes and optimizes marketing performance in real-time
          to support efficient marketing budget usage
          and provides personalized promotions for each customer segment.
          
          It manages various channels integrally to deliver consistent brand messages
          and maximizes marketing ROI.`,
          'product.marketing.features': [
            'AI-based Marketing Strategy',
            'Automated Campaign Management',
            'Real-time Performance Analysis',
            'Customer Segment Management',
            'Multi-channel Integration',
            'Personalized Promotions'
          ],
          'product.marketing.benefits': [
            {
              title: 'Marketing Efficiency',
              description: '35% reduction in marketing costs'
            },
            {
              title: 'Customer Engagement',
              description: '45% increase in customer engagement'
            },
            {
              title: 'Revenue Growth',
              description: '55% increase in promotion revenue'
            }
          ],
          'product.api.name': 'Developer API - MaiPharm API',
          'product.api.category': 'Developer Tools',
          'product.api.description': 'Secure and powerful API service for pharmacy systems',
          'product.api.longDescription': `MaiPharm API is a powerful API service for pharmacy system development.
          It provides secure access to pharmacy data through RESTful API
          and enables utilization of various features.
          
          It supports real-time data synchronization and webhooks
          for efficient system integration
          and provides detailed documentation and SDKs.
          
          With high security and stability,
          it is optimized for enterprise application development.`,
          'product.api.features': [
            'RESTful API',
            'Real-time Data Sync',
            'Webhook Support',
            'Detailed API Documentation',
            'Multi-language SDKs',
            'Security Authentication'
          ],
          'product.api.benefits': [
            {
              title: 'Development Efficiency',
              description: '70% reduction in development time'
            },
            {
              title: 'System Stability',
              description: '99.9% uptime guarantee'
            },
            {
              title: 'Scalability',
              description: 'Unlimited API calls'
            }
          ],
          product: {
            features: {
              title: 'Key Features',
              description: 'Supporting pharmacy operations with various features'
            },
            benefits: {
              quick: {
                title: 'Quick Installation',
                description: 'Ready to use with minimal setup'
              },
              stable: {
                title: 'Stable Operation',
                description: '24/7 stable service provision'
              },
              support: {
                title: 'Expert Support',
                description: '24/7 support from technical experts'
              }
            }
          },

          // 배너
          'banner.ai.alt': 'AI Technology',
          'banner.ai.title': 'AI Solutions Revolutionizing Pharmacy Operations',
          'banner.data.alt': 'Data Analysis',
          'banner.data.title': 'New Paradigm in Data-Driven Pharmacy Management',
          'banner.automation.alt': 'Automation Technology',
          'banner.automation.title': 'Save Time and Costs with Pharmacy Work Automation',
          'banner.prev': 'Previous Slide',
          'banner.next': 'Next Slide',
          'banner.slide': 'Slide {{number}}',
        // Solutions
        'solutions.title': 'Solutions',
        'solutions.subtitle': 'MaiPharm\'s Innovative Solutions for Optimizing Pharmacy Operations',
        'solutions.description': 'MaiPharm provides various solutions that revolutionize all aspects of pharmacy operations. Through AI technology and automation, we help pharmacists improve work efficiency and provide better services to patients.',
        
        'solutions.core.title': 'Core Solutions',
        'solutions.core.description': 'Essential solutions for pharmacy operations',
        'solutions.core.items': [
          {
            title: 'AI Prescription Analysis',
            description: 'Enhance pharmacist efficiency through AI-powered prescription analysis'
          },
          {
            title: 'Inventory Management System',
            description: 'Real-time inventory monitoring and automatic ordering system'
          },
          {
            title: 'Revenue Analysis Dashboard',
            description: 'Data-driven business decision support'
          }
        ],
        
        'solutions.automation.title': 'Automation Solutions',
        'solutions.automation.description': 'Maximize efficiency through task automation',
        'solutions.automation.items': [
          {
            title: 'Powder Medicine Dispenser',
            description: 'Accurate and efficient automation of powder medicine prescriptions'
          },
          {
            title: 'Automated Billing System',
            description: 'Save time through automated insurance claim processing'
          },
          {
            title: 'Medication Reminder Service',
            description: 'Patient-customized medication management system'
          }
        ],
        
        'solutions.data.title': 'Data Solutions',
        'solutions.data.description': 'Smart pharmacy operations based on data',
        'solutions.data.items': [
          {
            title: 'Customer Data Analysis',
            description: 'Provide customized services through customer behavior pattern analysis'
          },
          {
            title: 'Revenue Prediction System',
            description: 'AI-based revenue trend prediction'
          },
          {
            title: 'Business Insights',
            description: 'Data-driven business decision support'
          }
        ],
        
        'solutions.marketing.title': 'Marketing Solutions',
        'solutions.marketing.description': 'Tools for effective pharmacy marketing',
        'solutions.marketing.items': [
          {
            title: 'Customer Management System',
            description: 'Customized marketing based on customer data'
          },
          {
            title: 'Promotion Management',
            description: 'Effective promotion campaign management'
          },
          {
            title: 'Online Marketing',
            description: 'Marketing automation through digital channels'
          }
        ],
        
        'solutions.developer.title': 'Developer Solutions',
        'solutions.developer.description': 'Tools for pharmacy system development',
        'solutions.developer.items': [
          {
            title: 'API Service',
            description: 'Secure and powerful API provision'
          },
          {
            title: 'Developer Portal',
            description: 'Comprehensive support system for developers'
          },
          {
            title: 'Integrated Development Tools',
            description: 'Tools for efficient system development'
          }
        ],
        }
      }
    },
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 