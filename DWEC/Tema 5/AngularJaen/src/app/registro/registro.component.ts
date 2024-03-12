import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  comunidades: string[] = [
    "Andalucía",
    "Aragón",
    "Asturias",
    "Baleares",
    "Canarias",
    "Cantabria",
    "Castilla-La Mancha",
    "Castilla y León",
    "Cataluña",
    "Comunidad Valenciana",
    "Extremadura",
    "Galicia",
    "La Rioja",
    "Madrid",
    "Murcia",
    "Navarra",
    "País Vasco",
    "Otro"
  ];

  formularioRegistro: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
    ){
    this.formularioRegistro = this._fb.group({
      rol:['usuario', [Validators.required]],
      nombre:['', [Validators.required]],
      apellidos:['', [Validators.required]],
      fechaNacimiento: [null],
      correo:['', [Validators.required, Validators.email]],
      numTelefono:['', [Validators.required]],
      genero:[null],
      contrasena:['', [Validators.required]],
      contrasena2:['',[Validators.required]],
      comunidad:[null]
    });
  }

  comprobarContrasena(){
    return this.formularioRegistro.value.contrasena === this.formularioRegistro.value.contrasena2;
  }

  formularioRegistrosubmit() {
    //console.log(this.formularioRegistro);
    const fechaNacimiento = this.formularioRegistro.value.fechaNacimiento;
    let fechaNacimientoFormateada: Date | null = null;

    if (fechaNacimiento!=null) {
      let nextDay = new Date(fechaNacimiento);
      nextDay.setDate(fechaNacimiento.getDate() + 1);
      fechaNacimientoFormateada = nextDay.toISOString().slice(0, 10) as unknown as Date;
    }

    if(this.formularioRegistro.valid && this.comprobarContrasena()){
      const userData: UserModel = new UserModel(
        this.formularioRegistro.value.id,
        this.formularioRegistro.value.rol,
        this.formularioRegistro.value.nombre,
        this.formularioRegistro.value.apellidos,
        fechaNacimientoFormateada,
        this.formularioRegistro.value.correo,
        this.formularioRegistro.value.numTelefono,
        this.formularioRegistro.value.genero,
        this.formularioRegistro.value.comunidad,
        "CambiarPorTokenCorrespondiente"
      );
      this._userService.addUser(userData).subscribe({
        next: () => {
          window.alert('Usuario agregado exitosamente.');
        },
        error: (error) => {
          console.error('Error al agregar usuario:', error);
          window.alert('Error al agregar usuario. Por favor, inténtelo de nuevo.');
        }
      });  error:console.log
        };
  }
}