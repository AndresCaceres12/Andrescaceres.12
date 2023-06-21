import React, { useState } from "react";
import EditarPerfil from "./EditarPerfin";

import "./DatosP.css";

const Añadir = () => {
  const [inputsVisible, setInputsVisible] = useState(false);
  const [valorNombre, setValorNombre] = useState("");
  const [valorEmail, setValorEmail] = useState("");
  const [valorImagen, setValorImagen] = useState("");
  const [valorInteres, setValorInteres] = useState("");
  const [nuevosPerfiles, setNuevosPerfiles] = useState([]);
  const [perfilEditando, setPerfilEditando] = useState(null);

  const handleEditarClick = (perfil) => {
    setPerfilEditando(perfil);
  };

  const guardado = (perfilGuardado) => {
    const nuevosPerfilesActualizados = nuevosPerfiles.map((perfil) => {
      if (perfil.id === perfilGuardado.id) {
        return perfilGuardado;
      }
      return perfil;
    });
    setNuevosPerfiles(nuevosPerfilesActualizados);
    setPerfilEditando(null);
  };

  const handleButtonClick = () => {
    setInputsVisible(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputsVisible(false);

    if (
      valorNombre.trim() !== "" &&
      valorEmail.trim() !== "" &&
      valorImagen.trim() !== "" &&
      valorInteres.trim() !== ""
    ) {
      const nuevoPerfil = {
        id: Date.now(),
        nombre: valorNombre,
        correoElectronico: valorEmail,
        fotoPerfil: valorImagen,
        intereses: valorInteres.split(","),
      };

      setNuevosPerfiles([...nuevosPerfiles, nuevoPerfil]);

      setValorNombre("");
      setValorEmail("");
      setValorImagen("");
      setValorInteres("");
    }
  };

  return (
    <div>
      <h2 className="AñadirP" onClick={handleButtonClick}>
        Añadir perfiles
      </h2>

      {inputsVisible && (
        <form className="fly-inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            value={valorNombre}
            onChange={(event) => setValorNombre(event.target.value)}
            placeholder="Ingresa tu nombre"
            className="fly-input"
          />
          <input
            type="email"
            value={valorEmail}
            onChange={(event) => setValorEmail(event.target.value)}
            placeholder="Tu email."
            className="fly-input"
          />
          <input
            type="text"
            value={valorImagen}
            onChange={(event) => setValorImagen(event.target.value)}
            placeholder="Pon la URL exacta de tu foto de perfil"
            className="fly-input"
          />
          <input
            type="text"
            value={valorInteres}
            onChange={(event) => setValorInteres(event.target.value)}
            placeholder="Ingresa tus intereses comunes (separados por comas)"
            className="fly-input"
          />
          <button type="submit" className="btn btn-danger">
            Crear
          </button>
        </form>
      )}
      <div className="datos-container">
        {nuevosPerfiles.map((perfil, index) => (
          <div key={perfil.id} className="perfil-item">
            <>
              <h3>{perfil.nombre}</h3>
              <p> {perfil.correoElectronico}</p>
              <img
                src={perfil.fotoPerfil}
                alt="Foto de perfil"
                className="foto-perfil"
              />
              <ul className="intereses-lista">
                {perfil.intereses.map((interes, index) => (
                  <li key={index}>{interes}</li>
                ))}
              </ul>
              <button
                className="btn btn-danger"
                onClick={() => handleEditarClick(perfil)}
              >
                Editar
              </button>
              {perfilEditando && perfilEditando.id === perfil.id && (
                <EditarPerfil perfil={perfil} onGuardar={guardado} />
              )}
              {perfilEditando && perfilEditando.id === perfil.id}
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Añadir;
