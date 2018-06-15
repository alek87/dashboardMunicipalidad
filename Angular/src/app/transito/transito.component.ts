import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transito',
  styleUrls: ['./transito.component.scss'],
  template: `
    <div class="app-transito">
      <table class="table table-bordered" style="width:100%">

        <tr>
          <th>Fecha</th>
          <th>N° Acta</th>
          <th>Clase del Vehículo</th>
          <th>Descripción</th>
        </tr>

        <tr *ngFor="let infracion of infracciones">
          <td> {{ infracion.fecha }} </td>
          <td> {{ infracion.nro_alta }} </td>
          <td> {{ infracion.clase_vehiculo }} </td>
          <td> {{ infracion.descripcion }} </td>
        </tr>

      </table>


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
          placeholder="dd/MM/yyyy" required />
          <div *ngIf="submitted && f.fecha.errors" class="invalid-feedback">
              <div *ngIf="f.fecha.errors.required">Fecha es obligatorio</div>
          </div>
        </div>

        <div class="form-group">
            <label>N° de Alta</label>
            <input type="number" formControlName="nro_alta" class="form-control" [ngClass]="{ 'is-invalid': submitted && f.nro_alta.errors }" />
            <div *ngIf="submitted && f.nro_alta.errors" class="invalid-feedback">
                <div *ngIf="f.nro_alta.errors.required">N° Alta es obligatorio</div>
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

        <div class="form-group">
          <button [disabled]="loading" class="btn btn-primary">Register</button>
        </div>
      </form>


    </div>
  `,
})

export class TransitoComponent implements OnInit {

  infracciones:  Array<object> = [];
  registerForm: FormGroup;
  submitted = false;
  items = [
    {value:'A', name:"Ciclomotores y Motocicletas"},
    {value:'B', name:"Automoviles"},
  ];


  constructor(private service: TransitoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listado_infracciones();
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
            alert("Form invalido");
            return;
        }


        this.service.crearInfraccion(value).subscribe(
           data => {
             // refresh the list
             this.listado_infracciones();
             return true;
           },
           error => {
             console.error("Error guardando infraccion!");
           }
        );


    }

  public  listado_infracciones(){
      this.service.listado_infracciones().subscribe((data:  Array<object>) => {
          this.infracciones  =  data;
      });
  }

  crear_infraccion(nro_alta) {
    let infraccion = {nro_alta: nro_alta};
    this.service.crearInfraccion(infraccion).subscribe(
       data => {
         // refresh the list
         this.listado_infracciones();
         return true;
       },
       error => {
         console.error("Error saving infraccion!");
       }
    );
  }

}
