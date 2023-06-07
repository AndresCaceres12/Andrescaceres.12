import React from 'react';
import Carousel from '../components/Carrusel';

const  Ejercicio10= () => {
  const images = [
    'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_640.jpg',
    'https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_640.jpg',
    'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_640.jpg',
    
  ];

  return (
    <div>
      <h1> Carrusel </h1>
      <Carousel images={images} />
    </div>
  );
};

export default Ejercicio10;
