function contador(string, char) {
    let cont = 0;
    let arrayString = string.split("");
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] == char) {
            cont++;
        }
    }
    document.write(`Aparece ${cont} veces.`);
}