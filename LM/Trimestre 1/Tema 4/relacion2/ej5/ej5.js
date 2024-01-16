let mark1 = parseInt(prompt("Introduce la primera nota: "));
let mark2 = parseInt(prompt("Introduce la segunda nota: "));
let mark3 = parseInt(prompt("Introduce la tercera nota: "));

if (mark1 < 5 ) {
    alert("Debes recuperar la primera evaluacion");
}
else if (mark2 < 5) {
    alert("Debes recuperar la segunda evaluacion");
}
else if (mark3 < 5) {
    alert("Debes recuperar la tercera evaluacion");
} else {
    let average = (mark1 + mark2 + mark3) / 3;
    alert(`La media es: ${average}`);
}
