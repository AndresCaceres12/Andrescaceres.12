import React from 'react';
import CountdownComponent from '../components/diass';

const Ejercicio7 = () => {
  const targetDate = '2023-07-01'; 

  return (
    <div>
      
      <CountdownComponent date={targetDate} />
    </div>
  );
};

export default Ejercicio7;
