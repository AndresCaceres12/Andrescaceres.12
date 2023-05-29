// Obtener los elementos por su ID
const botonColor = document.getElementById('boton-color');
const elementoCambioColor = document.getElementById('cambio-color');


botonColor.addEventListener('click', function() {
    elementoCambioColor.textContent="Cambie"
    elementoCambioColor.style.backgroundColor = 'red'; // Cambia 'red' por el color deseado

});
