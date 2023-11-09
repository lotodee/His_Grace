// Slideshow.js
import React, { useState, useEffect } from 'react';
import "./feat.scss"
const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="slideshow">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} />
    </div>
  );
};

export default Slideshow;
