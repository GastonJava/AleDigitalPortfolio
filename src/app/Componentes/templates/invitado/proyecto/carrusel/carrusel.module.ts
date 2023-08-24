import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaruselPersonasComponent } from './carusel-personas/carusel-personas.component';
import { MetasComponent } from './metas/metas.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { MapaRecorridoComponent } from './mapa-recorrido/mapa-recorrido.component';



@NgModule({
  declarations: [
    CaruselPersonasComponent,
    MetasComponent,
    RecorridoComponent,
    MapaRecorridoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaruselPersonasComponent,
    MetasComponent,
    RecorridoComponent,
    MapaRecorridoComponent
  ]
})
export class CarruselModule { }
