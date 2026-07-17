import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2 lg:py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="/logo/Black%20No%20Background.png" alt="Bharat EV Prime Logo" className="h-[46px] md:h-[56px] lg:h-[72px] w-auto object-contain drop-shadow-sm" />
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'}`}>Home</Link>
          <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'}`}>About Us</Link>
          <Link to="/services" className={`transition-colors ${isActive('/services') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'}`}>Our Services</Link>
          <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'}`}>Contact Us</Link>
          <Link to="/blog" className={`transition-colors ${isActive('/blog') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'}`}>Blog</Link>
        </nav>

        <div className="hidden md:block">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-green-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] lg:top-[72px] left-0 w-full bg-white shadow-xl z-40 rounded-b-2xl border-t border-gray-100 flex flex-col py-4 px-6 gap-4 animate-fade-in-down">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/') ? 'text-green-600 font-bold' : 'font-medium text-gray-700 hover:text-green-600'}`}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/about') ? 'text-green-600 font-bold' : 'font-medium text-gray-700 hover:text-green-600'}`}>About Us</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/services') ? 'text-green-600 font-bold' : 'font-medium text-gray-700 hover:text-green-600'}`}>Our Services</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/contact') ? 'text-green-600 font-bold' : 'font-medium text-gray-700 hover:text-green-600'}`}>Contact Us</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`block ${isActive('/blog') ? 'text-green-600 font-bold' : 'font-medium text-gray-700 hover:text-green-600'}`}>Blog</Link>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium w-full mt-2 shadow-md">
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
