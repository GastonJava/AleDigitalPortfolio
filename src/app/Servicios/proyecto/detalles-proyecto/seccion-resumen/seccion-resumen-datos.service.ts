import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionResumenDatosService {
  public seccionResumen: any[] = [
    {
      id: 1,
      resumenTitulo:
        'Portfolio creado con Angular y potenciado por NGRX para el manejo de estados.',
      resumenDuracion: 'Desde noviembre 2021 hasta marzo 2022',
      img1: 'proyecto3-a.png',
      img2: 'proyecto3.png',
      // Datos de la sección Resumen para el proyecto 1
    },

    {
      id: 2,
      resumenTitulo:
        'AdoptApp es una pagina sobre peticiones de adopcion de mascotas, en el cual tambien encontraras informacion sobre su cuidado',
      resumenDuracion: 'Desde noviembre 2021 hasta marzo 2022',
      img1: 'adoptapp1.png',
      img2: 'adoptapp2.png',
      // Datos de la sección Resumen para el proyecto 1
    },

    {
      id: 3,
      resumenTitulo:
        'Aevents, es una pagina web donde se podra reibir informacion sobre eventos actuales, pasados y futuros.',
      resumenDuracion: 'Desde marzo 2022 hasta abril 2022',
      img1: 'aevents1.png',
      img2: 'aevents2.png',
      // Datos de la sección Resumen para el proyecto 1
    },
  ];

  constructor() {}

  getSeccionResumen(){
    return this.seccionResumen;
  }
}
