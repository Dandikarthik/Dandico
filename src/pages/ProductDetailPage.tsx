import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setAddedToCart(false);
      
      // Scroll to top when product changes
      window.scrollTo(0, 0);
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <p className="text-xl text-gray-500">Product not found</p>
        <Link to="/products" className="mt-4 inline-block text-amber-600 hover:text-amber-700">
          Return to products
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
    setAddedToCart(true);
    
    // Reset added to cart state after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Back link */}
      <Link 
        to="/products" 
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to products
      </Link>
      
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Product images */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-24">
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-auto py-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`w-16 h-16 rounded overflow-hidden flex-shrink-0 border-2 ${
                      selectedImage === image ? 'border-amber-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Product details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          
          {/* Price */}
          <div className="mb-6">
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold text-red-600">
                  ${product.salePrice?.toFixed(2)}
                </span>
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          {/* Color selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded-full text-sm ${
                    selectedColor === color
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Size selection */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <button className="text-sm text-amber-600 hover:text-amber-500">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                    selectedSize === size
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity selector */}
          <div className="flex items-center mb-8">
            <span className="mr-4 text-sm font-medium text-gray-900">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-gray-900">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 px-4 rounded-md font-medium ${
              addedToCart
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            } transition-colors`}
          >
            {addedToCart ? (
              <span className="flex items-center justify-center">
                <Check size={18} className="mr-2" />
                Added to Cart
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;