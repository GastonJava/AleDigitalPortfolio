import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioformRoutingModule } from './usuarioform-routing.module';

import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [CrearComponent, LoginComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioformRoutingModule
  ]
})
export class UsuarioformModule { }
