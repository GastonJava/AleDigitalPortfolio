import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mapa-recorrido',
  templateUrl: './mapa-recorrido.component.html',
  styleUrls: ['./mapa-recorrido.component.scss']
})
export class MapaRecorridoComponent {
  
  //@Input() mapaRecorridoData: any;
  @Input() mapaRecorridoData: any;

  ngOnInit() {
    console.log(JSON.stringify(this.mapaRecorridoData));
  }

  


}


