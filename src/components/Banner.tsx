import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1631549916768-4119b4123a31?q=80&w=1920&auto=format&fit=crop',
    alt: '제약 연구',
    title: '건강한 미래를 창조하는 이지팜',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1920&auto=format&fit=crop',
    alt: '의약품',
    title: '최고의 품질로 고객 건강을 지키는 이지팜',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1920&auto=format&fit=crop',
    alt: '연구소',
    title: '끊임없는 연구개발로 앞서가는 이지팜',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative overflow-hidden h-64 md:h-80">
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
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-3xl font-bold text-center px-4">
                {image.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {bannerImages.map((_, index) => (
          <button 
            key={index} 
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
