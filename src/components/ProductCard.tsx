import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number | string;
  name: string;
  category: string;
  image: string;
  description?: string;
};

const ProductCard = ({ id, name, category, image, description }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block h-full">
      <div className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden transition-all card-hover">
        <div className="aspect-[3/2] shrink-0 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <div className="text-sm font-medium text-[#52665f] mb-1">{category}</div>
          <h3 className="font-medium text-lg mb-2">{name}</h3>
          {description && <p className="text-gray-600 text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
