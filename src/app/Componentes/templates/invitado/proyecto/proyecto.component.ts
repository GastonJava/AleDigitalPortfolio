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
  mostrarCargarUno = true;

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

  constructor(
    private router: Router,
    private proyectoDataService: ProyectoDataService
  ) {}

  redirectToDetallesProyecto(id: number) {
    console.log('este seria el id ' + id);
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

  cargarMasFilas() { //Cargar Mas Proyectos
    if (this.filasVisibles + this.filasPorCargar >= this.proyectoDatos.length) {
      // Mostrar todas las filas
      this.filasVisibles = this.proyectoDatos.length;
      this.mostrarTodasLasFilas = true;
      this.mostrarCargarUno = false;
    } else {
      this.filasVisibles += this.filasPorCargar;
      this.mostrarTodasLasFilas = false;

      if (this.filasVisibles < this.proyectoDatos.length) {
        this.mostrarCargarUno = true;
      }
    }
  }

  cargarUnoMas() { // Cargar Siguiente
    this.filasVisibles += 1;
    if (this.filasVisibles >= this.proyectoDatos.length) {
      this.mostrarTodasLasFilas = true;
      this.mostrarCargarUno = false;
    }
  }

  mostrarMenosFilas() { // Ocultar Proyectos
    this.filasVisibles = 2;
    this.mostrarTodasLasFilas = false;

    if (this.filasVisibles < this.proyectoDatos.length) {
      this.mostrarCargarUno = true;
    }

    const filas = document.querySelectorAll(
      '.fila.visible'
    ) as NodeListOf<HTMLElement>;

    filas.forEach((fila) => {
      fila.classList.add('deslizar-arriba');
    });

    setTimeout(() => {
      filas.forEach((fila) => {
        fila.style.paddingTop = '0';
        fila.style.paddingBottom = '0';
      });

      filas.forEach((fila) => {
        fila.classList.remove('visible');
      });

      filas.forEach((fila) => {
        fila.classList.remove('deslizar-arriba');
      });

      if (this.filasVisibles < this.proyectoDatos.length) {
        this.mostrarCargarUno = true;
      }
    }, 1000);
  }
}
