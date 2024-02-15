let age = parseInt(prompt("Introduce tu edad: "));
let balance = parseInt(prompt("Introduce tu saldo: "));

if (age > 18 || balance > 100) {
    alert("Puedes seguir jugando");
} else alert("No puedes seguir jugando");