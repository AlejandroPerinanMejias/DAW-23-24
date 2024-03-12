import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  addUser(user: UserModel): Observable<UserModel> {
    console.log(user);
    return this._http.post<UserModel>(`${this.URL_API}/usuarios`, user);
  }

  editUser(id: number, user: UserModel): Observable<UserModel> {
    return this._http.put<UserModel>(`${this.URL_API}/usuarios/${id}`, user);
  }
  
  getUsersList(): Observable<UserModel[]> {
    return this._http.get<UserModel[]>(`${this.URL_API}/usuarios`);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.URL_API}/usuarios/${id}`);
  }
}
