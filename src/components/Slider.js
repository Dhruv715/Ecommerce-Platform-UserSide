// src/Slider.js
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/happy-smiling-fashionable-woman-carrying-shopping-bags-looking-shopping-promotion-summer-sale_74952-3348.jpg?w=1380&t=st=1718278061~exp=1718278661~hmac=9c6ff1ef52e31c823d65cb68017f6208be8867bae11bdadb9f6319b3b77a6454"
  },
  {
    id: 2,
    image: "https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
  },
  {
    id: 3,
    image: "https://t4.ftcdn.net/jpg/03/38/08/77/360_F_338087735_TA0hy2AlQajKsb0xphYh5ebhVxdxoi77.jpg"
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
