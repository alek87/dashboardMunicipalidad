import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { TransitoEditComponent } from '../../transito-edit/transito-edit.component';

import { LimpiezaEditComponent } from '../../limpieza-edit/limpieza-edit.component';

const routes: Routes = [
    { path: '', component: TablesComponent},
    { path: 'infraccion', component: TransitoEditComponent },
    { path: 'limpieza', component: LimpiezaEditComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
