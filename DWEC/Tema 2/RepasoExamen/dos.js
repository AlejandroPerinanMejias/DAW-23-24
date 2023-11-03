let nombre = prompt("Dime tu nombre: ");
let hora = prompt("Dime la hora");

function saludo(hora) {
    if (hora <= 12) {
        alert("Buenos dias " + nombre) ;
    }
    else if (hora < 20) {
        alert("Buenos tardes " + nombre) ;
    }
    else {
        alert("Buenos noches " + nombre) ;
    }
}