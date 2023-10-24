function tablaMultiplicar() {   //Función que imprime la tabla de multiplicar de un número.
    var numero = document.getElementById("numero").value;   //Obtenemos el número introducido por el usuario.
    var numeros = [];   //Creamos una lista donde iremos añadindo las multiplicaciones.
    for (var i = 0; i<11; i++) {
        numeros[i] = numero + "x" + i + "=" + numero*i; //Añadimos las multiplicaciones a la lista con el formato que deseamos.
    }
    alert(numeros.join("\n"));  //Mostramos la lista completa utilizando join y el salto de línea.
}