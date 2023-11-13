console.log("Elemento: " + document.body.nodeName);
var body = document.body;
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