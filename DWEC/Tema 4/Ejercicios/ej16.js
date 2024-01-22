class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    get getInfo() {
        return `Nombre: ${this.nombre} Edad: ${this.edad} Genero: ${this.genero}`;
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

let Persona1 = new Persona("Juan", "30", "Masculino");
let Estudiante1 = new Estudiante("Julia", 25, "Femenino", "1DAW", "C");
let Profesor1 = new Profesor("María Jesús", 35, "Femenino", "DWEC", "Experto");

Estudiante1.matriculado("2DAW");
Profesor1.imparte("DIW", "Experto");

console.log(Persona1.getInfo);
console.log(`${Estudiante1.getInfo} Curso: ${Estudiante1.curso} Grupo: ${Estudiante1.grupo}`);
console.log(`${Profesor1.getInfo} Modulo: ${Profesor1.modulo} Nivel: ${Profesor1.nivel}`);