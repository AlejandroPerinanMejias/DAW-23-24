function transformarMayusculas() {
    let frase = document.getElementById("frase").value;
    let fraseMayusculas = frase.charAt(0).toUpperCase();;
    for (var i=1; i<frase.length; i++) {
        if (frase.charAt(i) == " ") {
            fraseMayusculas = fraseMayusculas + frase.charAt(i);
            i++;
            fraseMayusculas = fraseMayusculas + frase.charAt(i).toUpperCase();
        }
        else {
            fraseMayusculas = fraseMayusculas + frase.charAt(i);
        }

    }
    document.getElementById("respuesta").innerHTML = fraseMayusculas;
}