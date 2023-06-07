import React, { useState } from "react";

const Filtrar = ({ names }) => {
  const [filtro, setFiltro] = useState("");

  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input className="filtroInput"
        type="text"
        placeholder="Filtrar nombres"
        value={filtro}
        onChange={handleInputChange}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filtrar;
