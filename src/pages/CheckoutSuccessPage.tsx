import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface LocationState {
  orderId: string;
  total: string;
}

const CheckoutSuccessPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  // Redirect if no order information is available
  if (!state || !state.orderId) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Order!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully and is being processed.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium text-gray-900">{state.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-medium text-gray-900">${state.total}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8">
          We've sent a confirmation email with the order details and tracking information.
          If you have any questions about your order, please contact our customer support.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full py-3 px-4 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <button className="block w-full py-3 px-4 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Track Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;