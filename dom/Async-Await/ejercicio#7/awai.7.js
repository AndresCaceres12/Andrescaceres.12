// Implementa una función llamada comparar que reciba dos
// parámetros numéricos llamados a y b.

// Si a es mayor que b, la función debe retornar una promesa
// que se resuelve con el valor "a es mayor que b".
// Si b es mayor que a, la función debe retornar una promesa
// que se resuelve con el valor "b es mayor que a".
// Si a y b son iguales, la función debe retornar una promesa que
// se rechaza con el valor "a y b son iguales".
function comparar (a,b){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(a==b){
                resolve("a y b son iguales")
              }
                     if(a>b){
                        resolve("a es mayor que b")
                     }else{
                        reject("b es mayor que a")
                     }
        }, 1000);
    })
}

async function resultado0 (){
    try{
        var resultado = await comparar(3,6)
        console.log(resultado)
    }catch(error){
        console.log(error)
    }
}
resultado0()