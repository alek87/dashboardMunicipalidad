import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimpiezaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'Content-Type',
      'Access-Control-Allow-Methods':'GET, POST, OPTIONS',

    })
  }

  constructor (private http: HttpClient) { }

  listado_limpieza(){
    return this.http.get('http://localhost:8000/api/presupuestos', this.httpOptions).toPromise();
  }
}