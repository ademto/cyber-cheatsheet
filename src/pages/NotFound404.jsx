import React from 'react';
import { Link } from 'react-router-dom'; // remove if not using react-router

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-centertext-center mt-20">
      <h1 className='text-2xl font-bold'>Oops! Page Not Found</h1>
      <p className='pt-2'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link className='inline-block mt-10 px-4 py-2 rounded-lg bg-black text-white' to="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound404;     
