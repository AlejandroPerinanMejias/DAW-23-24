var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

document.write(`Numero de elementos: ${dias.length} Array: ${dias.join(", ")}<br>`);
dias.shift();
document.write(`Numero de elementos: ${dias.length} Array: ${dias.join(", ")}<br>`);
dias.push("Sunday");
document.write(`Numero de elementos: ${dias.length} Array: ${dias.join(", ")}`);