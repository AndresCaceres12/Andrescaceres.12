import React from 'react';
import { PaisesInfo } from '../info';
import "./paises.css" 

export const PaisRecorrido = ({ paisSeleccionado }) => {
  const pais = PaisesInfo.find((pais) => pais.nombre === paisSeleccionado);

  if (!pais) {
    return <p>No se encontró información para el país seleccionado</p>;
  }

  return (
    <div className='datos'>
      <h2>{pais.nombre}</h2>
      <p> <b> Cultura</b>: {pais.cultura}</p>
      <p><b>Historia</b>: {pais.historia}</p>
      <p><b>Idioma</b>: {pais.idioma}</p>
      <p><b>Lugares turísticos</b>: {pais.lugaresTuristicos}</p>
    </div>
  );
};
