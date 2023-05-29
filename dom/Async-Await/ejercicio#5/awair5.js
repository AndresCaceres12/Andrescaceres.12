// Implementa una función llamada tamanioTotalRespuestas
// que recibe una lista de URLs llamada urls.
// La función debe realizar una petición HTTP a cada URL y sumar
// el tamaño en bytes de las respuestas.
// La función debe retornar una promesa que se resuelve con el
// tamaño total en bytes de las respuestas.

function tamanioTotalRespuestas(urls) {
    return Promise.all(
      urls.map(url => fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la petición a ${url}: ${response.status} ${response.statusText}`);
          }
          return response;
        })
      )
    )
      .then(responses => {
        return Promise.all(
          responses.map(response => response.blob())
        );
      })
      .then(blobs => {
        let totalSize = 0;
        blobs.forEach(blob => {
          totalSize += blob.size;
        });
        return totalSize;
      });
  }
  
  const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];
  
  async function obtenerTamanioTotal() {
    try {
      const resultado = await tamanioTotalRespuestas(urls);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }
  
  obtenerTamanioTotal();
  