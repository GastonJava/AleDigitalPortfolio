import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/Servicios/proyecto/proyecto.service';
import { ProyectoListaService } from 'src/app/Servicios/proyecto/proyectoLista.service';

/*  llevaremos la lista a un servicio aparte */

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
    public proyectoService: ProyectoService,
    public proyectoListaService: ProyectoListaService
  ) {}

  ngOnInit() {
    // Verificar si hay más de 2 proyectos para mostrar el borde verde
    if (this.proyectoListaService.getProyectoData().length > 2) {
      this.mostrarBordeVerde = true;
    }

    // Verificar si no hay más filas para mostrar el borde rojo
    if (this.proyectoListaService.getProyectoData().length <= this.proyectoService.filasVisibles) {
      this.mostrarBordeRojo = true;
    }
  }

  redirectToDetallesProyecto(id: number) {
    console.log('este seria el id ' + id);
    this.router.navigate(['/proyecto/detalles-proyecto', id]);
  }

  cargarMasFilas() {
    this.proyectoService.cargarMasProyectos();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoListaService.getProyectoData().length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoListaService.getProyectoData().length;
  }

  cargarUnoMas() {
    this.proyectoService.cargarUnoMas();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoListaService.getProyectoData().length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoListaService.getProyectoData().length;
  }

  mostrarMenosFilas() {   
    this.proyectoService.mostrarMenosFilas();
    this.mostrarTodasLasFilas = this.proyectoService.filasVisibles === this.proyectoListaService.getProyectoData().length;
    this.mostrarCargarUno = this.proyectoService.filasVisibles < this.proyectoListaService.getProyectoData().length;
  }
}