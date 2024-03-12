import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../shared/shared.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  correo: string = '';
  contrasena: string = '';

  constructor(private fb: FormBuilder, private _router: Router,
    private _loginService: LoginService, private _cookieService: CookieService,  private _sharedService: SharedService){ 
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    })
  }

  // Comprueba que el usuario y contraseña sean correctos (en este caso, el token), crea la cookie con el token y redirige a la Home. 
  // Si no se autentifica correctamente, lo indica y vuelve a mostrar el formulario de login.
  // Si es administrador, redirige a Administración de usuarios. Si no, a la Home.
  loginUser(){

    if(this.loginForm.value.correo == '' || this.loginForm.value.contrasena == ''){       // Comprueba que se hayan rellenado ambos campos, aunque si no lo hace, el botón estará deshabilitado   
      this._sharedService.openSnackBar('Debe rellenar Usuario y Contraseña.');
      return;
    }  

    let logincorreo: string = this.loginForm.value.correo;
    let logincontrasena: string = this.loginForm.value.contrasena;

    let route: string = '/home';

    this._loginService.loginUser(logincorreo, logincontrasena).subscribe({
      next: (result: { rol: string, token: string } | {}) => {
        if ('rol' in result && 'token' in result) {
                    
          // Guardamos el token en la cookie
          this._cookieService.set('token', result.token);

           // Si es administrador, la ruta por defecto será /usuarios
           if (result.rol === 'administrador') 
           route = '/usuarios';
          
           this._router.navigate([route]);
        } else {
          // Si no se encontró un usuario válido, muestra un mensaje de error
          this._sharedService.openSnackBar('Los datos introducidos son incorrectos o no existen');
        }
      },
      error: console.log
    });
  }
}
