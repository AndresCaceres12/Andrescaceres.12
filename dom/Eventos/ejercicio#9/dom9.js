// Añade un evento click a un botón con ID botón y muestra un mensaje de confirmación antes de eliminar un elemento con ID eliminar.
var boton = document.getElementById("boton")
var texto =document.getElementById("eliminar")
boton.addEventListener("click", function(){
    alert("deseas eliminar ?")
       texto.textContent=" " 
    
})