function calcularAreaCirculo(radio) {
    if (isNaN(radio)) {
        return "El radio debe ser un numero";
    }
    else if (radio<=0) {
        return "El radio debe ser positivo";
    }
    else {
        return (Math.PI * (Math.pow(radio,2))).toFixed(2);
    }
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(0));
console.log(calcularAreaCirculo(-2));
console.log(calcularAreaCirculo("texto"));