import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LimpiezaService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor (private http: HttpClient) { }
  
  listado_limpieza(){
    return this.http.get('http://localhost:8000/api/presupuestos'); 
  }

  agregar_servicio(service){
    //build header options
    let body = JSON.stringify(service);
    return  this.http.post('http://localhost:8000/api/presupuestos/', body, this.httpOptions);


  }

  borrar_servicio(id){
    //build header options
    //let body = JSON.stringify(service);
    return  this.http.delete('http://localhost:8000/api/presupuestos/'+id,this.httpOptions);


  }

  editar_servicio(id,datos){
    let body = JSON.stringify(datos);
    return this.http.put('http://localhost:8000/api/presupuestos/'+id, body, this.httpOptions);
  }


}
