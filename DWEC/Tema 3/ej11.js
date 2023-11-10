function nombreImagen() {
    var nombreImagen = prompt("Introduce el nombre de la imagen: ");
    nombreImagen = nombreImagen.split(".");

    if (nombreImagen[1]=="png" || nombreImagen[1]=="jpg") {
        console.log("¡Sí se puede adjuntar!");
    }
    else {
        console.log("La extension no es valida, debes adjuntar un archivo llamado " + nombreImagen[0] + ".png o " + nombreImagen[0] + ".jpg");
    }
}

nombreImagen();