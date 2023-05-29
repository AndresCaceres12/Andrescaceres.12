// Crea una función llamada translate que tome un texto y un idioma de destino com
//  argumentos, y devuelva una promesa que resuelva con el texto traducido al idiom
//  a de destino (puedes simular la respuesta de una API externa usando getData)
// .
function translate (texto,idioma){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const idiomaa = {
                ingles:{traducido:"hello"},
                frances:{traducido:"Salut"}
            }
            if(idioma in idiomaa){
                resolve("su traduccion es "+ idiomaa[idioma].traducido)
            }else{
                reject("disculpa no tenemos traduccion para este idioma")
            }
            
        }, 2000);
    })
}
translate("hola","frances")
.then(getData=>{
    console.log(getData)
})
.catch(Error=>{
    console.log(Error)
})