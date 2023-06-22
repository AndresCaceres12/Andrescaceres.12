import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Ubicaciones } from "./Ubicaciones";
import Distancia from "./Distancia";

const MapaInteractivo = () => {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
          searchNearbyPlaces(latitude, longitude);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no es compatible con este navegador.");
    }
  }, []);

  const toggleMapa = () => {
    setMostrarMapa(!mostrarMapa);
  };

  const greenIcon = new L.Icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  const handlePlaceSelection = (place) => {
    setSelectedPlaces((prevPlaces) => [...prevPlaces, place]);
  };
  return (
    <>
      {mostrarMapa && (
        <MapContainer
          id="map-id"
          center={currentLocation || [7.89391, -72.50782]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {currentLocation && (
            <Marker position={currentLocation}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>
          )}
          {selectedPlaces.map((place) => (
            <Marker key={place.name} position={place.position} icon={greenIcon}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
      <button onClick={toggleMapa}>
        {mostrarMapa ? "Ocultar Todo" : "Mostrar Mapa"}
      </button>

      {mostrarMapa && (
        <>
          <Ubicaciones handlePlaceSelection={handlePlaceSelection} />
          <Distancia />
        </>
      )}
    </>
  );
};

export default MapaInteractivo;
