function adivinaPalabraEscondida() {
    const palabraSecreta = "elefante";

    var errores = 0;
    var adivinado = "";

    for (var i=0; i<palabraSecreta.length; i++) {
        adivinado = adivinado + "_";
    }

    adivinado = adivinado.split("");
    var adivinadoCP = adivinado;

    var juego = true;

    while (juego) {

        while (errores <=10) {
            var letra = prompt("Introduce una letra");
            if (palabraSecreta.includes(letra) ) {
                for (var i=0; i<palabraSecreta.length; i++) {
                    if (palabraSecreta[palabraSecreta.indexOf(letra)+i]==letra) {
                        adivinado[(palabraSecreta.indexOf(letra)+i)] = letra;
                    }
                }
                alert("Letra correcta \n" + adivinado.join(""));
                if (!adivinado.includes("_")) {
                    break;
                }
            }
    
            else {
                errores++;
                alert("Letra incorrecta, llevas " + errores + " errores\n" + " " + adivinado.join(""));
            }
        }

        var seguirJugando = prompt("Quieres seguir jugando? si/no ");
        if (seguirJugando=="si") {
            errores = 0;
            adivinado = adivinadoCP;
        }
        else {
            juego = false;
        }

    }

}