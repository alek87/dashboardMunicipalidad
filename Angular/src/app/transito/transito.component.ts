import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';
import {Infraccion} from '../infraccion';

@Component({
  selector: 'app-transito',
  template: `
  <div class="col col-xl-12 col-lg-12">
      <div class="card mb-12">
          <div class="card-header">Infracciones</div>
          <div class="card-body table-responsive">
              <table class="table table-inverse">
                <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Clase del Vehículo</th>
                  <th>Descripción</th>
                  <th style="text-align:center;"><em class="fa fa-cog"></em></th>
                </tr>
                </thead>

                <tbody>
                  <tr *ngFor="let infracion of infracciones">
                    <td> {{ infracion.fecha }} </td>
                    <td align="center"> {{ infracion.clase_vehiculo }} </td>
                    <td> {{ infracion.descripcion }} </td>
                    <td style="text-align:center;">
                      <button class="btn btn-danger" (click)="borrarInfraccion(infracion); $event.stopPropagation()"> <i class="fa fa-trash"></i></button>
                    </td>                    
                  </tr>
                </tbody>
              </table>
          </div>
      </div>

  </div>

  `,
})


export class TransitoComponent implements OnInit {

  infracciones:  Array<object> = [];

  selectedInfraccion: Infraccion;

  constructor(private service: TransitoService) { }

  ngOnInit() {
    this.listado_infracciones();
  }

  public  listado_infracciones(){
      this.service.listado_infracciones().subscribe((data:  Array<object>) => {
          this.infracciones  =  data;
      });
  }

  public borrarInfraccion(infraccion: Infraccion) {
    this.service
      .borrarInfraccion(infraccion)
      .subscribe(() => {
        this.infracciones = this.infracciones.filter(b => b !== infraccion);
        if (this.selectedInfraccion === infraccion) { this.selectedInfraccion = null; }
      });
  }

}
