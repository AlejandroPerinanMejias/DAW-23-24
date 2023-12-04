function extraerNumeros() { //Función que extrae los numeros de una cadena y los ordena
    let cadena = document.getElementById("cadena").value;
    let numeros = [];
    for (var i = 0; i<cadena.length; i++) { //Recorremos la cadena, y cuando nos encontramos un numero comprobamos si se encuentra ya añadido y si no se añade
        if (!isNaN(cadena[i])) {
            if (!numeros.includes(cadena[i])) {
                numeros.push(cadena[i]);
            }
        }
    }
    numeros.sort();
    document.getElementById("numerosOrdenados").innerHTML = numeros.join(",");
    return numeros;
}

function operacion(operacion) { //Función que realiza las operaciones segun el botñon que haya pulsado el usuario
    let numeros = extraerNumeros();
    let resultado = 0;
    if (operacion==1) {
        for (let i = 0; i<numeros.length; i++) {
            resultado += parseInt(numeros[i]);
        }
    }

    if (operacion==2) {
        resultado = 1;
        for (let i = 0; i<numeros.length; i++) {
            if (numeros[i] != 0) {
                resultado *= parseInt(numeros[i]);
            }
        }
    }

    if (operacion==3) {
        try {
            resultado = parseInt(numeros[-1]) / parseInt(numeros[1]);
            throw RangeError;
        } catch (error) {
            error.message;
        }
    }
    
    if (operacion==4) {
        let promedio = 0;
        for (let i = 0; i<numeros.length; i++) {
            promedio += parseInt(numeros[i]);
        }
        resultado = Math.round(((promedio / numeros.length)*100));
        resultado /= 100;
    }

    console.log(resultado);


    let ventana = window.open("ej2Salida.html");    //Abrimos en una ventana el HTML ej2Salida
    ventana.innerWidth = "300px";
    ventana.innerHeight = "300px";

}