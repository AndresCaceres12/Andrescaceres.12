var boton = document.getElementById("item1")
var elemento = document.querySelectorAll(".activo")
console.log(elemento)
boton.addEventListener("click",function(){
    for(let i=1 ; 1< elemento.length ; i++){ 
    elemento[i].classList.remove("activo")
    }
})