// Crea una función llamada getUserData que tome un ID de usuario como argumento 
// y devuelva una promesa que resuelva con el objeto de datos del usuario con ese ID 
// (puedes simular la respuesta de una API externa usando getData).


function getData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usersData = {
          1: { id: 1, name: 'John Doe', age: 30 },
          2: { id: 2, name: 'Jane Smith', age: 25 },
          3: { id: 3, name: 'Bob Johnson', age: 40 }
        };
        if (userId in usersData) {
          resolve(usersData[userId]); 
        } else {
          reject('no se encuentra este id');
        }
      }, 1000); 
    });
  }
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      getData(userId)
        .then(userData => {
          resolve(userData); 
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  getUserData(1)
    .then(userData => {
      console.log(userData); 
    })
    .catch(error => {
      console.error(error);
    });