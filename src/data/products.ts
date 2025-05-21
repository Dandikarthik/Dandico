import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 2499,
    category: "t-shirts",
    gender: "unisex",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    images: [
      "https://images.pexels.com/photos/6347548/pexels-photo-6347548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6347561/pexels-photo-6347561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A comfortable, everyday cotton t-shirt made from 100% organic cotton. Features a classic fit that's perfect for any casual occasion.",
    featured: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 4999,
    category: "jeans",
    gender: "men",
    sizes: ["30x30", "32x30", "32x32", "34x32", "36x32"],
    colors: ["Dark Blue", "Black", "Light Wash"],
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "Classic slim fit jeans with a modern touch. Made from premium denim with a touch of stretch for comfort throughout the day."
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    price: 5999,
    category: "dresses",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Print", "Blue Floral", "Pink Floral"],
    images: [
      "https://images.pexels.com/photos/6764035/pexels-photo-6764035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6764507/pexels-photo-6764507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A beautiful floral dress perfect for summer days. Features a flattering silhouette and lightweight fabric for maximum comfort.",
    featured: true
  },
  {
    id: 4,
    name: "Wool Blend Sweater",
    price: 6999,
    category: "sweaters",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy", "Burgundy"],
    images: [
      "https://images.pexels.com/photos/6614159/pexels-photo-6614159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6614189/pexels-photo-6614189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A cozy wool blend sweater that's perfect for cooler weather. Features a classic design that never goes out of style."
  },
  {
    id: 5,
    name: "Tailored Blazer",
    price: 8999,
    category: "jackets",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Grey"],
    images: [
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A sophisticated tailored blazer that transitions perfectly from office to evening. Features premium fabric and expert tailoring."
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: 12999,
    category: "jackets",
    gender: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Brown"],
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A classic leather jacket made from premium leather. Features a timeless design that adds edge to any outfit.",
    featured: true
  },
  {
    id: 7,
    name: "Summer Linen Shorts",
    price: 3499,
    category: "shorts",
    gender: "men",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "Olive"],
    images: [
      "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "Lightweight linen shorts that are perfect for hot summer days. Features a comfortable fit and breathable fabric."
  },
  {
    id: 8,
    name: "Silk Blouse",
    price: 7999,
    category: "tops",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Navy", "Burgundy"],
    images: [
      "https://images.pexels.com/photos/5693890/pexels-photo-5693890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "An elegant silk blouse that elevates any outfit. Made from 100% silk with a flattering cut and luxurious feel."
  },
  {
    id: 9,
    name: "Athletic Performance Tee",
    price: 3499,
    category: "activewear",
    gender: "unisex",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Blue"],
    images: [
      "https://images.pexels.com/photos/4753890/pexels-photo-4753890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A technical performance t-shirt designed for workouts. Features moisture-wicking fabric and strategic ventilation.",
    onSale: true,
    salePrice: 2499
  },
  {
    id: 10,
    name: "Cashmere Scarf",
    price: 5999,
    category: "accessories",
    gender: "unisex",
    sizes: ["One Size"],
    colors: ["Grey", "Black", "Camel", "Navy"],
    images: [
      "https://images.pexels.com/photos/6995704/pexels-photo-6995704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6995705/pexels-photo-6995705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A luxurious cashmere scarf that adds warmth and style during colder months. Made from premium cashmere for ultimate softness.",
    onSale: true,
    salePrice: 4499
  },
  {
    id: 11,
    name: "High-Waisted Leggings",
    price: 4499,
    category: "activewear",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Grey"],
    images: [
      "https://images.pexels.com/photos/4662344/pexels-photo-4662344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "Performance leggings with high-waisted design for maximum comfort and support. Features four-way stretch and sweat-wicking fabric."
  },
  {
    id: 12,
    name: "Oxford Button-Down Shirt",
    price: 4999,
    category: "shirts",
    gender: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Pink"],
    images: [
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "A classic Oxford button-down shirt made from premium cotton. Features a tailored fit and timeless design that's perfect for any occasion.",
    featured: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProduct: Product, limit: number = 4): Product[] => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || product.gender === currentProduct.gender)
    )
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

export const getOnSaleProducts = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.onSale)
    .slice(0, limit);
};

export const filterProducts = (options: {
  category?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}): Product[] => {
  return products.filter(product => {
    // Filter by category
    if (options.category && options.category !== 'all' && product.category !== options.category) {
      return false;
    }
    
    // Filter by gender
    if (options.gender && options.gender !== 'all' && product.gender !== options.gender && product.gender !== 'unisex') {
      return false;
    }
    
    // Filter by price range
    if (options.minPrice !== undefined && (product.onSale ? product.salePrice! : product.price) < options.minPrice) {
      return false;
    }
    
    if (options.maxPrice !== undefined && (product.onSale ? product.salePrice! : product.price) > options.maxPrice) {
      return false;
    }
    
    // Filter by search term
    if (options.search && !product.name.toLowerCase().includes(options.search.toLowerCase()) && 
        !product.description.toLowerCase().includes(options.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
};

export const getCategories = (): string[] => {
  const categories = new Set<string>();
  products.forEach(product => categories.add(product.category));
  return Array.from(categories);
};