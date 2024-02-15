let h = parseInt(prompt("Introduce la altura de la piramide"));
let char = prompt("Introduce el caracter de la piramide");

function piramid(h, char) {
    let piramid = document.getElementById("piramid");
    let esp = h;
    let space = " ";
    for (let i = 1; i <= h*2; i++) {
        let spaceRepeat = space.repeat(esp);
        let charRepeat = char.repeat(i);
        piramid.innerHTML += `${spaceRepeat}${charRepeat}<br> `;
        esp--;
        i++;
    }
}

piramid(h, char);