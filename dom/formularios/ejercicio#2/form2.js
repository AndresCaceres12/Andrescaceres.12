var boton = document.getElementById("submit");
var notas = [];

// Cargar notas almacenadas en localStorage
var notaa = localStorage.getItem("notas");
if (notaa) {
  notas = JSON.parse(notaa);
  cargarNotas();
}

boton.addEventListener("click", function() {
  var titulo = document.getElementById("titulo").value;
  var contenido = document.getElementById("contenido").value;
  var fecha = document.getElementById("fecha").value;

  if (titulo !== "" && contenido !== "" && fecha !== "") {
    var nota = {
      titulo: titulo,
      contenido: contenido,
      fecha: fecha
    };
    notas.push(nota);

    guardarNotas();
    cargarNotas();

    // Limpiar los campos de entrada después de agregar la tarea
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
    document.getElementById("fecha").value = "";
  }
});

function guardarNotas() {
  localStorage.setItem("notas", JSON.stringify(notas));
}

function cargarNotas() {
  var ul = document.getElementById("pendiente-list");
  ul.innerHTML = ""; // Limpiar la lista antes de cargar las notas

  notas.forEach(function(nota) {
    var li = document.createElement("li");
    var tituloo = document.createElement("h5");
    var contenidoo = document.createElement("p");
    var fechaa = document.createElement("p");
    var botoneli = document.createElement("button");
    var editar = document.createElement("button");

    botoneli.textContent = "Eliminar";
    botoneli.className = "eliminar";
    editar.textContent = "Editar";
    editar.className = "editar";

    tituloo.textContent = nota.titulo;
    contenidoo.textContent = nota.contenido;
    fechaa.textContent = nota.fecha;

    li.appendChild(tituloo);
    li.appendChild(contenidoo);
    li.appendChild(fechaa);
    li.appendChild(botoneli);
    li.appendChild(editar);

    ul.appendChild(li);

    botoneli.addEventListener("click", function() {
      var listItem = this.parentNode;
      var index = Array.prototype.indexOf.call(ul.children, listItem);
      notas.splice(index, 1);
      ul.removeChild(listItem);

      guardarNotas();
    });

    editar.addEventListener("click", function() {
      var liedit = prompt(
        "Digita el cambio de la nota con titulo contenido y fecha de caducidad"
      );
      if (liedit !== "") {
        li.textContent = liedit;
        li.appendChild(botoneli);
        li.appendChild(editar);

        guardarNotas();
      }
    });
  });
}


 
