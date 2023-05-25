import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioformModule } from './Componentes/usuarioform/usuarioform.module';
import { HeaderModule } from './Componentes/header/header.module';
import { SobreMiModule } from './Componentes/sobre-mi/sobre-mi.module';
import { ProyectoModule } from './Componentes/proyecto/proyecto.module';
import { ExperienciaModule } from './Componentes/experiencia/experiencia.module';
import { EducacionModule } from './Componentes/educacion/educacion.module';
import { HardsoftModule } from './Componentes/hardsoft/hardsoft.module';
import { TemplatesModule } from './Componentes/templates/templates.module';
import { FooterModule } from './Componentes/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SobreMiModule,
    EducacionModule,
    ExperienciaModule,
    ProyectoModule,
    HardsoftModule,
    FooterModule,

    TemplatesModule,
    UsuarioformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
