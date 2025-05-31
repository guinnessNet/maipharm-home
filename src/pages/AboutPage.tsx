import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle';
import { Award, ChartBar, Briefcase, Cpu, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('about.title')} | {t('site.name')} - {t('site.description')}</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta name="keywords" content="마이팜 소개, 약국 관리 시스템, AI 약국, 스마트 약국 솔루션, 약국 운영 혁신" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maipharm.com/about" />
        <meta property="og:title" content={`${t('about.title')} | ${t('site.name')}`} />
        <meta property="og:description" content={t('about.subtitle')} />
        <meta property="og:image" content="https://maipharm.com/img/about-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maipharm.com/about" />
        <meta property="twitter:title" content={`${t('about.title')} | ${t('site.name')}`} />
        <meta property="twitter:description" content={t('about.subtitle')} />
        <meta property="twitter:image" content="https://maipharm.com/img/about-og.jpg" />

        {/* 구조화된 데이터 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": `${t('about.title')} | ${t('site.name')}`,
            "description": t('about.subtitle'),
            "url": "https://maipharm.com/about",
            "publisher": {
              "@type": "Organization",
              "name": t('site.name'),
              "logo": {
                "@type": "ImageObject",
                "url": "https://maipharm.com/img/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          title={t('about.title')} 
          subtitle={t('about.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 ezpharm-text-blue">{t('about.intro.title')}</h3>
            <p className="mb-4 text-gray-700">
              {t('about.intro.description1')}
            </p>
            <p className="mb-4 text-gray-700">
              {t('about.intro.description2')}
            </p>
            <p className="text-gray-700">
              {t('about.intro.description3')}
            </p>
            <p className="text-gray-700">
              {t('about.intro.description4')}
            </p>
            <p className="text-gray-700">
              {t('about.intro.description5')}
            </p>
          </div>
          {/* <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/img/man.webp" 
              alt="EzPharm 팀" 
              className="w-full h-auto"
            />
          </div> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-semibold">{t('about.mission.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('about.mission.description')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold">{t('about.vision.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('about.vision.description')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold">{t('about.values.title')}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-1">{t('about.values.innovation.title')}</h4>
                <p className="text-gray-600 text-sm">{t('about.values.innovation.description')}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-1">{t('about.values.customer.title')}</h4>
                <p className="text-gray-600 text-sm">{t('about.values.customer.description')}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-1">{t('about.values.data.title')}</h4>
                <p className="text-gray-600 text-sm">{t('about.values.data.description')}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-1">{t('about.values.trust.title')}</h4>
                <p className="text-gray-600 text-sm">{t('about.values.trust.description')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full ezpharm-gradient text-white mr-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold">{t('about.history.title')}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-24 font-semibold ezpharm-text-blue shrink-0">2025</div>
                <div className="flex flex-col">
                  <p className="font-medium">{t('about.history.2025.title')}</p>
                  <p className="text-gray-600 text-sm">{t('about.history.2025.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 font-semibold ezpharm-text-blue shrink-0">2024</div>
                <div className="flex flex-col">
                  <p className="font-medium">{t('about.history.2024_1.title')}</p>
                  <p className="text-gray-600 text-sm">{t('about.history.2024_1.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 font-semibold ezpharm-text-blue shrink-0">2024</div>
                <div className="flex flex-col">
                  <p className="font-medium">{t('about.history.2024_2.title')}</p>
                  <p className="text-gray-600 text-sm">{t('about.history.2024_2.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 font-semibold ezpharm-text-blue shrink-0">2024</div>
                <div className="flex flex-col">
                  <p className="font-medium">{t('about.history.2024_3.title')}</p>
                  <p className="text-gray-600 text-sm">{t('about.history.2024_3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h3 className="text-xl font-bold mb-6 ezpharm-text-blue flex items-center">
            <Cpu className="mr-2" size={24} />
            {t('about.tech.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h4 className="font-semibold mb-2">{t('about.tech.ai.title')}</h4>
              <p className="text-gray-600">{t('about.tech.ai.description')}</p>
            </div>
            <div className="border rounded-lg p-6">
              <h4 className="font-semibold mb-2">{t('about.tech.inventory.title')}</h4>
              <p className="text-gray-600">{t('about.tech.inventory.description')}</p>
            </div>
            <div className="border rounded-lg p-6">
              <h4 className="font-semibold mb-2">{t('about.tech.data.title')}</h4>
              <p className="text-gray-600">{t('about.tech.data.description')}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-bold mb-6 ezpharm-text-blue flex items-center">
            <ChartBar className="mr-2" size={24} />
            {t('about.achievements.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold ezpharm-text-blue mb-2">5+</div>
              <p className="text-gray-700">{t('about.achievements.pharmacies')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold ezpharm-text-blue mb-2">70%</div>
              <p className="text-gray-700">{t('about.achievements.efficiency')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold ezpharm-text-blue mb-2">25%</div>
              <p className="text-gray-700">{t('about.achievements.cost')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold ezpharm-text-blue mb-2">100K+</div>
              <p className="text-gray-700">{t('about.achievements.prescriptions')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
