import React, { useState } from 'react';

const ButtonComponent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('¡GRACIASS!');
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic</button>
      <p>{message}</p>
    </div>
  );
};

export default ButtonComponent;
