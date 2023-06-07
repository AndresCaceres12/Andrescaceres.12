import React from "react";
export const Renderizarl = () => {
  const Libro = {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    genero: "Fantasía",
    añoPublicacion: 2007,
    editorial: "DeBolsillo",
    paginas: 662,
    //imagen:"https://static.wikia.nocookie.net/escritores-del-mundo/images/2/24/El_nombre_del_viento.jpg/revision/latest?cb=20160930045556&path-prefix=es"
  };
  return (
    <div className="Contenedor_libro">
      <div className="textoLibro">
        <h1>{Libro.titulo}</h1>
        <p> <b>Autor</b> : {Libro.autor}</p>
        <p><b>Genero</b> : {Libro.genero}</p>
        <p><b>Año de publicacion</b> :{Libro.añoPublicacion} </p>
        <p><b>Paginas</b> : {Libro.paginas} </p>
      </div>
      <div className="imagenLibro">
        <img
          src={
            "https://1.bp.blogspot.com/-ach66n0b58U/X9JoZxTatAI/AAAAAAAAACw/-sWt1qQj74sKXuMh_cw4BRCPlh7_sqoMQCLcBGAsYHQ/w1200-h630-p-k-no-nu/novela-el-nombre-del-viento-opinion.jpg"
          }
          alt=""
          srcSet=""
        />
       
      </div>
    </div>
  );
};
