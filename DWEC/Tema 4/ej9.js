var bdTareas = [];

function anadirTarea() {
    let nombreTarea = document.getElementById("nombreTarea").value;
    let descripcionTarea = document.getElementById("descripcionTarea").value;
    const ID = bdTareas.length+1;
    let nombre = "Tarea " + ID;
    let tarea = {
        ID: ID,
        nombre: nombreTarea,
        descripcion: descripcionTarea
    };
    bdTareas.push(tarea);
    console.log(bdTareas);
}

function modificarTarea() {

}

function eliminarTarea() {

}

