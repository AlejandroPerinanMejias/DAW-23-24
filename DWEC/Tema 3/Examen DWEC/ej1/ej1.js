function crearTabla() {
    let lista = document.getElementById("lista").value;
    arrayLista = lista.split("/");
    let tabla = document.getElementById("tablaLista");
    console.log(arrayLista);
    
    for (var i = 0; i<arrayLista.length; i++) {
        //console.log(arrayLista[i]);
        let fruta = arrayLista[i].split("-");
    }
    
    console.log(tabla);
}