import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectoListaService {
  private proyectoDatos: any[] = [
    {
      id: 1,
      nombre: 'Portfolio Ale',
      tecnologia: 'Angular 13',
      descripcion: 'Portfolio personal',
      img: 'proyecto3.png',
    },
    {
      id: 2,
      nombre: 'Adoptapp',
      tecnologia: 'Diseño UX/UI Figma',
      descripcion: 'Diseño de app de adopcion de mascotas.',
      img: 'img-adoptapp2.png',
    },

    {
      id: 3,
      nombre: 'AEvents - Mindhub',
      tecnologia: 'Javascript Vanilla',
      descripcion: 'Pagina Web de eventos',
      img: 'aevents_portada.png',
    },

    /*
    {
      id: 4,
      nombre: 'Hockey page - Mindhub',
      tecnologia: 'Javascript Vanilla',
      descripcion: 'Pagina Web de equipo de hockey',
      img: 'img-adoptapp2.png',
    }, */
  ];

  constructor() {}

  getProyectoData() {
    return this.proyectoDatos;
  }
}
