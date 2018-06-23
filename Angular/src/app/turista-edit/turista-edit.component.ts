import { Component, OnInit } from '@angular/core';

import {TuristaService} from '../turista.service';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-turista-edit',
  templateUrl: './turista-edit.component.html',
  styleUrls: ['./turista-edit.component.scss']
})
export class TuristaEditComponent implements OnInit {

  registerForm: FormGroup;
  id: string;
  datos: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private service: TuristaService) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.id = localStorage.getItem("identificador");

    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      mes: ['', Validators.required],
      cantidad: ['', Validators.required],
    });

    
    this.service.get_registroId(this.id)
     .subscribe( data => {
       this.registerForm.setValue(data);
     });

  }

  onSubmit(value) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }else{
      this.registerForm.reset();
      this.submitted = false;
    }
    this.service.editar_registro(this.id,value)
        .subscribe(
          data => {
            this.router.navigate(['/tables']);
          },
          error => {
            console.log(error);
          });
        
  }

}
