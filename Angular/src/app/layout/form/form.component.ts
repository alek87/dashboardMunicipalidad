import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {LimpiezaService} from '../../limpieza.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    registerForm2: FormGroup;
    submitted = false;

    constructor(private service: LimpiezaService, private formBuilder: FormBuilder) {}

    get f() { return this.registerForm2.controls; }
    
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

    ngOnInit() {
        this.registerForm2 = this.formBuilder.group({
            Nombre: ['', Validators.required],
            Monto: ['', Validators.required],
        });
    }
}
