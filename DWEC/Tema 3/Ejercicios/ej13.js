function reservaMesa(numero) {
        let mesa = "mesa" + numero;
        let nombreMesa = "nombreMesa" + numero;
        let filaMesa = "filaMesa" + numero;

    if (document.getElementById(mesa).checked) {
        let nombre = prompt("Introduce el nombre: ");
        document.getElementById(nombreMesa).innerHTML = nombre;
        document.getElementById(filaMesa).style.backgroundColor = "#FF0033";
    }
    
    else if (!document.getElementById(mesa).checked) {
        document.getElementById(nombreMesa).innerHTML = "";
        document.getElementById(filaMesa).style.backgroundColor = "lightblue";
    }
}