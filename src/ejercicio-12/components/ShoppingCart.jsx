import React, { useContext } from "react";
import { Navbar } from "./navbar";
import { CarritoContext } from "../contexts/ShoppingCartcontents";

export const ShoppingCart = () => {
  const { cart, setCart } = useContext(CarritoContext);

  const removeFromCart = (productoId) => {
    const updatedCart = cart.filter((producto) => producto.id !== productoId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar />
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cart.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
              <button className="botonEli" onClick={() => removeFromCart(producto.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
