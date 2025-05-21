import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Elevate Your Style",
    description: "Discover our new collection of contemporary fashion designed for the modern individual."
  },
  {
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Summer Collection 2024",
    description: "Experience comfort and style with our latest summer collection."
  },
  {
    image: "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Premium Quality",
    description: "Crafted with care using the finest materials for lasting comfort and style."
  }
];

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[600px] md:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/20"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                      {slide.description}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Link
                        to="/products"
                        className="rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      >
                        Shop Now
                      </Link>
                      <Link
                        to="/products?onSale=true"
                        className="text-base font-semibold text-white hover:text-amber-300 flex items-center group"
                      >
                        View Sale Items
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
          <ChevronRight size={24} />
        </button>
      </Swiper>
    </div>
  );
};

export default Hero;