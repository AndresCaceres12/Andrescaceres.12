function getUsers(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuarios = {
          1: { usuario: 1, nombre: "cesar", años: 17 },
          2: { usuario: 2, nombre: "cesar", años: 27 },
          3: { usuario: 3, nombre: "cesar", años: 37 }
        };
        if (user in usuarios) {
          resolve("El usuario está en nuestra base de datos");
        } else {
          reject("No se encuentra este usuario");
        }
      }, 2000);
    });
  }
  
  getUsers(1)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log("Error:", error);
    });
  