import { ProductPage } from "../ProductDetail";

export const product3:ProductPage = {
  id: 3,
  name: 'AI 복약지도 생성기 - 팜스퀘어 인사이트',
  category: '핵심 솔루션',
  description: '인공지능으로 맞춤형 복약지도를 자동 생성하는 스마트 솔루션',
  longDescription: `팜스퀘어 인사이트는 환자의 처방약 정보를 분석하여 맞춤형 복약지도를 자동으로 생성하는 AI 기반 솔루션입니다.
  약사의 전문 지식과 AI 기술을 결합하여 환자 개개인에게 최적화된 복약 가이드를 제공합니다.
  
  처방약의 상호작용, 부작용, 복용 시간 등을 자동으로 분석하여
  환자가 이해하기 쉬운 형태의 복약지도를 생성합니다.
  
  또한 환자의 연령, 성별, 기저질환 등을 고려한 맞춤형 주의사항을 포함하여
  안전하고 효과적인 약물 복용을 지원합니다.`,
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop',
  features: [
    'AI 기반 복약지도 자동 생성',
    '약물 상호작용 분석',
    '맞춤형 주의사항 제공',
    '다국어 지원',
    '모바일 앱 연동',
    '복약 이력 관리'
  ],
  benefits: [
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
  ]
};
