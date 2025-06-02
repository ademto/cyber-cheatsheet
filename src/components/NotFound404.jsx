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
          > nmap -p 404 cybercheatsheet.netlify.app
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
// This component can be used in your main App component as a fallback route
// for any unmatched paths, ensuring users have a friendly message when they hit a 404 error.
// You can also customize the styles and content as needed.
// Make sure to import and use this component in your main App file or wherever you handle routing.
// Example usage in App.jsx:
// <Route path="*" element={<NotFound404 />} />
// This will render the NotFound404 component for any route that doesn't match the defined routes.
// You can also add more functionality like logging the error or sending it to an analytics service if needed.
// Note: Ensure you have react-router-dom installed and set up in your project to use the Link component.
// If you're not using react-router, you can replace the Link with a simple button or anchor tag that redirects to the homepage.
// If you want to use this component without react-router, you can replace the Link with a simple button or anchor tag that redirects to the homepage.
// Example without react-router:
// <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
//   ← Back to Homepage
// </a>
// This will work in a static HTML context or any other routing solution you might be using.
// Make sure to test the component in your application to ensure it fits well with your design and functionality.       
