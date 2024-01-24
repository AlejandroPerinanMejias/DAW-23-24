function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

let base = parseInt(prompt("Introduce la base"));
let exponente = parseInt(prompt("Introduce la exponente"));

document.write(potencia(base, exponente));