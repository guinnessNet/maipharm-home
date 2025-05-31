import { ProductPage } from "../ProductDetail";

export const product8:ProductPage = {
  id: 8,
  name: '개발자 API - 팜스퀘어 API',
  category: '개발 도구',
  description: '마이팜 생태계를 확장할 수 있는 강력한 API 개발 플랫폼',
  longDescription: `팜스퀘어 API는 마이팜의 핵심 기능을 외부 개발자들이 활용할 수 있도록 제공하는 개발 플랫폼입니다.
  RESTful API와 GraphQL을 모두 지원하여 개발자들이 선호하는 방식으로 통합 개발이 가능합니다.
  
  약국 데이터, 처방 정보, 재고 관리 등 마이팜의 모든 핵심 기능에 접근할 수 있으며,
  개발자 포털을 통해 상세한 API 문서와 테스트 환경을 제공합니다.
  
  보안과 성능을 최우선으로 설계되어 있으며,
  개발자 커뮤니티를 통해 지속적인 피드백과 개선이 이루어집니다.`,
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop',
  features: [
    'RESTful API & GraphQL 지원',
    '상세한 API 문서',
    '개발자 테스트 환경',
    '실시간 모니터링',
    '보안 인증 시스템',
    '개발자 커뮤니티'
  ],
  benefits: [
    {
      title: '생태계 확장',
      description: '100개 이상의 애드온 개발 지원'
    },
    {
      title: '개발 효율성',
      description: 'API 통합 개발 시간 80% 단축'
    },
    {
      title: '안정성',
      description: '99.9% API 가용성 보장'
    }
  ]
};
