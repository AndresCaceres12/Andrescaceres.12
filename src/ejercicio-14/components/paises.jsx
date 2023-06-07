import React, { useState } from 'react';
import { PaisesInfo } from '../info';
import { PaisRecorrido } from './paisRecorrido';
import "./paises.css" 

const Paises = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);

  const handleClick = (pais) => {
    setPaisSeleccionado(pais);
  };

  return (
    <div className='listado'>
      <h2>Selecciona el pais</h2>
      <ul>
        <li onClick={() => handleClick("Italia")}>Italia</li>
        {paisSeleccionado === "Italia" && <PaisRecorrido paisSeleccionado="Italia" />}
        <li onClick={() => handleClick("Japon")}>Japon</li>
        {paisSeleccionado === "Japon" && <PaisRecorrido paisSeleccionado="Japon" />}
        <li onClick={() => handleClick("Egipto")}>Egipto</li>
        {paisSeleccionado === "Egipto" && <PaisRecorrido paisSeleccionado="Egipto" />}
        <li onClick={() => handleClick("Australia")}>Australia</li>
        {paisSeleccionado === "Australia" && <PaisRecorrido paisSeleccionado="Australia" />}
      </ul>
    </div>
  );
};

export default Paises;
