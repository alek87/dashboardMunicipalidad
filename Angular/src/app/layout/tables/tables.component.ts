import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { LimpiezaService } from '../../limpieza.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public listado: any

    constructor(private limpiezaSer: LimpiezaService) {}

    ngOnInit() {
        this.limpiezaSer.listado_limpieza()
            .then(listado => this.listado = listado);

    }

    
}
