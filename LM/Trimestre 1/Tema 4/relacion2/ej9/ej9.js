var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const DNI = prompt("Introduce el DNI: ");
let DNINumber = parseInt(DNI.substring(0, 8));
let DNILetter = DNI.charAt(8).toUpperCase();


if (99999999 > DNINumber > 0) {
    let checkLetter = letras[DNINumber % 23];
    if (checkLetter == DNILetter) {
        alert("La letra es correcta");
    } else alert("La letra es incorrecta");
} else alert("El numero indicado no es valido");