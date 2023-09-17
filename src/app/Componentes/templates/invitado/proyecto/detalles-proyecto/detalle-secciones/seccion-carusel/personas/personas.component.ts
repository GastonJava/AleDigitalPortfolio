import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  
  @Input() personasData: any;
 
}