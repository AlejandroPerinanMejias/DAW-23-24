let tareas = [];

function agregarTarea() {
    const nombreTarea = document.getElementById("nombreTarea");
    const descripcionTarea = document.getElementById("descripcionTarea");
    const tarea = {
        id: tareas.length + 1,
        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        estado: "Pendiente"
    };
    tareas.push(tarea);
    nombreTarea.value = "";
    mostrarTareas();
}

function completarTarea(id) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id == id) {
            tareas[i].estado = "Completada";
        }
    }
    mostrarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    mostrarTareas();
}

function buscarTarea() {
    let id = document.getElementById("buscarTarea").value;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id == id) {
            let tarea = tareas[i];
            document.getElementById("tareaEncontrada").innerHTML = tarea.id + " " + '<strong>' + tarea.nombre + '</strong>' + ": " + tarea.descripcion + ' (' + tarea.estado;
        }
    }
}

function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";
    tareas.forEach(tarea => {
        listaTareas.innerHTML += '<li>' + tarea.id + " " + '<strong>' + tarea.nombre + '</strong>' + ": " + tarea.descripcion + ' (' + tarea.estado + ') <button onclick="completarTarea(' + tarea.id + ')">Completada</button> <button onclick="eliminarTarea(' + tarea.id + ')">Eliminar tarea</button></li>';
    });
}
