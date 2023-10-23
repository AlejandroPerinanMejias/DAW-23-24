function generarCorreo() {
    var nombre = document.getElementById("frase").value.toLowerCase().split(" ");
    alert(nombre[0].charAt(0) + nombre[1].substr(0,3) + nombre[2].substr(-3) + "@dwec.es");
}