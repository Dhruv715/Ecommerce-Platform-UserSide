// src/Slider.js
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/happy-smiling-fashionable-woman-carrying-shopping-bags-looking-shopping-promotion-summer-sale_74952-3348.jpg?w=1380&t=st=1718278061~exp=1718278661~hmac=9c6ff1ef52e31c823d65cb68017f6208be8867bae11bdadb9f6319b3b77a6454"
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-121722.jpg?t=st=1718278209~exp=1718281809~hmac=436565cabc0f5bd76392b0aa0d4ce9035fd1199e001fab8cc05ae5ab4db1b4b0&w=1380"
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/happy-easter-easter-painted-eggs-basket-wooden-rustic-table-your-decoration-holiday_74952-2955.jpg?t=st=1718278277~exp=1718281877~hmac=24b110d7f288ff9c99e32bce6fa434a5b33e34e57477baa8feedaa9145c120b2&w=996"
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative flex w-full h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 h-full">
            <img src={slide.image} className="block w-full h-full object-cover" alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
