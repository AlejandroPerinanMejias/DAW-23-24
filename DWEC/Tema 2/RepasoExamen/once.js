function convertirAMayusculas() {
    var cadena = document.getElementById("texto").value;
    return cadena.toUpperCase();
}

function mostrarResultado() {
    var cadena = convertirAMayusculas();
    var caracteres = cadena.split("");
    alert(caracteres.join("\n"));
}