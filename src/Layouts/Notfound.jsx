import React from 'react';
import { Link } from 'react-router';

const Notfound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-green-900 text-white rounded-lg hover:bg-red-700 transition">
          Go Back Home
        </button>
      </Link>
        </div>
    );
};

export default Notfound;