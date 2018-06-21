import { Component, OnInit } from '@angular/core';
import {TransitoService} from '../transito.service';
import {Infraccion} from '../infraccion';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-transito-edit',
  templateUrl: './transito-edit.component.html',
  styleUrls: ['./transito-edit.component.scss']
})
export class TransitoEditComponent implements OnInit {

 selectedInfraccion: Infraccion;
 registerForm: FormGroup;
 items = [
   {value:'A', name:"Ciclomotores y Motocicletas"},
   {value:'B', name:"Automoviles"},
   {value:'C', name:"Camiones"},
   {value:'D', name:"Vehiculos de Servicios"},
   {value:'E', name:"Camiones Articulados"},
   {value:'F', name:"Automotores Descripción discapacidad"},
   {value:'G', name:"Maquinaria Agrícola"},
 ];


 constructor(private formBuilder: FormBuilder,private router: Router, private service: TransitoService) { }

 ngOnInit() {
   let transaccionId = localStorage.getItem("editInfraccionID");
   if(!transaccionId) {
     alert("Acción Inválida.")
     //this.router.navigate(['edit-transito']);
     return;
   }
   this.registerForm = this.formBuilder.group({
     nro_alta: ['', Validators.required],
     fecha: ['', Validators.required],
     inspector: ['', [Validators.required]],
     infractor: ['', [Validators.required]],
     dominio: ['', Validators.required],
     descripcion: ['', Validators.required],
     clase_vehiculo: ['', Validators.required],
   });

   this.service.getInfraccion(+transaccionId)
     .subscribe( data => {
       this.registerForm.setValue(data);
     });

 }

 onSubmit() {
   this.service.actualizarInfraccion(this.registerForm.value)
       .pipe(first())
       .subscribe(
         data => {
           this.router.navigate(['/tables']);
         },
         error => {
           console.log(error);
         });
 }

}
