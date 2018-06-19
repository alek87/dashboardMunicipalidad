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

    //ngOnInit() {}

    
    public listado: any

    constructor(private limpieza: LimpiezaService) {}


    ngOnInit() {
        this.limpieza.listado_limpieza().subscribe((data:  Array<object>) => {
            this.listado  =  data;
        });
    }
    
}
