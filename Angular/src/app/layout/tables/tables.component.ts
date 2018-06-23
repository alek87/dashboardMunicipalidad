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
      //this.updateData(this.urlEmployee);
        this.listadoL();
        this.listadoT();
      }

    
      public  listadoL(){
          this.service.listado_limpieza().subscribe((data:  Array<object>) => {
              this.listado  =  data;
          });
      }

      public  listadoT(){
        this.serviceT.listado_turista().subscribe((data:  Array<object>) => {
            this.turistas  =  data;
        });
    }

      public borrarServicio(id){
        this.service.borrar_servicio(id).subscribe(
            data => {
              alert("Borrado exitoso!");
              window.location.reload();
              return true;
            },
            error => {
              console.error("Error al eliminar servicio de limpieza!");
            }
         );
      }

      public borrarServicioT(id){
        this.serviceT.borrar_registro(id).subscribe(
            data => {
              alert("Borrado exitoso!");
              window.location.reload();
              return true;
            },
            error => {
              console.error("Error al eliminar el registro!");
            }
         );
      }

      
      public actualizarServicio(id){

        localStorage.removeItem("id");
        localStorage.setItem("id", id.toString());
        this.router.navigate(['edit-limpieza/limpieza']);
      }

      public actualizarServicioT(idT){

        localStorage.removeItem("identificador");
        localStorage.setItem("identificador", idT.toString());
        this.router.navigate(['edit-turista/turista']);
      }

     /* 
    
    
      public actualizarServicio(infraccion: Infraccion): void {
        localStorage.removeItem("editInfraccionID");
        localStorage.setItem("editInfraccionID", infraccion.nro_alta.toString());
        this.router.navigate(['edit-transito/infraccion']);
      };

      */



}
    

