import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Men',
    image: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/products?gender=men'
  },
  {
    name: 'Women',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/products?gender=women'
  },
  {
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/6995704/pexels-photo-6995704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/products?category=accessories'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.name} 
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[3/4] w-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="mt-2 text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Shop Collection
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;