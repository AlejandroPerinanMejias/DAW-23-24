function cifradoCesar() {
    const ABCmin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   //26 letras
    const ABCmayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var cadena = prompt("Introduce una cadena: ");
    cadena = cadena.split("");
    var saltos = parseInt(prompt("Introduce cuantos saltos quieres hacer: "));
    var cadenaCifrada = [];

    for (var i=0; i<cadena.length; i++) {
        while (ABCmin[ABCmin.indexOf(cadena[i])+saltos>ABCmin.length]) {
            saltos = saltos-26;
        }

        if (cadena[i]==cadena[i].toLowerCase()) {
            cadenaCifrada[i] = ABCmin[ABCmin.indexOf(cadena[i])+saltos];
        }
        else {
            cadenaCifrada[i] = ABCmayus[ABCmayus.indexOf(cadena[i])+saltos];
        }
    }
    return cadenaCifrada.join("");
}

alert(cifradoCesar());