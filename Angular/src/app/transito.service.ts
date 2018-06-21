import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {HttpHeaders} from  '@angular/common/http';
import {Infraccion} from './infraccion';

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


  borrarInfraccion(infraccion: Infraccion){
    return this.http.delete('http://localhost:8000/'+ infraccion.nro_alta  +'/delete/', this.httpOptions);
  }

  actualizarInfraccion(infraccion: Infraccion){
    return this.http.put('http://localhost:8000/'+infraccion.nro_alta+'/edit/', infraccion);
  }


  getInfraccion(nro_alta: number) {
    return this.http.get('http://localhost:8000/'+ nro_alta  +'/edit/', this.httpOptions);
  }


}
