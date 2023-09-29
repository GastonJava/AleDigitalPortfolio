import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeccionProblemaDatosService {
  public seccionProblema: any[] = [
    {
      id: 1,
      problemaTitulo:
        'La falta de un espacio adecuado para mostrar nuestros propios proyectos. ',
      objetivoTitulo:
        'Diseñar un sitio web de Portfolio que sea fácil de usar, que proporcione una navegación clara y con informacion de contactos.',
    },

    {
      id: 2,
      problemaTitulo:
        'Los usuarios acuden al refugio para descubrir que la mascota buscada no está disponible.',
      objetivoTitulo:
        'El objetivo de este proyecto es permitir a los usuarios navegar por la pagina web antes de visitar el refugio.',
    },

    {
      id: 3,
      problemaTitulo:
        'Muchas personas buscan información sobre eventos en línea, pero a menudo esta información está dispersa en varios sitios web y redes sociales.',
      objetivoTitulo:
        'Crear una página web de eventos que informe sobre eventos pasados, presentes y futuros puede variar según el contexto y las necesidades específicas de los usuarios.',
    },
  ];

  constructor() {}

  getSeccionProblema() {
    return this.seccionProblema;
  }
}
