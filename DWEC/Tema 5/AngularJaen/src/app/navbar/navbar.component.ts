import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  firstname: string = "";
  isAdmin: boolean = false;

  constructor (private _cookieService: CookieService, private _router: Router, private _sharedService: SharedService){}

  ngOnInit(){
    this.getNombreLogueado();
  }

  // Si hay token en una cookie, devuelve true y guarda el nombre de usuario. Si no, devuelve false
  getNombreLogueado(): boolean {

    // Lee el token de la cookie y extrae el nombre de usuario
    let token: string = this._cookieService.get('token');  
    
    if (!token)
      return false;
    else
    {
      let tokenPayload = JSON.parse(atob(token.split('.')[1]));
      this.firstname = tokenPayload.nombre; 

      if (tokenPayload.rol === "administrador")
        this.isAdmin = true;

      return true;
    }
  }

  // Elimina la cookie y muestra la página de Inicio
  logout(){
    this._cookieService.delete('token');   
    this._router.navigate(['/home']); 
    this._sharedService.openSnackBar("La sesión se ha cerrado correctamente.");
  }

}
