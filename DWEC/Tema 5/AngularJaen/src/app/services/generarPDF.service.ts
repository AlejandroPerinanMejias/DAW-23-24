// import { Injectable } from '@angular/core';
// import * as jsPDF from 'jspdf';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfService {

//   constructor() { }

//   generarPDF(lugares: any[]) {
//     const doc = new jsPDF();
//     let y = 10; // posición inicial en el eje y

//     lugares.forEach((lugar, index) => {
//       doc.text(`Lugar ${index + 1}: ${lugar.nombre}`, 10, y);
//       doc.text(`Descripción: ${lugar.descripcion}`, 10, y + 10);
//     });

//     doc.save('listado_lugares.pdf');
//   }
// }
