import React from "react";

import { ReactDOM } from "react";
const SumaNumeros = ({ numeros }) => {
  const suma = numeros.reduce((total, numero) => total + numero, 0);

  return <p>La suma es: {suma}</p>;
};

const Resultado = () => {
  const numeros = [2, 3, 4];

  return (
    <div>
      <h1>Resultado</h1>
      <SumaNumeros numeros={numeros} />
    </div>
  );
};

export default Resultado;
