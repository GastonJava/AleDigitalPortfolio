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
      nombre: 'Alej',
      nombre_span: 'P',
      subtitulo: 'subtitulo segundo proyecto.',
    },
  ];

  constructor() {}

  getPersonasDatos() {
    return this.personasDatos;
  }
}
