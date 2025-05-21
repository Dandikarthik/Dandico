import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { filterProducts } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Get filter values from URL
  const initialCategory = searchParams.get('category') || 'all';
  const initialGender = searchParams.get('gender') || 'all';
  const initialSearch = searchParams.get('search') || '';
  const initialMinPrice = 0;
  const initialMaxPrice = 200;
  
  // Set up state for filters
  const [filters, setFilters] = useState({
    category: initialCategory,
    gender: initialGender,
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
    search: initialSearch
  });
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Apply filters when they change
  useEffect(() => {
    const products = filterProducts({
      category: filters.category === 'all' ? undefined : filters.category,
      gender: filters.gender === 'all' ? undefined : filters.gender,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      search: filters.search
    });
    
    setFilteredProducts(products);
    
    // Update URL with current filters
    const params = new URLSearchParams();
    if (filters.category !== 'all') params.set('category', filters.category);
    if (filters.gender !== 'all') params.set('gender', filters.gender);
    if (filters.search) params.set('search', filters.search);
    
    const newUrl = 
      `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState(null, '', newUrl);
  }, [filters]);
  
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      gender: 'all',
      minPrice: 0,
      maxPrice: 200,
      search: ''
    });
  };
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {filters.gender !== 'all' 
          ? `${filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)}'s Collection` 
          : 'All Products'}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters 
            activeFilters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>
        
        {/* Product grid */}
        <div className="flex-grow">
          {filters.search && (
            <p className="mb-4 text-gray-500">
              Search results for: <span className="font-medium">{filters.search}</span>
            </p>
          )}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;