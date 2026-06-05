import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Gill Architects</title>
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-pearl-50 text-center px-4">
        <h1 className="text-6xl font-bold text-charcoal-900 mb-4">404</h1>
        <p className="text-xl text-charcoal-600 mb-8">Oops! The page you are looking for does not exist.</p>
        <Link 
          to="/" 
          className="bg-charcoal-900 text-white px-8 py-3 rounded-full font-medium hover:bg-charcoal-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
