// var boton = document.getElementById("submit");
// var notas = [];

// // Cargar notas almacenadas en localStorage
// var notasGuardadas = localStorage.getItem("notas");
// if (notasGuardadas) {
//   notas = JSON.parse(notasGuardadas);
// }

// boton.addEventListener("click", function() {
//   var titulo = document.getElementById("titulo").value;
//   var contenido = document.getElementById("contenido").value;
//   var fecha = document.getElementById("fecha").value;

//   if (titulo !== "" && contenido !== "" && fecha !== "") {
//     var ul = document.getElementById("pendiente-list");

//     var li = document.createElement("li");
//     var tituloo = document.createElement("h5");
//     var contenidoo = document.createElement("p");
//     var fechaa = document.createElement("p");
//     var botoneli = document.createElement("button");
//     var editar = document.createElement("button");

//     botoneli.textContent = "Eliminar";
//     botoneli.className = "eliminar";
//     editar.textContent = "Editar";
//     editar.className = "editar";

//     tituloo.textContent = titulo;
//     contenidoo.textContent = contenido;
//     fechaa.textContent = fecha;
  
//     li.appendChild(tituloo);
//     li.appendChild(contenidoo);
//     li.appendChild(fechaa);
//     li.appendChild(botoneli);
//     li.appendChild(editar);

//     ul.appendChild(li);

//     var nota = {
//       titulo: titulo,
//       contenido: contenido,
//       fecha: fecha
//     };
//     notas.push(nota);

//     botoneli.addEventListener("click", function() {
//       var listItem = this.parentNode;
//       var index = Array.prototype.indexOf.call(ul.children, listItem);
//       notas.splice(index, 1);
//       ul.removeChild(listItem);

//       // Guardar las notas actualizadas en el localStorage
//       localStorage.setItem("notas", JSON.stringify(notas));
//     });

//     editar.addEventListener("click", function(){
//       var liedit = prompt("Digita el cambio de la nota con titulo contenido y fecha de caducidad");
//       if (liedit !== "") {
//         li.textContent = liedit;
//         li.appendChild(botoneli);
//         li.appendChild(editar);

//         // Guardar las notas actualizadas en el localStorage
//         localStorage.setItem("notas", JSON.stringify(notas));
//       }
//     });

//     // Guardar las notas en el localStorage
//     localStorage.setItem("notas", JSON.stringify(notas));

//     // Limpiar los campos de entrada después de agregar la tarea
//     document.getElementById("titulo").value = "";
//     document.getElementById("contenido").value = "";
//     document.getElementById("fecha").value = "";
//   }
// });
var boton = document.getElementById("boton");
var notas = [];

// Cargar notas almacenadas en localStorage
var notasGuardadas = localStorage.getItem("notas");
if (notasGuardadas) {
  notas = JSON.parse(notasGuardadas);
  renderizarNotas(); // Renderizar las notas almacenadas
}

boton.addEventListener("click", function() {
  var titulo = document.getElementById("tituloo").value;
  var contenido = document.getElementById("notaa").value;

  if (titulo !== "" && contenido !== "") {
    var ul = document.getElementById("lista");

    var li = document.createElement("li");
    var tituloo = document.createElement("h5");
    var contenidoo = document.createElement("p");
    var botoneli = document.createElement("button");
    

    botoneli.textContent = "Eliminar";
    botoneli.className = "eliminar";
   

    tituloo.textContent = titulo;
    contenidoo.textContent = contenido;

    li.appendChild(tituloo);
    li.appendChild(contenidoo);
    li.appendChild(botoneli);
   
    ul.appendChild(li);

    var nota = {
      titulo: titulo,
      contenido: contenido
    };
    notas.push(nota);

    // Guardar notas en localStorage
    localStorage.setItem("notas", JSON.stringify(notas));

    botoneli.addEventListener("click", function() {
      var listItem = this.parentNode;
      var index = Array.prototype.indexOf.call(ul.children, listItem);
      notas.splice(index, 1);
      ul.removeChild(listItem);

      // Actualizar notas en localStorage
      localStorage.setItem("notas", JSON.stringify(notas));
    });

    // Limpiar los campos de entrada después de agregar la tarea
    document.getElementById("tituloo").value = "";
    document.getElementById("notaa").value = "";
  }
});

function renderizarNotas() {
  var ul = document.getElementById("lista");

  // Limpiar la lista de notas
  ul.innerHTML = "";

  // Renderizar cada nota en la lista
  for (var i = 0; i < notas.length; i++) {
    var nota = notas[i];

    var li = document.createElement("li");
    var tituloo = document.createElement("h5");
    var contenidoo = document.createElement("p");
    var botoneli = document.createElement("button");
    botoneli.textContent = "Eliminar";
    botoneli.className = "eliminar";
   

    tituloo.textContent = nota.titulo;
    contenidoo.textContent = nota.contenido;

    li.appendChild(tituloo);
    li.appendChild(contenidoo);
    li.appendChild(botoneli);
  
    ul.appendChild(li);

    botoneli.addEventListener("click", function() {
      var listItem = this.parentNode;
      var index = Array.prototype.indexOf.call(ul.children, listItem);
      notas.splice(index, 1);
      ul.removeChild(listItem);

      // Actualizar notas en localStorage
      localStorage.setItem("notas", JSON.stringify(notas));
    });

    
  }
}

