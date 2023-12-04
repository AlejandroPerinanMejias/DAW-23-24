function adivinaPalabraEscondida() {
    
    var juego = true;
    var posicion = 0;

    while (juego) {

        const palabrasSecretas = ["macarron", "lunes", "chocolate", "azul"];
        
        var palabraSecreta = palabrasSecretas[posicion];

        var num_errores = 0;
        var errores = [];

        var adivinado = "";

        for (var i=0; i<palabraSecreta.length; i++) {
            adivinado = adivinado + "_";
        }

        adivinado = adivinado.split("");

        while (num_errores <= 10) {
            var letra = prompt("Introduce una letra");
            palabraSecreta = palabrasSecretas[posicion];
            if (palabraSecreta.includes(letra) ) {
                for (var i=0; i<palabraSecreta.length; i++) {
                    if (palabraSecreta[palabraSecreta.indexOf(letra)+i]==letra) {
                        adivinado[(palabraSecreta.indexOf(letra)+i)] = letra;
                    }
                }
                alert("Letra correcta \n" + adivinado.join("") + "\nErrores: " + errores + "(" + num_errores + ")");
                if (!adivinado.includes("_")) {
                    break;
                }
            }
    
            else {
                num_errores++;
                errores.push(letra);
                alert("Letra incorrecta, llevas " + num_errores + " errores\n" + " " + adivinado.join("") + "\nErrores: " + errores);
            }
        }

        var seguirJugando = prompt("Quieres seguir jugando? si/no ");
        if (seguirJugando=="si") {
            errores = 0;
            posicion++;
        }
        else {
            juego = false;
        }

    }

}