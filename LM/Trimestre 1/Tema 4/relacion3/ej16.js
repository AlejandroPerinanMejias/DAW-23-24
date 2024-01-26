function analisis() {
    let notas = prompt("Introduce las notas separadas por comas").split(",");
    let media = 0;
    let suspensos = 0;
    let aprobados = 0;

    for (let i = 0; i < notas.length; i++) {
        media =+ notas[i];

        if (notas[i] >= 5) {
            aprobados++;
        }
        else suspensos++;
    }

    media = (media / notas.length).toFixed(2);

    document.write(`Han aprobado ${aprobados} alumnos<br>Han suspendido ${suspensos} alumnos<br>La media es ${media}`);
}