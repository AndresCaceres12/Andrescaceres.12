import React, { useState } from "react";
import { Image } from "./Timagenes";
import "./img.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Imagenes() {
  const [check, setCheck] = useState(Image);

  const eliminar = (id) => {
    const updatedTareas = check.filter((image) => image.id !== id);
    setCheck(updatedTareas);
  };

  const toggleDeleteButton = (id) => {
    const updatedImages = check.map((image) => {
      if (image.id === id) {
        return { ...image, showDeleteButton: !image.showDeleteButton };
      }
      return image;
    });

    setCheck(updatedImages);
  };

  return (
    <div className=" ">
      <h1>Imagenes</h1>
      <div className="container">
        <div className="row">
          {check.map((image) => (
            <div key={image.id} className="col-md-4">
              <div className="contenedorImage">
                <img
                  onClick={() => toggleDeleteButton(image.id)}
                  src={image.image}
                  style={image.styles}
                  width={"100%"}
                  alt=""
                  srcSet=""
                  className="hoverI"
                />
                {image.showDeleteButton && (
                  <button
                    onClick={() => eliminar(image.id)}
                    type="button"
                    className="deleteButton"
                  >
                    x
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Imagenes;
