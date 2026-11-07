import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCopy } from './BrandUI';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Header() {
  const { pathname } = useLocation();
  const copy = useCopy();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 64);
    update();
    window.addEventListener('scroll', update, {passive:true});
    return () => window.removeEventListener('scroll', update);
  }, [pathname]);
  const dark = pathname === '/' || scrolled;
  return <header className="brand-header" data-theme={dark ? 'dark' : 'light'}>
    <Link to="/" className="brand-home" aria-label={copy('마이팜 홈', 'MaiPharm home')}><img src={`/img/brand/logo-${dark ? 'white' : 'color'}.png`} alt="마이팜 MaiPharm" width="128" height="49" /></Link>
    <nav aria-label={copy('주 메뉴', 'Main navigation')}>
      <Link to="/about">{copy('회사소개','Company')}</Link><Link to="/products">{copy('솔루션','Solutions')}</Link><Link to="/about#news">{copy('소식','News')}</Link><a href="https://blog.naver.com/maipharm">{copy('블로그','Blog')}</a><Link to="/customer">{copy('문의','Contact')}</Link><LanguageSwitcher />
    </nav>
  </header>;
}
