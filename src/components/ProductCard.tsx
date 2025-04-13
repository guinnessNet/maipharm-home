import { Link } from 'react-router-dom';

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  image: string;
};

const ProductCard = ({ id, name, category, image }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{category}</div>
          <h3 className="font-medium text-lg">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
