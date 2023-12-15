/* AleBernal. Crea un juego en el que el usuario tenga que adivinar una cadena que se ha pasado a array, 
el juego acaba cuando el usuario termina de adivinar la cadena hecha array o cuando se acaban los intentos.
3 intentos */

function adivinarCadena() {
    intentos = 0;
    let cadenaSecreta = "Buenas tardes";
    let arrayCadenaSecreta = cadenaSecreta.split("");
    if (intentos < 4) {
        let letra = prompt("Introduce la letra que crees que es");
        if (arrayCadenaSecreta.includes(letra)) {
            console.log("La cadena secreta contiene la letra");
        } else {
            console.log("La cadena secreta no contiene la letra");
            intentos++;
        }

    }
    else console.log("Has superado el numero maximo de intentos");
}

/* Diego. De una lista de invitados, se quiere eliminar al invitado Miguel
 ya que ha cancelado su asistencia (Ana, Marcos, Miguel, Julia, Lucia) */

let invitados = ["Ana", "Marcos", "Miguel", "Julia", "Lucia"];

invitados.splice(invitados.indexOf("Miguel"), 1);

/* Dani. Ya que estamos sobre los estropicios que hizo ese primer becario, pues no que le pedimos un array con la edad de nuestros empleados y nos lo da desordenado, 
ay que gente, ¿nos ayudas a sacar los menores de edad? que por lo visto es ilegal o algo así */
let edades = [12, 18, 24, 25, 14, 14, 16, 17, 13, 18];
let menoresEdad = edades.filter((edades) => edades<18);

/* Lidia. Se quiere saber la cantidad de dinero recaudado para el sorteo de una cesta de navidad teniendo en cuenta que 
cada participante aporta 1.50 para conseguir un boleto. Sabiendo que el número de participantes estaba 
limitado a cuarenta, ¿cuánto dinero se ha recaudado? Indica si ha tenido buena acogida 
o no (si han vendido más de la mitad es buena acogida). */
let participantes = ["Julián García", "Pedro Martínez", "Lara Sánchez", "Lucía Díaz"];
if (participantes.length > 20) {
    console.log("Buena acogida. " + "Se ha recaudado " + 1.5*participantes.length + " euros");
} else console.log("Mala acogida. " + "Se ha recaudado " + 1.5*participantes.length + " euros");

/* Alban. Generador de lista de la compra: Queremos crear una aplicación para llenar una lista de la compra. 
  Primero, tendremos una interfaz que nos permitirá añadir:
  Nombre: nombre del producto, mínimo 3 caracteres.
    Cantidad: número de productos, numérico.
    Unidades: Select desplegable, con las siguientes unidades:
    kg
    litros
    unidades
    envases
  Al seleccionar guardar, almacena los datos en un string, el cual guardará en un array. Al seleccionar un 
  botón Generar Lista, convertirá el array en una cadena de caracteres separados por saltos de línea y los 
  mostrará en un alert. */

function generarLista() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let unidades = document.getElementById("unidades").value;

    let lista = [nombre, cantidad, unidades];

    alert(lista.join("\n"));
}

/* Manu. Yoda normalmente habla un tanto peculiar, suele invertir el orden de las palabras en las
oraciones. Quiero que hagas esta oración como si yoda fueses: El perro salta alto. */
let frase = ["El", "perro", "salta", "alto"];

let fraseReversa = frase.reverse();

/* Joseca. Dime el último alumno de la lista que tenga 18 años
Lista de alumnos y sus edades: alumno1 y 18, alumno2 y 17, alumn3 y 16, alumno4 y 18. */
let alumnos = ["alumno1;18", "alumno2;17", "alumno3;16", "alumno4;18"];
//let alumnosNuevo[];
for (let i=0; i<alumnos.length; i++) {
    let alumno = alumnos[i].split(";");
    if (alumno[1] != "") {}
}

/* Nacho. Resulta que los dos jugadores más nuevos del equipo no están rindiendo como deberían
¿Quiénes son? */
let jugadores = ["carlos", "samu", "nacho", "lidia", "manuel"];

console.log(alumnos.slice(-2));

/* Samu. ¿Sabrías como pasar un número a binario en una sola línea? */
const number = 743;
console.log(number.toString(2));

/* Crea una caja de texto en la que introducirás varias palabras de no más de 7 letras. Al darle a
un botón, las irás introduciendo en un array. Al pulsar un botón, creará una frase con esas palabras
y las mostrará en un párrafo por pantalla, y limpiará el array. */
let palabra = prompt("Introduce una palabra: ");

/* Dani. Teniendo ahora los diferentes arrays de cada clase bien, necesitamos juntarlos segun el curso, el becario dice de recorrerlos todos
para obtener cada valor segun la iteracion del array para asi añadirlo despues al array final o alguna paranoia asi me ha contado pero
ni esto le funciona le dice algo de undefined, haznos el favor de juntar las 3 clases de DAW por favor. */
let DAW1 = ["clase", "1"];
let DAW2 = ["clase", "2"];
let DAW3 = ["clase", "3"];

let DAW = DAW1.concat(DAW2, DAW3);

/* Samu. Dado el siguiente código, encuentra el error y demuestra con el método correspondiente por qué da ese error. */
let array = ["Lidia", "Samuel", "Nacho", "Ale"];
let nombre = [array.pop()];
nombre.push("Apellido");