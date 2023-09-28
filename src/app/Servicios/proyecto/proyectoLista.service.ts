import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
    

constructor() { }

getProyectoData(){
  return this.proyectoDatos;
}

}
