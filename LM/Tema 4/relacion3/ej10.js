function esPar(num) {
    let resultado = false;
    if (num % 2 == 0) {
        resultado = true;
    }
    return resultado;
}

let num = parseInt(prompt("Introduce un numero"));
if (!esPar(num)) {
    document.write("No es par");
} else document.write("Es par");