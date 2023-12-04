function ordenar() {
    let texto = document.getElementById("titulo").value;
    let titulo = "";
    let fecha = "";
    for (var i=0; i<texto.length; i++) {
        if (texto.charAt(i)==" ") {
            titulo = titulo + " ";
        }

        else if (!isNaN(texto.charAt(i))) {
            fecha+=texto.charAt(i);
            fecha**10;
        }
        
        else {
            titulo = titulo + texto.charAt(i);
        }
    }
    document.getElementById("respuestaTitulo").innerHTML = "Titulo: " + titulo;
    document.getElementById("respuestaFecha").innerHTML = "Fecha: " + fecha
}