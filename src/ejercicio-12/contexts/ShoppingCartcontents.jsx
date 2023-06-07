import React, { createContext, useState } from 'react';

export const CarritoContext = createContext(); // Importa el contexto correctamente

export const ShoppingCartcontents = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CarritoContext.Provider value={{ cart, setCart, cartCount, addToCart }}>
      {children}
    </CarritoContext.Provider>
  );
};


