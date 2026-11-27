import { useState } from 'react';
import { productImages } from '../content/productImages';
import { useCopy } from '../components/BrandUI';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  const c = useCopy();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilter, setShowFilter] = useState(false);
  
  const categories = [
    { id: 'all', label: t('products.filter.all') },
    { id: 'core', label: t('products.filter.core') },
    { id: 'automation', label: t('products.filter.automation') },
    { id: 'data', label: t('products.filter.data') },
    { id: 'marketing', label: c('고객 관리 솔루션', 'Customer management') },
    { id: 'developer', label: t('products.filter.developer') }
  ];
  
  const allProducts = [
    {
      id: 1,
      name: t('products.list.core.1.name'),
      category: 'core',
      description: t('products.list.core.1.description'),
      image: productImages['1']
    },
    {
      id: 2,
      name: t('products.list.automation.1.name'),
      category: 'automation',
      description: t('products.list.automation.1.description'),
      image: productImages['2']
    },
    {
      id: 3,
      name: t('products.list.core.2.name'),
      category: 'core',
      description: t('products.list.core.2.description'),
      image: productImages['3']
    },
    {
      id: 4,
      name: t('products.list.data.1.name'),
      category: 'data',
      description: t('products.list.data.1.description'),
      image: productImages['4']
    },
    {
      id: 6,
      name: t('products.list.marketing.1.name'),
      category: 'marketing',
      description: t('products.list.marketing.1.description'),
      image: productImages['6']
    },
    {
      id: 8,
      name: t('products.list.developer.1.name'),
      category: 'developer',
      description: t('products.list.developer.1.description'),
      image: productImages['8']
    },
    {
      id: 'ndsd',
      name: c('대체조제 사후통보 모듈 - NDSD', 'Substitution reporting module - NDSD'),
      category: 'automation',
      description: c('대체조제 사후통보 데이터의 업로드와 결과 확인을 돕는 Windows용 모듈', 'A Windows module for uploading substitution reports and checking results'),
      image: productImages.ndsd
    }
  ];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
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
      
      <div className="product-grid grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category === 'marketing' ? c('고객 관리 솔루션', 'Customer management') : t(`category.${product.category}`)}
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
