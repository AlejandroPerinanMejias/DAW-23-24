let matriz = [
    [1, 4, 2],
    [5],
    [],
    [3, 3, 6, 7]
];

function aplatanado() {
    let list = [];
    matriz.forEach(element => {
        list.push(...element);
    });;
    console.log(list.join(", "));
}

aplatanado();