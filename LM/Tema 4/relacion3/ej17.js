function calificacion(nota) {
    calificacion;
    switch (nota) {
        case 0: case 1: case 2: case 3: case 4:
            calificacion = "Suspenso";
            break;

        case 5:
            calificacion = "Suficiente";
            break;

        case 6:
            calificacion = "Bien";
            break;
        
        case 7: case 8:
            calificacion = "Notable";
            break;

        case 9: case 10:
            calificacion = "Sobresaliente";
            break;
    }
    document.write(`Calificacion: ${calificacion}`);
}