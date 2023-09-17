import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetasDataService {

  public metasDatos: any[] = [
    {
      id: 1,
      metas_li1: 'Mejorar navegacion entre paginas.',
      metas_li2: 'Mejorar el performance de las animaciones.',
      metas_li3: 'Mejorar la transicion entre colores.',

      frustracion_li1: 'No se entiende la navegabilidad entre paginas.',
      frustracion_li2: 'Las animcaiones son lentas.',
      frustracion_li3: 'No se aprecia bien el texto.',
      cita: 'La Programacion y la UX es mi pasion',

    },

    {
      id: 2,
      metas_li1: 'metas segundo proyecto',
      metas_li2: 'metas segundo proyecto',
      metas_li3: 'metas segundo proyecto',

      frustracion_li1: 'frustracion segundo proyecto',
      frustracion_li2: 'frustracion segundo proyecto',
      frustracion_li3: 'frustracion segundo proyecto',
      cita: 'cita quota del segundo proyecto',
    },
  ];

  constructor() { }

  getMetasDatos(){
    return this.metasDatos;
  }

}
