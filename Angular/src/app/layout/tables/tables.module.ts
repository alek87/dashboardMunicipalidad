import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransitoComponent } from '../../transito/transito.component';
import { TransitoEditComponent } from '../../transito-edit/transito-edit.component';
import { LimpiezaService } from '../../limpieza.service';

import { TuristaService } from '../../turista.service';
import { TuristaEditComponent } from '../../turista-edit/turista-edit.component';
import { LimpiezaEditComponent } from '../../limpieza-edit/limpieza-edit.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [TablesComponent, TransitoComponent, TransitoEditComponent,TuristaEditComponent,LimpiezaEditComponent],
    providers: [LimpiezaService,TuristaService]

})
export class TablesModule {}
