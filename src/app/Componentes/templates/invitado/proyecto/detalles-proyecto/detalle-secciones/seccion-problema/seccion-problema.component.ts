import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-problema',
  templateUrl: './seccion-problema.component.html',
  styleUrls: ['./seccion-problema.component.scss']
})
export class SeccionProblemaComponent {

  @Input() seccionProblemaData: any;

}
