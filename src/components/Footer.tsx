import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-6">
          <div className="text-lg font-semibold text-white mb-2">MaiPharm Inc.</div>
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-300" />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary-300" />
              <span>{t('footer.phone')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary-300" />
              <span>{t('footer.email')}</span>
            </div>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-white font-medium mb-2">{t('footer.solutions')}</h3>
            <ul className="text-sm space-y-1">
              <li>{t('footer.features')}</li>
              <li>{t('footer.products')}</li>
              <li>{t('footer.support')}</li>
              <li>{t('footer.pricing')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">{t('footer.company')}</h3>
            <ul className="text-sm space-y-1">
              <li>{t('footer.about')}</li>
              <li>{t('footer.blog')}</li>
              <li>{t('footer.careers')}</li>
              <li>{t('footer.contact')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">{t('footer.support')}</h3>
            <ul className="text-sm space-y-1">
              <li>{t('footer.help')}</li>
              <li>{t('footer.docs')}</li>
              <li>{t('footer.community')}</li>
              <li>{t('footer.news')}</li>
            </ul>
          </div>
        </div> */}
        
        <div className="text-xs border-t border-primary-700 pt-4 mt-4">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
