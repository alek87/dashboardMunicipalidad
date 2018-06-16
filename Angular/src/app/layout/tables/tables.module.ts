import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

import { TransitoComponent } from '../../transito/transito.component';

//import { LimpiezaService } from '../../limpieza.service';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent, TransitoComponent],
    //providers: [LimpiezaService]
})
export class TablesModule {}
