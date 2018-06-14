import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { TransitoComponent } from '../../transito/transito.component';
import { LimpiezaComponent } from '../../limpieza/limpieza.component';
import { LimpiezaService } from '../../limpieza.service';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent, TransitoComponent, LimpiezaComponent],
    providers: [LimpiezaService]
})
export class ChartsModule {}
