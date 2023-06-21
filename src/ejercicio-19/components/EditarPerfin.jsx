import React, { useState } from "react";

const EditarPerfil = ({ perfil, onGuardar }) => {
  const [nombre, setNombre] = useState(perfil.nombre);
  const [correoElectronico, setCorreoElectronico] = useState(
    perfil.correoElectronico
  );
  const [fotoPerfil, setFotoPerfil] = useState(perfil.fotoPerfil);
  const [intereses, setIntereses] = useState(perfil.intereses.join(", "));

  const handleSubmit = (event) => {
    event.preventDefault();
    const perfilEditado = {
      id: perfil.id,
      nombre,
      correoElectronico,
      fotoPerfil,
      intereses: intereses.split(", "),
    };
    onGuardar(perfilEditado);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        className="fly-input"
      />
      <input
        type="email"
        value={correoElectronico}
        onChange={(event) => setCorreoElectronico(event.target.value)}
        className="fly-input"
      />
      <input
        type="text"
        value={fotoPerfil}
        onChange={(event) => setFotoPerfil(event.target.value)}
        className="fly-input"
      />
      <input
        type="text"
        value={intereses}
        onChange={(event) => setIntereses(event.target.value)}
        className="fly-input"
      />
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default EditarPerfil;
