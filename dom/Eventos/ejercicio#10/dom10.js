 const selectElement = document.getElementById('select');
 const valorElement = document.getElementById('valor');
 selectElement.addEventListener('change', function() {
   const valorSeleccionado = selectElement.value;
   valorElement.textContent = valorSeleccionado;
 });