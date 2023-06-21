import React from "react";
import "./diseñoTienda.css"

export const Items = ({ id, nombre, precio, imagen, cantidad, addToCart }) => {
  const handleClick = () => {
    const producto = {
      id,
      nombre,
      precio,
      imagen,
      cantidad,
    };
    addToCart(producto);
  };

  return (
    <div className="item-box">
      <div>{nombre}</div>
      <img src={imagen} alt="" width="100%" />
      <div className="item-price">${precio}</div>
      <button className='item-add-button' onClick={handleClick}>
        + Añadir producto
      </button>
    </div>
  );
};

