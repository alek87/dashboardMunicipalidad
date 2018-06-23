import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider7.jpg',
                label: 'Municipalidad de Trelew',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/slider6.jpg',
                label: 'Laguna Chiquichano',
                text: ''
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Edificio Municipal',
                text:
                    ''
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Aplicacion desarrollada en Angular que consume 3 distintas API'S (desarrolladas con: Django-Laravel-RubyOnRails)`
            },
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
