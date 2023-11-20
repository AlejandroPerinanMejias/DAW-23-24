function login() {
    document.cookie = "alicia=123456";
    document.cookie = "juan=123456";
    document.cookie = "pepe=123456";

    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");

    let cookieUsuario = usuario + "=" + contrasena;

    if (cookieUsuario in document.cookie) {
        location.href = "ej20Perfil.html";
    }
}