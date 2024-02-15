let string = prompt("Introduce una cadena");

function mayus(string) {
    let output = "";
    if (string == string.toUpperCase()) {
        output = "Es una cadena de mayusculas"
    }
    else if (string == string.toLowerCase()) {
        output = "Es una cadena de minusculas"
    }
    else output = "Es una mezcla de mayusculas y minusculas"
    document.write(output);
}

mayus(string);