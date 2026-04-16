import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilter, setShowFilter] = useState(false);
  
  const categories = [
    { id: 'all', label: t('products.filter.all') },
    { id: 'core', label: t('products.filter.core') },
    { id: 'automation', label: t('products.filter.automation') },
    { id: 'data', label: t('products.filter.data') },
    { id: 'marketing', label: t('products.filter.marketing') },
    { id: 'developer', label: t('products.filter.developer') }
  ];
  
  const allProducts = [
    {
      id: 1,
      name: t('products.list.core.1.name'),
      category: 'core',
      description: t('products.list.core.1.description'),
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      name: t('products.list.automation.1.name'),
      category: 'automation',
      description: t('products.list.automation.1.description'),
      image: '/img/stock.jpg'
    },
    {
      id: 3,
      name: t('products.list.core.2.name'),
      category: 'core',
      description: t('products.list.core.2.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 4,
      name: t('products.list.data.1.name'),
      category: 'data',
      description: t('products.list.data.1.description'),
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 5,
      name: t('products.list.automation.2.name'),
      category: 'automation',
      description: t('products.list.automation.2.description'),
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 6,
      name: t('products.list.marketing.1.name'),
      category: 'marketing',
      description: t('products.list.marketing.1.description'),
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 7,
      name: t('products.list.marketing.2.name'),
      category: 'marketing',
      description: t('products.list.marketing.2.description'),
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 8,
      name: t('products.list.developer.1.name'),
      category: 'developer',
      description: t('products.list.developer.1.description'),
      image: '/img/25225792_7015995.jpg'
    }
  ];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>{t('products.title')} | {t('site.name')} - {t('site.description')}</title>
        <meta name="description" content={t('products.subtitle')} />
        <meta name="keywords" content="약국 솔루션, 팜스퀘어, 메디믹스, PS인사이트, 약국 자동화, 약국 데이터, 약국 마케팅, 약국 API, 마이팜 제품" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://maipharm.com/products" />
        <link rel="alternate" hrefLang="ko" href="https://maipharm.com/products" />
        <link rel="alternate" hrefLang="en" href="https://maipharm.com/products?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://maipharm.com/products" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maipharm.com/products" />
        <meta property="og:title" content={`${t('products.title')} | ${t('site.name')}`} />
        <meta property="og:description" content={t('products.subtitle')} />
        <meta property="og:image" content="https://maipharm.com/img/og-image.jpg" />
        <meta property="og:site_name" content={t('site.name')} />
        <meta property="og:locale" content="ko_KR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('products.title')} | ${t('site.name')}`} />
        <meta name="twitter:description" content={t('products.subtitle')} />
        <meta name="twitter:image" content="https://maipharm.com/img/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${t('products.title')} | ${t('site.name')}`,
          description: t('products.subtitle'),
          url: 'https://maipharm.com/products',
          inLanguage: 'ko-KR',
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t('nav.home'), item: 'https://maipharm.com/' },
            { '@type': 'ListItem', position: 2, name: t('products.title'), item: 'https://maipharm.com/products' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: allProducts.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: `https://maipharm.com/products/${p.id}`,
            name: p.name,
          })),
        })}</script>
      </Helmet>
      <SectionTitle
        title={t('products.title')}
        subtitle={t('products.subtitle')}
      />
      
      <div className="mb-10">
        <button 
          className="md:hidden flex items-center bg-white border rounded-md px-4 py-2 mb-4 shadow-sm"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={16} className="mr-2" />
          {t('products.filter.title')}
        </button>
        
        <div className={`md:block ${showFilter ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === category.id 
                    ? 'ezpharm-gradient text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            category={t(`category.${product.category}`)}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          {t('products.empty')}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
