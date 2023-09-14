import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent {

  //carouselSections: string[] = ['metas', 'recorrido', 'mapa-recorrido'];
  scrollToResumen() {
    console.log("funcionaaaa");
    const resumenElement = document.getElementById('seccion-resumen');
    if (resumenElement) {
      resumenElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}