import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={previousImage}> 🠜 </button>
      <img src={images[currentImageIndex]} alt="carousel-image" />
      <button onClick={nextImage}> 🠞 </button>
    </div>
  );
};

export default Carousel;
