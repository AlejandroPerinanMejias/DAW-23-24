function repeat(char, rep) {
    let string = "";
    for (let i = 0; i < rep; i++) {
        string += char;
    }
    return string;
}

function piramid(h, char) {
    let piramid = document.getElementById("piramid");
    let esp = 1;
    let esp2 = h
    let space = " ";
    for (let i = 1; i <= h*2; i+=2) {
        let spaceRepeat = space.repeat(esp2);
        piramid.innerHTML += `${spaceRepeat}${repeat(char, esp)}<br> `;
        esp+=2;
        esp2--;
    }
}

let h = parseInt(prompt("Introduce la altura de la piramide"));
let char = prompt("Introduce el caracter de la piramide");

piramid(h, char);