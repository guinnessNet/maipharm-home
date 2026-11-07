import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useCopy } from './BrandUI';
export default function Footer() {
  const c=useCopy();
  return <footer className="brand-section brand-footer"><p className="section-label">CONTACT</p><h2>{c('현장의 다음 질문을','The next question from the field')}<br />{c('함께 풀어갑니다','Let’s solve it together')}</h2><a className="contact-email" href="mailto:kjh@maipharm.com">kjh@maipharm.com ↗</a><div className="footer-rule" /><p className="footer-company">{c('주식회사 마이팜 · 대표 강재현','MaiPharm · Jaehyun Kang')}<br />{c('경기 시흥시 공단1대로 204 32동 306호','306 Bldg 32 204 Gongdan 1-daero Siheung Korea')}</p><nav aria-label={c('하단 메뉴','Footer navigation')}><Link to="/about">{c('회사소개','Company')}</Link><Link to="/products">{c('전체 솔루션','All solutions')}</Link><Link to="/about#news">{c('소식','News')}</Link><Link to="/customer">{c('문의하기','Contact')}</Link></nav><nav aria-label={c('외부 활동과 언어','Blog and language')}><a href="https://blog.naver.com/maipharm">{c('블로그','Blog')} ↗</a><a href="/rx/">{c('AI 교육·공개 활동','AI education')}</a><LanguageSwitcher /></nav><p className="footer-company">© MaiPharm All rights reserved</p></footer>;
}
