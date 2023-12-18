let numbers = [1,2,3,4,5];

numbers.forEach(function (number) {
    console.log(number);
});

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

let frutas = ["manzana", "uva", "cereza", "kiwi"];
let longitudes = [];

longitudes = frutas.map(function (x){
    return x.length;
})
