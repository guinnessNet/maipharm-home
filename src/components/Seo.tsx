import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCopy } from './BrandUI';
import { getCompanyFaq, getCustomerFaq, getNdsdFaq } from '../content/faq';
import { buildStructuredData } from '../lib/structuredData';
export default function Seo() {
  const {pathname: rawPath}=useLocation(); const pathname=rawPath === "/" ? "/" : rawPath.replace(/\/+$/, ""); const {t,i18n}=useTranslation(); const c=useCopy();
  const keys=['pharmsquare','medimix','psinsight','dashboard','autocg','crm','marketing','api'];
  const id=Number(pathname.split('/')[2]);
  const productKey=keys[id-1]; const isNdsd=pathname==='/products/ndsd';
  const name=pathname==='/about' ? c('회사소개','Company') : pathname==='/customer' ? t('customer.title') : pathname==='/products' ? t('products.title') : isNdsd ? c('NDSD 업로드 모듈','NDSD upload module') : productKey ? t(`product.${productKey}.name`) : c('약사의 시간을 환자에게','More time for patient care');
  const description=pathname==='/customer' ? t('customer.subtitle') : pathname==='/products' ? t('products.subtitle') : productKey ? t(`product.${productKey}.description`) : isNdsd ? c('대체조제 사후통보의 전송과 확인을 돕는 Windows 모듈 기능과 연동 조건을 확인하세요','A Windows module for substitution reporting uploads and verification Check features and integration requirements') : c('약사가 이끄는 마이팜은 약국 현장의 반복 업무를 살피고 AI와 자동화 기술로 풀어갑니다','Led by a pharmacist MaiPharm develops AI and automation for everyday pharmacy work');
  const canonical=`https://maipharm.com${pathname==='/' ? '/' : pathname.replace(/\/$/,'')}`; const title=`${name} | ${c('마이팜','MaiPharm')}`; const image='https://maipharm.com/img/og-maipharm.png'; const en=i18n.resolvedLanguage?.startsWith('en');
  const faq=pathname==='/about' ? getCompanyFaq(c) : isNdsd ? getNdsdFaq(c) : pathname==='/customer' ? getCustomerFaq(t).map(f=>[f.question,f.answer]) : [];
  const productNameKeys=['core.1','automation.1','core.2','data.1','automation.2','marketing.1','marketing.2','developer.1'];
  const structuredData=buildStructuredData({pathname,name,description,language:en?'en':'ko',productNames:productNameKeys.map(key=>t(`products.list.${key}.name`)),faq,category:productKey?t(`product.${productKey}.category`):undefined});
  return <Helmet><html lang={en?'en':'ko'} /><title>{title}</title><meta name="description" content={description}/><meta name="robots" content="index, follow, max-image-preview:large"/><link rel="canonical" href={canonical}/><link rel="alternate" hrefLang="ko" href={canonical}/><link rel="alternate" hrefLang="en" href={`${canonical}?lang=en`}/><link rel="alternate" hrefLang="x-default" href={canonical}/><meta property="og:type" content="website"/><meta property="og:url" content={canonical}/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:image" content={image}/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:site_name" content="MaiPharm"/><meta property="og:locale" content={en?'en_US':'ko_KR'}/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={image}/>{structuredData.map((schema,index)=><script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>)}</Helmet>;
}
