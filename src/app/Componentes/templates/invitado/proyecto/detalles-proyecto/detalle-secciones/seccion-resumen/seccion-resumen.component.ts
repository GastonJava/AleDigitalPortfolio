import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-resumen',
  templateUrl: './seccion-resumen.component.html',
  styleUrls: ['./seccion-resumen.component.scss']
})
export class SeccionResumenComponent {

  @Input() datosResumen: any;
  
}
