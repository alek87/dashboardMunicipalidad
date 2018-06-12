import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';

@Component({
  selector: 'app-transito',
  templateUrl: './transito.component.html',
  styleUrls: ['./transito.component.scss']
})
export class TransitoComponent implements OnInit {
  infracciones: any

  constructor(private service: TransitoService) { }

  ngOnInit() {
    this.service.listado_infracciones()
      .then(infracciones => this.infracciones = infracciones);
  }

}
