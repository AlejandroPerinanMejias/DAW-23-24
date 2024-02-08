function check() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let interes = document.getElementById("interes").value;

    if (nombre == "") {
        alert("Debes rellenar correctamente el campo nombre");
    } else if (edad < 18) {
        alert("Debes ser mayor de edad");
    }
    else if (interes == "elegir") {
        alert("Debes seleccionar una opcion en interes");
    }
    else {
        alert("Correcto");
    }
}