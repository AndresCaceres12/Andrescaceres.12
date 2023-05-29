// Crea una función llamada getWeather que tome una ciudad como argumento, 
// y devuelva una promesa que resuelva con el objeto de tiempo actual para 
// esa ciudad (puedes simular la respuesta de una API externa usando getData)
function getWeather(ciudad) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         const ciudades = {
            cucuta: {hora: "08:52 am."},
            caracas:{ hora: "09:52 am."},
            madrid: {hora: "3:53 p. m."}
         }
         if (ciudad in ciudades) {
             resolve("La hora actual es "+ciudades[ciudad].hora);
         } else {
             reject("No tenemos registro de esa ciudad");
         }
         
     }, 3000);
    }) 
 }
 
 getWeather("caracas")
 .then(hora => {
     console.log(hora);
 })
 .catch(error => {
     console.log(error);
 });
 