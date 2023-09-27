import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto.component';
import { DetallesProyectoComponent } from './detalles-proyecto/detalles-proyecto.component';
import { ProyectoRouting } from './proyecto.routing';
import { DetallesProyectoModule } from './detalles-proyecto/detalles-proyecto.module';
import { SharedModule } from 'src/app/Shared/shared.module';




@NgModule({
  declarations: [
    ProyectoComponent,
  ],
  imports: [
    CommonModule,
    ProyectoRouting,
    DetallesProyectoModule,
    SharedModule
  ],
  exports: [
    ProyectoComponent
  ]
})
export class ProyectoModule { }
