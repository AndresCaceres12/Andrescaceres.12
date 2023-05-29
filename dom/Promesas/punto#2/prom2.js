function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular la obtención de datos de una API externa
        const data = {
          id: 1,
          nombre: "Ejemplo",
          descripcion: "Esto es un ejemplo de datos obtenidos de una API externa."
        };
  
        // Resuelve la promesa con los datos
        resolve(data);
      }, 2000); // Simulamos un tiempo de espera de 2 segundos (2000 milisegundos)
    });
  }
  getData()
  .then((data) => {
    console.log("Datos obtenidos:", data);
    // Hacer algo con los datos obtenidos
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
    // Manejar el error de alguna forma
  });
  