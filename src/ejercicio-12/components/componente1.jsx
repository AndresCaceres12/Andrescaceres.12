// Crear un componente que reciba como propiedad un arreglo de objetos con información
// de productos y muestre una lista con su nombre, descripción y precio. Además, debe incluir un botón de
// "Agregar al carrito" que permita añadir productos a un carrito virtual.
import React from "react";
import { Datos } from "../datos";
import { Items } from "./items";
import { Navbar } from "./navbar";

export const Componente1 = ({ addToCart }) => {
  return (
    <div className="items-list">
      {Datos.map((produc, idx) => {
        return <Items key={produc.id} addToCart={addToCart} {...produc} />;
      })}
    </div>
  );
};

