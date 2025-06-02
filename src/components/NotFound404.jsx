import React from 'react';
import { Link } from 'react-router-dom'; // remove if not using react-router

const NotFound404 = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Oops! This page doesn't exist. It might have been removed, renamed, or never existed at all.
        </p>
        <p className="text-sm text-gray-500 font-mono mb-6">
          <br />
          Host is down or page does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;     
