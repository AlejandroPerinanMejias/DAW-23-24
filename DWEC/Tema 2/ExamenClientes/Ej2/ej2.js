function cambiarABC() { //Función que cambia numeros por la letra con su posición en el abedecario.
    var abecedario = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Creamos una lista con el abecedario.
    var numeros = document.getElementById("numeros").value.split(";");  //Obtenemos los valores introducidos por el usuario y los separamos por cada ;.
    var palabra = "";
    var numerosInvalidos = 0;
    for (var i=0; i<numeros.length; i++) {
        if (numeros[i] < 0 || numeros[i]>26) {  //Comprobamos que los numeros estén en el rango aceptado.
            numerosInvalidos++;
        }
        else {
            palabra = palabra + abecedario[numeros[i]-1]; //A palabra se añade la posicion del abecedario introducida por el usuario.
        }
    }
    alert("La palabra cifrada es: " + palabra + "\nSe han introducido " + numerosInvalidos + " números inválidos."); //Se muestra la palabra creada.
}