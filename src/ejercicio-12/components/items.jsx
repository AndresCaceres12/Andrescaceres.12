import React from "react";

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
      <img src={imagen} alt="" width="120" />
      <div className="item-price">${precio}</div>
      <button className='item-add-button' onClick={handleClick}>
        + Añadir producto
      </button>
    </div>
  );
};

