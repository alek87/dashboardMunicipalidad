import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {LimpiezaService} from '../../limpieza.service';
import {TuristaService} from '../../turista.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    registerForm2: FormGroup;
    registerFormT: FormGroup;
    submitted = false;
    active = true;

    constructor(private service: LimpiezaService, private serviceT: TuristaService, private formBuilder: FormBuilder) {}

    get f() { return this.registerForm2.controls; }
    get ft() { return this.registerFormT.controls; }
    
    onSubmit(value) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm2.invalid) {
            return;
        }


        this.service.agregar_servicio(value).subscribe(
           data => {
             // refresh the list
             return true;
           },
           error => {
             console.error("Error guardando servicio de limpieza!");
           }
        );

    }

    onSubmitT(value) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerFormT.invalid) {
            return;
        }


        this.serviceT.agregar_registro(value).subscribe(
           data => {
             // refresh the list
             return true;
           },
           error => {
             console.error("Error guardando servicio de limpieza!");
           }
        );

    }

    limpiar() {
   //     this.registerForm2.: "";
   //     Manta:"";
        this.active=false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit() {
        this.registerForm2 = this.formBuilder.group({
            Mes: ['', Validators.required],
            Monto: ['', Validators.required],
        });
        this.registerFormT = this.formBuilder.group({
            mes: ['', Validators.required],
            cantidad: ['', Validators.required],
        });
    }
}
