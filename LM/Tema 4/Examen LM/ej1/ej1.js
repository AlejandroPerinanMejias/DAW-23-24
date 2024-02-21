let enlaces = document.getElementsByTagName("a");   //Obtenemos los enlaces e imprimimos su longitud
document.write(`En la pagina existen ${enlaces.length} enlaces<br>`);

document.write(`El penultimo enlace apunta a ${enlaces[enlaces.length-2].href}<br>`);   //Imprimimos la direccion a la que apunte el penultimo enlace

let enlacesPrueba = 0;
for (let i = 0; i < enlaces.length; i++) {  //Recorremos los enlaces en busca de los que apunten a la direccion que queremos
    if (enlaces[i].href == "http://prueba/") {
        enlacesPrueba++
    }
}
document.write(`${enlacesPrueba} apuntan a http://prueba<br>`);

let parrafos = document.getElementsByTagName("p");  //Obtenemos los parrafos, para encontrar el tercero y dentro de este buscar los enlaces como se nos pide
let tercerParrafo = parrafos[2];
let enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
document.write(`En el tercer parrafo existen ${enlacesTercerParrafo.length} enlaces<br>`);

function eliminarSegundoParrafo() { //Funcion que asigna la clase oculto al segundo parrafo que luego ocultaremos en css
    parrafos[1].className = "oculto";
}