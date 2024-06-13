// src/Products.js
import React from 'react';
import 'remixicon/fonts/remixicon.css'; // Import RemixIcon CSS for icons

const products = [
  {
    imgSrc: "https://img.fruugo.com/product/9/79/569745799_0340_0340.jpg",
    name: "Wireless Headphones",
    price: "$199.99",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/71NZnTJMqKL.jpg",
    name: "Classic Watch",
    price: "$249.99",
  },
  {
    imgSrc: "https://image.made-in-china.com/202f0j00bczklprKnsqV/Second-Hand-Note-11t-PRO-5g-HD-Camera-Smartphone.webp",
    name: "Smartphone",
    price: "$699.99",
  },
  {
    imgSrc: "https://cdn.crn.in/wp-content/uploads/2019/11/13101532/Asus-Laptop.jpg",
    name: "Gaming Laptop",
    price: "$1299.99",
  },
  {
    imgSrc: "https://rukminim2.flixcart.com/image/850/1000/shoe/u/n/w/black-grey-run-o-run-balls-9-original-imadz54xvjqjvh4g.jpeg?q=20&crop=false",
    name: "Running Shoes",
    price: "$99.99",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJfUN6WuKAcgtl5_VzL4Xv2kAXbKvn3oTvw&s",
    name: "Leather Jacket",
    price: "$149.99",
  },
  {
    imgSrc: "https://5.imimg.com/data5/QH/YQ/MY-66014446/opta-sb-050-hrxx-band-hd-color-display-bluetooth-fitness-smartwatch-all-in-one-activity-tracker.jpg",
    name: "Fitness Tracker",
    price: "$79.99",
  },
  {
    imgSrc: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016359/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/300117_0_rlzacv.png",
    name: "Wireless Earbuds",
    price: "$49.99",
  },
  {
    imgSrc: "https://rukminim2.flixcart.com/image/850/1000/shoe/u/n/w/black-grey-run-o-run-balls-9-original-imadz54xvjqjvh4g.jpeg?q=20&crop=false",
    name: "Running Shoes",
    price: "$99.99",
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJfUN6WuKAcgtl5_VzL4Xv2kAXbKvn3oTvw&s",
    name: "Leather Jacket",
    price: "$149.99",
  },
  {
    imgSrc: "https://5.imimg.com/data5/QH/YQ/MY-66014446/opta-sb-050-hrxx-band-hd-color-display-bluetooth-fitness-smartwatch-all-in-one-activity-tracker.jpg",
    name: "Fitness Tracker",
    price: "$79.99",
  },
   {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJfUN6WuKAcgtl5_VzL4Xv2kAXbKvn3oTvw&s",
    name: "Leather Jacket",
    price: "$149.99",
  }
];

function Section3() {
  return (
    <div className='py-10 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-8' style={{ fontFamily: 'Poppins' }}>Our Products</h2>
        <div className='flex flex-wrap justify-center'>
          {products.map((product, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl'>
                <img src={product.imgSrc} alt={product.name} className='w-full h-64 object-contain p-4' />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2' style={{ fontFamily: 'Poppins' }}>{product.name}</h3>
                  <p className='text-gray-600 mb-4' style={{ fontFamily: 'Poppins' }}>{product.price}</p>
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
