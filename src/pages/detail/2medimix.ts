import { ProductPage } from "../ProductDetail";

export const product2:ProductPage = {
  id: 2,
  name: '가루약 자동토출기 - 메디믹스',
  category: '자동화 장비',
  description: '정확하고 효율적인 가루약 분배를 위한 자동화 시스템',
  longDescription: `메디믹스는 약국에서 가루약 처방을 자동화하는 최첨단 시스템입니다.
  정밀한 계량과 분배를 통해 약사들의 업무 효율성을 높이고, 처방 오류를 최소화합니다.
  
  고급 센서와 AI 기술을 활용하여 각 약품의 특성에 맞는 최적의 분배 방식을 자동으로 선택합니다.
  또한 실시간 모니터링 시스템을 통해 분배 과정을 추적하고, 이상 징후를 즉시 감지합니다.
  
  사용자 친화적인 인터페이스로 쉽게 조작할 수 있으며,
  다양한 용량의 처방에 대응할 수 있는 유연한 시스템을 제공합니다.`,
  image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop',
  features: [
    '정밀 계량 시스템',
    'AI 기반 최적 분배',
    '실시간 모니터링',
    '다양한 용량 대응',
    '자동 세척 기능',
    '데이터 백업 시스템'
  ],
  benefits: [
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
  ]
};
