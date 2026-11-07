import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, useCopy } from '../components/BrandUI';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import '../styles/intro-motion.css';
export default function HomePage() {
  const c = useCopy();
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;
    let inView = true;
    const syncPlayback = () => {
      intro.dataset.motionPaused = String(document.hidden || !inView);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(intro);
    document.addEventListener('visibilitychange', syncPlayback);
    syncPlayback();
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, []);

  return <div className="brand-intro intro-motion" data-intro data-motion-paused="false" ref={introRef}>
    <div className="intro-atmosphere" aria-hidden="true">
      <span className="intro-light intro-light-mint" />
      <span className="intro-light intro-light-cyan" />
      <span className="intro-orbit" />
    </div>
    <picture className="intro-field" aria-hidden="true"><source media="(max-width: 767px)" srcSet="/img/brand/intro-field-mobile.svg"/><img src="/img/brand/intro-field.svg" width="1440" height="700" alt="" /></picture>
    <div className="intro-message"><p className="intro-label">MAIPHARM / PHARMACY × TECHNOLOGY</p><h1>{c('약사의 시간을','More time for')}<br className="mobile-break" />{c(' 환자에게',' patient care')}</h1><p className="intro-subtitle">{c('약국 현장에서 시작한 AI와 자동화 기술 마이팜','AI and automation born in pharmacy practice')}</p><Button to="/about" data-enter>{c('마이팜 들어가기','Enter MaiPharm')} →</Button></div>
    <nav className="intro-direct" aria-label={c('콘텐츠 바로 가기','Direct content navigation')}><Link to="/about">{c('회사소개 바로 보기','About MaiPharm')} ↗</Link><div><Link to="/products">{c('전체 솔루션','All solutions')} ↗</Link><Link to="/customer">{c('문의하기','Contact')} ↗</Link></div><div className="intro-extra"><Link to="/about#news">{c('소식','News')}</Link><a href="https://blog.naver.com/maipharm">{c('블로그','Blog')}</a><LanguageSwitcher /></div></nav>
  </div>;
}
