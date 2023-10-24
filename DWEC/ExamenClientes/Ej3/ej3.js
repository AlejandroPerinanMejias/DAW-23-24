/* 
    JS que realiza el factorial de un número.
*/

function factorial() {
    var numero = document.getElementById("numero").value;   //Obtenemos el número introducido por el usuario.
    var factorial = numero; //Lo iniciamos con el valor del número introducido por el usuario.
    for (var i=1; i<numero; i++) {
        factorial *= i; //Lo vamos multiplicando desde el 1 hasta dicho número.
    }
    alert(factorial)
}