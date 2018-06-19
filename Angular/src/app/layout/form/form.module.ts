import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransitoCreateComponent } from '../../transito-create/transito-create.component';
import { LimpiezaService } from '../../limpieza.service';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [FormComponent, TransitoCreateComponent],
    providers: [LimpiezaService]
})
export class FormModule {}
