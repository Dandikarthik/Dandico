import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Summer sale promo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-amber-500/70"></div>
          </div>
          
          {/* Content */}
          <div className="relative py-16 px-8 md:py-24 md:px-12">
            <div className="max-w-lg">
              <span className="inline-block px-4 py-1 bg-white text-amber-600 font-semibold rounded-full text-sm mb-4 animate-pulse">
                Limited Time
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Summer Sale</h2>
              <p className="text-white text-lg mb-8">
                Enjoy up to 40% off on selected summer styles. 
                Refresh your wardrobe with our hottest items at unbeatable prices.
              </p>
              <Link 
                to="/products?onSale=true" 
                className="inline-flex items-center px-6 py-3 bg-white text-amber-600 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Sale
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;