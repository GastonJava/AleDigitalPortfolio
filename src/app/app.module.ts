import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioformModule } from './Componentes/usuarioform/usuarioform.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
