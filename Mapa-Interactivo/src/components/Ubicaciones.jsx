import React from "react";

export const Ubicaciones = ({ handlePlaceSelection }) => {
  const handlePlaceClick = (place) => {
    handlePlaceSelection(place);
  };

  return (
    <div>
      <h2>Selecciona los lugare para añadir un point :</h2>
      <ul>
        <li onClick={() => handlePlaceClick({ name: "Centro", position: [7.8939100, -72.5078200] })}>
          Centro
        </li>
        <li onClick={() => handlePlaceClick({ name: "Tecclas", position: [7.889612, -72.492131] })}>
          Tecclas
        </li>
        <li onClick={() => handlePlaceClick({ name: "Casa de Andres", position: [7.889906, -72.466101] })}>
          Casa de Andres
        </li>
      </ul>
    </div>
  );
};
