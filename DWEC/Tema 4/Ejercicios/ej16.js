class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    getInfo() {
        alert(`Nombre: ${this.nombre} Edad: ${this.edad} Genero: ${this.genero}`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    matriculado(curso) {
        this.curso = curso;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero);
        this.modulo = modulo;
        this.nivel = nivel;
    }
    imparte(modulo, nivel) {
        this.modulo = modulo;
        this.nivel = nivel;
    }
}