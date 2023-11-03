function calcularHipotenusa(cateto1, cateto2) {
    if (isNaN(cateto1) || isNaN(cateto1)) {
        return "Alguno de los catetos no es un numero";
    }
    if (cateto1<=0 || cateto2<=0) {
        return "Alguna de los catetos es negativo";
    }
    else {
        return Math.pow(cateto1,2) + Math.pow(cateto2,2);
    }
}

console.log(calcularHipotenusa(5,5));