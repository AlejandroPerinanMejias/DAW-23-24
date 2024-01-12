let listas = [
    peri = {
        nombre: "Lista de Peri",
        productos: ["Naranjas", "Leche", "Cereales", "Jamon"]
    },
    jock = {
        nombre: "Lista de Jock",
        productos: ["Manzanas", "Arandanos", "Zumo", "Salmon", "Chorizo"]
    },
    melli = {
        nombre: "Lista de Melli",
        productos: ["Pipas", "Pistachos", "Cafe", "Empanada", "Galletas"]
    },
    dani = {
        nombre: "Lista de Dani",
        productos: ["Bebida Energetica", "Platano", "Cerveza", "Pepino", "Rabano"]
    }
];

let indice = 0;
function mostrarLista() {
    indice ++;

    if (indice > listas.length-1) {
        indice = 0;
    } 
    else if (indice < 0) {
        indice = listas.length-1;
    }

    let listaListas = document.getElementById("listasCompras");
    listasCompras.innerHTML = "";
    listasCompras.innerHTML = '<p><strong>' + listas[indice]["nombre"] + '</strong></p>';
    for (let i = 0; i < listas[indice]["productos"].length; i++) {
        listasCompras.innerHTML += '<li>' + listas[indice]["productos"][i] + '</li>'
    }
}

let miLista = [];
let productos = [];
let listaAux = {};
function anadirAMiLista() {
    let nombreTuLista = document.getElementById("MiNombre").value;
    if (!productos.includes(listas[indice]["productos"])) {
        productos.push(...listas[indice]["productos"]);
    }
    //Faltaria comprobar que no se dupliquen las listas repetidas.

    listaAux.nombre = nombreTuLista
    listaAux.productos = productos;
    listas.push(listaAux);
}