let number = parseInt(prompt("Introduce un numero: "));

let factorial = number;

for (let i = number; i > 1; i--) {
    factorial += factorial * (number - i);
}

alert("El factorial es " + factorial);