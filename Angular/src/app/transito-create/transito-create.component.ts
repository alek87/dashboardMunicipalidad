import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transito-create',
  template: `
    <div class="row">
        <div class="col-lg-6">
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit(registerForm.value)">
            <div class="form-group">
                <label>N° de Alta</label>
                <input type="number" formControlName="nro_alta" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.nro_alta.errors }" />
                <div *ngIf="submitted && f.nro_alta.errors" class="invalid-feedback">
                    <div *ngIf="f.nro_alta.errors.required">N° Alta es obligatorio</div>
                </div>
            </div>

            <div class="form-group">
              <label>Fecha</label>
              <input type="date" class="form-control" formControlName="fecha"
              placeholder="dd/MM/yyyy" [ngClass]="{ 'is-invalid': submitted && f.fecha.errors }" />
              <div *ngIf="submitted && f.fecha.errors" class="invalid-feedback">
                  <div *ngIf="f.fecha.errors.required">Fecha es obligatorio</div>
              </div>
            </div>

            <div class="form-group">
                <label>Inspector</label>
                <input type="text" formControlName="inspector" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.inspector.errors }" />
                <div *ngIf="submitted && f.inspector.errors" class="invalid-feedback">
                    <div *ngIf="f.inspector.errors.required">Inspector es obligatorio</div>
                </div>
            </div>

            <div class="form-group">
                <label>Infractor</label>
                <input type="text" formControlName="infractor" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.infractor.errors }" />
                <div *ngIf="submitted && f.infractor.errors" class="invalid-feedback">
                    <div *ngIf="f.infractor.errors.required">Infractor es obligatorio</div>
                </div>
            </div>

            <div class="form-group">
                <label>Dominio</label>
                <input type="text" formControlName="dominio" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.dominio.errors }" />
                <div *ngIf="submitted && f.dominio.errors" class="invalid-feedback">
                    <div *ngIf="f.dominio.errors.required">Dominio es obligatorio</div>
                </div>
            </div>

            <div class="form-group">
                <label>Descripción</label>
                <input type="text" formControlName="descripcion" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.descripcion.errors }" />
                <div *ngIf="submitted && f.descripcion.errors" class="invalid-feedback">
                    <div *ngIf="f.descripcion.errors.required">Descripción es obligatorio</div>
                </div>
            </div>

            <div class="form-group">
              <label>Clase Vehículo</label>
              <select formControlName="clase_vehiculo" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.clase_vehiculo.errors }">
                <option *ngFor = "let item of items" value="{{item.value}}">{{item.name}} </option>
              </select>
              <div *ngIf="submitted && f.clase_vehiculo.errors" class="invalid-feedback">
                  <div *ngIf="f.clase_vehiculo.errors.required">Clase del Vehículo es obligatorio</div>
              </div>
            </div>

            <div class="form-group" align="center">
              <button [disabled]="loading" class="btn btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
  `,
})
export class TransitoCreateComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  items = [
    {value:'A', name:"Ciclomotores y Motocicletas"},
    {value:'B', name:"Automoviles"},
    {value:'C', name:"Camiones"},
    {value:'D', name:"Vehiculos de Servicios"},
    {value:'E', name:"Camiones Articulados"},
    {value:'F', name:"Automotores Descripción discapacidad"},
    {value:'G', name:"Maquinaria Agrícola"},
  ];

  constructor(private service: TransitoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
            nro_alta: ['', Validators.required],
            fecha: ['', Validators.required],
            inspector: ['', [Validators.required]],
            infractor: ['', [Validators.required]],
            dominio: ['', Validators.required],
            descripcion: ['', Validators.required],
            clase_vehiculo: ['', Validators.required],
        });
  }

  // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit(value) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }


        this.service.crearInfraccion(value).subscribe(
           data => {
             // refresh the list
             window.location.reload();
             return true;
           },
           error => {
             console.error("Error guardando infraccion!");
           }
        );

    }

}
