import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-6 shadow-xl">
        <div className="w-20 h-20 bg-brand-lightBlue rounded-full flex items-center justify-center mx-auto text-brand-orange">
          <span className="text-4xl font-black font-heading">404</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-brand-navy font-heading">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600">
            The page or equipment catalogue section you are looking for does not exist or has been relocated.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Return Home
          </Button>
          <Button to="/products" variant="secondary" size="md">
            View Catalogue
          </Button>
        </div>
      </div>
    </div>
  );
}
