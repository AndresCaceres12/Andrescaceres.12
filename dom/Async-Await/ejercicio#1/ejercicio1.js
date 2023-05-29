// Implementa una función llamada esperarSegundos que
// reciba un parámetro llamado segundos que representa la
// cantidad de segundos que la función debe esperar antes de
// resolver la promesa.
// La función debe retornar una promesa que se resuelve
// después de esperar la cantidad de segundos especificada en
// el parámetro.
function esperarSegundos (segundos ){
    return new Promise ((resolve,reject)=>{
        setInterval(() => {
            resolve("ya")
            
        }, segundos*1000);
    })
}
async function esperarSegundo0() {
    const segundos = await esperarSegundos(4)
    console.log(segundos)
}
esperarSegundo0()