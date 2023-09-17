import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaRecorridoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/mapa-recorrido/mapa-recorrido-data.service';
import { MetasDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/metas/metas-data.service';
import { PersonasDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/personas/personas-data.service';
import { RecorridoDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/recorrido/recorrido-data.service';
import { SeccionCaruselDataService } from 'src/app/Servicios/proyecto/detalles-proyecto/seccion-carusel/seccion-carusel-data.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})
export class CaruselComponent implements OnInit, AfterViewInit {

  @Input() caruselid: any;

  caruselDatosService: any;

  personasData: any;
  metasData: any;
  recorridoData: any;
  mapaRecorridoData: any;

  mapaRecorridoDataArray: any;

  constructor(
    private mapaRecorridoDataService: MapaRecorridoDataService,

    private caruselDataService: SeccionCaruselDataService
    ) {}

  ngOnInit(): void {

    // Obtén la lista de proyectos desde el servicio
    //const caruselMapaRecorridoData = this.mapaRecorridoDataService.getmapaRecorridoDatos();

    this.caruselDatosService = this.caruselDataService.getDatosProyecto(this.caruselid);

    // Busca el proyecto correspondiente en la lista detalledatos
    //this.mapaRecorridoData = caruselMapaRecorridoData.find( maparecorrido => maparecorrido.id === this.caruselid);
    //this.mapaRecorridoDataArray = Array.of(this.mapaRecorridoData);
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
