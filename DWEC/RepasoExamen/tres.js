let nombre = prompt("Dime tu nombre: ");

function saludo() {
    let hora = new Date().getHours();

    if (hora <= 12) {
        alert("Buenos dias " + nombre);
    }
    else if (hora < 20) {
        alert("Buenos tardes " + nombre);
    }
    else {
        alert("Buenos noches " + nombre);
    }
}