import React, { useState } from "react";
import L from "leaflet";
import "./Distancia.css";

const Distancia = () => {
  const [distanceTecclas, setDistanceTecclas] = useState(null);
  const [distanceCenter, setDistanceCenter] = useState(null);
  const [distanceCenterTecclas, setDistanceCenterTecclas] = useState(null);

  const calculateDistance = (pointA, pointB) => {
    if (!pointA || !pointB) {
      return null;
    }

    const distance = pointA.distanceTo(pointB);
    return distance.toFixed(2); // Redondear la distancia a 2 decimales
  };

  const handleCalculateDistance = () => {
    const pointA = new L.LatLng(40.7128, -74.0060); // Casa Andrés
    const pointB = new L.LatLng(37.7749, -122.4194); // Tecclas
    const pointC = new L.LatLng(7.89391, -72.50782); // centro

    const distanceTecclas = calculateDistance(pointA, pointB);
    const distanceCenter = calculateDistance(pointC, pointA);
    const distanceCenterTecclas = calculateDistance(pointB,pointC);

    setDistanceTecclas(distanceTecclas);
    setDistanceCenter(distanceCenter);
    setDistanceCenterTecclas(distanceCenterTecclas)
    
  };

  return (
    <div>
      <div className="ContainerDistancias">
        <div>
          <h4>Distancia entre Casa Andrés y Tecclas:</h4>
          {distanceTecclas && <p> {distanceTecclas} metros</p>}
        </div>
        <div>
          <h4>Distancia entre el Centro y Casa Andrés:</h4>
          {distanceCenter ? <p> {distanceCenter} metros</p> : null}
        </div>
        <div>
          <h4>Distancia entre el Centro y Tecclas:</h4>
          {distanceCenterTecclas ? <p>  {distanceCenterTecclas} metros</p> : null}
        </div>
      </div>
      <div className="table-responsive">
       
      </div>
      <button onClick={handleCalculateDistance}>Calcular</button>
    </div>
  );
};

export default Distancia;
