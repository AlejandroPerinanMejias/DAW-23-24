class Jugador { //Creamos la clase Jugador.
    nombre; //Propiedades de la clase.
    apellidos;
    nivel;
    puntuacion;

    constructor(nombre, apellidos) {    //Constructor de la clase.
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = 1;
        this.puntuacion = 0;
    }

    sumarPuntuacion() { //Metodo que suma 1 punto la puntuación del jugador cada vez que elimina un monstruo. En caso de superar los 10 puntos sube de nivel.
        if (this.puntuacion < 10) {
            this.puntuacion++;
            console.log(`${this.nombre}: Acabas de aumentar tu puntuacion 1 punto por eliminar un monstruo`);
        }
        else {
            this.puntuacion = 0;
            this.nivel++;
            console.log(`${this.nombre}: Acabas de aumentar tu puntuacion 1 punto por eliminar un monstruo. Subes de nivel. Nivel actual: ${this.nivel}`);
        }
    }

    restarPuntuacion() {    //Lo mismo que ocurre en el método anterior pero en disminución, al ser alcanzado por un monstruo.
        if (this.puntuacion > 0) {
            this.puntuacion--;
            console.log(`${this.nombre}: Acabas de disminuir tu puntuacion 1 punto por ser alcanzado por un monstruo`);
        }
        else if (this.puntuacion == 0 && this.nivel == 1) {
            this.nivel = 1;
            this.puntuacion = 0;
            console.log(`${this.nombre}: GAME OVER`);
        }
        else {
            this.nivel--;
            this.puntuacion = 10;
            console.log(`${this.nombre}: Acabas de disminuir tu puntuacion 1 punto por ser alcanzado por un monstruo. Bajas 1 nivel. Nivel actual: ${this.nivel}`);
        }
    }
}

let jugadores = []; //Creamos un array de objetos jugadores.

let jugador1 = new Jugador("Clara", "Muñoz Bueno"); //Creamos los objetos jugadores precargados.
let jugador2 = new Jugador("Fernando", "Gallego Luján");

jugadores.push(jugador1, jugador2); //Los añadimos al array.

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