import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  image: string;
  description?: string;
};

const ProductCard = ({ id, name, category, image, description }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all card-hover">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <div className="text-sm font-medium text-indigo-500 mb-1">{category}</div>
          <h3 className="font-medium text-lg mb-2">{name}</h3>
          {description && <p className="text-gray-600 text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
