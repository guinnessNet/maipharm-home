import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1920&auto=format&fit=crop',
      alt: t('banner.ai.alt'),
      title: t('banner.ai.title'),
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop',
      alt: t('banner.data.alt'),
      title: t('banner.data.title'),
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop',
      alt: t('banner.automation.alt'),
      title: t('banner.automation.title'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="relative overflow-hidden h-72 md:h-96">
      <div 
        className="flex banner-slide h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImages.map((image) => (
          <div key={image.id} className="min-w-full h-full relative">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-primary-700/70 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4 max-w-3xl">
                {image.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all"
        aria-label={t('banner.prev')}
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all"
        aria-label={t('banner.next')}
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {bannerImages.map((_, index) => (
          <button 
            key={index} 
            className={`h-2 w-10 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={t('banner.slide', { number: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
