import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionDataService {

  public educacionData: any[] = [
    {
      id: 1,
      titulo: 'Curso',
      subtitulo: 'Online Coursera',
      fecha_inicial: '11-12-2019',
      fecha_final: '11-12-2022',
      footer_titulo: 'UX/UI design'
    },

    {
      id: 2,
      titulo: 'Institucion',
      subtitulo: 'Instituto Santo Domingo',
      fecha_inicial: '11-12-2019',
      fecha_final: '11-12-2022',
      footer_titulo: 'Analista De Sistemas'
    },

    {
      id: 3,
      titulo: 'Curso',
      subtitulo: 'Argentina Programa',
      fecha_inicial: '11-12-2019',
      fecha_final: '11-12-2022',
      footer_titulo: 'Desarrollador Java Fullstack'
    },

    {
      id: 4,
      titulo: 'Curso',
      subtitulo: 'Bootcamp MindHub',
      fecha_inicial: '11-02-2023',
      fecha_final: '3-04-2023',
      footer_titulo: 'Front End Javascript'
    },
  ];

constructor() { }

getEducacionData(){
  return this.educacionData;
}

}
