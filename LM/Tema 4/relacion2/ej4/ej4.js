let mark = parseInt(prompt("Introduce tu nota: "));

switch(mark) {
    case 0, 1, 2, 3, 4:
        alert("Suspenso");
        break;
    case 5:
        alert("Suficiente");
        break;
    case 6:
        alert("Bien");
        break;
    case 7, 8:
        alert("Notable");
        break;
    case 9, 10:
        alert("Sobresaliente");
        break;
}