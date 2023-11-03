var persona1 = {
    nombre: "Alejandro",
    apellidos: {
        apellido1: "Perinan",
        apellido2: "Mejias"
    },
    telefono: {
        fijo: 956764534,
        movil: 640645342,
    },
    direccion: {
        calle: "Federico Garcia Lorca",
        numero: 7,
        piso: null,
        puerta: null, 
        CP: 11130,
        ciudad: "Chiclana de la Frontera",
        provincia: "Cadoz"
    },
    curso: "2DAW"

}

alert("Nombre: " + persona1.nombre + "\nMovil: " + persona1.telefono.movil + "\nCalle: " + persona1.direccion.calle + "\nCP: " + persona1.direccion.CP + "\nCurso: " + persona1.curso);