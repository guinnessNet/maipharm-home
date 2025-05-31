import { ProductPage } from "../ProductDetail";

export const product4:ProductPage = {
  id: 4,
  name: 'AI 경영 대시보드 - 마이팜 대시보드',
  category: '경영 분석',
  description: '약국 경영 데이터를 실시간으로 분석하고 인사이트를 제공하는 스마트 대시보드',
  longDescription: `마이팜 대시보드는 약국의 모든 경영 데이터를 실시간으로 분석하고 시각화하는 AI 기반 경영 분석 시스템입니다.
  매출, 재고, 고객 데이터를 통합 관리하여 약국 운영에 필요한 핵심 지표를 한눈에 파악할 수 있습니다.
  
  AI 알고리즘을 통해 매출 트렌드를 예측하고, 재고 최적화 방안을 제시합니다.
  또한 고객 구매 패턴을 분석하여 맞춤형 마케팅 전략을 수립할 수 있도록 지원합니다.
  
  직관적인 인터페이스로 누구나 쉽게 데이터를 분석할 수 있으며,
  모바일에서도 실시간으로 경영 현황을 확인할 수 있습니다.`,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
  features: [
    '실시간 매출 분석',
    'AI 기반 예측 분석',
    '재고 최적화 추천',
    '고객 행동 분석',
    '맞춤형 리포트 생성',
    '모바일 대시보드'
  ],
  benefits: [
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
  ]
};
