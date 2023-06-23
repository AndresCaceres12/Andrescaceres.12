import React, { useState } from "react";
import "./Formulario.css";

const MensajeError = ({ mensaje, usuario }) => {
  return (
    <>
      <p className="errorMessage">{mensaje}</p>
      <span className="Usuarios">{usuario}</span>
    </>
  );
};
export const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [error, setError] = useState("");
  const [usuario, setusuario] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCorreo("");
    setcontraseña("");
    setusuario("");
  };

  const handleContrasenaChange = (e) => {
    const value = e.target.value;
    setcontraseña(value);
    setError("");
  };

  const mirar = () => {
    if (contraseña !== "" && correo !== "" && usuario !== "") {
      if (contraseña.length >= 8) {
        setError(<span style={{ color: "green" }}>Bienvenido {usuario}</span>);
      } else {
        setError("La contraseña debe 8 caracteres o mas.");
      }
    } else {
      setError("Por favor, Rellena todos los campos.");
    }
  };

  return (
    <div className="ContainerForm">
      <div className="BoxForm">
        <form onSubmit={handleSubmit}>
          <h2>Registrate</h2>
          <div className="inputContainer">
            <input
              type="Texto"
              placeholder="Nombre de usuario.."
              value={usuario}
              onChange={(e) => setusuario(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              value={contraseña}
              onChange={handleContrasenaChange}
            />
          </div>
          <div className="btnContainer">
            <button className="btn btn-success" onClick={mirar}>
              Registrarse
            </button>
          </div>
        </form>
        {error && <MensajeError mensaje={error} nombre={usuario} />}
      </div>
    </div>
  );
};
