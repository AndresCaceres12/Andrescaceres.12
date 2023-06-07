import React from "react";

function Compraa() {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta",
      precio: 20.99,
      descripcion: "Una camiseta de algodón suave y cómoda.",
    },
    {
      id: 2,
      nombre: "Pantalones",
      precio: 34.99,
      descripcion: "Un par de pantalones de mezclilla de alta calidad.",
    },
    {
      id: 3,
      nombre: "Zapatos",
      precio: 49.99,
      descripcion: "Un par de zapatos deportivos para correr.",
    },
  ];

  return (
    <div>
      <h1>Tabla de Productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Compraa;
