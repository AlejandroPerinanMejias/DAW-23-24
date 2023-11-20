

// PRIMERA PARTE: Consiste en...


// Crear variable tomorrow con fecha de 1 dia despues a lla fecha actual del sistema.
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);


// A las cookies usuarioCookie y rolCookie se les asigna la fehca de expiracion antes creada.
var usuarioCookie = "usuario=ana; expires=" + tomorrow.toUTCString() + "; path=/; domain=.ejemplo.com";
var rolCookie = "rol=administrador; expires=" + tomorrow.toUTCString() + "; path=/; domain=.ejemplo.com";


// Se añaden las 2 cookies a las cookies de la página.
document.cookie = usuarioCookie;
document.cookie = rolCookie;


// Esto imprime: Las cookies existentes en la página.
console.log(document.cookie)




// SEGUNDA PARTE: Consiste en...


// Se crea un vector con todas las cookies.
var cookies = document.cookie.split(';');


// Buscar la cookie en el array con todas las cookies.
for (var i = 0; i < cookies.length; i++) {
 var cookie = cookies[i].trim();
  // Verifica si la cookie empieza por usuario=.
 if (cookie.indexOf("usuario=") === 0) {
    
     // Separa la clave del valor.
     var cookieParts = cookie.split('=');
    
     // Crea una variable con el valor de la cookie.
     var usuarioValue = cookieParts[1];
    
     // Crea variables indice y valor de la fehca de expiracion de la cookie.
     var expiresIndex = cookie.indexOf("expires=");
     var expiresValue = expiresIndex !== -1 ? cookie.substring(expiresIndex + 8).trim() : "No hay fecha de expiración especificada";
    
     // Esto imprime: Valor de la cookie y su fecha de expiracion.
     console.log("Valor de la cookie usuario:", usuarioValue);
     console.log("Fecha de expiración de la cookie usuario:", expiresValue);
    
     // Finaliza el bucle.
     break;
 }
}