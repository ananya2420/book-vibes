import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold mb-4 text-red-500">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            Go Back
          </button>

          <Link
            href="/"
            className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;