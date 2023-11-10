console.log("Elemento: " + document.body.nodeName);

for (let node of document.body.childNodes) {
    if (node.nodeName != "#text" && node.textContent != "") {
        console.log("Elemento: " + node.nodeName);
    }
    if (node.nodeType === 1) {
        console.log("Texto: " + node.textContent.trim());
    }
}