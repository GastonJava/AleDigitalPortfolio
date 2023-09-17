import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/detalles-proyecto-data.service';
import { SeccionInvestigacionDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-investigacion/seccion-investigacion-data.service';
import { SeccionProblemaDatosService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-problema/seccion-problema-datos.service';
import { SeccionPuntosdebilesDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-puntosdebiles/seccion-puntosdebiles-data.service';
import { SeccionResponsabilidadDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-responsabilidad/seccion-responsabilidad-data.service';
import { SeccionResumenDatosService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-resumen/seccion-resumen-datos.service';
import { SeccionTituloDatosService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-titulo/seccion-titulo-datos.service';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss'],
})
export class DetallesProyectoComponent implements OnInit {

  proyectoid: any;
  caruselid: any;

  seccionTituloData: any;
  seccionResumenData: any;
  seccionProblemaData: any;
  seccionResponsabilidadData: any;
  seccionInvestigacionData: any;
  seccionPuntosdebilesData: any;

  constructor(
    private route: ActivatedRoute,
    private seccionTituloService: SeccionTituloDatosService,
    private seccionResumenService: SeccionResumenDatosService,
    private seccionProblemaService: SeccionProblemaDatosService,
    private seccionResponsabilidadService: SeccionResponsabilidadDataService,
    private seccionInvestigacionService: SeccionInvestigacionDataService,
    private seccionPuntosdebilesService: SeccionPuntosdebilesDataService,
  ) {}

  ngOnInit() {
    // Obtén el ID de la URL
    //this.proyectoId =+ this.route.snapshot.paramMap.get('id');

    const paramId = this.route.snapshot.paramMap.get('id');
    this.proyectoid = paramId ? +paramId : 0;
    this.caruselid = this.proyectoid;

    // Obtén la lista de proyectos desde el servicio
    const detallesproyectoTitulo = this.seccionTituloService.getSeccionTituloData();
    const detallesproyectoResumen = this.seccionResumenService.getSeccionResumen();
    const detallesproyectoProblema = this.seccionProblemaService.getSeccionProblema();
    const detallesproyectoResponsabilidad = this.seccionResponsabilidadService.getSeccionResponsabilidad();
    const detallesproyectoInvestigacion = this.seccionInvestigacionService.getSeccionInvestigacion();
    const detallesproyectoPuntosdebiles = this.seccionPuntosdebilesService.getSeccionPuntosdebiles();
    

    // Busca el proyecto correspondiente en la lista detalledatos
    this.seccionTituloData = detallesproyectoTitulo.find( detalle => detalle.id == this.proyectoid); 
    this.seccionResumenData = detallesproyectoResumen.find( resumen => resumen.id === this.proyectoid);
    this.seccionProblemaData = detallesproyectoProblema.find( problema => problema.id === this.proyectoid);
    this.seccionResponsabilidadData = detallesproyectoResponsabilidad.find( responsabilidad => responsabilidad.id === this.proyectoid);
    this.seccionInvestigacionData = detallesproyectoInvestigacion.find( investigacion => investigacion.id === this.proyectoid);
    this.seccionPuntosdebilesData = detallesproyectoPuntosdebiles.find( puntosdebiles => puntosdebiles.id === this.proyectoid);         

    console.log(this.seccionTituloData);
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
