import React from 'react';
import { Link } from 'react-router-dom'; // remove if not using react-router

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-centertext-center mt-20">
      <h1 className='text-2xl font-bold'>Oops! Page Not Found</h1>
      <p className='pt-2'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link className='inline-block mt-10 px-4 py-2 rounded-lg bg-black text-white' to="/">Go to Homepage</Link>
      <div class="grid grid-flow-col grid-row-5 gap-4 w-[200px] h-[300px]">
        <div class="col-span-2 bg-blue-800">01</div>
        <div class="row-span-2 col-span-3 bg-black">02</div>
        <div class=" col-span-2 bg-yellow-700">03</div>
      </div>
    </div>
  );
};

export default NotFound404;     
