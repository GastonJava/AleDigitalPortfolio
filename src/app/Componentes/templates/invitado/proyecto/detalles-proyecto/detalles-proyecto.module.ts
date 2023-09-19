import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesProyectoComponent } from './detalles-proyecto.component';
import { SeccionTituloComponent } from './detalle-secciones/seccion-titulo/seccion-titulo.component';
import { SeccionResumenComponent } from './detalle-secciones/seccion-resumen/seccion-resumen.component';
import { SeccionProblemaComponent } from './detalle-secciones/seccion-problema/seccion-problema.component';
import { SeccionResponsabilidadComponent } from './detalle-secciones/seccion-responsabilidad/seccion-responsabilidad.component';
import { SeccionUsuarioComponent } from './detalle-secciones/seccion-usuario/seccion-usuario.component';
import { SeccionInvestigacionComponent } from './detalle-secciones/seccion-investigacion/seccion-investigacion.component';
import { SeccionPuntosdebilesComponent } from './detalle-secciones/seccion-puntosdebiles/seccion-puntosdebiles.component';
import { CaruselModule } from './detalle-secciones/seccion-carusel/carusel.module';
import { SeccionPrototipoComponent } from './detalle-secciones/seccion-prototipo/seccion-prototipo.component';





@NgModule({
  declarations: [
    DetallesProyectoComponent,
    SeccionTituloComponent,
    SeccionResumenComponent,
    SeccionProblemaComponent,
    SeccionResponsabilidadComponent,
    SeccionUsuarioComponent,
    SeccionInvestigacionComponent,
    SeccionPuntosdebilesComponent,
    SeccionPrototipoComponent
  ],
  imports: [
    CommonModule,
    CaruselModule
  ]
})
export class DetallesProyectoModule { }
