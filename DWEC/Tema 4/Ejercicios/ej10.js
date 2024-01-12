let usuarios = [
    peri = {
        ID: 1,
        nombre: "Alejandro Perinan",
        correo: "alejandro.perinan.mejias.alu@iesfernandoaguilar.es",
        edad: 20,
        color_preferido: "negro",
        mascota: "Si",
        ciudad_origen: "Chiclana de la Frontera",
        nivel_acceso: "Normal"
    },
    Jock = {
        ID: 2,
        nombre: "Jose Carlos Perez",
        correo: "jose.carlos.perez.gonzalez.alu@iesfernandoaguilar.es",
        edad: 19,
        color_preferido: "azul",
        mascota: "No",
        ciudad_origen: "Medina Sidonia",
        nivel_acceso: "Normal"
    },
    Dani = {
        ID: 3,
        nombre: "Daniel Martin Hermoso",
        correo: "daniel.martin.hermoso.hermoso.alu@iesfernandoaguilar.es",
        edad: 21,
        color_preferido: "rojo",
        mascota: "Si",
        ciudad_origen: "San Fernando",
        nivel_acceso: "Normal"
    }
]

function eliminarUsuario() {
    let ID = parseInt(document.getElementById("IDUsuario").value);
    usuarios = usuarios.filter(usuario => usuario.ID != ID);
}

let indice = 0;
function mostrarUsuario(num) {
    
    indice += num;

    if (indice > usuarios.length-1) {
        indice = 0;
    } 
    else if (indice < 0) {
        indice = usuarios.length-1;
    }
    
    document.getElementById("IDMostrarUsuario").innerHTML = "ID: " + usuarios[indice].ID;
    document.getElementById("nombreMostrarUsuario").innerHTML = "Nombre: " + usuarios[indice].nombre;
    document.getElementById("correoMostrarUsuario").innerHTML = "Correo: " + usuarios[indice].correo;
    document.getElementById("edadMostrarUsuario").innerHTML = "Edad: " + usuarios[indice].edad;
    document.getElementById("colorPreferidoMostrarUsuario").innerHTML = "Color preferido: " + usuarios[indice].color_preferido;
    document.getElementById("mascotaMostrarUsuario").innerHTML = "Mascota: " + usuarios[indice].mascota;
    document.getElementById("CiudadOrigenMostrarUsuario").innerHTML = "Ciudad Origen: " + usuarios[indice].ciudad_origen;
    document.getElementById("NivelAccesoMostrarUsuario").innerHTML = "Nivel Acceso: " + usuarios[indice].nivel_acceso;
}

function comprobarPropiedades() {
    let ID = parseInt(document.getElementById("IDBuscar").value);
    let propiedad = document.getElementById("propiedades").value;
    console.log(propiedad);
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].ID == ID) {
            document.getElementById("resultadoBusqueda").innerHTML = usuarios[i][propiedad];
        }
    }
}