import { Injectable } from '@angular/core';
import { ProyectoListaService } from './proyectoLista.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  public filasVisibles = 2;
  public filasPorCargar = 2;


  constructor(private proyectoListaService: ProyectoListaService) { }

  getProyectos(): any[] {
    return this.proyectoListaService.getProyectoData().slice(0, this.filasVisibles);
  }

  cargarMasProyectos(): void {
    if (this.filasVisibles + this.filasPorCargar >= this.proyectoListaService.getProyectoData().length) {
      this.filasVisibles = this.proyectoListaService.getProyectoData().length;
    } else {
      this.filasVisibles += this.filasPorCargar;
    }
  }

  cargarUnoMas(): void {
    if (this.filasVisibles < this.proyectoListaService.getProyectoData().length) {
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
