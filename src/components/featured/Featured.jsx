// Featured.js
import React from 'react';
import Slideshow from './FeaturedSlide';
import "./Featured.scss";

const Featured = () => {
  const slides = [
    "./img/schoolmain.jpeg",
    "./img/schoolmain2.jpeg",
    "./img/schoolmain3.webp",
 
 
    // Add more slide URLs as needed.
  ];

  return (
    <div className="featured">
      <div className="container">
        <Slideshow slides={slides}/>
      </div>
    </div>
  );
};

export default Featured;