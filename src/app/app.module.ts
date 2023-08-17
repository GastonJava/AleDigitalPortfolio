import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioformModule } from './Componentes/usuarioform/usuarioform.module';
import { TemplatesModule } from './Componentes/templates/templates.module';
import { InvitadoModule } from './Componentes/templates/invitado/invitado.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvitadoModule,
    TemplatesModule,
    UsuarioformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
