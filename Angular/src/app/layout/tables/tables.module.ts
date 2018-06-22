import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransitoComponent } from '../../transito/transito.component';
import { TransitoEditComponent } from '../../transito-edit/transito-edit.component';
import { LimpiezaService } from '../../limpieza.service';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [TablesComponent, TransitoComponent, TransitoEditComponent],
    providers: [LimpiezaService]

})
export class TablesModule {}
