import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto.component';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto.component';
import { ProyectoRouting } from './proyecto.routing';



@NgModule({
  declarations: [
    ProyectoComponent,
    DetallesProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectoRouting
  ],
  exports: [
    ProyectoComponent
  ]
})
export class ProyectoModule { }
