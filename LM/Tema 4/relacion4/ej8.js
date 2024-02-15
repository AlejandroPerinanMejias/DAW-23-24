function sumarAElementos(array, valor) {
    for (let i = 0; i < array.length; i++) {
        array[i] += valor;
    }
    return array;
}

let array = [4,3,5,6,7,5,6,4];
document.write(sumarAElementos(array, 5).join(", "));