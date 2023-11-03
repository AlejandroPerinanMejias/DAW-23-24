function dia() {
    var dia = document.getElementById("dia").value;
    switch (dia) {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            alert("Es lectivo");
            break;

        case "Sabado":
        case "Domingo":
            alert("No es lectivo");
            break;

        default:
            alert("Dia incorrecto");
    }
}