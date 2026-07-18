import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ChartBar, ChevronDown, ChevronUp, Database, Download, ExternalLink, Github, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const [showAllNews, setShowAllNews] = useState(false);

  type NewsItem = {
    date: string;
    isoDate: string;
    key: string;
    link?: string;
    source?: string;
    isPress?: boolean;
  };
  const newsItems: NewsItem[] = [
    {
      date: '2026.04.20',
      isoDate: '2026-04-20',
      key: '2026_press_dailypharm_opensource',
      link: 'https://dailypharm.com/user/news/337671',
      source: '데일리팜',
      isPress: true,
    },
    { date: '2026.02.20', isoDate: '2026-02-20', key: '2026_1' },
    { date: '2025.11.13', isoDate: '2025-11-13', key: '2025_3' },
    {
      date: '2025.10.31',
      isoDate: '2025-10-31',
      key: '2025_press_dailypharm',
      link: 'https://www.dailypharm.com/user/news/782',
      source: '데일리팜',
      isPress: true,
    },
    { date: '2025.07.29', isoDate: '2025-07-29', key: '2025_2' },
    { date: '2025.06.23', isoDate: '2025-06-23', key: '2025_1' },
    { date: '2025.03.29', isoDate: '2025-03-29', key: '2025' },
    { date: '2024.09.15', isoDate: '2024-09-15', key: '2024_1' },
    { date: '2024.04.29', isoDate: '2024-04-29', key: '2024_2' },
  ];
  const visibleNews = showAllNews ? newsItems : newsItems.slice(0, 3);

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
        <html lang={t('site.htmlLang')} />
        <title>{t('site.name')} - {t('site.description')}</title>
        <meta name="description" content={t('site.description')} />
        <meta name="keywords" content={t('site.keywords')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://maipharm.com/" />
        <link rel="alternate" hrefLang="ko" href="https://maipharm.com/" />
        <link rel="alternate" hrefLang="en" href="https://maipharm.com/?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://maipharm.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maipharm.com/" />
        <meta property="og:title" content={`${t('site.name')} - ${t('site.description')}`} />
        <meta property="og:description" content={t('site.description')} />
        <meta property="og:image" content="https://maipharm.com/img/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${t('site.name')} - ${t('site.description')}`} />
        <meta property="og:site_name" content={t('site.name')} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://maipharm.com/" />
        <meta name="twitter:title" content={`${t('site.name')} - ${t('site.description')}`} />
        <meta name="twitter:description" content={t('site.description')} />
        <meta name="twitter:image" content="https://maipharm.com/img/og-image.jpg" />
        <meta name="twitter:image:alt" content={`${t('site.name')} - ${t('site.description')}`} />

        {/* WebPage 구조화 데이터 */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${t('site.name')} - ${t('site.description')}`,
          description: t('site.description'),
          url: 'https://maipharm.com/',
          inLanguage: 'ko-KR',
          isPartOf: {
            '@type': 'WebSite',
            name: t('site.name'),
            url: 'https://maipharm.com/',
          },
          publisher: {
            '@type': 'Organization',
            name: t('site.name'),
            logo: { '@type': 'ImageObject', url: 'https://maipharm.com/img/logo.png' },
          },
        })}</script>
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
              {visibleNews.map((item) => {
                const title = t(`about.history.${item.key}.title`);
                const desc = t(`about.history.${item.key}.description`);
                return (
                  <article key={item.key} className="py-8">
                    <div className="flex items-center gap-2 mb-2">
                      <time dateTime={item.isoDate} className="text-sm text-green-500 font-medium">
                        {item.date}
                      </time>
                      {item.isPress && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-100">
                          {t('home.news.pressBadge')}{item.source ? ` · ${item.source}` : ''}
                        </span>
                      )}
                    </div>
                    {item.link ? (
                      <h3 className="font-semibold text-xl mb-3">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 hover:text-green-600 transition-colors"
                        >
                          <span>{title}</span>
                          <ExternalLink size={16} className="shrink-0 mt-1.5 opacity-60" />
                        </a>
                      </h3>
                    ) : (
                      <h3 className="font-semibold text-xl mb-3">{title}</h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-green-600 hover:text-green-700"
                      >
                        {t('home.news.readArticle')} <ExternalLink size={14} />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
            {newsItems.length > 3 && (
              <div className="text-center pt-6">
                <button
                  type="button"
                  onClick={() => setShowAllNews((v) => !v)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  aria-expanded={showAllNews}
                  aria-controls="home-news-list"
                >
                  {showAllNews ? (
                    <>{t('home.news.collapse')} <ChevronUp size={16} /></>
                  ) : (
                    <>{t('home.news.more')} <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* News structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                itemListElement: newsItems.map((item, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  item: {
                    '@type': 'NewsArticle',
                    headline: t(`about.history.${item.key}.title`),
                    description: t(`about.history.${item.key}.description`),
                    datePublished: item.isoDate,
                    inLanguage: 'ko-KR',
                    ...(item.link ? { url: item.link, mainEntityOfPage: item.link } : {}),
                    ...(item.source ? { isBasedOn: item.link, sourceOrganization: { '@type': 'Organization', name: item.source } } : {}),
                    publisher: {
                      '@type': 'Organization',
                      name: item.isPress && item.source ? item.source : '마이팜',
                      logo: { '@type': 'ImageObject', url: 'https://maipharm.com/img/logo.png' },
                    },
                  },
                })),
              }),
            }}
          />
        </section>

        <section className="mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-[#0d1117] via-[#111a2e] to-[#184230] text-white p-8 md:p-12 shadow-lg">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest bg-green-400/15 text-green-300 mb-5">
                  <Github size={12} />
                  {t('home.opensource.eyebrow')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  {t('home.opensource.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('home.opensource.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[t('home.opensource.badgeOss'), t('home.opensource.badgeLang'), t('home.opensource.badgeStack')].map((b) => (
                    <span key={b} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/10 text-gray-200 border border-white/10">
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-6 font-mono text-xs text-gray-400 break-all">
                  github.com/guinnessNet/pharmsq-ndsd
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/guinnessNet/pharmsq-ndsd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 w-full px-5 py-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors group"
                >
                  <span className="inline-flex items-center gap-3">
                    <Github size={20} />
                    {t('home.opensource.repo')}
                  </span>
                  <ExternalLink size={16} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/guinnessNet/pharmsq-ndsd/releases/latest/download/pharmsq-ndsd-Setup.exe"
                  rel="noopener"
                  className="inline-flex items-center justify-between gap-3 w-full px-5 py-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors group"
                  download
                >
                  <span className="inline-flex items-center gap-3">
                    <Download size={20} />
                    {t('home.opensource.download')}
                  </span>
                  <ArrowRight size={16} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-xs text-gray-400 mt-1 px-1">{t('home.opensource.note')}</p>
                <a
                  href="https://github.com/guinnessNet/pharmsq-ndsd/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-white px-1"
                >
                  전체 릴리스 보기 <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'SoftwareSourceCode',
                name: 'pharmsq-ndsd',
                description: '약국 관리 프로그램이 대체조제 엑셀을 NDSD(심평원)에 자동 업로드하는 오픈소스 Electron 모듈',
                programmingLanguage: 'TypeScript',
                runtimePlatform: 'Electron',
                codeRepository: 'https://github.com/guinnessNet/pharmsq-ndsd',
                license: 'https://github.com/guinnessNet/pharmsq-ndsd/blob/main/LICENSE',
                author: { '@type': 'Organization', name: 'MaiPharm Inc.', url: 'https://maipharm.com' },
                downloadUrl: 'https://github.com/guinnessNet/pharmsq-ndsd/releases/latest/download/pharmsq-ndsd-Setup.exe',
                operatingSystem: 'Windows',
              }),
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
