function es_primo(num) {
    let primo = true;
    for (let i = 2; i < num-1; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }
    return primo;
}

function primos_rango() {
    let num = parseInt(prompt("Introduce un numero"));
    let primos = [];
    for (let i = 0; i < num; i++) {
        if (es_primo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

document.write(`Primos: ${primos_rango().join(",")}`);