import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/detalles-proyecto-data.service';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss'],
})
export class DetallesProyectoComponent implements OnInit {

  proyectoid: any;
  caruselid: any;

  detallesProyectoData: any;

  constructor(
    private route: ActivatedRoute,
    private proyectoDetailsService: ProyectoDataService
  ) {}

  ngOnInit() {
    // Obtén el ID de la URL
    //this.proyectoId =+ this.route.snapshot.paramMap.get('id');

    const paramId = this.route.snapshot.paramMap.get('id');
    this.proyectoid = paramId ? +paramId : 0;
    this.caruselid = this.proyectoid;

    this.detallesProyectoData = this.proyectoDetailsService.getDatosProyecto(this.proyectoid);

  }

  //carouselSections: string[] = ['metas', 'recorrido', 'mapa-recorrido'];
  scrollToResumen() {
    console.log('funcionaaaa');
    const resumenElement = document.getElementById('seccion-resumen');
    if (resumenElement) {
      resumenElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
