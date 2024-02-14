function check() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let interes = document.getElementById("interes").value;
    let checkbox = document.getElementById("checkbox").value;
    let radio = document.getElementsByName("radio").value;

    console.log(radio);
    if (nombre == "" || edad == "" || correo == "" || fecha == "" || interes == "elegir" || checkbox == null || radio == null) {

    }
}