import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorCaidoComponent } from './servidor-caido/servidor-caido.component';
import { InvitadoComponent } from './invitado/invitado.component';

@NgModule({
  declarations: [InvitadoComponent, ServidorCaidoComponent],
  imports: [
    CommonModule
  ],
  exports: [InvitadoComponent, ServidorCaidoComponent]
})
export class TemplatesModule { }
