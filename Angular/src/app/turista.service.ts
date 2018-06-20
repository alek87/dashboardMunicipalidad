import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuristaService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor (private http: HttpClient) { }
  
  listado_turista(){
    return this.http.get('http://localhost:3000/turista'); 
  }

  agregar_registro(registro){
    //build header options
    let body = JSON.stringify(registro);
    return  this.http.post('http://localhost:3000/turista/', body, this.httpOptions);


  }


}