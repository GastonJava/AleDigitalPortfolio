import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselModule } from '../carrusel/carrusel.module';
import { DetallesProyectoComponent } from './detalles-proyecto.component';



@NgModule({
  declarations: [
    DetallesProyectoComponent
  ],
  imports: [
    CommonModule,
    CarruselModule
  ]
})
export class DetallesProyectoModule { }
