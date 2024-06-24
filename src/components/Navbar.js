import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store user data
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await axios.get('https://ecommerce-platform-kfby.onrender.com/UserData', {
            headers: {
              auth: token
            }
          });
          if (response.data.status === 'Success') {
            setUser(response.data.data);
          } else {
            console.log('User data fetch failed:', response.data.message);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-black text-white p-4 z-50 fixed top-0 left-0 right-0" style={{ fontFamily: 'poppins' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl text-yellow-300 cursor-pointer">MintMart</h1>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`hidden lg:flex flex-grow items-center justify-end ${isOpen ? 'flex' : 'hidden'}`}>
          {user ? (
            <>
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/product"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Cart
              </Link>
              <Link
                to="/order"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Orders
              </Link>
              <div className="flex items-center mt-4 lg:mt-0">
                <img
                  src={`https://ecommerce-platform-kfby.onrender.com/images/${user.profileImage}`} // Placeholder image
                  alt="User"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <Link
                  to="/profile"
                  className="block lg:inline-block text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
                >
                  {user.name}
                </Link>
                <button
                  onClick={logout}
                  className="block lg:inline-block text-white hover:text-gray-200 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
            <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/product"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Products
              </Link>
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 border-b-2 border-transparent hover:border-yellow-300 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
