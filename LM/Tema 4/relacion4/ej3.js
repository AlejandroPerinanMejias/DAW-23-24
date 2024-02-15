var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length) {
    document.write("El primer elemento de texto es mayor<br>");
} else document.write("El ultimo elemento de texto es mayor<br>");

document.write(`Suma: ${valores[1]+valores[5]}<br>`);
document.write(`Resta: ${valores[1]-valores[5]}<br>`);
document.write(`Multiplicacion: ${valores[1]*valores[5]}<br>`);
document.write(`Division: ${valores[1]/valores[5]}<br>`);
document.write(`Resto: ${valores[1]%valores[5]}<br>`);