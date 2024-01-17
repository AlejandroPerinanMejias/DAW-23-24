let ImpNumbers = [];
let ParNumbers = [];

for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        ParNumbers.push(i);
    } else ImpNumbers.push(i);
}

document.write("Los numeros impares son: " + ImpNumbers.join(", ") + "<br><br>Los numeros pares son: " + ParNumbers.join(", "));