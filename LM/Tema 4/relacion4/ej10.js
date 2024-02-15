function esPrimo(num) {
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }
    return primo;
}

function cantidadPrimos(array) {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (esPrimo(array[i])) {
            cont++;
        }
    }
    return cont;
}

let array = [1, 5, 7, 7, 8, 3, 4, 6, 8];
document.write(`Hay ${cantidadPrimos(array)} primos.`);