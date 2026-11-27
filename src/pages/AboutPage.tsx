import ProductCard from '../components/ProductCard';
import { productImages } from '../content/productImages';
import { getCompanyFaq } from '../content/faq';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Section, useCopy } from '../components/BrandUI';

const news = [
  ['2026.04.20','2026_press_dailypharm_opensource','https://dailypharm.com/user/news/337671'],
  ['2026.02.20','2026_1',''],['2025.11.13','2025_3',''],
  ['2025.10.31','2025_press_dailypharm','https://www.dailypharm.com/user/news/782'],
  ['2025.07.29','2025_2',''],['2025.06.23','2025_1',''],['2025.03.29','2025',''],['2024.09.15','2024_1',''],['2024.04.29','2024_2','']
];
export default function AboutPage() {
  const c=useCopy(); const {t}=useTranslation(); const [allNews,setAllNews]=useState(false);
  return <div className="company-hub">
    <section className="brand-section mist hub-hero"><p className="section-label">ABOUT MAIPHARM</p><h1>{c('약국의 일에서 출발해','Starting with pharmacy work')}<br />{c('약료의 가능성을','Expanding the possibilities')}<br className="mobile-break" />{c(' 넓힙니다',' of care')}</h1><p className="hero-description">{c('약사가 이끄는 마이팜은 약국 현장의 반복 업무를 살피고 AI와 자동화 기술로 풀어갑니다','Led by a pharmacist MaiPharm studies repetitive work in pharmacies and develops AI and automation to help')}</p><Button to="/about#people">{c('마이팜 이야기','Our story')}</Button><img className="pharmacy-photo" src="/img/brand/pharmacy-field.png" width="1600" height="1164" alt={c('약병과 실험 기구를 담은 약국 현장 이미지','Illustrative pharmacy glassware')} /><p className="photo-caption">{c('약국 업무를 이해하는 기술 현장에서 시작합니다','Technology that understands pharmacy work starts in the field')}</p></section>
    <Section label="01 / FIELD" title={<>{c('반복되는 절차 사이','Between repetitive procedures')}<br />{c('환자를 위한 시간을 찾습니다','Finding time for patients')}</>}><div className="brand-columns">{[
      [c('01   기록과 확인','01   Records and checks'),c('여러 화면을 오가며 같은 정보를 다시 확인하는 일','Checking the same information across different screens')],
      [c('02   운영과 관리','02   Operations'),c('조제·재고·경영 데이터를 따로 살펴야 하는 일','Reviewing dispensing inventory and management data separately')],
      [c('03   변화와 연결','03   Change and connection'),c('새로운 제도와 시스템에 현장의 흐름을 맞추는 일','Adapting everyday work to new policies and systems')]
    ].map(([title,desc])=><article className="ruled" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></Section>
    <Section label="02 / SOLUTIONS" tone="mist" id="solutions" title={<>{c('필요한 곳부터','Where it is needed')}<br />{c('현장에 맞게 연결합니다','Connected to your practice')}</>}>
      <div className="hub-solutions-grid product-grid grid auto-rows-fr grid-cols-1 sm:grid-cols-3 gap-8">
        <ProductCard id={1} name={c('팜스퀘어','PharmSquare')} category={c('약국 관리','Pharmacy management')} image={productImages['1']} description={c('약국 운영 전반을 연결하는 AI 약국 관리 플랫폼','An AI platform connecting everyday pharmacy operations')} />
        <ProductCard id={2} name={c('메디믹스','MediMix')} category={c('조제 자동화','Dispensing automation')} image={productImages['2']} description={c('가루약을 자동으로 정량 토출하는 조제 기기','A dispensing device for measured medicine powder portions')} />
        <ProductCard id="ndsd" name="NDSD" category={c('대체조제 사후통보','Substitution reporting')} image={productImages.ndsd} description={c('사후통보 데이터의 업로드와 결과 확인을 돕는 Windows 모듈','A Windows module for uploading reports and checking results')} />
      </div>
      <Link className="brand-text-link hub-solutions-all" to="/products">{c('전체보기','View all solutions')}</Link>
    </Section>
    <Section label="03 / PROGRESS" id="news" title={c('말보다 공개된 기록으로','A public record of our work')}><div className="news-list" id="company-news-list">{news.slice(0,allNews ? news.length : 3).map(([date,key,url])=><article key={key} className="news-item"><time dateTime={date.replace(/\./g,'-')}>{date}</time><h3>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{!allNews && key==='2026_press_dailypharm_opensource' ? c('NDSD 오픈소스 프로그램 소개 · 데일리팜','NDSD open source program · DailyPharm') : t(`about.history.${key}.title`)}</a> : !allNews && key==='2026_1' ? c('Dalpha 서비스 양수도 계약','Dalpha service transfer agreement') : !allNews && key==='2025_3' ? c('마이팜 수상 소식','MaiPharm award news') : t(`about.history.${key}.title`)}</h3>{allNews && <p>{t(`about.history.${key}.description`)}</p>}</article>)}</div><button className="brand-text-link" onClick={()=>setAllNews(!allNews)} aria-expanded={allNews} aria-controls="company-news-list">{allNews ? c('소식 접기','Show less') : c('모든 소식 보기','All news')} {allNews ? '−' : '+'}</button></Section>
    <Section label="04 / PEOPLE & HISTORY" tone="mist people-section" id="people" title={<><span className="people-title-part">{c('현장에서 익히고','Learn in practice')}</span>{' '}<span className="people-title-part">{c('직접 만들고','Build directly')}</span><span className="people-title-last">{c('함께 나눕니다','Share what we learn')}</span></>}><img className="founder-photo" src="/img/brand/founder-panel.png" width="1125" height="1500" alt={c('공개 행사 패널에 참여한 강재현 대표 약사','Pharmacist and founder Jaehyun Kang at a public panel')} /><h3 className="founder-name">{c('강재현  /  대표 · 약사','Jaehyun Kang / Founder · Pharmacist')}</h3><div className="experience"><p>{c('01  약국 운영','01  Pharmacy practice')}<br />{c('약국을 운영하며 반복 업무와 환자 응대의 흐름을 살펴왔습니다','Operating a pharmacy provided firsthand insight into repetitive work and patient care')}</p><p>{c('02  프로그램·조제장비 개발','02  Software and dispensing equipment')}<br />{c('약국 프로그램과 조제장비를 직접 만들며 업무를 도구로 바꿔 왔습니다','Developing pharmacy software and dispensing equipment turns daily work into practical tools')}</p><p>{c('03  AI 교육·오픈소스 공개','03  AI education and open source')}<br />{c('AI 활용 강연과 오픈소스 공개로 현장에서 쓸 수 있는 방법을 나눕니다','AI lectures and open source projects share methods that can be used in practice')}</p></div><a className="brand-text-link" href="https://kaips.kr">{c('AI 교육·공개 활동 보기','AI education and public activities')}</a></Section>
    <Section className="faq-section" label="05 / FAQ" title={c('먼저 궁금하실 이야기','Questions you may have')}><div className="brand-faq">{getCompanyFaq(c).map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></Section>
  </div>;
}
