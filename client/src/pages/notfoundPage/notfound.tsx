import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Notfound = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-700">
      <h1 className="text-[120px] font-bold text-[#34AFFB] leading-none">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-center max-w-md text-gray-500 mb-8">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-[#34AFFB] text-white hover:bg-[#219ce3] transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Notfound;
