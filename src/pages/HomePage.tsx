import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import PromoSection from '../components/PromoSection';
import { getFeaturedProducts, getOnSaleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const saleProducts = getOnSaleProducts();

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <ProductGrid products={featuredProducts} title="Featured Products" />
      </div>
      
      <CategorySection />
      
      <PromoSection />
      
      <div className="container mx-auto px-4 py-16">
        <ProductGrid products={saleProducts} title="On Sale" />
      </div>
    </div>
  );
};

export default HomePage;