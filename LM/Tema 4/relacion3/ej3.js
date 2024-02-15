let string = prompt("Introduce una cadena");

function palindromo(string) {
    if (string == string.split("").reverse().join("")) {
        return true;
    }
}

if (palindromo(string)) {
    document.write("Es palindromo");
} else document.write("No es palindromo");