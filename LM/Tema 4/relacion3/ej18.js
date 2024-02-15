function castigo(cadena, repeticiones) {
    let castigo = "";
    for (let i = 0; i < repeticiones; i++) {
        castigo += cadena + "<br>";
    }
    document.write(castigo);
}