import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { getProductById } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, quantity: number, size: string, color: string) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getProductDetails: (item: CartItem) => {
    product: Product | undefined;
    totalPrice: number;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: number, quantity: number, size: string, color: string) => {
    // Check if item already exists in cart with same size and color
    const existingItemIndex = cart.findIndex(
      item => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItemIndex >= 0) {
      // Update quantity of existing item
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new item to cart
      setCart([...cart, { productId, quantity, size, color }]);
    }
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getProductDetails = (item: CartItem) => {
    const product = getProductById(item.productId);
    const price = product?.onSale ? product.salePrice! : product?.price;
    const totalPrice = price * item.quantity;
    
    return { product, totalPrice };
  };

  // Calculate total number of items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in cart
  const totalPrice = cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (!product) return total;
    
    const price = product.onSale ? product.salePrice! : product.price;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      getProductDetails
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};