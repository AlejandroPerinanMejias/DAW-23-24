import { Component, OnInit } from '@angular/core';
import { LugarService } from '../services/lugar.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lugar-detallado',
  templateUrl: './lugar-detallado.component.html',
  styleUrls: ['./lugar-detallado.component.css']
})
export class LugarDetalladoComponent implements OnInit {
  lugar: any;
  id: any;
  valoracion = ["0", "1", "2", "3", "4", "5"];
  logueado: boolean = false;
  idUsuario: string = "";
  formularioComentario: FormGroup;

  constructor(private _lugaresService: LugarService, private _route: ActivatedRoute, private _cookieService: CookieService, private _fb: FormBuilder) {
    this.formularioComentario = this._fb.group({
      valoracion: ["", [Validators.required]],
      comentario: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get("id");
    this._lugaresService.getLugar(this.id).subscribe(lugar => {
      next: {
        this.lugar = lugar;
      }
    })

    let token = this._cookieService.get("token");
    let tokenPayLoad = JSON.parse(atob(token.split('.')[1]));
    let rol = tokenPayLoad.rol;
    this.idUsuario = tokenPayLoad.id;

    if(!token){
      this.logueado = false;
    }else if(rol == "administrador"){
      this.logueado = false;
    }else{
      this.logueado = true;
    }
    console.log(this.logueado);
    
  }

  getMediaValoracion(valoraciones: string []): number{
    let valoracionesNumericas = valoraciones.map(valoracion => parseFloat(valoracion));
    let suma = valoracionesNumericas.reduce((total, valoracion) => total + valoracion, 0);

    return parseInt((suma / valoracionesNumericas.length).toFixed(2));
  }

  enviarValoracion() {
    if (this.formularioComentario.valid) {
      this.lugar.valoracion.push(this.formularioComentario.value.valoracion);
      this.lugar.comentario.push(this.formularioComentario.value.comentario);
      this.lugar.usuarioComentario.push(this.idUsuario);

      this._lugaresService.editarLugar(this.lugar.id, this.lugar).subscribe({
        next: (val: any) => {
          console.log(val);
        },
        error: console.log
      });
    }
  }

  cambiarImagen(ruta: string) {
    let imagenPrincipal = document.getElementById("imagenPrincipal");
    imagenPrincipal?.setAttribute("src", ruta);
  }
  
}
