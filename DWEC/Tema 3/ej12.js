console.log("Elemento: " + document.body.nodeName);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        console.log("Texto: " + node.textContent);
    }
    else {
        console.log("Elemento: " + node.nodeName);
    }
    
}