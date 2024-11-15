
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-7">
        <img
          src="/logo.webp" 
          alt="Logo"
          className="w-20 h-20 "
        />
        <h1 className="text-3xl font-bold text-white animate-bounce">IMMERSIFY</h1>
      </div>

    
      <nav className="space-x-6 text-white">
        <Link to="/" className="hover:underline hover:scale-105 transition transform duration-200">Home</Link>
        <Link to="/main" className="hover:underline hover:scale-105 transition transform duration-200">Dashboard</Link>
        <Link to="/profile" className="hover:underline hover:scale-105 transition transform duration-200">Profile</Link>
        <Link to="/Modal" className="hover:underline hover:scale-105 transition transform duration-200">Modal</Link>
      </nav>
    </header>
  );
};

export default Header;
