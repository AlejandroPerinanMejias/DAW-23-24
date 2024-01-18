class Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    concentrarse() {};
}

class CEO {
    constructor (id, nombre, apellidos, fecha_nacimiento, jefes_asignados) {
        super(id, nombre, apellidos, fecha_nacimiento);
        this.jefes_asignados = jefes_asignados;
    }
    viajar() {};
    anadir_jefe() {};
    dirigir_jefes() {};
}

class Jefe {
    constructor (id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        super(id, nombre, apellidos, fecha_nacimiento);
        this.dpto_responsable = dpto_responsable;
        this.equipo = equipo;
    }
    anadir_al_equipo() {};
    reunirse_con_equipo() {};
}

class Programador {
    constructor (id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        super(id, nombre, apellidos, fecha_nacimiento);
        this.titulacion = titulacion;
        this.experiencia = experiencia;
    }
    programar() {};
}