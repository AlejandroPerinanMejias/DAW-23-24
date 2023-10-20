var valores = [true, 5, false, "hola", "adios", 2]; 

function textoMayor() {
    if (valores[3].length<valores[4].length) {
        console.log("Es mayor " + valores[4]);
    }
    else {
        console.log("Es mayor " + valores[3]);
    }
}

function booleanos() {
    console.log(valores[0] && valores[2]);
    console.log(valores[0] || valores[2]);
}

function matematicas() {
    let suma = valores[1] + valores[5];
    let resta = valores[1] - valores[5];
    let multiplicacion = valores[1] * valores[5];
    let division = valores[1] / valores[5];
    let modulo = valores[1] % valores[5];

    console.log("La suma es " + suma + " la resta " + resta + " la multiplicacion " + multiplicacion + " la division " + division + " y el modulo " + modulo)
}
