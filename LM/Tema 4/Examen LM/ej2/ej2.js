/* 
    Script con una funcion que valida el formulario.
    El interés de la estructura de if y else es de ir validando el formulario campo a campo
    y en el caso de encontrar con un campo erroneo finalizar la ejecución del programa en ese instante,
    para hacer el programa más eficiente.
*/

function validarFormulario() {  //Función para validar el formulario
    let nombre = document.getElementById("nombre").value;   //Obtenemos todos los valores del formulario
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    nombre = nombre.split(" ");
    apellidos = apellidos.split(" ");

    if (nombre.length > 2 || nombre.length < 1) {    //Condicion de minimo 1 nombre y maximo 2
        alert("Puedes introducir minimo 1 nombre y maximo 2");
    } else {
        if (apellidos.length > 2) { //Condicion de minimo 1 apellido y maximo 2
            alert("Puedes introducir minimo 1 apellido y maximo 2");
        } else {
            if (nombre == "" || nombre == null || /^\s+$/.test(nombre)) {   //Condicion de que el nombre tenga argumentos validos
                alert("El formato del nombre no es el correcto");
            } else {
                if (apellidos == "" || apellidos == null || /^\s+$/.test(nombre)) { //Condicion de que el apellido tenga argumentos validos
                    alert("El formato del apellido no es el correcto");
                } else {
                    if (dni.length != 9 || dni == "" || dni == null) {  //Condicion de que el DNI es valido
                        alert("El formato del DNI no es el correcto");
                    } else {
                        if (!isNaN(fechaNacimiento)) {  //Condicion de que la fecha de nacimiento es valida
                            alert("La fecha no es correcta");
                        } else {
                            if (email == "" || email == null) { //Condicion de que el email es valido
                                alert("El formato del email no es el correcto");
                            } else {
                                if (password.length > 10 || password.length < 8 || password == "" || password == null) {    //Condicion de que la contraseña sea valida
                                    alert("El formato de la contrasena no es correcto");
                                } else {    //Alerta cuando se han validado todos los campos
                                    alert("Exitoso");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}