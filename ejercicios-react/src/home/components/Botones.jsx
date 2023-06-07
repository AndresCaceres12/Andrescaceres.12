import React from "react";
import { botones } from "../utils/data";
import { Link} from "react-router-dom"

export const Botones = () => {
  return (
    <div>
      {botones.map((boton) => (
        <div key={boton.id}>
         <Link to={boton.direccion}>
      {boton.nombre}
         </Link>
        </div>
      ))}
    </div>
  );
};
