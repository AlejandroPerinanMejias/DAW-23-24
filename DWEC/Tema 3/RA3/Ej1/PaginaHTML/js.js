/*
    Ejercicio 1. Lo que hacemos mediante el siguiente script es que cada vez que el usuario 
    pincha en el boton de comprar de algun producto, se crea una cookie que almacena la información 
    tanto del nombre del producto que se ha seleccionado como su precio, cookies las cuales se almacenan en
    localStorage. La tabla que representa la cesta presenta 2 botones, uno con el emoji de refrescar, que lo que hace
    es llamar a una función que hace una lectura de localStorage en busca de las cookies existentes, que viene siendo los 
    productos que el usuario le ha dado a comprar, y los inserta en la tabla cesta. Y el otro boton con emoji de papelera
    llama a la función la cual elimina todas los cookies de localStorage, lo que viene representando vaciar la cesta.
*/
function anadirCarrito(producto) {
    let productoSeleccionado = document.getElementById(producto);
    let nombreProducto = productoSeleccionado.querySelector("h2").innerText;
    let precioProducto = productoSeleccionado.querySelector("p:nth-of-type(2)").innerText.substr(productoSeleccionado.querySelector("p:nth-of-type(2)").innerText.indexOf(":")+1);
    console.log(precioProducto);

    let cookiesExistente = JSON.parse(localStorage.getItem("cookies")) || [];   //Obtener cookies existentes de localStorage
    
    let nuevaCookie = `nombreProducto=${nombreProducto}; precioProducto=${precioProducto}`; //Agregar nueva cookie
    cookiesExistente.push(nuevaCookie);
    
    localStorage.setItem("cookies", JSON.stringify(cookiesExistente));  //Guardar cookies en localStorage
}

function anadirProductosTabla() {
    
    let tabla = document.getElementById("tablaCesta");  //Obtener la tabla y su cuerpo
    let tbody = tabla.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";   //Limpiar el cuerpo de la tabla antes de agregar nuevas filas, sin esto si le dieramos accidentalmente 2 o mas veces a recargar cesta se repetirían los productos
    
    let cookies = JSON.parse(localStorage.getItem("cookies")) || [];    //Recorrer cookies en localStorage y añadir filas a la tabla
    cookies.forEach(function(cookie) {
        
        let fila = document.createElement("tr");    //Crear una nueva fila
        let cookieParts = cookie.split(";");    //Dividir la cookie en nombre y valor
        
        cookieParts.forEach(function(part) {    //Añadir celdas con los datos
            let keyValue = part.trim().split("=");
            let celda = document.createElement("td");
            celda.textContent = `${keyValue[1]}`;
            fila.appendChild(celda);
        });

        tbody.appendChild(fila);    //Añadir la fila a la tabla
    });
}

function limpiarCesta() {   //Limpiar cookies en localStorage
    localStorage.removeItem("cookies");
    anadirProductosTabla();
}