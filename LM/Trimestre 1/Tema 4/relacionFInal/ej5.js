function check() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let interes = document.getElementById("interes").value;
    let checkbox = document.getElementById("checkbox").value;
    let unboton = document.getElementById("unboton").value;
    let otroboton = document.getElementById("otroboton").value;
    let masboton = document.getElementById("masboton").value;

    console.log(unboton);
    console.log(otroboton);
    console.log(masboton);

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
    } else if (!unboton.checked && !otroboton.checked && !masboton.checked) {
        alert("Debes marcar una opcion en los 3 botones");
    } else {
        alert("Todos los datos son correctos");
    }
}