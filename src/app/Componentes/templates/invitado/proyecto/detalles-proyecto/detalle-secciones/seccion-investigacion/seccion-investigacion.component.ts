import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-investigacion',
  templateUrl: './seccion-investigacion.component.html',
  styleUrls: ['./seccion-investigacion.component.scss']
})
export class SeccionInvestigacionComponent {
  @Input() datosInvestigacion: any;
}
