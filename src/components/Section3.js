import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'; // Import RemixIcon CSS for icons

function Section3() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-platform-kfby.onrender.com/AllProducts');
        const allProducts = response.data.data; // Assuming the response data is an array of products
        // Shuffle products array
        const shuffledProducts = shuffleArray(allProducts);
        // Take the first 4 products after shuffling
        setProducts(shuffledProducts.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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

  return (
    <div className='py-10 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-8' style={{ fontFamily: 'Poppins' }}>Our Products</h2>
        <div className='flex flex-wrap justify-center'>
          {products.map((product, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer'
              onClick={() => handleProductClick(product._id)} // Assuming products have a unique _id
            >
              <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl h-full flex flex-col'>
                <img src={`https://ecommerce-platform-kfby.onrender.com/images/${product.image[0]}`} alt={product.name} className='w-full h-64 object-contain p-4' />
                <div className='p-6 flex-grow'>
                  <h3 className='text-xl font-semibold mb-2' style={{ fontFamily: 'Poppins', height: '3rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}
                  </h3>
                  <div className='flex items-center mb-4'>
                    <span className='text-gray-600 mr-2 py-1 flex items-start' style={{ fontFamily: 'Poppins' }}>
                      <h6 className='text-lg'>₹</h6>
                      <h1 className='text-2xl'>{product.price}</h1>
                    </span>
                    <span className='line-through text-red-500' style={{ fontFamily: 'Poppins' }}>{product.price + 500}</span>
                  </div>
                </div>
                <div className='px-6 pb-6'>
                  <button className='bg-yellow-400 text-black py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-yellow-500' style={{ fontFamily: 'Poppins' }}>
                    Add to Cart <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
