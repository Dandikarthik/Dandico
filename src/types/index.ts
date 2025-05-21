export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  gender: 'men' | 'women' | 'unisex';
  sizes: string[];
  colors: string[];
  images: string[];
  description: string;
  featured?: boolean;
  onSale?: boolean;
  salePrice?: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
  size: string;
  color: string;
}

export interface FilterOptions {
  category: string;
  gender: string;
  priceRange: [number, number];
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PaymentDetails {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
}

export interface OrderDetails {
  shipping: ShippingDetails;
  payment: PaymentDetails;
  items: CartItem[];
  total: number;
  orderId: string;
}