function findPairs(num1, num2) {    //Función que agrupa los numeros pares existentes entre 2 números.
    let pairsNumbers = [];  //Creamos un array para almacenar los numeros pares.

    for (let i = num1; i < num2; i++) { //Recorremos desde el número 1 hasta el número 2 guardando los que cumplan la condición de ser par.
        if (i % 2 == 0) {
            pairsNumbers.push(i);
        }
    }

    document.getElementById("pairs").innerHTML = `Los números pares entre ${num1} y ${num2} son: ${pairsNumbers.join(", ")}.`;   //Imprimimos en el HTML la lista de números pares con el formato que se pide.
}

function checkNumbers() {   //Función para comprobar que ambos números cumplen los requisitos.
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {   //Comprobamos si el tipo de dato de alguno de ellos no es numérico.
        alert(`Alguno de los números introducidos no es válido`);
    }

    else {
        num1 = Math.round(num1);    //Redondeamos los números.
        num2 = Math.round(num2);

        if (num1 > num2 || num1 < 1 || num2 > 100) {    //Comprobamos si el primero es menor que el segundo, que el primero sea positivo y que el segundo sea menor de 100.
            alert(`Alguno de los números introducidos no es válido`);
        }

        else {
            findPairs(num1, num2);  //Si se cumplen todos los requisitos llamamos a la función que calcula los pares entre ellos.
        }
    }
}
