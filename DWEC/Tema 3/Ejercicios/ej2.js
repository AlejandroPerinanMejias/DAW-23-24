function evaluarDato(num) {
    
    if (isNaN(num)) {
        return num + " no es un numero";
    }

    else if (Number.isInteger(num)) {
        return num + " es un numero entero";
    }

    else if (!(num==parseInt(num))) {
        return num + " es un numero decimal";
    }

    else if (isFinite(num)) {
        return num + " es un numero finito";
    }

    else {
        return "Tipo de dato desconocido"
    }

}

console.log(evaluarDato(42));
console.log(evaluarDato(NaN));
console.log(evaluarDato("123"));
console.log(evaluarDato("3.14"));
console.log(evaluarDato(true));