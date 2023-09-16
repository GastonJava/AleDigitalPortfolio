import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-puntosdebiles',
  templateUrl: './seccion-puntosdebiles.component.html',
  styleUrls: ['./seccion-puntosdebiles.component.scss']
})
export class SeccionPuntosdebilesComponent {

  @Input() seccionPuntosdebilesData: any;

}
