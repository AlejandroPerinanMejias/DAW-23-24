function limite(lim) {
    let producto = 1;
    for (let i = 1; i < lim; i++) {
        producto *= i;
    }
    document.write(producto);
}