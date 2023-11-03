var frase = prompt("Introduce una frase: ");



function esPalindromo() {   //Función que comprueba si la frase es palindromo.
    frase = frase.replaceAll(" ", "").toLowerCase();
    var frasereves = frase.split("").reverse().join("");
    

    if (frase==frasereves) {
        alert("Es palíndromo");
    }
    else {
        alert("No es palíndromo");
    }

}

esPalindromo();