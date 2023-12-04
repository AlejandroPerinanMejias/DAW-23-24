function nombreImagen() {   //Utilizando endsWith() te ahorra media vida. lastIndexOf seria otra forma.
    let nombreImagen = prompt("Introduce el nombre de la imagen: ");
    nombreImagen = nombreImagen.split(".");

    if (nombreImagen[1]=="png" || nombreImagen[1]=="jpg") {
        console.log("¡Sí se puede adjuntar!");
    }
    else {
        console.log("La extensión no es válida, debes adjuntar un archivo llamado " + nombreImagen[0] + ".png o " + nombreImagen[0] + ".jpg");
    }
}

nombreImagen();