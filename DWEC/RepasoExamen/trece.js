function cambiarE() {
    var frase = document.getElementById("frase").value;
    frase = frase.replaceAll("e", "E");
    document.getElementById("resultado").innerHTML = frase;
}