import { Link } from 'react-router-dom';
import { Button, useCopy } from '../components/BrandUI';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
export default function HomePage() {
  const c = useCopy();
  return <div className="brand-intro" data-intro>
    <picture className="intro-field"><source media="(max-width: 767px)" srcSet="/img/brand/intro-field-mobile.svg"/><img src="/img/brand/intro-field.svg" width="1440" height="700" alt="" /></picture>
    <div className="intro-message"><p className="intro-label">MAIPHARM / PHARMACY × TECHNOLOGY</p><h1>{c('약사의 시간을','More time for')}<br className="mobile-break" />{c(' 환자에게',' patient care')}</h1><p className="intro-subtitle">{c('약국 현장에서 시작한 AI와 자동화 기술 마이팜','AI and automation born in pharmacy practice')}</p><Button to="/about" data-enter>{c('마이팜 들어가기','Enter MaiPharm')} →</Button></div>
    <nav className="intro-direct" aria-label={c('콘텐츠 바로 가기','Direct content navigation')}><Link to="/about">{c('회사소개 바로 보기','About MaiPharm')} ↗</Link><div><Link to="/products">{c('전체 솔루션','All solutions')} ↗</Link><Link to="/customer">{c('문의하기','Contact')} ↗</Link></div><div className="intro-extra"><Link to="/about#news">{c('소식','News')}</Link><a href="https://blog.naver.com/maipharm">{c('블로그','Blog')}</a><LanguageSwitcher /></div></nav>
  </div>;
}
