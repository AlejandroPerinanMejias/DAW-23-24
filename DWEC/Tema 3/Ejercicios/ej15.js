function irAtras() {
    history.back();
}

function irAdelante() {
    history.forward();
}

function irPagDestino() {
    let indice = document.getElementById("indice").value;
    //history.go(indice);
    window.location.href = indice;
}