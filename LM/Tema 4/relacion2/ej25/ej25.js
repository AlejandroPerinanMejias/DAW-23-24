let n = parseInt(prompt("Introduce la nota"));

if (n < 0 || n > 11) {
    document.write("Debes introducir una nota valida");
} else document.write("Correcto");