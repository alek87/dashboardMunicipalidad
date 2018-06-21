import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';

import { LimpiezaComponent } from '../../limpieza/limpieza.component';
import { LimpiezaService } from '../../limpieza.service';
import { TuristaService } from '../../turista.service';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent, LimpiezaComponent],
    providers: [LimpiezaService,TuristaService]
})
export class ChartsModule {}
