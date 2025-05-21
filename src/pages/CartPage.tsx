import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, getProductDetails } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <ShoppingBag size={24} className="text-gray-500" />
          </div>
          <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map((item, index) => {
                  const { product, totalPrice: itemTotalPrice } = getProductDetails(item);
                  
                  if (!product) return null;
                  
                  return (
                    <li key={`${product.id}-${item.size}-${item.color}`} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="sm:w-20 sm:h-20 flex-shrink-0 mb-4 sm:mb-0">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        
                        {/* Product details */}
                        <div className="sm:ml-6 flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                <Link to={`/product/${product.id}`} className="hover:text-amber-600">
                                  {product.name}
                                </Link>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Size: {item.size} | Color: {item.color}
                              </p>
                              <p className="mt-1 text-sm font-medium text-gray-900">
                                ${(product.onSale ? product.salePrice! : product.price).toFixed(2)} each
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-base font-medium text-gray-900">
                                ${itemTotalPrice.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center justify-between">
                            {/* Quantity selector */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                className="px-2 py-1 text-gray-600 hover:text-gray-900"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="px-2 py-1 text-gray-600 hover:text-gray-900"
                              >
                                +
                              </button>
                            </div>
                            
                            {/* Remove button */}
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-sm text-gray-500 hover:text-red-600 flex items-center"
                            >
                              <Trash2 size={16} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              
              {/* Continue shopping and clear cart */}
              <div className="px-4 sm:px-6 py-4 bg-gray-50 flex flex-wrap gap-4 justify-between">
                <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  <ArrowLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between font-medium text-gray-900">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full mt-6 py-3 px-4 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;