import React, { useState } from 'react';
import './input.css'; // Archivo CSS para estilos del input

const InputBonito = () => {
  const [texto, settexto] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const cambia = ({ target }) => {
    settexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      setComentarios([...comentarios, texto]);
      settexto('');
    }
  };

  return (
    <div className="input-container">
      <h4>Agrega un comentario...</h4>
      <div className="los2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={texto}
            onChange={cambia}
            placeholder="Comentario"
            className="input-bonito"
          />
          <button type="submit">Añadir</button>
        </form>
      </div>
      <div className="comentarios">
        <p>Comentarios</p>
        <div className="vieneDelinput">
          {comentarios.map((comentario, index) => (
            <p  key={index}>{comentario}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputBonito;
