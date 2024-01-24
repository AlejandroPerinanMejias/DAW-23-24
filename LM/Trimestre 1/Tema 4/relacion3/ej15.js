function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

let num = parseInt(prompt("Introduce un numero"));
document.write(`El factorial es ${factorial(num)}`);