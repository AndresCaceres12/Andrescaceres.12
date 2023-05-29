// 4. Implementa una función llamada calcular que reciba dos
// parámetros numéricos llamados a y b, y otro parámetro de
// tipo string llamado operacion que representa la operación
// matemática que se desea realizar (puede ser "suma", "resta",
// "multiplicacion", o "division").
// La función debe retornar una promesa que se resuelve con el
// resultado de la operación matemática entre a y b, de acuerdo
// con el valor del parámetro operacion.
// Si el parámetro operacion no tiene un valor válido, la promesa
// debe ser rechazada con un mensaje de error.


function calcular(a, b, operacion) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a !== "" && b !== "" && operacion !== "") {
          switch (operacion) {
            case "suma":
              resolve(a + b);
              break;
            case "resta":
              resolve(a - b);
              break;
            case "multiplicacion":
              resolve(a * b);
              break;
            case "division":
              resolve(a / b);
              break;
            default:
              reject("Ingresa una operación válida");
              break;
          }
        } else {
          reject("Ingresa valores válidos para a, b y operacion");
        }
      }, 3000);
    });
  }
  
  async function operacioness() {
    try {
      const resultado = await calcular(2, 2, "suma");
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }
  
  operacioness();
  