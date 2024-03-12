import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
// import { AddEditPlaceComponent } from '../add-edit-place/add-edit-place.component';
import { LugarService } from '../services/lugar.service';
import { lugarModel } from '../models/lugar.model';
import { lugar } from '../interfaces/lugar';
import { EditarLugarPopUpComponent } from '../editar-lugar-pop-up/editar-lugar-pop-up.component';
import { CookieService } from 'ngx-cookie-service';
//import { ConfirmDialogComponent } from '../confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'actions'];
  // dataSource = new MatTableDataSource(this.list_places);
  dataSource!: MatTableDataSource<lugarModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _lugaresService: LugarService, private _dialog: MatDialog, private _cookieService: CookieService, private _router: Router) {}

  ngOnInit(): void {
    this.mostrarLugares();
    let token = this._cookieService.get("token");
    let tokenPayLoad = JSON.parse(atob(token.split('.')[1]));
    let rol = tokenPayLoad.rol;

    if(rol != "administrador"){
      this._router.navigate(["home"]);
    }
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  modificarLugar(data?: lugar) {
    let dialogRef;

    if(data)
      dialogRef = this._dialog.open(EditarLugarPopUpComponent, {data});  // Edita el usuario
    else
      dialogRef = this._dialog.open(EditarLugarPopUpComponent);    // Registra el usuario


    dialogRef.afterClosed().subscribe({
      next: (val) => {                        // Si recibe true cuando se cierra, se actualiza la lista
        if (val)
          this.mostrarLugares();
      }
    });
  }

  eliminarLugar(id: string) {
    if (confirm("¿Desea eliminar el sitio?")) {
      this._lugaresService.borrarLugar(id).subscribe();
      alert("Sitio eliminado");
      this.mostrarLugares();
    } else alert("Sitio no eliminado");
  }

  mostrarLugares() {
    this._lugaresService.getLugares().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }
}
