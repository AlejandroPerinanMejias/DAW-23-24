function dividirNumeros(numero1, numero2) {
    try {
        if (numero2==0) {
            throw RangeError("La división por cero no está permitida.");
        } 
        else if (numero1==undefined || numero2==undefined) {
            throw ReferenceError("Ambos números son necesarios para realizar la división.");
        }
        else if (isNaN(numero1) || isNaN(numero2)) {
            throw TypeError("El segundo parámetro no es un número válido.");
        }
        else {
            return numero1 / numero2;
        }
    } catch (error) {
        console.log(error.message);
    }

}