// Crea una función llamada uploadFile que tome un nombre de archivo y una prom
// esa de File como argumentos, y devuelva una promesa que resuelva con una URL 
// de descarga del archivo sub
// ido al servidor.
function uploadFile(nombre,file){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
                

            if (nombre == "archivo"){
                resolve("https://www.google.com/?hl=es")
            }
            else{{
                reject ("no tenemos ese link")
            }}
           
     
        }, 2000)
    }
    
)}
uploadFile("archivo","si")
.then(nombre=>{
    console.log(nombre +" Aqui esta. ")
})
.catch(error=>{
    console.log(error)
})