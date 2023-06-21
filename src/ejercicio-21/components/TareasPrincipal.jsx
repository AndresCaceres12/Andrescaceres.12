import React, { useState } from "react";
import "./RenderizarT.css";

const TareasPrincipal = (props) => {
  const [tareas, settareas] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    props.RecibeTaks(tareas);
    settareas("");
  };

  return (
    <div className="containerDeTareas">
      <form onSubmit={HandleSubmit}>
        <h1 className="titleDeTareas">Lista de tareas</h1>
        <input
          className="inputDeTareas"
          type="text"
          placeholder="Ingresa tu tarea..."
          value={tareas}
          onChange={(e) => settareas(e.target.value)}
        />
        <button className="buttonDeTareas">Agregar</button>
      </form>
    </div>
  );
};

export default TareasPrincipal;
