import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonasDataService {
  public personasDatos: any[] = [
    {
      id: 1,
      nombre: 'Alejandro',
      nombre_span: 'P',
      subtitulo:
        'Alejandro es un estudiante y desarrollador web que necesita un sitio web para mostrar sus proyectos.',
    },

    {
      id: 2,
      nombre: 'Natalia',
      nombre_span: 'J',
      subtitulo:
        'Estudiante de Marketing que necesita una pagina de adopción donde poder adoptar una mascota.',
    },
    {
      id: 3,
      nombre: 'Jorge',
      nombre_span: 'L',
      subtitulo:
        'Joge Lujan es un apasionado organizador de eventos ' + 
        'con una sólida formación en planificación de eventos y gestión de proyectos,' +
        ' Necesita reducir la carga administrativa mediante la gestión de ventas de boletos y listas de asistentes.',
    },
  ];

  constructor() {}

  getPersonasDatos() {
    return this.personasDatos;
  }
}
