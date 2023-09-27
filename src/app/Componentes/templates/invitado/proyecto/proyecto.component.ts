import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/detalles-proyecto-data.service';
import { ProyectoService } from 'src/app/Servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent {
  //filasVisibles = 2; // Número de filas a mostrar inicialmente
  //filasPorCargar = 2; // Número de filas a cargar cada vez

  mostrarTodasLasFilas = false;
  mostrarCargarUno = true;

  /*
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
  ]; */

  constructor(
    private router: Router,
    public proyectoService: ProyectoService
  ) {}

  redirectToDetallesProyecto(id: number) {
    console.log('este seria el id ' + id);
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

  cargarMasFilas() {
    this.proyectoService.cargarMasProyectos();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoService.proyectoDatos.length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoService.proyectoDatos.length;
  }

  cargarUnoMas() {
    this.proyectoService.cargarUnoMas();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoService.proyectoDatos.length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoService.proyectoDatos.length;
  }

  mostrarMenosFilas() {   
    this.proyectoService.mostrarMenosFilas();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoService.proyectoDatos.length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoService.proyectoDatos.length;
  }
}