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
  mostrarBordeVerde = false;
  mostrarBordeRojo = false;

  mostrarTodasLasFilas = false;
  mostrarCargarUno = true;

  
  constructor(
    private router: Router,
    public proyectoService: ProyectoService
  ) {}

  ngOnInit() {
    // Verificar si hay más de 2 proyectos para mostrar el borde verde
    if (this.proyectoService.proyectoDatos.length > 2) {
      this.mostrarBordeVerde = true;
    }

    // Verificar si no hay más filas para mostrar el borde rojo
    if (this.proyectoService.proyectoDatos.length <= this.proyectoService.filasVisibles) {
      this.mostrarBordeRojo = true;
    }
  }

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