function check() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let interes = document.getElementById("interes").value;
    let checkbox = document.getElementById("checkbox").value;
    let botones = document.getElementsByName("radio");

    let flag = false;
    for(let i = 0; i<botones.length; i++) {
        if(botones[i].checked) {
            flag = true;
            break;
        }
    }

    if (nombre == "") {
        alert("El campo nombre no es correcto");
    } else if (edad == "" || edad < 18) {
        alert("Edad incorrecta");
    } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) {
        alert("El correo no es valido");
    } else if (!isNaN(fecha)) {
        alert("La fecha no es valida");
    } else if (interes == "elegir") {
        alert("El valor de interes no es valido");
    } else if (checkbox.checked) {
        alert("Debes marcar el checkbox");
    } else if (!flag) {
        alert("Debes marcar una opcion en los 3 botones");
    } else {
        alert("Todos los datos son correctos");
    }
}