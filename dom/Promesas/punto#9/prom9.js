// Crea una función llamada getDirections que tome un origen y un destino como
//  argumentos, y devuelva una promesa que resuelva con un objeto de instrucciones 
//  de navegación (puedes simular la respuesta de una API externa usando getData).
function getDirections(origen,destino){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
              const navegación ={
                google:{ nave : " 1 .Acceso a Internet"+ " 2. Dispositivo con navegador web" + "3. Dirección web de Google:"},
                facebook:{ nave : " 1 .Acceso a Internet"+ " 2. Dispositivo con navegador web" + "3. Dirección web de faceboook:"}
}
               if (destino in navegación){
                resolve("Para navegar necesitas "+navegación[destino].nave)
               }
               else{
                reject("no tenemos intruccciones sobre esta wed")
               }
                 }, 3000);
    })
}
getDirections("cesar","facebook")
.then(getdata=>{
  console.log(getdata)
})
.catch(error=>{
  console.log(error)
})