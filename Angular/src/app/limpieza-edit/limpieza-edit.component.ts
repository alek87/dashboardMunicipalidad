import { Component, OnInit } from '@angular/core';
import {LimpiezaService} from '../limpieza.service';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-limpieza-edit',
  templateUrl: './limpieza-edit.component.html',
  styleUrls: ['./limpieza-edit.component.scss']
})
export class LimpiezaEditComponent implements OnInit {

  registerForm: FormGroup;
  id: string;
  datos: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private service: LimpiezaService) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() { 
    this.id = localStorage.getItem("id");

    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      Mes: ['', Validators.required],
      Monto: ['', Validators.required],
    });

    
    this.service.get_limpiezaId(this.id)
     .subscribe( data => {
       this.registerForm.setValue(data);
     });
      
  }

//--------------------------------------------
//public  servicios(){
//  this.service.listado_limpieza().subscribe((data:  Array<any>) => {
//      var montoLimpieza = data.map(item=>item.Monto);

//      this.serviceT.listado_turista().subscribe((data:  Array<any>) => {
//          var cantidadTuristas = data.map(item=>item.cantidad);
      //console.log(l);
//      this.barChartData.push({data: montoLimpieza, label: 'Presupuesto utilizado en limpieza' },{data: cantidadTuristas, label: 'Cantidad de turistas' });
  
      
//      });
//  });
//}
//---------------------------------------------------------------


  onSubmit(value) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.registerForm.reset();
      this.submitted = false;
    }
    this.service.editar_servicio(this.id,value)
        .subscribe(
          data => {
            this.router.navigate(['/tables']);
          },
          error => {
            console.log(error);
          });
        
  }

}
