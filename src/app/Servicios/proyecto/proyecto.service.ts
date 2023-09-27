import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public proyectoDatos: any[] = [
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
      nombre: 'nuevo proyecto 3',
      tecnologia: 'nueva tegnologia 3',
      descripcion: 'Diseño de app nuevo 3.',
      img: 'img-adoptapp2.png',
    },

    {
      id: 4,
      nombre: 'nuevo proyecto 4',
      tecnologia: 'nueva tegnologia 4',
      descripcion: 'Diseño de app nuevo 4.',
      img: 'proyecto3.png',
    },
  ];

  public filasVisibles = 2;
  public filasPorCargar = 2;


  constructor() { }

  getProyectos(): any[] {
    return this.proyectoDatos.slice(0, this.filasVisibles);
  }

  cargarMasProyectos(): void {
    if (this.filasVisibles + this.filasPorCargar >= this.proyectoDatos.length) {
      this.filasVisibles = this.proyectoDatos.length;
    } else {
      this.filasVisibles += this.filasPorCargar;
    }
  }

  cargarUnoMas(): void {
    if (this.filasVisibles < this.proyectoDatos.length) {
      this.filasVisibles += 1;
    }
  }

  mostrarMenosFilas(): void {
    this.filasVisibles = 2;
  }

  getImageUrl(imageName: string): string {
    // Construye la URL completa de la imagen utilizando la ruta base
    return `../../../assets/Proyecto/${imageName}`;
  }
}
