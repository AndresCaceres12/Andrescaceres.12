
var boton = document.getElementById('boton');
var mensaje = document.getElementById('mensaje');


boton.addEventListener('click', function() {
  mensaje.textContent = '¡Haz hecho clic!';
});
