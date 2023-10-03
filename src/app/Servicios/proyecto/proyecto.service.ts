import { Injectable } from '@angular/core';
import { ProyectoListaService } from './proyectoLista.service';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private filasVisibles = 2;
  private filasPorCargar = 2;

  constructor(private proyectoListaService: ProyectoListaService) {}

  getProyectos(): any[] {
    return this.getProyectosVisibles();
  }

  cargarMasProyectos(): void {
    const totalProyectos = this.proyectoListaService.getProyectoData().length;

    if (this.filasVisibles + this.filasPorCargar >= totalProyectos) {
      this.filasVisibles = totalProyectos;
    } else {
      this.filasVisibles += this.filasPorCargar;
    }
  }

  cargarUnoMas(): void {
    const totalProyectos = this.proyectoListaService.getProyectoData().length;

    if (this.filasVisibles < totalProyectos) {
      this.filasVisibles += 1;
    }
  }

  mostrarMenosFilas(): void {
    this.filasVisibles = 2;
  }

  // Getter and setters

  getFilasVisibles(): number {
    return this.filasVisibles;
  }

  getProyectosSinAbrir(): number {
    const totalProyectos = this.proyectoListaService.getProyectoData().length;
    return this.calcularProyectosSinAbrir(this.filasVisibles, totalProyectos);
  }

  getImageUrl(imageName: string): string {
    // Construye la URL completa de la imagen utilizando la ruta base
    return `../../../assets/Proyecto/${imageName}`;
  }

  // Método privado para obtener los proyectos visibles
  private getProyectosVisibles(): any[] {
    return this.proyectoListaService
      .getProyectoData()
      .slice(0, this.filasVisibles);
  }

  // Método privado para calcular la cantidad de proyectos sin abrir
  private calcularProyectosSinAbrir(
    filasVisibles: number,
    totalProyectos: number
  ): number {
    if (filasVisibles < totalProyectos) {
      return totalProyectos - filasVisibles;
    } else {
      return 0;
    }
  }
}