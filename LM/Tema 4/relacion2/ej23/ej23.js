let n = parseInt(prompt("Introduce un numero"));
let primo = true;

for (let i = 2; i < n-1; i++) {
    if (n % i == 0) {
        primo = false;
        break;
    } 
}

if (primo) {
    document.write("Es primo")
} else document.write("No es primo");