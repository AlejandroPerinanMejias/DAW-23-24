let userName = prompt("Introduce tu nombre: ", "Desconocido");

if (userName == null) {
    alert("El usuario ha pulsado cancelar");
} 
else if (userName == "") {
    alert("El usuario ha introducido una cadena vacía");
}

else if (userName == "Desconocido") {
    alert("El usuario ha introducido el nombre por defecto desconocido");
}
else {
    alert("El nombre del usuario es " + userName);
}