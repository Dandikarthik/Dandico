import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { getCategories } from '../data/products';

interface ProductFiltersProps {
  activeFilters: {
    category: string;
    gender: string;
    minPrice: number;
    maxPrice: number;
  };
  onFilterChange: (filterType: string, value: string | number) => void;
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ 
  activeFilters, 
  onFilterChange, 
  onClearFilters 
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const categories = ['all', ...getCategories()];
  
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  const renderDesktopFilters = () => (
    <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm">
      {/* Gender Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Gender</h3>
        <div className="space-y-2">
          {['all', 'men', 'women', 'unisex'].map((gender) => (
            <div key={gender} className="flex items-center">
              <input
                id={`gender-${gender}`}
                name="gender"
                type="radio"
                checked={activeFilters.gender === gender}
                onChange={() => onFilterChange('gender', gender)}
                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor={`gender-${gender}`} className="ml-3 text-sm text-gray-600 capitalize">
                {gender === 'all' ? 'All Genders' : gender}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={`category-${category}`}
                name="category"
                type="radio"
                checked={activeFilters.category === category}
                onChange={() => onFilterChange('category', category)}
                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600 capitalize">
                {category === 'all' ? 'All Categories' : category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">
              Min Price: ${activeFilters.minPrice}
            </label>
            <input 
              type="range" 
              id="min-price" 
              min={0} 
              max={200} 
              step={10}
              value={activeFilters.minPrice}
              onChange={(e) => onFilterChange('minPrice', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">
              Max Price: ${activeFilters.maxPrice}
            </label>
            <input 
              type="range" 
              id="max-price" 
              min={0} 
              max={200} 
              step={10}
              value={activeFilters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={onClearFilters}
        className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={toggleMobileFilters}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          <Filter size={18} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Mobile Filters Slide-in */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={toggleMobileFilters}></div>
          <div className="relative w-full max-w-xs bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 w-10 h-10 p-2 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-500"
                onClick={toggleMobileFilters}
              >
                <X size={24} />
              </button>
            </div>

            {/* Filter groups for mobile */}
            <div className="px-4 py-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Gender</h3>
              <div className="space-y-2">
                {['all', 'men', 'women', 'unisex'].map((gender) => (
                  <div key={gender} className="flex items-center">
                    <input
                      id={`mobile-gender-${gender}`}
                      name="mobile-gender"
                      type="radio"
                      checked={activeFilters.gender === gender}
                      onChange={() => onFilterChange('gender', gender)}
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor={`mobile-gender-${gender}`} className="ml-3 text-sm text-gray-600 capitalize">
                      {gender === 'all' ? 'All Genders' : gender}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-4 py-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`mobile-category-${category}`}
                      name="mobile-category"
                      type="radio"
                      checked={activeFilters.category === category}
                      onChange={() => onFilterChange('category', category)}
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor={`mobile-category-${category}`} className="ml-3 text-sm text-gray-600 capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-4 py-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="mobile-min-price" className="block text-sm text-gray-600 mb-1">
                    Min Price: ${activeFilters.minPrice}
                  </label>
                  <input 
                    type="range" 
                    id="mobile-min-price" 
                    min={0} 
                    max={200} 
                    step={10}
                    value={activeFilters.minPrice}
                    onChange={(e) => onFilterChange('minPrice', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label htmlFor="mobile-max-price" className="block text-sm text-gray-600 mb-1">
                    Max Price: ${activeFilters.maxPrice}
                  </label>
                  <input 
                    type="range" 
                    id="mobile-max-price" 
                    min={0} 
                    max={200} 
                    step={10}
                    value={activeFilters.maxPrice}
                    onChange={(e) => onFilterChange('maxPrice', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Clear and Apply Buttons */}
            <div className="px-4 py-4 border-t border-gray-200">
              <button
                onClick={onClearFilters}
                className="w-full mb-2 flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Clear All Filters
              </button>
              <button
                onClick={toggleMobileFilters}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      {renderDesktopFilters()}
    </>
  );
};

export default ProductFilters;