let n = parseInt(prompt("Introduce el limite"));
let sum = 1;

for (let i = 1; i < n; i++) {
    sum *= i;
}

document.write(`La suma resulta ${sum}`);