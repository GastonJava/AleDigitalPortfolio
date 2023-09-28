import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/Servicios/proyecto/proyecto.service';
import { ProyectoListaService } from 'src/app/Servicios/proyecto/proyectoLista.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent implements OnInit {
  proyectosSinAbrir!: number;

  mostrarBordeVerde = false;
  mostrarBordeRojo = false;

  mostrarTodasLasFilas = false;
  mostrarCargarUno = true;

  constructor(
    private router: Router,
    public proyectoService: ProyectoService,
    public proyectoListaService: ProyectoListaService
  ) {}

  ngOnInit() {
    // Verificar si hay más de 2 proyectos para mostrar el borde verde
    if (this.proyectoListaService.getProyectoData().length > 2) {
      this.mostrarBordeVerde = true;
    }

    // Verificar si no hay más filas para mostrar el borde rojo
    if (
      this.proyectoListaService.getProyectoData().length <=
      this.proyectoService.getFilasVisibles()
    ) {
      this.mostrarBordeRojo = true;
    }

    // Calcular proyectos sin abrir en la inicialización
    this.proyectosSinAbrir = this.calcularProyectosSinAbrir();
  }

  redirectToDetallesProyecto(id: number) {
    console.log('este sería el id ' + id);
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

  cargarMasFilas() {
    this.proyectoService.cargarMasProyectos();
    this.actualizarEstado();
  }

  cargarUnoMas() {
    this.proyectoService.cargarUnoMas();
    this.actualizarEstado();
  }

  mostrarMenosFilas() {
    this.proyectoService.mostrarMenosFilas();
    this.actualizarEstado();
  }

  private calcularProyectosSinAbrir(): number {
    const filasVisibles = this.proyectoService.getFilasVisibles();
    const proyectosTotales = this.proyectoListaService.getProyectoData().length;

    if (filasVisibles < proyectosTotales) {
      return proyectosTotales - filasVisibles;
    } else {
      return 0;
    }
  }

  private actualizarEstado() {
    this.mostrarTodasLasFilas =
      this.proyectoService.getFilasVisibles() ===
      this.proyectoListaService.getProyectoData().length;
    this.mostrarCargarUno =
      this.proyectoService.getFilasVisibles() <
      this.proyectoListaService.getProyectoData().length;

    // Actualizar proyectos sin abrir
    this.proyectosSinAbrir = this.calcularProyectosSinAbrir();
  }
}