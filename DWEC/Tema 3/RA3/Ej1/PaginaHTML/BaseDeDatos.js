/*
    Ejercicio 2. En esta parte lo que he realizado ha sido un formulario de registro, en el cual un usuario puede
    introducir sus credenciales y estas serán guardadas por el sistema. Para ello, mediante el uso de indexedBD, se crea una 
    base de datos de estructura nombre, email y contraseña con los datos que se vayan introduciendo. 
*/
window.addEventListener("DOMContentLoaded", () => {    //De esta forma hacemos cargar el DOM antes de acceder a él.
    let db; //Crear la base de datos
    let request = indexedDB.open("BaseDeDatosPeritech");    //Cargamos la base de datos.

    request.onerror = function(evento) {    //Imprime en la consola un mensaje en caso de error al cargar la base de datos.
        console.log("Error al abrir la base de datos", evento);
    };

    request.onsuccess = function(evento) {  //Guarda en la variable db la base de datos cargada.
        db = evento.target.result;
    };

    request.onupgradeneeded = function(evento) {    //Crea un objectStore para actualizar la base de datos.
        let db = evento.target.result;
        let objectStore = db.createObjectStore("usuarios", { keyPath: "email" });
    };

    function agregarUsuario(nombre, email, contrasena) {    //Función para agregar usuarios
        let transaction = db.transaction("usuarios", "readwrite");
        let objectStore = transaction.objectStore("usuarios");
        let request = objectStore.add({nombre: nombre, email: email, contrasena: contrasena});

        request.onsuccess = function() {
            console.log("Usuario agregado a la base de datos");
        };

        request.onerror = function(evento) {
            console.log("Error al agregar usuario", evento);
        };
        }
        
    document.querySelector("form").addEventListener("submit", function(evento) {    //Obtenemos los datos del formulario y llamamos a agregarUsuario()
        evento.preventDefault();    //Evitamos la recarga de la página.
        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email").value;
        let contrasena = document.querySelector("#contrasena").value;
        agregarUsuario(nombre, email, contrasena);
    });
});
