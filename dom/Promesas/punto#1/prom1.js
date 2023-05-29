function sum(a, b) {
    return new Promise((resolve, reject) => {
      // Comprobamos si los argumentos son números
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Ambos argumentos deben ser números'));
      } else {
        // Calculamos la suma de los dos números
        const result = a + b;
        // Resolvemos la promesa con el resultado
        resolve(result);
      }
    });
  }
  sum(3, 3)
  .then(result => {
    console.log('La suma es:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  