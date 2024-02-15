function sumatorio(limite) {
    let sumatorio = 0;
    for (let i = 0; i < limite; i++) {
        sumatorio += i;
    }
    document.write(`Suma: ${sumatorio}`);
}