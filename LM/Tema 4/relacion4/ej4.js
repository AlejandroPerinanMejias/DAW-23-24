let notasAlumno = [7, 8, 10];

let media = 0;
for (let i = 0; i < 3; i++) {
    media += notasAlumno[i];
}
media /= 3;
document.write(`La media es ${Math.round(media)}`)