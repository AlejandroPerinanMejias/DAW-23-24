let num = parseInt(prompt("Introduce un numero"));

if (isNaN(num)) {
    alert("El valor introducido no se trata de un entero");
} else {
    if (num % 2 == 0) {
        alert("Es par");
    } else alert("Es impar");
}