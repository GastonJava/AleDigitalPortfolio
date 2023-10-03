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
      link: 'https://gastonjava.github.io/compufolio'
    },
    {
      id: 2,
      nombre: 'Adoptapp',
      tecnologia: 'Diseño UX/UI Figma',
      descripcion: 'Diseño de app de adopcion de mascotas.',
      img: 'img-adoptapp2.png',
      link: 'https://xd.adobe.com/view/37942285-98da-49b0-be9c-f294a9c49e68-62c7/'
    },

    {
      id: 3,
      nombre: 'AEvents - Mindhub',
      tecnologia: 'Javascript Vanilla',
      descripcion: 'Pagina Web de eventos',
      img: 'aevents_portada.png',
      link: 'https://dancing-kataifi-1451df.netlify.app/'
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
