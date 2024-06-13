// src/components/Section4.js
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "John Doe",
    review: "This product exceeded my expectations! Highly recommended.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Excellent quality and great customer service.",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&s",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    review: "Very satisfied with my purchase. Will buy again!",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqRbJqrabB7q76uOOjEs2Oljk4CGBNpRdCNR4qhLnRWkIX0LKnLmedNS-ILmArB9cCaM&usqp=CAU",
    rating: 5,
  },
  {
    name: "Michael Brown",
    review: "Fast delivery and the product works as described.",
    photo: "https://www.nicesnippets.com/demo/following1.jpg",
    rating: 4,
  },
  {
    name: "Lisa White",
    review: "Great product, very happy with the purchase.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    review: "Quality is top-notch and delivery was quick.",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
  {
    name: "Samantha Davis",
    review: "Amazing product, highly recommend to everyone.",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 5,
  },
  {
    name: "Chris Evans",
    review: "Very satisfied with my purchase, great quality.",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 5,
  },
];

function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-10 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-8' style={{ fontFamily: 'Poppins' }}>Customer Testimonials</h2>
        <div className='relative overflow-hidden'>
          <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-4 flex-shrink-0'>
                <div className='bg-white shadow-lg rounded-lg p-6 h-full'>
                  <img src={testimonial.photo} alt={testimonial.name} className='w-16 h-16 object-cover rounded-full mx-auto mb-4' />
                  <h3 className='text-xl font-semibold text-center' style={{ fontFamily: 'Poppins' }}>{testimonial.name}</h3>
                  <div className='flex justify-center mb-4'>
                    {[...Array(testimonial.rating)].map((star, i) => (
                      <svg key={i} className='w-5 h-5 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path d="M10 15l-5.88 3.1 1.12-6.5L0 6.9l6.56-.94L10 0l3.44 5.96L20 6.9l-5.24 4.7 1.12 6.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className='text-center text-gray-600 mb-4' style={{ fontFamily: 'Poppins' }}>{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
