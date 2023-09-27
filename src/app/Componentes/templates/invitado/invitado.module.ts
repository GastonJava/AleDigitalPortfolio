import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoComponent } from './invitado.component';
import { HeaderModule } from './header/header.module';
import { EducacionModule } from './educacion/educacion.module';
import { FooterModule } from './footer/footer.module';

import { SobreMiModule } from './sobre-mi/sobre-mi.module';
import { HardsoftModule } from './hardsoft/hardsoft.module';
import { InvitadoRoutingModule } from './invitado-routing.module';
import { ProyectoModule } from './proyecto/proyecto.module';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SobreMiModule,
    EducacionModule, 
    HardsoftModule,
    ProyectoModule,
    FooterModule,
    InvitadoRoutingModule,

  ],
  declarations: [
    InvitadoComponent,
  ],
})
export class InvitadoModule { }