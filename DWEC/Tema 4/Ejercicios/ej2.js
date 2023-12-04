function isArray() {    //Funcion para 

}

function length() { //Funcion para comprobar la longitud de un array
    let array = ["Pollo", "Patatas", "Lechuga", "Almendras"];
    console.log("La cantidad de items que hay es " + array.length);
}

/** El Mercadona esta en apuros, crea una funcion que pueda unificar las diferentes 
 * listas de las secciones del supermercado en una unica general. **/

function concat() { //Funcion para unificar todos los items del Mercadona.
    let itemsCarniceria = ["Pollo", "Cerdo", "Pavo"];
    let itemsPescaderia = ["Salmon", "Atun", "Pulpo"];
    let itemsFruteria = ["Naranja", "Manzana", "Platano"];

    let bdMercadona = itemsCarniceria.concat(itemsPescaderia, itemsFruteria);

    console.log(bdMercadona);
}


function join() {
    let items = [["1kg arroz", 1.5], ["1kg patatas", 2], ["1kg maiz", 1.75]];

    console.log(items.join("\n"));
}

function indexOf() {
    let itemsCarniceria = ["Pollo", "Cerdo", "Pavo"];
    let itemsPescaderia = ["Salmon", "Atun", "Pulpo"];
    let itemsFruteria = ["Naranja", "Manzana", "Platano"];

    
}