import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-responsabilidad',
  templateUrl: './seccion-responsabilidad.component.html',
  styleUrls: ['./seccion-responsabilidad.component.scss']
})
export class SeccionResponsabilidadComponent {
  @Input() datosResponsabilidad: any;
}
