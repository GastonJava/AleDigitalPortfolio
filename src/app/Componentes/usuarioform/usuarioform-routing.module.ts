import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: 'crear', component: CrearComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modal', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioformRoutingModule { }
