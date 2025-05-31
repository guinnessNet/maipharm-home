import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:block bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-8 py-3">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
                }
                end
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
                }
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
                }
              >
                {t('nav.products')}
              </NavLink>
            </li>
            <li>
              <a 
                href="https://blog.naver.com/maipharm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-2 px-1 text-gray-700 hover:ezpharm-text-blue"
              >
                {t('nav.blog')}
              </a>
            </li>
            <li>
              <NavLink 
                to="/customer" 
                className={({ isActive }) => 
                  `py-2 px-1 text-gray-700 hover:ezpharm-text-blue ${isActive ? 'navigator-active' : ''}`
                }
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
