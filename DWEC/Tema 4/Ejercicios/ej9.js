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
    let id = parseInt(document.getElementById("buscarTarea").value);
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            let tarea = tareas[i];
            document.getElementById("tareaBuscada").innerHTML = 'Tarea encontrada: \n' + " " + '<strong>' + tarea.nombre + '</strong>' + ": " + tarea.descripcion + ' (' + tarea.estado + ')';
        } else document.getElementById("tareaBuscada").innerHTML = "No se ha encontrado ninguna tarea";
    }
}

function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";
    tareas.forEach(tarea => {
        listaTareas.innerHTML += '<p>Lista completa de tareas</p>' + '<li>' + tarea.id + " " + '<strong>' + tarea.nombre + '</strong>' + ": " + tarea.descripcion + ' (' + tarea.estado + ') <button onclick="completarTarea(' + tarea.id + ')">Completada</button> <button onclick="eliminarTarea(' + tarea.id + ')">Eliminar tarea</button></li>';
    });
}