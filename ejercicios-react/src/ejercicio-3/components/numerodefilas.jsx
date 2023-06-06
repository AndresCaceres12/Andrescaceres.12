import React from 'react';
import { ReactDOM } from 'react';
const NumberList = ({ number }) => {
  // Crear una matriz de números del 1 al número indicado
  const numbersArray = Array.from({ length: number }, (_, index) => index + 1);

  return (
    <div>
   
      <ul>
        {numbersArray.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
