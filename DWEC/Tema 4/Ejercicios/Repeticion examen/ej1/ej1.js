function crearTabla() {
    let cadena = document.getElementById("alimentos").value;
    let alimentos = cadena.split("/");
    let tabla = document.getElementById("tablaAlimentos");

    // Limpiar tabla existente
    tabla.innerHTML = "";

    // Crear encabezado de la tabla
    let fila = document.createElement("tr");
    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "Alimento";
    let titulo2 = document.createElement("th");
    titulo2.innerHTML = "Cantidad";
    let titulo3 = document.createElement("th");
    titulo3.innerHTML = "Mitad";
    fila.appendChild(titulo1);
    fila.appendChild(titulo2);
    fila.appendChild(titulo3);
    tabla.appendChild(fila);

    // Crear filas de la tabla
    for (let i = 0; i < alimentos.length; i++) {
        let alimentoCantidad = alimentos[i].split("-");
        let fila = document.createElement("tr");
        let celda1 = document.createElement("td");
        celda1.innerHTML = alimentoCantidad[0];
        let celda2 = document.createElement("td");
        celda2.innerHTML = alimentoCantidad[1];
        let celda3 = document.createElement("td");
        celda3.innerHTML = alimentoCantidad[1] / 2;
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        tabla.appendChild(fila);
    }
}