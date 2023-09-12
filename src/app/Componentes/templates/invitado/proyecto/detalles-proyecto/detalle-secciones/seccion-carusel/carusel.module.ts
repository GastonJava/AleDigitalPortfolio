import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetasComponent } from './metas/metas.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { MapaRecorridoComponent } from './mapa-recorrido/mapa-recorrido.component';
import { PersonasComponent } from './personas/personas.component';
import { CaruselComponent } from './carusel.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



@NgModule({
  declarations: [
    CaruselComponent,
    PersonasComponent,
    MetasComponent,
    RecorridoComponent,
    MapaRecorridoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaruselComponent,
    PersonasComponent,
    MetasComponent,
    RecorridoComponent,
    MapaRecorridoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaruselModule { }
