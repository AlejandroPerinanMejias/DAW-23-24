let n = parseInt(prompt("Introduce la altura"));
let char = "*";

for (let i = 0; i < n; i++) {
    document.write(`${char}<br>`);
    char += "*";
}