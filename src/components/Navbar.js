import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 z-50" style={{ fontFamily: "Poppins" }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="font-bold text-3xl text-yellow-300 cursor-pointer">
            MintMart
          </div>
        </div>

        {/* Menu Items */}
        <div className={`col-span-1 md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <div className="text-sm md:flex md:flex-grow md:justify-center">
            <Link to="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              About
            </Link>
            <Link to="/product" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              Products
            </Link>
            <Link to="/cart" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              Cart
            </Link>
            <Link to="/order" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              Orders
            </Link>
            <Link to="/profile" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300">
              Profile
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center justify-center md:justify-end">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full md:w-64 px-4 py-2 text-black focus:outline-none"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
            <RiSearchLine size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
