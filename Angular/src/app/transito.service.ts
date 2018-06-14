import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransitoService {

  constructor (private http: HttpClient) { }

  listado_infracciones(){
    return this.http.get('http://localhost:8000/');
  }

}
