import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "usuario/";
  
  constructor(private http:HttpClient) { }

  getList():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}lista`);
  }

  add(modelo:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}guardar`,modelo);
  }

  update(idUsuario:number,modelo:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiUrl}actualizar/${idUsuario}`,modelo);
  }

  delete(idUsuario:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}eliminar/${idUsuario}`);
  }
}
