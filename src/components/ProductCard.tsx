import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1, product.sizes[0], product.colors[0]);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick add button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            aria-label="Quick add to cart"
          >
            <Plus size={20} />
          </button>
          {/* Sale badge */}
          {product.onSale && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <div className="mt-1 flex items-center">
            {product.onSale ? (
              <>
                <span className="text-sm font-medium text-red-600">
                  {formatPrice(product.salePrice!)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;