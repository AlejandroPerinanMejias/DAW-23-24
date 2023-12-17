function recorrerNodos() {
    console.log("Elemento: " + document.body.nodeName);
    let body = document.body;
    function recorrerNodos(body) {
        for (let node of body.childNodes) {
            if (node.nodeType === 1) {
                console.log("Elemento: " + node.nodeName);
                recorrerNodos(node);
            }
            if (node.nodeType === 3 && node.textContent.trim() != "") {
                console.log("Texto: " + node.textContent.trim());
            }
        }
    }
    recorrerNodos(body);
}

function ampliarNodos() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        let lista = document.createElement("ul");
        for (let i = 0; i < dias.length; i++) {
            let dia = document.createElement("li");
            dia.textContent = dias[i];
            lista.appendChild(dia);
        }
        document.getElementById("lista").appendChild(lista);
}