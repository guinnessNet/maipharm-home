import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('ko')}
        className={`px-2 py-1 rounded`}
      style={{
        backgroundColor: i18n.language === 'ko' ? '#184230' : '#EEE',
        color: i18n.language === 'ko' ? '#fff' : '#000',
      }}
      >
        한국어
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
        }`}
        style={{
          backgroundColor: i18n.language === 'en' ? '#184230' : '#EEE',
          color: i18n.language === 'en' ? '#fff' : '#000',
        }}
      >
        English
      </button>
    </div>
  );
}; 