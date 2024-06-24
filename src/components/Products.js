import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'; // Import RemixIcon CSS for icons
import { Circles } from 'react-loader-spinner'; // Import spinner component

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading spinner
  const [fadeIn, setFadeIn] = useState(false); // State to manage fade-in effect
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [productsPerPage] = useState(8); // Number of products per page
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [priceRange, setPriceRange] = useState(10000); // State for price range input
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-platform-kfby.onrender.com/AllProducts');
        const allProducts = response.data.data; // Assuming the response data is an array of products
        // Shuffle products array
        const shuffledProducts = shuffleArray(allProducts);
        setProducts(shuffledProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          setFadeIn(true);
        }, 500); // Show spinner for at least 1 second
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Function to filter and sort products based on searchTerm and priceRange
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price <= priceRange
    );

    // Update products based on filtered and sorted results
    setProducts(filteredProducts);
  }, [searchTerm, priceRange]);

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center my-10 pt-10">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-400"
            style={{ width: '60vw' }} // Adjusted width as per your requirement
          />
          <div className="flex items-center">
            <span className="mr-2">Max Price: ₹{priceRange}</span>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="cursor-pointer w-60" // Adjusted width for the slider
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: 'Poppins' }}>
          Our Products
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Circles height="80" width="80" color="#FDE047" ariaLabel="circles-loading" visible={true} />
          </div>
        ) : (
          <>
            <div className={`flex flex-wrap justify-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              {currentProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer"
                  onClick={() => handleProductClick(product._id)}
                >
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                    <img
                      src={`https://ecommerce-platform-kfby.onrender.com/images/${product.image[0]}`}
                      alt={product.name}
                      className="w-full h-64 object-contain p-4"
                    />
                    <div className="p-6 flex-grow">
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{
                          fontFamily: 'Poppins',
                          height: '3rem',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}
                      </h3>
                      <div className="flex items-center mb-4">
                        <span className="text-gray-600 mr-2 py-1 flex items-start" style={{ fontFamily: 'Poppins' }}>
                          <h6 className="text-lg">₹</h6>
                          <h1 className="text-2xl">{product.price}</h1>
                        </span>
                        <span className="line-through text-red-500" style={{ fontFamily: 'Poppins' }}>
                          {product.price + 500}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button className="bg-yellow-400 text-black py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-yellow-500" style={{ fontFamily: 'Poppins' }}>
                        Add to Cart <i className="ri-arrow-right-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-6 gap-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
                      currentPage === index + 1
                        ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]'
                        : 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
                    }`}
                    disabled={currentPage === index + 1}
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  export default Product;
