let h = parseInt(prompt("Introduce la altura de la piramide"));

function piramid(h) {
    let piramid = document.getElementById("piramid");
    let char = "";
    for (let x = 0; x < h; x++) {
        for (let i = 0; i < h; i++) {
            piramid.innerHTML += " ";
        }
    
        for (let i = x; i < h; i++) {
            piramid.innerHTML += "*";
        }piramid.innerHTML += "<br>";
    }
}

piramid(h);