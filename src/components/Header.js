// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-4xl font-extrabold text-blue-600 transition-transform transform hover:scale-105"
          onClick={() => setIsOpen(false)}
        >
          <img src="/logo-bg.png" alt="Logo" className="h-14 mr-3" />
          Sayf All-In-One
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-lg font-semibold transition-all duration-300 group ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === item.path ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition-transform transform active:scale-95"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white shadow-inner transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-3 text-lg font-medium transition-colors duration-300 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-blue-100 text-blue-700 font-bold'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;