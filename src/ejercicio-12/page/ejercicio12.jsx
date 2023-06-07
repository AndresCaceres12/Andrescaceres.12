import React, { useContext } from "react";
import { Componente1 } from "../components/componente1";
import { Navbar } from "../components/navbar";
import { CarritoContext } from "../contexts/ShoppingCartcontents";

const Ejercicio12 = () => {
  const { cart, setCart } = useContext(CarritoContext);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const removeFromCart = (productoId) => {
    const updatedCart = cart.filter((producto) => producto.id !== productoId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar />
      <Componente1 addToCart={addToCart} />
    </div>
  );
};

export default Ejercicio12;
