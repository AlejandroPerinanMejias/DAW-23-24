let correo = prompt("Introduce tu correo");
correo = correo.split("@");
document.write(`Nombre de usuario: ${correo[0]}<br>`);
document.write(`Dominio: ${correo[1]}`);