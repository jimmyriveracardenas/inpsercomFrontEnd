import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "rol/";
  constructor(private http:HttpClient) { }

  getList():Observable<Rol>{
    return this.http.get<Rol>(`${this.apiUrl}lista`);
  }
}
