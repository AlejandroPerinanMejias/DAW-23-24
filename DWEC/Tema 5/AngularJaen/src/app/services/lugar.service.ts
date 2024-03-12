import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lugarModel } from '../models/lugar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private _http: HttpClient) { }
  
    private UrlBD = 'http://localhost:3000/lugares';

    getLugares(): Observable<lugarModel[]>{
      return this._http.get<lugarModel[]>(this.UrlBD);
    }

    getLugar(id: string): Observable<lugarModel[]>{
      return this._http.get<lugarModel[]>(`${this.UrlBD}/${id}`);
    }

    borrarLugar(id: string) {
      return this._http.delete<lugarModel[]>(`${this.UrlBD}/${id}`);
    }

    editarLugar(id: string, data: lugarModel): Observable<lugarModel> {
      return this._http.put<lugarModel>(`${this.UrlBD}/${id}`, data)
    }

    anadirLugar(data: lugarModel): Observable<lugarModel> {
      return this._http.post<lugarModel>(`${this.UrlBD}`, data)
    }
}
