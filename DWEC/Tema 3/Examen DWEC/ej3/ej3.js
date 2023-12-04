function recorrerNodos() {  //Función que recorre los nodos del documento y el contenido del mismo
    let body = document.body;   //Obtenemos el body
    console.log("Elemento 1: " + body.nodeName);
    let contador = 2;
    for (node of body.childNodes) { //Hacemos un recorrido por los nodos del body
        if (node.nodeType === 1) {  //El tipo 1 representa los elementos del body
            console.log("Elemento " + contador + ": " + node.nodeName);
            contador++;
        }
        
        if (node.nodeType === 3 && node.textContent != " ") { //El tipo 3 representa aquellos nodos que su contenido sea texto
            console.log("Contenido " + node.nodeName + ": " + node.textContent.trim());
        }
    }
}

function ampliarNodos() {   //Función que añade al div con ID diasSemana una lista de tal
    let div = document.getElementById("diasSemana");
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];  
    div.append(dias.join(", "));
}