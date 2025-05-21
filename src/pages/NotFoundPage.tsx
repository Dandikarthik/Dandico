import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-8">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
      >
        <Home size={18} className="mr-2" />
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;