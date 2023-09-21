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
      subtitulo: 'Estudiante de Marketing que necesita una pagina de adopción donde poder adoptar una mascota.',
    },
  ];

  constructor() {}

  getPersonasDatos() {
    return this.personasDatos;
  }
}
