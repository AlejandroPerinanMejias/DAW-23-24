function abrirVentana() {
    window.open("ej14_2.html", "_blank", "width=600,height=400,location=yes");
    document.write("La ventana secundaria se abrió correctamente");
}

function abrirVentana2() {
    let nombre = document.getElementById("nombre").value;
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    document.write("Bienvenido " + nombre + " son las " + hora + ":" + minutos);
}