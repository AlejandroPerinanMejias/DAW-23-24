function guardaCookie() {
    let valorCookie = document.getElementById("valorCookie").value;
    let fechaBuena = new Date();
    fechaBuena.setTime(fechaBuena.getTime()+(20*24*60*60*1000));
    if (valorCookie != "") {
        document.cookie = "usuario=" + valorCookie + "; expires=" + fechaBuena.toUTCString();
    }
}

function leerCookie() {
    let flag = true;
    for (cookie of document.cookie.split(";")) {
        if (cookie.trim().startsWith("usuario=")) {
            let valorCookie = cookie.substring("usuario=".length+1);
            document.getElementById("textoCookie").innerHTML = `El valor de la cookie usuario es: ${valorCookie}`;
            flag = false;
        }
    }
    if (flag) {
        document.getElementById("textoCookie").innerHTML = "No hay cookie";
    }
    
}

function eliminarCookie() {
    let fechaCaducidad = new Date();
    fechaCaducidad.setFullYear(fechaCaducidad.getFullYear() - 1);
    let cookieCaducada = `usuario=; expires=${fechaCaducidad.toUTCString()}`;
    document.cookie = cookieCaducada;
}