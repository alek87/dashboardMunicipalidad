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


  /*
  private headers = new Headers({ 'Content-Type': 'application/json' });

  borrarInfraccion(infraccion: Infraccion): Promise<void> {
    const url = 'http://localhost:8000/${infraccion.nro_alta}/delete/';
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
   }
   */

}
