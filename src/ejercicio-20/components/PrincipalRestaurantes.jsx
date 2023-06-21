import React, { useState, useEffect } from "react";
import { Restaurantes } from "./Restaurantes";
import "./PrincipalRestaurantes.css";
import "./FiltroRestaurantes.css";

const PrincipalRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState(Restaurantes);
  const [filtro, setFiltro] = useState({ nombre: "", tipo: "", ubicacion: "" });

  useEffect(() => {
    const quitarF = () => {
      setFiltro({ nombre: "", tipo: "", ubicacion: "" });
      setRestaurantes(Restaurantes);
    };
    return quitarF;
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFiltro((prevFiltro) => ({ ...prevFiltro, [name]: value }));
  };

  const filtrado = () => {
    const { nombre, tipo, ubicacion } = filtro;
    const filteredRestaurantes = Restaurantes.filter((restaurante) => {
      return (
        restaurante.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
        restaurante.tipo.toLowerCase().includes(tipo.toLowerCase()) &&
        restaurante.ubicación.toLowerCase().includes(ubicacion.toLowerCase())
      );
    });
    setRestaurantes(filteredRestaurantes);
  };

  const quitarF = () => {
    setFiltro({ nombre: "", tipo: "", ubicacion: "" });
    setRestaurantes(Restaurantes);
  };

  return (
    <div>
      <div>
        <form>
          <div className="filtro-container">
            <input
              className="filtro-input"
              type="text"
              name="nombre"
              placeholder="Buscar por nombre"
              onChange={handleInput}
            />
            <input
              className="filtro-input"
              type="text"
              name="tipo"
              placeholder="Filtrar por tipo de comida"
              onChange={handleInput}
            />
            <input
              className="filtro-input"
              type="text"
              name="ubicacion"
              placeholder="Filtrar por ubicación"
              onChange={handleInput}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                className="btn btn-success"
                onClick={filtrado}
              >
                Aplicar
              </button>
              <button type="button" className="btn btn-dark" onClick={quitarF}>
                Quitar filtro
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="restaurantes-container">
        {restaurantes.map((restaurante, index) => (
          <div key={index} className="restaurante-card">
            <h3 className="restaurante-nombre">
              <b>Restaurante : </b>
              {restaurante.nombre}
            </h3>
            <p className="restaurante-tipo">
              <b>Tipo de comida : </b>
              {restaurante.tipo}
            </p>
            <p className="restaurante-direccion">
              <b>Dirección : </b>
              {restaurante.dirección}
            </p>
            <p className="restaurante-ubicacion">
              <b>Ubicación : </b>
              {restaurante.ubicación}
            </p>
            <b className="restaurante-telefono">
              <b>Número telefónico : </b>
              {restaurante.teléfono}
            </b>
            <div className="restaurante-sitio-container">
              <a
                className="btn btn-outline-dark"
                target="_blank"
                href={restaurante.sitioweb}
              >
                Sitio web
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrincipalRestaurantes;
