// Implementa una función llamada cuadradosNumeros que
// recibe una lista de números llamada numeros.
// La función debe calcular el cuadrado de cada número de la
// lista y retorna una promesa que se resuelve con una lista de
// objetos. Cada objeto debe tener dos propiedades: número (el
// número original) y cuadrado (el cuadrado del número).
// Si la lista de números está vacía, la promesa debe ser
// rechazada con un mensaje de error.

function cuadradosNumeros(numeros) {
    return new Promise((resolve, reject) => {
      if (numeros.length === 0) {
        reject('La lista de números está vacía');
      } else {
        const resultados = numeros.map(numero => ({
          numero: numero,
          cuadrado: numero * numero
        }));
        resolve(resultados);
      }
    });
  }
  
  
  const numeros = [2, 4, 6, 8];
  async function resultadoo (){
    try{
      var final = await cuadradosNumeros(numeros)
      console.log(final);
    }catch(error){

  console.log(error)
    }
  }
resultadoo()