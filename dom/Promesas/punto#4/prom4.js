// Crea una función llamada login que tome un nombre de usuario y una contraseña como 
// argumentos, y devuelva una promesa que resuelva con true si las credenciales son 
// válidas, o false en caso contrario.

function login (usuario,contrasela){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(usuario=="cesar" && contrasela=="andres"){
                resolve("verdadero")
            }else{
                reject("falso")
            }
            
        },2000);
    })
}
login("cesar","andres")
.then((data) => {
  console.log("los datos ingresados son correctos:", data);
  // Hacer algo con los datos obtenidos
})
.catch((error) => {
  console.error("Error al obtener los datos:", error);
  // Manejar el error de alguna forma
});
