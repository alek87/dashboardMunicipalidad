import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { TransitoEditComponent } from '../../transito-edit/transito-edit.component';

const routes: Routes = [
    { path: '', component: TablesComponent},
    { path: 'infraccion', component: TransitoEditComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
