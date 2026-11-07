import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
export const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  return <button className="language-switch" aria-label={i18n.resolvedLanguage === 'en' ? '한국어로 변경' : 'Switch to English'} onClick={() => {
    const lang = i18n.resolvedLanguage === 'en' ? 'ko' : 'en';
    const params = new URLSearchParams(location.search); params.set('lang',lang);
    i18n.changeLanguage(lang); navigate(`${location.pathname}?${params}${location.hash}`, {preventScrollReset:true});
  }}>KR / EN</button>;
};
