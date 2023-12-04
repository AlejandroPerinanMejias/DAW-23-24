function login() {
    document.cookie = "alicia=123456";
    document.cookie = "juan=123456";
    document.cookie = "pepe=123456";

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    let cookieUsuario = usuario + "=" + contrasena;

    if (document.cookie.includes(cookieUsuario)) {
        location.href = "ej20Perfil.html";
    }
    console.log(document.cookie);
}

var idioma = document.cookie = "idioma=esp";
document.cookie = idioma;

function cambiarIdioma() {
    var select = document.getElementById("idiomas");
    var value = select.options[select.selectedIndex].value;
    var fechaCaducidad = new Date();
    fechaCaducidad.setMinutes(fechaCaducidad.getMinutes() + 3);
    idioma = "idioma=" + value + "; expires=" + fechaCaducidad.toUTCString();
    document.cookie = idioma;
    //console.log(document.cookie);

    
}

console.log(document.cookie);
//document.getElementById("saludo").innerHTML = "Hola, tu nombre de usuario es " + cookieUsuario.substr + " y tu idioma es "
