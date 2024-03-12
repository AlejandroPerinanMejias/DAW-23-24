import { Injectable } from '@angular/core';
//import { LoginModel } from '../models/login.model';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_API = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }  

  loginUser(email: string, password: string): Observable<{ rol: string, token: string } | {}> {
    return this._http.get<UserModel[]>(`${this.URL_API}/usuarios`).pipe(
      map(data => {
        // Encuentra el usuario válido
        console.log(data.find((user: UserModel) => user.correo));
        console.log(data.find((user: UserModel) => JSON.parse(atob(user.token.split('.')[1])).contrasena));
        let validUser = data.find((user: UserModel) => user.correo === email && JSON.parse(atob(user.token.split('.')[1])).contrasena === password);
        
        // Si el usuario es válido, devuelve el rol y el token; de lo contrario, devuelve un objeto vacío
        return validUser ? { rol: validUser.rol, token: validUser.token } : {};
      })
    );
  }
}
