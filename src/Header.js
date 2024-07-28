import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">New Fu Wah LLC</Link>
        </h1>
        <nav>
          <Link to="/" className="px-3 py-2 hover:bg-blue-500 rounded">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
