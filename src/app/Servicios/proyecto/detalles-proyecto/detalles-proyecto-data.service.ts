import { Injectable } from '@angular/core';
import { SeccionInvestigacionDataService } from './seccion-investigacion/seccion-investigacion-data.service';
import { SeccionProblemaDatosService } from './seccion-problema/seccion-problema-datos.service';
import { SeccionPuntosdebilesDataService } from './seccion-puntosdebiles/seccion-puntosdebiles-data.service';
import { SeccionResponsabilidadDataService } from './seccion-responsabilidad/seccion-responsabilidad-data.service';
import { SeccionResumenDatosService } from './seccion-resumen/seccion-resumen-datos.service';
import { SeccionTituloDatosService } from './seccion-titulo/seccion-titulo-datos.service';

@Injectable({
  providedIn: 'root',
})
export class ProyectoDataService {

  constructor(
    private seccionTituloService: SeccionTituloDatosService,
    private seccionResumenService: SeccionResumenDatosService,
    private seccionProblemaService: SeccionProblemaDatosService,
    private seccionResponsabilidadService: SeccionResponsabilidadDataService,
    private seccionInvestigacionService: SeccionInvestigacionDataService,
    private seccionPuntosdebilesService: SeccionPuntosdebilesDataService,
  ) {}

  getDatosProyecto(proyectoId: number) {
    const seccionTituloData = this.seccionTituloService.getSeccionTituloData();
    const seccionResumenData = this.seccionResumenService.getSeccionResumen();
    const seccionProblemaData = this.seccionProblemaService.getSeccionProblema();
    const seccionResponsabilidadData = this.seccionResponsabilidadService.getSeccionResponsabilidad();
    const seccionInvestigacionData = this.seccionInvestigacionService.getSeccionInvestigacion();
    const seccionPuntosdebilesData = this.seccionPuntosdebilesService.getSeccionPuntosdebiles();

    return {
      seccionTituloData: seccionTituloData.find(detalle => detalle.id === proyectoId),
      seccionResumenData: seccionResumenData.find(resumen => resumen.id === proyectoId),
      seccionProblemaData: seccionProblemaData.find(problema => problema.id === proyectoId),
      seccionResponsabilidadData: seccionResponsabilidadData.find(responsabilidad => responsabilidad.id === proyectoId),
      seccionInvestigacionData: seccionInvestigacionData.find(investigacion => investigacion.id === proyectoId),
      seccionPuntosdebilesData: seccionPuntosdebilesData.find(puntosdebiles => puntosdebiles.id === proyectoId),
    };
  }
}