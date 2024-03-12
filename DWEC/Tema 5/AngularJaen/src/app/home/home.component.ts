import { Component, OnInit } from '@angular/core';
import { lugarModel } from '../models/lugar.model';
import { LugarService } from '../services/lugar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lugares: any[] = [];

  constructor(private _lugaresService: LugarService, private router: Router) {}

  ngOnInit(): void {
    this._lugaresService.getLugares().subscribe(lugares => {
      next: this.lugares = lugares;
      error:console.log;
    })
  }

  leerMas(id: Number): void {
    this.router.navigate(['lugarDetallado/' + id]);
  }

  truncarTexto(texto: string): string {
    // Dividir el texto en palabras
    const palabras = texto.split(' ');
    
    // Si el texto tiene menos de 50 palabras, devolver el texto original
    if (palabras.length <= 50) {
      return texto;
    }
    
    // Truncar el texto a 50 palabras y agregar "..." al final
    return palabras.slice(0, 50).join(' ') + '...';
  }
  
}
