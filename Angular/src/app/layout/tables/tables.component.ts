import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LimpiezaService } from '../../limpieza.service';

import {Router} from "@angular/router";
import { TuristaService } from '../../turista.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    //ngOnInit() {}
    public listado:  Array<object> = [];
    public turistas: Array<object> = [];
  
    
    

    constructor(private router: Router, private service:LimpiezaService, private serviceT:TuristaService) {}


    ngOnInit() {
        this.listadoL();
      }
    
      public  listadoL(){
          this.service.listado_limpieza().subscribe((data:  Array<object>) => {
              this.listado  =  data;
          });
      }

      public borrarServicio(id){
        this.service.borrar_servicio(id).subscribe(
            data => {
              alert("Borrado exitoso!");
              return true;
            },
            error => {
              console.error("Error al eliminar servicio de limpieza!");
            }
         );
      }

      
      public actualizarServicio(id){

        localStorage.removeItem("id");
        localStorage.setItem("id", id.toString());
        this.router.navigate(['edit-limpieza/limpieza']);
          //enviar a un formulario, el cual toma el id para buscar el elemento
          //y muestra los datos, luego de los cambios hace el llamado a put, con
          //el id y el cuerpo de los datos
        
      }

     /* 
    
    
      public actualizarServicio(infraccion: Infraccion): void {
        localStorage.removeItem("editInfraccionID");
        localStorage.setItem("editInfraccionID", infraccion.nro_alta.toString());
        this.router.navigate(['edit-transito/infraccion']);
      };

      */



}
    

