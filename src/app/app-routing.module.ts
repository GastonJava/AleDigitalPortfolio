import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoModule } from './Componentes/templates/invitado/invitado.module';
import { InvitadoComponent } from './Componentes/templates/invitado/invitado.component';

const routes: Routes = [

  //{ path: 'inicio', component: InvitadoComponent },

  { path: 'inicio', loadChildren: () => import('./Componentes/templates/invitado/invitado.module').then(m => m.InvitadoModule) },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  //{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
  /*
  { path: 'inicio', loadChildren: () => import('./Componentes/templates/invitado/invitado.module').then(m => m.InvitadoModule) }, 
    { path: 'inicio', loadChildren: () => import('./Componentes/templates/invitado/invitado.module').then(m => m.InvitadoModule) },

  /*
  
  { path: 'servidor-caido', loadChildren: () => ServidorCaidoModule },
  { path: 'usuario-logueado', loadChildren: () => UsuarioLogueadoModule }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
