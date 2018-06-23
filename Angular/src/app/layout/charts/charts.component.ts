import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { LimpiezaService } from '../../limpieza.service';
import { TuristaService } from '../../turista.service';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    // bar char

    //public listado: any
    public listado:  any;
    public turistas: any;

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
    ];

     //Grafico de anillo
     
    public doughnutChartLabels: string[] = [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic'
    ];

    //public doughnutChartLabels: any[] = ;

    public doughnutChartData: number[] = [];
    //public doughnutChartData: number[] = this.monto;
    public doughnutChartType: string = 'doughnut';

    // Radar
    public radarChartLabels: string[] = [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic'
    ];
    /*
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    */
   public radarChartData: any = []

    public radarChartType: string = 'radar';

    // Grafico de torta
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        this.service.listado_limpieza().subscribe((data:  Array<any>) => {
            var montoLimpieza = data.map(item=>item.Monto);

            this.serviceT.listado_turista().subscribe((data:  Array<any>) => {
                var cantidadTuristas = data.map(item=>item.cantidad);
            //console.log(l);
            this.barChartData.push({data: montoLimpieza, label: 'Presupuesto utilizado en limpieza' },{data: cantidadTuristas, label: 'Cantidad de turistas' });
            });
        });
        
    }

    constructor(private service: LimpiezaService, private serviceT: TuristaService) {}

    public  servicios(){
        this.service.listado_limpieza().subscribe((data:  Array<any>) => {
            var montoLimpieza = data.map(item=>item.Monto);

            this.serviceT.listado_turista().subscribe((data:  Array<any>) => {
                var cantidadTuristas = data.map(item=>item.cantidad);
            //console.log(l);
            this.barChartData.push({data: montoLimpieza, label: 'Presupuesto utilizado en limpieza' },{data: cantidadTuristas, label: 'Cantidad de turistas' });
            this.radarChartData.push({data:montoLimpieza,label:"Presupuesto en pesos"});
        
            
            });
        });
    }

    ngOnInit() {
         this.servicios();
    }
}
