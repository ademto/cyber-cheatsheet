import React from 'react';
import { Link } from 'react-router-dom'; // remove if not using react-router

const NotFound404 = () => {
  return (
    <div className="">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link className='bg-black text-white' to="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound404;     
