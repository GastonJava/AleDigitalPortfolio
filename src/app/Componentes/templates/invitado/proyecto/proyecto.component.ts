import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent {

  constructor(private router: Router) { }

  redirectToDetallesProyecto() {
    console.log("este seria el id ");
    this.router.navigate(['/proyecto/detalles-proyecto']);
  }

}
