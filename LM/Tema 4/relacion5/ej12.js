let dni = new String(prompt("Introduce el DNI"));

let dniSinLetra = dni.substring(0, 8);
document.write(dniSinLetra);