import { ProductPage } from "../ProductDetail";

export const product6 : ProductPage = {
  id: 6,
  name: '스마트 고객관리 - 마이팜 CRM',
  category: '고객관리',
  description: 'AI 기반 맞춤형 고객 관리와 마케팅을 지원하는 스마트 CRM 시스템',
  longDescription: `마이팜 CRM은 약국의 고객 관계 관리를 혁신하는 AI 기반 시스템입니다.
  고객의 구매 이력과 건강 데이터를 분석하여 맞춤형 서비스를 제공하고, 
  고객 만족도를 극대화합니다.
  
  AI 알고리즘을 통해 고객의 건강 상태와 구매 패턴을 예측하고,
  최적의 상품 추천과 마케팅 전략을 제시합니다.
  
  실시간 고객 데이터 분석으로 개인화된 서비스를 제공하며,
  모바일 앱을 통해 언제 어디서나 고객 관리가 가능합니다.`,
  image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=500&auto=format&fit=crop',
  features: [
    'AI 기반 고객 분석',
    '맞춤형 상품 추천',
    '실시간 고객 데이터 관리',
    '자동 마케팅 캠페인',
    '고객 만족도 모니터링',
    '모바일 CRM 지원'
  ],
  benefits: [
    {
      title: '고객 충성도 향상',
      description: '고객 재방문율 45% 증가'
    },
    {
      title: '매출 증대',
      description: '추천 상품 구매율 60% 증가'
    },
    {
      title: '운영 효율성',
      description: '고객 관리 시간 50% 단축'
    }
  ]
};
