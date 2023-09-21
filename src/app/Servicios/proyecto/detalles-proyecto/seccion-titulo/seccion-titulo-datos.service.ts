import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionTituloDatosService {
  public seccionTitulo: any[] = [
    {
      id: 1,
      titulo: 'Portfolio web',
      span_titulo: 'Compufolio',
      subtitulo: 'Gaston Aleja.',
      enlace: 'https://gastonjava.github.io/compufolio'
    },

    {
      id: 2,
      titulo: 'Diseño UX',
      span_titulo: 'AdoptApp',
      subtitulo: 'Gaston Alejandro', 
      enlace: '#'
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
