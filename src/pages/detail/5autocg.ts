import { ProductPage } from "../ProductDetail";

export const product5:ProductPage = {
  id: 5,
  name: '자동 청구 시스템 - 오토CG',
  category: '청구 관리',
  description: '건강보험 청구를 자동화하고 효율적으로 관리하는 스마트 시스템',
  longDescription: `오토CG는 약국의 건강보험 청구 업무를 완전 자동화하는 최첨단 시스템입니다.
  처방전 데이터를 실시간으로 분석하여 정확한 청구 정보를 자동으로 생성하고, 
  보험 심사 기준에 맞춰 최적의 청구 방식을 제안합니다.
  
  AI 기술을 활용하여 청구 오류를 사전에 감지하고, 
  실시간으로 청구 현황을 모니터링하여 효율적인 청구 관리를 지원합니다.
  
  직관적인 대시보드로 청구 현황을 한눈에 파악할 수 있으며,
  다양한 보험 심사 기준에 맞춰 유연하게 대응할 수 있습니다.`,
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format&fit=crop',
  features: [
    '실시간 청구 데이터 분석',
    'AI 기반 오류 감지',
    '자동 청구서 생성',
    '보험 심사 기준 최적화',
    '실시간 모니터링',
    '맞춤형 리포트 생성'
  ],
  benefits: [
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
  ]
};
