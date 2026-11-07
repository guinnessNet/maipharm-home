type Copy = (ko: string, en: string) => string;
export const getCompanyFaq = (c: Copy): string[][] => [
[c('Q 어디서부터 도입을 상담하면 되나요?','Q How do we start?'),c('현재 사용 중인 프로그램과 줄이고 싶은 업무를 알려주세요 필요한 기능 연동 범위 도입 조건을 함께 확인합니다','Tell us which software you use and which work you want to reduce We will review features integration scope and requirements together')],
[c('Q 모든 솔루션을 한 번에 도입해야 하나요?','Q Do we need every solution?'),c('필요한 업무와 연동 환경을 확인한 뒤 도입 범위를 정합니다 가능한 기능과 제공 범위는 상담을 통해 확인해 주세요','We determine scope after reviewing your needs and integration environment Please contact us to confirm available features and services')]
];
export const getNdsdFaq = (c: Copy): string[][] => [

      [c('Q 기존 청구 프로그램을 바꿔야 하나요?','Q Do I need to change billing software?'),c('호환 규격을 구현하면 기존 프로그램과 연결할 수 있습니다 실제 연동 지원 여부는 프로그램별로 확인이 필요합니다','Existing software can connect by implementing the compatible protocol Integration support must be checked for each program')],
      [c('Q 휴대전화나 Mac에서도 사용할 수 있나요?','Q Can I use it on a phone or Mac?'),c('현재 안내하는 배포 환경은 Windows입니다 다른 환경의 지원은 별도 문의해 주세요','The current distribution targets Windows Contact us about other environments')],
      [c('Q 도입 비용은 어떻게 정해지나요?','Q How is the cost determined?'),c('필요한 연동·설정 지원의 범위를 확인한 뒤 견적을 안내합니다 공개 코드와 라이선스는 저장소에서 확인할 수 있습니다','We quote after reviewing integration and setup support scope Public code and licensing are available in the repository')]
    
];
export const getCustomerFaq = (t: (key: string) => string) => Array.from({length:5},(_,i)=>({id:i+1,question:t(`customer.faq.q${i+1}`),answer:t(`customer.faq.a${i+1}`)}));
