let string = prompt("Introduce una frase").toLowerCase().split("");    //Obtenemos la frase del usuario sin mayusculas y en forma de array para aprovechar diferentes metodos

let stringModify = [];  //Creamos una variable que nos servira para guardar la frase sin espacios

for (let i = 0; i < string.length; i++) {   //Bucle que recorre la cadena del usuario posicion a posicion añadiendo a nuestro array aquellos caracteres que no sean espacios
    if (string[i] != " ") {
        stringModify.push(string[i]);
    }
}

if (stringModify.join("") == stringModify.reverse().join("")) { //Comprobamos si el array en forma de string coincide un su inverso
    alert("Correcto! Es un palindromo");
} else alert("ERROR: No es un palindromo");

document.write(`La frase introducida es: ${stringModify.join("")}<br>`);
document.write(`La frase homogeneizada es: ${stringModify.reverse().join("")}<br>`);


// let tablaPalindromo = document.getElementById("tablaPalindromo");    
// tablaPalindromo.innerHTML += "<tr>"
// for (let i = 0; i < string.length; i++) {
//     tablaPalindromo.innerHTML += (`<td>${string[i]}</td>`);
//     tablaPalindromo.innerHTML += (`<td>${string.reverse()[i]}</td>`);
// }