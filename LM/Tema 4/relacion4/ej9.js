function media(array) {
    let media = 0;
    for (let i = 0; i < array.length; i++) {
        media += array[i];
    }
    media /= array.length;
    return media;
}

let array = [4,3,5,6,7,5,6,4];
document.write(`La media es ${media(array)}`);