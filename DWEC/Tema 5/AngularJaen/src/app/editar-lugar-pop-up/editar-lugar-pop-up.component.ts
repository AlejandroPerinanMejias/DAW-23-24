import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LugarService } from '../services/lugar.service';
import { lugarModel } from '../models/lugar.model';

@Component({
  selector: 'app-editar-lugar-pop-up',
  templateUrl: './editar-lugar-pop-up.component.html',
  styleUrls: ['./editar-lugar-pop-up.component.css']
})
export class EditarLugarPopUpComponent {
  formularioEditar: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _placesService: LugarService,
    private _dialogRef: MatDialogRef<EditarLugarPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: lugarModel) 
    {
    this.formularioEditar = this._fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      imagen0: [this.data == null? '' : this.data.imagen[0], [Validators.required]],
      imagen1: [this.data == null? '' : this.data.imagen[1], [Validators.required]],
      imagen2: [this.data == null? '' : this.data.imagen[2], [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.formularioEditar.patchValue(this.data);
  }

  submitAddEditForm()
  {
    console.log(this.formularioEditar)
    if(this.formularioEditar.valid)
    {
      let placeData: lugarModel = new lugarModel(
        this.formularioEditar.value.id,
        this.formularioEditar.value.nombre,
        this.formularioEditar.value.tipo,
        this.formularioEditar.value.descripcion,
        [this.formularioEditar.value.imagen0, this.formularioEditar.value.imagen1 ,this.formularioEditar.value.imagen2],
        this.formularioEditar.value.logo,
      );
        console.log(this.data);
      if(this.data && this.data.id !== undefined)
      {
        this._placesService.editarLugar(this.data.id, placeData).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: console.log
        });
      } else {
        this._placesService.anadirLugar(placeData).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: console.log
        });
      } 
    }
  }
}
