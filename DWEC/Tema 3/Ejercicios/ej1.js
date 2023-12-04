function calcularSuma(num1, num2) {

    if (num1===null && num2===null) {
        return "Ambos numeros son nulos";
    }
    
    else if (num1===null || num2===null) {
        return "Alguno de los numeros es nulo";
    }

    else if (num1===undefined && num2===undefined) {
        return "Ambos números son indefinidos";
    }

    else if (num1===undefined || num2===undefined) {
        return "Alguno de los numeros es nulo indefinido";
    }

    else if (isNaN(num1) || isNaN(num2)) {
        return "Alguno de los numeros no es valido";
    }

    else {
        return num1+num2;
    }
}

console.log(calcularSuma(5, 3));
console.log(calcularSuma(10, null));
console.log(calcularSuma(undefined, undefined));
console.log(calcularSuma(null, null));