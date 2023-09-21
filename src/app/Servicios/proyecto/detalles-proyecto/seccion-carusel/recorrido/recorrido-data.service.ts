import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecorridoDataService {
  public recorridoDatos: any[] = [
    {
      id: 1,
      recorridoTitulo:
        'Un mapa de recorrido de usuario de la experiencia de persona para identificar posibles puntos debiles y oportunidades de mejora.',
    },
    {
      id: 2,
      recorridoTitulo:
        'Mapa de recorrido para oportunidades de mejora del proyecto.',
    },
  ];

  constructor() {}

  getRecorridoDatos(){
    return this.recorridoDatos;
  }
}
