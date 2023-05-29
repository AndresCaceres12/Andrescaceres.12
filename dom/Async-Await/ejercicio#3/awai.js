// Implementa una función llamada obtenerInformacion que
// reciba un parámetro llamado id que representa el
// identificador de un usuario en una API externa.
// La función debe hacer una llamada a la API externa para
// obtener la información del usuario con el identificador
// especificado en el parámetro id.
// Si la llamada a la API es exitosa, la función debe retornar una
// promesa que se resuelve con la información del usuario.
// Si la llamada a la API es fallida, la función debe retornar una
// promesa que se rechaza con un mensaje de error.

function obtenerInformacion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuariosApi = {
        1: { numero: " 1 Nombre : Andres" },
        2: { numero: " 2 Nombre : Cesar" },
        3: { numero: " 3 Nombre : Laura" },
        4: { numero: " 4 Nombre : Jolie" },
        5: { numero: " 5 Nombre : Cristhiam" },
      };
      if (id in usuariosApi) {
        resolve(
          "Exito el usuario se encuentra en nuestra base de datos " +
            usuariosApi[id].numero
        );
      } else {
        reject("No se encontro este id de usuario");
      }
    }, 2000);
  });
}

async function losids() {
  try {
    const resultado = await obtenerInformacion(4);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
losids()