let array = [4,3,5,6,7,5,6,4];

function sumatoria(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

document.write(`La suma del array resulta ${sumatoria(array)}`);