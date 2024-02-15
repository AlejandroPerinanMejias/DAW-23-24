let char = prompt("Introduce un caracter");
let rep = parseInt(prompt("Introduce el numero de veces que quieres que se repita"));

function repeat(char, rep) {
    for (let i = 0; i < rep; i++) {
        document.write(char);
    }
}

repeat(char, rep);