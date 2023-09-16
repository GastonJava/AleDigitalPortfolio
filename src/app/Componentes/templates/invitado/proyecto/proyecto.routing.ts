import { Routes, RouterModule } from '@angular/router';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto.component';
import { ProyectoComponent } from './proyecto.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  /*{ path: 'detalles', component: ProyectoComponent },*/
  { path: 'proyecto/detalles-proyecto/:id', component: DetallesProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

//export const ProyectoRoutes = RouterModule.forChild(routes);
export class ProyectoRouting { }
