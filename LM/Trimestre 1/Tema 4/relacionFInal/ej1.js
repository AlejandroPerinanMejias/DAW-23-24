let enlaces = document.getElementsByTagName("a");
let penultimoEnlace = enlaces[enlaces.length-2];

let enlacesPrueba = document.getElementsByTagName('a[href="http://prueba"]');
let numeroEnlacesPrueba = enlacesPrueba.length;

let parrafos = document.getElementsByTagName('p');
let tercerParrafo = parrafos[2];
let enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');


document.write(`El documento presenta ${enlaces.length} enlaces<br>`);
document.write(`El penultimo enlace es ${penultimoEnlace.href}<br>`);
document.write(`${numeroEnlacesPrueba} enlaces que apuntan a http://prueba<br>`);
document.write(`El tercer parrafo contiene ${enlacesTercerParrafo.length} enlaces`);