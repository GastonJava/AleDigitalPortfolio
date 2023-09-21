import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.scss']
})
export class RecorridoComponent {
  @Input() recorridoData: any;
}
