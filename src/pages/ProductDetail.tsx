import { useParams } from 'react-router-dom';
import { productImages } from '../content/productImages';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft, CheckCircle2, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export type ProductPage = {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: {title: string; description: string}[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const productId = parseInt(id || '1');

  const getProductData = (id: number): ProductPage => {
    const productKey = `product.${getProductKey(id)}`;
    return {
      id,
      name: t(`${productKey}.name`),
      category: t(`${productKey}.category`),
      description: t(`${productKey}.description`),
      longDescription: t(`${productKey}.longDescription`),
      image: getProductImage(id),
      features: (t(`${productKey}.features`, { returnObjects: true }) as string[]),
      benefits: (t(`${productKey}.benefits`, { returnObjects: true }) as {title: string; description: string}[])
    };
  };

  const getProductKey = (id: number): string => {
    switch(id) {
      case 1: return 'pharmsquare';
      case 2: return 'medimix';
      case 3: return 'psinsight';
      case 4: return 'dashboard';
      case 5: return 'autocg';
      case 6: return 'crm';
      case 7: return 'marketing';
      case 8: return 'api';
      default: return 'pharmsquare';
    }
  };

  const getProductImage = (id: number): string => productImages[String(id)] || productImages['1'];

  const productPage = getProductData(productId);

  return (
    <div>

      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/products" 
          className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('button.back')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={productPage.image} 
              alt={productPage.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="text-sm font-medium text-green-500 mb-2">{productPage.category}</div>
            <h1 className="text-3xl font-bold mb-4">{productPage.name}</h1>
            <p className="text-gray-600 mb-6">{productPage.description}</p>
            
            <div className="space-y-4 mb-8">
              {productPage.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 size={20} className="text-primary-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {productPage.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('product.features.title')}</h2>
          <div className="prose max-w-none">
            {productPage.longDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Clock size={24} className="text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">{t('product.benefits.quick.title')}</h3>
            </div>
            <p className="text-gray-600">{t('product.benefits.quick.description')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Shield size={24} className="text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">{t('product.benefits.stable.title')}</h3>
            </div>
            <p className="text-gray-600">{t('product.benefits.stable.description')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Users size={24} className="text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">{t('product.benefits.support.title')}</h3>
            </div>
            <p className="text-gray-600">{t('product.benefits.support.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
