/* Tenemos una funcion de un programa que requiere de un array como parametro para su correcto funcionamiento,
para ello, debes crear ahora un funcion que te compruebe si la variable "datos" es un array o no. */
function tipoVariable() {
    let datos = [1, 2, 3, 4, 5];
    
    //SOLUCIÓN
}

/* Tenemos un array con los nombres de los alumnos solicitando matricularse al centro, pero solo tenemos 30 plazas,
se solicita comprobar la cantidad de alumnos e imprimir un mensaje dependiendo de si se pueden matricular a todos los alumnos o no */
function plazas() { 
    let nombres = ["Ana", "Juan", "María", "Carlos", "Laura", "Pedro", "Sofía", "Javier", "Elena", "Miguel", "Luisa", "David", "Carmen", "Raúl", "Isabel", "José", "Patricia", "Fernando", "Natalia", "Roberto", "Marta", "Alejandro", "Silvia", "Francisco", "Beatriz", "Pablo", "Lorena", "Antonio", "Rosa", "Manuel", "Eva", "Diego", "Nerea", "Adrián", "Olga", "Alberto", "Clara", "Cristian", "Paula"];

    //SOLUCIÓN
}

/** El Mercadona esta en apuros, crea una funcion que pueda unificar las diferentes 
listas de las secciones del supermercado en una unica llamada "bdMercadona". **/
function unificar() {
    let itemsCarniceria = ["Pollo", "Cerdo", "Pavo"];
    let itemsPescaderia = ["Salmon", "Atun", "Pulpo"];
    let itemsFruteria = ["Naranja", "Manzana", "Platano"];

    //SOLUCIÓN
}

/* Tenemos un array con los alumnos admitidos para el programa Erasmus, se solicita un mensaje (console.log) donde se imprima
la frase "Felicitaciones a los alumnos" seguido de los alumnos admitidos separados por comas.  */
function bienvenida() {
    let alumnosAdmitidos = ["Juan", "Pepe", "Manuel", "Sofia", "Maria", "Elena", "Paula"];

    //SOLUCIÓN
}

/* Tenemos una lista con los productos de un comercio ordenados desde el mas vendido
hasta el que menos. Se solicita comprobar si la "Licuadora" se encuentra entre los 10 mas vendidos o no. */
function topventas() {
    let productos = ["Laptop","Teléfono móvil","Tableta","Smartwatch","Cámara digital","Auriculares","Altavoces Bluetooth","Impresora","Router","Teclado","Mouse","Monitor","Disco duro externo","Tarjeta de memoria","Batería externa","Cargador portátil","Robot aspirador","Cafetera","Licuadora","Microondas","Refrigerador","Licencia de software","Mochila para laptop","Estuche para teléfono","Soporte para tablet","Funda para smartwatch","Trípode para cámara","Estuche para auriculares","Maletín para portátil","Funda para teclado","Alfombrilla para mouse","Silla de oficina","Lámpara de escritorio","Organizador de cables","Filtro de privacidad para pantalla","Estabilizador de corriente","Aspiradora de mano","Hervidor eléctrico","Báscula digital","Candado para portátil"];

    //SOLUCIÓN
    
}

/* Tienes una lista de productos de un supermercado, para encontrar las mandarinas (que se encuentran varias veces en al lista) que
nos esta pidiendo el cliente necesitamos saber en que posicion se encuentra en la lista, pero que sea la ultima posicion, 
que son las que se van a poner malas antes */
function buscar() {
    let productos = [
        "Leche", "Mandarinas", "Pan integral", "Huevos", "Arroz", "Pasta",
        "Pollo", "Manzanas", "Papas", "Agua mineral", "Coca-Cola",
        "Aceite de oliva", "Tomate enlatado", "Cereal de desayuno", "Queso cheddar",
        "Yogur natural", "Jamón", "Pescado fresco", "Fresas", "Café molido",
        "Papel higiénico", "Detergente para ropa", "Jabón de baño", "Cepillo de dientes",
        "Pasta de dientes", "Acondicionador", "Shampoo", "Jabón líquido para manos",
        "Galletas", "Zanahorias", "Lechuga", "Pimiento rojo", "Mantequilla",
        "Pan blanco", "Sal", "Azúcar", "Helado de vainilla", "Mandarinas", "Pizza congelada",
        "Papas fritas", "Sopa enlatada", "Salsa de tomate", "Hamburguesas", "Panecillos",
        "Miel", "Jugo de naranja", "Queso suizo", "Cerveza",
      ];

    //SOLUCIÓN
}

/* Segun los corredores han llegado a la meta, se han ido añadiendo sus nombres al final de la lista. Se solitida extraer el podio */
function podio() {
    let ganadores = ["Ana", "Juan", "María", "Carlos", "Laura", "Pedro", "Isabel", "Sergio", "Luisa", "Miguel"];

    //SOLUCIÓN
}

/* Eres Thanos y estas indignado porque ha subido mucho el precio de todo, elimina a la mitad del universo (100 integrantes) */
function thanos() {
    let universo = [
        "Liam", "Pepa", "Noah", "Emma", "Sophia", "Jackson", "Ava", "Lucas", "Isabella", "Caden",
        "Mia", "Luna", "Mateo", "Lily", "Oliver", "Aiden", "Chloe", "Ethan", "Amelia", "Mason",
        "Harper", "Evelyn", "Logan", "Abigail", "Elijah", "Emily", "Carter", "Ella", "Jayden", "Scarlett",
        "Luke", "Grace", "Alexander", "Sofia", "Avery", "Eli", "Aria", "Benjamin", "Riley", "Sebastian",
        "Aubrey", "Jack", "Zoe", "Michael", "Leah", "Daniel", "Audrey", "William", "Penelope", "Gabriel",
        "Victoria", "Henry", "Hazel", "James", "Layla", "Joseph", "Nora", "Wyatt", "Camila", "John",
        "Mila", "Owen", "Skylar", "Isaac", "Claire", "David", "Brooklyn", "Dylan", "Bella", "Matthew",
        "Stella", "Jackson", "Nova", "Aiden", "Paisley", "Olivia", "Liam", "Ava", "Lucas", "Isabella",
        "Ethan", "Mia", "Noah", "Ella", "Lily", "Aiden", "Grace", "Logan", "Sophia", "Jayden", "Chloe",
        "Benjamin", "Avery", "Mason", "Evelyn", "Carter", "Hazel", "Michael", "Emily", "Samuel", "Scarlett"
      ];

    //SOLUCIÓN
}

/* Tenemos un array de numeros, comprueba si el numero que compone todos los elementos del array es capicua */
function capicua() {
    let numeros = [2, 55, 8, 54, 43, 6, 10];

    //SOLUCIÓN
}

/* A partir de una lista de numeros, filtrar aquellos numeros para que solo queden en la lista los pares */
function pares() {
    let numeros = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 97, 98, 99, 100
      ];
      
    //SOLUCIÓN
}

/* Hemos recibido la lista de personal añadido a la plantilla. Se solicita ordenar la lista de nombres alfabeticamente. */
function ordenar() {
    let nombres = ["Ana", "Juan", "María", "Carlos", "Laura", "Pedro", "Sofía", "Javier", "Elena", "Miguel", "Luisa", "David", "Carmen", "Raúl", "Isabel", "José", "Patricia", "Fernando", "Natalia", "Roberto", "Marta", "Alejandro", "Silvia", "Francisco", "Beatriz", "Pablo", "Lorena", "Antonio", "Rosa", "Manuel", "Eva", "Diego", "Nerea", "Adrián", "Olga", "Alberto", "Clara", "Cristian", "Paula"];

    //SOLUCIÓN
}

/* Tenemos un array con los ingresos que ha recibido una empresa esta semana, el jefe nos ha solicitado crear un nuevo array
con los mismos valores pero en lugar de ser variables numericas que sean de tipo cadena. */
function cadena() {
    let ingresos = [54, 45, 120, 98];
    let ingresosCadena = [];

    //SOLUCIÓN
}

/* Tenemos una lista con el historial de las paginas visitadas por un alumno, queremos comprobar si entre ellas se encuentra chatGPT 
(https://www.chatgpt.com), haz un console.log en funcion de si lo ha visitado o no. */
function historial() {
    let historialNavegacion = [
        "https://www.ejemplo.com",
        "https://www.ejemplo.com/productos",
        "https://www.ejemplo.com/categorias",
        "https://www.ejemplo.com/productos/zapatos",
        "https://www.ejemplo.com/contacto",
        "https://www.ejemplo.com/productos/carteras",
        "https://www.ejemplo.com/acerca-de"
      ];

    //SOLUCIÓN
}