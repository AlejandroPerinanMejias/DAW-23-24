export class Jugador { //Creamos la clase Jugador.
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

