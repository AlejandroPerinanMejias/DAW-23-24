function crearPalabra() {
    var palabra1 = document.getElementById("p1").value;
    var palabra2 = document.getElementById("p2").value;
    var palabra3 = document.getElementById("p3").value;

    var palabras= [palabra1, palabra2, palabra3];
    palabras.sort();
    palabraFinal = palabras[0].charAt(0) + palabras[1].charAt(0) + palabras[2].charAt(0);

    alert(palabraFinal);
}