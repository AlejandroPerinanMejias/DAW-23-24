// tamanio 400px * 100px centrada que ponga el precio del zumo es... Si no esta el producto que avise. EL contenido del input debe limpiarse al darle.
//En caso de que el producto ya exista que aparezca que no se puede, si se puede anadir que salga producto anadido a la lista. Y tambien se debe borrar el input. El listado debe actualizarse.

let productos = ["Platanos", "Servilletas", "Leche", "Huevos", "Detergente", "Aceitunas", "Zumo"];
let precios = [1, 2, 1, 3, 3, 3, 2];

let altura=100;
let anchura=400;
let y=parseInt((window.screen.height/2)-(altura/2));
let x=parseInt((window.screen.width/2)-(anchura/2));

function mostrarLista() {
    let lista = document.getElementById("lista");
    
    productos.forEach(function(producto) {
        let li = document.createElement("li");
        let liTexto = document.createTextNode(producto);
        li.appendChild(liTexto);
        lista.appendChild(li);
    });
}

function mostrarPrecio() {
    let producto = document.getElementById("producto").value;
    let posicion = productos.indexOf(producto);
    let precio = precios[posicion];

    let ventana = window.open('', '', 'width='+anchura+',height='+altura+',top='+y+',left='+x);
    ventana.document.write(`<p>El precio de ${producto} es ${precio} </p>`); 
}

function anadirNuevoProducto() {
    let nuevoProducto = document.getElementById("nuevoProducto").value;
    let precio = parseInt(document.getElementById("precio").value);

    if (!productos.includes(nuevoProducto)) {
        productos.push(nuevoProducto);
        precios.push(precio);

        let ventana = window.open("", "", 'width='+anchura+',height='+altura+',top='+y+',left='+x);
        ventana.document.write(`¡Producto añadido correctamente! </p>`);
        ventana.document.write(`Lista actualizada. </p>`);

        let li = document.createElement("li");
        let liTexto = document.createTextNode(nuevoProducto);
        li.appendChild(liTexto);
        lista.appendChild(li);
    }
    else {
        let ventana = window.open("", "", 'width='+anchura+',height='+altura+',top='+y+',left='+x);
        ventana.document.write(`<p>El producto ${nuevoProducto} no se puede añadir ya que ya existe en la lista </p>`); 
    }
}