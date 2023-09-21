import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionTituloDatosService {
  public seccionTitulo: any[] = [
    {
      id: 1,
      titulo: 'Portfolio web',
      span_titulo: 'Alternativa',
      subtitulo: 'Gaston Aleja.',
    },

    {
      id: 2,
      titulo: 'Diseño UX',
      span_titulo: 'AdoptApp',
      subtitulo: 'Gaston Alejandro', 
    },
  ];

  constructor() {}

  setSeccionTituloData(data: any) {
    //this.proyectoData = data;
  }

  getSeccionTituloData() {
    return this.seccionTitulo;
  }
}
