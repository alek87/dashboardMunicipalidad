import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransitoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor (private http: HttpClient) { }

  listado_infracciones(){
    return this.http.get('http://localhost:8000/');
  }


  crearInfraccion(infraccion){
    let body = JSON.stringify(infraccion);
    return  this.http.post('http://localhost:8000/create/', body, this.httpOptions);
  }


}
