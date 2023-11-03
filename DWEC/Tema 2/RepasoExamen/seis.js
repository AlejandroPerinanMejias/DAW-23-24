function ParImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    if (numero%2==0) {
        alert("El numero es par");
    }
    else {
        alert("El numero es impar");
    }
}