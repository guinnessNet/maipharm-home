import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ChartBar, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      id: 1,
      name: t('solutions.core.items.0.title'),
      category: t('solutions.core.title'),
      description: t('solutions.core.items.0.description'),
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      name: t('solutions.automation.items.0.title'),
      category: t('solutions.automation.title'),
      description: t('solutions.automation.items.0.description'),
      image: '/img/stock.jpg'
    },
    {
      id: 3,
      name: t('solutions.data.items.0.title'),
      category: t('solutions.data.title'),
      description: t('solutions.data.items.0.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>{t('site.name')} - {t('site.description')}</title>
        <meta name="description" content={t('site.description')} />
        <meta name="keywords" content={t('site.keywords')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maipharm.co.kr/" />
        <meta property="og:title" content={`${t('site.name')} - ${t('site.description')}`} />
        <meta property="og:description" content={t('site.description')} />
        <meta property="og:image" content="https://www.maipharm.co.kr/img/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maipharm.co.kr/" />
        <meta property="twitter:title" content={`${t('site.name')} - ${t('site.description')}`} />
        <meta property="twitter:description" content={t('site.description')} />
        <meta property="twitter:image" content="https://www.maipharm.co.kr/img/og-image.jpg" />

        {/* 구조화된 데이터 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${t('site.name')} - ${t('site.description')}`,
            "description": t('site.description'),
            "url": "https://www.maipharm.co.kr",
            "publisher": {
              "@type": "Organization",
              "name": t('site.name'),
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.maipharm.co.kr/img/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <Banner />
      
      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <SectionTitle 
            title={t('home.title')} 
            subtitle={t('home.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 ezpharm-text-blue">{t('home.ai.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.ai.description')}
              </p>
              
              <Link to="/about" className="inline-flex items-center px-6 py-3 rounded-md ezpharm-gradient text-white font-medium">
                {t('home.ai.button')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="AI 데이터 분석" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-20">
          <SectionTitle 
            title={t('home.features.title')} 
            subtitle={t('home.features.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('home.features.ai.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.features.ai.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('home.features.data.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.features.data.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBar size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('home.features.insight.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.features.insight.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('home.features.security.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('home.features.security.description')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-20">
          <SectionTitle 
            title={t('solutions.title')} 
            subtitle={t('solutions.subtitle')}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {solutions.map(solution => (
              <ProductCard 
                key={solution.id}
                id={solution.id}
                name={solution.name}
                category={solution.category}
                image={solution.image}
                description={solution.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 rounded-md ezpharm-gradient text-white font-medium"
            >
              {t('home.solutions.button')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
        
        <section>
          <SectionTitle 
            title={t('home.news.title')} 
            subtitle={t('home.news.subtitle')}
          />
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="divide-y divide-gray-100">
              <div className="py-8">
                <div className="text-sm text-green-500 font-medium mb-2">2025.03.29</div>
                <h3 className="font-semibold text-xl mb-3">{t('about.history.2025.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('about.history.2025.description')}</p>
              </div>
              <div className="py-8">
                <div className="text-sm text-green-500 font-medium mb-2">2024.09.15</div>
                <h3 className="font-semibold text-xl mb-3">{t('about.history.2024_1.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('about.history.2024_1.description')}</p>
              </div>
              <div className="py-8">
                <div className="text-sm text-green-500 font-medium mb-2">2024.04.29</div>
                <h3 className="font-semibold text-xl mb-3">{t('about.history.2024_2.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('about.history.2024_2.description')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
