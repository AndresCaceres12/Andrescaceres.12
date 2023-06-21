import React, { useState } from "react";
import "./Tareas.css";

export const Tareas = () => {
  const [texto, settexto] = useState("");
  const [tareas, settareas] = useState([]);
  const [titulo, settitulo] = useState("");
  const [fecha, setfecha] = useState("");

  const EditaTitulo = (index) => {
    const newTareas = [...tareas];
    const newTarea = prompt("Ingrese el cambio");
    newTareas[index].titulo = newTarea;
    settareas(newTareas);
  };

  const EditaTexto = (index) => {
    const newtextos = [...tareas];
    const newtexto = prompt("Ingrese el cambio en contenido de la tarea");
    newtextos[index].texto = newtexto;
    settareas(newtextos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() !== "" && titulo.trim() !== "" && fecha.trim() !== "") {
      settareas([
        ...tareas,
        { titulo: titulo, texto: texto, completada: false, fecha: fecha },
      ]);
      settitulo("");
      settexto("");
      setfecha("");
    }
  };

  const handleChangeTitulo = (e) => {
    settitulo(e.target.value);
  };

  const handleChangeTexto = (e) => {
    settexto(e.target.value);
  };

  const handleChangefecha = (e) => {
    setfecha(e.target.value);
  };

  const handleCheck = (index, value) => {
    const newTareas = [...tareas];
    newTareas[index].completada = value;
    settareas(newTareas);
  };

  const removeFromCart = (index) => {
    const updatedTareas = tareas.filter((tarea, i) => i !== index);
    settareas(updatedTareas);
  };

  return (
    <div className="tareas-container">
      <h1 className="titulo">Agrega Tu Tarea</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="titulo-input"
          value={titulo}
          onChange={handleChangeTitulo}
          placeholder="Titulo.."
        />
        <input
          type="text"
          className="texto-input"
          value={texto}
          onChange={handleChangeTexto}
          placeholder="Escribe tu tarea.."
        />
        <input
          type="date"
          className="fecha-input"
          value={fecha}
          onChange={handleChangefecha}
        />
        <button type="submit" className="agregar-button">
          Agregar
        </button>
      </form>
      <div className="tareas-lista">
        {tareas.map((tarea, index) => (
          <div key={index} className="tarea-item">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={tarea.completada}
              onChange={(e) => handleCheck(index, e.target.checked)}
            />

            <div className="tarea-contenido">
              <span
                onClick={() => EditaTitulo(index)}
                className={`tarea-titulo ${
                  tarea.completada ? "completada" : ""
                }`}
              >
                {tarea.titulo}:
              </span>

              <span
                onClick={() => EditaTexto(index)}
                className={`tarea-texto ${
                  tarea.completada ? "completada" : ""
                }`} 
              >
                {tarea.texto}
              </span>
            </div>

            <span className="tarea-fecha">{tarea.fecha}</span>

            <button
              className="eliminar-button"
              onClick={() => removeFromCart(index)}
            >
              ️🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
