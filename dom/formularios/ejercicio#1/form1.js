var boton = document.getElementById("boton");
var lista = document.getElementById("lista");
var tareasGuardadas = localStorage.getItem("tareas");

if (tareasGuardadas) {
  lista.innerHTML = tareasGuardadas;
  asignarEventosEliminar();
  asignarEventosEditar();
}

boton.addEventListener("click", function () {
  var input = document.getElementById("tareas").value;
  if (input !== "") {
    var tareaId = "tarea-" + Date.now(); // Generar un identificador único para la tarea
    var listItem = crearTareaElemento(tareaId, input);

    lista.appendChild(listItem);

    document.getElementById("tareas").value = "";

    guardarTareas();

    asignarEventosEliminar();
    asignarEventosEditar();
  }
});

function crearTareaElemento(id, texto) {
  var listItem = document.createElement("li");
  listItem.id = id;

  var tareaTexto = document.createElement("span");
  tareaTexto.textContent = texto;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("eliminar");

  var editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add("editar");

  deleteButton.addEventListener("click", function () {
    var listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem);
    guardarTareas();
  });

  editButton.addEventListener("click", function () {
    var listItem = this.parentNode;
    var input = prompt("Ingrese el nuevo texto:");
    if (input !== null && input !== "") {
      listItem.firstChild.textContent = input;
      guardarTareas();
    }
  });

  listItem.appendChild(tareaTexto);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  return listItem;
}

function guardarTareas() {
  var tareas = lista.innerHTML;
  localStorage.setItem("tareas", tareas);
}

function asignarEventosEliminar() {
  var botonesEliminar = document.getElementsByClassName("eliminar");
  for (var i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].addEventListener("click", function () {
      var listItem = this.parentNode;
      listItem.parentNode.removeChild(listItem);
      guardarTareas();
    });
  }
}

function asignarEventosEditar() {
  var botonesEditar = document.getElementsByClassName("editar");
  for (var i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].addEventListener("click", function () {
      var listItem = this.parentNode;
      var input = prompt("Ingrese el nuevo texto:");
      if (input !== null && input !== "") {
        listItem.firstChild.textContent = input;
        guardarTareas();
      }
    });
  }
}

var menu = document.getElementById("menu");
var oculto = document.getElementsByClassName("ocultar");

menu.addEventListener("click", function () {
  for (let i = 1; i < oculto.length; i++) {
    oculto[i].classList.remove("activo");
  }
});
