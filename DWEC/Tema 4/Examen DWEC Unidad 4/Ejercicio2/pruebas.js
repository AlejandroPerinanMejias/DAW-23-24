import Jugador from "./ej2.js"
let jugadores = [new Jugador("Clara", "Muñoz Bueno"), new Jugador("Fernando", "Gallego Luján")]; //Creamos un array de objetos jugadores.

jugador1.sumarPuntuacion();     //Comprobamos que la funcionalidad de sumar puntuación funciona correctamente.
jugador2.restarPuntuacion();    //Comprobamos que la funcionalidad de restar puntuación funciona correctamente.

/*
A partir de este punto, voy a crear nuevos objetos jugadores para comprobar las funcionalidad de subir / bajar de nivel.
*/
let jugador3 = new Jugador("Pepe", "Leal Aragón");
jugadores.push(jugador3);

for (let i = 0; i < 11; i++) {
    jugador3.sumarPuntuacion();
}

let jugador4 = new Jugador("Juan", "Jiménez Tocino");
jugadores.push(jugador4);

//Voy a simular que jugador4 sube 2 niveles y luego pierde 1
for (let i = 0; i < 22; i++) {
    jugador4.sumarPuntuacion();
}

jugador4.restarPuntuacion();