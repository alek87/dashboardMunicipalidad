import { Component, OnInit } from '@angular/core';
import {LimpiezaService} from '../limpieza.service';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.scss']
})
export class LimpiezaComponent implements OnInit {
  limpieza: any

  constructor(private service: LimpiezaService) { }

  ngOnInit() {
    this.service.listado_limpieza()
      .then(limpieza => this.limpieza = limpieza);
  }

}
