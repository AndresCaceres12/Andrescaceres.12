
var formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  alert('El nombre ingresado es: ' + nombre) ;
});
