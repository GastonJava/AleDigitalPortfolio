import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/detalles-proyecto-data.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent {
  filasVisibles = 2; // Número de filas a mostrar inicialmente
  filasPorCargar = 2; // Número de filas a cargar cada vez

  mostrarTodasLasFilas = false;

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
      nombre: 'nuevo proyecto',
      tecnologia: 'nueva tegnologia',
      descripcion: 'Diseño de app nuevo.',
      img: 'img-adoptapp2.png',
    },
  ];

  constructor(
    private router: Router,
    private proyectoDataService: ProyectoDataService
  ) {}

  redirectToDetallesProyecto(id: number) {
    console.log('este seria el id ' + id);
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

  cargarMasFilas() {
    if (this.filasVisibles + this.filasPorCargar >= this.proyectoDatos.length) {
      // Mostrar todas las filas
      this.filasVisibles = this.proyectoDatos.length;
      this.mostrarTodasLasFilas = true;
    } else {
      // Mostrar más filas sin llegar a todas
      this.filasVisibles += this.filasPorCargar;
    }
  }

  mostrarMenosFilas() {
    this.filasVisibles = 2;
    this.mostrarTodasLasFilas = false;
  }
}
