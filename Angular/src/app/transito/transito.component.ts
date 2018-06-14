import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';


@Component({
  selector: 'app-transito',
  templateUrl: './transito.component.html',
  styleUrls: ['./transito.component.scss'],
  template: `
    <div class="app-transito">
      <table class="table table-bordered" style="width:100%">

        <tr>
          <th>Fecha</th>
          <th>N° Acta</th>
          <th>Clase del Vehículo</th>
          <th>Descripción</th>
        </tr>

        <tr *ngFor="let infracion of infracciones">
          <td> {{ infracion.fecha }} </td>
          <td> {{ infracion.nro_alta }} </td>
          <td> {{ infracion.clase_vehiculo }} </td>
          <td> {{ infracion.descripcion }} </td>
        </tr>

      </table>
    </div>
  `,
})

export class TransitoComponent implements OnInit {

  private  infracciones:  Array<object> = [];

  constructor(private service: TransitoService) { }

  ngOnInit() {
    this.listado_infracciones();
  }

  public  listado_infracciones(){
      this.service.listado_infracciones().subscribe((data:  Array<object>) => {
          this.infracciones  =  data;
          console.log(data);
      });
  }

}
