let n = parseInt(prompt("Introduce un numero"));

function parImpar(n) {
    if (n % 2 == 0) {
        document.write("Es par");
    } else document.write("Es impar");
}

parImpar(n);