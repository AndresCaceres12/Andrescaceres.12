var lista = document.getElementById("mi-lista")
var boton = document.getElementById("boton-li")
boton.addEventListener("click",function (){
   var numevo =document.createElement("li")
   numevo.textContent="nuevo elemento"
   lista.appendChild(numevo)
})