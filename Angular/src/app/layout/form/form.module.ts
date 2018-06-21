import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TransitoCreateComponent } from '../../transito-create/transito-create.component';
import { LimpiezaService } from '../../limpieza.service';
import { TuristaService } from '../../turista.service';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, NgbAlertModule.forRoot(),],
    declarations: [FormComponent, TransitoCreateComponent],
    providers: [LimpiezaService,TuristaService]
})
export class FormModule {}
